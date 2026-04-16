"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

// ── Beam constants ───────────────────────────────────────────────────────────
const DASH_LEN = 120;
const DASH_GAP = 5000;
const TRAVEL_TOTAL = DASH_LEN + DASH_GAP;

// ── Shared visibility subscription — 1 listener for all card instances ───────
const _visSubscribers = new Set<(visible: boolean) => void>();
let _visListenerAttached = false;

function subscribeToVisibility(cb: (visible: boolean) => void): () => void {
  if (!_visListenerAttached && typeof document !== "undefined") {
    document.addEventListener("visibilitychange", () => {
      const visible = document.visibilityState === "visible";
      _visSubscribers.forEach((fn) => fn(visible));
    });
    _visListenerAttached = true;
  }
  _visSubscribers.add(cb);
  return () => { _visSubscribers.delete(cb); };
}

// ── Shared IntersectionObserver — 1 observer for all card instances ──────────
const _vpCallbacks = new Map<Element, (intersecting: boolean) => void>();
let _vpObserver: IntersectionObserver | null = null;

function getViewportObserver(): IntersectionObserver {
  if (!_vpObserver) {
    _vpObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cb = _vpCallbacks.get(entry.target);
          if (cb) cb(entry.isIntersecting);
        });
      },
      { rootMargin: "220px" },
    );
  }
  return _vpObserver;
}

