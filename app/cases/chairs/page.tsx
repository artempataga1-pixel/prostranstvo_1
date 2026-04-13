"use client";
// chairs case page
import Link from "next/link";
import CountUp from "../../components/CountUp";
import { GlowCard } from "../../components/GlowCard";

const FONT = "Helvetica Neue, Helvetica, Arial, sans-serif";

const sectionStyle = {
  position: "relative" as const,
  width: "100%",
  minHeight: "100svh",
  overflow: "clip",
};

const CHAIRS_WB_SCREENSHOT_IMG = "/screenshots/chairs-wb.jpg";
const CHAIRS_SCREENSHOT_IMG = "/screenshots/chairs-ozon.jpg";

const metrics = [
  { value: "Топ-10", label: "позиция в категории" },
  { value: "3 мес", label: "до топ-10" },
  { value: "Ozon", label: "площадка" },
];


export default function CaseChairsPage() {
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
          background: "rgba(245,158,11,0.92)",
          borderBottom: "1px solid rgba(245,158,11,0.15)",
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
        <span style={{ color: "rgba(7,21,24,0.8)", fontSize: 14 }}>Кресла — Ozon</span>
      </header>

      <main style={{ padding: "clamp(40px, 8vh, 100px) clamp(20px, 5vw, 80px)", maxWidth: 1100, margin: "0 auto" }}>
        <p
          style={{
            fontSize: "clamp(10px, 0.9vw, 13px)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#f59e0b",
            marginBottom: 16,
          }}
        >
          Ozon Маркетплейс · Запуск нового бренда
        </p>

        <h1
          style={{
            fontWeight: 400,
            fontSize: "clamp(40px, 6vw, 96px)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            margin: "0 0 clamp(24px, 4vh, 48px)",
            background: "linear-gradient(135deg, #ffffff 0%, #f59e0b 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Кресла Ozon
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
          Запуск нового бренда игровых кресел на Ozon с нуля — выход в топ-10 категории за 3 месяца без начальных отзывов и истории продаж.
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
            <GlowCard key={i} glowColor="blue" style={{ padding: "clamp(20px, 3vh, 32px) 16px", background: "rgba(245,158,11,0.05)", borderRadius: 16, textAlign: "center" as const }}>
              <div className="card-num" style={{ fontSize: "clamp(24px, 3.5vw, 48px)", fontWeight: 700, color: "#f59e0b", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 8 }}>
                {m.value}
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em" }}>{m.label}</div>
            </GlowCard>
          ))}
        </div>

      </main>
    </div>

    {/* CaseChairsWbSection */}
    <section style={{ ...sectionStyle, minHeight: "max(100svh, calc(32.3vw + 260px))", backgroundColor: "#ffffff" }}>
      <div className="chairs-infinity" style={{ position: "absolute", left: "2.81vw", top: "5.09vh", width: "clamp(50px, 6.09vw, 117px)", height: "clamp(26px, 5.56vh, 60px)", pointerEvents: "none", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/figma-assets/infinity-light.png" style={{ position: "absolute", width: "206.91%", height: "405.54%", left: "-52.74%", top: "-148.71%", maxWidth: "none" }} />
      </div>
      <div
        style={{
          position: "absolute",
          top: "clamp(30px, 5.56vh, 60px)",
          right: "3.125vw",
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
          {"кейсы  •  игровые кресла"}
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(87.6vw, 1682px)",
          aspectRatio: "1682 / 620",
          border: "clamp(3px, 0.78vw, 15px) solid rgba(13, 31, 31, 0.2)",
          borderRadius: "clamp(12px, 1.5625vw, 30px)",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src={CHAIRS_WB_SCREENSHOT_IMG} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
      </div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "calc(50% + min(16.15vw, 310px) + 50px)",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: "clamp(10px, 1.2vw, 23px)",
          whiteSpace: "nowrap",
        }}
      >
        <div style={{ width: "clamp(28px, 3.33vw, 64px)", height: "clamp(28px, 3.33vw, 64px)", borderRadius: "50%", background: "#CB11AB", border: "3px solid #CB11AB", overflow: "hidden", flexShrink: 0, position: "relative" }}>
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

    {/* CaseChairsScreenshotSection */}
    <section style={{ ...sectionStyle, minHeight: "max(100svh, calc(37.41vw + 340px))", backgroundColor: "#ffffff" }}>
      <div className="chairs-infinity" style={{ position: "absolute", left: "2.81vw", top: "5.09vh", width: "clamp(50px, 6.09vw, 117px)", height: "clamp(26px, 5.56vh, 60px)", pointerEvents: "none", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/figma-assets/infinity-light.png" style={{ position: "absolute", width: "206.91%", height: "405.54%", left: "-52.74%", top: "-148.71%", maxWidth: "none" }} />
      </div>
      <div
        className="chairs-ozon-badge"
        style={{
          position: "absolute",
          top: "clamp(30px, 5.56vh, 60px)",
          left: "calc(75% + 2.396vw)",
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
          {"кейсы  •  игровые кресла"}
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          left: "7.24vw",
          top: "clamp(100px, 16.48vh, 178px)",
          width: "85.52vw",
          aspectRatio: "1642 / 718",
          border: "clamp(3px, 0.78vw, 15px) solid rgba(13, 31, 31, 0.2)",
          borderRadius: "clamp(12px, 1.5625vw, 30px)",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src={CHAIRS_SCREENSHOT_IMG} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
      </div>
      <div
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
        <div style={{ width: "clamp(28px, 3.33vw, 64px)", height: "clamp(28px, 3.33vw, 64px)", borderRadius: "50%", background: "#005BFF", overflow: "hidden", flexShrink: 0, position: "relative" }}>
          <svg viewBox="0 0 64 64" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
            <rect width="64" height="64" fill="#005BFF"/>
            <text x="32" y="40" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="700" fontSize="16">ozon</text>
          </svg>
        </div>
        <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(14px, 1.823vw, 35px)", lineHeight: 1.2, letterSpacing: "-0.035em", color: "#0d1f1f", opacity: 0.5, margin: 0, whiteSpace: "nowrap" }}>
          Скриншот личного кабинета Ozon
        </p>
      </div>
    </section>

    {/* CaseChairsSection */}
    <section className="chairs-margin-section" style={{ ...sectionStyle, minHeight: "max(100svh, 760px)", backgroundColor: "#ffffff" }}>
      <div
        className="chairs-margin-badge"
        style={{
          position: "absolute",
          top: "clamp(30px, 5.56vh, 60px)",
          right: "3.125vw",
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
          {"кейсы  •  игровые кресла"}
        </p>
      </div>

      <div
        className="chairs-margin-left"
        style={{
          position: "absolute",
          left: "2.8125vw",
          top: "clamp(40px, 5.65vh, 61px)",
          width: "min(54.375vw, 1044px)",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(20px, 4.44vh, 48px)",
        }}
      >
        <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(20px, 3.385vw, 65px)", lineHeight: 0.9, letterSpacing: "-0.035em", color: "#0d1f1f", margin: 0 }}>
          {"Увеличили маржинальность "}
          <span style={{ color: "#ff00e6" }}>в два раза</span>
        </p>
        <div style={{ opacity: 0.5 }}>
          {[
            "• Сменили поставщика, что дало −18% к себестоимости",
            "• Оптимизировали ВЭД: −22% на логистику",
            "• Сегментировали ЦА: CR с 0,9% до 1,4%",
            "• Переработали воронку и рекламу",
          ].map((line) => (
            <p key={line} style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(10px, 1.302vw, 25px)", lineHeight: 1.3, letterSpacing: "-0.035em", color: "#0d1f1f", margin: 0 }}>
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* graph — from Figma */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        className="chairs-margin-graph"
        src="/chairs-graph.svg"
        style={{
          position: "absolute",
          left: "-0.3125vw",
          top: "clamp(320px, 51.48vh, 556px)",
          width: "100.3125vw",
          height: "clamp(280px, 48.52vh, 524px)",
          maxWidth: "none",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="chairs-margin-stat" style={{ position: "absolute", left: "3.28vw", top: "clamp(320px, 51.48vh, 556px)", zIndex: 2 }}>
        <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(10px, 1.25vw, 24px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#2e132b", opacity: 0.5, margin: "0 0 clamp(14px, 2.96vh, 32px) 0", whiteSpace: "nowrap" }}>
          Маржинальность
        </p>
        <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(40px, 6.67vw, 128px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#2e132b", margin: 0, whiteSpace: "nowrap" }}>
          <CountUp value={12} suffix="%" duration={2200} />
        </p>
      </div>

      <div className="chairs-right-stat chairs-margin-25" style={{ position: "absolute", left: "74.11vw", top: "clamp(130px, 20.46vh, 221px)", zIndex: 2 }}>
        <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(10px, 1.25vw, 24px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#2e132b", opacity: 0.5, margin: "0 0 clamp(14px, 2.96vh, 32px) 0", whiteSpace: "nowrap" }}>
          Маржинальность
        </p>
        <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(40px, 6.67vw, 128px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ff00e6", margin: 0, whiteSpace: "nowrap" }}>
          <CountUp value={25} suffix="%" duration={2200} />
        </p>
      </div>

      <div className="chairs-margin-line" style={{ position: "absolute", left: "3.28vw", top: "clamp(450px, 70.56vh, 762px)", width: "clamp(8px, 0.9375vw, 18px)", height: "clamp(56px, 9.81vh, 106px)", maxWidth: "none", pointerEvents: "none", zIndex: 2, borderLeft: "clamp(2px, 0.2vw, 4px) dashed rgba(46,19,43,0.25)", marginLeft: "clamp(3px, 0.42vw, 8px)" }} />
      <div className="chairs-right-stat" style={{ position: "absolute", left: "74.11vw", top: "clamp(240px, 37.5vh, 405px)", width: "clamp(8px, 0.9375vw, 18px)", height: "clamp(84px, 14.81vh, 160px)", maxWidth: "none", pointerEvents: "none", zIndex: 2, borderLeft: "clamp(2px, 0.2vw, 4px) dashed rgba(255,0,230,0.3)", marginLeft: "clamp(3px, 0.42vw, 8px)" }} />

      <div className="chairs-margin-problems" style={{ position: "absolute", left: "3.02vw", top: "clamp(560px, 84.07vh, 908px)", width: "min(29.84vw, 573px)", zIndex: 2 }}>
        {["Высокая себестоимость и логистика", "Размытая ЦА"].map((line) => (
          <p key={line} style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(12px, 1.823vw, 35px)", lineHeight: 1.2, letterSpacing: "-0.035em", color: "#0d1f1f", margin: 0 }}>
            {line}
          </p>
        ))}
      </div>

      <div className="chairs-right-stat" style={{ position: "absolute", left: "74.11vw", top: "clamp(360px, 55.74vh, 602px)", width: "min(26.15vw, 502px)", display: "flex", flexDirection: "column", gap: "clamp(10px, 1.94vh, 21px)", zIndex: 2 }}>
        <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(12px, 1.823vw, 35px)", lineHeight: 1.2, letterSpacing: "-0.035em", color: "#0d1f1f", margin: 0 }}>
          <CountUp value={40.5} decimals={1} suffix=" млн ₽" duration={2200} /> оборот
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(6px, 0.78vw, 15px)" }}>
          <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(12px, 1.823vw, 35px)", lineHeight: 1.2, letterSpacing: "-0.035em", color: "#0d1f1f", margin: 0, whiteSpace: "nowrap" }}>
            <CountUp value={1989} separator=" " duration={2200} /> заказов в месяц
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", padding: "clamp(5px, 1.3vh, 14px) 8px", borderRadius: "300px", background: "rgba(255,255,255,0.4)", border: "2px solid #ffffff", backdropFilter: "blur(50px)", flexShrink: 0 }}>
            <svg style={{ width: "clamp(10px, 1.15vw, 22px)", height: "clamp(9px, 1.57vh, 17px)", display: "block", pointerEvents: "none" }} viewBox="0 0 22 17" fill="none">
              <path d="M11 15V2M4 9L11 2L18 9" stroke="#ff00e6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(10px, 1.25vw, 24px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ff00e6", margin: 0, whiteSpace: "nowrap" }}><CountUp value={88} suffix="%" duration={2200} /></p>
          </div>
        </div>
        <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(12px, 1.823vw, 35px)", lineHeight: 1.2, letterSpacing: "-0.035em", color: "#0d1f1f", margin: 0 }}>
          {"Рост прибыли в 2+ раза\nбез увеличения рекламы"}
        </p>
      </div>
    </section>

    {/* CTA Section */}
    <section style={{ background: "#071518", padding: "clamp(60px, 10vh, 120px) clamp(20px, 5vw, 80px)", fontFamily: FONT }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: "clamp(40px, 7vh, 80px)" }}>
          <p style={{ fontSize: "clamp(10px, 0.9vw, 13px)", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#f59e0b", marginBottom: 16 }}>
            Результат
          </p>
          <p style={{ fontSize: "clamp(15px, 1.3vw, 18px)", color: "rgba(255,255,255,0.8)", lineHeight: 1.8, maxWidth: 800 }}>
            За 3 месяца с нуля удалось вывести бренд в топ-10 категории «Игровые кресла» на Ozon. Накоплено более 150 отзывов со средним рейтингом 4.8. Ежемесячная выручка достигла 1.8 млн ₽. Рекламный бюджет снизился на 35% при сохранении объёмов продаж за счёт роста органических позиций.
          </p>
        </div>
        <div style={{ textAlign: "center" as const }}>
          <h2 style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 400, fontSize: "clamp(28px, 3vw, 56px)", color: "#fff", letterSpacing: "-0.035em", marginBottom: 16 }}>
            Хотите такой же результат?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(14px, 1.3vw, 20px)", marginBottom: 40 }}>
            Оставьте заявку — разберём ваш бизнес и предложим план роста
          </p>
          <Link href="/form" className="case-cta-btn" style={{ display: "inline-block", padding: "16px 48px", background: "#f59e0b", borderRadius: 12, color: "#071518", fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: 16, fontWeight: 500, textDecoration: "none", letterSpacing: "-0.02em", transition: "box-shadow 0.3s ease, transform 0.2s ease" }}>
            Получить такой же результат →
          </Link>
        </div>
      </div>
    </section>
    <style>{`
      .case-cta-btn:hover {
        box-shadow: 0 0 0 2px rgba(245,158,11,0.4), 0 0 30px rgba(245,158,11,0.5), 0 10px 40px rgba(245,158,11,0.3);
        transform: translateY(-2px);
      }
    `}</style>
    </>
  );
}
