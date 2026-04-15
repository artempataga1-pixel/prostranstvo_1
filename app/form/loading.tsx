const FONT = "Helvetica Neue, Helvetica, Arial, sans-serif";

export default function FormLoading() {
  return (
    <main
      style={{
        minHeight: "100svh",
        background: "#071518",
        color: "#ffffff",
        fontFamily: FONT,
        padding: "clamp(32px, 5vh, 56px) clamp(20px, 3vw, 48px)",
      }}
    >
      <div style={{ width: "min(1360px, 100%)", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 48 }}>
          <div style={{ width: 120, height: 18, borderRadius: 999, background: "rgba(255,255,255,0.08)" }} />
          <div style={{ width: 180, height: 28, borderRadius: 999, background: "rgba(10,186,181,0.12)" }} />
          <div style={{ width: 96, height: 28, borderRadius: 999, background: "rgba(255,255,255,0.08)" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 32 }}>
          <div style={{ display: "grid", gap: 18 }}>
            <div style={{ width: 110, height: 28, borderRadius: 999, background: "rgba(10,186,181,0.12)" }} />
            <div style={{ width: "90%", height: 120, borderRadius: 28, background: "rgba(255,255,255,0.08)" }} />
            <div style={{ width: "75%", height: 88, borderRadius: 24, background: "rgba(255,255,255,0.05)" }} />
          </div>
          <div
            style={{
              minHeight: 540,
              borderRadius: 32,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />
        </div>
      </div>
    </main>
  );
}
