"use client";
import { useEffect, useRef } from "react";
import { createAnimationActivityController } from "./animationActivity";

export default function CRM3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let animId = 0;
    let disposed = false;
    let cleanup: (() => void) | undefined;

    async function init() {
      const THREE = await import("three");

      const w = mount!.clientWidth || 600;
      const h = mount!.clientHeight || 600;

      // Scene
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
      camera.position.set(0, 0, 6.5);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 768 ? 1.1 : 1.5));
      renderer.setClearColor(0x000000, 0);
      mount!.appendChild(renderer.domElement);

      const AMBER  = 0x38bdf8;
      const GOLD   = 0x7dd3fc;
      const ORANGE = 0x0ea5e9;
      const WHITE  = 0xffffff;

      // Root group — slow float
      const root = new THREE.Group();
      scene.add(root);

      // ── Central hub ──────────────────────────────────────────────────────────
      const hubHalo = new THREE.Mesh(
        new THREE.SphereGeometry(0.55, 24, 24),
        new THREE.MeshBasicMaterial({ color: AMBER, transparent: true, opacity: 0.08 }),
      );
      root.add(hubHalo);

      const hubMid = new THREE.Mesh(
        new THREE.SphereGeometry(0.38, 20, 20),
        new THREE.MeshBasicMaterial({ color: AMBER, transparent: true, opacity: 0.18 }),
      );
      root.add(hubMid);

      const hubCore = new THREE.Mesh(
        new THREE.SphereGeometry(0.18, 16, 16),
        new THREE.MeshBasicMaterial({ color: GOLD, transparent: true, opacity: 0.95 }),
      );
      root.add(hubCore);

      // ── 3 orbital rings at different tilt angles ──────────────────────────────
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const rings: any[] = [];
      const ringDefs = [
        { tiltX: 0,   tiltZ: 0,    r: 1.6, color: AMBER,  nodes: 4, speed: 0.28  },
        { tiltX: 1.1, tiltZ: 0.4,  r: 2.3, color: GOLD,   nodes: 5, speed: -0.18 },
        { tiltX: 0.6, tiltZ: -0.8, r: 2.9, color: ORANGE, nodes: 6, speed: 0.14  },
      ];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const nodeGroups: { mesh: any; ringGroup: any; angle: number; ringIdx: number }[] = [];

      ringDefs.forEach((def, ri) => {
        const rg = new THREE.Group();
        rg.rotation.x = def.tiltX;
        rg.rotation.z = def.tiltZ;
        root.add(rg);
        rings.push(rg);

        // Ring line
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const pts: any[] = [];
        for (let i = 0; i <= 128; i++) {
          const a = (i / 128) * Math.PI * 2;
          pts.push(new THREE.Vector3(Math.cos(a) * def.r, Math.sin(a) * def.r, 0));
        }
        const ringLine = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(pts),
          new THREE.LineBasicMaterial({ color: def.color, transparent: true, opacity: 0.12 }),
        );
        rg.add(ringLine);

        // Nodes on ring
        for (let n = 0; n < def.nodes; n++) {
          const angle = (n / def.nodes) * Math.PI * 2;
          const ng = new THREE.Group();

          const halo = new THREE.Mesh(
            new THREE.SphereGeometry(0.16, 10, 10),
            new THREE.MeshBasicMaterial({ color: def.color, transparent: true, opacity: 0.10 }),
          );
          const core = new THREE.Mesh(
            new THREE.SphereGeometry(0.07, 8, 8),
            new THREE.MeshBasicMaterial({ color: def.color, transparent: true, opacity: 0.90 }),
          );
          ng.add(halo);
          ng.add(core);
          ng.position.set(Math.cos(angle) * def.r, Math.sin(angle) * def.r, 0);
          rg.add(ng);

          nodeGroups.push({ mesh: ng, ringGroup: rg, angle, ringIdx: ri });
        }
      });

      // ── Spoke lines hub → ring-1 nodes ───────────────────────────────────────
      // (drawn as thin lines from center to each ring-1 node)
      const spokeGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(1, 0, 0),
      ]);
      for (let n = 0; n < ringDefs[0].nodes; n++) {
        const angle = (n / ringDefs[0].nodes) * Math.PI * 2;
        const end = new THREE.Vector3(
          Math.cos(angle) * ringDefs[0].r,
          Math.sin(angle) * ringDefs[0].r,
          0,
        );
        // Transform by ring tilt
        end.applyEuler(new THREE.Euler(ringDefs[0].tiltX, 0, ringDefs[0].tiltZ));
        const sg = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), end]);
        root.add(new THREE.Line(
          sg,
          new THREE.LineBasicMaterial({ color: AMBER, transparent: true, opacity: 0.09 }),
        ));
      }
      void spokeGeo; // suppress unused warning

      // ── Signal pulses (small spheres travelling along rings) ──────────────────
      const NUM_SIGNALS = 9;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const signals: any[] = [];
      const sigData: { ringIdx: number; angle: number; speed: number; color: number }[] = [];

      for (let i = 0; i < NUM_SIGNALS; i++) {
        const ri = i % 3;
        const def = ringDefs[ri];
        const sig = new THREE.Mesh(
          new THREE.SphereGeometry(0.055, 6, 6),
          new THREE.MeshBasicMaterial({ color: def.color, transparent: true, opacity: 0.85 }),
        );
        rings[ri].add(sig);
        signals.push(sig);
        sigData.push({ ringIdx: ri, angle: Math.random() * Math.PI * 2, speed: 0.018 + Math.random() * 0.022, color: def.color });
      }

      // ── Floating particles ────────────────────────────────────────────────────
      const NUM_PART = window.innerWidth < 768 ? 20 : 55;
      const partPositions = new Float32Array(NUM_PART * 3);
      const partSpeeds = new Float32Array(NUM_PART * 3);
      for (let i = 0; i < NUM_PART; i++) {
        const r = 1.5 + Math.random() * 2.2;
        const theta = Math.random() * Math.PI * 2;
        const phi   = Math.acos(2 * Math.random() - 1);
        partPositions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
        partPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        partPositions[i * 3 + 2] = r * Math.cos(phi);
        partSpeeds[i * 3]     = (Math.random() - 0.5) * 0.003;
        partSpeeds[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
        partSpeeds[i * 3 + 2] = (Math.random() - 0.5) * 0.003;
      }
      const partGeo  = new THREE.BufferGeometry();
      partGeo.setAttribute("position", new THREE.BufferAttribute(partPositions, 3));
      const partMesh = new THREE.Points(
        partGeo,
        new THREE.PointsMaterial({ color: GOLD, size: 0.035, transparent: true, opacity: 0.5, sizeAttenuation: true }),
      );
      root.add(partMesh);

      // ── CRM stage labels (thin planes with text as SVG canvas texture) ────────
      // We'll skip canvas-text for simplicity and just add tick marks
      void WHITE;

      // ── Animation ─────────────────────────────────────────────────────────────
      let t = 0;
      const animate = () => {
        if (disposed) return;
        animId = requestAnimationFrame(animate);
        t += 0.01;

        // Root float
        root.position.y = Math.sin(t * 0.5) * 0.08;
        root.rotation.y = t * 0.06;

        // Rings spin
        rings[0].rotation.z = t * ringDefs[0].speed;
        rings[1].rotation.z = t * ringDefs[1].speed;
        rings[2].rotation.z = t * ringDefs[2].speed;

        // Hub pulse
        const pulse = 0.9 + Math.sin(t * 1.8) * 0.12;
        hubHalo.scale.setScalar(pulse);

        // Signals move along rings
        for (let i = 0; i < signals.length; i++) {
          sigData[i].angle += sigData[i].speed;
          const ri = sigData[i].ringIdx;
          const def = ringDefs[ri];
          signals[i].position.set(
            Math.cos(sigData[i].angle) * def.r,
            Math.sin(sigData[i].angle) * def.r,
            0,
          );
        }

        // Particle drift
        const pos = partGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < NUM_PART; i++) {
          pos[i * 3]     += partSpeeds[i * 3];
          pos[i * 3 + 1] += partSpeeds[i * 3 + 1];
          pos[i * 3 + 2] += partSpeeds[i * 3 + 2];
          const dx = pos[i * 3], dy = pos[i * 3 + 1], dz = pos[i * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist > 3.5 || dist < 1.2) {
            partSpeeds[i * 3]     *= -1;
            partSpeeds[i * 3 + 1] *= -1;
            partSpeeds[i * 3 + 2] *= -1;
          }
        }
        partGeo.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
      };

      const stopAnimation = () => {
        if (animId === 0) return;
        cancelAnimationFrame(animId);
        animId = 0;
      };

      const startAnimation = () => {
        if (disposed || animId !== 0) return;
        animId = requestAnimationFrame(animate);
      };

      const activityController = createAnimationActivityController({
        node: mount!,
        onActivate: startAnimation,
        onDeactivate: stopAnimation,
        rootMargin: "260px",
      });

      cleanup = () => {
        activityController.cleanup();
        stopAnimation();
        renderer.dispose();
        if (mount && renderer.domElement.parentNode === mount) {
          mount.removeChild(renderer.domElement);
        }
      };
    }

    init();
    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
}
