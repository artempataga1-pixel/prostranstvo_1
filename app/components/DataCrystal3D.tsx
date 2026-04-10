"use client";
import { useEffect, useRef } from "react";

export default function DataCrystal3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animId: number;
    let disposed = false;
    let mouseX = 0;
    let mouseY = 0;

    function onMouseMove(e: MouseEvent) {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    }
    window.addEventListener("mousemove", onMouseMove);

    async function init() {
      const THREE = await import("three");
      if (disposed || !mountRef.current) return;

      const mount = mountRef.current;
      const w = mount.clientWidth;
      const h = mount.clientHeight;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, premultipliedAlpha: false });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      renderer.setSize(w, h);
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(48, w / h, 0.1, 100);
      camera.position.z = 3.8;

      // — Central icosahedron crystal —
      const geoIco = new THREE.IcosahedronGeometry(1.0, 1);
      const matCrystal = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 } },
        vertexShader: /* glsl */`
          varying vec3 vNormal;
          varying vec3 vViewDir;
          varying vec3 vWorldPos;
          varying vec2 vUv;
          void main() {
            vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
            vNormal   = normalize(normalMatrix * normal);
            vViewDir  = normalize(-mvPos.xyz);
            vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
            vUv = uv;
            gl_Position = projectionMatrix * mvPos;
          }
        `,
        fragmentShader: /* glsl */`
          uniform float uTime;
          varying vec3 vNormal;
          varying vec3 vViewDir;
          varying vec2 vUv;

          void main() {
            vec3 teal    = vec3(0.039, 0.729, 0.710);  // #0ABAB5
            vec3 tealDrk = vec3(0.027, 0.318, 0.310);  // deep teal
            vec3 darkBg  = vec3(0.027, 0.082, 0.094);  // site dark

            // Fresnel edge glow
            float fresnel = 1.0 - abs(dot(vNormal, vViewDir));
            fresnel = pow(fresnel, 2.2);

            // Vertical gradient — bottom dark, top bright
            vec3 baseCol = mix(darkBg, teal, clamp(vUv.y * 1.4 - 0.1, 0.0, 1.0));

            // Pulsing inner light
            float pulse = 0.5 + 0.5 * sin(uTime * 1.5);
            baseCol += teal * fresnel * (0.6 + 0.4 * pulse);

            // White highlight on fresnel edge
            baseCol += vec3(1.0) * fresnel * 0.35 * pulse;

            // Face diffuse — dim internal faces
            vec3 light = normalize(vec3(0.5, 1.0, 0.8));
            float diff = max(dot(vNormal, light), 0.0) * 0.25;
            baseCol += tealDrk * diff;

            float alpha = 0.72 + fresnel * 0.28;
            gl_FragColor = vec4(baseCol, alpha);
          }
        `,
        transparent: true,
        side: THREE.FrontSide,
        depthWrite: false,
      });

      const crystal = new THREE.Mesh(geoIco, matCrystal);

      // — Wireframe overlay —
      const matWire = new THREE.MeshBasicMaterial({
        color: 0x0ABAB5,
        wireframe: true,
        transparent: true,
        opacity: 0.22,
      });
      const wireframe = new THREE.Mesh(geoIco, matWire);
      wireframe.scale.setScalar(1.012);

      // — Outer glow ring 1 —
      const ringGeo = new THREE.TorusGeometry(1.7, 0.007, 8, 140);
      const matRing = new THREE.MeshBasicMaterial({
        color: 0x0ABAB5,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const ring1 = new THREE.Mesh(ringGeo, matRing);
      ring1.rotation.x = Math.PI / 2.8;

      // — Outer glow ring 2 —
      const matRing2 = matRing.clone();
      matRing2.opacity = 0.22;
      const ring2 = new THREE.Mesh(ringGeo, matRing2);
      ring2.rotation.x = Math.PI / 5;
      ring2.rotation.z = Math.PI / 3.5;

      // — Inner thin ring —
      const ringGeoInner = new THREE.TorusGeometry(1.35, 0.004, 8, 100);
      const matRingInner = matRing.clone();
      matRingInner.opacity = 0.28;
      const ring3 = new THREE.Mesh(ringGeoInner, matRingInner);
      ring3.rotation.x = -Math.PI / 4;
      ring3.rotation.y = Math.PI / 6;

      // — Orbiting particles on ring path —
      const ORBIT_COUNT = 160;
      const orbitPos = new Float32Array(ORBIT_COUNT * 3);
      const orbitPhase = new Float32Array(ORBIT_COUNT);
      for (let i = 0; i < ORBIT_COUNT; i++) {
        const angle = (i / ORBIT_COUNT) * Math.PI * 2;
        const r = 1.68 + (Math.random() - 0.5) * 0.25;
        const tilt = (Math.random() - 0.5) * 0.45;
        orbitPos[i * 3]     = Math.cos(angle) * r;
        orbitPos[i * 3 + 1] = tilt;
        orbitPos[i * 3 + 2] = Math.sin(angle) * r;
        orbitPhase[i] = Math.random() * Math.PI * 2;
      }
      const orbitGeo = new THREE.BufferGeometry();
      orbitGeo.setAttribute("position", new THREE.BufferAttribute(orbitPos, 3));
      orbitGeo.setAttribute("phase", new THREE.BufferAttribute(orbitPhase, 1));
      const matOrbit = new THREE.PointsMaterial({
        color: 0x0ABAB5,
        size: 0.038,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      });
      const orbitPoints = new THREE.Points(orbitGeo, matOrbit);

      // — Scattered background particles —
      const BG_COUNT = 280;
      const bgPos = new Float32Array(BG_COUNT * 3);
      for (let i = 0; i < BG_COUNT; i++) {
        const r = 2.2 + Math.random() * 1.8;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        bgPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
        bgPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        bgPos[i * 3 + 2] = r * Math.cos(phi);
      }
      const bgGeo = new THREE.BufferGeometry();
      bgGeo.setAttribute("position", new THREE.BufferAttribute(bgPos, 3));
      const matBg = new THREE.PointsMaterial({
        color: 0x7dd3d0,
        size: 0.022,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const bgPoints = new THREE.Points(bgGeo, matBg);

      // — Assemble group for mouse parallax —
      const innerGroup = new THREE.Group(); // crystal + wireframe spin together
      innerGroup.add(crystal);
      innerGroup.add(wireframe);

      const outerGroup = new THREE.Group(); // everything else
      outerGroup.add(innerGroup);
      outerGroup.add(ring1);
      outerGroup.add(ring2);
      outerGroup.add(ring3);
      outerGroup.add(orbitPoints);
      outerGroup.add(bgPoints);
      scene.add(outerGroup);

      let targetRX = 0;
      let targetRY = 0;

      function animate() {
        animId = requestAnimationFrame(animate);
        const t = Date.now() * 0.001;
        matCrystal.uniforms.uTime.value = t;

        // Crystal spins
        innerGroup.rotation.x = t * 0.14;
        innerGroup.rotation.y = t * 0.21;

        // Rings counter-rotate
        ring1.rotation.z = t * 0.10;
        ring2.rotation.y = t * 0.08;
        ring3.rotation.x += 0.003;

        // Orbit particles rotate around Y
        orbitPoints.rotation.y = t * 0.07;
        orbitPoints.rotation.x = Math.sin(t * 0.06) * 0.15;

        // Bg particles drift
        bgPoints.rotation.y = t * 0.018;

        // Mouse parallax on outer group
        targetRX = -mouseY * 0.22;
        targetRY = mouseX * 0.28;
        outerGroup.rotation.x += (targetRX - outerGroup.rotation.x) * 0.055;
        outerGroup.rotation.y += (targetRY - outerGroup.rotation.y) * 0.055;

        // Gentle float
        outerGroup.position.y = Math.sin(t * 0.4) * 0.06;

        renderer.render(scene, camera);
      }
      animate();

      const onResize = () => {
        const nw = mount.clientWidth;
        const nh = mount.clientHeight;
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh);
      };
      window.addEventListener("resize", onResize);

      (mount as any).__cleanup = () => {
        window.removeEventListener("resize", onResize);
        cancelAnimationFrame(animId);
        renderer.dispose();
        geoIco.dispose();
        matCrystal.dispose();
        matWire.dispose();
        ringGeo.dispose();
        matRing.dispose();
        matRing2.dispose();
        ringGeoInner.dispose();
        matRingInner.dispose();
        orbitGeo.dispose();
        matOrbit.dispose();
        bgGeo.dispose();
        matBg.dispose();
        if (renderer.domElement.parentNode)
          renderer.domElement.parentNode.removeChild(renderer.domElement);
      };
    }

    init();
    return () => {
      disposed = true;
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
      const m = mountRef.current;
      if (m && (m as any).__cleanup) (m as any).__cleanup();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
}
