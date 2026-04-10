"use client";

import Link from "next/link";
import LeadForm from "../components/LeadForm";
import DataCrystal3D from "../components/DataCrystal3D";
import FloatingShapes from "../components/FloatingShapes";
import InfinityAnimation from "../components/InfinityAnimation";

const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
const ACCENT = "#0ABAB5";

const BENEFITS = [
  { icon: "◈", text: "Анализ воронки продаж и рекламных кампаний" },
  { icon: "◈", text: "Аудит карточек товаров и контента" },
  { icon: "◈", text: "Оценка финансовых показателей и юнит-экономики" },
  { icon: "◈", text: "Конкретные рекомендации на следующие 30 дней" },
];

const STATS = [
  { value: "+200%", label: "средний рост выручки" },
  { value: "50+", label: "кейсов на WB и Ozon" },
  { value: "30 мин", label: "бесплатный разбор" },
];

export default function FormPage() {
  return (
    <main
      style={{
        minHeight: "100svh",
        background: "linear-gradient(160deg, #050e10 0%, #071518 40%, #0a1f22 70%, #071518 100%)",
        position: "relative",
        overflow: "hidden",
        fontFamily: font,
      }}
    >
      {/* ── Ambient glow blobs ── */}
      <div style={{ position: "absolute", pointerEvents: "none", inset: 0, zIndex: 0 }}>
        {/* Top-left teal */}
        <div style={{
          position: "absolute", width: "70vw", height: "70vw",
          left: "-20vw", top: "-20vw",
          background: "radial-gradient(circle, rgba(10,186,181,0.13) 0%, transparent 65%)",
        }} />
        {/* Bottom-right */}
        <div style={{
          position: "absolute", width: "55vw", height: "55vw",
          right: "-10vw", bottom: "-10vw",
          background: "radial-gradient(circle, rgba(10,186,181,0.08) 0%, transparent 65%)",
        }} />
        {/* Center accent */}
        <div style={{
          position: "absolute", width: "40vw", height: "40vw",
          left: "30vw", top: "20vh",
          background: "radial-gradient(circle, rgba(10,186,181,0.04) 0%, transparent 65%)",
        }} />
      </div>

      {/* ── Dot grid pattern ── */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(10,186,181,0.12) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        opacity: 0.35,
      }} />

      {/* ── Floating shapes background ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.35, pointerEvents: "none" }}>
        <FloatingShapes />
      </div>

      {/* ── Scanning top line animation ── */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "2px",
        background: "linear-gradient(90deg, transparent 0%, rgba(10,186,181,0.8) 50%, transparent 100%)",
        backgroundSize: "200% 100%",
        animation: "form-scan-line 4s ease-in-out infinite",
        zIndex: 11,
      }} />
      <style>{`
        @keyframes form-scan-line {
          0%   { background-position: -100% 0; opacity: 0.4; }
          50%  { background-position: 100% 0;  opacity: 1;   }
          100% { background-position: 300% 0;  opacity: 0.4; }
        }
        @keyframes form-float {
          0%, 100% { transform: translateY(0px) rotate(var(--r, 0deg)); }
          50%       { transform: translateY(-12px) rotate(var(--r, 0deg)); }
        }
      `}</style>

      {/* ── Header ── */}
      <header style={{
        position: "relative", zIndex: 10,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "clamp(20px, 3vh, 32px) clamp(24px, 3.125vw, 60px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        background: "rgba(7,21,24,0.4)",
      }}>
        {/* Back link */}
        <Link
          href="/"
          style={{
            display: "flex", alignItems: "center", gap: "8px",
            textDecoration: "none", color: "rgba(255,255,255,0.45)",
            fontFamily: font, fontSize: "clamp(13px, 0.9vw, 16px)",
            letterSpacing: "-0.02em",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Вернуться
        </Link>

        {/* Logo */}
        <div style={{
          fontFamily: font, fontWeight: 400,
          fontSize: "clamp(18px, 1.5vw, 28px)",
          letterSpacing: "-0.04em", color: "#ffffff",
        }}>
          <span style={{ color: ACCENT }}>PRO</span>странство
        </div>

        {/* Right spacer (holds layout width = infinity icon width) */}
        <div style={{ width: "clamp(60px, 6.09vw, 117px)" }} />

        {/* Infinity animation — absolutely positioned, top-right */}
        <div style={{
          position: "absolute",
          right: "clamp(24px, 3.125vw, 60px)",
          top: "50%",
          transform: "translateY(-50%)",
          width: "clamp(60px, 6.09vw, 117px)",
          height: "clamp(31px, 3.125vw, 60px)",
          pointerEvents: "none",
        }}>
          <InfinityAnimation />
        </div>
      </header>

      {/* ── Main content ── */}
      <div style={{
        position: "relative", zIndex: 5,
        width: "min(1400px, calc(100vw - 48px))",
        margin: "0 auto",
        paddingTop: "clamp(48px, 7vh, 80px)",
        paddingBottom: "clamp(60px, 8vh, 100px)",
        display: "grid",
        gridTemplateColumns: "1fr 1.15fr",
        columnGap: "clamp(40px, 5vw, 100px)",
        alignItems: "start",
      }}>

        {/* ═══════════════════════════════
            LEFT COLUMN
        ═══════════════════════════════ */}
        <div style={{ position: "relative" }}>

          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center",
            padding: "8px 16px",
            borderRadius: "300px",
            background: "rgba(10,186,181,0.1)",
            border: "1px solid rgba(10,186,181,0.25)",
            marginBottom: "clamp(20px, 3vh, 32px)",
          }}>
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
            fontSize: "clamp(40px, 5.2vw, 100px)",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            color: "#ffffff",
            marginBottom: "clamp(20px, 3vh, 32px)",
            marginTop: 0,
          }}>
            Разберём ваш кабинет и найдём точки роста
          </h1>

          {/* Subheading */}
          <p style={{
            fontFamily: font, fontWeight: 400,
            fontSize: "clamp(14px, 1.1vw, 20px)",
            lineHeight: 1.45,
            color: "rgba(255,255,255,0.45)",
            marginBottom: "clamp(32px, 5vh, 52px)",
            maxWidth: "520px",
          }}>
            Оставьте заявку — проведём анализ кабинета, покажем что мешает росту и дадим конкретный план действий
          </p>

          {/* Stats row */}
          <div style={{
            display: "flex", gap: "clamp(20px, 2.5vw, 40px)",
            marginBottom: "clamp(32px, 5vh, 52px)",
            paddingBottom: "clamp(28px, 4vh, 44px)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}>
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <div style={{
                  fontFamily: font, fontWeight: 400,
                  fontSize: "clamp(24px, 2.5vw, 48px)",
                  lineHeight: 1, letterSpacing: "-0.04em",
                  color: ACCENT,
                  marginBottom: "6px",
                }}>{value}</div>
                <div style={{
                  fontFamily: font,
                  fontSize: "clamp(11px, 0.75vw, 14px)",
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "-0.01em",
                }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(14px, 2vh, 22px)" }}>
            {BENEFITS.map(({ icon, text }) => (
              <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <span style={{
                  color: ACCENT, fontSize: "clamp(14px, 1vw, 18px)",
                  flexShrink: 0, marginTop: "1px",
                  filter: "drop-shadow(0 0 6px rgba(10,186,181,0.8))",
                }}>{icon}</span>
                <span style={{
                  fontFamily: font,
                  fontSize: "clamp(13px, 0.95vw, 18px)",
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.4,
                  letterSpacing: "-0.02em",
                }}>{text}</span>
              </div>
            ))}
          </div>

          {/* 3D Object */}
          <div style={{
            position: "absolute",
            left: "-8vw",
            bottom: "-12vh",
            width: "clamp(260px, 36vw, 580px)",
            height: "clamp(260px, 36vw, 580px)",
            pointerEvents: "none",
            opacity: 0.55,
            zIndex: -1,
          }}>
            <DataCrystal3D />
          </div>
        </div>

        {/* ═══════════════════════════════
            RIGHT COLUMN — Form
        ═══════════════════════════════ */}
        <div style={{ position: "relative" }}>
          {/* Form card */}
          <div style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: "clamp(18px, 1.5vw, 28px)",
            padding: "clamp(28px, 4vh, 52px) clamp(24px, 3vw, 48px)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 0 0 1px rgba(10,186,181,0.05), 0 32px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Card top accent line */}
            <div style={{
              position: "absolute", top: 0, left: "10%", width: "80%", height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(10,186,181,0.5), transparent)",
            }} />

            {/* Card inner glow */}
            <div style={{
              position: "absolute", top: "-30%", left: "50%",
              transform: "translateX(-50%)",
              width: "80%", height: "60%",
              background: "radial-gradient(ellipse, rgba(10,186,181,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{
                fontFamily: font, fontWeight: 400,
                fontSize: "clamp(18px, 1.45vw, 28px)",
                letterSpacing: "-0.03em",
                color: "#ffffff",
                marginBottom: "4px", marginTop: 0,
              }}>
                Оставить заявку
              </p>
              <p style={{
                fontFamily: font,
                fontSize: "clamp(12px, 0.8vw, 15px)",
                color: "rgba(255,255,255,0.35)",
                marginBottom: "clamp(20px, 3vh, 32px)", marginTop: 0,
              }}>
                Ответим в течение 15 минут и запишем на разбор
              </p>
              <LeadForm />
            </div>
          </div>

          {/* Second 3D decoration behind form — top right */}
          <div style={{
            position: "absolute",
            top: "-15vh",
            right: "-12vw",
            width: "clamp(200px, 28vw, 420px)",
            height: "clamp(200px, 28vw, 420px)",
            pointerEvents: "none",
            opacity: 0.18,
            zIndex: -1,
            transform: "rotate(15deg)",
          }}>
            <DataCrystal3D />
          </div>

          {/* Floating teal rune decorators */}
          {[
            { top: "8%",  right: "3%",  size: 18, delay: "0s",   r: "12deg"  },
            { top: "55%", right: "-2%", size: 12, delay: "1.3s", r: "-8deg"  },
            { top: "85%", right: "5%",  size: 14, delay: "2.1s", r: "20deg"  },
          ].map((el, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: el.top, right: el.right,
                fontSize: el.size,
                color: ACCENT,
                filter: `drop-shadow(0 0 6px ${ACCENT})`,
                pointerEvents: "none",
                zIndex: 0,
                animation: `form-float ${2.5 + i * 0.7}s ease-in-out infinite ${el.delay}`,
                ["--r" as string]: el.r,
              }}
            >◈</div>
          ))}

          {/* Trust note */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: "8px",
            marginTop: "clamp(14px, 2vh, 20px)",
            color: "rgba(255,255,255,0.2)",
            fontFamily: font,
            fontSize: "clamp(10px, 0.7vw, 13px)",
          }}>
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
              <path d="M6 1L1 3.5V7C1 9.76 3.24 12.37 6 13C8.76 12.37 11 9.76 11 7V3.5L6 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
            </svg>
            Ваши данные защищены и не передаются третьим лицам
          </div>
        </div>

      </div>

      {/* ── Bottom decorative lines ── */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(10,186,181,0.2) 30%, rgba(10,186,181,0.2) 70%, transparent)",
        zIndex: 0,
      }} />
    </main>
  );
}
