"use client";

import { useState } from "react";
import Link from "next/link";

const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
const ACCENT = "#0ABAB5";

// ── Контакты ──────────────────────────────────────────────────────────────────
const EMAIL  = "prostranstvo_ecom@mail.ru";
const PHONE  = "+7 987 161 42 42";
const TG_ME  = "https://t.me/prostranstvo_mp";      // личный Telegram
const TG_CH  = "https://t.me/prostranstvo_channel"; // Telegram-канал

// ── QR: положи файлы в /public/ с этими именами ──────────────────────────────
const QR_TG   = "/qr-telegram.jpg";   // QR личного Telegram
const QR_CH   = "/qr-channel.jpg";    // QR Telegram-канала

// ── Иконки ────────────────────────────────────────────────────────────────────
function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="4" width="16" height="12" rx="2" stroke={ACCENT} strokeWidth="1.5"/>
      <path d="M2 7l8 5 8-5" stroke={ACCENT} strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}
function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M4 2h4l1.5 4-2 1.5c1 2 3 4 5 5l1.5-2 4 1.5V16c0 1-1 2-2 2C6 18 2 10 2 4c0-1 1-2 2-2z" stroke={ACCENT} strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}
// ── Карточка контакта ─────────────────────────────────────────────────────────
function ContactCard({ icon, label, value, href }: {
  icon: React.ReactNode; label: string; value: string; href: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", flexDirection: "column", gap: "12px",
        padding: "clamp(20px, 2.5vh, 28px) clamp(20px, 1.8vw, 28px)",
        background: hovered ? "rgba(10,186,181,0.07)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? "rgba(10,186,181,0.35)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "clamp(14px, 1.2vw, 20px)",
        textDecoration: "none",
        transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
        boxShadow: hovered ? "0 0 0 1px rgba(10,186,181,0.15), 0 8px 40px rgba(10,186,181,0.1)" : "none",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        cursor: "pointer",
        flex: 1,
      }}
    >
      <div style={{
        width: "38px", height: "38px", borderRadius: "10px",
        background: "rgba(10,186,181,0.1)",
        border: "1px solid rgba(10,186,181,0.2)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {icon}
      </div>
      <div>
        <div style={{
          fontFamily: font, fontSize: "clamp(10px, 0.7vw, 12px)",
          letterSpacing: "0.1em", textTransform: "uppercase" as const,
          color: "rgba(255,255,255,0.3)", marginBottom: "4px",
        }}>{label}</div>
        <div style={{
          fontFamily: font, fontSize: "clamp(13px, 1.1vw, 18px)",
          color: hovered ? "#ffffff" : "rgba(255,255,255,0.8)",
          letterSpacing: "-0.02em", lineHeight: 1.2,
          transition: "color 0.2s",
          wordBreak: "break-all",
        }}>{value}</div>
      </div>
    </a>
  );
}

// ── QR-карточка ───────────────────────────────────────────────────────────────
function QrCard({ src, label, href }: { src: string; label: string; href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", flexDirection: "column", alignItems: "center", gap: "14px",
        padding: "clamp(16px, 2vh, 24px)",
        background: hovered ? "rgba(10,186,181,0.07)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? "rgba(10,186,181,0.4)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "clamp(14px, 1.2vw, 20px)",
        textDecoration: "none",
        transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
        boxShadow: hovered ? "0 0 0 1px rgba(10,186,181,0.15), 0 8px 40px rgba(10,186,181,0.12)" : "none",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        cursor: "pointer",
        flex: 1,
      }}
    >
      {/* QR image */}
      <div style={{
        width: "clamp(100px, 10vw, 148px)",
        height: "clamp(100px, 10vw, 148px)",
        borderRadius: "10px",
        overflow: "hidden",
        background: "#ffffff",
        padding: "8px",
        boxShadow: hovered ? `0 0 24px rgba(10,186,181,0.3)` : "none",
        transition: "box-shadow 0.2s",
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={label} loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
      </div>
      {/* Label */}
      <div style={{ textAlign: "center" }}>
        <div style={{
          fontFamily: font, fontSize: "clamp(10px, 0.7vw, 12px)",
          letterSpacing: "0.1em", textTransform: "uppercase" as const,
          color: "rgba(255,255,255,0.3)", marginBottom: "4px",
        }}>
          {label === "Telegram" ? "Написать" : "Канал"}
        </div>
        <div style={{
          fontFamily: font, fontSize: "clamp(12px, 0.9vw, 15px)",
          color: hovered ? ACCENT : "rgba(255,255,255,0.6)",
          letterSpacing: "-0.01em", transition: "color 0.2s",
        }}>
          {label}
        </div>
      </div>
      {/* Hover arrow hint */}
      <div style={{
        fontSize: "11px", color: ACCENT,
        opacity: hovered ? 1 : 0, transition: "opacity 0.2s",
        letterSpacing: "0.02em",
      }}>
        Открыть ↗
      </div>
    </a>
  );
}

