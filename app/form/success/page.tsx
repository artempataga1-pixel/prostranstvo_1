"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import InfinityAnimation from "../../components/InfinityAnimation";
import ShaderBackground from "../../components/ShaderBackground";
import FloatingShapes from "../../components/FloatingShapes";

const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
const ACCENT = "#0ABAB5";

function SuccessContent() {
  const params = useSearchParams();
  const rawOrder = params.get("order");
  const order = rawOrder && /^\d{6}-\d{3,}$/.test(rawOrder) ? rawOrder : null;

  return (
    <main style={{
      minHeight: "100svh",
      background: "#071518",
      fontFamily: font,
      color: "#ffffff",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* bg.png */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt="" src="/bg.png" style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        objectFit: "cover", opacity: 0.45, pointerEvents: "none", zIndex: 0,
      }} />

      {/* Shader */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
        <ShaderBackground />
      </div>

      {/* Floating shapes */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, opacity: 0.2, pointerEvents: "none" }}>
        <FloatingShapes />
      </div>

      {/* Ambient glow */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", width: "70vw", height: "70vw",
          left: "50%", top: "50%", transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(10,186,181,0.12) 0%, transparent 60%)",
        }} />
      </div>

      <style>{`
        @keyframes success-scale-in {
          0%   { opacity: 0; transform: scale(0.6); }
          70%  { transform: scale(1.08); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes success-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes success-ring-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(10,186,181,0.4), 0 0 40px rgba(10,186,181,0.3); }
          50%       { box-shadow: 0 0 0 16px rgba(10,186,181,0), 0 0 60px rgba(10,186,181,0.5); }
        }
        @keyframes success-check-draw {
          from { stroke-dashoffset: 40; opacity: 0; }
          to   { stroke-dashoffset: 0;  opacity: 1; }
        }
        .success-back-link { color: rgba(255,255,255,0.35); transition: color 0.2s; text-decoration: none; }
        .success-back-link:hover { color: #ffffff; }
        .success-home-btn {
          background: rgba(10,186,181,0.1);
          border: 1.5px solid rgba(10,186,181,0.5);
          color: #ffffff;
          transition: background 0.2s, box-shadow 0.2s;
        }
        .success-home-btn:hover {
          background: rgba(10,186,181,0.2);
          box-shadow: 0 0 0 2px rgba(10,186,181,0.5), 0 0 40px rgba(10,186,181,0.4);
        }
      `}</style>

      {/* Header */}
      <header style={{
        position: "relative", zIndex: 10,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "clamp(16px, 2.2vh, 26px) clamp(24px, 3.125vw, 60px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        background: "rgba(7,21,24,0.3)",
      }}>
        <Link href="/" className="success-back-link" style={{
          display: "flex", alignItems: "center", gap: "8px",
          fontSize: "clamp(12px, 0.85vw, 15px)", letterSpacing: "-0.02em",
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          На главную
        </Link>
        <div style={{ fontWeight: 400, fontSize: "clamp(16px, 1.3vw, 24px)", letterSpacing: "-0.04em" }}>
          <span style={{ color: ACCENT }}>PRO</span>странство
        </div>
        <div style={{ width: "clamp(50px, 5vw, 90px)", position: "relative", height: "clamp(26px, 2.6vw, 50px)" }}>
          <InfinityAnimation />
        </div>
      </header>

      {/* Center content */}
      <div style={{
        position: "relative", zIndex: 5,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(40px, 8vh, 80px) clamp(24px, 4vw, 60px)",
        textAlign: "center",
      }}>

        {/* Check circle */}
        <div style={{
          width: "clamp(80px, 10vw, 120px)",
          height: "clamp(80px, 10vw, 120px)",
          borderRadius: "50%",
          background: "rgba(10,186,181,0.12)",
          border: `2px solid ${ACCENT}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          animation: "success-scale-in 0.6s cubic-bezier(0.34,1.56,0.64,1) both, success-ring-pulse 2.5s ease-in-out 0.6s infinite",
          marginBottom: "clamp(28px, 4vh, 44px)",
        }}>
          <svg
            width="40%" height="40%"
            viewBox="0 0 24 24" fill="none"
          >
            <path
              d="M4 13l5 5L20 7"
              stroke={ACCENT}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="40"
              style={{ animation: "success-check-draw 0.5s ease 0.3s both" }}
            />
          </svg>
        </div>

        {/* Order number badge */}
        {order && (
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "6px 16px", borderRadius: "300px",
            background: "rgba(10,186,181,0.08)",
            border: "1px solid rgba(10,186,181,0.2)",
            marginBottom: "clamp(16px, 2.5vh, 24px)",
            animation: "success-fade-up 0.5s ease 0.4s both",
          }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: ACCENT, boxShadow: `0 0 6px 2px rgba(10,186,181,0.8)`, display: "inline-block" }} />
            <span style={{ fontFamily: font, fontSize: "clamp(10px, 0.75vw, 13px)", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: ACCENT }}>
              Заявка #{order}
            </span>
          </div>
        )}

        {/* Heading */}
        <h1 style={{
          fontFamily: font, fontWeight: 400,
          fontSize: "clamp(36px, 5.2vw, 100px)",
          lineHeight: 0.92, letterSpacing: "-0.04em",
          color: "#ffffff", margin: 0,
          marginBottom: "clamp(16px, 2.5vh, 24px)",
          animation: "success-fade-up 0.5s ease 0.5s both",
        }}>
          Заявка<br />
          <span style={{ color: "rgba(255,255,255,0.4)" }}>отправлена</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontFamily: font, fontSize: "clamp(14px, 1.1vw, 20px)",
          lineHeight: 1.55, color: "rgba(255,255,255,0.45)",
          maxWidth: "480px", margin: "0 0 clamp(32px, 5vh, 52px) 0",
          letterSpacing: "-0.01em",
          animation: "success-fade-up 0.5s ease 0.6s both",
        }}>
          Мы свяжемся с вами в течение 15 минут<br />
          и проведём бесплатный разбор кабинета
        </p>

        {/* Divider */}
        <div style={{
          width: "clamp(200px, 30vw, 400px)", height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(10,186,181,0.25), transparent)",
          marginBottom: "clamp(28px, 4vh, 44px)",
          animation: "success-fade-up 0.5s ease 0.65s both",
        }} />

        {/* What next */}
        <div style={{
          display: "flex", flexDirection: "column" as const, gap: "12px",
          marginBottom: "clamp(32px, 5vh, 52px)",
          animation: "success-fade-up 0.5s ease 0.7s both",
        }}>
          {[
            "Проверьте Telegram — мы напишем вам туда",
            "Подготовьте доступ к личному кабинету маркетплейса",
            "Разбор займёт 30 минут и абсолютно бесплатен",
          ].map((text, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", textAlign: "left" }}>
              <span style={{
                width: "5px", height: "5px", borderRadius: "50%",
                background: ACCENT, boxShadow: `0 0 6px 2px rgba(10,186,181,0.6)`,
                flexShrink: 0, marginTop: "7px", display: "inline-block",
              }} />
              <span style={{
                fontFamily: font, fontSize: "clamp(13px, 0.95vw, 17px)",
                color: "rgba(255,255,255,0.55)", letterSpacing: "-0.01em", lineHeight: 1.45,
              }}>{text}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <Link href="/" className="success-home-btn" style={{
          fontFamily: font, fontWeight: 500,
          fontSize: "clamp(13px, 1vw, 18px)",
          letterSpacing: "-0.02em",
          padding: "clamp(12px, 1.8vh, 18px) clamp(28px, 2.5vw, 44px)",
          borderRadius: "100px",
          textDecoration: "none",
          display: "inline-flex", alignItems: "center", gap: "8px",
          animation: "success-fade-up 0.5s ease 0.8s both",
        }}>
          Вернуться на главную
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense>
      <SuccessContent />
    </Suspense>
  );
}
