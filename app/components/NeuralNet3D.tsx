"use client";
import { useEffect, useRef } from "react";
import type { Mesh, Vector3 } from "three";
import { createAnimationActivityController } from "./animationActivity";

type CleanupMount = HTMLDivElement & {
  __cleanup?: () => void;
};

export default function NeuralNet3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;
    const mount = mountNode as CleanupMount;

    let animId = 0;
    let disposed = false;

    async function init() {
      const THREE = await import("three");
      if (disposed) return;
      const w = mount.clientWidth || 400;
      const h = mount.clientHeight || 400;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, premultipliedAlpha: false, powerPreference: "high-performance" });
      renderer.setPixelRatio(Math.min(devicePixelRatio, window.innerWidth < 768 ? 1.1 : 1.5));
      renderer.setSize(w, h);
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100);
      camera.position.z = 7.5;
      camera.lookAt(0, 0, 0);

      const root = new THREE.Group();
      scene.add(root);

      const PURPLE = 0x8b5cf6;
      const LIGHT_PURPLE = 0xa78bfa;
      const CYAN = 0x0abab5;

      // Layer definitions
      const layerDefs = [
        { x: -2.4, count: 4, color: PURPLE },
        { x: 0,    count: 5, color: LIGHT_PURPLE },
        { x: 2.4,  count: 3, color: CYAN },
      ];

      // Build node positions in root-local space
      const allLayers = layerDefs.map(({ x, count }) => {
        const spread = 3.2;
        const step = count > 1 ? spread / (count - 1) : 0;
        return Array.from({ length: count }, (_, i) =>
          new THREE.Vector3(x, -spread / 2 + i * step, 0),
        );
      });

      // Node meshes
      const nodeMeshes: Mesh[] = [];
      allLayers.forEach((layer, li) => {
        const { color } = layerDefs[li];
        layer.forEach((pos) => {
          // Halo ring
          const halo = new THREE.Mesh(
            new THREE.SphereGeometry(0.22, 12, 12),
            new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.13 }),
          );
          halo.position.copy(pos);
          root.add(halo);

          // Core
          const core = new THREE.Mesh(
            new THREE.SphereGeometry(0.10, 10, 10),
            new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.88 }),
          );
          core.position.copy(pos);
          root.add(core);
          nodeMeshes.push(core);
        });
      });

      // Static connection lines + collect pairs
      const connectionPairs: [Vector3, Vector3][] = [];
      for (let li = 0; li < allLayers.length - 1; li++) {
        for (const from of allLayers[li]) {
          for (const to of allLayers[li + 1]) {
            connectionPairs.push([from.clone(), to.clone()]);
            const lineGeo = new THREE.BufferGeometry().setFromPoints([from, to]);
            root.add(new THREE.Line(
              lineGeo,
              new THREE.LineBasicMaterial({ color: PURPLE, transparent: true, opacity: 0.13 }),
            ));
          }
        }
      }

      // Signal pulses — small spheres traveling along connections
      const NUM_SIGNALS = 10;
      const signals: Mesh[] = [];
      const sigData: { from: Vector3; to: Vector3; t: number; speed: number }[] = [];

      for (let i = 0; i < NUM_SIGNALS; i++) {
        const pair = connectionPairs[Math.floor(Math.random() * connectionPairs.length)];
        const sig = new THREE.Mesh(
          new THREE.SphereGeometry(0.065, 8, 8),
          new THREE.MeshBasicMaterial({ color: i % 3 === 0 ? CYAN : LIGHT_PURPLE, transparent: true, opacity: 0.92 }),
        );
        root.add(sig);
        signals.push(sig);
        sigData.push({ from: pair[0].clone(), to: pair[1].clone(), t: Math.random(), speed: 0.005 + Math.random() * 0.009 });
      }

      // Orbit ring
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(2.4, 0.014, 8, 80),
        new THREE.MeshBasicMaterial({ color: PURPLE, transparent: true, opacity: 0.22 }),
      );
      ring.rotation.x = Math.PI * 0.42;
      root.add(ring);

      // Ambient particles
      const pCount = window.innerWidth < 768 ? 20 : 50;
      const pPos = new Float32Array(pCount * 3);
      for (let i = 0; i < pCount; i++) {
        pPos[i * 3]     = (Math.random() - 0.5) * 7;
        pPos[i * 3 + 1] = (Math.random() - 0.5) * 5.5;
        pPos[i * 3 + 2] = (Math.random() - 0.5) * 3.5;
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
      root.add(new THREE.Points(
        pGeo,
        new THREE.PointsMaterial({ color: PURPLE, size: 0.04, transparent: true, opacity: 0.32 }),
      ));

      const animate = () => {
        if (disposed) return;
        animId = requestAnimationFrame(animate);
        const t = Date.now() * 0.001;

        // Gentle oscillation
        root.rotation.y = Math.sin(t * 0.22) * 0.48;
        root.rotation.x = Math.sin(t * 0.15) * 0.07;

        // Advance signals
        sigData.forEach((sd, i) => {
          sd.t += sd.speed;
          if (sd.t >= 1) {
            sd.t = 0;
            const pair = connectionPairs[Math.floor(Math.random() * connectionPairs.length)];
            sd.from = pair[0].clone();
            sd.to = pair[1].clone();
          }
          signals[i].position.lerpVectors(sd.from, sd.to, sd.t);
        });

        // Pulsate nodes
        nodeMeshes.forEach((m, i) => {
          const s = 1 + Math.sin(t * 2.2 + i * 0.75) * 0.12;
          m.scale.setScalar(s);
        });

        ring.rotation.z = t * 0.24;

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
        node: mount,
        onActivate: startAnimation,
        onDeactivate: stopAnimation,
        rootMargin: "260px",
      });

      const onResize = () => {
        const nw = mount.clientWidth;
        const nh = mount.clientHeight;
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh);
      };
      window.addEventListener("resize", onResize);

      mount.__cleanup = () => {
        activityController.cleanup();
        window.removeEventListener("resize", onResize);
        stopAnimation();
        renderer.dispose();
        if (renderer.domElement.parentNode)
          renderer.domElement.parentNode.removeChild(renderer.domElement);
      };
    }

    init();
    return () => {
      disposed = true;
      cancelAnimationFrame(animId);
      mount.__cleanup?.();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%", pointerEvents: "none" }} />;
}
