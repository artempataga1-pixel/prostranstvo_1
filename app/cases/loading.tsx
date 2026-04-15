const FONT = "Helvetica Neue, Helvetica, Arial, sans-serif";

export default function CasesLoading() {
  return (
    <main
      style={{
        minHeight: "100svh",
        background: "linear-gradient(180deg, #071518 0%, #0a1f22 50%, #071518 100%)",
        color: "#ffffff",
        fontFamily: FONT,
        padding: "clamp(40px, 8vh, 100px) clamp(20px, 5vw, 80px)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ width: 120, height: 14, borderRadius: 999, background: "rgba(10,186,181,0.18)", marginBottom: 24 }} />
        <div style={{ width: "min(720px, 90%)", height: "clamp(52px, 8vw, 110px)", borderRadius: 24, background: "rgba(255,255,255,0.08)", marginBottom: 24 }} />
        <div style={{ width: "min(680px, 100%)", height: 96, borderRadius: 24, background: "rgba(255,255,255,0.05)", marginBottom: 40 }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16, maxWidth: 640 }}>
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              style={{
                height: 132,
                borderRadius: 20,
                background: "rgba(10,186,181,0.06)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