function observeViewport(el: Element, cb: (intersecting: boolean) => void): () => void {
  _vpCallbacks.set(el, cb);
  getViewportObserver().observe(el);
  return () => {
    _vpCallbacks.delete(el);
    _vpObserver?.unobserve(el);
  };
}

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

    /* ── SVG beam: dim in rest → bright on hover (CSS-driven, zero React re-renders) ── */
    [data-glow] .glow-beam {
      stroke-width: 1;
      stroke-opacity: 0.18;
      filter: none;
      transition: stroke-width 0.3s ease, stroke-opacity 0.3s ease, filter 0.3s ease;
    }
    [data-glow][data-hovered] .glow-beam {
      stroke-width: 2.5;
      stroke-opacity: 1;
      filter: drop-shadow(0 0 3px var(--stroke-color)) drop-shadow(0 0 8px var(--stroke-color));
    }

    /* ── Corner dot: dim → bright on hover ── */
    [data-glow] .corner-dot {
      opacity: 0.4;
      transition: opacity 0.3s ease;
    }
    [data-glow][data-hovered] .corner-dot {
      opacity: 1;
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
  // hovered state removed — hover effects are now DOM-direct + CSS-driven, zero React re-renders
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const [canHover, setCanHover] = useState(false);
  const canHoverRef = useRef(false);
  const hoverFrameRef = useRef(0);

  const colorKey = white ? "white" : (glowColor ?? "blue");
  const { hue, stroke, dimStroke, shadowGlow, shadowGlowFar } = COLOR_MAP[colorKey] ?? COLOR_MAP.blue;
  const shouldAnimate = canHover && isNearViewport && isDocumentVisible;

  // Merge 3 one-time setup effects into 1 to reduce post-hydration scheduler work
  useEffect(() => {
    ensureGlobalCSS();
    const el = ref.current;
    if (!el) return;
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const syncCanHover = () => {
      const nextCanHover = mediaQuery.matches;
      canHoverRef.current = nextCanHover;
      setCanHover((prev) => (prev === nextCanHover ? prev : nextCanHover));
    };

    syncCanHover();

    const unsubscribeHover =
      typeof mediaQuery.addEventListener === "function"
        ? (() => {
            mediaQuery.addEventListener("change", syncCanHover);
            return () => mediaQuery.removeEventListener("change", syncCanHover);
          })()
        : (() => {
            mediaQuery.addListener(syncCanHover);
            return () => mediaQuery.removeListener(syncCanHover);
          })();

    const unsubVp = observeViewport(el, setIsNearViewport);
    const unsubVis = subscribeToVisibility(setIsDocumentVisible);
    return () => {
      unsubscribeHover();
      unsubVp();
      unsubVis();
    };
  }, []);

  // Track card size for SVG beam only when it is near the viewport.
  useEffect(() => {
    const el = ref.current;
    if (!el || !isNearViewport || !canHover) return;

    const update = () => {
      const nextDims = { w: el.offsetWidth, h: el.offsetHeight };
      setDims((prev) => (prev.w === nextDims.w && prev.h === nextDims.h ? prev : nextDims));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [canHover, isNearViewport]);

  // Mouse tracking — box-shadow + data-hovered set directly on DOM, no setState
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!canHoverRef.current) return;

    const shadowHover = `0 0 0 1px ${shadowGlow}, 0 0 14px 2px ${shadowGlow}, 0 0 36px 6px ${shadowGlowFar}`;
    const shadowRest  = `0 0 0 1px ${dimStroke}`;
    let rect: DOMRect | null = null;
    let pointerX = -999;
    let pointerY = -999;

    const flushPointer = () => {
      hoverFrameRef.current = 0;
      el.style.setProperty("--lx", `${pointerX.toFixed(1)}px`);
      el.style.setProperty("--ly", `${pointerY.toFixed(1)}px`);
    };

    const onMove = (event: PointerEvent) => {
      if (!rect) {
        rect = el.getBoundingClientRect();
      }

      pointerX = event.clientX - rect.left;
      pointerY = event.clientY - rect.top;

      if (hoverFrameRef.current !== 0) return;
      hoverFrameRef.current = window.requestAnimationFrame(flushPointer);
    };

    const onEnter = () => {
      rect = el.getBoundingClientRect();
      el.setAttribute("data-hovered", "");
      el.style.boxShadow = shadowHover;
      el.addEventListener("pointermove", onMove, { passive: true });
    };

    const onLeave = () => {
      el.removeEventListener("pointermove", onMove);
      rect = null;
      if (hoverFrameRef.current !== 0) {
        window.cancelAnimationFrame(hoverFrameRef.current);
        hoverFrameRef.current = 0;
      }
      el.removeAttribute("data-hovered");
      el.style.setProperty("--lx", "-999px");
      el.style.setProperty("--ly", "-999px");
      el.style.boxShadow = shadowRest;
    };

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
      if (hoverFrameRef.current !== 0) {
        window.cancelAnimationFrame(hoverFrameRef.current);
        hoverFrameRef.current = 0;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const merged: CSSProperties & Record<string, unknown> = {
    ...style,
    position: "relative",
    overflow: "hidden",
    contain: "paint",
    // Inline box-shadow ensures no flash before CSS injection;
    // hover state is updated directly in DOM via onEnter/onLeave (no re-render)
    boxShadow: `0 0 0 1px ${dimStroke}`,
    transition: "box-shadow 0.35s ease",
    ["--glow-h"]: hue,
    ["--stroke-color"]: stroke,
  };

  const { w, h } = dims;
  const rx = 14;
  const perim = w > 0 ? 2 * (w + h) : 2000;
  const beamDur = Math.max(5, Math.round(perim / 80));

  return (
    <div ref={ref} data-glow className={className} style={merged}>

      {/* ── Traveling border beam SVG ── */}
      {w > 0 && shouldAnimate && (
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
          {/* Анимированный луч — hover-эффекты через CSS класс .glow-beam */}
          <rect
            className="glow-beam"
            x={1} y={1} width={w - 2} height={h - 2}
            rx={rx} ry={rx}
            fill="none"
            stroke={stroke}
            strokeDasharray={`${DASH_LEN} ${DASH_GAP}`}
            style={{
              animationName: "glow-border-travel",
              animationDuration: `${beamDur}s`,
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
            }}
          />
        </svg>
      )}

      {/* ── Corner pulse dots — hover-эффект через CSS класс .corner-dot ── */}
      {shouldAnimate && CORNER_POSITIONS.map(({ key, pos }, i) => (
        <span
          key={key}
          className="corner-dot"
          style={{
            position: "absolute",
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: stroke,
            boxShadow: `0 0 6px 2px ${stroke}`,
            zIndex: 4,
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
