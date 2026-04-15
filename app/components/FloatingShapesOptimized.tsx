"use client";

import { useEffect, useRef, useState } from "react";

function ElegantShape({
  className = "",
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  opacity = 0.18,
  shouldFloat = true,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  opacity?: number;
  shouldFloat?: boolean;
}) {
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        willChange: "transform, opacity",
        animation: `hero-shape-enter 2.4s cubic-bezier(0.23, 0.86, 0.39, 0.96) ${delay}s both`,
        ["--shape-rotate-from" as string]: `${rotate - 15}deg`,
        ["--shape-rotate-to" as string]: `${rotate}deg`,
      }}
    >
      <div
        style={{
          width,
          height,
          position: "relative",
          willChange: "transform",
          animation: `hero-shape-float 12s ease-in-out ${delay}s infinite`,
          animationPlayState: shouldFloat ? "running" : "paused",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 9999,
            background: `linear-gradient(to right, rgba(255,255,255,${opacity}), transparent)`,
            border: "1.5px solid rgba(255,255,255,0.18)",
            boxShadow: "0 8px 32px 0 rgba(255,255,255,0.08)",
          }}
        />
      </div>
    </div>
  );
}

export default function FloatingShapesOptimized() {
  const ref = useRef<HTMLDivElement>(null);
  const [isNearViewport, setIsNearViewport] = useState(true);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const shouldFloat = isNearViewport && isDocumentVisible;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNearViewport(entry?.isIntersecting ?? false);
      },
      { rootMargin: "160px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onVisibilityChange = () => {
      setIsDocumentVisible(document.visibilityState === "visible");
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <style>{`
        @keyframes hero-shape-enter {
          0% {
            opacity: 0;
            transform: translate3d(0, -150px, 0) rotate(var(--shape-rotate-from));
          }

          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) rotate(var(--shape-rotate-to));
          }
        }

        @keyframes hero-shape-float {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, 18px, 0);
          }
        }
      `}</style>

      <ElegantShape
        delay={0.3}
        width={520}
        height={130}
        rotate={12}
        opacity={0.14}
        shouldFloat={shouldFloat}
        className="left-[-8%] top-[18%]"
      />

      <ElegantShape
        delay={0.5}
        width={380}
        height={95}
        rotate={-14}
        opacity={0.12}
        shouldFloat={shouldFloat}
        className="right-[-4%] top-[62%]"
      />

      <ElegantShape
        delay={0.4}
        width={240}
        height={65}
        rotate={-7}
        opacity={0.16}
        shouldFloat={shouldFloat}
        className="left-[8%] bottom-[8%]"
      />

      <ElegantShape
        delay={0.65}
        width={170}
        height={48}
        rotate={22}
        opacity={0.13}
        shouldFloat={shouldFloat}
        className="right-[18%] top-[8%]"
      />

      <ElegantShape
        delay={0.75}
        width={130}
        height={38}
        rotate={-28}
        opacity={0.11}
        shouldFloat={shouldFloat}
        className="left-[28%] top-[4%]"
      />
    </div>
  );
}
