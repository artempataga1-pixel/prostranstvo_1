"use client";
import Link from "next/link";
import CountUp from "../../components/CountUp";
import { GlowCard } from "../../components/GlowCard";
import Cube3D from "../../components/Cube3D";

const FONT = "Helvetica Neue, Helvetica, Arial, sans-serif";

const sectionStyle = {
  position: "relative" as const,
  width: "100%",
  minHeight: "100svh",
  overflow: "clip",
};

const metrics = [
  { value: "13", label: "этапов внедрения" },
  { value: "100%", label: "цифровизация" },
  { value: "1 нед", label: "обучение команды" },
];


export default function CaseAutomation1CPage() {
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
            fontWeight: 500,
          }}
        >
          ← Назад
        </Link>
        <span style={{ color: "rgba(7,21,24,0.35)", fontSize: 14 }}>/</span>
        <span style={{ color: "rgba(7,21,24,0.55)", fontSize: 14 }}>Кейсы</span>
        <span style={{ color: "rgba(7,21,24,0.35)", fontSize: 14 }}>/</span>
        <span style={{ color: "rgba(7,21,24,0.8)", fontSize: 14 }}>1С УНФ + ТСД</span>
      </header>

      <main style={{ padding: "clamp(40px, 8vh, 100px) clamp(20px, 5vw, 80px)", maxWidth: 1100, margin: "0 auto" }}>
        <p
          style={{
            fontSize: "clamp(10px, 0.9vw, 13px)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#0ABAB5",
            marginBottom: 16,
          }}
        >
          Автоматизация · Фулфилмент-склад
        </p>

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
          1С УНФ + ТСД
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
          Внедрение 1С Управление нашей фирмой совместно с терминалами сбора данных для фулфилмент-центра: 13 этапов автоматизации, 100% цифровизация склада.
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

    {/* Case1CIntroSection */}
    <section style={{ ...sectionStyle, minHeight: "max(100svh, 760px)", backgroundColor: "#0d1f1f" }}>
      <div style={{ position: "absolute", right: "-8vw", top: "10vh", width: "55vw", height: "55vw", background: "radial-gradient(circle, rgba(10,186,181,0.10) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: "-5vw", bottom: "0", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(10,186,181,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "clamp(30px, 5.56vh, 60px)", right: "3.125vw", display: "flex", alignItems: "center", padding: "clamp(8px, 1.11vh, 12px) clamp(10px, 0.83vw, 16px)", borderRadius: "300px", background: "rgba(10,186,181,0.12)", border: "1px solid rgba(10,186,181,0.3)", backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)" }}>
        <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(10px, 1.302vw, 25px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#0ABAB5", textTransform: "uppercase", whiteSpace: "nowrap", margin: 0 }}>
          кейсы  •  1С УНФ
        </p>
      </div>
      <h2 style={{ position: "absolute", left: "3.125vw", top: "clamp(30px, 5.65vh, 61px)", width: "min(50vw, 960px)", fontFamily: FONT, fontWeight: 400, fontSize: "clamp(28px, 4.688vw, 90px)", lineHeight: 0.9, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "pre-line" }}>
        {"Внедрение\n1С УНФ + ТСД\nдля фулфилмента"}
      </h2>
      <p style={{ position: "absolute", left: "3.125vw", top: "clamp(230px, 34vh, 370px)", width: "min(44vw, 840px)", fontFamily: FONT, fontWeight: 400, fontSize: "clamp(12px, 1.563vw, 30px)", lineHeight: 1.35, letterSpacing: "-0.025em", color: "rgba(255,255,255,0.45)", margin: 0 }}>
        Полный цикл внедрения операционной системы управления складом: от аудита бизнес‑процессов до обучения персонала и месячного сопровождения
      </p>
      <div style={{ position: "absolute", right: "clamp(20px, 3vw, 60px)", top: "50%", transform: "translateY(-50%)", width: "clamp(280px, 43vw, 820px)", height: "clamp(280px, 43vw, 820px)", pointerEvents: "none" }}>
        <Cube3D />
      </div>
      <div style={{ position: "absolute", bottom: "clamp(36px, 6.67vh, 72px)", left: "3.125vw", display: "flex", gap: "clamp(24px, 5.21vw, 100px)", alignItems: "flex-end" }}>
        {[
          { value: <CountUp value={13} duration={2000} />, label: "этапов внедрения" },
          { value: "1С", label: "УНФ + ТСД система" },
          { value: <CountUp value={100} suffix="%" duration={2000} />, label: "цифровизация склада" },
        ].map(({ value, label }) => (
          <div key={label}>
            <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(28px, 4.167vw, 80px)", lineHeight: 1, letterSpacing: "-0.04em", color: "#0ABAB5", margin: "0 0 clamp(4px, 0.56vh, 6px) 0" }}>
              {value}
            </p>
            <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(10px, 1.04vw, 20px)", lineHeight: 1.2, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.4)", margin: 0 }}>
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* Case1CStepsSection */}
    <section style={{ ...sectionStyle, minHeight: "max(100svh, 760px)", backgroundColor: "#071518" }}>
      <div style={{ position: "absolute", right: "-6vw", top: "5vh", width: "55vw", height: "55vw", background: "radial-gradient(circle, rgba(10,186,181,0.09) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: "-5vw", bottom: "0", width: "35vw", height: "35vw", background: "radial-gradient(circle, rgba(10,186,181,0.05) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: "3.125vw", top: "clamp(30px, 5.56vh, 60px)", display: "flex", alignItems: "baseline", gap: "clamp(12px, 1.5vw, 28px)" }}>
        <h2 style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(28px, 4.167vw, 80px)", lineHeight: 0.9, letterSpacing: "-0.04em", color: "#ffffff", margin: 0, whiteSpace: "nowrap" }}>
          Как это работает
        </h2>
        <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(11px, 1.25vw, 24px)", letterSpacing: "-0.02em", color: "rgba(255,255,255,0.3)", margin: 0 }}>
          1С УНФ + ТСД · 4 этапа
        </p>
      </div>
      <div style={{ position: "absolute", left: "3.125vw", top: "clamp(100px, 14.7vh, 155px)", bottom: "clamp(20px, 3vh, 36px)", width: "48%", display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "clamp(8px, 1.04vw, 18px)" }}>
        {[
          { num: "01", title: "Аудит и регламент", desc: "Анализ бизнес-модели, схема движения документов в 1С", color: "#0ABAB5" },
          { num: "02", title: "Развёртывание системы", desc: "База данных, серверы, вся товарная номенклатура", color: "#38bdf8" },
          { num: "03", title: "Настройка и учёт", desc: "ТСД, документооборот, полная оцифровка склада", color: "#38bdf8" },
          { num: "04", title: "Обучение и поддержка", desc: "Регламенты для ролей, месяц технической поддержки", color: "#a78bfa" },
        ].map(({ num, title, desc, color }) => (
          <GlowCard key={num} glowColor="teal" style={{ background: "rgba(255,255,255,0.03)", borderRadius: "clamp(12px, 1.25vw, 24px)", padding: "clamp(16px, 2.22vh, 28px) clamp(16px, 1.46vw, 28px)", display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
            <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(28px, 3.125vw, 60px)", lineHeight: 1, letterSpacing: "-0.05em", color, opacity: 0.5 }}>{num}</span>
            <div>
              <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(13px, 1.146vw, 22px)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "#fff", margin: "0 0 clamp(4px,0.56vh,8px)" }}>{title}</p>
              <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(10px, 0.833vw, 16px)", lineHeight: 1.35, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.45)", margin: 0 }}>{desc}</p>
            </div>
          </GlowCard>
        ))}
      </div>
      <div style={{ position: "absolute", right: "3.125vw", top: "50%", transform: "translateY(-50%)", width: "clamp(260px, 44vw, 820px)", height: "clamp(260px, 44vw, 820px)" }}>
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
          <defs>
            <filter id="layGlow2"><feGaussianBlur stdDeviation="5" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
            <linearGradient id="layTopFace2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0ABAB5" stopOpacity="0.55" /><stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" /></linearGradient>
            <linearGradient id="layLeftFace2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#0ABAB5" stopOpacity="0.18" /><stop offset="100%" stopColor="#071518" stopOpacity="0.8" /></linearGradient>
            <linearGradient id="layRightFace2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#38bdf8" stopOpacity="0.22" /><stop offset="100%" stopColor="#071518" stopOpacity="0.9" /></linearGradient>
            <style>{`
              @keyframes layFloat0b{0%,100%{transform:translateY(0px)}50%{transform:translateY(-14px)}}
              @keyframes layFloat2b{0%,100%{transform:translateY(0px)}50%{transform:translateY(-7px)}}
              @keyframes layDashb{from{stroke-dashoffset:0}to{stroke-dashoffset:-60}}
              @keyframes layRiseb{0%{opacity:0;transform:translateY(20px)}30%{opacity:.7}100%{opacity:0;transform:translateY(-40px)}}
            `}</style>
          </defs>
          <g opacity="0.45">
            <polygon points="250,305 340,255 250,205 160,255" fill="url(#layTopFace2)" stroke="rgba(10,186,181,0.3)" strokeWidth="1" />
            <polygon points="160,255 160,295 250,345 250,305" fill="url(#layLeftFace2)" stroke="rgba(10,186,181,0.2)" strokeWidth="1" />
            <polygon points="340,255 340,295 250,345 250,305" fill="url(#layRightFace2)" stroke="rgba(56,189,248,0.2)" strokeWidth="1" />
          </g>
          <g style={{ animation: "layFloat2b 5s ease-in-out infinite 0.8s" }} opacity="0.65">
            <polygon points="250,245 340,195 250,145 160,195" fill="url(#layTopFace2)" stroke="rgba(10,186,181,0.45)" strokeWidth="1.2" filter="url(#layGlow2)" />
            <polygon points="160,195 160,235 250,285 250,245" fill="url(#layLeftFace2)" stroke="rgba(10,186,181,0.25)" strokeWidth="1" />
            <polygon points="340,195 340,235 250,285 250,245" fill="url(#layRightFace2)" stroke="rgba(56,189,248,0.25)" strokeWidth="1" />
          </g>
          <g style={{ animation: "layFloat0b 4s ease-in-out infinite" }}>
            <polygon points="250,175 350,118 250,61 150,118" fill="url(#layTopFace2)" stroke="rgba(10,186,181,0.7)" strokeWidth="1.5" filter="url(#layGlow2)" />
            <polygon points="150,118 150,165 250,222 250,175" fill="url(#layLeftFace2)" stroke="rgba(10,186,181,0.35)" strokeWidth="1.2" />
            <polygon points="350,118 350,165 250,222 250,175" fill="url(#layRightFace2)" stroke="rgba(56,189,248,0.35)" strokeWidth="1.2" />
            <circle cx="250" cy="61" r="4" fill="#0ABAB5" opacity="0.9" filter="url(#layGlow2)" />
            <circle cx="350" cy="118" r="3" fill="#38bdf8" opacity="0.7" />
            <circle cx="150" cy="118" r="3" fill="#0ABAB5" opacity="0.7" />
          </g>
          <line x1="160" y1="195" x2="160" y2="255" stroke="rgba(10,186,181,0.2)" strokeWidth="1" strokeDasharray="4 4" style={{ animation: "layDashb 2s linear infinite" }} />
          <line x1="340" y1="195" x2="340" y2="255" stroke="rgba(56,189,248,0.2)" strokeWidth="1" strokeDasharray="4 4" style={{ animation: "layDashb 2s linear infinite reverse" }} />
          <text x="250" y="460" textAnchor="middle" fill="rgba(10,186,181,0.45)" fontSize="12" fontFamily="Helvetica Neue, sans-serif" letterSpacing="-0.02em">1С · УНФ · ТСД · ФУЛФИЛМЕНТ</text>
        </svg>
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
            Склад перешёл от бумажного учёта к полностью цифровому за 3 недели. Скорость обработки заказов выросла в 2.5 раза. Ошибки при сборке заказов снизились с 4.2% до 0.3%. Инвентаризация, которая ранее занимала 3 дня, теперь проводится за 4 часа. Команда из 15 человек освоила систему за 1 неделю обучения.
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
