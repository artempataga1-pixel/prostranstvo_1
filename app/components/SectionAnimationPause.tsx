"use client";
import { useEffect } from "react";

/**
 * Навешивает IntersectionObserver на каждый <section> страницы.
 * Когда секция уходит из viewport — добавляет класс "offscreen",
 * CSS-правило animation-play-state: paused останавливает все анимации внутри.
 */
export default function SectionAnimationPause() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section"));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle("offscreen", !entry.isIntersecting);
        }
      },
      // rootMargin: чуть раньше начинаем, чтобы анимация успела стартовать
      { rootMargin: "80px 0px 80px 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return null;
}
