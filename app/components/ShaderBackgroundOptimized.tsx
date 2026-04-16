"use client";

import { useEffect, useRef } from "react";

const SHADER = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
#define FC gl_FragCoord.xy
#define T  time
#define R  resolution
#define MN min(R.x,R.y)

float rnd(vec2 p){
  p=fract(p*vec2(12.9898,78.233));
  p+=dot(p,p+34.56);
  return fract(p.x*p.y);
}
float noise(vec2 p){
  vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);
  return mix(mix(rnd(i),rnd(i+vec2(1,0)),u.x),
             mix(rnd(i+vec2(0,1)),rnd(i+1.),u.x),u.y);
}
float fbm(vec2 p){
  float t=.0,a=1.;mat2 m=mat2(1.,-.5,.2,1.2);
  for(int i=0;i<5;i++){t+=a*noise(p);p*=2.*m;a*=.5;}
  return t;
}
float clouds(vec2 p){
  float d=1.,t=.0;
  for(float i=.0;i<3.;i++){
    float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);
    t=mix(t,d,a);d=a;p*=2./(i+1.);
  }
  return t;
}
void main(void){
  vec2 uv=(FC-.5*R)/MN,st=uv*vec2(2,1);
  vec3 col=vec3(0);
  float bg=clouds(vec2(st.x+T*.5,-st.y));
  uv*=1.-.3*(sin(T*.2)*.5+.5);
  for(float i=1.;i<12.;i++){
    uv+=.1*cos(i*vec2(.1+.01*i,.8)+i*i+T*.5+.1*uv.x);
    vec2 p=uv;
    float d=length(p);
    col+=.00125/d*(cos(sin(i)*vec3(0.4,1.9,2.1))+1.);
    float b=noise(i+p+bg*1.731);
    col+=.002*b/length(max(p,vec2(b*p.x*.02,p.y)));
    col=mix(col,vec3(bg*.02,bg*.22,bg*.21),d);
  }
  O=vec4(col,1);
}`;

const VERT = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;

export default function ShaderBackgroundOptimized() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // На мобильных устройствах шейдер слишком тяжёлый для GPU —
    // hero выглядит одинаково за счёт bg.png + sphere.svg
    if (window.innerWidth < 768) return;

    const gl = canvas.getContext("webgl2");
    if (!gl) return;

    const canvasEl = canvas;
    const glContext = gl;

    function compile(type: number, source: string) {
      const shader = glContext.createShader(type);
      if (!shader) return null;
      glContext.shaderSource(shader, source);
      glContext.compileShader(shader);
      return shader;
    }

    const vs = compile(glContext.VERTEX_SHADER, VERT);
    const fs = compile(glContext.FRAGMENT_SHADER, SHADER);
    if (!vs || !fs) return;

    const prog = glContext.createProgram();
    if (!prog) return;

    glContext.attachShader(prog, vs);
    glContext.attachShader(prog, fs);
    glContext.linkProgram(prog);

    const buf = glContext.createBuffer();
    if (!buf) return;

    glContext.bindBuffer(glContext.ARRAY_BUFFER, buf);
    glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]), glContext.STATIC_DRAW);

    const pos = glContext.getAttribLocation(prog, "position");
    glContext.enableVertexAttribArray(pos);
    glContext.vertexAttribPointer(pos, 2, glContext.FLOAT, false, 0, 0);

    const uRes = glContext.getUniformLocation(prog, "resolution");
    const uTime = glContext.getUniformLocation(prog, "time");

    let raf = 0;
    let isVisible = true;
    let isDocumentVisible = document.visibilityState === "visible";
    let isRunning = false;
    let lastFrameTime = 0;
    let allowAnimation = false;
    let idleHandle: number | undefined;

    const isMobileViewport = () => window.innerWidth < 768;
    const getFrameInterval = () => (isMobileViewport() ? 1000 / 30 : 1000 / 45);
    const browserWindow = window as Window & {
      requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    const renderFrame = (now: number) => {
      glContext.useProgram(prog);
      glContext.uniform2f(uRes, canvasEl.width, canvasEl.height);
      glContext.uniform1f(uTime, now * 1e-3);
      glContext.drawArrays(glContext.TRIANGLE_STRIP, 0, 4);
    };

    const updateRunningState = () => {
      const shouldRun = allowAnimation && isVisible && isDocumentVisible;
      if (shouldRun === isRunning) return;

      isRunning = shouldRun;
      if (isRunning) {
        lastFrameTime = 0;
        raf = window.requestAnimationFrame(loop);
      } else {
        window.cancelAnimationFrame(raf);
      }
    };

    const enableAnimationLoop = () => {
      allowAnimation = true;
      updateRunningState();
    };

    const scheduleAnimationLoop = () => {
      if (!isMobileViewport()) {
        enableAnimationLoop();
        return;
      }

      if (browserWindow.requestIdleCallback) {
        idleHandle = browserWindow.requestIdleCallback(() => {
          enableAnimationLoop();
        }, { timeout: 1200 });
        return;
      }

      idleHandle = window.setTimeout(() => {
        enableAnimationLoop();
      }, 700);
    };

    function resize() {
      const baseDpr = Math.min(window.devicePixelRatio || 1, 2);
      const dpr = isMobileViewport()
        ? Math.max(0.7, baseDpr * 0.42)
        : Math.max(1, baseDpr * 0.5);

      canvasEl.width = Math.max(1, Math.round(canvasEl.offsetWidth * dpr));
      canvasEl.height = Math.max(1, Math.round(canvasEl.offsetHeight * dpr));
      glContext.viewport(0, 0, canvasEl.width, canvasEl.height);

      if (!allowAnimation && !isMobileViewport()) {
        enableAnimationLoop();
      }
    }

    function loop(now: number) {
      if (!isRunning) return;

      if (lastFrameTime === 0 || now - lastFrameTime >= getFrameInterval()) {
        lastFrameTime = now;
        renderFrame(now);
      }

      raf = window.requestAnimationFrame(loop);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? false;
        updateRunningState();
      },
      { threshold: 0 },
    );

    const onVisibilityChange = () => {
      isDocumentVisible = document.visibilityState === "visible";
      updateRunningState();
    };

    observer.observe(canvasEl);
    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibilityChange);
    renderFrame(performance.now());
    scheduleAnimationLoop();

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      observer.disconnect();
      if (idleHandle !== undefined) {
        if (browserWindow.cancelIdleCallback) {
          browserWindow.cancelIdleCallback(idleHandle);
        } else {
          window.clearTimeout(idleHandle);
        }
      }
      glContext.deleteBuffer(buf);
      glContext.deleteProgram(prog);
      glContext.deleteShader(vs);
      glContext.deleteShader(fs);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        mixBlendMode: "screen",
        opacity: 0.55,
        pointerEvents: "none",
      }}
    />
  );
}
