"use client";
import { useEffect, useRef } from "react";
import { createAnimationActivityController } from "./animationActivity";

export default function Warehouse3D() {
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

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
      camera.position.set(5, 6, 7);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 768 ? 1.1 : 1.5));
      renderer.setClearColor(0x000000, 0);
      mount!.appendChild(renderer.domElement);

      const GREEN  = 0x10b981;
      const LIME   = 0x34d399;
      const TEAL2  = 0x6ee7b7;

      // Root
      const root = new THREE.Group();
      scene.add(root);

      // ── Floor grid ────────────────────────────────────────────────────────────
      const gridHelper = new THREE.GridHelper(8, 16, GREEN, GREEN);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (gridHelper.material as any).opacity = 0.18;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (gridHelper.material as any).transparent = true;
      root.add(gridHelper);

      // ── Shelf rows (boxes stacked) ────────────────────────────────────────────
      const SHELF_COLOR = new THREE.MeshBasicMaterial({ color: GREEN, transparent: true, opacity: 0.55, wireframe: true });
      const BOX_COLOR   = new THREE.MeshBasicMaterial({ color: LIME,  transparent: true, opacity: 0.35 });

      function addShelfRow(z: number, cols: number) {
        for (let c = 0; c < cols; c++) {
          const x = -3 + c * 1.5;
          for (let level = 0; level < 3; level++) {
            const box = new THREE.Mesh(
              new THREE.BoxGeometry(1.1, 0.4, 0.7),
              level === 0 ? BOX_COLOR : SHELF_COLOR,
            );
            box.position.set(x, 0.25 + level * 0.5, z);
            root.add(box);
          }
          // Vertical shelf frame
          const frame = new THREE.Mesh(
            new THREE.BoxGeometry(0.05, 1.8, 0.05),
            new THREE.MeshBasicMaterial({ color: GREEN, transparent: true, opacity: 0.4 }),
          );
          frame.position.set(x - 0.55, 0.9, z);
          root.add(frame);
          const frame2 = frame.clone();
          frame2.position.x = x + 0.55;
          root.add(frame2);
        }
      }

      addShelfRow(-2.8, 5);
      addShelfRow(-0.8, 5);
      addShelfRow(1.2,  5);

      // ── Corner pillars ────────────────────────────────────────────────────────
      [[-3.9, -3.9], [3.9, -3.9], [-3.9, 3.9], [3.9, 3.9]].forEach(([x, z]) => {
        const pillar = new THREE.Mesh(
          new THREE.BoxGeometry(0.15, 2.5, 0.15),
          new THREE.MeshBasicMaterial({ color: GREEN, transparent: true, opacity: 0.35 }),
        );
        pillar.position.set(x, 1.25, z);
        root.add(pillar);
      });

      // ── Warehouse outline frame ────────────────────────────────────────────────
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const framePoints: any[] = [
        new THREE.Vector3(-4, 0.01, -4), new THREE.Vector3(4, 0.01, -4),
        new THREE.Vector3(4, 0.01, 4),   new THREE.Vector3(-4, 0.01, 4),
        new THREE.Vector3(-4, 0.01, -4),
      ];
      root.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(framePoints),
        new THREE.LineBasicMaterial({ color: GREEN, transparent: true, opacity: 0.35 }),
      ));

      // ── ABC zone labels (thin planes) — represented as colored floor patches ──
      const zoneColors = [0x10b981, 0x34d399, 0x6ee7b7];
      [{ z: -2.8, c: zoneColors[0] }, { z: -0.8, c: zoneColors[1] }, { z: 1.2, c: zoneColors[2] }].forEach(({ z, c }) => {
        const zone = new THREE.Mesh(
          new THREE.PlaneGeometry(8, 1.2),
          new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: 0.04, side: THREE.DoubleSide }),
        );
        zone.rotation.x = -Math.PI / 2;
        zone.position.set(0, 0.02, z);
        root.add(zone);
      });

      // ── Scanning beam ────────────────────────────────────────────────────────
      const scanPlane = new THREE.Mesh(
        new THREE.PlaneGeometry(8, 0.05),
        new THREE.MeshBasicMaterial({ color: TEAL2, transparent: true, opacity: 0.55, side: THREE.DoubleSide }),
      );
      scanPlane.rotation.x = -Math.PI / 2;
      scanPlane.position.y = 0.03;
      root.add(scanPlane);

      // Scan glow line
      const scanLine = new THREE.Mesh(
        new THREE.PlaneGeometry(8, 0.02),
        new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6, side: THREE.DoubleSide }),
      );
      scanLine.rotation.x = -Math.PI / 2;
      scanLine.position.y = 0.04;
      root.add(scanLine);

      // ── Floating particles ────────────────────────────────────────────────────
      const NUM_P = window.innerWidth < 768 ? 20 : 60;
      const pPos = new Float32Array(NUM_P * 3);
      const pVel = new Float32Array(NUM_P * 3);
      for (let i = 0; i < NUM_P; i++) {
        pPos[i * 3]     = (Math.random() - 0.5) * 7;
        pPos[i * 3 + 1] = Math.random() * 2.2;
        pPos[i * 3 + 2] = (Math.random() - 0.5) * 7;
        pVel[i * 3]     = (Math.random() - 0.5) * 0.004;
        pVel[i * 3 + 1] = 0.003 + Math.random() * 0.004;
        pVel[i * 3 + 2] = (Math.random() - 0.5) * 0.004;
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
      const pMesh = new THREE.Points(
        pGeo,
        new THREE.PointsMaterial({ color: LIME, size: 0.04, transparent: true, opacity: 0.7, sizeAttenuation: true }),
      );
      root.add(pMesh);

      // ── Animation ─────────────────────────────────────────────────────────────
      let t = 0;
      let scanZ = -4;

      const animate = () => {
        if (disposed) return;
        animId = requestAnimationFrame(animate);
        t += 0.01;

        // Slow root rotation
        root.rotation.y = t * 0.07;

        // Scan beam sweep
        scanZ += 0.025;
        if (scanZ > 4) scanZ = -4;
        scanPlane.position.z = scanZ;
        scanLine.position.z  = scanZ;

        // Hub pulse on gridHelper
        const pulse = 0.12 + Math.sin(t * 2) * 0.04;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (gridHelper.material as any).opacity = pulse;

        // Particle drift upward, reset when too high
        const pos = pGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < NUM_P; i++) {
          pos[i * 3]     += pVel[i * 3];
          pos[i * 3 + 1] += pVel[i * 3 + 1];
          pos[i * 3 + 2] += pVel[i * 3 + 2];
          if (pos[i * 3 + 1] > 2.5) {
            pos[i * 3 + 1] = 0;
            pos[i * 3]     = (Math.random() - 0.5) * 7;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 7;
          }
        }
        pGeo.attributes.position.needsUpdate = true;

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
