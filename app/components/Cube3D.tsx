"use client";
import { useEffect, useRef } from "react";
import { createAnimationActivityController } from "./animationActivity";

type CleanupMount = HTMLDivElement & {
  __cleanup?: () => void;
};

export default function Cube3D() {
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
      const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
      camera.position.set(3.8, 3.0, 3.8);
      camera.lookAt(0, 0, 0);

      const root = new THREE.Group();
      scene.add(root);

      // Outer wireframe cube
      const outerEdges = new THREE.EdgesGeometry(new THREE.BoxGeometry(2.2, 2.2, 2.2));
      const outerMat = new THREE.LineBasicMaterial({ color: 0x0abab5, transparent: true, opacity: 0.55 });
      const outerCube = new THREE.LineSegments(outerEdges, outerMat);
      root.add(outerCube);

      // Inner wireframe cube (counter-rotates)
      const innerEdges = new THREE.EdgesGeometry(new THREE.BoxGeometry(1.2, 1.2, 1.2));
      const innerMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.38 });
      const innerCube = new THREE.LineSegments(innerEdges, innerMat);
      root.add(innerCube);

      // Orbit torus ring 1
      const ring1 = new THREE.Mesh(
        new THREE.TorusGeometry(1.55, 0.014, 8, 80),
        new THREE.MeshBasicMaterial({ color: 0x0abab5, transparent: true, opacity: 0.32 }),
      );
      ring1.rotation.x = Math.PI * 0.35;
      root.add(ring1);

      // Orbit torus ring 2
      const ring2 = new THREE.Mesh(
        new THREE.TorusGeometry(1.75, 0.009, 8, 80),
        new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.18 }),
      );
      ring2.rotation.x = Math.PI * 0.65;
      ring2.rotation.z = Math.PI * 0.28;
      root.add(ring2);

      // Central sphere
      root.add(
        Object.assign(
          new THREE.Mesh(
            new THREE.SphereGeometry(0.16, 16, 16),
            new THREE.MeshBasicMaterial({ color: 0x0abab5, transparent: true, opacity: 0.95 }),
          ),
        ),
      );

      // Floating particles
      const pCount = 64;
      const pPos = new Float32Array(pCount * 3);
      for (let i = 0; i < pCount; i++) {
        const r = 1.4 + Math.random() * 2.4;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        pPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
        pPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        pPos[i * 3 + 2] = r * Math.cos(phi);
      }
      const partGeo = new THREE.BufferGeometry();
      partGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
      root.add(new THREE.Points(
        partGeo,
        new THREE.PointsMaterial({ color: 0x0abab5, size: 0.045, transparent: true, opacity: 0.42 }),
      ));

      const animate = () => {
        if (disposed) return;
        animId = requestAnimationFrame(animate);
        const t = Date.now() * 0.001;

        root.rotation.y = t * 0.22;
        root.rotation.x = Math.sin(t * 0.17) * 0.10;

        innerCube.rotation.y = -t * 0.55;
        innerCube.rotation.x = Math.cos(t * 0.24) * 0.14;

        ring1.rotation.z = t * 0.28;
        ring2.rotation.z = -t * 0.18;

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
