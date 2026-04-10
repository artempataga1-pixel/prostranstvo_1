"use client";

import { motion } from "framer-motion";

// Pill-shaped floating shape — adapated from HeroGeometric / ElegantShape
// Colours tuned for our teal bg.png: white semi-transparent with subtle blur
function ElegantShape({
  className = "",
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  opacity = 0.18,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  opacity?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      style={{ position: "absolute", willChange: "transform" }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay,
        }}
        style={{ width, height, position: "relative" }}
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
      </motion.div>
    </motion.div>
  );
}

export default function FloatingShapes() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* Large pill — top-left */}
      <ElegantShape
        delay={0.3}
        width={520}
        height={130}
        rotate={12}
        opacity={0.14}
        className="left-[-8%] top-[18%]"
      />

      {/* Medium pill — top-right */}
      <ElegantShape
        delay={0.5}
        width={380}
        height={95}
        rotate={-14}
        opacity={0.12}
        className="right-[-4%] top-[62%]"
      />

      {/* Small pill — bottom-left */}
      <ElegantShape
        delay={0.4}
        width={240}
        height={65}
        rotate={-7}
        opacity={0.16}
        className="left-[8%] bottom-[8%]"
      />

      {/* Tiny pill — top-right corner */}
      <ElegantShape
        delay={0.65}
        width={170}
        height={48}
        rotate={22}
        opacity={0.13}
        className="right-[18%] top-[8%]"
      />

      {/* Tiny pill — top-center-left */}
      <ElegantShape
        delay={0.75}
        width={130}
        height={38}
        rotate={-28}
        opacity={0.11}
        className="left-[28%] top-[4%]"
      />
    </div>
  );
}
