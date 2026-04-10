"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

// ── Beam constants ───────────────────────────────────────────────────────────
const DASH_LEN = 120;
const DASH_GAP = 5000;
const TRAVEL_TOTAL = DASH_LEN + DASH_GAP;

// ── Global CSS (injected once) ───────────────────────────────────────────────
let _cssInjected = false;

function ensureGlobalCSS() {
  if (_cssInjected || typeof document === "undefined") return;
  _cssInjected = true;

  const style = document.createElement("style");
  style.id = "glow-card-styles";
  style.textContent = `
    @keyframes glow-border-travel {
      from { stroke-dashoffset: 0; }
      to   { stroke-dashoffset: -${TRAVEL_TOTAL}px; }
    }
    @keyframes corner-dot-pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50%       { opacity: 0.3; transform: scale(0.6); }
    }

    /* ── Card number glow on hover ── */
    [data-glow] .card-num {
      transition: opacity 0.3s ease, filter 0.3s ease;
    }
    [data-glow][data-hovered] .card-num {
      opacity: 1 !important;
      filter: drop-shadow(0 0 8px currentColor) drop-shadow(0 0 20px currentColor);
    }

    /* ── Spotlight border pseudo-elements ── */
    [data-glow]::before,
    [data-glow]::after {
      pointer-events: none;
      content: "";
      position: absolute;
      inset: 0;
      border: 2px solid transparent;
      border-radius: inherit;
      background-repeat: no-repeat;
      background-position: 0 0;
      background-size: 100% 100%;
      mask:
        linear-gradient(transparent, transparent),
        linear-gradient(white, white);
      mask-clip: padding-box, border-box;
      mask-composite: intersect;
      -webkit-mask:
        linear-gradient(transparent, transparent),
        linear-gradient(white, white);
      -webkit-mask-clip: padding-box, border-box;
      -webkit-mask-composite: destination-in;
      z-index: 10;
      opacity: 0;
      transition: opacity 0.2s ease;
    }
    [data-glow][data-hovered]::before,
    [data-glow][data-hovered]::after {
      opacity: 1;
    }
    [data-glow]::before {
      background-image: radial-gradient(
        200px 200px at var(--lx, -999px) var(--ly, -999px),
        hsl(var(--glow-h, 195) 100% 65% / 1),
        transparent 100%
      );
      filter: brightness(2.5);
    }
    [data-glow]::after {
      background-image: radial-gradient(
        130px 130px at var(--lx, -999px) var(--ly, -999px),
        hsl(0 100% 100% / 0.85),
        transparent 100%
      );
    }
  `;
  document.head.appendChild(style);
}

// ── Color map ────────────────────────────────────────────────────────────────
const COLOR_MAP: Record<string, {
  hue: number;
  stroke: string;
  dimStroke: string;
  shadowGlow: string;
  shadowGlowFar: string;
}> = {
  blue:   { hue: 210, stroke: "hsl(210 90% 70%)",    dimStroke: "rgba(100,160,255,0.18)", shadowGlow: "rgba(100,160,255,0.5)",  shadowGlowFar: "rgba(100,160,255,0.18)" },
  teal:   { hue: 178, stroke: "hsl(178 85% 60%)",    dimStroke: "rgba(10,186,181,0.18)",  shadowGlow: "rgba(10,186,181,0.5)",  shadowGlowFar: "rgba(10,186,181,0.18)"  },
  purple: { hue: 270, stroke: "hsl(270 85% 75%)",    dimStroke: "rgba(160,100,255,0.18)", shadowGlow: "rgba(160,100,255,0.5)", shadowGlowFar: "rgba(160,100,255,0.18)" },
  green:  { hue: 152, stroke: "hsl(152 85% 58%)",    dimStroke: "rgba(50,220,130,0.18)",  shadowGlow: "rgba(50,220,130,0.5)",  shadowGlowFar: "rgba(50,220,130,0.18)"  },
  cyan:   { hue: 195, stroke: "hsl(195 95% 62%)",    dimStroke: "rgba(0,210,255,0.18)",   shadowGlow: "rgba(0,210,255,0.5)",   shadowGlowFar: "rgba(0,210,255,0.18)"   },
  white:  { hue: 210, stroke: "rgba(255,255,255,0.85)", dimStroke: "rgba(255,255,255,0.10)", shadowGlow: "rgba(255,255,255,0.45)", shadowGlowFar: "rgba(255,255,255,0.15)" },
};

