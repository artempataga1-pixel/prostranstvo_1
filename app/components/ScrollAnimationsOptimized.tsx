"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollAnimationsOptimized() {
  const pathname = usePathname();

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersTouchScroll = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const browserWindow = window as Window & {
      requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    let cleanup: (() => void) | undefined;
    let disposed = false;
    let idleHandle: number | undefined;
    let timeoutHandle: number | undefined;

    const startAnimations = async () => {
      const [{ gsap }, { ScrollTrigger }, lenisModule] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        prefersTouchScroll ? Promise.resolve(null) : import("lenis"),
      ]);

      if (disposed) return;

      gsap.registerPlugin(ScrollTrigger);

      const listenerCleanup: Array<() => void> = [];
      const runtimeCleanup: Array<() => void> = [];

      const bar = document.createElement("div");
      Object.assign(bar.style, {
        position: "fixed",
        top: "0",
        left: "0",
        height: "2px",
        width: "0%",
        background: "linear-gradient(90deg,#0ABAB5,#00fff5)",
        zIndex: "9999",
        pointerEvents: "none",
        boxShadow: "0 0 8px rgba(10,186,181,0.6)",
        willChange: "width",
        transition: "width 0.05s linear",
      });
      document.body.appendChild(bar);

      const setBarProgress = (progress: number) => {
        bar.style.width = `${Math.max(0, Math.min(1, progress)) * 100}%`;
      };

      if (lenisModule?.default) {
        const Lenis = lenisModule.default;
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

        lenis.on("scroll", ({ progress }: { progress: number }) => {
          setBarProgress(progress);
        });

        runtimeCleanup.push(() => {
          gsap.ticker.remove(ticker);
          lenis.destroy();
        });
      } else {
        let scrollFrame = 0;

        const syncScrollState = () => {
          scrollFrame = 0;
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          setBarProgress(maxScroll > 0 ? window.scrollY / maxScroll : 0);
          ScrollTrigger.update();
        };

        const onScroll = () => {
          if (scrollFrame !== 0) return;
          scrollFrame = window.requestAnimationFrame(syncScrollState);
        };

        syncScrollState();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", syncScrollState);

        runtimeCleanup.push(() => {
          if (scrollFrame !== 0) {
            window.cancelAnimationFrame(scrollFrame);
          }
          window.removeEventListener("scroll", onScroll);
          window.removeEventListener("resize", syncScrollState);
        });
      }

      const ctx = gsap.context(() => {
        const sections = gsap.utils.toArray<HTMLElement>("section");
        const main = document.querySelector<HTMLElement>("main");
        if (main) gsap.set(main, { perspective: 1400 });

        sections.forEach((section, index) => {
          if (index === 0) return;

          const blobs = Array.from(section.querySelectorAll<HTMLElement>("[style*='radial-gradient']")).slice(0, 2);
          blobs.forEach((el, blobIndex) => {
            gsap.fromTo(
              el,
              { y: blobIndex % 2 === 0 ? "8%" : "-8%", x: blobIndex % 3 === 0 ? "-4%" : "4%" },
              {
                y: blobIndex % 2 === 0 ? "-12%" : "12%",
                x: blobIndex % 3 === 0 ? "4%" : "-4%",
                ease: "none",
                scrollTrigger: {
                  trigger: section,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 2.5,
                },
              },
            );
          });
        });

        const hero = sections[0];
        if (hero && canHover) {
          const title = hero.querySelector<HTMLElement>("[data-hero-title]");
          if (title) {
            const titleXTo = gsap.quickTo(title, "x", { duration: 0.4, ease: "power2.out" });
            const titleYTo = gsap.quickTo(title, "y", { duration: 0.4, ease: "power2.out" });
            let heroRect: DOMRect | null = null;
            let heroFrame = 0;
            let heroX = 0;
            let heroY = 0;

            const flushHeroMove = () => {
              heroFrame = 0;
              titleXTo(heroX);
              titleYTo(heroY);
            };

            const onMove = (event: PointerEvent) => {
              if (!heroRect) {
                heroRect = hero.getBoundingClientRect();
              }

              heroX = ((event.clientX - heroRect.left) / heroRect.width - 0.5) * 34;
              heroY = ((event.clientY - heroRect.top) / heroRect.height - 0.5) * 18;

              if (heroFrame !== 0) return;
              heroFrame = window.requestAnimationFrame(flushHeroMove);
            };

            const onEnter = () => {
              heroRect = hero.getBoundingClientRect();
              hero.addEventListener("pointermove", onMove, { passive: true });
            };

            const onLeave = () => {
              hero.removeEventListener("pointermove", onMove);
              heroRect = null;
              if (heroFrame !== 0) {
                window.cancelAnimationFrame(heroFrame);
                heroFrame = 0;
              }
              titleXTo(0);
              titleYTo(0);
            };

            hero.addEventListener("pointerenter", onEnter);
            hero.addEventListener("pointerleave", onLeave);
            listenerCleanup.push(() => {
              hero.removeEventListener("pointermove", onMove);
              hero.removeEventListener("pointerenter", onEnter);
              hero.removeEventListener("pointerleave", onLeave);
              if (heroFrame !== 0) {
                window.cancelAnimationFrame(heroFrame);
              }
            });
          }
        }

        if (canHover) {
          document
            .querySelectorAll<HTMLElement>("div[style*='background: #ffffff'], div[style*='background-color: white']")
            .forEach((card) => {
              gsap.set(card, { transformPerspective: 700 });
              const rotateYTo = gsap.quickTo(card, "rotateY", { duration: 0.2, ease: "power2.out" });
              const rotateXTo = gsap.quickTo(card, "rotateX", { duration: 0.2, ease: "power2.out" });
              const scaleTo = gsap.quickTo(card, "scale", { duration: 0.2, ease: "power2.out" });
              let cardRect: DOMRect | null = null;
              let tiltFrame = 0;
              let tiltX = 0;
              let tiltY = 0;

              const flushTilt = () => {
                tiltFrame = 0;
                rotateYTo(tiltX);
                rotateXTo(tiltY);
              };

              const onMove = (event: PointerEvent) => {
                if (!cardRect) {
                  cardRect = card.getBoundingClientRect();
                }

                tiltX = ((event.clientX - cardRect.left) / cardRect.width - 0.5) * 10;
                tiltY = ((event.clientY - cardRect.top) / cardRect.height - 0.5) * -7;

                if (tiltFrame !== 0) return;
                tiltFrame = window.requestAnimationFrame(flushTilt);
              };

              const onEnter = () => {
                cardRect = card.getBoundingClientRect();
                scaleTo(1.015);
                card.addEventListener("pointermove", onMove, { passive: true });
              };

              const onLeave = () => {
                card.removeEventListener("pointermove", onMove);
                cardRect = null;
                if (tiltFrame !== 0) {
                  window.cancelAnimationFrame(tiltFrame);
                  tiltFrame = 0;
                }
                rotateYTo(0);
                rotateXTo(0);
                scaleTo(1);
              };

              card.addEventListener("pointerenter", onEnter);
              card.addEventListener("pointerleave", onLeave);
              listenerCleanup.push(() => {
                card.removeEventListener("pointermove", onMove);
                card.removeEventListener("pointerenter", onEnter);
                card.removeEventListener("pointerleave", onLeave);
                if (tiltFrame !== 0) {
                  window.cancelAnimationFrame(tiltFrame);
                }
              });
            });
        }

        document.querySelectorAll<HTMLElement>("h2").forEach((heading) => {
          gsap.fromTo(
            heading,
            { opacity: 0, y: 20, clipPath: "inset(0 0 100% 0)" },
            {
              opacity: 1,
              y: 0,
              clipPath: "inset(0 0 0% 0)",
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 88%",
                toggleActions: "play none none none",
                once: true,
              },
            },
          );
        });

        ScrollTrigger.refresh();
      });

      cleanup = () => {
        ctx.revert();
        listenerCleanup.forEach((disposeListener) => disposeListener());
        runtimeCleanup.forEach((disposeRuntime) => disposeRuntime());
        bar.remove();
      };
    };

    const scheduleStart = () => {
      if (browserWindow.requestIdleCallback) {
        idleHandle = browserWindow.requestIdleCallback(() => {
          void startAnimations().catch(console.error);
        }, { timeout: 180 });
        return;
      }

      timeoutHandle = window.setTimeout(() => {
        void startAnimations().catch(console.error);
      }, 40);
    };

    scheduleStart();

    return () => {
      disposed = true;
      if (idleHandle !== undefined && browserWindow.cancelIdleCallback) {
        browserWindow.cancelIdleCallback(idleHandle);
      }
      if (timeoutHandle !== undefined) {
        window.clearTimeout(timeoutHandle);
      }
      cleanup?.();
    };
  }, [pathname]);

  return null;
}