// ── CTA кнопка с glow ─────────────────────────────────────────────────────────
function CtaButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href="/form"
      prefetch
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: "10px",
        padding: "clamp(14px, 2vh, 20px) clamp(32px, 3vw, 52px)",
        borderRadius: "100px",
        background: hovered ? "#0ABAB5" : "rgba(10,186,181,0.12)",
        border: "1.5px solid rgba(10,186,181,0.7)",
        color: hovered ? "#071518" : "#ffffff",
        fontFamily: font,
        fontWeight: 500,
        fontSize: "clamp(14px, 1.1vw, 20px)",
        letterSpacing: "-0.02em",
        textDecoration: "none",
        cursor: "pointer",
        transition: "background 0.22s, color 0.22s, box-shadow 0.22s",
        boxShadow: hovered
          ? "0 0 0 2px rgba(10,186,181,0.6), 0 0 40px rgba(10,186,181,0.55), 0 0 80px rgba(10,186,181,0.25)"
          : "0 0 0 1px rgba(10,186,181,0.15)",
        whiteSpace: "nowrap" as const,
        flexShrink: 0,
      }}
    >
      Заполнить заявку
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
        style={{ transform: hovered ? "translateX(3px)" : "translateX(0)", transition: "transform 0.2s" }}>
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Link>
  );
}

// ── Основной компонент ────────────────────────────────────────────────────────
export default function ContactsSection() {
  return (
    <section className="section-contacts" style={{
      position: "relative",
      minHeight: "max(100svh, 720px)",
      background: "linear-gradient(160deg, #071518 0%, #0D2526 60%, #071518 100%)",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
    }}>
      {/* Ambient glow blobs */}
      <div style={{ position: "absolute", width: "65vw", height: "65vw", left: "-20vw", top: "-20vw", background: "radial-gradient(circle, rgba(10,186,181,0.09) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: "50vw", height: "50vw", right: "-10vw", bottom: "-15vw", background: "radial-gradient(circle, rgba(10,186,181,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />

      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(10,186,181,0.1) 1px, transparent 1px)",
        backgroundSize: "40px 40px", opacity: 0.3,
      }} />

      <div style={{
        position: "relative", zIndex: 1,
        width: "min(1400px, calc(100vw - 80px))",
        margin: "0 auto",
        paddingTop: "clamp(60px, 9vh, 110px)",
        paddingBottom: "clamp(60px, 9vh, 110px)",
      }}>

        {/* ── Heading row ── */}
        <div className="contacts-heading-row" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          columnGap: "clamp(40px, 6vw, 120px)",
          alignItems: "end",
          marginBottom: "clamp(40px, 6vh, 64px)",
        }}>
          <div>
            <p style={{
              fontFamily: font, fontSize: "clamp(11px, 0.83vw, 14px)",
              color: ACCENT, letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              margin: "0 0 clamp(14px, 2vh, 22px) 0",
            }}>Контакты</p>
            <h2 style={{
              fontFamily: font, fontWeight: 400,
              fontSize: "clamp(36px, 4.8vw, 92px)",
              lineHeight: 0.92, letterSpacing: "-0.04em",
              color: "#ffffff", margin: 0,
            }}>
              Свяжитесь<br />
              <span style={{ color: "rgba(255,255,255,0.38)" }}>с нами</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "16px", paddingBottom: "4px" }}>
            <p style={{
              fontFamily: font, fontSize: "clamp(14px, 1.1vw, 20px)",
              lineHeight: 1.5, color: "rgba(255,255,255,0.45)",
              margin: 0, maxWidth: "520px",
              letterSpacing: "-0.01em",
            }}>
              Ответим на вопросы, расскажем об условиях работы и запишем на бесплатный разбор
            </p>
            <CtaButton />
          </div>
        </div>

        {/* ── Divider ── */}
        <div style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(10,186,181,0.2) 30%, rgba(10,186,181,0.2) 70%, transparent)",
          marginBottom: "clamp(36px, 5vh, 56px)",
        }} />

        {/* ── Contacts + QR grid ── */}
        <div className="contacts-card-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "clamp(12px, 1.25vw, 20px)",
        }}>
          <ContactCard
            icon={<IconMail />}
            label="Почта"
            value={EMAIL}
            href={`mailto:${EMAIL}`}
          />
          <ContactCard
            icon={<IconPhone />}
            label="Телефон"
            value={PHONE}
            href={`tel:${PHONE.replace(/\s/g, "")}`}
          />
          <QrCard
            src={QR_TG}
            label="Telegram"
            href={TG_ME}
          />
          <QrCard
            src={QR_CH}
            label="Тг-канал"
            href={TG_CH}
          />
        </div>

      </div>
    </section>
  );
}
