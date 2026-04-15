"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionClientProps {
  items: FaqItem[];
}

export default function FaqSectionClient({ items }: FaqSectionClientProps) {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  const ACCENT = "#0ABAB5";
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="section-faq"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "max(100svh, 760px)",
        overflow: "clip",
        contentVisibility: "auto",
        containIntrinsicSize: "1000px",
        backgroundColor: "#071518",
      }}
    >
      <div style={{ position: "absolute", right: "-5vw", top: "10vh", width: "50vw", height: "50vw", background: "radial-gradient(circle, rgba(10,186,181,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "radial-gradient(circle, rgba(10,186,181,0.10) 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.3 }} />

      <div style={{ position: "absolute", top: "clamp(30px, 5.56vh, 60px)", right: "3.125vw", display: "flex", alignItems: "center", padding: "clamp(8px, 1.11vh, 12px) clamp(10px, 0.83vw, 16px)", borderRadius: "300px", background: "rgba(10,186,181,0.10)", border: "1px solid rgba(10,186,181,0.3)", backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)" }}>
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(10px, 1.302vw, 25px)", lineHeight: 1, letterSpacing: "-0.035em", color: ACCENT, textTransform: "uppercase", whiteSpace: "nowrap", margin: 0 }}>
          FAQ
        </p>
      </div>

      <h2 style={{ position: "absolute", left: "3.125vw", top: "clamp(30px, 5.65vh, 61px)", width: "min(28vw, 520px)", fontFamily: font, fontWeight: 400, fontSize: "clamp(28px, 4.167vw, 80px)", lineHeight: 0.9, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "pre-line" }}>
        {"Частые\nвопросы"}
      </h2>

      <p style={{ position: "absolute", left: "3.125vw", top: "clamp(185px, 26vh, 280px)", width: "min(26vw, 480px)", fontFamily: font, fontWeight: 400, fontSize: "clamp(11px, 1.04vw, 20px)", lineHeight: 1.5, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.35)", margin: 0 }}>
        Если не нашли ответ — просто напишите нам
      </p>

      <div
        style={{
          position: "absolute",
          left: "clamp(260px, 36vw, 700px)",
          right: "3.125vw",
          top: "clamp(30px, 5.65vh, 61px)",
          bottom: "clamp(40px, 7.41vh, 80px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {items.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <div key={item.q}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "clamp(12px, 2vw, 32px)",
                  padding: "clamp(16px, 2.59vh, 28px) 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontFamily: font,
                    fontWeight: 400,
                    fontSize: "clamp(14px, 1.563vw, 30px)",
                    lineHeight: 1.15,
                    letterSpacing: "-0.03em",
                    color: isOpen ? "#ffffff" : "rgba(255,255,255,0.75)",
                    transition: "color 0.2s",
                    flex: 1,
                  }}
                >
                  {item.q}
                </span>
                <div
                  style={{
                    width: "clamp(28px, 2.083vw, 40px)",
                    height: "clamp(28px, 2.083vw, 40px)",
                    borderRadius: "50%",
                    border: `1px solid ${isOpen ? ACCENT : "rgba(255,255,255,0.15)"}`,
                    background: isOpen ? "rgba(10,186,181,0.12)" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    style={{ transition: "transform 0.3s ease", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    <path d="M7 2v10M2 7h10" stroke={isOpen ? ACCENT : "rgba(255,255,255,0.5)"} strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </button>

              <div
                style={{
                  overflow: "hidden",
                  maxHeight: isOpen ? "300px" : "0px",
                  transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <p
                  style={{
                    fontFamily: font,
                    fontWeight: 400,
                    fontSize: "clamp(12px, 1.04vw, 20px)",
                    lineHeight: 1.65,
                    letterSpacing: "-0.02em",
                    color: "rgba(255,255,255,0.45)",
                    margin: 0,
                    paddingBottom: "clamp(16px, 2.59vh, 28px)",
                    paddingRight: "clamp(40px, 4vw, 72px)",
                  }}
                >
                  {item.a}
                </p>
              </div>

              <div
                style={{
                  height: "1px",
                  background: isOpen
                    ? "linear-gradient(90deg, rgba(10,186,181,0.35) 0%, rgba(10,186,181,0.1) 60%, transparent 100%)"
                    : "rgba(255,255,255,0.07)",
                  transition: "background 0.3s",
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
