"use client";

import { useEffect, useRef, useState } from "react";
import LeadForm from "./LeadForm";

const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
const ACCENT = "#0ABAB5";

export default function FormLeadCardClient() {
  const cardRef = useRef<HTMLDivElement>(null);
  const canHoverRef = useRef(false);
  const frameRef = useRef(0);
  const pointerRef = useRef({ x: 0.5, y: 0.5 });
  const [cardHover, setCardHover] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateHoverSupport = () => {
      canHoverRef.current = mediaQuery.matches;
      if (!mediaQuery.matches) {
        setCardHover(false);
        node.style.setProperty("--spotlight-x", "50%");
        node.style.setProperty("--spotlight-y", "50%");
      }
    };

    node.style.setProperty("--spotlight-x", "50%");
    node.style.setProperty("--spotlight-y", "50%");
    updateHoverSupport();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateHoverSupport);
      return () => mediaQuery.removeEventListener("change", updateHoverSupport);
    }

    mediaQuery.addListener(updateHoverSupport);
    return () => mediaQuery.removeListener(updateHoverSupport);
  }, []);

  useEffect(() => {
    return () => {
      if (frameRef.current !== 0) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  function scheduleSpotlight(clientX: number, clientY: number) {
    const node = cardRef.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    pointerRef.current = {
      x: (clientX - rect.left) / rect.width,
      y: (clientY - rect.top) / rect.height,
    };

    if (frameRef.current !== 0) return;

    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = 0;
      const currentNode = cardRef.current;
      if (!currentNode) return;
      currentNode.style.setProperty("--spotlight-x", `${pointerRef.current.x * 100}%`);
      currentNode.style.setProperty("--spotlight-y", `${pointerRef.current.y * 100}%`);
    });
  }

  return (
    <div
      style={{ position: "relative", animation: "fade-in-up 0.7s ease 0.15s both" }}
      ref={cardRef}
      onPointerMove={(event) => {
        if (!canHoverRef.current) return;
        scheduleSpotlight(event.clientX, event.clientY);
      }}
      onPointerEnter={() => {
        if (!canHoverRef.current) return;
        setCardHover(true);
      }}
      onPointerLeave={() => {
        if (!canHoverRef.current) return;
        setCardHover(false);
        cardRef.current?.style.setProperty("--spotlight-x", "50%");
        cardRef.current?.style.setProperty("--spotlight-y", "50%");
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.03)",
          borderRadius: "clamp(20px, 1.6vw, 32px)",
          padding: "clamp(28px, 4vh, 52px) clamp(24px, 3vw, 48px)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow: "0 0 0 1px rgba(10,186,181,0.06), 0 40px 100px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "var(--spotlight-x, 50%)",
            top: "var(--spotlight-y, 50%)",
            transform: "translate(-50%, -50%)",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(10,186,181,0.11) 0%, transparent 60%)",
            opacity: cardHover ? 1 : 0,
            transition: "opacity 0.4s ease",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            overflow: "visible",
            pointerEvents: "none",
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
          <rect
            x="0.5"
            y="0.5"
            rx="28"
            ry="28"
            width="calc(100% - 1px)"
            height="calc(100% - 1px)"
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="1"
          />
          <rect
            x="0.5"
            y="0.5"
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

        <div
          style={{
            position: "absolute",
            top: 0,
            left: "15%",
            width: "70%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(10,186,181,0.55), transparent)",
            zIndex: 2,
          }}
        />

        <div style={{ position: "relative", zIndex: 3 }}>
          <p
            style={{
              fontFamily: font,
              fontWeight: 400,
              fontSize: "clamp(20px, 1.6vw, 30px)",
              letterSpacing: "-0.035em",
              color: "#ffffff",
              marginBottom: "4px",
              marginTop: 0,
            }}
          >
            Оставить заявку
          </p>
          <p
            style={{
              fontFamily: font,
              fontSize: "clamp(12px, 0.8vw, 15px)",
              color: "rgba(255,255,255,0.32)",
              letterSpacing: "-0.01em",
              marginBottom: "clamp(22px, 3vh, 34px)",
              marginTop: 0,
            }}
          >
            Ответим в течение 15 минут и запишем на разбор
          </p>
          <LeadForm />
        </div>
      </div>
    </div>
  );
}
