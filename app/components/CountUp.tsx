"use client";

import { useEffect, useRef } from "react";

interface CountUpProps {
  value: number;       // target number
  prefix?: string;     // e.g. "+"
  suffix?: string;     // e.g. "%" | " млн" | " млн ₽"
  decimals?: number;   // decimal places (default 0)
  separator?: string;  // thousands separator e.g. " " → "1 989"
  duration?: number;   // ms (default 1400)
}

function format(n: number, decimals: number, separator?: string): string {
  const fixed = n.toFixed(decimals);
  if (!separator) return fixed;
  // Split on decimal point, apply separator to integer part
  const [int, dec] = fixed.split(".");
  const withSep = int.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  return dec !== undefined ? `${withSep}.${dec}` : withSep;
}

const START_THRESHOLD = 0.3;
const animationCallbacks = new WeakMap<Element, () => void>();
let sharedObserver: IntersectionObserver | null = null;

function getSharedObserver() {
  if (typeof window === "undefined") return null;

  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const callback = animationCallbacks.get(entry.target);
          if (!callback) return;

          animationCallbacks.delete(entry.target);
          sharedObserver?.unobserve(entry.target);
          callback();
        });
      },
      { threshold: START_THRESHOLD },
    );
  }

  return sharedObserver;
}

export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  separator,
  duration = 1400,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let cancelled = false;

    const writeValue = (current: number) => {
      el.textContent = `${prefix}${format(current, decimals, separator)}${suffix}`;
    };

    writeValue(0);

    const startAnimation = () => {
      if (triggered.current) return;
      triggered.current = true;

      const start = performance.now();
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

      const tick = (now: number) => {
        if (cancelled) return;

        const progress = Math.min((now - start) / duration, 1);
        writeValue(value * easeOut(progress));

        if (progress < 1) {
          raf = window.requestAnimationFrame(tick);
        }
      };

      raf = window.requestAnimationFrame(tick);
    };

    const observer = getSharedObserver();
    if (!observer) {
      startAnimation();
      return () => {
        cancelled = true;
        window.cancelAnimationFrame(raf);
      };
    }

    animationCallbacks.set(el, startAnimation);
    observer.observe(el);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(raf);
      animationCallbacks.delete(el);
      observer.unobserve(el);
    };
  }, [value, prefix, suffix, decimals, separator, duration]);

  return (
    <span ref={ref}>
      {prefix}{format(0, decimals, separator)}{suffix}
    </span>
  );
}