// ── Component ────────────────────────────────────────────────────────────────
interface GlowCardProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  white?: boolean;
  glowColor?: "blue" | "teal" | "purple" | "green" | "cyan";
}

const CORNER_POSITIONS = [
  { key: "tl", pos: { top: 3,    left: 3   } },
  { key: "tr", pos: { top: 3,    right: 3  } },
  { key: "br", pos: { bottom: 3, right: 3  } },
  { key: "bl", pos: { bottom: 3, left: 3   } },
] as const;

export function GlowCard({ children, style, className, white = false, glowColor }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });
  const [hovered, setHovered] = useState(false);

  const colorKey = white ? "white" : (glowColor ?? "blue");
  const { hue, stroke, dimStroke, shadowGlow, shadowGlowFar } = COLOR_MAP[colorKey] ?? COLOR_MAP.blue;

  useEffect(() => { ensureGlobalCSS(); }, []);

  // Track card size for SVG beam
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setDims({ w: el.offsetWidth, h: el.offsetHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Mouse tracking + hover state
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--lx", `${(e.clientX - rect.left).toFixed(1)}px`);
      el.style.setProperty("--ly", `${(e.clientY - rect.top).toFixed(1)}px`);
    };
    const onEnter = () => { el.setAttribute("data-hovered", ""); setHovered(true); };
    const onLeave = () => {
      el.removeAttribute("data-hovered");
      el.style.setProperty("--lx", "-999px");
      el.style.setProperty("--ly", "-999px");
      setHovered(false);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  // Сохраняем оригинальную структуру: один div со всеми стилями
  const merged: CSSProperties & Record<string, unknown> = {
    ...style,
    position: "relative",
    overflow: "hidden",
    // border заменён на box-shadow (не обрезается overflow:hidden и поддерживает hover-glow)
    boxShadow: hovered
      ? `0 0 0 1px ${shadowGlow}, 0 0 14px 2px ${shadowGlow}, 0 0 36px 6px ${shadowGlowFar}`
      : `0 0 0 1px ${dimStroke}`,
    transition: "box-shadow 0.35s ease",
    ["--glow-h"]: hue,
  };

  const { w, h } = dims;
  const rx = 14;
  const perim = w > 0 ? 2 * (w + h) : 2000;
  // Медленнее: perim/80 ≈ 10с для типичной карточки
  const beamDur = Math.max(5, Math.round(perim / 80));

  // Луч: почти невидимый в покое → яркий и толстый при hover
  const beamWidth   = hovered ? 2.5 : 1;
  const beamOpacity = hovered ? 1   : 0.18;

  return (
    <div ref={ref} data-glow className={className} style={merged}>

      {/* ── Traveling border beam SVG ── */}
      {w > 0 && (
        <svg
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 3,
            overflow: "visible",
          }}
        >
          {/* Статичная тонкая рамка */}
          <rect
            x={1} y={1} width={w - 2} height={h - 2}
            rx={rx} ry={rx}
            fill="none"
            stroke={dimStroke}
            strokeWidth={1}
          />
          {/* Анимированный луч */}
          <rect
            x={1} y={1} width={w - 2} height={h - 2}
            rx={rx} ry={rx}
            fill="none"
            stroke={stroke}
            strokeWidth={beamWidth}
            strokeOpacity={beamOpacity}
            strokeDasharray={`${DASH_LEN} ${DASH_GAP}`}
            style={{
              animationName: "glow-border-travel",
              animationDuration: `${beamDur}s`,
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              filter: hovered
                ? `drop-shadow(0 0 3px ${stroke}) drop-shadow(0 0 8px ${stroke})`
                : "none",
              transition: "stroke-width 0.3s ease, stroke-opacity 0.3s ease, filter 0.3s ease",
            }}
          />
        </svg>
      )}

      {/* ── Corner pulse dots ── */}
      {CORNER_POSITIONS.map(({ key, pos }, i) => (
        <span
          key={key}
          style={{
            position: "absolute",
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: stroke,
            boxShadow: `0 0 6px 2px ${stroke}`,
            zIndex: 4,
            opacity: hovered ? 1 : 0.4,
            transition: "opacity 0.3s ease",
            ...pos,
            animationName: "corner-dot-pulse",
            animationDuration: "2.4s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDelay: `${i * 0.6}s`,
          }}
        />
      ))}

      {/* ── Content ── */}
      <div style={{ position: "relative", zIndex: 5, height: "100%", display: "contents" }}>
        {children}
      </div>
    </div>
  );
}
