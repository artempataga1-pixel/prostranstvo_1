import Link from "next/link";
import CountUp from "../../components/CountUp";
import InfinityMark from "../../components/InfinityMark";
import { GlowCard } from "../../components/GlowCard";

const FONT = "Helvetica Neue, Helvetica, Arial, sans-serif";

const sectionStyle = {
  position: "relative" as const,
  width: "100%",
  minHeight: "100svh",
  overflow: "clip",
};

const deferredSectionStyle = {
  contentVisibility: "auto" as const,
  containIntrinsicSize: "1000px",
};

const SEASONAL_SCREENSHOT_IMG = "/screenshots/seasonal-ozon.jpg";

const metrics = [
  { value: "+180%", label: "рост продаж" },
  { value: "2 мес", label: "сезонный период" },
  { value: "WB", label: "площадка" },
];


export default function CaseSeasonalPage() {
  return (
    <>
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #071518 0%, #0a1f22 50%, #071518 100%)",
        fontFamily: FONT,
        color: "#fff",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          background: "rgba(249,115,22,0.92)",
          borderBottom: "1px solid rgba(249,115,22,0.15)",
          padding: "20px clamp(20px, 5vw, 80px)",
          display: "flex",
          alignItems: "center",
          gap: 24,
        }}
      >
        <Link
          href="/#cases"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: "rgba(7,21,24,0.85)",
            textDecoration: "none",
            fontSize: 14,
            letterSpacing: "0.05em",
            fontWeight: 500,
          }}
        >
          ← Назад
        </Link>
        <span style={{ color: "rgba(7,21,24,0.35)", fontSize: 14 }}>/</span>
        <span style={{ color: "rgba(7,21,24,0.55)", fontSize: 14 }}>Кейсы</span>
        <span style={{ color: "rgba(7,21,24,0.35)", fontSize: 14 }}>/</span>
        <span style={{ color: "rgba(7,21,24,0.8)", fontSize: 14 }}>Сезонный товар — WB</span>
      </header>

      <main style={{ padding: "clamp(40px, 8vh, 100px) clamp(20px, 5vw, 80px)", maxWidth: 1100, margin: "0 auto" }}>
        <p
          style={{
            fontSize: "clamp(10px, 0.9vw, 13px)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#f97316",
            marginBottom: 16,
          }}
        >
          Wildberries · Сезонные продажи
        </p>

        <h1
          style={{
            fontWeight: 400,
            fontSize: "clamp(40px, 6vw, 96px)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            margin: "0 0 clamp(24px, 4vh, 48px)",
            background: "linear-gradient(135deg, #ffffff 0%, #f97316 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Сезонный товар
        </h1>

        <p
          style={{
            fontSize: "clamp(16px, 1.5vw, 20px)",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.7,
            maxWidth: 680,
            marginBottom: "clamp(40px, 6vh, 80px)",
          }}
        >
          Комплексное управление сезонным товаром на Wildberries: стоки, реклама и ценообразование в пиковый период. Рост продаж на 180% за 2 месяца.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(12px, 2vw, 24px)",
            marginBottom: "clamp(50px, 8vh, 100px)",
            maxWidth: 600,
          }}
        >
          {metrics.map((m, i) => (
            <GlowCard key={i} glowColor="blue" style={{ padding: "clamp(20px, 3vh, 32px) 16px", background: "rgba(249,115,22,0.05)", borderRadius: 16, textAlign: "center" as const }}>
              <div className="card-num" style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#f97316", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 8 }}>
                {m.value}
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em" }}>{m.label}</div>
            </GlowCard>
          ))}
        </div>

      </main>
    </div>

    {/* CaseSeasonalScreenshotSection */}
    <section style={{ ...sectionStyle, ...deferredSectionStyle, minHeight: "max(100svh, calc(37.25vw + 340px))", backgroundColor: "#ffffff" }}>
      <div className="seasonal-infinity" style={{ position: "absolute", left: "2.81vw", top: "5.09vh", width: "clamp(50px, 6.09vw, 117px)", height: "clamp(26px, 5.56vh, 60px)", pointerEvents: "none", overflow: "hidden" }}>
        <InfinityMark src="/figma-assets/infinity-light.png" mixBlendMode="normal" />
      </div>
      <div
        style={{
          position: "absolute",
          top: "clamp(30px, 5.56vh, 60px)",
          right: "3.49vw",
          display: "flex",
          alignItems: "center",
          padding: "clamp(8px, 1.11vh, 12px) clamp(10px, 0.83vw, 16px)",
          borderRadius: "300px",
          background: "rgba(236, 236, 236, 0.5)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
        }}
      >
        <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(10px, 1.302vw, 25px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#0d1f1f", textTransform: "uppercase", whiteSpace: "nowrap", margin: 0 }}>
          {"кейсы  •  сезонный товар"}
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          left: "7.24vw",
          top: "clamp(100px, 16.48vh, 178px)",
          width: "85.52vw",
          aspectRatio: "1642 / 715",
          border: "clamp(3px, 0.78vw, 15px) solid rgba(13, 31, 31, 0.3)",
          borderRadius: "clamp(12px, 1.5625vw, 30px)",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src={SEASONAL_SCREENSHOT_IMG} loading="lazy" decoding="async" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
      </div>
      <div
        style={{
          position: "absolute",
          left: "calc(25% + 9.01vw)",
          top: "calc(clamp(100px, 16.48vh, 178px) + 37.25vw + 20px)",
          display: "flex",
          alignItems: "center",
          gap: "clamp(10px, 1.2vw, 23px)",
          whiteSpace: "nowrap",
        }}
      >
        <div style={{ width: "clamp(28px, 3.33vw, 64px)", height: "clamp(28px, 3.33vw, 64px)", borderRadius: "50%", background: "#CB11AB", overflow: "hidden", flexShrink: 0, position: "relative" }}>
          <svg viewBox="0 0 64 64" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
            <rect width="64" height="64" fill="#CB11AB"/>
            <text x="32" y="41" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="700" fontSize="20">WB</text>
          </svg>
        </div>
        <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(14px, 1.823vw, 35px)", lineHeight: 1.2, letterSpacing: "-0.035em", color: "#0d1f1f", opacity: 0.5, margin: 0, whiteSpace: "nowrap" }}>
          Скриншот личного кабинета Wildberries
        </p>
      </div>
    </section>

    {/* CaseSeasonalSection */}
    <section className="seasonal-split-section" style={{ ...sectionStyle, ...deferredSectionStyle, minHeight: "max(100svh, 760px)", backgroundColor: "#ffffff" }}>
      {/* Right gradient panel */}
      <div
        className="seasonal-right-panel"
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          width: "50%",
          height: "100%",
          background: "linear-gradient(221.19deg, #0d1f1f 0%, #388585 99.32%)",
          overflow: "hidden",
        }}
      >
        <p
          className="seasonal-result-label"
          style={{
            position: "absolute",
            left: "3.75%",
            top: "clamp(140px, 25vh, 270px)",
            fontFamily: FONT,
            fontWeight: 400,
            fontSize: "clamp(28px, 3.906vw, 75px)",
            lineHeight: 0.9,
            letterSpacing: "-0.035em",
            color: "#ffffff",
            margin: 0,
            whiteSpace: "nowrap",
          }}
        >
          Результат
        </p>
        <div
          className="seasonal-result-cards"
          style={{
            position: "absolute",
            left: "3.75%",
            top: "clamp(200px, 34.26vh, 370px)",
            width: "90%",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(6px, 0.625vw, 12px)",
          }}
        >
          <div style={{ display: "flex", gap: "clamp(6px, 0.625vw, 12px)" }}>
            <GlowCard style={{ flex: "1 0 0", minWidth: 0, height: "clamp(160px, 29.54vh, 319px)", background: "rgba(18, 18, 18, 0.3)", borderRadius: "clamp(12px, 1.5625vw, 30px)", padding: "clamp(12px, 2.22vh, 24px) clamp(10px, 1.25vw, 24px) clamp(16px, 2.96vh, 32px)", display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
              <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(10px, 1.25vw, 24px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", opacity: 0.3, margin: 0, whiteSpace: "nowrap" }}>Выручка за 3 месяца, млн</p>
              <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(36px, 6.25vw, 120px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "nowrap" }}><CountUp value={12.9} decimals={1} duration={2200} /></p>
            </GlowCard>
            <GlowCard style={{ flex: "1 0 0", minWidth: 0, height: "clamp(160px, 29.54vh, 319px)", background: "rgba(18, 18, 18, 0.3)", borderRadius: "clamp(12px, 1.5625vw, 30px)", padding: "clamp(12px, 2.22vh, 24px) clamp(10px, 1.25vw, 24px) clamp(16px, 2.96vh, 32px)", display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
              <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(10px, 1.25vw, 24px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", opacity: 0.3, margin: 0, whiteSpace: "nowrap" }}>Заказы</p>
              <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(36px, 6.25vw, 120px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "nowrap" }}><CountUp value={4481} separator=" " duration={2200} /></p>
            </GlowCard>
          </div>
          <div style={{ display: "flex" }}>
            <GlowCard style={{ flex: "1 0 0", minWidth: 0, height: "clamp(160px, 29.54vh, 319px)", background: "rgba(18, 18, 18, 0.3)", borderRadius: "clamp(12px, 1.5625vw, 30px)", padding: "clamp(12px, 2.22vh, 24px) clamp(10px, 1.25vw, 24px) clamp(16px, 2.96vh, 32px)", display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
              <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(10px, 1.25vw, 24px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", opacity: 0.3, margin: 0, whiteSpace: "nowrap" }}>Маржинальность при росте закупки, %</p>
              <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(36px, 6.25vw, 120px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "nowrap" }}><CountUp value={22} duration={2200} /></p>
            </GlowCard>
          </div>
        </div>
      </div>

      {/* Left content */}
      <div
        className="seasonal-left-content"
        style={{
          position: "absolute",
          left: "3.125vw",
          top: "clamp(40px, 5.65vh, 61px)",
          height: "clamp(600px, 88.8vh, 959px)",
          width: "min(43.125vw, 828px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(28px, 5.208vw, 100px)", lineHeight: 0.9, letterSpacing: "-0.035em", color: "#0d1f1f", margin: 0 }}>
          {"Вошли в "}
          <span style={{ color: "#0abab5" }}>топ-<CountUp value={2} suffix="%" duration={2200} /></span>
          {" несмотря на срыв поставки"}
        </p>
        <div style={{ width: "min(38.59vw, 741px)", opacity: 0.5 }}>
          {[
            "• Агрессивный разгон рекламы: +120% показов за 5 дней",
            "• Новые обложки: CTR +35%",
            "• Сужение ЦА: CR с 1,1% до 1,6%",
            "• Динамическое ценообразование",
          ].map((line) => (
            <p key={line} style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(12px, 1.823vw, 35px)", lineHeight: 1.2, letterSpacing: "-0.035em", color: "#0d1f1f", margin: 0 }}>
              {line}
            </p>
          ))}
        </div>
      </div>

      <div
        className="seasonal-badge-clip"
        style={{
          position: "absolute",
          top: "clamp(30px, 5.56vh, 60px)",
          left: "calc(75% + 2.396vw)",
          display: "flex",
          alignItems: "center",
          padding: "clamp(8px, 1.11vh, 12px) clamp(10px, 0.83vw, 16px)",
          borderRadius: "300px",
          background: "rgba(69, 69, 69, 0.3)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
        }}
      >
        <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(10px, 1.302vw, 25px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", textTransform: "uppercase", whiteSpace: "nowrap", margin: 0 }}>
          {"кейсы  •  сезонный товар"}
        </p>
      </div>
    </section>

    {/* CTA Section */}
    <section style={{ background: "#071518", padding: "clamp(60px, 10vh, 120px) clamp(20px, 5vw, 80px)", fontFamily: FONT }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: "clamp(40px, 7vh, 80px)" }}>
          <p style={{ fontSize: "clamp(10px, 0.9vw, 13px)", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#f97316", marginBottom: 16 }}>
            Результат
          </p>
          <p style={{ fontSize: "clamp(15px, 1.3vw, 18px)", color: "rgba(255,255,255,0.8)", lineHeight: 1.8, maxWidth: 800 }}>
            За сезонный период 2 месяца продажи выросли на 180% по сравнению с прошлым годом. Остатки были распределены оптимально: ни один склад не испытал дефицита в пиковые дни. Ликвидация постсезонных остатков прошла с минимальными потерями — удалось реализовать 94% закупленного товара. Маржинальность бизнеса выросла на 12% благодаря динамическому ценообразованию.
          </p>
        </div>
        <div style={{ textAlign: "center" as const }}>
          <h2 style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 400, fontSize: "clamp(28px, 3vw, 56px)", color: "#fff", letterSpacing: "-0.035em", marginBottom: 16 }}>
            Хотите такой же результат?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(14px, 1.3vw, 20px)", marginBottom: 40 }}>
            Оставьте заявку — разберём ваш бизнес и предложим план роста
          </p>
          <Link href="/form" className="case-cta-btn" style={{ display: "inline-block", padding: "16px 48px", background: "#f97316", borderRadius: 12, color: "#071518", fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: 16, fontWeight: 500, textDecoration: "none", letterSpacing: "-0.02em", transition: "box-shadow 0.3s ease, transform 0.2s ease" }}>
            Получить такой же результат →
          </Link>
        </div>
      </div>
    </section>
    <style>{`
      .case-cta-btn:hover {
        box-shadow: 0 0 0 2px rgba(249,115,22,0.4), 0 0 30px rgba(249,115,22,0.5), 0 10px 40px rgba(249,115,22,0.3);
        transform: translateY(-2px);
      }
    `}</style>
    </>
  );
}
