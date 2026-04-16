"use client";
import { useEffect, useRef } from "react";
import { createAnimationActivityController } from "./animationActivity";

type CleanupMount = HTMLDivElement & {
  __cleanup?: () => void;
};

export default function HeroSphere() {
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

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, premultipliedAlpha: false, powerPreference: "high-performance" });
      renderer.setPixelRatio(Math.min(devicePixelRatio, window.innerWidth < 768 ? 1.1 : 1.5));
      renderer.setSize(w, h);
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100);
      camera.position.z = 2.45;

      // 64×64 сегментов достаточно — шейдер делает всю визуальную работу
      const geo = new THREE.SphereGeometry(1, 64, 64);

      // Original SVG sphere: #0ABAB5 → #0A817D gradient, white inner glow at top
      const mat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 } },
        vertexShader: /* glsl */`
          varying vec3 vNormal;
          varying vec3 vViewDir;
          varying vec3 vWorldPos;
          varying vec2 vUv;
          void main() {
            vec4 worldPos = modelMatrix * vec4(position, 1.0);
            vec4 viewPos  = viewMatrix * worldPos;
            vNormal   = normalize(normalMatrix * normal);
            vViewDir  = normalize(-viewPos.xyz);
            vWorldPos = worldPos.xyz;
            vUv       = uv;
            gl_Position = projectionMatrix * viewPos;
          }
        `,
        fragmentShader: /* glsl */`
          uniform float uTime;
          varying vec3 vNormal;
          varying vec3 vViewDir;
          varying vec3 vWorldPos;
          varying vec2 vUv;

          void main() {
            // Rotating light — creates visible 3D depth
            float la = uTime * 0.25;
            vec3 lightDir = normalize(vec3(sin(la) * 1.2, 3.0, cos(la) * 1.2 + 2.0));
            vec3 n = normalize(vNormal);
            vec3 v = normalize(vViewDir);
            vec3 h = normalize(lightDir + v);

            // SVG colours: #0ABAB5 → #0A817D
            vec3 colTop = vec3(0.039, 0.729, 0.710);
            vec3 colBot = vec3(0.039, 0.506, 0.490);
            vec3 base   = mix(colBot, colTop, vUv.y);

            // High ambient so sides stay bright (SVG had no dark sides)
            float diff    = max(dot(n, lightDir), 0.0);
            float ambient = 0.90;
            vec3  col     = base * (ambient + diff * 0.10);

            // Strong white inner glow — the SVG had feGaussianBlur 125px inner shadow
            // Replicate: bright white spreading from top pole across most of dome
            float topDot  = dot(n, vec3(0.0, 1.0, 0.15));
            float topGlow = smoothstep(-0.2, 1.0, topDot);  // starts before the top
            topGlow       = pow(topGlow, 0.9) * 1.1;         // wide, strong spread
            col += vec3(1.0, 1.0, 1.0) * topGlow;

            // Specular
            float spec = pow(max(dot(n, h), 0.0), 50.0) * 0.5;
            col += vec3(1.0) * spec;

            // Fade silhouette edge smoothly into background
            // sil=1 at face-on, sil=0 at silhouette ring
            float sil   = abs(dot(n, v));
            float alpha = smoothstep(0.0, 0.26, sil);

            gl_FragColor = vec4(col, alpha);
          }
        `,
        transparent: true,
        depthWrite: false,
      });

      const sphere = new THREE.Mesh(geo, mat);
      // Move sphere down so apex (y_world = pos.y + 1 = 0.86) sits well below canvas top
      // Canvas top shows y_world ≈ 0.94 → smooth transparent arc above dome tip
      sphere.position.y = -0.14;
      scene.add(sphere);

      function animate() {
        if (disposed) return;
        animId = requestAnimationFrame(animate);
        const t = Date.now() * 0.001;
        mat.uniforms.uTime.value = t;

        // Slow Y rotation shows 3D depth
        sphere.rotation.y = t * 0.07;
        sphere.rotation.x = Math.sin(t * 0.12) * 0.03;

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
        renderer.dispose();
        geo.dispose();
        mat.dispose();
        if (renderer.domElement.parentNode)
          renderer.domElement.parentNode.removeChild(renderer.domElement);
      };
    }

    // Небольшая задержка чтобы не конкурировать с DataCrystal3D и ShaderBackground при старте
    const startTimer = setTimeout(() => { void init(); }, 150);
    return () => {
      clearTimeout(startTimer);
      disposed = true;
      mount.__cleanup?.();
    };
  }, []);

  return (
    <div ref={mountRef} style={{ width: "100%", height: "100%", pointerEvents: "none" }} />
  );
}
