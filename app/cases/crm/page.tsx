"use client";
import Link from "next/link";
import CountUp from "../../components/CountUp";
import { GlowCard } from "../../components/GlowCard";
import CRM3D from "../../components/CRM3D";

const FONT = "Helvetica Neue, Helvetica, Arial, sans-serif";

const sectionStyle = {
  position: "relative" as const,
  width: "100%",
  minHeight: "100svh",
  overflow: "clip",
};

const metrics = [
  { value: "13", label: "этапов внедрения" },
  { value: "1 мес", label: "поддержка после" },
  { value: "CRM", label: "под бизнес" },
];


export default function CaseCrmPage() {
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
          background: "rgba(56,189,248,0.92)",
          borderBottom: "1px solid rgba(56,189,248,0.15)",
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
        <span style={{ color: "rgba(7,21,24,0.8)", fontSize: 14 }}>CRM Система</span>
      </header>

      <main style={{ padding: "clamp(40px, 8vh, 100px) clamp(20px, 5vw, 80px)", maxWidth: 1100, margin: "0 auto" }}>
        <p
          style={{
            fontSize: "clamp(10px, 0.9vw, 13px)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#38bdf8",
            marginBottom: 16,
          }}
        >
          CRM · Внедрение под клиента
        </p>

        <h1
          style={{
            fontWeight: 400,
            fontSize: "clamp(40px, 6vw, 96px)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            margin: "0 0 clamp(24px, 4vh, 48px)",
            background: "linear-gradient(135deg, #ffffff 0%, #38bdf8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          CRM Система
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
          Полный цикл внедрения CRM: аудит процессов, подбор платформы, развёртывание, настройка воронок, обучение персонала и месяц технической поддержки после запуска.
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
            <GlowCard key={i} glowColor="cyan" style={{ padding: "clamp(20px, 3vh, 32px) 16px", background: "rgba(56,189,248,0.05)", borderRadius: 16, textAlign: "center" as const }}>
              <div className="card-num" style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#38bdf8", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 8 }}>
                {m.value}
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em" }}>{m.label}</div>
            </GlowCard>
          ))}
        </div>

      </main>
    </div>

    {/* CaseCRMIntroSection */}
    <section style={{ ...sectionStyle, minHeight: "max(100svh, 760px)", backgroundColor: "#080f18" }}>
      <div style={{ position: "absolute", right: "-8vw", top: "10vh", width: "55vw", height: "55vw", background: "radial-gradient(circle, rgba(56,189,248,0.10) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: "-5vw", bottom: "0", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "clamp(30px, 5.56vh, 60px)", right: "3.125vw", display: "flex", alignItems: "center", padding: "clamp(8px, 1.11vh, 12px) clamp(10px, 0.83vw, 16px)", borderRadius: "300px", background: "rgba(56,189,248,0.10)", border: "1px solid rgba(56,189,248,0.3)", backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)" }}>
        <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(10px, 1.302vw, 25px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#38bdf8", textTransform: "uppercase", whiteSpace: "nowrap", margin: 0 }}>
          кейсы  •  CRM системы
        </p>
      </div>
      <h2 style={{ position: "absolute", left: "3.125vw", top: "clamp(30px, 5.65vh, 61px)", width: "min(50vw, 960px)", fontFamily: FONT, fontWeight: 400, fontSize: "clamp(28px, 4.688vw, 90px)", lineHeight: 0.9, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "pre-line" }}>
        {"Внедрение\nCRM Системы"}
      </h2>
      <p style={{ position: "absolute", left: "3.125vw", top: "clamp(200px, 29vh, 315px)", width: "min(44vw, 840px)", fontFamily: FONT, fontWeight: 400, fontSize: "clamp(12px, 1.563vw, 30px)", lineHeight: 1.35, letterSpacing: "-0.025em", color: "rgba(255,255,255,0.45)", margin: 0 }}>
        Полный цикл: от аудита бизнес-модели и подбора оптимального CRM-инструмента до обучения персонала и месяца технической поддержки
      </p>
      <div style={{ position: "absolute", right: "clamp(20px, 3vw, 60px)", top: "50%", transform: "translateY(-50%)", width: "clamp(280px, 43vw, 820px)", height: "clamp(280px, 43vw, 820px)", pointerEvents: "none" }}>
        <CRM3D />
      </div>
      <div style={{ position: "absolute", left: "3.125vw", bottom: "clamp(36px, 6.67vh, 72px)", display: "flex", gap: "clamp(24px, 5.21vw, 100px)", alignItems: "flex-end" }}>
        {[
          { value: <CountUp value={13} duration={2000} />, label: "этапов внедрения" },
          { value: "CRM", label: "под бизнес клиента" },
          { value: <CountUp value={1} suffix=" мес" duration={2000} />, label: "поддержка после запуска" },
        ].map(({ value, label }) => (
          <div key={label}>
            <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(28px, 4.167vw, 80px)", lineHeight: 1, letterSpacing: "-0.04em", color: "#38bdf8", margin: "0 0 clamp(4px, 0.56vh, 6px) 0" }}>
              {value}
            </p>
            <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(10px, 1.04vw, 20px)", lineHeight: 1.2, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.4)", margin: 0 }}>
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* CaseCRMStepsSection */}
    <section style={{ ...sectionStyle, minHeight: "max(100svh, 760px)", backgroundColor: "#080d16" }}>
      <div style={{ position: "absolute", left: "50%", top: "-10vh", transform: "translateX(-50%)", width: "70vw", height: "40vw", background: "radial-gradient(ellipse, rgba(56,189,248,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: "3.125vw", top: "clamp(30px, 5.56vh, 60px)", display: "flex", alignItems: "baseline", gap: "clamp(12px, 1.5vw, 28px)" }}>
        <h2 style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(28px, 4.167vw, 80px)", lineHeight: 0.9, letterSpacing: "-0.04em", color: "#ffffff", margin: 0, whiteSpace: "nowrap" }}>
          Как это работает
        </h2>
        <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(11px, 1.25vw, 24px)", letterSpacing: "-0.02em", color: "rgba(255,255,255,0.3)", margin: 0 }}>
          CRM · 6 этапов
        </p>
      </div>
      <div className="crm-cards-grid" style={{ position: "absolute", left: "3.125vw", top: "clamp(100px, 14.7vh, 155px)", bottom: "clamp(20px, 3vh, 36px)", width: "51%", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "clamp(6px, 0.83vw, 14px)" }}>
        {[
          { num: "01", title: "Аудит и регламент", desc: "Анализ бизнес-модели, оценка и регламентирование всех процессов", color: "#38bdf8" },
          { num: "02", title: "Подбор CRM", desc: "Оценка и выбор оптимального инструмента под задачи клиента", color: "#7dd3fc" },
          { num: "03", title: "Развёртывание", desc: "База данных + резервная копия, размещение на собственных серверах", color: "#60a5fa" },
          { num: "04", title: "Настройка учёта", desc: "Номенклатура, спецификации, документы и отчётность", color: "#7dd3fc" },
          { num: "05", title: "Обучение персонала", desc: "Регламенты по ролям, типовые ошибки, цикл ведения отчётности", color: "#38bdf8" },
          { num: "06", title: "Поддержка", desc: "Месяц сопровождения по всем вопросам и проблемам после запуска", color: "#60a5fa" },
        ].map(({ num, title, desc, color }) => (
          <GlowCard key={num} glowColor="cyan" style={{ background: "rgba(255,255,255,0.025)", borderRadius: "clamp(10px, 1.04vw, 20px)", padding: "clamp(12px, 1.67vh, 22px) clamp(12px, 1.04vw, 20px)", display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
            <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(22px, 2.5vw, 48px)", lineHeight: 1, letterSpacing: "-0.05em", color, opacity: 0.5 }}>{num}</span>
            <div>
              <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(11px, 0.938vw, 18px)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "#fff", margin: "0 0 clamp(3px,0.42vh,6px)" }}>{title}</p>
              <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(9px, 0.677vw, 13px)", lineHeight: 1.35, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.4)", margin: 0 }}>{desc}</p>
            </div>
          </GlowCard>
        ))}
      </div>
      <div className="crm-diagram" style={{ position: "absolute", right: "3.125vw", top: "50%", transform: "translateY(-50%)", width: "clamp(220px, 38vw, 700px)", height: "clamp(220px, 38vw, 700px)" }}>
        <svg viewBox="0 0 460 460" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
          <defs>
            <filter id="crmGlow2"><feGaussianBlur stdDeviation="4" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
            <radialGradient id="crmHub2" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" /><stop offset="100%" stopColor="#38bdf8" stopOpacity="0" /></radialGradient>
            <style>{`
              @keyframes crmPulse2{0%,100%{opacity:.3}50%{opacity:1}}
              @keyframes crmOrbit2{from{stroke-dashoffset:0}to{stroke-dashoffset:-220}}
              @keyframes crmFloat2{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
              @keyframes crmSig2{0%{stroke-dashoffset:320}100%{stroke-dashoffset:0}}
            `}</style>
          </defs>
          <circle cx="230" cy="230" r="90" fill="url(#crmHub2)" opacity="0.2" />
          {[{x1:60,y1:110,x2:230,y2:230},{x1:60,y1:190,x2:230,y2:230},{x1:60,y1:270,x2:230,y2:230},{x1:60,y1:350,x2:230,y2:230}].map(({x1,y1,x2,y2},i)=>(
            <line key={`il-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(56,189,248,0.18)" strokeWidth="1.5" />
          ))}
          {[{x1:230,y1:230,x2:400,y2:110},{x1:230,y1:230,x2:400,y2:190},{x1:230,y1:230,x2:400,y2:270},{x1:230,y1:230,x2:400,y2:350}].map(({x1,y1,x2,y2},i)=>(
            <line key={`ol-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(125,211,252,0.18)" strokeWidth="1.5" />
          ))}
          <line x1="60" y1="110" x2="230" y2="230" stroke="#38bdf8" strokeWidth="2" strokeDasharray="20 300" style={{ animation: "crmSig2 3s linear infinite" }} />
          <line x1="60" y1="270" x2="230" y2="230" stroke="#7dd3fc" strokeWidth="2" strokeDasharray="20 300" style={{ animation: "crmSig2 4s linear infinite 1.3s" }} />
          <line x1="230" y1="230" x2="400" y2="190" stroke="#38bdf8" strokeWidth="2" strokeDasharray="20 300" style={{ animation: "crmSig2 3.5s linear infinite 0.7s" }} />
          <line x1="230" y1="230" x2="400" y2="350" stroke="#60a5fa" strokeWidth="2" strokeDasharray="20 300" style={{ animation: "crmSig2 4.5s linear infinite 2s" }} />
          <circle cx="230" cy="230" r="68" stroke="rgba(56,189,248,0.15)" strokeWidth="1" strokeDasharray="10 5" style={{ animation: "crmOrbit2 7s linear infinite" }} />
          <circle cx="230" cy="230" r="100" stroke="rgba(56,189,248,0.08)" strokeWidth="1" strokeDasharray="14 8" style={{ animation: "crmOrbit2 13s linear infinite reverse" }} />
          {[110, 190, 270, 350].map((y, i) => (
            <g key={`in-${i}`} style={{ animation: `crmPulse2 ${2.4 + i * 0.3}s ease-in-out infinite ${i * 0.4}s` }}>
              <circle cx="60" cy={y} r="16" fill="rgba(56,189,248,0.10)" stroke="rgba(56,189,248,0.40)" strokeWidth="1.5" filter="url(#crmGlow2)" />
              <circle cx="60" cy={y} r="6" fill="#38bdf8" />
            </g>
          ))}
          {[110, 190, 270, 350].map((y, i) => (
            <g key={`out-${i}`} style={{ animation: `crmPulse2 ${2.4 + i * 0.3}s ease-in-out infinite ${i * 0.55 + 0.25}s` }}>
              <circle cx="400" cy={y} r="16" fill="rgba(125,211,252,0.10)" stroke="rgba(125,211,252,0.40)" strokeWidth="1.5" filter="url(#crmGlow2)" />
              <circle cx="400" cy={y} r="6" fill="#7dd3fc" />
            </g>
          ))}
          <g style={{ animation: "crmFloat2 4s ease-in-out infinite" }}>
            <circle cx="230" cy="230" r="38" fill="rgba(56,189,248,0.08)" stroke="rgba(56,189,248,0.30)" strokeWidth="2" filter="url(#crmGlow2)" />
            <circle cx="230" cy="230" r="24" fill="rgba(56,189,248,0.18)" stroke="rgba(56,189,248,0.60)" strokeWidth="1.5" />
            <circle cx="230" cy="230" r="11" fill="#38bdf8" />
          </g>
          <text x="230" y="432" textAnchor="middle" fill="rgba(56,189,248,0.45)" fontSize="12" fontFamily="Helvetica Neue, sans-serif" letterSpacing="-0.02em">CRM · ДАННЫЕ · ПРОЦЕССЫ · РЕЗУЛЬТАТ</text>
        </svg>
      </div>
    </section>

    {/* CTA Section */}
    <section style={{ background: "#071518", padding: "clamp(60px, 10vh, 120px) clamp(20px, 5vw, 80px)", fontFamily: FONT }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: "clamp(40px, 7vh, 80px)" }}>
          <p style={{ fontSize: "clamp(10px, 0.9vw, 13px)", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#38bdf8", marginBottom: 16 }}>
            Результат
          </p>
          <p style={{ fontSize: "clamp(15px, 1.3vw, 18px)", color: "rgba(255,255,255,0.8)", lineHeight: 1.8, maxWidth: 800 }}>
            CRM внедрена и принята командой с первого раза — отказов от системы не было. Конверсия из заявки в сделку выросла на 23% за счёт автоматических напоминаний и контроля воронки. Потери лидов из-за забытых задач снизились до нуля. Руководство получило прозрачную аналитику по каждому менеджеру и воронке в реальном времени.
          </p>
        </div>
        <div style={{ textAlign: "center" as const }}>
          <h2 style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 400, fontSize: "clamp(28px, 3vw, 56px)", color: "#fff", letterSpacing: "-0.035em", marginBottom: 16 }}>
            Хотите такой же результат?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(14px, 1.3vw, 20px)", marginBottom: 40 }}>
            Оставьте заявку — разберём ваш бизнес и предложим план роста
          </p>
          <Link href="/form" className="case-cta-btn" style={{ display: "inline-block", padding: "16px 48px", background: "#38bdf8", borderRadius: 12, color: "#071518", fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: 16, fontWeight: 500, textDecoration: "none", letterSpacing: "-0.02em", transition: "box-shadow 0.3s ease, transform 0.2s ease" }}>
            Получить такой же результат →
          </Link>
        </div>
      </div>
    </section>
    <style>{`
      .case-cta-btn:hover {
        box-shadow: 0 0 0 2px rgba(56,189,248,0.4), 0 0 30px rgba(56,189,248,0.5), 0 10px 40px rgba(56,189,248,0.3);
        transform: translateY(-2px);
      }
    `}</style>
    </>
  );
}
