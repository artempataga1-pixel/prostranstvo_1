import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, phone, telegram, marketplace, revenue, task } = body;

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return NextResponse.json({ error: "Bot not configured" }, { status: 500 });
  }

  const text = [
    "🟢 <b>Новая заявка — PROстранство</b>",
    "",
    `👤 <b>Имя:</b> ${name || "—"}`,
    `📞 <b>Телефон:</b> ${phone || "—"}`,
    `✈️ <b>Telegram:</b> ${telegram || "—"}`,
    `🛒 <b>Маркетплейс:</b> ${marketplace || "—"}`,
    `💰 <b>Оборот:</b> ${revenue || "—"}`,
    `📝 <b>Задача:</b> ${task || "—"}`,
  ].join("\n");

  const res = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    return NextResponse.json({ error: err }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
