import { NextRequest, NextResponse } from "next/server";

// ── HTML Injection protection ─────────────────────────────────────────────────
function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ── Simple in-memory rate limiting: 3 requests per IP per 10 minutes ─────────
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT = 10;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (rateLimitMap.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (hits.length >= RATE_LIMIT) return true;
  hits.push(now);
  rateLimitMap.set(ip, hits);
  return false;
}

// ── Order counter (in-memory, resets on restart — достаточно для MVP) ────────
let orderCounter = 0;

function getOrderNumber(): string {
  orderCounter += 1;
  const now = new Date();
  const yy = String(now.getFullYear()).slice(2);
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const seq = String(orderCounter).padStart(3, "0");
  return `${yy}${mm}${dd}-${seq}`;
}

function getMoscowTime(): string {
  return new Date().toLocaleString("ru-RU", {
    timeZone: "Europe/Moscow",
    day: "2-digit", month: "2-digit", year: "numeric",
    hour: "2-digit", minute: "2-digit", second: "2-digit",
  }) + " МСК";
}

// ── Allowed values (mirrors the frontend) ────────────────────────────────────
const ALLOWED_MARKETPLACES = new Set([
  "Wildberries", "Ozon", "Яндекс Маркет", "AliExpress",
  "Несколько площадок", "Другое",
]);
const ALLOWED_REVENUES = new Set([
  "до 500 тыс. ₽/мес", "500 тыс. — 3 млн ₽/мес",
  "3 — 10 млн ₽/мес", "10 — 30 млн ₽/мес", "от 30 млн ₽/мес",
]);

export async function POST(req: NextRequest) {
  // ── Origin check (CSRF protection) ───────────────────────────────────────────
  const origin = req.headers.get("origin");
  const allowedOrigin = process.env.ALLOWED_ORIGIN;
  if (origin && allowedOrigin && origin !== allowedOrigin) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // ── Rate limiting ────────────────────────────────────────────────────────────
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  // ── Parse body ───────────────────────────────────────────────────────────────
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, phone, telegram, marketplace, revenue, task } = body;

  // ── Validation ───────────────────────────────────────────────────────────────
  if (typeof name !== "string" || name.trim().length === 0 || name.length > 100)
    return NextResponse.json({ error: "Invalid name" }, { status: 400 });
  if (typeof phone !== "string" || !/^[\d\s\+\-\(\)]{7,20}$/.test(phone.trim()))
    return NextResponse.json({ error: "Invalid phone" }, { status: 400 });
  if (telegram !== undefined && telegram !== "" && (typeof telegram !== "string" || telegram.length > 50))
    return NextResponse.json({ error: "Invalid telegram" }, { status: 400 });
  if (typeof marketplace !== "string" || !ALLOWED_MARKETPLACES.has(marketplace))
    return NextResponse.json({ error: "Invalid marketplace" }, { status: 400 });
  if (revenue !== undefined && revenue !== "" && (typeof revenue !== "string" || !ALLOWED_REVENUES.has(revenue)))
    return NextResponse.json({ error: "Invalid revenue" }, { status: 400 });
  if (task !== undefined && task !== "" && (typeof task !== "string" || task.length > 2000))
    return NextResponse.json({ error: "Task too long" }, { status: 400 });

  // ── Telegram config ──────────────────────────────────────────────────────────
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!botToken || !chatId) {
    return NextResponse.json({ error: "Bot not configured" }, { status: 500 });
  }

  // ── Build message ────────────────────────────────────────────────────────────
  const orderNum = getOrderNumber();
  const time = getMoscowTime();

  const text = [
    `🟢 <b>Новая заявка #${orderNum}</b>`,
    `🕐 <b>Время:</b> ${time}`,
    "",
    `👤 <b>Имя:</b> ${esc(name.trim())}`,
    `📞 <b>Телефон:</b> ${esc((phone as string).trim())}`,
    `✈️ <b>Telegram:</b> ${telegram ? esc(telegram as string) : "—"}`,
    `🛒 <b>Маркетплейс:</b> ${esc(marketplace)}`,
    `💰 <b>Оборот:</b> ${revenue ? esc(revenue as string) : "—"}`,
    `📝 <b>Задача:</b> ${task ? esc(task as string) : "—"}`,
  ].join("\n");

  // ── Send ─────────────────────────────────────────────────────────────────────
  let res: Response;
  try {
    res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
    });
  } catch (err) {
    console.error("[lead] Telegram fetch error:", err);
    return NextResponse.json({ error: "Ошибка отправки" }, { status: 502 });
  }

  if (!res.ok) {
    console.error("[lead] Telegram API error:", res.status, res.statusText);
    return NextResponse.json({ error: "Ошибка отправки" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, orderNum });
}
