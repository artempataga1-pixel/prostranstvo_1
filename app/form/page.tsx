"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import LeadForm from "../components/LeadForm";
import FloatingShapes from "../components/FloatingShapes";
import InfinityAnimation from "../components/InfinityAnimation";
import ShaderBackground from "../components/ShaderBackground";

const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
const ACCENT = "#0ABAB5";

const BENEFITS = [
  { text: "Анализ воронки продаж и рекламных кампаний" },
  { text: "Аудит карточек товаров и контента" },
  { text: "Оценка финансовых показателей и юнит-экономики" },
  { text: "Конкретные рекомендации на следующие 30 дней" },
];

const STATS = [
  { value: "+200%", label: "рост выручки" },
  { value: "50+", label: "кейсов" },
  { value: "30 мин", label: "бесплатно" },
];

export default function FormPage() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [cardHover, setCardHover] = useState(false);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }

  return (
    <main
      style={{
        minHeight: "100svh",
        background: "#071518",
        position: "relative",
        overflow: "hidden",
        fontFamily: font,
      }}
    >
      {/* ── bg.png — same as hero ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        src="/bg.png"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.55,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── WebGL shader — same teal nebula as hero ── */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}>
        <ShaderBackground />
      </div>

      {/* ── Floating shapes ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, opacity: 0.25, pointerEvents: "none" }}>
        <FloatingShapes />
      </div>

      {/* ── Ambient glow blobs ── */}
      <div style={{ position: "absolute", pointerEvents: "none", inset: 0, zIndex: 1 }}>
        <div style={{
          position: "absolute", width: "60vw", height: "60vw",
          left: "-15vw", top: "-15vw",
          background: "radial-gradient(circle, rgba(10,186,181,0.1) 0%, transparent 65%)",
        }} />
        <div style={{
          position: "absolute", width: "50vw", height: "50vw",
          right: "-8vw", bottom: "-8vw",
          background: "radial-gradient(circle, rgba(10,186,181,0.07) 0%, transparent 65%)",
        }} />
      </div>

      {/* ── Scanning top beam ── */}
      <style>{`
        @keyframes form-scan {
          0%   { background-position: -100% 0; opacity: 0.5; }
          50%  { background-position: 100% 0;  opacity: 1;   }
          100% { background-position: 300% 0;  opacity: 0.5; }
        }
        @keyframes form-beam-travel {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .form-stat-val {
          font-family: ${font};
          font-weight: 400;
          font-size: clamp(28px, 3vw, 56px);
          line-height: 1;
          letter-spacing: -0.04em;
          color: ${ACCENT};
        }
        .form-stat-label {
          font-family: ${font};
          font-size: clamp(11px, 0.75vw, 14px);
          color: rgba(255,255,255,0.35);
          letter-spacing: -0.01em;
          margin-top: 4px;
        }
        .form-benefit {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          animation: fade-in-up 0.6s ease both;
        }
        .form-benefit-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${ACCENT};
          box-shadow: 0 0 8px 2px rgba(10,186,181,0.7);
          flex-shrink: 0;
          margin-top: 7px;
        }
        .form-back-link {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          color: rgba(255,255,255,0.4);
          font-family: ${font};
          font-size: clamp(13px, 0.9vw, 16px);
          letter-spacing: -0.02em;
          transition: color 0.2s;
        }
        .form-back-link:hover { color: #ffffff; }
      `}</style>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1.5px",
        background: "linear-gradient(90deg, transparent 0%, rgba(10,186,181,0.9) 50%, transparent 100%)",
        backgroundSize: "200% 100%",
        animation: "form-scan 5s ease-in-out infinite",
        zIndex: 20,
      }} />

      {/* ── Header ── */}
      <header style={{
        position: "relative", zIndex: 10,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "clamp(18px, 2.5vh, 28px) clamp(24px, 3.125vw, 60px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        background: "rgba(7,21,24,0.3)",
      }}>
        <Link href="/" className="form-back-link">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Вернуться
        </Link>

        <div style={{
          fontFamily: font, fontWeight: 400,
          fontSize: "clamp(18px, 1.5vw, 28px)",
          letterSpacing: "-0.04em", color: "#ffffff",
          userSelect: "none",
        }}>
          <span style={{ color: ACCENT }}>PRO</span>странство
        </div>

        <div style={{ width: "clamp(60px, 6.09vw, 117px)", position: "relative" }}>
          <div style={{
            position: "absolute", right: 0, top: "50%",
            transform: "translateY(-50%)",
            width: "clamp(60px, 6.09vw, 117px)",
            height: "clamp(31px, 3.125vw, 60px)",
            pointerEvents: "none",
          }}>
            <InfinityAnimation />
          </div>
        </div>
      </header>

      {/* ── Main content ── */}
      <div className="form-page-layout" style={{
        position: "relative", zIndex: 5,
        width: "min(1360px, calc(100vw - 48px))",
        margin: "0 auto",
        paddingTop: "clamp(44px, 6vh, 72px)",
        paddingBottom: "clamp(60px, 8vh, 100px)",
        display: "grid",
        gridTemplateColumns: "1fr 1.1fr",
        columnGap: "clamp(36px, 4.5vw, 88px)",
        alignItems: "start",
      }}>

        {/* ═══════════════════════════════
            LEFT COLUMN
        ═══════════════════════════════ */}
        <div style={{ animation: "fade-in-up 0.7s ease both" }}>

          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "7px 14px",
            borderRadius: "300px",
            background: "rgba(10,186,181,0.08)",
            border: "1px solid rgba(10,186,181,0.22)",
            marginBottom: "clamp(18px, 2.5vh, 28px)",
          }}>
            <span style={{
              width: "6px", height: "6px", borderRadius: "50%",
              background: ACCENT,
              boxShadow: "0 0 8px 2px rgba(10,186,181,0.8)",
              display: "inline-block",
            }} />
            <span style={{
              fontFamily: font, fontSize: "clamp(10px, 0.72vw, 13px)",
              letterSpacing: "0.1em", textTransform: "uppercase" as const,
              color: ACCENT,
            }}>
              Бесплатный разбор
            </span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontFamily: font, fontWeight: 400,
            fontSize: "clamp(36px, 4.8vw, 92px)",
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            color: "#ffffff",
            marginBottom: "clamp(18px, 2.5vh, 28px)",
            marginTop: 0,
          }}>
            Разберём<br />
            <span style={{ color: "rgba(255,255,255,0.45)" }}>ваш кабинет</span><br />
            и найдём<br />
            точки роста
          </h1>

          {/* Subheading */}
          <p style={{
            fontFamily: font, fontWeight: 400,
            fontSize: "clamp(13px, 1vw, 18px)",
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.4)",
            marginBottom: "clamp(28px, 4vh, 44px)",
            maxWidth: "480px",
            letterSpacing: "-0.01em",
          }}>
            Оставьте заявку — проведём анализ кабинета, покажем что мешает росту и дадим конкретный план действий
          </p>

          {/* Stats row */}
          <div style={{
            display: "flex", gap: "clamp(24px, 3vw, 48px)",
            marginBottom: "clamp(28px, 4vh, 44px)",
            paddingBottom: "clamp(24px, 3.5vh, 40px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}>
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <div className="form-stat-val">{value}</div>
                <div className="form-stat-label">{label}</div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(12px, 1.8vh, 20px)" }}>
            {BENEFITS.map(({ text }, i) => (
              <div
                key={text}
                className="form-benefit"
                style={{ animationDelay: `${0.1 + i * 0.08}s` }}
              >
                <span className="form-benefit-dot" />
                <span style={{
                  fontFamily: font,
                  fontSize: "clamp(13px, 0.95vw, 17px)",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.45,
                  letterSpacing: "-0.02em",
                }}>{text}</span>
              </div>
            ))}
          </div>

          {/* Contact hint */}
          <div style={{
            marginTop: "clamp(32px, 4.5vh, 52px)",
            display: "flex", alignItems: "center", gap: "10px",
            color: "rgba(255,255,255,0.25)",
            fontFamily: font,
            fontSize: "clamp(11px, 0.75vw, 14px)",
            letterSpacing: "-0.01em",
          }}>
            <svg width="14" height="16" viewBox="0 0 12 14" fill="none">
              <path d="M6 1L1 3.5V7C1 9.76 3.24 12.37 6 13C8.76 12.37 11 9.76 11 7V3.5L6 1Z"
                stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
            </svg>
            Ваши данные защищены и не передаются третьим лицам
          </div>
        </div>

        {/* ═══════════════════════════════
            RIGHT COLUMN — Form card
        ═══════════════════════════════ */}
        <div
          style={{ position: "relative", animation: "fade-in-up 0.7s ease 0.15s both" }}
          ref={cardRef}
          onMouseMove={onMouseMove}
          onMouseEnter={() => setCardHover(true)}
          onMouseLeave={() => setCardHover(false)}
        >
          {/* Card */}
          <div style={{
            background: "rgba(255,255,255,0.03)",
            borderRadius: "clamp(20px, 1.6vw, 32px)",
            padding: "clamp(28px, 4vh, 52px) clamp(24px, 3vw, 48px)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow: "0 0 0 1px rgba(10,186,181,0.06), 0 40px 100px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)",
            position: "relative",
            overflow: "hidden",
          }}>

            {/* Cursor-tracking glow */}
            <div style={{
              position: "absolute",
              left: `${mouse.x * 100}%`,
              top: `${mouse.y * 100}%`,
              transform: "translate(-50%, -50%)",
              width: "520px", height: "520px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(10,186,181,0.11) 0%, transparent 60%)",
              opacity: cardHover ? 1 : 0,
              transition: "opacity 0.4s ease",
              pointerEvents: "none",
              zIndex: 0,
            }} />

            {/* Animated traveling glow border */}
            <svg
              style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%",
                overflow: "visible", pointerEvents: "none",
                zIndex: 1,
              }}
            >
              <defs>
                <filter id="form-border-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Static dim border */}
              <rect
                x="0.5" y="0.5"
                rx="28"
                ry="28"
                width="calc(100% - 1px)"
                height="calc(100% - 1px)"
                fill="none"
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="1"
              />
              {/* Traveling beam */}
              <rect
                x="0.5" y="0.5"
                rx="28"
                ry="28"
                width="calc(100% - 1px)"
                height="calc(100% - 1px)"
                fill="none"
                stroke={ACCENT}
                strokeWidth="1.5"
                strokeLinecap="round"
                pathLength="1"
                strokeDasharray="0.06 0.94"
                strokeDashoffset="0"
                style={{
                  animation: "form-beam-travel 5s linear infinite",
                  filter: "url(#form-border-glow)",
                  opacity: 0.85,
                }}
              />
            </svg>

            {/* Top accent line */}
            <div style={{
              position: "absolute", top: 0, left: "15%", width: "70%", height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(10,186,181,0.55), transparent)",
              zIndex: 2,
            }} />

            {/* Content */}
            <div style={{ position: "relative", zIndex: 3 }}>
              <p style={{
                fontFamily: font, fontWeight: 400,
                fontSize: "clamp(20px, 1.6vw, 30px)",
                letterSpacing: "-0.035em",
                color: "#ffffff",
                marginBottom: "4px", marginTop: 0,
              }}>
                Оставить заявку
              </p>
              <p style={{
                fontFamily: font,
                fontSize: "clamp(12px, 0.8vw, 15px)",
                color: "rgba(255,255,255,0.32)",
                letterSpacing: "-0.01em",
                marginBottom: "clamp(22px, 3vh, 34px)", marginTop: 0,
              }}>
                Ответим в течение 15 минут и запишем на разбор
              </p>
              <LeadForm />
            </div>
          </div>
        </div>

      </div>

      {/* ── Bottom line ── */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(10,186,181,0.18) 30%, rgba(10,186,181,0.18) 70%, transparent)",
        zIndex: 0,
      }} />
    </main>
  );
}
