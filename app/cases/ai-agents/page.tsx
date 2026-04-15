import Link from "next/link";
import CountUp from "../../components/CountUp";
import { GlowCard } from "../../components/GlowCard";
import { DeferredNeuralNet3D } from "../../components/DeferredSceneMounts";

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

const metrics = [
  { value: "24/7", label: "работа без участия" },
  { value: "80%", label: "экономия времени" },
  { value: "ИИ", label: "автоматизация" },
];


export default function CaseAiAgentsPage() {
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
          background: "rgba(139,92,246,0.92)",
          borderBottom: "1px solid rgba(139,92,246,0.15)",
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
        <span style={{ color: "rgba(7,21,24,0.8)", fontSize: 14 }}>ИИ Агенты</span>
      </header>

      <main style={{ padding: "clamp(40px, 8vh, 100px) clamp(20px, 5vw, 80px)", maxWidth: 1100, margin: "0 auto" }}>
        <p
          style={{
            fontSize: "clamp(10px, 0.9vw, 13px)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#8b5cf6",
            marginBottom: 16,
          }}
        >
          ИИ-автоматизация · Бизнес-процессы
        </p>

        <h1
          style={{
            fontWeight: 400,
            fontSize: "clamp(40px, 6vw, 96px)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            margin: "0 0 clamp(24px, 4vh, 48px)",
            background: "linear-gradient(135deg, #ffffff 0%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          ИИ Агенты
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
          Внедрение ИИ-агентов для автоматизации рутинных бизнес-процессов — работа 24/7 без участия человека. Экономия 80% времени команды на обработке заявок и формировании отчётов.
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
            <GlowCard key={i} glowColor="purple" style={{ padding: "clamp(20px, 3vh, 32px) 16px", background: "rgba(139,92,246,0.05)", borderRadius: 16, textAlign: "center" as const }}>
              <div className="card-num" style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#8b5cf6", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 8 }}>
                {m.value}
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em" }}>{m.label}</div>
            </GlowCard>
          ))}
        </div>

      </main>
    </div>

    {/* CaseAIIntroSection */}
    <section style={{ ...sectionStyle, ...deferredSectionStyle, minHeight: "max(100svh, 760px)", backgroundColor: "#0d0f1f" }}>
      <div style={{ position: "absolute", right: "-8vw", top: "10vh", width: "55vw", height: "55vw", background: "radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: "-5vw", bottom: "0", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "clamp(30px, 5.56vh, 60px)", right: "3.125vw", display: "flex", alignItems: "center", padding: "clamp(8px, 1.11vh, 12px) clamp(10px, 0.83vw, 16px)", borderRadius: "300px", background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.3)", backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)" }}>
        <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(10px, 1.302vw, 25px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#8b5cf6", textTransform: "uppercase", whiteSpace: "nowrap", margin: 0 }}>
          кейсы  •  ИИ агенты
        </p>
      </div>
      <h2 style={{ position: "absolute", left: "3.125vw", top: "clamp(30px, 5.65vh, 61px)", width: "min(50vw, 960px)", fontFamily: FONT, fontWeight: 400, fontSize: "clamp(28px, 4.688vw, 90px)", lineHeight: 0.9, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "pre-line" }}>
        {"Внедрение\nИИ Агентов"}
      </h2>
      <p style={{ position: "absolute", left: "3.125vw", top: "clamp(190px, 28vh, 300px)", width: "min(44vw, 840px)", fontFamily: FONT, fontWeight: 400, fontSize: "clamp(12px, 1.563vw, 30px)", lineHeight: 1.35, letterSpacing: "-0.025em", color: "rgba(255,255,255,0.45)", margin: 0 }}>
        Автоматизируем рутинные бизнес-процессы с помощью ИИ-агентов. От аудита до полноценного внедрения — ваш бизнес работает эффективнее без лишних затрат.
      </p>
      <div style={{ position: "absolute", left: "3.125vw", bottom: "clamp(30px, 5.56vh, 60px)", display: "flex", gap: "clamp(24px, 3.125vw, 60px)", alignItems: "flex-end" }}>
        {[
          { value: <CountUp value={8} duration={2000} />, label: "этапов внедрения" },
          { value: "ИИ", label: "агенты и автоматизация" },
          { value: <CountUp value={24} suffix="/7" duration={2200} />, label: "работа без участия человека" },
        ].map(({ value, label }) => (
          <div key={label} style={{ display: "flex", flexDirection: "column", gap: "clamp(4px, 0.56vh, 6px)" }}>
            <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(32px, 4.167vw, 80px)", lineHeight: 1, letterSpacing: "-0.04em", color: "#8b5cf6" }}>{value}</span>
            <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(10px, 0.938vw, 18px)", letterSpacing: "-0.02em", color: "rgba(255,255,255,0.35)" }}>{label}</span>
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", right: "3.125vw", top: "50%", transform: "translateY(-50%)", width: "clamp(260px, 42vw, 780px)", height: "clamp(260px, 42vw, 780px)" }}>
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
          <defs>
            <filter id="aiGlow2"><feGaussianBlur stdDeviation="4" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
            <filter id="aiNodeGlow2"><feGaussianBlur stdDeviation="6" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
            <radialGradient id="aiCenterGrad2" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" /><stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" /></radialGradient>
            <style>{`
              @keyframes aiPulse2{0%,100%{opacity:.35}50%{opacity:1}}
              @keyframes aiOrbit2{from{stroke-dashoffset:0}to{stroke-dashoffset:-200}}
              @keyframes aiFloat2x{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
              @keyframes aiSignal2{0%{stroke-dashoffset:300}100%{stroke-dashoffset:0}}
            `}</style>
          </defs>
          <circle cx="250" cy="250" r="110" fill="url(#aiCenterGrad2)" opacity="0.25" />
          <line x1="75" y1="100" x2="250" y2="250" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5" />
          <line x1="75" y1="200" x2="250" y2="250" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5" />
          <line x1="75" y1="300" x2="250" y2="250" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5" />
          <line x1="75" y1="400" x2="250" y2="250" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5" />
          <line x1="250" y1="250" x2="425" y2="100" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5" />
          <line x1="250" y1="250" x2="425" y2="200" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5" />
          <line x1="250" y1="250" x2="425" y2="300" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5" />
          <line x1="250" y1="250" x2="425" y2="400" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5" />
          <line x1="75" y1="100" x2="250" y2="250" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="18 280" style={{ animation: "aiSignal2 3s linear infinite" }} />
          <line x1="75" y1="300" x2="250" y2="250" stroke="#a78bfa" strokeWidth="2" strokeDasharray="18 280" style={{ animation: "aiSignal2 4s linear infinite 1.2s" }} />
          <line x1="250" y1="250" x2="425" y2="200" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="18 280" style={{ animation: "aiSignal2 3.5s linear infinite 0.6s" }} />
          <line x1="250" y1="250" x2="425" y2="400" stroke="#a78bfa" strokeWidth="2" strokeDasharray="18 280" style={{ animation: "aiSignal2 4.5s linear infinite 2s" }} />
          <circle cx="250" cy="250" r="72" stroke="rgba(139,92,246,0.18)" strokeWidth="1" strokeDasharray="10 5" style={{ animation: "aiOrbit2 8s linear infinite" }} />
          <circle cx="250" cy="250" r="105" stroke="rgba(139,92,246,0.10)" strokeWidth="1" strokeDasharray="14 8" style={{ animation: "aiOrbit2 14s linear infinite reverse" }} />
          {[100, 200, 300, 400].map((y, i) => (
            <g key={`in-${i}`} style={{ animation: `aiPulse2 ${2.5 + i * 0.3}s ease-in-out infinite ${i * 0.4}s` }}>
              <circle cx="75" cy={y} r="17" fill="rgba(139,92,246,0.12)" stroke="rgba(139,92,246,0.45)" strokeWidth="1.5" filter="url(#aiGlow2)" />
              <circle cx="75" cy={y} r="6" fill="#8b5cf6" />
            </g>
          ))}
          {[100, 200, 300, 400].map((y, i) => (
            <g key={`out-${i}`} style={{ animation: `aiPulse2 ${2.5 + i * 0.3}s ease-in-out infinite ${i * 0.6 + 0.3}s` }}>
              <circle cx="425" cy={y} r="17" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.45)" strokeWidth="1.5" filter="url(#aiGlow2)" />
              <circle cx="425" cy={y} r="6" fill="#a78bfa" />
            </g>
          ))}
          <g style={{ animation: "aiFloat2x 4s ease-in-out infinite" }}>
            <circle cx="250" cy="250" r="40" fill="rgba(139,92,246,0.10)" stroke="rgba(139,92,246,0.35)" strokeWidth="2" filter="url(#aiNodeGlow2)" />
            <circle cx="250" cy="250" r="26" fill="rgba(139,92,246,0.22)" stroke="rgba(139,92,246,0.65)" strokeWidth="1.5" />
            <circle cx="250" cy="250" r="11" fill="#8b5cf6" />
          </g>
          <text x="250" y="468" textAnchor="middle" fill="rgba(139,92,246,0.5)" fontSize="13" fontFamily="Helvetica Neue, sans-serif" letterSpacing="-0.02em">ИИ · АГЕНТ · АВТОМАТИЗАЦИЯ</text>
        </svg>
      </div>
    </section>

    {/* CaseAIStepsSection */}
    <section style={{ ...sectionStyle, ...deferredSectionStyle, minHeight: "max(100svh, 760px)", backgroundColor: "#0a0d1a" }}>
      <div style={{ position: "absolute", left: "50%", top: "-10vh", transform: "translateX(-50%)", width: "80vw", height: "40vw", background: "radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: "3.125vw", top: "clamp(30px, 5.56vh, 60px)", display: "flex", alignItems: "baseline", gap: "clamp(12px, 1.5vw, 28px)" }}>
        <h2 style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(28px, 4.167vw, 80px)", lineHeight: 0.9, letterSpacing: "-0.04em", color: "#ffffff", margin: 0, whiteSpace: "nowrap" }}>
          4 фазы внедрения
        </h2>
        <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(11px, 1.25vw, 24px)", letterSpacing: "-0.02em", color: "rgba(255,255,255,0.3)", margin: 0 }}>
          ИИ Агентов
        </p>
      </div>
      <div style={{ position: "absolute", left: "3.125vw", top: "clamp(100px, 14.7vh, 155px)", bottom: "clamp(20px, 3vh, 36px)", width: "48%", display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "clamp(8px, 1.04vw, 18px)" }}>
        {[
          { num: "01", title: "Аудит", desc: "Анализ узких мест и оценка бизнес-процессов", color: "#0ABAB5" },
          { num: "02", title: "Проектирование", desc: "Формирование ТЗ и согласование с заказчиком", color: "#38bdf8" },
          { num: "03", title: "Разработка", desc: "Тестовое внедрение, постоянная доработка (2–14 дней)", color: "#8b5cf6" },
          { num: "04", title: "Тестирование", desc: "Финальный тест 3–7 дней и запуск в работу", color: "#34d399" },
        ].map(({ num, title, desc, color }) => (
          <GlowCard key={num} glowColor="purple" style={{ background: "rgba(255,255,255,0.03)", borderRadius: "clamp(12px, 1.25vw, 24px)", padding: "clamp(16px, 2.22vh, 28px) clamp(16px, 1.46vw, 28px)", display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
            <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(28px, 3.125vw, 60px)", lineHeight: 1, letterSpacing: "-0.05em", color, opacity: 0.5 }}>{num}</span>
            <div>
              <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(13px, 1.146vw, 22px)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "#fff", margin: "0 0 clamp(4px,0.56vh,8px)" }}>{title}</p>
              <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(10px, 0.833vw, 16px)", lineHeight: 1.35, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.45)", margin: 0 }}>{desc}</p>
            </div>
          </GlowCard>
        ))}
      </div>
      <div style={{ position: "absolute", right: "3.125vw", top: "50%", transform: "translateY(-50%)", width: "clamp(260px, 44vw, 820px)", height: "clamp(260px, 44vw, 820px)", pointerEvents: "none" }}>
        <DeferredNeuralNet3D />
      </div>
    </section>

    {/* CTA Section */}
    <section style={{ background: "#071518", padding: "clamp(60px, 10vh, 120px) clamp(20px, 5vw, 80px)", fontFamily: FONT }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: "clamp(40px, 7vh, 80px)" }}>
          <p style={{ fontSize: "clamp(10px, 0.9vw, 13px)", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#8b5cf6", marginBottom: 16 }}>
            Результат
          </p>
          <p style={{ fontSize: "clamp(15px, 1.3vw, 18px)", color: "rgba(255,255,255,0.8)", lineHeight: 1.8, maxWidth: 800 }}>
            ИИ-агенты работают в режиме 24/7 и обрабатывают 400+ входящих запросов в сутки без участия команды. Время ответа на обращения клиентов сократилось с 4 часов до 3 минут. Команда экономит 80% времени на рутинных задачах и фокусируется на стратегических вопросах. Ежемесячная экономия на операционных расходах составила 180 000 ₽.
          </p>
        </div>
        <div style={{ textAlign: "center" as const }}>
          <h2 style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: 400, fontSize: "clamp(28px, 3vw, 56px)", color: "#fff", letterSpacing: "-0.035em", marginBottom: 16 }}>
            Хотите такой же результат?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(14px, 1.3vw, 20px)", marginBottom: 40 }}>
            Оставьте заявку — разберём ваш бизнес и предложим план роста
          </p>
          <Link href="/form" className="case-cta-btn" style={{ display: "inline-block", padding: "16px 48px", background: "#8b5cf6", borderRadius: 12, color: "#071518", fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: 16, fontWeight: 500, textDecoration: "none", letterSpacing: "-0.02em", transition: "box-shadow 0.3s ease, transform 0.2s ease" }}>
            Получить такой же результат →
          </Link>
        </div>
      </div>
    </section>
    <style>{`
      .case-cta-btn:hover {
        box-shadow: 0 0 0 2px rgba(139,92,246,0.4), 0 0 30px rgba(139,92,246,0.5), 0 10px 40px rgba(139,92,246,0.3);
        transform: translateY(-2px);
      }
    `}</style>
    </>
  );
}
