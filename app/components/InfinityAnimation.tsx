export default function InfinityAnimation() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", mixBlendMode: "screen" }}>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          src="/infinity.png"
          style={{
            position: "absolute",
            width: "206.91%",
            height: "405.54%",
            left: "-52.74%",
            top: "-148.71%",
            maxWidth: "none",
          }}
        />
      </div>
    </div>
  );
}
