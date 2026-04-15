import Link from "next/link";
import CountUp from "../../components/CountUp";
import { GlowCard } from "../../components/GlowCard";
import InfinityMark from "../../components/InfinityMark";

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

const OZON_SCREENSHOT_IMG = "/screenshots/jeans-ozon.jpg";

const metrics = [
  { value: "+200%", label: "рост выручки" },
  { value: "1.5 мес", label: "до результата" },
  { value: "Ozon", label: "площадка" },
];


export default function CaseJeansPage() {
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
      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          background: "rgba(10,186,181,0.92)",
          borderBottom: "1px solid rgba(10,186,181,0.15)",
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
            transition: "opacity 0.2s",
            fontWeight: 500,
          }}
        >
          ← Назад
        </Link>
        <span style={{ color: "rgba(7,21,24,0.35)", fontSize: 14 }}>/</span>
        <span style={{ color: "rgba(7,21,24,0.55)", fontSize: 14 }}>Кейсы</span>
        <span style={{ color: "rgba(7,21,24,0.35)", fontSize: 14 }}>/</span>
        <span style={{ color: "rgba(7,21,24,0.8)", fontSize: 14 }}>Джинсы — Ozon</span>
      </header>

      {/* Main content */}
      <main style={{ padding: "clamp(40px, 8vh, 100px) clamp(20px, 5vw, 80px)", maxWidth: 1100, margin: "0 auto" }}>
        {/* Label */}
        <p
          style={{
            fontSize: "clamp(10px, 0.9vw, 13px)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#0ABAB5",
            marginBottom: 16,
          }}
        >
          Ozon Маркетплейс · Маркетинг
        </p>

        {/* Title */}
        <h1
          style={{
            fontWeight: 400,
            fontSize: "clamp(40px, 6vw, 96px)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            margin: "0 0 clamp(24px, 4vh, 48px)",
            background: "linear-gradient(135deg, #ffffff 0%, #0ABAB5 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Джинсы
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: "clamp(16px, 1.5vw, 20px)",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.7,
            maxWidth: 680,
            marginBottom: "clamp(40px, 6vh, 80px)",
          }}
        >
          Выручка выросла с 800 тыс. до 2.4 млн ₽/мес за 1.5 месяца после комплексной оптимизации карточек товаров и рекламных кампаний на Ozon.
        </p>

        {/* Metrics */}
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
            <GlowCard key={i} glowColor="teal" style={{ padding: "clamp(20px, 3vh, 32px) 16px", background: "rgba(10,186,181,0.05)", borderRadius: 16, textAlign: "center" as const }}>
              <div className="card-num" style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#0ABAB5", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 8 }}>
                {m.value}
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em" }}>{m.label}</div>
            </GlowCard>
          ))}
        </div>

      </main>
    </div>

    {/* Revenue Section */}
    <section
      className="jeans-revenue-section"
      style={{
        ...sectionStyle,
        ...deferredSectionStyle,
        minHeight: "max(100svh, 760px)",
        backgroundColor: "#0d1f1f",
      }}
    >
      <div
        className="jeans-revenue-badge"
        style={{
          position: "absolute",
          top: "clamp(30px, 5.56vh, 60px)",
          right: "3.125vw",
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
          {"кейсы  •  Джинсы"}
        </p>
      </div>

      <h2
        className="jeans-revenue-heading"
        style={{
          position: "absolute",
          left: "3.125vw",
          top: "clamp(30px, 5.65vh, 61px)",
          width: "min(54.4vw, 1044px)",
          fontFamily: FONT,
          fontWeight: 400,
          fontSize: "clamp(32px, 5.208vw, 100px)",
          lineHeight: 0.9,
          letterSpacing: "-0.035em",
          color: "#ffffff",
          margin: 0,
        }}
      >
        <CountUp prefix="+" value={200} suffix="%" duration={2200} /> выручки{"\n"}за полтора месяца
      </h2>

      <p
        className="jeans-revenue-desc"
        style={{
          position: "absolute",
          left: "3.125vw",
          top: "clamp(190px, 27.3vh, 295px)",
          width: "min(51.3vw, 985px)",
          fontFamily: FONT,
          fontWeight: 400,
          fontSize: "clamp(12px, 1.823vw, 35px)",
          lineHeight: 1.2,
          letterSpacing: "-0.035em",
          color: "#ffffff",
          opacity: 0.5,
          margin: 0,
        }}
      >
        Переработали обложку и первые 3 слайда карточки,{"\n"}
        провели серию CTR-тестов, оптимизировали{"\n"}
        рекламу под новую воронку
      </p>

      {/* growth wave graph — from Figma */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        className="jeans-graph"
        src="/jeans-graph.svg"
        loading="lazy"
        decoding="async"
        style={{
          position: "absolute",
          left: "-110.9vw",
          top: "clamp(450px, 64.26vh, 694px)",
          width: "210.9vw",
          height: "clamp(220px, 35.74vh, 386px)",
          maxWidth: "none",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="jeans-decorative" style={{ position: "absolute", left: "calc(92.19vw + clamp(4px, 0.47vw, 9px))", top: "clamp(420px, 59.81vh, 646px)", width: "1px", height: "clamp(50px, 8.98vh, 97px)", background: "#0ABAB5", zIndex: 2 }} />
      <div className="jeans-decorative" style={{ position: "absolute", left: "calc(3.75vw + clamp(4px, 0.47vw, 9px))", top: "clamp(540px, 82.5vh, 891px)", width: "1px", height: "clamp(40px, 9.54vh, 103px)", background: "#0ABAB5", zIndex: 2 }} />
      <div className="jeans-decorative" style={{ position: "absolute", left: "3.75vw", top: "clamp(600px, 92.04vh, 994px)", width: "clamp(8px, 0.9375vw, 18px)", height: "clamp(8px, 0.9375vw, 18px)", borderRadius: "50%", border: "clamp(2px, 0.21vw, 4px) solid #0ABAB5", background: "#0d1f1f", zIndex: 3 }} />
      <div className="jeans-decorative" style={{ position: "absolute", left: "92.19vw", top: "clamp(470px, 67.69vh, 731px)", width: "clamp(8px, 0.9375vw, 18px)", height: "clamp(8px, 0.9375vw, 18px)", borderRadius: "50%", border: "clamp(2px, 0.21vw, 4px) solid #0ABAB5", background: "#0d1f1f", zIndex: 3 }} />

      <GlowCard
        white
        className="case-revenue-card-b"
        style={{
          position: "absolute",
          left: "57.19vw",
          top: "clamp(230px, 32.96vh, 356px)",
          width: "min(39.69vw, 762px)",
          height: "clamp(180px, 26.85vh, 290px)",
          background: "rgba(10, 186, 181, 0.3)",
          borderRadius: "clamp(14px, 1.5625vw, 30px)",
          padding: "clamp(20px, 4.44vh, 48px)",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          zIndex: 2,
        }}
      >
        <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(9px, 1.25vw, 24px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", opacity: 0.3, margin: 0, whiteSpace: "pre" }}>
          {"20.03  •  Точка Б"}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(8px, 2.22vh, 24px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(14px, 2.344vw, 45px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "nowrap" }}>
              <CountUp value={1.2} decimals={1} suffix=" млн" duration={2200} /> рублей выручки
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "4px", padding: "clamp(5px, 1.3vh, 14px) 8px", borderRadius: "300px", background: "rgba(255,255,255,0.1)", border: "2px solid #ffffff", backdropFilter: "blur(50px)", flexShrink: 0 }}>
              <svg width="12" height="9" viewBox="0 0 14 11" fill="none"><path d="M7 0L13.9282 11H0.0717969L7 0Z" fill="#0ABAB5"/></svg>
              <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(9px, 1.25vw, 24px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#0ab8b3", margin: 0, whiteSpace: "nowrap" }}><CountUp value={200} suffix="%" duration={2200} /></p>
            </div>
          </div>
          <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(14px, 2.344vw, 45px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "nowrap" }}>
            Топ-7 категории
          </p>
        </div>
      </GlowCard>

      <GlowCard
        white
        className="case-revenue-card-a"
        style={{
          position: "absolute",
          left: "3.75vw",
          top: "clamp(330px, 47vh, 532px)",
          width: "min(20.83vw, 400px)",
          height: "clamp(200px, 29.54vh, 319px)",
          background: "rgba(88, 88, 88, 0.2)",
          borderRadius: "clamp(14px, 1.5625vw, 30px)",
          padding: "clamp(20px, 4.44vh, 48px)",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          zIndex: 2,
        }}
      >
        <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(9px, 1.25vw, 24px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", opacity: 0.3, margin: 0, whiteSpace: "pre" }}>
          {"21.02  •  Точка А"}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(8px, 2.22vh, 24px)" }}>
          {["Нестабильные продажи", "Низкая конверсия каточки", "Нет работы с гипотезами"].map((line) => (
            <p key={line} style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(12px, 1.667vw, 32px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "nowrap" }}>
              {line}
            </p>
          ))}
        </div>
      </GlowCard>
    </section>

    {/* Screenshot Section */}
    <section
      className="jeans-screenshot-section"
      style={{
        ...sectionStyle,
        ...deferredSectionStyle,
        minHeight: "max(100svh, calc(37.41vw + 340px))",
        backgroundColor: "#0d1f1f",
      }}
    >
      <div className="jeans-infinity" style={{ position: "absolute", left: "2.76vw", top: "5vh", width: "clamp(50px, 6.09vw, 117px)", height: "clamp(26px, 5.56vh, 60px)", pointerEvents: "none" }}>
        <InfinityMark />
      </div>

      <div
        className="jeans-screenshot-badge"
        style={{
          position: "absolute",
          top: "clamp(30px, 5.56vh, 60px)",
          right: "3.125vw",
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
          {"кейсы  •  Джинсы"}
        </p>
      </div>

      <div
        className="jeans-screenshot-container"
        style={{
          position: "absolute",
          left: "7.24vw",
          top: "clamp(100px, 16.48vh, 178px)",
          width: "85.52vw",
          aspectRatio: "1642 / 718",
          border: "clamp(3px, 0.78vw, 15px) solid rgba(254,254,254,0.3)",
          borderRadius: "clamp(12px, 1.5625vw, 30px)",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          src={OZON_SCREENSHOT_IMG}
          loading="lazy"
          decoding="async"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }}
        />
      </div>

      <div
        className="jeans-screenshot-caption"
        style={{
          position: "absolute",
          left: "50%",
          top: "calc(clamp(100px, 16.48vh, 178px) + 37.41vw + 20px)",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: "clamp(10px, 1.2vw, 23px)",
          whiteSpace: "nowrap",
        }}
      >
        <div style={{ width: "clamp(28px, 3.33vw, 64px)", height: "clamp(28px, 3.33vw, 64px)", borderRadius: "50%", background: "#005BFF", overflow: "hidden", flexShrink: 0, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg viewBox="0 0 64 64" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
            <rect width="64" height="64" fill="#005BFF"/>
            <text x="32" y="40" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="700" fontSize="16">ozon</text>
          </svg>
        </div>
        <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(14px, 1.823vw, 35px)", lineHeight: 1.2, letterSpacing: "-0.035em", color: "#ffffff", opacity: 0.5, margin: 0, whiteSpace: "nowrap" }}>
          Скриншот личного кабинета Ozon
        </p>
      </div>
    </section>

    {/* CTA Section */}
    <section style={{ background: "#071518", padding: "clamp(60px, 10vh, 120px) clamp(20px, 5vw, 80px)", fontFamily: FONT }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: "clamp(40px, 7vh, 80px)" }}>
          <p style={{ fontSize: "clamp(10px, 0.9vw, 13px)", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#0ABAB5", marginBottom: 16 }}>
            Результат
          </p>
          <p style={{ fontSize: "clamp(15px, 1.3vw, 18px)", color: "rgba(255,255,255,0.8)", lineHeight: 1.8, maxWidth: 800 }}>
            За 1.5 месяца работы выручка продавца выросла с 800 000 до 2 400 000 ₽ в месяц — прирост составил 200%. Доля рекламных расходов снизилась с 18% до 11% за счёт оптимизации кампаний. Органические позиции карточек поднялись в среднем на 40 мест в поисковой выдаче Ozon. Конверсия из просмотра в покупку выросла с 1.2% до 3.8%.
          </p>
        </div>
        <div style={{ textAlign: "center" as const }}>
          <h2 style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 400, fontSize: "clamp(28px, 3vw, 56px)", color: "#fff", letterSpacing: "-0.035em", marginBottom: 16 }}>
            Хотите такой же результат?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(14px, 1.3vw, 20px)", marginBottom: 40 }}>
            Оставьте заявку — разберём ваш бизнес и предложим план роста
          </p>
          <Link href="/form" className="case-cta-btn" style={{ display: "inline-block", padding: "16px 48px", background: "#0ABAB5", borderRadius: 12, color: "#071518", fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: 16, fontWeight: 500, textDecoration: "none", letterSpacing: "-0.02em", transition: "box-shadow 0.3s ease, transform 0.2s ease" }}>
            Получить такой же результат →
          </Link>
        </div>
      </div>
    </section>
    <style>{`
      .case-cta-btn:hover {
        box-shadow: 0 0 0 2px rgba(10,186,181,0.4), 0 0 30px rgba(10,186,181,0.5), 0 10px 40px rgba(10,186,181,0.3);
        transform: translateY(-2px);
      }
    `}</style>
    </>
  );
}
