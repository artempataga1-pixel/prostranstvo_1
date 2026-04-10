"use client";

import { motion, type Variants } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
  className?: string;
  as?: "div" | "section" | "h2" | "p";
}

export function FadeIn({ children, delay = 0, style, className, as = "div" }: FadeInProps) {
  const Tag = motion[as];
  return (
    <Tag
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={delay}
      style={style}
      className={className}
    >
      {children}
    </Tag>
  );
}
