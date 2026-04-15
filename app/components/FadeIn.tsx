"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

const ENTER_DURATION_MS = 700;
const ENTER_EASING = "cubic-bezier(0.25, 0.4, 0.25, 1)";

const fadeInCallbacks = new WeakMap<Element, () => void>();
let fadeInObserver: IntersectionObserver | null = null;

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function supportsIntersectionObserver() {
  return typeof window !== "undefined" && "IntersectionObserver" in window;
}

type FadeInMode = "hidden" | "revealed" | "instant";

function getFadeInObserver() {
  if (fadeInObserver) return fadeInObserver;

  fadeInObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const callback = fadeInCallbacks.get(entry.target);
        if (!callback) return;

        callback();
        fadeInCallbacks.delete(entry.target);
        fadeInObserver?.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -60px 0px",
      threshold: 0.01,
    },
  );

  return fadeInObserver;
}

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
  className?: string;
  as?: "div" | "section" | "h2" | "p";
}

export function FadeIn({ children, delay = 0, style, className, as = "div" }: FadeInProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [mode, setMode] = useState<FadeInMode>("hidden");
  const Tag = as;

  useEffect(() => {
    if (typeof window === "undefined") return;

    let frameId = 0;

    if (prefersReducedMotion()) {
      frameId = window.requestAnimationFrame(() => {
        setMode("instant");
      });
      return () => {
        if (frameId !== 0) {
          window.cancelAnimationFrame(frameId);
        }
      };
    }

    if (!supportsIntersectionObserver()) {
      frameId = window.requestAnimationFrame(() => {
        setMode("revealed");
      });
      return () => {
        if (frameId !== 0) {
          window.cancelAnimationFrame(frameId);
        }
      };
    }

    const node = ref.current;
    if (!node) return;

    const observer = getFadeInObserver();
    fadeInCallbacks.set(node, () => setMode("revealed"));
    observer.observe(node);

    return () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
      fadeInCallbacks.delete(node);
      observer.unobserve(node);
    };
  }, []);

  const animatedStyle: CSSProperties = mode === "instant"
    ? {
        opacity: 1,
        transform: "translate3d(0, 0, 0)",
      }
    : {
        opacity: mode === "revealed" ? 1 : 0,
        transform: mode === "revealed" ? "translate3d(0, 0, 0)" : "translate3d(0, 28px, 0)",
        transition: `opacity ${ENTER_DURATION_MS}ms ${ENTER_EASING} ${delay}s, transform ${ENTER_DURATION_MS}ms ${ENTER_EASING} ${delay}s`,
        willChange: mode === "revealed" ? undefined : "opacity, transform",
      };

  return (
    <Tag
      ref={ref as never}
      style={{
        ...animatedStyle,
        ...style,
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}
