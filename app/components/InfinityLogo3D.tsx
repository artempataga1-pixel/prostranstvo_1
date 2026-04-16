"use client";
import { useEffect, useRef } from "react";
import { createAnimationActivityController } from "./animationActivity";

type CleanupMount = HTMLDivElement & {
  __cleanup?: () => void;
};

function createLemniscateCurve(THREE: typeof import("three"), scale: number) {
  const points = Array.from({ length: 301 }, (_, index) => {
    const t = index / 300;
    const a = t * Math.PI * 2;
    const denom = 1 + Math.sin(a) * Math.sin(a);
    const x = (scale * Math.cos(a)) / denom;
    const y = (scale * Math.sin(a) * Math.cos(a)) / denom;
    const z = Math.sin(a * 2) * scale * 0.18;

    return new THREE.Vector3(x, y, z);
  });

  return new THREE.CatmullRomCurve3(points, true, "centripetal");
}

export default function InfinityLogo3D() {
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
      const w = mount.clientWidth;
      const h = mount.clientHeight;

      // Scene & camera
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
      camera.position.z = 4.2;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 768 ? 1.1 : 1.5));
      renderer.setSize(w, h);
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      const curve = createLemniscateCurve(THREE, 1.35);
      const TUBE_SEGMENTS = 200;

      // ── Core glowing tube ─────────────────────────────────────────
      const coreGeo = new THREE.TubeGeometry(curve, TUBE_SEGMENTS, 0.055, 8, true);
      const coreMat = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uColor1: { value: new THREE.Color("#0ABAB5") },
          uColor2: { value: new THREE.Color("#aff5f3") },
          uColor3: { value: new THREE.Color("#ffffff") },
        },
        vertexShader: /* glsl */ `
          varying vec2 vUv;
          varying float vZ;
          void main() {
            vUv = uv;
            vZ = position.z;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: /* glsl */ `
          uniform float uTime;
          uniform vec3 uColor1;
          uniform vec3 uColor2;
          uniform vec3 uColor3;
          varying vec2 vUv;
          varying float vZ;

          void main() {
            // Flow bands along the tube length (U axis)
            float flow1 = sin(vUv.x * 6.2832 * 5.0 - uTime * 2.5) * 0.5 + 0.5;
            float flow2 = sin(vUv.x * 6.2832 * 9.0 + uTime * 1.8) * 0.5 + 0.5;

            // Cross-section glow — hottest at center (V = 0.5)
            float cv = vUv.y * 2.0 - 1.0;           // -1..1
            float glow = 1.0 - abs(cv);
            glow = pow(glow, 1.4);

            // Hot-spot: short bright pulse moving along the tube
            float spark = pow(flow1, 6.0) * pow(flow2, 4.0);

            vec3 col = mix(uColor1, uColor2, flow1 * 0.6);
            col = mix(col, uColor3, spark * glow * 0.85);

            // Depth darkening so crossing point stays interesting
            col *= 0.85 + 0.15 * glow;

            float alpha = glow * (0.75 + flow1 * 0.25);
            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      });
      const coreTube = new THREE.Mesh(coreGeo, coreMat);
      scene.add(coreTube);

      // ── Mid glow tube ─────────────────────────────────────────────
      const midGeo = new THREE.TubeGeometry(curve, TUBE_SEGMENTS, 0.13, 8, true);
      const midMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 } },
        vertexShader: /* glsl */ `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: /* glsl */ `
          uniform float uTime;
          varying vec2 vUv;
          void main() {
            float flow = sin(vUv.x * 6.2832 * 4.0 - uTime * 2.0) * 0.5 + 0.5;
            float glow = 1.0 - abs(vUv.y * 2.0 - 1.0);
            glow = pow(glow, 3.0);
            vec3 col = vec3(0.039, 0.729, 0.710); // #0ABAB5
            gl_FragColor = vec4(col, glow * (0.22 + flow * 0.18));
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      });
      const midTube = new THREE.Mesh(midGeo, midMat);
      scene.add(midTube);

      // ── Outer halo tube ───────────────────────────────────────────
      const haloGeo = new THREE.TubeGeometry(curve, TUBE_SEGMENTS, 0.28, 8, true);
      const haloMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 } },
        vertexShader: /* glsl */ `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: /* glsl */ `
          uniform float uTime;
          varying vec2 vUv;
          void main() {
            float flow = sin(vUv.x * 6.2832 * 3.0 - uTime * 1.4) * 0.5 + 0.5;
            float glow = 1.0 - abs(vUv.y * 2.0 - 1.0);
            glow = pow(glow, 5.0);
            vec3 col = vec3(0.039, 0.729, 0.710);
            gl_FragColor = vec4(col, glow * 0.10 * (0.6 + flow * 0.4));
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      });
      const haloTube = new THREE.Mesh(haloGeo, haloMat);
      scene.add(haloTube);

      // Group them all so rotation is synced
      const group = new THREE.Group();
      group.add(coreTube, midTube, haloTube);
      // Slight initial tilt for 3-D feel
      group.rotation.x = 0.22;
      scene.add(group);

      // ── Animate ───────────────────────────────────────────────────
      let clock = 0;
      function animate() {
        if (disposed) return;
        animId = requestAnimationFrame(animate);
        clock += 0.014;

        coreMat.uniforms.uTime.value = clock;
        midMat.uniforms.uTime.value = clock;
        haloMat.uniforms.uTime.value = clock;

        // Slow continuous Y rotation + gentle breath-like X oscillation
        group.rotation.y = clock * 0.35;
        group.rotation.x = 0.22 + Math.sin(clock * 0.4) * 0.12;

        renderer.render(scene, camera);
      }

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

      // Resize handler
      const onResize = () => {
        if (!mount) return;
        const nw = mount.clientWidth;
        const nh = mount.clientHeight;
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh);
      };
      window.addEventListener("resize", onResize);

      // Store cleanup on ref so the return closure can reach it
      mount.__cleanup = () => {
        activityController.cleanup();
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        coreGeo.dispose();
        coreMat.dispose();
        midGeo.dispose();
        midMat.dispose();
        haloGeo.dispose();
        haloMat.dispose();
        if (renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      };
    }

    init();

    return () => {
      disposed = true;
      mount.__cleanup?.();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
}
