"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let disposed = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }, { default: Lenis }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("lenis"),
      ]);

      if (disposed) return;

      gsap.registerPlugin(ScrollTrigger);
      const listenerCleanup: Array<() => void> = [];

      /* ── Lenis butter-smooth scroll ──────────────────────────── */
      const lenis = new Lenis({
        duration: 1.3,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.85,
        touchMultiplier: 1.6,
      });

      lenis.on("scroll", ScrollTrigger.update);

      const ticker = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);

      /* ── Scroll progress bar ─────────────────────────────────── */
      const bar = document.createElement("div");
      Object.assign(bar.style, {
        position: "fixed", top: "0", left: "0", height: "2px",
        width: "0%", background: "linear-gradient(90deg,#0ABAB5,#00fff5)",
        zIndex: "9999", pointerEvents: "none",
        boxShadow: "0 0 8px rgba(10,186,181,0.6)",
        willChange: "width", transition: "width 0.05s linear",
      });
      document.body.appendChild(bar);

      lenis.on("scroll", ({ progress }: { progress: number }) => {
        bar.style.width = `${progress * 100}%`;
      });

      /* ── GSAP context (single cleanup point) ─────────────────── */
      const ctx = gsap.context(() => {
        const sections = gsap.utils.toArray<HTMLElement>("section");

        /* perspective wrapper on main so children get real 3D depth */
        const main = document.querySelector<HTMLElement>("main");
        if (main) gsap.set(main, { perspective: 1400 });

        /* ── Section entrances handled by FadeIn (framer-motion) ── */
        /* GSAP only adds special effects: parallax, tilt, text reveal */
        sections.forEach((section, i) => {
          if (i === 0) return;

          /* blob parallax — only GPU props, max 2 per section */
          const blobs = Array.from(section.querySelectorAll<HTMLElement>("[style*='radial-gradient']")).slice(0, 2);
          blobs.forEach((el, bi) => {
            gsap.fromTo(el,
              { y: bi % 2 === 0 ? "8%" : "-8%", x: bi % 3 === 0 ? "-4%" : "4%" },
              {
                y: bi % 2 === 0 ? "-12%" : "12%", x: bi % 3 === 0 ? "4%" : "-4%",
                ease: "none",
                scrollTrigger: {
                  trigger: section,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 2.5,
                },
              }
            );
          });
        });

        /* ── Hero 3D mouse tilt ───────────────────────────────── */
        const hero = sections[0];
        if (hero) {
          let cx = 0, cy = 0;
          const inner = hero.querySelector<HTMLElement>("div") ?? hero;

          const onMove = (e: MouseEvent) => {
            cx = (e.clientX / window.innerWidth - 0.5) * 7;
            cy = (e.clientY / window.innerHeight - 0.5) * -4;
            gsap.to(inner, { rotateY: cx, rotateX: cy, duration: 2, ease: "power2.out", transformPerspective: 900 });
          };
          const onLeave = () => {
            gsap.to(inner, { rotateY: 0, rotateX: 0, duration: 2.5, ease: "elastic.out(1, 0.5)" });
          };

          hero.addEventListener("mousemove", onMove, { passive: true });
          hero.addEventListener("mouseleave", onLeave);
          listenerCleanup.push(() => {
            hero.removeEventListener("mousemove", onMove);
            hero.removeEventListener("mouseleave", onLeave);
          });
        }

        /* ── White cards 3D tilt on hover ─────────────────────── */
        document.querySelectorAll<HTMLElement>("div[style*='background: #ffffff'], div[style*='background-color: white']").forEach((card) => {
          const onMove = (e: MouseEvent) => {
            const r = card.getBoundingClientRect();
            const x = ((e.clientX - r.left) / r.width  - 0.5) * 10;
            const y = ((e.clientY - r.top)  / r.height - 0.5) * -7;
            gsap.to(card, { rotateY: x, rotateX: y, scale: 1.015, duration: 0.35, ease: "power2.out", transformPerspective: 700 });
          };
          const onLeave = () => {
            gsap.to(card, { rotateY: 0, rotateX: 0, scale: 1, duration: 0.7, ease: "elastic.out(1, 0.55)" });
          };
          card.addEventListener("mousemove", onMove, { passive: true });
          card.addEventListener("mouseleave", onLeave);
          listenerCleanup.push(() => {
            card.removeEventListener("mousemove", onMove);
            card.removeEventListener("mouseleave", onLeave);
          });
        });

        /* ── Heading text reveal ─────────────────────────────── */
        document.querySelectorAll<HTMLElement>("h2").forEach((el) => {
          gsap.fromTo(el,
            { opacity: 0, y: 20, clipPath: "inset(0 0 100% 0)" },
            {
              opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)",
              duration: 0.9, ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        });

        ScrollTrigger.refresh();
      });

      cleanup = () => {
        ctx.revert();
        listenerCleanup.forEach((disposeListener) => disposeListener());
        gsap.ticker.remove(ticker);
        lenis.destroy();
        bar.remove();
      };
    })().catch(console.error);

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, [pathname]);

  return null;
}
