"use client";

import { useEffect, useRef, useState } from "react";

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

export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  separator,
  duration = 1400,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || triggered.current) return;
        triggered.current = true;
        observer.disconnect();

        const start = performance.now();
        const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

        function tick(now: number) {
          const progress = Math.min((now - start) / duration, 1);
          const current = value * easeOut(progress);
          setDisplay(format(current, decimals, separator));
          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, decimals, separator, duration]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}
