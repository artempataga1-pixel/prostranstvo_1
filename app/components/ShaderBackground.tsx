"use client";

import { useRef, useEffect } from "react";

// Teal-adapted WebGL2 shader
// Original by Matthias Hurrle (@atzedent), colours remapped to #0ABAB5 palette
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
  for(int i=0;i<4;i++){t+=a*noise(p);p*=2.*m;a*=.5;}
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
    // Teal palette: phase offsets push cosine toward cyan/green channel
    col+=.00125/d*(cos(sin(i)*vec3(0.4,1.9,2.1))+1.);
    float b=noise(i+p+bg*1.731);
    col+=.002*b/length(max(p,vec2(b*p.x*.02,p.y)));
    // Mix with dark teal instead of amber
    col=mix(col,vec3(bg*.02,bg*.22,bg*.21),d);
  }
  O=vec4(col,1);
}`;

const VERT = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;

export default function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2");
    if (!gl) return;

    // Compile helper
    function compile(type: number, src: string) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      return s;
    }

    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, SHADER);
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,1,-1,-1,1,1,1,-1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, "position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uRes  = gl.getUniformLocation(prog, "resolution");
    const uTime = gl.getUniformLocation(prog, "time");

    let raf = 0;
    let stopped = false;
    // Throttle к 30fps — шейдер тяжёлый, разница 30→60fps визуально незаметна
    const TARGET_INTERVAL = 1000 / 30;
    let lastTime = 0;

    function resize() {
      if (!canvas) return;
      // Use 0.5× DPR for performance — shader is heavy
      const dpr = Math.max(1, window.devicePixelRatio * 0.5);
      canvas.width  = canvas.offsetWidth  * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      gl!.viewport(0, 0, canvas.width, canvas.height);
    }

    function loop(now: number) {
      raf = requestAnimationFrame(loop);
      if (now - lastTime < TARGET_INTERVAL) return;
      lastTime = now;
      gl!.useProgram(prog);
      gl!.uniform2f(uRes, canvas!.width, canvas!.height);
      gl!.uniform1f(uTime, now * 1e-3);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
    }

    // IntersectionObserver — останавливаем RAF когда canvas вне viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0].isIntersecting;
        if (isVisible && stopped) {
          stopped = false;
          raf = requestAnimationFrame(loop);
        } else if (!isVisible && !stopped) {
          stopped = true;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    resize();
    window.addEventListener("resize", resize);
    // Запускаем с задержкой 300мс — даём HeroSphere и DataCrystal3D инициализироваться первыми
    const startTimer = setTimeout(() => { raf = requestAnimationFrame(loop); }, 300);

    return () => {
      clearTimeout(startTimer);
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      observer.disconnect();
      gl.deleteProgram(prog);
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
        // Screen blend: черный фон шейдера исчезает,
        // яркие тил-линии добавляются поверх bg.png
        mixBlendMode: "screen",
        opacity: 0.55,
        pointerEvents: "none",
      }}
    />
  );
}
