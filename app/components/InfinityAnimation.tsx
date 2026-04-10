"use client";

import { useEffect, useRef } from "react";

function lem(t: number, a: number) {
  const s = Math.sin(t), c = Math.cos(t);
  const d = 1 + s * s;
  return { x: (a * c) / d, y: (a * s * c) / d };
}

const N = 300;

export default function InfinityAnimation() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef  = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas  = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let phase = 0;
    let rotAngle = 0;
    let lastW = 0, lastH = 0;
    let mx = 0.5, my = 0.5, pcx = 0, pcy = 0;
    let visible = true;

    // Pre-allocated typed arrays — reused every frame, no per-frame heap allocs
    const ptsX = new Float32Array(N + 1);
    const ptsY = new Float32Array(N + 1);

    const onMove = (e: MouseEvent) => {
      mx = e.clientX / window.innerWidth;
      my = e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    // IntersectionObserver — pause RAF when canvas is off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0].isIntersecting;
        if (isVisible && !visible) {
          visible = true;
          animId = requestAnimationFrame(draw);
        } else if (!isVisible) {
          visible = false;
          cancelAnimationFrame(animId);
        }
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    function buildPts(a: number, cx: number, cy: number, amp: number, off: number) {
      for (let i = 0; i <= N; i++) {
        const t  = (i / N) * Math.PI * 2;
        const p  = lem(t, a);
        const p2 = lem(t + 0.003, a);
        const dx = p2.x - p.x, dy = p2.y - p.y;
        const len = Math.hypot(dx, dy) || 1;
        const wave = Math.sin(t * 3 - phase + off) * amp;
        ptsX[i] = cx + p.x + (-dy / len) * wave;
        ptsY[i] = cy + p.y + (dx  / len) * wave;
      }
    }

    function strokePts() {
      ctx.beginPath();
      for (let i = 0; i <= N; i++) {
        if (i === 0) ctx.moveTo(ptsX[i], ptsY[i]);
        else         ctx.lineTo(ptsX[i], ptsY[i]);
      }
      ctx.stroke();
    }

    function draw() {
      const dpr = window.devicePixelRatio || 1;
      const w   = canvas.offsetWidth;
      const h   = canvas.offsetHeight;
      if (w < 1 || h < 1) { animId = requestAnimationFrame(draw); return; }

      if (w !== lastW || h !== lastH) {
        canvas.width  = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        // ctx.scale вызывается только здесь, внутри ветки resize — не накапливается
        ctx.scale(dpr, dpr);
        lastW = w; lastH = h;
      }

      // Parallax
      pcx += ((mx - 0.5) * 30 - pcx) * 0.055;
      pcy += ((my - 0.5) * 16 - pcy) * 0.055;
      wrapper.style.transform = `translate(${pcx}px, ${pcy}px)`;

      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const a  = (w - 100) * 0.44;

      function grad() {
        const g = ctx.createLinearGradient(-a * 1.05, 0, a * 1.05, 0);
        g.addColorStop(0,    "#f0abfc");
        g.addColorStop(0.3,  "#e879f9");
        g.addColorStop(0.5,  "#c4b5fd");
        g.addColorStop(0.7,  "#67e8f9");
        g.addColorStop(1,    "#22d3ee");
        return g;
      }

      // Вращение по оси Y (эффект монетки)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(Math.cos(rotAngle), 1);

      const STRANDS = 3;

      ctx.shadowBlur = 0;

      for (let wi = 0; wi < STRANDS; wi++) {
        const phaseOff = (wi / STRANDS) * Math.PI * 2;
        buildPts(a, 0, 0, 5, phaseOff);

        // Мягкий bloom без shadow (только полупрозрачный цветной stroke)
        ctx.strokeStyle = grad();
        ctx.lineWidth   = 22;
        ctx.globalAlpha = 0.15;
        strokePts();

        ctx.lineWidth   = 8;
        ctx.globalAlpha = 0.3;
        strokePts();

        // Чёткое ядро
        ctx.lineWidth   = 1.5;
        ctx.globalAlpha = 0.95;
        strokePts();
      }

      ctx.restore();

      ctx.globalAlpha = 1;
      ctx.shadowBlur  = 0;
      phase    += 0.045;
      rotAngle += 0.018;
      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{
        position:      "absolute",
        inset:         "-50px",
        transform:     "translate(0,0)",
        pointerEvents: "none",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      />
    </div>
  );
}
