import { createHmac, randomInt, timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

interface RateLimitState {
  count: number;
  resetAt: number;
}

const RATE_LIMIT = 10;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_COOKIE = "lead_rl_v1";

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function getSigningSecret(): string {
  return process.env.LEAD_SIGNING_SECRET ?? process.env.TELEGRAM_BOT_TOKEN ?? "local-dev-lead-secret";
}

function signPayload(payload: string): string {
  return createHmac("sha256", getSigningSecret()).update(payload).digest("base64url");
}

function encodeRateLimitState(state: RateLimitState): string {
  const payload = Buffer.from(JSON.stringify(state)).toString("base64url");
  return `${payload}.${signPayload(payload)}`;
}

function decodeRateLimitState(value?: string): RateLimitState | null {
  if (!value) return null;

  const [payload, signature] = value.split(".");
  if (!payload || !signature) return null;

  const expectedSignature = signPayload(payload);
  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expectedSignature);

  if (signatureBuffer.length !== expectedBuffer.length) return null;
  if (!timingSafeEqual(signatureBuffer, expectedBuffer)) return null;

  try {
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as Partial<RateLimitState>;
    if (
      typeof parsed.count !== "number" ||
      !Number.isFinite(parsed.count) ||
      parsed.count < 0 ||
      typeof parsed.resetAt !== "number" ||
      !Number.isFinite(parsed.resetAt) ||
      parsed.resetAt <= 0
    ) {
      return null;
    }

    return {
      count: Math.floor(parsed.count),
      resetAt: Math.floor(parsed.resetAt),
    };
  } catch {
    return null;
  }
}

function getRateLimitState(req: NextRequest): RateLimitState {
  const now = Date.now();
  const parsed = decodeRateLimitState(req.cookies.get(RATE_LIMIT_COOKIE)?.value);

  if (!parsed || now >= parsed.resetAt) {
    return {
      count: 0,
      resetAt: now + RATE_WINDOW_MS,
    };
  }

  return parsed;
}

function incrementRateLimitState(state: RateLimitState): RateLimitState {
  return {
    ...state,
    count: state.count + 1,
  };
}

function withRateLimitCookie(response: NextResponse, state: RateLimitState): NextResponse {
  response.cookies.set({
    name: RATE_LIMIT_COOKIE,
    value: encodeRateLimitState(state),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: new Date(state.resetAt),
  });

  return response;
}

function getMoscowDateParts(date: Date) {
  const formatter = new Intl.DateTimeFormat("ru-RU", {
    timeZone: "Europe/Moscow",
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });

  const parts = formatter.formatToParts(date);
  const lookup = Object.fromEntries(parts.map((part) => [part.type, part.value]));

  return {
    yy: lookup.year ?? "00",
    mm: lookup.month ?? "00",
    dd: lookup.day ?? "00",
  };
}

function getOrderNumber(): string {
  const now = new Date();
  const { yy, mm, dd } = getMoscowDateParts(now);
  const timestamp = Date.now();
  const entropy = String(randomInt(100, 1000));
  return `${yy}${mm}${dd}-${timestamp}${entropy}`;
}

function getMoscowTime(): string {
  return new Date().toLocaleString("ru-RU", {
    timeZone: "Europe/Moscow",
    day: "2-digit", month: "2-digit", year: "numeric",
    hour: "2-digit", minute: "2-digit", second: "2-digit",
  }) + " МСК";
}

const ALLOWED_MARKETPLACES = new Set([
  "Wildberries", "Ozon", "Яндекс Маркет", "AliExpress",
  "Несколько площадок", "Другое",
]);
const ALLOWED_REVENUES = new Set([
  "до 500 тыс. ₽/мес", "500 тыс. — 3 млн ₽/мес",
  "3 — 10 млн ₽/мес", "10 — 30 млн ₽/мес", "от 30 млн ₽/мес",
]);

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin");
  const allowedOrigin = process.env.ALLOWED_ORIGIN;
  if (origin && allowedOrigin && origin !== allowedOrigin) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const currentRateLimit = getRateLimitState(req);
  if (currentRateLimit.count >= RATE_LIMIT) {
    return withRateLimitCookie(
      NextResponse.json({ error: "Too many requests" }, { status: 429 }),
      currentRateLimit,
    );
  }

  const nextRateLimit = incrementRateLimitState(currentRateLimit);
  const json = (body: Record<string, unknown>, init?: ResponseInit) =>
    withRateLimitCookie(NextResponse.json(body, init), nextRateLimit);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, phone, telegram, marketplace, revenue, task } = body;

  if (typeof name !== "string" || name.trim().length === 0 || name.length > 100)
    return json({ error: "Invalid name" }, { status: 400 });
  if (typeof phone !== "string" || !/^[\d\s\+\-\(\)]{7,20}$/.test(phone.trim()))
    return json({ error: "Invalid phone" }, { status: 400 });
  if (telegram !== undefined && telegram !== "" && (typeof telegram !== "string" || telegram.length > 50))
    return json({ error: "Invalid telegram" }, { status: 400 });
  if (typeof marketplace !== "string" || !ALLOWED_MARKETPLACES.has(marketplace))
    return json({ error: "Invalid marketplace" }, { status: 400 });
  if (revenue !== undefined && revenue !== "" && (typeof revenue !== "string" || !ALLOWED_REVENUES.has(revenue)))
    return json({ error: "Invalid revenue" }, { status: 400 });
  if (task !== undefined && task !== "" && (typeof task !== "string" || task.length > 2000))
    return json({ error: "Task too long" }, { status: 400 });

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!botToken || !chatId) {
    return json({ error: "Bot not configured" }, { status: 500 });
  }

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

  let res: Response;
  try {
    res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
    });
  } catch (err) {
    console.error("[lead] Telegram fetch error:", err);
    return json({ error: "Ошибка отправки" }, { status: 502 });
  }

  if (!res.ok) {
    console.error("[lead] Telegram API error:", res.status, res.statusText);
    return json({ error: "Ошибка отправки" }, { status: 502 });
  }

  return json({ ok: true, orderNum });
}
