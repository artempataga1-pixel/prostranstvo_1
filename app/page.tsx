// Figma node: 2044:7 "Титульник 3" — file z3AxyWDY3tHo7PYT1vRUF4
// Design base: 1920 × 1080 px
import InfinityAnimation from "./components/InfinityAnimation";
import FloatingShapes from "./components/FloatingShapes";
import ShaderBackground from "./components/ShaderBackground";
import { FadeIn } from "./components/FadeIn";
import CountUp from "./components/CountUp";
import { GlowCard } from "./components/GlowCard";
import Cube3D from "./components/Cube3D";
import NeuralNet3D from "./components/NeuralNet3D";
import CRM3D from "./components/CRM3D";
import Warehouse3D from "./components/Warehouse3D";
import OrbitalCasesTimeline from "./components/OrbitalCasesTimeline";

const BG = "/bg.png";
const INFINITY_IMG = "/infinity.png";
const WAREHOUSE_PLAN_IMG = "/warehouse-plan.jpg";

const WAREHOUSE_STEPS = [
  "Формирование плана помещения",
  "Распределение товара по АБС в секции хранения",
  "Набор и обучение команды",
  "Формирование и оптимизация отчётности товарной и финансовой",
  "Управление командой и вывод склада на самоокупаемость",
];

// Figma node: 2040:446 "Преимущества" — file MOHJ9F1OX9kaB0rKsCZm7i
const WHY_US_ITEMS = [
  {
    title: "Комплексная команда специалистов",
    description: "За стоимость одного менеджера вы получаете аналитика, менеджера, дизайнера и операционного специалиста",
  },
  {
    title: "Фокус на результате",
    description: "Мы работаем над тем, чтобы увеличить и оборот, но и чистую прибыль. Оптимизируем себестоимость, логистику, рекламу и конверсию",
  },
  {
    title: "Практический подход",
    description: "Тестируем гипотезы, контролируем процесс и масштабируем успешные решения",
  },
  {
    title: "Быстрое нахождение точек роста",
    description: "Помогаем выявить возможности для увеличения прибыли — в цене, карточке товара, рекламе или закупке",
  },
  {
    title: "Партнерский подход",
    description: "Мы партнёры, которые заинтересованы в вашем успехе. Управляем процессами, задачами и командой, чтобы достичь поставленных целей",
  },
  {
    title: "Экономия ресурсов",
    description: "Каждая гипотеза проверяется, чтобы бюджет работал эффективно",
  },
];

// Figma node: 2040:470 "О компании" — file MOHJ9F1OX9kaB0rKsCZm7i
// Design base: 1920 × 1080 px
const TIMELINE_ITEMS = [
  {
    title: "Работаем с гипотезами\nи метриками воронки",
    note: "CTR, CR, позиции, выручка, маржа",
  },
  {
    title: "Тестируем контент\nи рекламные стратегии",
  },
  {
    title: "Помогаем организовать\nработу команды и достичь\nфинансовых результатов",
  },
];

const sectionStyle = {
  position: "relative" as const,
  width: "100%",
  minHeight: "100svh",
  overflow: "hidden",
};

function HeroSection() {
  return (
    <section
      style={{
        ...sectionStyle,
        minHeight: "max(100svh, 760px)",
      }}
    >
      {/* Background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        src={BG}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
        }}
      />

      {/* Title: left 38px, top 60px, 280px font, tracking -9.8px */}
      <div
        style={{
          position: "absolute",
          left: "clamp(18px, 1.98vw, 38px)",
          top: "clamp(24px, 5.56vh, 60px)",
          maxWidth: "calc(100vw - 36px)",
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 400,
          fontSize: "clamp(54px, 14.583vw, 280px)",
          lineHeight: 0.8,
          letterSpacing: "clamp(-9.8px, -0.51vw, -2.5px)",
          color: "#ffffff",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <span>PRO</span>
        <span>странство</span>
      </div>

      {/* Sphere — static SVG from Figma */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        src="/sphere.svg"
        style={{
          position: "absolute",
          left: "50%",
          top: "50vh",
          transform: "translateX(-50%)",
          width: "max(98.6vw, 175.3vh)",
          height: "max(98.6vw, 175.3vh)",
          pointerEvents: "none",
        }}
      />

      {/* WebGL shader — teal nebula lines, screen-blended over bg.png */}
      <ShaderBackground />

      {/* Floating pill shapes — падают сверху, плавают вверх-вниз */}
      <FloatingShapes />

      {/* Backdrop blur — плавное появление сверху через mask, тянется до конца секции */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "clamp(430px, 62.59vh, 676px)",
          bottom: 0,
          width: "100%",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          background: "rgba(125, 211, 208, 0.05)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 35%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 35%)",
        }}
      />

      {/* Subtitle: centered, top 364px, width 1132px, 65px font */}
      <p
        style={{
          position: "absolute",
          left: "50%",
          top: "clamp(214px, 33.7vh, 364px)",
          transform: "translateX(-50%)",
          width: "min(1132px, calc(100vw - 48px))",
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 400,
          fontSize: "clamp(28px, 3.385vw, 65px)",
          lineHeight: 1,
          letterSpacing: "clamp(-2.275px, -0.12vw, -0.8px)",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        Превращаем хаос на маркетплейсах
        <br />
        в управляемую модель роста
      </p>

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "clamp(614px, 82.78vh, 894px)",
          transform: "translateX(-50%)",
          width: "clamp(180px, 13.073vw, 251px)",
          height: "clamp(92px, 11.852vh, 128px)",
        }}
      >
        <InfinityAnimation />
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  const cardStyle: React.CSSProperties = {
    flex: "1 0 0",
    height: "clamp(160px, 29.54vh, 319px)",
    borderRadius: "clamp(14px, 1.5625vw, 30px)",
    background: "rgba(18, 18, 18, 0.3)",
    padding: "clamp(14px, 2.22vh, 24px) clamp(14px, 1.25vw, 24px) clamp(18px, 2.96vh, 32px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minWidth: 0,
  };

  const rows = [WHY_US_ITEMS.slice(0, 3), WHY_US_ITEMS.slice(3)];

  return (
    <section
      style={{
        ...sectionStyle,
        minHeight: "max(100svh, 720px)",
        background: "linear-gradient(202.23deg, #0D1F1F 15.55%, #388585 99.34%)",
      }}
    >
      {/* Heading — Figma: top:60 left:60, 100px, width:993px */}
      <h2
        style={{
          position: "absolute",
          top: "clamp(30px, 5.56vh, 60px)",
          left: "3.125vw",
          width: "min(51.7vw, 993px)",
          fontFamily: font,
          fontWeight: 400,
          fontSize: "clamp(36px, 5.208vw, 100px)",
          lineHeight: 0.9,
          letterSpacing: "-0.035em",
          color: "#ffffff",
          margin: 0,
        }}
      >
        Почему выбирают нас
      </h2>

      {/* Infinity icon — animated */}
      <div style={{ position: "absolute", right: "3.125vw", top: "clamp(30px, 5.56vh, 60px)", width: "clamp(60px, 6.09vw, 117px)", height: "clamp(31px, 3.125vw, 60px)", pointerEvents: "none" }}>
        <InfinityAnimation />
      </div>

      {/* Row 1 — Figma: top:374, left:72, gap:12 */}
      <div
        style={{
          position: "absolute",
          top: "clamp(220px, 34.63vh, 374px)",
          left: "3.75vw",
          width: "calc(100% - 7.5vw)",
          maxWidth: "1788px",
          display: "flex",
          gap: "clamp(6px, 0.625vw, 12px)",
        }}
      >
        {rows[0].map((item) => (
          <GlowCard key={item.title} style={cardStyle}>
            <p
              style={{
                fontFamily: font,
                fontWeight: 400,
                fontSize: "clamp(16px, 2.344vw, 45px)",
                lineHeight: 1,
                letterSpacing: "-0.035em",
                color: "#ffffff",
                margin: 0,
              }}
            >
              {item.title}
            </p>
            <p
              style={{
                fontFamily: font,
                fontWeight: 400,
                fontSize: "clamp(10px, 1.25vw, 24px)",
                lineHeight: 1,
                letterSpacing: "-0.035em",
                color: "#ffffff",
                opacity: 0.3,
                margin: 0,
              }}
            >
              {item.description}
            </p>
          </GlowCard>
        ))}
      </div>

      {/* Row 2 — Figma: top:705, left:72, gap:12 */}
      <div
        style={{
          position: "absolute",
          top: "clamp(420px, 65.28vh, 705px)",
          left: "3.75vw",
          width: "calc(100% - 7.5vw)",
          maxWidth: "1788px",
          display: "flex",
          gap: "clamp(6px, 0.625vw, 12px)",
        }}
      >
        {rows[1].map((item) => (
          <GlowCard key={item.title} style={cardStyle}>
            <p
              style={{
                fontFamily: font,
                fontWeight: 400,
                fontSize: "clamp(16px, 2.344vw, 45px)",
                lineHeight: 1,
                letterSpacing: "-0.035em",
                color: "#ffffff",
                margin: 0,
              }}
            >
              {item.title}
            </p>
            <p
              style={{
                fontFamily: font,
                fontWeight: 400,
                fontSize: "clamp(10px, 1.25vw, 24px)",
                lineHeight: 1,
                letterSpacing: "-0.035em",
                color: "#ffffff",
                opacity: 0.3,
                margin: 0,
              }}
            >
              {item.description}
            </p>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}

function GrowthModelSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  return (
    <section
      style={{
        ...sectionStyle,
        minHeight: "max(100svh, 840px)",
        backgroundColor: "#0ABAB5",
      }}
    >
      {/* Teal sphere — Figma: Ellipse 3, 2756×2756 at left:-395 top:-1055 */}
      <div
        style={{
          position: "absolute",
          width: "143.5vw",
          height: "143.5vw",
          left: "-20.6vw",
          top: "-97.7vh",
          background: "#0ABAB5",
          borderRadius: "50%",
          filter: "blur(50px)",
          boxShadow: "inset 0px 9px 250px 10px #ffffff",
          pointerEvents: "none",
        }}
      />

      {/* Stripe overlay — Figma: 45px-wide vertical strips */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0) 45px)",
          pointerEvents: "none",
        }}
      />

      {/* Label — Figma: top:60 left:60, 45px */}
      <p
        style={{
          position: "absolute",
          top: "clamp(30px, 5.56vh, 60px)",
          left: "3.125vw",
          fontFamily: font,
          fontWeight: 400,
          fontSize: "clamp(16px, 2.344vw, 45px)",
          lineHeight: 1,
          letterSpacing: "-0.035em",
          color: "#ffffff",
          margin: 0,
        }}
      >
        PROстранство — это
      </p>

      {/* Heading — Figma: top:153 left:60, 100px, width:1560 */}
      <h2
        style={{
          position: "absolute",
          top: "clamp(90px, 14.17vh, 153px)",
          left: "3.125vw",
          width: "min(81.25vw, 1560px)",
          fontFamily: font,
          fontWeight: 400,
          fontSize: "clamp(36px, 5.208vw, 100px)",
          lineHeight: 0.9,
          letterSpacing: "-0.035em",
          color: "#ffffff",
          margin: 0,
        }}
      >
        Операционно-аналитическая компания для e-commerce бизнеса
      </h2>

      {/* Left body — Figma: top:434 left:60, 45px, width:825 */}
      <p
        style={{
          position: "absolute",
          top: "clamp(260px, 40.19vh, 434px)",
          left: "3.125vw",
          width: "min(42.97vw, 825px)",
          fontFamily: font,
          fontWeight: 400,
          fontSize: "clamp(16px, 2.344vw, 45px)",
          lineHeight: 1,
          letterSpacing: "-0.035em",
          color: "#ffffff",
          margin: 0,
        }}
      >
        Мы помогаем выстроить управляемый рост на маркетплейсах и за их пределами
      </p>

      {/* Right body — Figma: top:434 left:calc(50%+15px), 45px, width:825 */}
      <p
        style={{
          position: "absolute",
          top: "clamp(260px, 40.19vh, 434px)",
          left: "calc(50% + 0.78vw)",
          width: "min(42.97vw, 825px)",
          fontFamily: font,
          fontWeight: 400,
          fontSize: "clamp(16px, 2.344vw, 45px)",
          lineHeight: 1,
          letterSpacing: "-0.035em",
          color: "#ffffff",
          margin: 0,
        }}
      >
        Наша задача — не просто дать рекомендации, а сформировать модель роста, где каждое действие основано на данных и тестировании
      </p>

      {/* Timeline card — Figma: top:736 left:60, 1800×284, borderRadius:30 */}
      <div
        style={{
          position: "absolute",
          top: "clamp(500px, 68.15vh, 736px)",
          left: "3.125vw",
          width: "calc(100% - 6.25vw)",
          maxWidth: "1800px",
          height: "clamp(180px, 26.3vh, 284px)",
          background: "#ffffff",
          borderRadius: "clamp(16px, 1.5625vw, 30px)",
          paddingTop: "clamp(34px, 6.3vh, 68px)",
          paddingBottom: "clamp(24px, 4.63vh, 50px)",
          paddingLeft: "clamp(28px, 2.8125vw, 54px)",
          paddingRight: "clamp(28px, 2.8125vw, 54px)",
          boxSizing: "border-box",
        }}
      >
        <div style={{ position: "relative", height: "100%" }}>
          {/* Line segment 1: dot 1 → dot 2 */}
          <div
            style={{
              position: "absolute",
              left: 0,
              width: "50%",
              top: "clamp(5px, 0.83vh, 9px)",
              height: "1px",
              background: "rgba(10,186,181,0.18)",
              overflow: "visible",
            }}
          >
            {/* Traveling beam 1 */}
            <div style={{
              position: "absolute",
              top: "-1px",
              left: 0,
              width: "100%",
              height: "3px",
              background: "linear-gradient(to right, rgba(10,186,181,0) 0%, #0ABAB5 50%, #c0faf8 85%, #ffffff 100%)",
              filter: "drop-shadow(0 0 4px rgba(10,186,181,0.9)) drop-shadow(0 0 10px rgba(10,186,181,0.5))",
              transformOrigin: "left center",
              animationName: "timeline-beam-1",
              animationDuration: "4s",
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
            }} />
          </div>
          {/* Line segment 2: dot 2 → dot 3 */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              right: 0,
              top: "clamp(5px, 0.83vh, 9px)",
              height: "1px",
              background: "rgba(10,186,181,0.18)",
              overflow: "visible",
            }}
          >
            {/* Traveling beam 2 */}
            <div style={{
              position: "absolute",
              top: "-1px",
              left: 0,
              width: "100%",
              height: "3px",
              background: "linear-gradient(to right, rgba(10,186,181,0) 0%, #0ABAB5 50%, #c0faf8 85%, #ffffff 100%)",
              filter: "drop-shadow(0 0 4px rgba(10,186,181,0.9)) drop-shadow(0 0 10px rgba(10,186,181,0.5))",
              transformOrigin: "left center",
              animationName: "timeline-beam-2",
              animationDuration: "4s",
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
            }} />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              height: "100%",
            }}
          >
            {TIMELINE_ITEMS.map((item, index) => (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems:
                    index === 0
                      ? "flex-start"
                      : index === 1
                      ? "center"
                      : "flex-end",
                }}
              >
                {/* Circle — Figma: 18×18, border 5px solid #0ABAB5 */}
                <div
                  style={{
                    width: "clamp(10px, 0.9375vw, 18px)",
                    height: "clamp(10px, 0.9375vw, 18px)",
                    borderRadius: "50%",
                    border: "clamp(3px, 0.26vw, 5px) solid #0ABAB5",
                    background: "#ffffff",
                    flexShrink: 0,
                    position: "relative",
                    zIndex: 1,
                    marginBottom: "clamp(12px, 2.31vh, 25px)",
                    animationName: index === 0 ? "timeline-dot-1" : index === 1 ? "timeline-dot-2" : "timeline-dot-3",
                    animationDuration: "4s",
                    animationTimingFunction: "ease-out",
                    animationIterationCount: "infinite",
                  }}
                />

                {/* Title — Figma: 35px, lineHeight 1.2, color #0D1F1F */}
                <p
                  style={{
                    fontFamily: font,
                    fontWeight: 400,
                    fontSize: "clamp(13px, 1.823vw, 35px)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.035em",
                    color: "#0D1F1F",
                    whiteSpace: "pre-line",
                    textAlign:
                      index === 0 ? "left" : index === 1 ? "center" : "right",
                    margin:
                      index === 0 ? "0" : index === 1 ? "0 auto" : "0 0 0 auto",
                  }}
                >
                  {item.title}
                </p>

                {/* Note — Figma: 24px, opacity 0.3, color #0D1F1F */}
                {item.note ? (
                  <p
                    style={{
                      marginTop: "clamp(4px, 0.65vh, 7px)",
                      fontFamily: font,
                      fontWeight: 400,
                      fontSize: "clamp(10px, 1.25vw, 24px)",
                      lineHeight: 1.2,
                      letterSpacing: "-0.035em",
                      color: "#0D1F1F",
                      opacity: 0.3,
                    }}
                  >
                    {item.note}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Figma node: 2040:574 "Кейс — Джинсы" — file MOHJ9F1OX9kaB0rKsCZm7i
const GRAPH_IMG = "https://www.figma.com/api/mcp/asset/9326a26a-a5a0-40bf-9cab-e8fb839e703d";

// Figma node: 2040:613 "Кейс — скриншот" — file MOHJ9F1OX9kaB0rKsCZm7i
const OZON_SCREENSHOT_IMG = "https://www.figma.com/api/mcp/asset/50c200b0-8348-43db-9c46-710f38784b3b";
const OZON_LOGO_IMG = "https://www.figma.com/api/mcp/asset/af975cc0-c858-4e51-ad09-8e301c5bbec8";

function CaseRevenueSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  return (
    <section
      style={{
        ...sectionStyle,
        minHeight: "max(100svh, 760px)",
        backgroundColor: "#0d1f1f",
      }}
    >
      {/* Badge "КЕЙСЫ • ДЖИНСЫ" — Figma: left:1594, top:60 */}
      <div
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
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(10px, 1.302vw, 25px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", textTransform: "uppercase", whiteSpace: "nowrap", margin: 0 }}>
          {"кейсы  •  Джинсы"}
        </p>
      </div>

      {/* Heading — Figma: left:60, top:61, font:100px, width:1044 */}
      <h2
        style={{
          position: "absolute",
          left: "3.125vw",
          top: "clamp(30px, 5.65vh, 61px)",
          width: "min(54.4vw, 1044px)",
          fontFamily: font,
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

      {/* Description — Figma: ~top:295 (after heading+gap:48), font:35, opacity:0.5 */}
      <p
        style={{
          position: "absolute",
          left: "3.125vw",
          top: "clamp(190px, 27.3vh, 295px)",
          width: "min(51.3vw, 985px)",
          fontFamily: font,
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

      {/* Graph — Figma: left:-2130, top:694, 4050×386 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        src={GRAPH_IMG}
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

      {/* Vertical line B — from bottom of Точка Б card to dot B */}
      <div
        style={{
          position: "absolute",
          left: "calc(92.19vw + clamp(4px, 0.47vw, 9px))",
          top: "clamp(420px, 59.81vh, 646px)",
          width: "1px",
          height: "clamp(50px, 8.98vh, 97px)",
          background: "#0ABAB5",
          zIndex: 2,
        }}
      />

      {/* Vertical line A — from bottom of Точка А card to dot A */}
      <div
        style={{
          position: "absolute",
          left: "calc(3.75vw + clamp(4px, 0.47vw, 9px))",
          top: "clamp(540px, 82.5vh, 891px)",
          width: "1px",
          height: "clamp(40px, 9.54vh, 103px)",
          background: "#0ABAB5",
          zIndex: 2,
        }}
      />

      {/* Dot A — Figma: left:72, top:994, size:18 */}
      <div
        style={{
          position: "absolute",
          left: "3.75vw",
          top: "clamp(600px, 92.04vh, 994px)",
          width: "clamp(8px, 0.9375vw, 18px)",
          height: "clamp(8px, 0.9375vw, 18px)",
          borderRadius: "50%",
          border: "clamp(2px, 0.21vw, 4px) solid #0ABAB5",
          background: "#0d1f1f",
          zIndex: 3,
        }}
      />

      {/* Dot B — Figma: left:1770, top:731, size:18 */}
      <div
        style={{
          position: "absolute",
          left: "92.19vw",
          top: "clamp(470px, 67.69vh, 731px)",
          width: "clamp(8px, 0.9375vw, 18px)",
          height: "clamp(8px, 0.9375vw, 18px)",
          borderRadius: "50%",
          border: "clamp(2px, 0.21vw, 4px) solid #0ABAB5",
          background: "#0d1f1f",
          zIndex: 3,
        }}
      />

      {/* Точка Б card — Figma: left:1098, top:356, width:~762, height:290 */}
      <GlowCard
        white
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
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(9px, 1.25vw, 24px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", opacity: 0.3, margin: 0, whiteSpace: "pre" }}>
          {"20.03  •  Точка Б"}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(8px, 2.22vh, 24px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(14px, 2.344vw, 45px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "nowrap" }}>
              <CountUp value={1.2} decimals={1} suffix=" млн" duration={2200} /> рублей выручки
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "4px", padding: "clamp(5px, 1.3vh, 14px) 8px", borderRadius: "300px", background: "rgba(255,255,255,0.1)", border: "2px solid #ffffff", backdropFilter: "blur(50px)", flexShrink: 0 }}>
              <svg width="12" height="9" viewBox="0 0 14 11" fill="none"><path d="M7 0L13.9282 11H0.0717969L7 0Z" fill="#0ABAB5"/></svg>
              <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(9px, 1.25vw, 24px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#0ab8b3", margin: 0, whiteSpace: "nowrap" }}><CountUp value={200} suffix="%" duration={2200} /></p>
            </div>
          </div>
          <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(14px, 2.344vw, 45px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "nowrap" }}>
            Топ-7 категории
          </p>
        </div>
      </GlowCard>

      {/* Точка А card — Figma: left:72, top:572, width:~400, height:319 */}
      <GlowCard
        white
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
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(9px, 1.25vw, 24px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", opacity: 0.3, margin: 0, whiteSpace: "pre" }}>
          {"21.02  •  Точка А"}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(8px, 2.22vh, 24px)" }}>
          {["Нестабильные продажи", "Низкая конверсия каточки", "Нет работы с гипотезами"].map((line) => (
            <p key={line} style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(12px, 1.667vw, 32px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "nowrap" }}>
              {line}
            </p>
          ))}
        </div>
      </GlowCard>
    </section>
  );
}

// Figma node: 2040:2 "Кейсы" — file MOHJ9F1OX9kaB0rKsCZm7i
function CasesSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  return (
    <section
      style={{
        ...sectionStyle,
        minHeight: "max(100svh, 760px)",
        background: "linear-gradient(202.03deg, #108885 6.79%, #0ABAB5 100%)",
      }}
    >
      {/* Sphere outer — centered, flipped Y, clipped by section overflow:hidden */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          width: "max(98.6vw, 175.3vh)",
          height: "max(98.6vw, 175.3vh)",
          transform: "translateX(-50%) translateY(-52%) scaleY(-1)",
          pointerEvents: "none",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1893 1893"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          overflow="visible"
        >
          <g filter="url(#cs_f0)">
            <circle cx="946.5" cy="946.5" r="946.5" fill="url(#cs_g0)" />
          </g>
          <defs>
            <filter id="cs_f0" x="0" y="0" width="1893" height="1902"
              filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="bg" />
              <feBlend mode="normal" in="SourceGraphic" in2="bg" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="ha" />
              <feMorphology radius="40" operator="erode" in="SourceAlpha" result="shadow" />
              <feOffset dy="9" />
              <feGaussianBlur stdDeviation="125" />
              <feComposite in2="ha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
              <feBlend mode="normal" in2="shape" result="out" />
            </filter>
            <linearGradient id="cs_g0" x1="946.5" y1="0" x2="946.5" y2="1893"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#0ABAB5" />
              <stop offset="1" stopColor="#0A817D" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Sphere inner — centered, flipped Y */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          width: "max(74.58vw, 132.6vh)",
          height: "max(74.58vw, 132.6vh)",
          transform: "translateX(-50%) translateY(-52%) scaleY(-1)",
          pointerEvents: "none",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1432 1432"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          overflow="visible"
        >
          <g filter="url(#cs_f1)">
            <circle cx="716" cy="716" r="716" fill="url(#cs_g1)" />
          </g>
          <defs>
            <filter id="cs_f1" x="0" y="0" width="1432" height="1432"
              filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="bg" />
              <feBlend mode="normal" in="SourceGraphic" in2="bg" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="ha" />
              <feMorphology radius="10" operator="erode" in="SourceAlpha" result="shadow" />
              <feOffset dy="7" />
              <feGaussianBlur stdDeviation="100" />
              <feComposite in2="ha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
              <feBlend mode="normal" in2="shape" result="out" />
            </filter>
            <linearGradient id="cs_g1" x1="716" y1="0" x2="716" y2="1432"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#0ABAB5" />
              <stop offset="1" stopColor="#0C7C79" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* "Кейсы" + Infinity — pinned to bottom */}
      <div
        style={{
          position: "absolute",
          bottom: "clamp(30px, 5.56vh, 60px)",
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          paddingLeft: "clamp(16px, 1.67vw, 32px)",
          paddingRight: "clamp(18px, 1.98vw, 38px)",
        }}
      >
        <p
          style={{
            fontFamily: font,
            fontWeight: 400,
            fontSize: "clamp(60px, 14vw, 280px)",
            lineHeight: 0.8,
            letterSpacing: "clamp(-2.4px, -0.56vw, -11.2px)",
            color: "#ffffff",
            whiteSpace: "nowrap",
            margin: 0,
          }}
        >
          Кейсы
        </p>

        <div style={{ position: "relative", width: "clamp(60px, 8.5vw, 165px)", height: "clamp(31px, 4.35vw, 84px)", flexShrink: 0, marginBottom: "clamp(4px, 0.5vh, 8px)", pointerEvents: "none" }}>
          <InfinityAnimation />
        </div>
      </div>
    </section>
  );
}

// Figma node: 2040:613 "Кейс — скриншот Ozon" — file MOHJ9F1OX9kaB0rKsCZm7i
function CaseScreenshotSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  return (
    <section
      style={{
        ...sectionStyle,
        minHeight: "max(100svh, 760px)",
        backgroundColor: "#0d1f1f",
      }}
    >
      {/* Infinity logo — animated */}
      <div style={{ position: "absolute", left: "2.76vw", top: "5vh", width: "clamp(50px, 6.09vw, 117px)", height: "clamp(26px, 5.56vh, 60px)", pointerEvents: "none" }}>
        <InfinityAnimation />
      </div>

      {/* Badge "КЕЙСЫ • ДЖИНСЫ" — Figma: left:1594, top:60 */}
      <div
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
        <p
          style={{
            fontFamily: font,
            fontWeight: 400,
            fontSize: "clamp(10px, 1.302vw, 25px)",
            lineHeight: 1,
            letterSpacing: "-0.035em",
            color: "#ffffff",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            margin: 0,
          }}
        >
          {"кейсы  •  Джинсы"}
        </p>
      </div>

      {/* Screenshot card — Figma: left:139, top:178, width:1642, height:718, border:15 rgba(254,254,254,0.3) */}
      <div
        style={{
          position: "absolute",
          left: "7.24vw",
          top: "clamp(100px, 16.48vh, 178px)",
          width: "85.52vw",
          height: "clamp(380px, 66.48vh, 718px)",
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
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Caption — Figma: centered, top:941, gap:23 */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "clamp(560px, 87.13vh, 941px)",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: "clamp(10px, 1.2vw, 23px)",
          whiteSpace: "nowrap",
        }}
      >
        <div
          style={{
            width: "clamp(28px, 3.33vw, 64px)",
            height: "clamp(28px, 3.33vw, 64px)",
            borderRadius: "50%",
            background: "#ffffff",
            overflow: "hidden",
            flexShrink: 0,
            position: "relative",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src={OZON_LOGO_IMG}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              pointerEvents: "none",
            }}
          />
        </div>
        <p
          style={{
            fontFamily: font,
            fontWeight: 400,
            fontSize: "clamp(14px, 1.823vw, 35px)",
            lineHeight: 1.2,
            letterSpacing: "-0.035em",
            color: "#ffffff",
            opacity: 0.5,
            margin: 0,
            whiteSpace: "nowrap",
          }}
        >
          Скриншот личного кабинета Ozon
        </p>
      </div>
    </section>
  );
}

// Figma node: 2040:72 "Услуги" — file MOHJ9F1OX9kaB0rKsCZm7i
const SERVICES_VECTOR1_IMG = "https://www.figma.com/api/mcp/asset/6ad25420-8670-447f-9420-a58549e4c918";
const SERVICES_VECTOR2_IMG = "https://www.figma.com/api/mcp/asset/02e13bc8-0f9e-43a4-aaba-0f128b29c97d";
const SERVICES_INFINITY_IMG = "https://www.figma.com/api/mcp/asset/cc0ee52d-c431-488c-b750-9108e21bffab";

// Figma node: 2040:188 "Услуги — управление кабинетами" — file MOHJ9F1OX9kaB0rKsCZm7i
const MGMT_ELLIPSE_IMG = "https://www.figma.com/api/mcp/asset/7652132e-b0b1-43bb-9524-6b8a13555aa6";
const MGMT_GROUP_IMG = "https://www.figma.com/api/mcp/asset/52e5d948-47b7-4b7b-ae44-489196403cc7";
const MGMT_AVATAR1_IMG = "https://www.figma.com/api/mcp/asset/5b0e0fcc-c881-4788-bf8b-36f7c4891c8b";
const MGMT_AVATAR2_IMG = "https://www.figma.com/api/mcp/asset/9bb11d47-df05-4789-aef7-0e67c8ed9451";
const MGMT_AVATAR3_IMG = "https://www.figma.com/api/mcp/asset/5f84ccdc-4bd8-4520-9137-073461a18ff0";

// Figma node: 2040:389 "Услуги — Подбор и развитие команды" — file MOHJ9F1OX9kaB0rKsCZm7i
const TEAM_GRADIENT_IMG = "https://www.figma.com/api/mcp/asset/cdc72523-d2d0-4b52-8a30-8724c84ab820";
const TEAM_RADAR_IMG = "https://www.figma.com/api/mcp/asset/c8842302-1963-466a-937f-a2087082e2f6";
const TEAM_DOT1_IMG = "https://www.figma.com/api/mcp/asset/af0d8b0f-b66e-4f93-bcf0-4407ab11d139";
const TEAM_DOT2_IMG = "https://www.figma.com/api/mcp/asset/768731b5-1dea-449b-a15b-5dced574843b";

// Figma node: 2040:411 "Услуги — Постоянная работа с командой" — file MOHJ9F1OX9kaB0rKsCZm7i
const HRTEAM_GRAPH_IMG = "https://www.figma.com/api/mcp/asset/f4b5ffab-4de6-44aa-aec7-1f33cf4fab81";
const HRTEAM_DOTLINE_IMG = "https://www.figma.com/api/mcp/asset/cc9a37a3-cfb7-41f9-bd57-8d9d8d7e2662";
const HRTEAM_DOTLINE1_IMG = "https://www.figma.com/api/mcp/asset/8ae30e94-165f-4971-8e35-9033f4372073";
const HRTEAM_DOTLINE2_IMG = "https://www.figma.com/api/mcp/asset/f2b427c7-c352-4594-8d9a-f8d1f96b8fd3";

// Figma node: 2040:255 "Услуги — Внешние каналы продаж" — file MOHJ9F1OX9kaB0rKsCZm7i
const EXT_ELLIPSE_IMG = "https://www.figma.com/api/mcp/asset/7728063a-3954-470a-b0b9-66db9aca5b4f";
const EXT_GROUP_IMG = "https://www.figma.com/api/mcp/asset/3b520508-80a1-4de8-aff6-76465a45c95e";
const EXT_STRIP1_IMG = "https://www.figma.com/api/mcp/asset/edd7a7e0-fcb4-48a0-986c-61dc5c429a91";
const EXT_STRIP2_IMG = "https://www.figma.com/api/mcp/asset/477dc550-6dd7-46bf-a1d0-92c2ddc0541f";

// Figma node: 2040:648 "Услуги — Внедрение AI-агентов" — file MOHJ9F1OX9kaB0rKsCZm7i
const AI_LOGO_IMG = "https://www.figma.com/api/mcp/asset/56bfe81d-299f-45ca-9cbd-f0903a0a2040";
const AI_LINE_DOWN_IMG = "https://www.figma.com/api/mcp/asset/2d583f7e-c8c4-4241-abfb-dc6208f281b5";
const AI_LINE_UP_IMG = "https://www.figma.com/api/mcp/asset/893f42ae-988f-4434-9c96-52269a93bf4c";

// Figma node: 2040:162 "Услуги — аудит кабинета" — no image assets

// Figma node: 2040:326 "Услуги — Подбор новинок" — file MOHJ9F1OX9kaB0rKsCZm7i
const PODBOR_COVER_INFINITY_IMG = "https://www.figma.com/api/mcp/asset/e0107b1d-a74e-4ea4-bff6-3432fa0e3abb";
const PODBOR_ELLIPSE_IMG = "https://www.figma.com/api/mcp/asset/e2944961-482a-41d9-959b-7dd8f7dc8250";
const PODBOR_LINE1_IMG = "https://www.figma.com/api/mcp/asset/7dd9d240-1cce-4c72-a956-5bf4e8f26ad2";
const PODBOR_LINE2_IMG = "https://www.figma.com/api/mcp/asset/9c18707f-8012-4be2-99c4-c5fba1ab546c";
const PODBOR_PRO_IMG = "https://www.figma.com/api/mcp/asset/202978aa-1cac-489f-80ed-9ccc0eee9f73";

// Figma node: 2040:565 "Кейс — Кресла ВБ" — file MOHJ9F1OX9kaB0rKsCZm7i
const CHAIRS_WB_SCREENSHOT_IMG = "https://www.figma.com/api/mcp/asset/e5958324-1c72-492a-bf49-155563992769";
const CHAIRS_WB_LOGO_IMG = "https://www.figma.com/api/mcp/asset/5fbe49b6-940d-4297-b0bf-3bb4b0a606c7";
const CHAIRS_WB_INFINITY_IMG = "https://www.figma.com/api/mcp/asset/5dbb83d0-d676-4471-a6c3-75481f7492b5";

// Figma node: 2040:153 "Кейс — Кресла Ozon" — file MOHJ9F1OX9kaB0rKsCZm7i
const CHAIRS_SCREENSHOT_IMG = "https://www.figma.com/api/mcp/asset/d9ed9f40-f053-4246-988d-885e53715fe2";
const CHAIRS_OZON_LOGO_IMG = "https://www.figma.com/api/mcp/asset/2310a995-1f11-4ca3-a5a6-0b692204a2d3";
const CHAIRS_INFINITY_IMG = "https://www.figma.com/api/mcp/asset/f048dc9a-ce9a-4dbb-8ac8-bf47851c080d";

// Figma node: 2040:531 "Кейс — Кресла" — file MOHJ9F1OX9kaB0rKsCZm7i
const CHAIRS_GRAPH_IMG = "https://www.figma.com/api/mcp/asset/61e90a6b-b1a4-425b-b78e-7dece2a961d8";
const CHAIRS_DOT_LINE_L = "https://www.figma.com/api/mcp/asset/40eb90f2-617f-4d31-923a-b7e6df6fc5ce";
const CHAIRS_DOT_LINE_R = "https://www.figma.com/api/mcp/asset/830806e9-49c5-4517-ac24-0c1894b6b7f3";
const CHAIRS_ARROW_IMG = "https://www.figma.com/api/mcp/asset/7a728c8d-863d-457d-9645-e9210fff6270";

// Figma node: 2040:144 "Кейс — сезонный товар, скриншот" — file MOHJ9F1OX9kaB0rKsCZm7i
const SEASONAL_SCREENSHOT_IMG = "https://www.figma.com/api/mcp/asset/b126f4e2-0480-4875-a957-4334428a3179";
const SEASONAL_OZON_LOGO_IMG = "https://www.figma.com/api/mcp/asset/4c91ee0c-3559-46be-8890-030f4f6d4af9";
const SEASONAL_INFINITY_IMG = "https://www.figma.com/api/mcp/asset/3649ab41-c00e-4d35-be51-1f6e615153a8";

// ── КЕЙС: 1С УНФ + ТСД ─────────────────────────────────────────────────────

function Case1CIntroSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";

  const stats = [
    { value: <CountUp value={13} duration={2000} />, label: "этапов внедрения" },
    { value: "1С", label: "УНФ + ТСД система" },
    { value: <CountUp value={100} suffix="%" duration={2000} />, label: "цифровизация склада" },
  ];

  return (
    <section style={{ ...sectionStyle, minHeight: "max(100svh, 760px)", backgroundColor: "#0d1f1f" }}>
      <div style={{ position: "absolute", right: "-8vw", top: "10vh", width: "55vw", height: "55vw", background: "radial-gradient(circle, rgba(10,186,181,0.10) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: "-5vw", bottom: "0", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(10,186,181,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />

      {/* Badge */}
      <div style={{ position: "absolute", top: "clamp(30px, 5.56vh, 60px)", right: "3.125vw", display: "flex", alignItems: "center", padding: "clamp(8px, 1.11vh, 12px) clamp(10px, 0.83vw, 16px)", borderRadius: "300px", background: "rgba(10,186,181,0.12)", border: "1px solid rgba(10,186,181,0.3)", backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)" }}>
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(10px, 1.302vw, 25px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#0ABAB5", textTransform: "uppercase", whiteSpace: "nowrap", margin: 0 }}>
          кейсы  •  1С УНФ
        </p>
      </div>

      {/* Title */}
      <h2 style={{ position: "absolute", left: "3.125vw", top: "clamp(30px, 5.65vh, 61px)", width: "min(50vw, 960px)", fontFamily: font, fontWeight: 400, fontSize: "clamp(28px, 4.688vw, 90px)", lineHeight: 0.9, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "pre-line" }}>
        {"Внедрение\n1С УНФ + ТСД\nдля фулфилмента"}
      </h2>

      {/* Description */}
      <p style={{ position: "absolute", left: "3.125vw", top: "clamp(230px, 34vh, 370px)", width: "min(44vw, 840px)", fontFamily: font, fontWeight: 400, fontSize: "clamp(12px, 1.563vw, 30px)", lineHeight: 1.35, letterSpacing: "-0.025em", color: "rgba(255,255,255,0.45)", margin: 0 }}>
        Полный цикл внедрения операционной системы управления складом: от аудита бизнес‑процессов до обучения персонала и месячного сопровождения
      </p>

      {/* 3D Cube — right */}
      <div style={{ position: "absolute", right: "clamp(20px, 3vw, 60px)", top: "50%", transform: "translateY(-50%)", width: "clamp(280px, 43vw, 820px)", height: "clamp(280px, 43vw, 820px)", pointerEvents: "none" }}>
        <Cube3D />
      </div>

      {/* Stats row */}
      <div style={{ position: "absolute", bottom: "clamp(36px, 6.67vh, 72px)", left: "3.125vw", display: "flex", gap: "clamp(24px, 5.21vw, 100px)", alignItems: "flex-end" }}>
        {stats.map(({ value, label }) => (
          <div key={label}>
            <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(28px, 4.167vw, 80px)", lineHeight: 1, letterSpacing: "-0.04em", color: "#0ABAB5", margin: "0 0 clamp(4px, 0.56vh, 6px) 0" }}>
              {value}
            </p>
            <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(10px, 1.04vw, 20px)", lineHeight: 1.2, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.4)", margin: 0 }}>
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Case1CStepsSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";

  const points = [
    { num: "01", title: "Аудит и регламент", desc: "Анализ бизнес-модели, схема движения документов в 1С", color: "#0ABAB5" },
    { num: "02", title: "Развёртывание системы", desc: "База данных, серверы, вся товарная номенклатура", color: "#38bdf8" },
    { num: "03", title: "Настройка и учёт", desc: "ТСД, документооборот, полная оцифровка склада", color: "#38bdf8" },
    { num: "04", title: "Обучение и поддержка", desc: "Регламенты для ролей, месяц технической поддержки", color: "#a78bfa" },
  ];

  return (
    <section style={{ ...sectionStyle, minHeight: "max(100svh, 760px)", backgroundColor: "#071518" }}>
      <div style={{ position: "absolute", right: "-6vw", top: "5vh", width: "55vw", height: "55vw", background: "radial-gradient(circle, rgba(10,186,181,0.09) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: "-5vw", bottom: "0", width: "35vw", height: "35vw", background: "radial-gradient(circle, rgba(10,186,181,0.05) 0%, transparent 65%)", pointerEvents: "none" }} />

      {/* Heading */}
      <div style={{ position: "absolute", left: "3.125vw", top: "clamp(30px, 5.56vh, 60px)", display: "flex", alignItems: "baseline", gap: "clamp(12px, 1.5vw, 28px)" }}>
        <h2 style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(28px, 4.167vw, 80px)", lineHeight: 0.9, letterSpacing: "-0.04em", color: "#ffffff", margin: 0, whiteSpace: "nowrap" }}>
          Как это работает
        </h2>
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(11px, 1.25vw, 24px)", letterSpacing: "-0.02em", color: "rgba(255,255,255,0.3)", margin: 0 }}>
          1С УНФ + ТСД · 4 этапа
        </p>
      </div>

      {/* Left: 4 cards 2×2 */}
      <div style={{ position: "absolute", left: "3.125vw", top: "clamp(100px, 14.7vh, 155px)", bottom: "clamp(20px, 3vh, 36px)", width: "48%", display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "clamp(8px, 1.04vw, 18px)" }}>
        {points.map(({ num, title, desc, color }) => (
          <GlowCard key={num} glowColor="teal" style={{ background: "rgba(255,255,255,0.03)", borderRadius: "clamp(12px, 1.25vw, 24px)", padding: "clamp(16px, 2.22vh, 28px) clamp(16px, 1.46vw, 28px)", display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
            <span className="card-num" style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(28px, 3.125vw, 60px)", lineHeight: 1, letterSpacing: "-0.05em", color, opacity: 0.5 }}>{num}</span>
            <div>
              <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(13px, 1.146vw, 22px)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "#fff", margin: "0 0 clamp(4px,0.56vh,8px)" }}>{title}</p>
              <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(10px, 0.833vw, 16px)", lineHeight: 1.35, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.45)", margin: 0 }}>{desc}</p>
            </div>
          </GlowCard>
        ))}
      </div>

      {/* Right: 3D data-layers SVG */}
      <div style={{ position: "absolute", right: "3.125vw", top: "50%", transform: "translateY(-50%)", width: "clamp(260px, 44vw, 820px)", height: "clamp(260px, 44vw, 820px)" }}>
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
          <defs>
            <filter id="layGlow"><feGaussianBlur stdDeviation="5" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
            <linearGradient id="layTopFace" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#0ABAB5" stopOpacity="0.55" /><stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" /></linearGradient>
            <linearGradient id="layLeftFace" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#0ABAB5" stopOpacity="0.18" /><stop offset="100%" stopColor="#071518" stopOpacity="0.8" /></linearGradient>
            <linearGradient id="layRightFace" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#38bdf8" stopOpacity="0.22" /><stop offset="100%" stopColor="#071518" stopOpacity="0.9" /></linearGradient>
            <style>{`
              @keyframes layFloat0{0%,100%{transform:translateY(0px)}50%{transform:translateY(-14px)}}
              @keyframes layFloat2{0%,100%{transform:translateY(0px)}50%{transform:translateY(-7px)}}
              @keyframes layDash{from{stroke-dashoffset:0}to{stroke-dashoffset:-60}}
              @keyframes layRise{0%{opacity:0;transform:translateY(20px)}30%{opacity:.7}100%{opacity:0;transform:translateY(-40px)}}
            `}</style>
          </defs>
          {/* Layer 3 — base */}
          <g opacity="0.45">
            <polygon points="250,305 340,255 250,205 160,255" fill="url(#layTopFace)" stroke="rgba(10,186,181,0.3)" strokeWidth="1" />
            <polygon points="160,255 160,295 250,345 250,305" fill="url(#layLeftFace)" stroke="rgba(10,186,181,0.2)" strokeWidth="1" />
            <polygon points="340,255 340,295 250,345 250,305" fill="url(#layRightFace)" stroke="rgba(56,189,248,0.2)" strokeWidth="1" />
          </g>
          {/* Layer 2 — middle */}
          <g style={{ animation: "layFloat2 5s ease-in-out infinite 0.8s" }} opacity="0.65">
            <polygon points="250,245 340,195 250,145 160,195" fill="url(#layTopFace)" stroke="rgba(10,186,181,0.45)" strokeWidth="1.2" filter="url(#layGlow)" />
            <polygon points="160,195 160,235 250,285 250,245" fill="url(#layLeftFace)" stroke="rgba(10,186,181,0.25)" strokeWidth="1" />
            <polygon points="340,195 340,235 250,285 250,245" fill="url(#layRightFace)" stroke="rgba(56,189,248,0.25)" strokeWidth="1" />
            <line x1="205" y1="220" x2="295" y2="170" stroke="rgba(10,186,181,0.2)" strokeWidth="0.8" />
            <line x1="250" y1="145" x2="250" y2="245" stroke="rgba(10,186,181,0.15)" strokeWidth="0.8" />
          </g>
          {/* Layer 1 — top */}
          <g style={{ animation: "layFloat0 4s ease-in-out infinite" }}>
            <polygon points="250,175 350,118 250,61 150,118" fill="url(#layTopFace)" stroke="rgba(10,186,181,0.7)" strokeWidth="1.5" filter="url(#layGlow)" />
            <polygon points="150,118 150,165 250,222 250,175" fill="url(#layLeftFace)" stroke="rgba(10,186,181,0.35)" strokeWidth="1.2" />
            <polygon points="350,118 350,165 250,222 250,175" fill="url(#layRightFace)" stroke="rgba(56,189,248,0.35)" strokeWidth="1.2" />
            <line x1="200" y1="147" x2="300" y2="89" stroke="rgba(10,186,181,0.25)" strokeWidth="1" />
            <line x1="250" y1="61" x2="250" y2="175" stroke="rgba(10,186,181,0.2)" strokeWidth="1" />
            <line x1="300" y1="147" x2="200" y2="89" stroke="rgba(10,186,181,0.2)" strokeWidth="0.8" />
            <circle cx="250" cy="61" r="4" fill="#0ABAB5" opacity="0.9" filter="url(#layGlow)" />
            <circle cx="350" cy="118" r="3" fill="#38bdf8" opacity="0.7" />
            <circle cx="150" cy="118" r="3" fill="#0ABAB5" opacity="0.7" />
            <circle cx="250" cy="175" r="3" fill="#38bdf8" opacity="0.6" />
          </g>
          {/* Connectors */}
          <line x1="160" y1="195" x2="160" y2="255" stroke="rgba(10,186,181,0.2)" strokeWidth="1" strokeDasharray="4 4" style={{ animation: "layDash 2s linear infinite" }} />
          <line x1="340" y1="195" x2="340" y2="255" stroke="rgba(56,189,248,0.2)" strokeWidth="1" strokeDasharray="4 4" style={{ animation: "layDash 2s linear infinite reverse" }} />
          <line x1="250" y1="245" x2="250" y2="305" stroke="rgba(10,186,181,0.15)" strokeWidth="1" strokeDasharray="4 4" style={{ animation: "layDash 2.5s linear infinite" }} />
          {/* Particles */}
          {[{x:200,y:310,d:"0s"},{x:310,y:290,d:"0.8s"},{x:160,y:260,d:"1.6s"},{x:340,y:320,d:"2.4s"}].map(({x,y,d},i)=>(
            <rect key={i} x={x-2} y={y-2} width="4" height="4" fill="#0ABAB5" opacity="0.7" style={{ animation: `layRise 3s ease-out infinite ${d}` }} />
          ))}
          <ellipse cx="250" cy="290" rx="120" ry="28" stroke="rgba(10,186,181,0.12)" strokeWidth="1" strokeDasharray="10 6" style={{ animation: "layDash 6s linear infinite" }} />
          <text x="250" y="460" textAnchor="middle" fill="rgba(10,186,181,0.45)" fontSize="12" fontFamily="Helvetica Neue, sans-serif" letterSpacing="-0.02em">1С · УНФ · ТСД · ФУЛФИЛМЕНТ</text>
        </svg>
      </div>
    </section>
  );
}

// ── КЕЙС: ИИ Агенты ─────────────────────────────────────────────────────────

function CaseAIIntroSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";

  const stats = [
    { value: <CountUp value={8} duration={2000} />, label: "этапов внедрения" },
    { value: "ИИ", label: "агенты и автоматизация" },
    { value: <CountUp value={24} suffix="/7" duration={2200} />, label: "работа без участия человека" },
  ];

  return (
    <section style={{ ...sectionStyle, minHeight: "max(100svh, 760px)", backgroundColor: "#0d0f1f" }}>
      <div style={{ position: "absolute", right: "-8vw", top: "10vh", width: "55vw", height: "55vw", background: "radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: "-5vw", bottom: "0", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />

      {/* Badge */}
      <div style={{ position: "absolute", top: "clamp(30px, 5.56vh, 60px)", right: "3.125vw", display: "flex", alignItems: "center", padding: "clamp(8px, 1.11vh, 12px) clamp(10px, 0.83vw, 16px)", borderRadius: "300px", background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.3)", backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)" }}>
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(10px, 1.302vw, 25px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#8b5cf6", textTransform: "uppercase", whiteSpace: "nowrap", margin: 0 }}>
          кейсы  •  ИИ агенты
        </p>
      </div>

      {/* Title */}
      <h2 style={{ position: "absolute", left: "3.125vw", top: "clamp(30px, 5.65vh, 61px)", width: "min(50vw, 960px)", fontFamily: font, fontWeight: 400, fontSize: "clamp(28px, 4.688vw, 90px)", lineHeight: 0.9, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "pre-line" }}>
        {"Внедрение\nИИ Агентов"}
      </h2>

      {/* Description */}
      <p style={{ position: "absolute", left: "3.125vw", top: "clamp(190px, 28vh, 300px)", width: "min(44vw, 840px)", fontFamily: font, fontWeight: 400, fontSize: "clamp(12px, 1.563vw, 30px)", lineHeight: 1.35, letterSpacing: "-0.025em", color: "rgba(255,255,255,0.45)", margin: 0 }}>
        Автоматизируем рутинные бизнес-процессы с помощью ИИ-агентов. От аудита до полноценного внедрения — ваш бизнес работает эффективнее без лишних затрат.
      </p>

      {/* Stats row */}
      <div style={{ position: "absolute", left: "3.125vw", bottom: "clamp(30px, 5.56vh, 60px)", display: "flex", gap: "clamp(24px, 3.125vw, 60px)", alignItems: "flex-end" }}>
        {stats.map(({ value, label }) => (
          <div key={label} style={{ display: "flex", flexDirection: "column", gap: "clamp(4px, 0.56vh, 6px)" }}>
            <span style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(32px, 4.167vw, 80px)", lineHeight: 1, letterSpacing: "-0.04em", color: "#8b5cf6" }}>{value}</span>
            <span style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(10px, 0.938vw, 18px)", letterSpacing: "-0.02em", color: "rgba(255,255,255,0.35)" }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Original SVG neural network */}
      <div style={{ position: "absolute", right: "3.125vw", top: "50%", transform: "translateY(-50%)", width: "clamp(260px, 42vw, 780px)", height: "clamp(260px, 42vw, 780px)" }}>
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
          <defs>
            <filter id="aiGlow"><feGaussianBlur stdDeviation="4" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
            <filter id="aiNodeGlow"><feGaussianBlur stdDeviation="6" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
            <radialGradient id="aiCenterGrad" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" /><stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" /></radialGradient>
            <style>{`
              @keyframes aiPulse{0%,100%{opacity:.35}50%{opacity:1}}
              @keyframes aiOrbit{from{stroke-dashoffset:0}to{stroke-dashoffset:-200}}
              @keyframes aiFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
              @keyframes aiSignal{0%{stroke-dashoffset:300}100%{stroke-dashoffset:0}}
            `}</style>
          </defs>
          <circle cx="250" cy="250" r="110" fill="url(#aiCenterGrad)" opacity="0.25" />
          <line x1="75" y1="100" x2="250" y2="250" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5" />
          <line x1="75" y1="200" x2="250" y2="250" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5" />
          <line x1="75" y1="300" x2="250" y2="250" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5" />
          <line x1="75" y1="400" x2="250" y2="250" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5" />
          <line x1="250" y1="250" x2="425" y2="100" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5" />
          <line x1="250" y1="250" x2="425" y2="200" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5" />
          <line x1="250" y1="250" x2="425" y2="300" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5" />
          <line x1="250" y1="250" x2="425" y2="400" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5" />
          <line x1="75" y1="100" x2="250" y2="250" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="18 280" style={{ animation: "aiSignal 3s linear infinite" }} />
          <line x1="75" y1="300" x2="250" y2="250" stroke="#a78bfa" strokeWidth="2" strokeDasharray="18 280" style={{ animation: "aiSignal 4s linear infinite 1.2s" }} />
          <line x1="250" y1="250" x2="425" y2="200" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="18 280" style={{ animation: "aiSignal 3.5s linear infinite 0.6s" }} />
          <line x1="250" y1="250" x2="425" y2="400" stroke="#a78bfa" strokeWidth="2" strokeDasharray="18 280" style={{ animation: "aiSignal 4.5s linear infinite 2s" }} />
          <circle cx="250" cy="250" r="72" stroke="rgba(139,92,246,0.18)" strokeWidth="1" strokeDasharray="10 5" style={{ animation: "aiOrbit 8s linear infinite" }} />
          <circle cx="250" cy="250" r="105" stroke="rgba(139,92,246,0.10)" strokeWidth="1" strokeDasharray="14 8" style={{ animation: "aiOrbit 14s linear infinite reverse" }} />
          {[100, 200, 300, 400].map((y, i) => (
            <g key={`in-${i}`} style={{ animation: `aiPulse ${2.5 + i * 0.3}s ease-in-out infinite ${i * 0.4}s` }}>
              <circle cx="75" cy={y} r="17" fill="rgba(139,92,246,0.12)" stroke="rgba(139,92,246,0.45)" strokeWidth="1.5" filter="url(#aiGlow)" />
              <circle cx="75" cy={y} r="6" fill="#8b5cf6" />
            </g>
          ))}
          {[100, 200, 300, 400].map((y, i) => (
            <g key={`out-${i}`} style={{ animation: `aiPulse ${2.5 + i * 0.3}s ease-in-out infinite ${i * 0.6 + 0.3}s` }}>
              <circle cx="425" cy={y} r="17" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.45)" strokeWidth="1.5" filter="url(#aiGlow)" />
              <circle cx="425" cy={y} r="6" fill="#a78bfa" />
            </g>
          ))}
          <g style={{ animation: "aiFloat 4s ease-in-out infinite" }}>
            <circle cx="250" cy="250" r="40" fill="rgba(139,92,246,0.10)" stroke="rgba(139,92,246,0.35)" strokeWidth="2" filter="url(#aiNodeGlow)" />
            <circle cx="250" cy="250" r="26" fill="rgba(139,92,246,0.22)" stroke="rgba(139,92,246,0.65)" strokeWidth="1.5" />
            <circle cx="250" cy="250" r="11" fill="#8b5cf6" />
          </g>
          {[{cx:188,cy:158},{cx:312,cy:158},{cx:188,cy:342},{cx:312,cy:342}].map(({cx,cy},i)=>(
            <g key={`sat-${i}`} style={{ animation: `aiPulse ${2.8+i*0.35}s ease-in-out infinite ${i*0.5}s` }}>
              <line x1="250" y1="250" x2={cx} y2={cy} stroke="rgba(139,92,246,0.18)" strokeWidth="1" />
              <circle cx={cx} cy={cy} r="11" fill="rgba(139,92,246,0.12)" stroke="rgba(139,92,246,0.38)" strokeWidth="1" />
              <circle cx={cx} cy={cy} r="4" fill="#8b5cf6" opacity="0.75" />
            </g>
          ))}
          <text x="250" y="468" textAnchor="middle" fill="rgba(139,92,246,0.5)" fontSize="13" fontFamily="Helvetica Neue, sans-serif" letterSpacing="-0.02em">ИИ · АГЕНТ · АВТОМАТИЗАЦИЯ</text>
        </svg>
      </div>
    </section>
  );
}

function CaseAIStepsSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";

  const phases = [
    { num: "01", title: "Аудит", desc: "Анализ узких мест и оценка бизнес-процессов", color: "#0ABAB5" },
    { num: "02", title: "Проектирование", desc: "Формирование ТЗ и согласование с заказчиком", color: "#38bdf8" },
    { num: "03", title: "Разработка", desc: "Тестовое внедрение, постоянная доработка (2–14 дней)", color: "#8b5cf6" },
    { num: "04", title: "Тестирование", desc: "Финальный тест 3–7 дней и запуск в работу", color: "#34d399" },
  ];

  return (
    <section style={{ ...sectionStyle, minHeight: "max(100svh, 760px)", backgroundColor: "#0a0d1a" }}>
      <div style={{ position: "absolute", left: "50%", top: "-10vh", transform: "translateX(-50%)", width: "80vw", height: "40vw", background: "radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />

      {/* Heading */}
      <div style={{ position: "absolute", left: "3.125vw", top: "clamp(30px, 5.56vh, 60px)", display: "flex", alignItems: "baseline", gap: "clamp(12px, 1.5vw, 28px)" }}>
        <h2 style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(28px, 4.167vw, 80px)", lineHeight: 0.9, letterSpacing: "-0.04em", color: "#ffffff", margin: 0, whiteSpace: "nowrap" }}>
          4 фазы внедрения
        </h2>
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(11px, 1.25vw, 24px)", letterSpacing: "-0.02em", color: "rgba(255,255,255,0.3)", margin: 0 }}>
          ИИ Агентов
        </p>
      </div>

      {/* Left: 4 phase cards 2×2 */}
      <div style={{ position: "absolute", left: "3.125vw", top: "clamp(100px, 14.7vh, 155px)", bottom: "clamp(20px, 3vh, 36px)", width: "48%", display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "clamp(8px, 1.04vw, 18px)" }}>
        {phases.map(({ num, title, desc, color }) => (
          <GlowCard key={num} glowColor="purple" style={{ background: "rgba(255,255,255,0.03)", borderRadius: "clamp(12px, 1.25vw, 24px)", padding: "clamp(16px, 2.22vh, 28px) clamp(16px, 1.46vw, 28px)", display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
            <span className="card-num" style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(28px, 3.125vw, 60px)", lineHeight: 1, letterSpacing: "-0.05em", color, opacity: 0.5 }}>{num}</span>
            <div>
              <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(13px, 1.146vw, 22px)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "#fff", margin: "0 0 clamp(4px,0.56vh,8px)" }}>{title}</p>
              <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(10px, 0.833vw, 16px)", lineHeight: 1.35, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.45)", margin: 0 }}>{desc}</p>
            </div>
          </GlowCard>
        ))}
      </div>

      {/* Right: NeuralNet3D */}
      <div style={{ position: "absolute", right: "3.125vw", top: "50%", transform: "translateY(-50%)", width: "clamp(260px, 44vw, 820px)", height: "clamp(260px, 44vw, 820px)", pointerEvents: "none" }}>
        <NeuralNet3D />
      </div>
    </section>
  );
}


// ── КЕЙС: CRM Системы ────────────────────────────────────────────────────────

function CaseCRMIntroSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";

  const stats = [
    { value: <CountUp value={13} duration={2000} />, label: "этапов внедрения" },
    { value: "CRM", label: "под бизнес клиента" },
    { value: <CountUp value={1} suffix=" мес" duration={2000} />, label: "поддержка после запуска" },
  ];

  return (
    <section style={{ ...sectionStyle, minHeight: "max(100svh, 760px)", backgroundColor: "#080f18" }}>
      {/* Glows */}
      <div style={{ position: "absolute", right: "-8vw", top: "10vh", width: "55vw", height: "55vw", background: "radial-gradient(circle, rgba(56,189,248,0.10) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: "-5vw", bottom: "0", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 65%)", pointerEvents: "none" }} />

      {/* Badge */}
      <div style={{ position: "absolute", top: "clamp(30px, 5.56vh, 60px)", right: "3.125vw", display: "flex", alignItems: "center", padding: "clamp(8px, 1.11vh, 12px) clamp(10px, 0.83vw, 16px)", borderRadius: "300px", background: "rgba(56,189,248,0.10)", border: "1px solid rgba(56,189,248,0.3)", backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)" }}>
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(10px, 1.302vw, 25px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#38bdf8", textTransform: "uppercase", whiteSpace: "nowrap", margin: 0 }}>
          кейсы  •  CRM системы
        </p>
      </div>

      {/* Title */}
      <h2 style={{ position: "absolute", left: "3.125vw", top: "clamp(30px, 5.65vh, 61px)", width: "min(50vw, 960px)", fontFamily: font, fontWeight: 400, fontSize: "clamp(28px, 4.688vw, 90px)", lineHeight: 0.9, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "pre-line" }}>
        {"Внедрение\nCRM Системы"}
      </h2>

      {/* Description */}
      <p style={{ position: "absolute", left: "3.125vw", top: "clamp(200px, 29vh, 315px)", width: "min(44vw, 840px)", fontFamily: font, fontWeight: 400, fontSize: "clamp(12px, 1.563vw, 30px)", lineHeight: 1.35, letterSpacing: "-0.025em", color: "rgba(255,255,255,0.45)", margin: 0 }}>
        Полный цикл: от аудита бизнес-модели и подбора оптимального CRM-инструмента до обучения персонала и месяца технической поддержки
      </p>

      {/* 3D CRM rings */}
      <div style={{ position: "absolute", right: "clamp(20px, 3vw, 60px)", top: "50%", transform: "translateY(-50%)", width: "clamp(280px, 43vw, 820px)", height: "clamp(280px, 43vw, 820px)", pointerEvents: "none" }}>
        <CRM3D />
      </div>

      {/* Stats */}
      <div style={{ position: "absolute", left: "3.125vw", bottom: "clamp(36px, 6.67vh, 72px)", display: "flex", gap: "clamp(24px, 5.21vw, 100px)", alignItems: "flex-end" }}>
        {stats.map(({ value, label }) => (
          <div key={label}>
            <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(28px, 4.167vw, 80px)", lineHeight: 1, letterSpacing: "-0.04em", color: "#38bdf8", margin: "0 0 clamp(4px, 0.56vh, 6px) 0" }}>
              {value}
            </p>
            <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(10px, 1.04vw, 20px)", lineHeight: 1.2, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.4)", margin: 0 }}>
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CaseCRMStepsSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";

  const points = [
    { num: "01", title: "Аудит и регламент",    desc: "Анализ бизнес-модели, оценка и регламентирование всех процессов", color: "#38bdf8" },
    { num: "02", title: "Подбор CRM",            desc: "Оценка и выбор оптимального инструмента под задачи клиента",       color: "#7dd3fc" },
    { num: "03", title: "Развёртывание",         desc: "База данных + резервная копия, размещение на собственных серверах", color: "#60a5fa" },
    { num: "04", title: "Настройка учёта",       desc: "Номенклатура, спецификации, документы и отчётность",               color: "#7dd3fc" },
    { num: "05", title: "Обучение персонала",    desc: "Регламенты по ролям, типовые ошибки, цикл ведения отчётности",     color: "#38bdf8" },
    { num: "06", title: "Поддержка",             desc: "Месяц сопровождения по всем вопросам и проблемам после запуска",   color: "#60a5fa" },
  ];

  return (
    <section style={{ ...sectionStyle, minHeight: "max(100svh, 760px)", backgroundColor: "#080d16" }}>
      {/* Glow */}
      <div style={{ position: "absolute", left: "50%", top: "-10vh", transform: "translateX(-50%)", width: "70vw", height: "40vw", background: "radial-gradient(ellipse, rgba(56,189,248,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />

      {/* Heading */}
      <div style={{ position: "absolute", left: "3.125vw", top: "clamp(30px, 5.56vh, 60px)", display: "flex", alignItems: "baseline", gap: "clamp(12px, 1.5vw, 28px)" }}>
        <h2 style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(28px, 4.167vw, 80px)", lineHeight: 0.9, letterSpacing: "-0.04em", color: "#ffffff", margin: 0, whiteSpace: "nowrap" }}>
          Как это работает
        </h2>
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(11px, 1.25vw, 24px)", letterSpacing: "-0.02em", color: "rgba(255,255,255,0.3)", margin: 0 }}>
          CRM · 6 этапов
        </p>
      </div>

      {/* Left: 6 cards 3×2 */}
      <div style={{ position: "absolute", left: "3.125vw", top: "clamp(100px, 14.7vh, 155px)", bottom: "clamp(20px, 3vh, 36px)", width: "51%", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "clamp(6px, 0.83vw, 14px)" }}>
        {points.map(({ num, title, desc, color }) => (
          <GlowCard key={num} glowColor="cyan" style={{ background: "rgba(255,255,255,0.025)", borderRadius: "clamp(10px, 1.04vw, 20px)", padding: "clamp(12px, 1.67vh, 22px) clamp(12px, 1.04vw, 20px)", display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box" }}>
            <span className="card-num" style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(22px, 2.5vw, 48px)", lineHeight: 1, letterSpacing: "-0.05em", color, opacity: 0.5 }}>{num}</span>
            <div>
              <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(11px, 0.938vw, 18px)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "#fff", margin: "0 0 clamp(3px,0.42vh,6px)" }}>{title}</p>
              <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(9px, 0.677vw, 13px)", lineHeight: 1.35, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.4)", margin: 0 }}>{desc}</p>
            </div>
          </GlowCard>
        ))}
      </div>

      {/* Right: CRM pipeline SVG */}
      <div style={{ position: "absolute", right: "3.125vw", top: "50%", transform: "translateY(-50%)", width: "clamp(220px, 38vw, 700px)", height: "clamp(220px, 38vw, 700px)" }}>
        <svg viewBox="0 0 460 460" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
          <defs>
            <filter id="crmGlow"><feGaussianBlur stdDeviation="4" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
            <radialGradient id="crmHub" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" /><stop offset="100%" stopColor="#38bdf8" stopOpacity="0" /></radialGradient>
            <style>{`
              @keyframes crmPulse{0%,100%{opacity:.3}50%{opacity:1}}
              @keyframes crmOrbit{from{stroke-dashoffset:0}to{stroke-dashoffset:-220}}
              @keyframes crmFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
              @keyframes crmSig{0%{stroke-dashoffset:320}100%{stroke-dashoffset:0}}
            `}</style>
          </defs>

          {/* Central hub glow */}
          <circle cx="230" cy="230" r="90" fill="url(#crmHub)" opacity="0.2" />

          {/* Stage columns: Leads(L) → Qualify(Q) → Deals(D) → Won(W) */}
          {/* Connection lines */}
          {[{x1:60,y1:110,x2:230,y2:230},{x1:60,y1:190,x2:230,y2:230},{x1:60,y1:270,x2:230,y2:230},{x1:60,y1:350,x2:230,y2:230}].map(({x1,y1,x2,y2},i)=>(
            <line key={`il-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(56,189,248,0.18)" strokeWidth="1.5" />
          ))}
          {[{x1:230,y1:230,x2:400,y2:110},{x1:230,y1:230,x2:400,y2:190},{x1:230,y1:230,x2:400,y2:270},{x1:230,y1:230,x2:400,y2:350}].map(({x1,y1,x2,y2},i)=>(
            <line key={`ol-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(125,211,252,0.18)" strokeWidth="1.5" />
          ))}

          {/* Animated signals on select lines */}
          <line x1="60" y1="110" x2="230" y2="230" stroke="#38bdf8" strokeWidth="2" strokeDasharray="20 300" style={{ animation: "crmSig 3s linear infinite" }} />
          <line x1="60" y1="270" x2="230" y2="230" stroke="#7dd3fc" strokeWidth="2" strokeDasharray="20 300" style={{ animation: "crmSig 4s linear infinite 1.3s" }} />
          <line x1="230" y1="230" x2="400" y2="190" stroke="#38bdf8" strokeWidth="2" strokeDasharray="20 300" style={{ animation: "crmSig 3.5s linear infinite 0.7s" }} />
          <line x1="230" y1="230" x2="400" y2="350" stroke="#60a5fa" strokeWidth="2" strokeDasharray="20 300" style={{ animation: "crmSig 4.5s linear infinite 2s" }} />

          {/* Orbit rings */}
          <circle cx="230" cy="230" r="68" stroke="rgba(56,189,248,0.15)" strokeWidth="1" strokeDasharray="10 5" style={{ animation: "crmOrbit 7s linear infinite" }} />
          <circle cx="230" cy="230" r="100" stroke="rgba(56,189,248,0.08)" strokeWidth="1" strokeDasharray="14 8" style={{ animation: "crmOrbit 13s linear infinite reverse" }} />

          {/* Input nodes (leads) */}
          {[110, 190, 270, 350].map((y, i) => (
            <g key={`in-${i}`} style={{ animation: `crmPulse ${2.4 + i * 0.3}s ease-in-out infinite ${i * 0.4}s` }}>
              <circle cx="60" cy={y} r="16" fill="rgba(56,189,248,0.10)" stroke="rgba(56,189,248,0.40)" strokeWidth="1.5" filter="url(#crmGlow)" />
              <circle cx="60" cy={y} r="6"  fill="#38bdf8" />
            </g>
          ))}

          {/* Output nodes (won / actions) */}
          {[110, 190, 270, 350].map((y, i) => (
            <g key={`out-${i}`} style={{ animation: `crmPulse ${2.4 + i * 0.3}s ease-in-out infinite ${i * 0.55 + 0.25}s` }}>
              <circle cx="400" cy={y} r="16" fill="rgba(125,211,252,0.10)" stroke="rgba(125,211,252,0.40)" strokeWidth="1.5" filter="url(#crmGlow)" />
              <circle cx="400" cy={y} r="6"  fill="#7dd3fc" />
            </g>
          ))}

          {/* Central CRM node */}
          <g style={{ animation: "crmFloat 4s ease-in-out infinite" }}>
            <circle cx="230" cy="230" r="38" fill="rgba(56,189,248,0.08)" stroke="rgba(56,189,248,0.30)" strokeWidth="2" filter="url(#crmGlow)" />
            <circle cx="230" cy="230" r="24" fill="rgba(56,189,248,0.18)" stroke="rgba(56,189,248,0.60)" strokeWidth="1.5" />
            <circle cx="230" cy="230" r="11" fill="#38bdf8" />
          </g>

          {/* Satellite nodes */}
          {[{cx:168,cy:158},{cx:292,cy:158},{cx:168,cy:302},{cx:292,cy:302}].map(({cx,cy},i)=>(
            <g key={`sat-${i}`} style={{ animation: `crmPulse ${2.7+i*0.35}s ease-in-out infinite ${i*0.5}s` }}>
              <line x1="230" y1="230" x2={cx} y2={cy} stroke="rgba(56,189,248,0.15)" strokeWidth="1" />
              <circle cx={cx} cy={cy} r="10" fill="rgba(56,189,248,0.10)" stroke="rgba(56,189,248,0.35)" strokeWidth="1" />
              <circle cx={cx} cy={cy} r="4"  fill="#38bdf8" opacity="0.75" />
            </g>
          ))}

          <text x="230" y="432" textAnchor="middle" fill="rgba(56,189,248,0.45)" fontSize="12" fontFamily="Helvetica Neue, sans-serif" letterSpacing="-0.02em">CRM · ДАННЫЕ · ПРОЦЕССЫ · РЕЗУЛЬТАТ</text>
        </svg>
      </div>
    </section>
  );
}

// ── КЕЙС: Строительство склада ФФ ────────────────────────────────────────────

function CaseWarehouseBuildIntroSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  const ACCENT = "#10b981";
  const ACCENT2 = "#34d399";

  const bullets = [
    { num: "01", text: "Формирование плана помещения и АВС-зонирование секций хранения" },
    { num: "02", text: "Распределение более 200 тыс. единиц товара по зонам" },
    { num: "03", text: "Набор и обучение команды склада" },
    { num: "04", text: "Формирование и оптимизация товарной и финансовой отчётности" },
    { num: "05", text: "Управление командой и вывод склада на самоокупаемость" },
  ];

  const stats = [
    { value: <CountUp value={200} suffix="к+" duration={2200} />, label: "единиц товара" },
    { value: <CountUp value={1000} separator=" " duration={2200} />, label: "кв.м. площадь" },
    { value: <CountUp value={5} duration={1800} />, label: "этапов запуска" },
  ];

  return (
    <section style={{ ...sectionStyle, minHeight: "max(100svh, 760px)", backgroundColor: "#070f0c" }}>
      {/* Glows */}
      <div style={{ position: "absolute", right: "-8vw", top: "10vh", width: "55vw", height: "55vw", background: "radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: "-5vw", bottom: "0", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 65%)", pointerEvents: "none" }} />

      {/* Badge */}
      <div style={{ position: "absolute", top: "clamp(30px, 5.56vh, 60px)", right: "3.125vw", display: "flex", alignItems: "center", padding: "clamp(8px, 1.11vh, 12px) clamp(10px, 0.83vw, 16px)", borderRadius: "300px", background: "rgba(16,185,129,0.10)", border: `1px solid rgba(16,185,129,0.3)`, backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)" }}>
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(10px, 1.302vw, 25px)", lineHeight: 1, letterSpacing: "-0.035em", color: ACCENT, textTransform: "uppercase", whiteSpace: "nowrap", margin: 0 }}>
          кейсы  •  склад ФФ
        </p>
      </div>

      {/* Title */}
      <h2 style={{ position: "absolute", left: "3.125vw", top: "clamp(30px, 5.65vh, 61px)", width: "min(48vw, 920px)", fontFamily: font, fontWeight: 400, fontSize: "clamp(24px, 4.167vw, 80px)", lineHeight: 0.9, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "pre-line" }}>
        {"Строительство\nсклада ФФ\nдля крупного бренда"}
      </h2>

      {/* Description */}
      <p style={{ position: "absolute", left: "3.125vw", top: "clamp(248px, 37vh, 400px)", width: "min(43vw, 820px)", fontFamily: font, fontWeight: 400, fontSize: "clamp(11px, 1.25vw, 24px)", lineHeight: 1.35, letterSpacing: "-0.025em", color: "rgba(255,255,255,0.45)", margin: 0 }}>
        Полный цикл: приёмка, хранение, упаковка и отгрузка товара. 1 000 кв.м., более 200 тыс. единиц, АВС-зонирование
      </p>

      {/* Bullets */}
      <div style={{ position: "absolute", left: "3.125vw", top: "clamp(310px, 47vh, 510px)", width: "min(45vw, 840px)", display: "flex", flexDirection: "column", gap: "clamp(8px, 1.3vh, 16px)" }}>
        {bullets.map(({ num, text }) => (
          <div key={num} style={{ display: "flex", alignItems: "baseline", gap: "clamp(10px, 1.04vw, 20px)" }}>
            <span style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(11px, 1.04vw, 20px)", lineHeight: 1, letterSpacing: "-0.04em", color: ACCENT2, opacity: 0.55, flexShrink: 0, width: "3ch" }}>{num}</span>
            <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(10px, 0.938vw, 18px)", lineHeight: 1.3, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.72)", margin: 0 }}>{text}</p>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div style={{ position: "absolute", left: "3.125vw", bottom: "clamp(36px, 6.67vh, 72px)", display: "flex", gap: "clamp(24px, 5.21vw, 100px)", alignItems: "flex-end" }}>
        {stats.map(({ value, label }) => (
          <div key={label}>
            <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(24px, 3.646vw, 70px)", lineHeight: 1, letterSpacing: "-0.04em", color: ACCENT, margin: "0 0 clamp(4px,0.56vh,6px) 0" }}>{value}</p>
            <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(10px, 1.04vw, 20px)", lineHeight: 1.2, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.4)", margin: 0 }}>{label}</p>
          </div>
        ))}
      </div>

      {/* Warehouse3D — right */}
      <div style={{ position: "absolute", right: "clamp(20px, 3vw, 60px)", top: "50%", transform: "translateY(-50%)", width: "clamp(280px, 43vw, 820px)", height: "clamp(280px, 43vw, 820px)", pointerEvents: "none" }}>
        <Warehouse3D />
      </div>
    </section>
  );
}

function CaseWarehouseBuildScreenSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";

  return (
    <section style={{ ...sectionStyle, minHeight: "max(100svh, 760px)", backgroundColor: "#050c09", overflow: "hidden" }}>
      {/* Vertical stripe overlay — like block 2 */}
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0) 48px)", pointerEvents: "none", zIndex: 1 }} />

      {/* Ambient glow */}
      <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: "70vw", height: "70vh", background: "radial-gradient(ellipse, rgba(16,185,129,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />

      {/* Badge */}
      <div style={{ position: "absolute", top: "clamp(24px, 4.44vh, 48px)", right: "3.125vw", display: "flex", alignItems: "center", padding: "clamp(6px, 0.93vh, 10px) clamp(10px, 0.83vw, 16px)", borderRadius: "300px", background: "rgba(16,185,129,0.10)", border: "1px solid rgba(16,185,129,0.3)", backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)", zIndex: 2 }}>
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(10px, 1.302vw, 25px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#10b981", textTransform: "uppercase", whiteSpace: "nowrap", margin: 0 }}>
          план помещения  •  АВС-зонирование
        </p>
      </div>

      {/* Screenshot card with white frame */}
      <div
        style={{
          position: "absolute",
          left: "7.24vw",
          top: "clamp(80px, 14.8vh, 160px)",
          width: "85.52vw",
          height: "clamp(380px, 66.48vh, 718px)",
          border: "clamp(3px, 0.78vw, 15px) solid rgba(255,255,255,0.25)",
          borderRadius: "clamp(12px, 1.5625vw, 30px)",
          overflow: "hidden",
          boxSizing: "border-box",
          zIndex: 2,
        }}
      >
        {/* Horizontal scan lines inside frame */}
        <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(0deg, rgba(16,185,129,0.04) 0px, rgba(16,185,129,0) 32px)", pointerEvents: "none", zIndex: 1 }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="План помещения склада — АВС-зонирование"
          src="/warehouse-build-screenshot.jpg"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }}
        />
      </div>

      {/* Caption */}
      <div style={{ position: "absolute", left: "50%", bottom: "clamp(28px, 5.19vh, 56px)", transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: "clamp(8px, 1vw, 18px)", whiteSpace: "nowrap", zIndex: 2 }}>
        <div style={{ width: "clamp(6px, 0.42vw, 8px)", height: "clamp(6px, 0.42vw, 8px)", borderRadius: "50%", background: "#10b981" }} />
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(12px, 1.563vw, 30px)", lineHeight: 1.2, letterSpacing: "-0.03em", color: "rgba(255,255,255,0.45)", margin: 0 }}>
          Реальный план помещения с АВС-зонированием · 1 000 кв.м.
        </p>
      </div>
    </section>
  );
}

// Figma node: 2040:72 "Услуги" — file MOHJ9F1OX9kaB0rKsCZm7i
function CaseWarehouseSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";

  return (
    <section
      style={{
        ...sectionStyle,
        minHeight: "max(100svh, 780px)",
        background: "linear-gradient(156deg, #071518 0%, #0a2425 46%, #0d4e4f 120%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(54% 72% at 14% 86%, rgba(57, 198, 193, 0.34) 0%, rgba(57, 198, 193, 0.16) 38%, rgba(57, 198, 193, 0) 74%), radial-gradient(38% 52% at 84% 18%, rgba(9, 50, 51, 0.52) 0%, rgba(9, 50, 51, 0) 72%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "clamp(30px, 5.56vh, 60px)",
          right: "3.125vw",
          display: "flex",
          alignItems: "center",
          padding: "clamp(8px, 1.11vh, 12px) clamp(10px, 0.83vw, 16px)",
          borderRadius: "300px",
          background: "rgba(255, 255, 255, 0.08)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          zIndex: 2,
        }}
      >
        <p
          style={{
            fontFamily: font,
            fontWeight: 400,
            fontSize: "clamp(10px, 1.302vw, 25px)",
            lineHeight: 1,
            letterSpacing: "-0.035em",
            color: "#ffffff",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            margin: 0,
          }}
        >
          {"кейсы  •  склад фф"}
        </p>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "min(1780px, calc(100vw - 72px))",
          margin: "0 auto",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.08fr) minmax(360px, 0.92fr)",
          gap: "clamp(24px, 2.5vw, 48px)",
          paddingTop: "clamp(54px, 8.8vh, 96px)",
          paddingBottom: "clamp(34px, 5.2vh, 56px)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "100%",
          }}
        >
          <div style={{ maxWidth: "min(58vw, 980px)" }}>
            <p
              style={{
                fontFamily: font,
                fontWeight: 400,
                fontSize: "clamp(16px, 1.77vw, 34px)",
                lineHeight: 1,
                letterSpacing: "-0.035em",
                color: "rgba(255,255,255,0.58)",
                margin: "0 0 clamp(22px, 3.7vh, 40px) 0",
              }}
            >
              Запуск складской инфраструктуры под fullfilment-модель
            </p>

            <h2
              style={{
                fontFamily: font,
                fontWeight: 400,
                fontSize: "clamp(44px, 5.2vw, 100px)",
                lineHeight: 0.92,
                letterSpacing: "-0.045em",
                color: "#ffffff",
                margin: 0,
                whiteSpace: "pre-line",
              }}
            >
              {"Построили склад "}
              <span style={{ color: "#6ef7ef" }}>ФФ</span>
              {"\nдля крупного бренда"}
            </h2>

            <p
              style={{
                maxWidth: "min(51vw, 860px)",
                fontFamily: font,
                fontWeight: 400,
                fontSize: "clamp(16px, 1.875vw, 36px)",
                lineHeight: 1.18,
                letterSpacing: "-0.035em",
                color: "#ffffff",
                opacity: 0.56,
                margin: "clamp(24px, 4.44vh, 48px) 0 0 0",
                whiteSpace: "pre-line",
              }}
            >
              {"Сформировали полный цикл приёмки, хранения, упаковки и\nотгрузки товара на складе. Запустили операционную модель с нуля\nи вывели объект на самоокупаемость."}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(240px, 1fr))",
              gap: "clamp(14px, 1.3vw, 22px)",
              alignSelf: "stretch",
              marginTop: "clamp(36px, 7vh, 76px)",
            }}
          >
            {[
              { value: "200 тыс.+", label: "единиц товара в контуре склада" },
              { value: "1 000 м²", label: "складской площади под запуск" },
            ].map((item) => (
              <div
                key={item.value}
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "28px",
                  padding: "clamp(20px, 3.5vh, 38px) clamp(18px, 1.5vw, 28px)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                }}
              >
                <p
                  style={{
                    fontFamily: font,
                    fontWeight: 400,
                    fontSize: "clamp(24px, 3.33vw, 64px)",
                    lineHeight: 0.94,
                    letterSpacing: "-0.045em",
                    color: "#ffffff",
                    margin: 0,
                  }}
                >
                  {item.value}
                </p>
                <p
                  style={{
                    fontFamily: font,
                    fontWeight: 400,
                    fontSize: "clamp(13px, 1.15vw, 22px)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.035em",
                    color: "#ffffff",
                    opacity: 0.48,
                    margin: "clamp(10px, 1.85vh, 20px) 0 0 0",
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "clamp(16px, 1.6vw, 26px)",
          }}
        >
          <div
            style={{
              background: "linear-gradient(180deg, rgba(10, 186, 181, 0.24) 0%, rgba(10, 186, 181, 0.12) 100%)",
              border: "1px solid rgba(110, 247, 239, 0.24)",
              borderRadius: "30px",
              padding: "clamp(22px, 4vh, 42px)",
            }}
          >
            <p
              style={{
                fontFamily: font,
                fontWeight: 400,
                fontSize: "clamp(13px, 1.15vw, 22px)",
                lineHeight: 1,
                letterSpacing: "-0.035em",
                color: "#ffffff",
                opacity: 0.55,
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              Операционный результат
            </p>
            <p
              style={{
                fontFamily: font,
                fontWeight: 400,
                fontSize: "clamp(24px, 2.8vw, 54px)",
                lineHeight: 1,
                letterSpacing: "-0.04em",
                color: "#ffffff",
                margin: "clamp(16px, 2.22vh, 24px) 0 0 0",
              }}
            >
              Полный цикл:
              <br />
              приёмка, хранение,
              <br />
              упаковка и отгрузка
            </p>
          </div>

          <div
            style={{
              background: "rgba(8, 19, 20, 0.58)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "30px",
              padding: "clamp(22px, 3.7vh, 40px)",
              display: "flex",
              flexDirection: "column",
              gap: "clamp(14px, 1.85vh, 20px)",
            }}
          >
            <p
              style={{
                fontFamily: font,
                fontWeight: 400,
                fontSize: "clamp(22px, 2.45vw, 47px)",
                lineHeight: 0.98,
                letterSpacing: "-0.04em",
                color: "#ffffff",
                margin: 0,
              }}
            >
              Вывели склад на
              <br />
              самоокупаемость
            </p>
            <p
              style={{
                fontFamily: font,
                fontWeight: 400,
                fontSize: "clamp(13px, 1.15vw, 22px)",
                lineHeight: 1.16,
                letterSpacing: "-0.035em",
                color: "#ffffff",
                opacity: 0.5,
                margin: 0,
              }}
            >
              Управление процессами, людьми и финансовой моделью перевели в предсказуемый операционный контур.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseWarehousePlanSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";

  return (
    <section
      style={{
        ...sectionStyle,
        minHeight: "max(100svh, 820px)",
        background: "linear-gradient(180deg, #071518 0%, #0b2021 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(48% 70% at 84% 76%, rgba(10, 186, 181, 0.14) 0%, rgba(10, 186, 181, 0) 72%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "2.81vw",
          top: "5.09vh",
          width: "clamp(50px, 6.09vw, 117px)",
          height: "clamp(26px, 5.56vh, 60px)",
          pointerEvents: "none",
        }}
      >
        <InfinityAnimation />
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
          background: "rgba(255, 255, 255, 0.08)",
          border: "1px solid rgba(255,255,255,0.12)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          zIndex: 2,
        }}
      >
        <p
          style={{
            fontFamily: font,
            fontWeight: 400,
            fontSize: "clamp(10px, 1.302vw, 25px)",
            lineHeight: 1,
            letterSpacing: "-0.035em",
            color: "#ffffff",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            margin: 0,
          }}
        >
          {"кейсы  •  операционный запуск"}
        </p>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "min(1780px, calc(100vw - 72px))",
          margin: "0 auto",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.18fr) minmax(360px, 0.82fr)",
          gap: "clamp(22px, 2vw, 40px)",
          paddingTop: "clamp(112px, 16vh, 148px)",
          paddingBottom: "clamp(34px, 5.2vh, 56px)",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(16px, 2vh, 22px)",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "30px",
              padding: "clamp(10px, 1vw, 16px)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 30px 80px rgba(0, 0, 0, 0.18)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="План склада"
              src={WAREHOUSE_PLAN_IMG}
              style={{
                display: "block",
                width: "100%",
                height: "clamp(340px, 64vh, 690px)",
                objectFit: "contain",
                objectPosition: "center",
                borderRadius: "22px",
                background: "#ffffff",
              }}
            />
          </div>

          <p
            style={{
              fontFamily: font,
              fontWeight: 400,
              fontSize: "clamp(13px, 1.15vw, 22px)",
              lineHeight: 1.15,
              letterSpacing: "-0.035em",
              color: "#ffffff",
              opacity: 0.5,
              margin: 0,
            }}
          >
            План помещения, АБС-распределение зон хранения и логика движения товарного потока по складу.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(14px, 1.48vh, 16px)",
          }}
        >
          <div style={{ marginBottom: "clamp(10px, 1.85vh, 20px)" }}>
            <p
              style={{
                fontFamily: font,
                fontWeight: 400,
                fontSize: "clamp(14px, 1.15vw, 22px)",
                lineHeight: 1,
                letterSpacing: "-0.035em",
                color: "#6ef7ef",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Что сделали
            </p>
            <h3
              style={{
                fontFamily: font,
                fontWeight: 400,
                fontSize: "clamp(30px, 3.125vw, 60px)",
                lineHeight: 0.94,
                letterSpacing: "-0.04em",
                color: "#ffffff",
                margin: "clamp(12px, 1.85vh, 20px) 0 0 0",
              }}
            >
              Пять этапов запуска склада
            </h3>
          </div>

          {WAREHOUSE_STEPS.map((step, index) => (
            <div
              key={step}
              style={{
                display: "grid",
                gridTemplateColumns: "clamp(54px, 3.7vw, 72px) minmax(0, 1fr)",
                gap: "clamp(14px, 1vw, 18px)",
                alignItems: "center",
                padding: "clamp(16px, 2.22vh, 24px)",
                borderRadius: "24px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              <div
                style={{
                  width: "clamp(54px, 3.7vw, 72px)",
                  height: "clamp(54px, 3.7vw, 72px)",
                  borderRadius: "20px",
                  background: "linear-gradient(180deg, rgba(10,186,181,0.34) 0%, rgba(10,186,181,0.12) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: font,
                  fontWeight: 400,
                  fontSize: "clamp(18px, 1.67vw, 32px)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  color: "#ffffff",
                }}
              >
                {(index + 1).toString().padStart(2, "0")}
              </div>

              <p
                style={{
                  fontFamily: font,
                  fontWeight: 400,
                  fontSize: "clamp(15px, 1.35vw, 26px)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.035em",
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  return (
    <section
      style={{
        ...sectionStyle,
        minHeight: "max(100svh, 760px)",
        background: "linear-gradient(123.5deg, rgb(15, 5, 14) 0.89%, rgb(117, 39, 109) 128.63%)",
      }}
    >
      {/* Vector blob 1 — Figma: left:-999, top:-532, w:2349, h:1943 */}
      <div style={{ position: "absolute", left: "-52.03vw", top: "-49.26vh", width: "122.34vw", height: "179.91vh", pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "5.17%", right: "1.3%", bottom: "0.77%", left: "4.41%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src={SERVICES_VECTOR1_IMG} style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }} />
        </div>
      </div>

      {/* Vector blob 2 — Figma: left:431, top:-1252, w:2349, h:1943 */}
      <div style={{ position: "absolute", left: "22.45vw", top: "-115.93vh", width: "122.34vw", height: "179.91vh", pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "5.17%", right: "1.3%", bottom: "0.77%", left: "4.41%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src={SERVICES_VECTOR2_IMG} style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }} />
        </div>
      </div>

      {/* 43 × 45px strips, each with its own backdrop-filter: blur(50px) — как в Figma */}
      {Array.from({ length: 43 }, (_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${(i * 45 / 1920) * 100}vw`,
            top: 0,
            width: "2.34375vw",
            height: "100%",
            backdropFilter: "blur(50px)",
            WebkitBackdropFilter: "blur(50px)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      ))}

      {/* "Услуги" — Figma: left:calc(50%-871px), top:484, font:580px, gradient text */}
      <p
        style={{
          position: "absolute",
          left: "calc(50% - 45.36vw)",
          top: "clamp(260px, 44.81vh, 484px)",
          fontFamily: font,
          fontWeight: 400,
          fontSize: "clamp(120px, 30.21vw, 580px)",
          lineHeight: 0.8,
          letterSpacing: "-0.04em",
          background: "linear-gradient(179.1deg, rgba(255,0,230,0.25) 13.03%, rgb(255,255,255) 135.21%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
          margin: 0,
          whiteSpace: "nowrap",
          zIndex: 2,
        }}
      >
        Услуги
      </p>

      {/* Infinity logo — animated */}
      <div style={{ position: "absolute", left: "86.72vw", top: "clamp(20px, 4.26vh, 46px)", width: "clamp(80px, 11.3vw, 217px)", height: "clamp(40px, 10.28vh, 111px)", pointerEvents: "none", zIndex: 2 }}>
        <InfinityAnimation />
      </div>
    </section>
  );
}

// Figma node: 2040:565 "Кейс — Кресла ВБ скриншот" — file MOHJ9F1OX9kaB0rKsCZm7i
function CaseChairsWbSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  return (
    <section
      style={{
        ...sectionStyle,
        minHeight: "max(100svh, 760px)",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Infinity logo — animated */}
      <div style={{ position: "absolute", left: "2.81vw", top: "5.09vh", width: "clamp(50px, 6.09vw, 117px)", height: "clamp(26px, 5.56vh, 60px)", pointerEvents: "none" }}>
        <InfinityAnimation />
      </div>

      {/* Badge — Figma: right:60, top:60 */}
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
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(10px, 1.302vw, 25px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#0d1f1f", textTransform: "uppercase", whiteSpace: "nowrap", margin: 0 }}>
          {"кейсы  •  игровые кресла"}
        </p>
      </div>

      {/* Screenshot card — Figma: centered (left:50% top:50% translate -50%,-50%), w:1682, h:620, border:15 rgba(13,31,31,0.2) */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(87.6vw, 1682px)",
          height: "clamp(320px, 57.41vh, 620px)",
          border: "clamp(3px, 0.78vw, 15px) solid rgba(13, 31, 31, 0.2)",
          borderRadius: "clamp(12px, 1.5625vw, 30px)",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src={CHAIRS_WB_SCREENSHOT_IMG} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
      </div>

      {/* Caption — Figma: centered, top:941, WB logo with #ececec bg */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "clamp(560px, 87.13vh, 941px)",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: "clamp(10px, 1.2vw, 23px)",
          whiteSpace: "nowrap",
        }}
      >
        <div style={{ width: "clamp(28px, 3.33vw, 64px)", height: "clamp(28px, 3.33vw, 64px)", borderRadius: "50%", background: "#ececec", border: "3px solid #ececec", overflow: "hidden", flexShrink: 0, position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src={CHAIRS_WB_LOGO_IMG} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
        </div>
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(14px, 1.823vw, 35px)", lineHeight: 1.2, letterSpacing: "-0.035em", color: "#0d1f1f", opacity: 0.5, margin: 0, whiteSpace: "nowrap" }}>
          Скриншот личного кабинета Wildberries
        </p>
      </div>
    </section>
  );
}

// Figma node: 2040:153 "Кейс — Кресла Ozon скриншот" — file MOHJ9F1OX9kaB0rKsCZm7i
function CaseChairsScreenshotSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  return (
    <section
      style={{
        ...sectionStyle,
        minHeight: "max(100svh, 760px)",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Infinity logo — animated */}
      <div style={{ position: "absolute", left: "2.81vw", top: "5.09vh", width: "clamp(50px, 6.09vw, 117px)", height: "clamp(26px, 5.56vh, 60px)", pointerEvents: "none" }}>
        <InfinityAnimation />
      </div>

      {/* Badge — Figma: left:calc(75%+46px), top:60, light bg dark text */}
      <div
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
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(10px, 1.302vw, 25px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#0d1f1f", textTransform: "uppercase", whiteSpace: "nowrap", margin: 0 }}>
          {"кейсы  •  игровые кресла"}
        </p>
      </div>

      {/* Screenshot card — Figma: left:139, top:178, w:1642, h:718, border:15 rgba(13,31,31,0.2) */}
      <div
        style={{
          position: "absolute",
          left: "7.24vw",
          top: "clamp(100px, 16.48vh, 178px)",
          width: "85.52vw",
          height: "clamp(380px, 66.48vh, 718px)",
          border: "clamp(3px, 0.78vw, 15px) solid rgba(13, 31, 31, 0.2)",
          borderRadius: "clamp(12px, 1.5625vw, 30px)",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src={CHAIRS_SCREENSHOT_IMG} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
      </div>

      {/* Caption — Figma: centered, top:941 */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "clamp(560px, 87.13vh, 941px)",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: "clamp(10px, 1.2vw, 23px)",
          whiteSpace: "nowrap",
        }}
      >
        <div style={{ width: "clamp(28px, 3.33vw, 64px)", height: "clamp(28px, 3.33vw, 64px)", borderRadius: "50%", background: "#ffffff", overflow: "hidden", flexShrink: 0, position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src={CHAIRS_OZON_LOGO_IMG} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
        </div>
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(14px, 1.823vw, 35px)", lineHeight: 1.2, letterSpacing: "-0.035em", color: "#0d1f1f", opacity: 0.5, margin: 0, whiteSpace: "nowrap" }}>
          Скриншот личного кабинета Ozon
        </p>
      </div>
    </section>
  );
}

// Figma node: 2040:531 "Кейс — Кресла" — file MOHJ9F1OX9kaB0rKsCZm7i
function CaseChairsSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  return (
    <section
      style={{
        ...sectionStyle,
        minHeight: "max(100svh, 760px)",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Badge — Figma: right:60, top:60, light bg dark text */}
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
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(10px, 1.302vw, 25px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#0d1f1f", textTransform: "uppercase", whiteSpace: "nowrap", margin: 0 }}>
          {"кейсы  •  игровые кресла"}
        </p>
      </div>

      {/* Heading + subheading — Figma: left:54, top:61, w:1044 */}
      <div
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
        <p
          style={{
            fontFamily: font,
            fontWeight: 400,
            fontSize: "clamp(20px, 3.385vw, 65px)",
            lineHeight: 0.9,
            letterSpacing: "-0.035em",
            color: "#0d1f1f",
            margin: 0,
          }}
        >
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
            <p key={line} style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(10px, 1.302vw, 25px)", lineHeight: 1.3, letterSpacing: "-0.035em", color: "#0d1f1f", margin: 0 }}>
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Graph — Figma: left:-6, top:556, width:1926, height:524 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        src={CHAIRS_GRAPH_IMG}
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

      {/* Left stat card — Figma: left:63, top:556, "12%" dark brownish #2e132b */}
      <div
        style={{
          position: "absolute",
          left: "3.28vw",
          top: "clamp(320px, 51.48vh, 556px)",
          zIndex: 2,
        }}
      >
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(10px, 1.25vw, 24px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#2e132b", opacity: 0.5, margin: "0 0 clamp(14px, 2.96vh, 32px) 0", whiteSpace: "nowrap" }}>
          Маржинальность
        </p>
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(40px, 6.67vw, 128px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#2e132b", margin: 0, whiteSpace: "nowrap" }}>
          <CountUp value={12} suffix="%" duration={2200} />
        </p>
      </div>

      {/* Right stat card — Figma: left:1423, top:221, "25%" pink #ff00e6 */}
      <div
        style={{
          position: "absolute",
          left: "74.11vw",
          top: "clamp(130px, 20.46vh, 221px)",
          zIndex: 2,
        }}
      >
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(10px, 1.25vw, 24px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#2e132b", opacity: 0.5, margin: "0 0 clamp(14px, 2.96vh, 32px) 0", whiteSpace: "nowrap" }}>
          Маржинальность
        </p>
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(40px, 6.67vw, 128px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ff00e6", margin: 0, whiteSpace: "nowrap" }}>
          <CountUp value={25} suffix="%" duration={2200} />
        </p>
      </div>

      {/* Left dot+line — Figma: left:63, top:762, w:18, h:106 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        src={CHAIRS_DOT_LINE_L}
        style={{
          position: "absolute",
          left: "3.28vw",
          top: "clamp(450px, 70.56vh, 762px)",
          width: "clamp(8px, 0.9375vw, 18px)",
          height: "clamp(56px, 9.81vh, 106px)",
          maxWidth: "none",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* Right dot+line — Figma: left:1423, top:405, w:18, h:160 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        src={CHAIRS_DOT_LINE_R}
        style={{
          position: "absolute",
          left: "74.11vw",
          top: "clamp(240px, 37.5vh, 405px)",
          width: "clamp(8px, 0.9375vw, 18px)",
          height: "clamp(84px, 14.81vh, 160px)",
          maxWidth: "none",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* Left label — Figma: left:58, top:908, w:573, font:35 */}
      <div
        style={{
          position: "absolute",
          left: "3.02vw",
          top: "clamp(560px, 84.07vh, 908px)",
          width: "min(29.84vw, 573px)",
          zIndex: 2,
        }}
      >
        {["Высокая себестоимость и логистика", "Размытая ЦА"].map((line) => (
          <p key={line} style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(12px, 1.823vw, 35px)", lineHeight: 1.2, letterSpacing: "-0.035em", color: "#0d1f1f", margin: 0 }}>
            {line}
          </p>
        ))}
      </div>

      {/* Right info — Figma: left:1423, top:602, w:502 */}
      <div
        style={{
          position: "absolute",
          left: "74.11vw",
          top: "clamp(360px, 55.74vh, 602px)",
          width: "min(26.15vw, 502px)",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(10px, 1.94vh, 21px)",
          zIndex: 2,
        }}
      >
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(12px, 1.823vw, 35px)", lineHeight: 1.2, letterSpacing: "-0.035em", color: "#0d1f1f", margin: 0 }}>
          <CountUp value={40.5} decimals={1} suffix=" млн ₽" duration={2200} /> оборот
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(6px, 0.78vw, 15px)" }}>
          <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(12px, 1.823vw, 35px)", lineHeight: 1.2, letterSpacing: "-0.035em", color: "#0d1f1f", margin: 0, whiteSpace: "nowrap" }}>
            <CountUp value={1989} separator=" " duration={2200} /> заказов в месяц
          </p>
          {/* +88% badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px", padding: "clamp(5px, 1.3vh, 14px) 8px", borderRadius: "300px", background: "rgba(255,255,255,0.4)", border: "2px solid #ffffff", backdropFilter: "blur(50px)", flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" src={CHAIRS_ARROW_IMG} style={{ width: "clamp(10px, 1.15vw, 22px)", height: "clamp(9px, 1.57vh, 17px)", display: "block", pointerEvents: "none" }} />
            <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(10px, 1.25vw, 24px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ff00e6", margin: 0, whiteSpace: "nowrap" }}><CountUp value={88} suffix="%" duration={2200} /></p>
          </div>
        </div>
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(12px, 1.823vw, 35px)", lineHeight: 1.2, letterSpacing: "-0.035em", color: "#0d1f1f", margin: 0 }}>
          {"Рост прибыли в 2+ раза\nбез увеличения рекламы"}
        </p>
      </div>
    </section>
  );
}

// Figma node: 2040:144 "Кейс — сезонный товар, скриншот Ozon" — file MOHJ9F1OX9kaB0rKsCZm7i
function CaseSeasonalScreenshotSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  return (
    <section
      style={{
        ...sectionStyle,
        minHeight: "max(100svh, 760px)",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Infinity logo — animated */}
      <div style={{ position: "absolute", left: "2.81vw", top: "5.09vh", width: "clamp(50px, 6.09vw, 117px)", height: "clamp(26px, 5.56vh, 60px)", pointerEvents: "none" }}>
        <InfinityAnimation />
      </div>

      {/* Badge — Figma: right:67, top:60, light bg, dark text */}
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
        <p
          style={{
            fontFamily: font,
            fontWeight: 400,
            fontSize: "clamp(10px, 1.302vw, 25px)",
            lineHeight: 1,
            letterSpacing: "-0.035em",
            color: "#0d1f1f",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            margin: 0,
          }}
        >
          {"кейсы  •  сезонный товар"}
        </p>
      </div>

      {/* Screenshot card — Figma: left:139, top:178, width:1642, height:715, border:15 rgba(13,31,31,0.3) */}
      <div
        style={{
          position: "absolute",
          left: "7.24vw",
          top: "clamp(100px, 16.48vh, 178px)",
          width: "85.52vw",
          height: "clamp(380px, 66.2vh, 715px)",
          border: "clamp(3px, 0.78vw, 15px) solid rgba(13, 31, 31, 0.3)",
          borderRadius: "clamp(12px, 1.5625vw, 30px)",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          src={SEASONAL_SCREENSHOT_IMG}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Caption — Figma: left:calc(25%+173px)=33.96vw, top:933 */}
      <div
        style={{
          position: "absolute",
          left: "calc(25% + 9.01vw)",
          top: "clamp(560px, 86.39vh, 933px)",
          display: "flex",
          alignItems: "center",
          gap: "clamp(10px, 1.2vw, 23px)",
          whiteSpace: "nowrap",
        }}
      >
        <div
          style={{
            width: "clamp(28px, 3.33vw, 64px)",
            height: "clamp(28px, 3.33vw, 64px)",
            borderRadius: "50%",
            background: "#ffffff",
            overflow: "hidden",
            flexShrink: 0,
            position: "relative",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src={SEASONAL_OZON_LOGO_IMG}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              pointerEvents: "none",
            }}
          />
        </div>
        <p
          style={{
            fontFamily: font,
            fontWeight: 400,
            fontSize: "clamp(14px, 1.823vw, 35px)",
            lineHeight: 1.2,
            letterSpacing: "-0.035em",
            color: "#0d1f1f",
            opacity: 0.5,
            margin: 0,
            whiteSpace: "nowrap",
          }}
        >
          Скриншот личного кабинета Ozon
        </p>
      </div>
    </section>
  );
}

// Figma node: 2040:121 "Кейс — сезонный товар" — file MOHJ9F1OX9kaB0rKsCZm7i
function CaseSeasonalSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  const cardStyle: React.CSSProperties = {
    flex: "1 0 0",
    minWidth: 0,
    height: "clamp(160px, 29.54vh, 319px)",
    background: "rgba(18, 18, 18, 0.3)",
    borderRadius: "clamp(12px, 1.5625vw, 30px)",
    padding: "clamp(12px, 2.22vh, 24px) clamp(10px, 1.25vw, 24px) clamp(16px, 2.96vh, 32px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxSizing: "border-box",
  };
  const labelStyle: React.CSSProperties = {
    fontFamily: font,
    fontWeight: 400,
    fontSize: "clamp(10px, 1.25vw, 24px)",
    lineHeight: 1,
    letterSpacing: "-0.035em",
    color: "#ffffff",
    opacity: 0.3,
    margin: 0,
    whiteSpace: "nowrap",
  };
  const valueStyle: React.CSSProperties = {
    fontFamily: font,
    fontWeight: 400,
    fontSize: "clamp(36px, 6.25vw, 120px)",
    lineHeight: 1,
    letterSpacing: "-0.035em",
    color: "#ffffff",
    margin: 0,
    whiteSpace: "nowrap",
  };

  return (
    <section
      style={{
        ...sectionStyle,
        minHeight: "max(100svh, 760px)",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Right gradient panel — Figma: left:50%, top:0, width:960px(50%), height:1080px */}
      <div
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
        {/* "Результат" heading — Figma: left:36, top:270 within panel (36/960=3.75%) */}
        <p
          style={{
            position: "absolute",
            left: "3.75%",
            top: "clamp(140px, 25vh, 270px)",
            fontFamily: font,
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

        {/* Blocks container — Figma: left:36, top:370, width:864 (864/960=90%) */}
        <div
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
          {/* Row 1: two equal cards */}
          <div style={{ display: "flex", gap: "clamp(6px, 0.625vw, 12px)" }}>
            <GlowCard style={cardStyle}>
              <p style={labelStyle}>Выручка за 3 месяца, млн</p>
              <p style={valueStyle}><CountUp value={12.9} decimals={1} duration={2200} /></p>
            </GlowCard>
            <GlowCard style={cardStyle}>
              <p style={labelStyle}>Заказы</p>
              <p style={valueStyle}><CountUp value={4481} separator=" " duration={2200} /></p>
            </GlowCard>
          </div>
          {/* Row 2: one full-width card */}
          <div style={{ display: "flex" }}>
            <GlowCard style={cardStyle}>
              <p style={labelStyle}>Маржинальность при росте закупки, %</p>
              <p style={valueStyle}><CountUp value={22} duration={2200} /></p>
            </GlowCard>
          </div>
        </div>
      </div>

      {/* Left content: Heading + subheading — Figma: left:60, top:61, h:959, w:828 */}
      <div
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
        {/* Main heading — font:100px, "топ-2%" in teal */}
        <p
          style={{
            fontFamily: font,
            fontWeight: 400,
            fontSize: "clamp(28px, 5.208vw, 100px)",
            lineHeight: 0.9,
            letterSpacing: "-0.035em",
            color: "#0d1f1f",
            margin: 0,
          }}
        >
          {"Вошли в "}
          <span style={{ color: "#0abab5" }}>топ-<CountUp value={2} suffix="%" duration={2200} /></span>
          {" несмотря на срыв поставки"}
        </p>

        {/* Subheading bullets — Figma: font:35px, opacity:0.5, w:741 */}
        <div style={{ width: "min(38.59vw, 741px)", opacity: 0.5 }}>
          {[
            "• Агрессивный разгон рекламы: +120% показов за 5 дней",
            "• Новые обложки: CTR +35%",
            "• Сужение ЦА: CR с 1,1% до 1,6%",
            "• Динамическое ценообразование",
          ].map((line) => (
            <p
              key={line}
              style={{
                fontFamily: font,
                fontWeight: 400,
                fontSize: "clamp(12px, 1.823vw, 35px)",
                lineHeight: 1.2,
                letterSpacing: "-0.035em",
                color: "#0d1f1f",
                margin: 0,
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Badge — Figma: left:calc(75%+46px), top:60 */}
      <div
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
        <p
          style={{
            fontFamily: font,
            fontWeight: 400,
            fontSize: "clamp(10px, 1.302vw, 25px)",
            lineHeight: 1,
            letterSpacing: "-0.035em",
            color: "#ffffff",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            margin: 0,
          }}
        >
          {"кейсы  •  сезонный товар"}
        </p>
      </div>
    </section>
  );
}

// Figma node: 2040:162 "Услуги — аудит кабинета" — file MOHJ9F1OX9kaB0rKsCZm7i
function ServicesAuditSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  const innerCardStyle: React.CSSProperties = {
    background: "rgba(18,18,18,0.3)",
    borderRadius: "clamp(10px, 1.5625vw, 30px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "clamp(12px, 1.25vw, 24px) clamp(12px, 1.25vw, 24px) clamp(16px, 1.667vw, 32px)",
    flex: "1 0 0",
    minWidth: 0,
    height: "clamp(160px, 29.54vh, 319px)",
    boxSizing: "border-box",
  };
  return (
    <section
      style={{
        ...sectionStyle,
        minHeight: "max(100svh, 760px)",
        background: "linear-gradient(202.23deg, rgb(13, 31, 31) 15.55%, rgb(56, 133, 133) 99.342%)",
      }}
    >
      {/* Badge "АУДИТ КАБИНЕТА" — Figma: right:1618px ≈ left:60px, top:63px */}
      <div
        style={{
          position: "absolute",
          left: "3.125vw",
          top: "clamp(30px, 5.83vh, 63px)",
          display: "flex",
          alignItems: "center",
          padding: "clamp(8px, 1.11vh, 12px) clamp(10px, 0.83vw, 16px)",
          borderRadius: "300px",
          background: "rgba(69,69,69,0.3)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
        }}
      >
        <p
          style={{
            fontFamily: font,
            fontWeight: 400,
            fontSize: "clamp(10px, 1.302vw, 25px)",
            lineHeight: 1,
            letterSpacing: "-0.035em",
            color: "#ffffff",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            margin: 0,
          }}
        >
          аудит кабинета
        </p>
      </div>

      {/* Heading — Figma: left:60 top:133 font:100px tracking:-3.5px w:828px */}
      <p
        style={{
          position: "absolute",
          left: "3.125vw",
          top: "clamp(60px, 12.31vh, 133px)",
          width: "clamp(240px, 43.125vw, 828px)",
          fontFamily: font,
          fontWeight: 400,
          fontSize: "clamp(32px, 5.208vw, 100px)",
          lineHeight: 0.9,
          letterSpacing: "-0.035em",
          color: "#ffffff",
          margin: 0,
        }}
      >
        Находим точки роста за 3 дня
      </p>

      {/* Description — Figma: left:60 top:808 font:45px tracking:-1.575px w:730px */}
      <p
        style={{
          position: "absolute",
          left: "3.125vw",
          top: "clamp(480px, 74.81vh, 808px)",
          width: "clamp(200px, 38.02vw, 730px)",
          fontFamily: font,
          fontWeight: 400,
          fontSize: "clamp(15px, 2.34vw, 45px)",
          lineHeight: 1,
          letterSpacing: "-0.035em",
          color: "#ffffff",
          margin: 0,
        }}
      >
        Вы получаете документ с рекомендациями: что исправить в первую очередь, какой рост это даст в цифрах, план внедрения на 30 дней
      </p>

      {/* Right card — Figma: left:970 top:60 w:890 h:960 bg:rgba(18,18,18,0.3) p:48 r:60 */}
      <div
        style={{
          position: "absolute",
          right: "3.125vw",
          top: "clamp(30px, 5.56vh, 60px)",
          width: "clamp(280px, 46.35vw, 890px)",
          height: "clamp(480px, 88.89vh, 960px)",
          background: "rgba(18,18,18,0.3)",
          borderRadius: "clamp(20px, 3.125vw, 60px)",
          overflow: "hidden",
          boxSizing: "border-box",
          padding: "clamp(20px, 2.5vw, 48px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* "Проверяем" — Figma: font:75px tracking:-2.625px */}
        <p
          style={{
            fontFamily: font,
            fontWeight: 400,
            fontSize: "clamp(24px, 3.906vw, 75px)",
            lineHeight: 0.9,
            letterSpacing: "-0.035em",
            color: "#ffffff",
            margin: 0,
            whiteSpace: "nowrap",
          }}
        >
          Проверяем
        </p>

        {/* 2×2 grid of inner cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(6px, 0.625vw, 12px)", width: "100%" }}>
          {/* Row 1 */}
          <div style={{ display: "flex", gap: "clamp(6px, 0.625vw, 12px)" }}>
            <GlowCard style={innerCardStyle}>
              <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(9px, 1.25vw, 24px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", opacity: 0.3, margin: 0, whiteSpace: "nowrap" }}>
                CTR, конверсия, позиции
              </p>
              <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(20px, 3.333vw, 64px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "nowrap" }}>
                Воронка
              </p>
            </GlowCard>
            <GlowCard style={innerCardStyle}>
              <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(9px, 1.25vw, 24px)", lineHeight: 1.2, letterSpacing: "-0.035em", color: "#ffffff", opacity: 0.3, margin: 0 }}>
                Эффективность<br />кампаний
              </p>
              <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(20px, 3.333vw, 64px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "nowrap" }}>
                Реклама
              </p>
            </GlowCard>
          </div>
          {/* Row 2 */}
          <div style={{ display: "flex", gap: "clamp(6px, 0.625vw, 12px)" }}>
            <GlowCard style={innerCardStyle}>
              <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(9px, 1.25vw, 24px)", lineHeight: 1.2, letterSpacing: "-0.035em", color: "#ffffff", opacity: 0.3, margin: 0 }}>
                Себестоимость,<br />маржинальность
              </p>
              <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(20px, 3.333vw, 64px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "nowrap" }}>
                Финансы
              </p>
            </GlowCard>
            <GlowCard style={innerCardStyle}>
              <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(9px, 1.25vw, 24px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", opacity: 0.3, margin: 0, whiteSpace: "nowrap" }}>
                Качество карточек
              </p>
              <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(20px, 3.333vw, 64px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "nowrap" }}>
                Контент
              </p>
            </GlowCard>
          </div>
        </div>
      </div>
    </section>
  );
}

// Figma node: 2040:255 "Услуги — Внешние каналы продаж" — file MOHJ9F1OX9kaB0rKsCZm7i
function ServicesExternalSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  const bullets = [
    "Настраиваем магазины\nв Яндекс Кит и Авито",
    "Разрабатываем собственный сайт",
    "Развиваем социальные сети",
    "Настраиваем воронки продаж",
  ];
  return (
    <section style={{ ...sectionStyle, minHeight: "max(100svh, 760px)", backgroundColor: "#0d1f1f" }}>

      {/* Ellipse blob — Figma: left:-395 top:-1055 size:2756, inset:-3.63% */}
      <div style={{ position: "absolute", left: "-20.57vw", top: "-97.69vh", width: "143.54vw", height: "143.54vw", pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: "-3.63%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src={EXT_ELLIPSE_IMG} style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }} />
        </div>
      </div>

      {/* Group blob — Figma: left:-158 top:-342 w:1853 h:1854, inset:-6.47%/-6.48% */}
      <div style={{ position: "absolute", left: "-8.23vw", top: "-31.67vh", width: "96.51vw", height: "171.67vh", pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: "-6.47% -6.48%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src={EXT_GROUP_IMG} style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }} />
        </div>
      </div>

      {/* Horizontal blur band — top:0 h:745 bg:rgba(255,255,255,0.1) blur:50px */}
      <div style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "68.98vh", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(50px)", WebkitBackdropFilter: "blur(50px)", pointerEvents: "none", zIndex: 1 }} />

      {/* 41 vertical strips × 45px, PNG image + backdrop-blur:10px */}
      {Array.from({ length: 41 }, (_, i) => (
        <div key={i} style={{ position: "absolute", left: `${(i * 45 / 1920) * 100}vw`, top: 0, width: "2.34375vw", height: "100%", pointerEvents: "none", zIndex: 2 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src={i === 0 ? EXT_STRIP1_IMG : EXT_STRIP2_IMG}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", maxWidth: "none" }} />
        </div>
      ))}

      {/* Badge "ВНЕШНИЕ КАНАЛЫ ПРОДАЖ" — left:60 top:60 */}
      <div style={{ position: "absolute", left: "3.125vw", top: "clamp(30px, 5.56vh, 60px)", display: "flex", alignItems: "center", padding: "clamp(8px, 1.11vh, 12px) clamp(10px, 0.83vw, 16px)", borderRadius: "300px", background: "rgba(69,69,69,0.3)", backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)", zIndex: 3 }}>
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(10px, 1.302vw, 25px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", textTransform: "uppercase", whiteSpace: "nowrap", margin: 0 }}>
          внешние каналы продаж
        </p>
      </div>

      {/* White info card — Figma: left:1125 top:60 container w:735 h:960 */}
      <div style={{
        position: "absolute",
        right: "3.125vw",
        top: "clamp(30px, 5.56vh, 60px)",
        width: "clamp(240px, 38.28vw, 735px)",
        height: "clamp(440px, 88.89vh, 960px)",
        backgroundColor: "#ffffff",
        borderRadius: "clamp(12px, 1.5625vw, 30px)",
        overflow: "hidden",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "clamp(20px, 3.125vw, 60px)",
        zIndex: 3,
      }}>
        {/* Bullet timeline — 3 animated vertical beams between 4 circles */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {bullets.map((text, i) => (
            <div key={i} style={{ display: "flex", gap: "clamp(10px, 1.302vw, 25px)", alignItems: "flex-start" }}>
              {/* Circle + animated beam below */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                {/* Animated dot */}
                <div style={{
                  width: "clamp(10px, 1.04vw, 18px)",
                  height: "clamp(10px, 1.04vw, 18px)",
                  borderRadius: "50%",
                  border: "2px solid #0bbab5",
                  background: "#ffffff",
                  flexShrink: 0,
                  marginTop: 2,
                  position: "relative",
                  zIndex: 1,
                  animationName: `ext-dot-${i + 1}`,
                  animationDuration: "5s",
                  animationTimingFunction: "ease-out",
                  animationIterationCount: "infinite",
                }} />
                {/* Vertical line with traveling beam */}
                {i < bullets.length - 1 && (
                  <div style={{
                    width: "2px",
                    height: "clamp(40px, 9.26vh, 100px)",
                    background: "rgba(10,186,181,0.15)",
                    marginTop: "4px",
                    position: "relative",
                    overflow: "visible",
                  }}>
                    <div style={{
                      position: "absolute",
                      left: "-1px",
                      top: 0,
                      width: "4px",
                      height: "100%",
                      background: "linear-gradient(to bottom, rgba(10,186,181,0) 0%, #0ABAB5 50%, #c0faf8 85%, #ffffff 100%)",
                      filter: "drop-shadow(0 0 4px rgba(10,186,181,0.9)) drop-shadow(0 0 10px rgba(10,186,181,0.5))",
                      transformOrigin: "top center",
                      animationName: `ext-vbeam-${i + 1}`,
                      animationDuration: "5s",
                      animationTimingFunction: "ease-in-out",
                      animationIterationCount: "infinite",
                    }} />
                  </div>
                )}
              </div>
              {/* Text */}
              <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(12px, 1.823vw, 35px)", lineHeight: 1.2, letterSpacing: "-0.035em", color: "#0d1f1f", opacity: 0.5, margin: 0, whiteSpace: "pre-line", paddingBottom: i < bullets.length - 1 ? "clamp(10px, 2.78vh, 30px)" : 0 }}>
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Result section */}
        <div>
          <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(11px, 1.823vw, 35px)", lineHeight: 1.2, letterSpacing: "-0.035em", color: "#0d1f1f", opacity: 0.3, margin: "0 0 0.3em 0" }}>
            Результат
          </p>
          <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(16px, 2.34vw, 45px)", lineHeight: 0.9, letterSpacing: "-0.035em", color: "#0d1f1f", margin: 0 }}>
            Снижение зависимости от маркетплейсов и рост продаж
          </p>
        </div>
      </div>

      {/* Heading — Figma: left:60 top:859 font:100px w:1037 */}
      <p style={{ position: "absolute", left: "3.125vw", top: "clamp(560px, 79.54vh, 859px)", width: "clamp(260px, 54.01vw, 1037px)", fontFamily: font, fontWeight: 400, fontSize: "clamp(30px, 5.208vw, 100px)", lineHeight: 0.9, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, zIndex: 3 }}>
        Выход за пределы маркетплейсов
      </p>
    </section>
  );
}

// Figma node: 2040:648 "Услуги — Внедрение AI-агентов" — file MOHJ9F1OX9kaB0rKsCZm7i
function ServicesAiSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  const barGradient = "linear-gradient(90deg, #055452, #0bbab5)";
  // Vertical line rendered from a horizontal image via rotation
  const LineDown = ({ h }: { h: string }) => (
    <div style={{ width: 0, height: h, flexShrink: 0, position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: h, transformOrigin: "top left", transform: "rotate(90deg) scaleY(-1)", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src={AI_LINE_DOWN_IMG} style={{ display: "block", width: "100%", height: "4px", maxWidth: "none" }} />
      </div>
    </div>
  );
  const LineUp = ({ h }: { h: string }) => (
    <div style={{ width: 0, height: h, flexShrink: 0, position: "relative" }}>
      <div style={{ position: "absolute", bottom: 0, left: 0, width: h, transformOrigin: "bottom left", transform: "rotate(-90deg)", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src={AI_LINE_UP_IMG} style={{ display: "block", width: "100%", height: "4px", maxWidth: "none" }} />
      </div>
    </div>
  );
  const lineH = "clamp(90px, 18.06vh, 195px)";
  const labelFont: React.CSSProperties = {
    fontFamily: font, fontWeight: 400,
    fontSize: "clamp(13px, 1.823vw, 35px)", lineHeight: 1,
    letterSpacing: "-0.035em", color: "#ffffff", margin: 0,
    width: "clamp(120px, 19.9vw, 382px)",
  };
  return (
    <section style={{ ...sectionStyle, minHeight: "max(100svh, 760px)", backgroundColor: "#0d1f1f" }}>

      {/* Infinity logo — animated */}
      <div style={{ position: "absolute", left: "2.76vw", top: "5vh", width: "clamp(50px, 6.094vw, 117px)", height: "clamp(26px, 5.56vh, 60px)", pointerEvents: "none" }}>
        <InfinityAnimation />
      </div>

      {/* Badge — right:60 top:60 */}
      <div style={{ position: "absolute", right: "3.125vw", top: "clamp(30px, 5.56vh, 60px)", display: "flex", alignItems: "center", padding: "clamp(8px, 1.11vh, 12px) clamp(10px, 0.83vw, 16px)", borderRadius: "300px", background: "rgba(69,69,69,0.3)", backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)" }}>
        <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(10px, 1.302vw, 25px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", textTransform: "uppercase", whiteSpace: "nowrap", margin: 0 }}>
          внедрение ИИ-агентов
        </p>
      </div>

      {/* Graph container — Figma: left:60 top:215 w:1800 h:531 */}
      <div style={{ position: "absolute", left: "3.125vw", top: "clamp(130px, 19.91vh, 215px)", width: "93.75vw", height: "clamp(260px, 49.17vh, 531px)" }}>

        {/* Bars at 40.11% from top, height 19.77% */}
        {/* Bar 1 — left:0% w:25% opacity:0.2, rounded left */}
        <div style={{ position: "absolute", left: "0%", top: "40.11%", width: "25%", height: "19.77%", background: barGradient, opacity: 0.2, borderRadius: "clamp(8px, 1.04vw, 20px) 0 0 clamp(8px, 1.04vw, 20px)" }} />
        {/* Bar 2 — left:25% opacity:0.3 */}
        <div style={{ position: "absolute", left: "25%", top: "40.11%", width: "25%", height: "19.77%", background: barGradient, opacity: 0.3 }} />
        {/* Bar 3 — left:50% opacity:0.6 */}
        <div style={{ position: "absolute", left: "50%", top: "40.11%", width: "25%", height: "19.77%", background: barGradient, opacity: 0.6 }} />
        {/* Bar 4 — left:75% opacity:1, rounded right */}
        <div style={{ position: "absolute", left: "75%", top: "40.11%", width: "25%", height: "19.77%", background: barGradient, borderRadius: "0 clamp(8px, 1.04vw, 20px) clamp(8px, 1.04vw, 20px) 0" }} />

        {/* Label 1 (top, left:0) — "Находим процессы для автоматизации" */}
        <div style={{ position: "absolute", left: "0%", top: 0, display: "flex", gap: "clamp(12px, 1.25vw, 24px)", alignItems: "flex-start" }}>
          <LineDown h={lineH} />
          <p style={labelFont}>Находим процессы<br />для автоматизации</p>
        </div>

        {/* Label 3 (top, left:50%) — "Внедряем в работу команды" */}
        <div style={{ position: "absolute", left: "50%", top: 0, display: "flex", gap: "clamp(12px, 1.25vw, 24px)", alignItems: "flex-start" }}>
          <LineDown h={lineH} />
          <p style={labelFont}>Внедряем в работу команды</p>
        </div>

        {/* Label 2 (bottom, left:25%) — "Подбираем AI-инструменты" */}
        <div style={{ position: "absolute", left: "25%", top: "63.28%", display: "flex", gap: "clamp(12px, 1.25vw, 24px)", alignItems: "flex-end" }}>
          <LineUp h={lineH} />
          <p style={labelFont}>Подбираем AI-инструменты</p>
        </div>

        {/* Label 4 (bottom, left:75%) — "Обучаем сотрудников" */}
        <div style={{ position: "absolute", left: "75%", top: "63.28%", display: "flex", gap: "clamp(12px, 1.25vw, 24px)", alignItems: "flex-end" }}>
          <LineUp h={lineH} />
          <p style={labelFont}>Обучаем сотрудников</p>
        </div>
      </div>

      {/* Heading — left:60 top:859 font:100px w:1453 */}
      <p style={{ position: "absolute", left: "3.125vw", top: "clamp(580px, 79.54vh, 859px)", width: "clamp(280px, 75.68vw, 1453px)", fontFamily: font, fontWeight: 400, fontSize: "clamp(28px, 5.208vw, 100px)", lineHeight: 0.9, letterSpacing: "-0.035em", color: "#ffffff", margin: 0, whiteSpace: "pre-wrap" }}>
        <span style={{ color: "#0bbab5" }}>Автоматизация</span>
        {" \nчерез искусственный интеллект"}
      </p>
    </section>
  );
}

// Figma node: 2040:344 "Услуги — Системы учета" — file MOHJ9F1OX9kaB0rKsCZm7i
function ServicesAccountingSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  const cardStyle: React.CSSProperties = {
    background: "rgba(18,18,18,0.3)",
    borderRadius: "clamp(12px, 1.5625vw, 30px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "clamp(12px, 1.25vw, 24px) clamp(12px, 1.25vw, 24px) clamp(16px, 1.667vw, 32px)",
    flex: "1 0 0",
    minWidth: 0,
    minHeight: 0,
    height: "clamp(200px, 43.89vh, 474px)",
    boxSizing: "border-box" as const,
  };
  const labelStyle: React.CSSProperties = { fontFamily: font, fontWeight: 400, fontSize: "clamp(8px, 1.25vw, 24px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", opacity: 0.3, margin: 0, whiteSpace: "pre" };
  const titleStyle: React.CSSProperties = { fontFamily: font, fontWeight: 400, fontSize: "clamp(20px, 3.333vw, 64px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", margin: 0 };
  return (
    <section style={{ ...sectionStyle, minHeight: "max(100svh, 760px)", backgroundColor: "#ffffff" }}>

      {/* Heading — Figma: left:60 top:60 font:100px tracking:-3.5px w:675 color:#0d1f1f */}
      <p style={{ position: "absolute", left: "3.125vw", top: "clamp(30px, 5.56vh, 60px)", width: "clamp(220px, 35.16vw, 675px)", fontFamily: font, fontWeight: 400, fontSize: "clamp(32px, 5.208vw, 100px)", lineHeight: 0.9, letterSpacing: "-0.035em", color: "#0d1f1f", margin: 0 }}>
        Внедряем системы учета
      </p>

      {/* Subtext — Figma: bottom:785px → top:295px left:60px opacity:0.3 font:35px */}
      <p style={{ position: "absolute", left: "3.125vw", top: "clamp(170px, 27.31vh, 295px)", fontFamily: font, fontWeight: 400, fontSize: "clamp(12px, 1.823vw, 35px)", lineHeight: 1.2, letterSpacing: "-0.035em", color: "#0d1f1f", opacity: 0.3, margin: 0, whiteSpace: "nowrap" }}>
        CRM, дашборды, автоматизация
      </p>

      {/* Description — Figma: bottom:227px → top:853px left:60px font:45px w:811 */}
      <p style={{ position: "absolute", left: "3.125vw", top: "clamp(580px, 79.0vh, 853px)", width: "clamp(200px, 42.24vw, 811px)", fontFamily: font, fontWeight: 400, fontSize: "clamp(14px, 2.34vw, 45px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#0d1f1f", margin: 0 }}>
        Полная картина бизнеса в одном месте: продажи, остатки, финансы, план-факт в реальном времени, автоматические отчёты
      </p>

      {/* Right teal panel — Figma: left:50% top:0 w:960px h:full, gradient #0d1f1f→#388585 */}
      <div style={{ position: "absolute", left: "50%", top: 0, width: "50%", height: "100%", background: "linear-gradient(221.19deg, #0d1f1f 0%, #388585 99.316%)", overflow: "hidden" }}>

        {/* Cards grid — Figma: left:36 top:60 w:864 gap:12 */}
        <div style={{ position: "absolute", left: "3.75%", top: "clamp(30px, 5.56vh, 60px)", width: "90%", display: "flex", flexDirection: "column", gap: "clamp(6px, 0.625vw, 12px)" }}>
          {/* Row 1 */}
          <div style={{ display: "flex", gap: "clamp(6px, 0.625vw, 12px)" }}>
            <GlowCard style={cardStyle}>
              <p style={labelStyle}>{"01 •  Битрикс24, Мой склад"}</p>
              <p style={{ ...titleStyle, whiteSpace: "nowrap" }}>CRM</p>
            </GlowCard>
            <GlowCard style={cardStyle}>
              <p style={labelStyle}>{"02 •  1С, управленческие дашборды "}</p>
              <p style={{ ...titleStyle, whiteSpace: "nowrap" }}>Учет</p>
            </GlowCard>
          </div>
          {/* Row 2 */}
          <div style={{ display: "flex", gap: "clamp(6px, 0.625vw, 12px)" }}>
            <GlowCard style={cardStyle}>
              <p style={labelStyle}>{"03  •  PowerBI, DataLens"}</p>
              <p style={{ ...titleStyle, whiteSpace: "nowrap" }}>Аналитика</p>
            </GlowCard>
            <GlowCard style={cardStyle}>
              <p style={{ ...labelStyle, whiteSpace: "nowrap" }}>04</p>
              <p style={titleStyle}>Интеграции между системами</p>
            </GlowCard>
          </div>
        </div>
      </div>
    </section>
  );
}

// Figma node: 2040:188 "Услуги — управление кабинетами" — file MOHJ9F1OX9kaB0rKsCZm7i
function ServicesManagementSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  return (
    <section
      style={{
        ...sectionStyle,
        minHeight: "max(100svh, 760px)",
        backgroundColor: "#0d1f1f",
      }}
    >
      {/* Ellipse blob — Figma: left:-257 top:-1055 size:2480, inset:-4.03% */}
      <div style={{ position: "absolute", left: "-13.39vw", top: "-97.69vh", width: "129.17vw", height: "129.17vw", pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: "-4.03%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src={MGMT_ELLIPSE_IMG} style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }} />
        </div>
      </div>

      {/* Group blob — Figma: left:-44 top:-413 size:1668, inset:-7.19% */}
      <div style={{ position: "absolute", left: "-2.29vw", top: "-38.24vh", width: "86.875vw", height: "86.875vw", pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: "-7.19%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src={MGMT_GROUP_IMG} style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }} />
        </div>
      </div>

      {/* Horizontal blur band — Figma: top:0 h:745 bg:rgba(255,255,255,0.1) blur:50px */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "68.98vh",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(50px)",
          WebkitBackdropFilter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* 41 vertical strips × 45px, backdrop-blur:10px */}
      {Array.from({ length: 41 }, (_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${(i * 45 / 1920) * 100}vw`,
            top: 0,
            width: "2.34375vw",
            height: "100%",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />
      ))}

      {/* Heading row — Figma: right:60 top:60 w:1800 justify-between */}
      <div
        style={{
          position: "absolute",
          right: "3.125vw",
          top: "clamp(30px, 5.56vh, 60px)",
          width: "93.75vw",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          zIndex: 3,
        }}
      >
        {/* "Отдел продаж под ключ" — font:150px tracking:-5.25px w:1037 */}
        <p
          style={{
            fontFamily: font,
            fontWeight: 400,
            fontSize: "clamp(40px, 7.8125vw, 150px)",
            lineHeight: 0.9,
            letterSpacing: "-0.035em",
            color: "#ffffff",
            width: "clamp(260px, 53.99vw, 1037px)",
            margin: 0,
            flexShrink: 0,
          }}
        >
          Отдел продаж под ключ
        </p>

        {/* Right column: badge + avatar group */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "clamp(20px, 4.35vh, 47px)",
            flexShrink: 0,
            width: "clamp(140px, 18.8vw, 361px)",
          }}
        >
          {/* Badge "УПРАВЛЕНИЕ КАБИНЕТАМИ" */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              padding: "clamp(8px, 1.11vh, 12px) clamp(10px, 0.83vw, 16px)",
              borderRadius: "300px",
              background: "rgba(69,69,69,0.3)",
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
              boxSizing: "border-box",
            }}
          >
            <p
              style={{
                fontFamily: font,
                fontWeight: 400,
                fontSize: "clamp(8px, 1.302vw, 25px)",
                lineHeight: 1,
                letterSpacing: "-0.035em",
                color: "#ffffff",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                margin: 0,
              }}
            >
              управление кабинетами
            </p>
          </div>

          {/* Avatar group — 3 overlapping 64px circles */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "clamp(2px, 0.37vh, 4px) clamp(10px, 1.25vw, 24px) clamp(2px, 0.37vh, 4px) clamp(2px, 0.21vw, 4px)",
              borderRadius: "300px",
              background: "rgba(69,69,69,0.3)",
              flexShrink: 0,
            }}
          >
            {[
              { src: MGMT_AVATAR1_IMG, bg: "#ffffff" },
              { src: MGMT_AVATAR2_IMG, bg: "#1e2a2a" },
              { src: MGMT_AVATAR3_IMG, bg: "#1e2a2a" },
            ].map((av, idx) => (
              <div
                key={idx}
                style={{
                  width: "clamp(28px, 3.33vw, 64px)",
                  height: "clamp(28px, 3.33vw, 64px)",
                  borderRadius: "50%",
                  background: av.bg,
                  overflow: "hidden",
                  flexShrink: 0,
                  position: "relative",
                  marginRight: idx < 2 ? "clamp(-8px, -1.04vw, -20px)" : 0,
                  border: idx > 0 ? `clamp(1px, 0.16vw, 3px) solid ${av.bg}` : "none",
                  boxSizing: "border-box",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt=""
                  src={av.src}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none", maxWidth: "none" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* White bottom panel — Figma: top:703 h:377 bg:white borderRadius:40px top */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "clamp(440px, 65.09vh, 703px)",
          bottom: 0,
          width: "100%",
          background: "#ffffff",
          borderRadius: "clamp(16px, 2.083vw, 40px) clamp(16px, 2.083vw, 40px) 0 0",
          overflow: "hidden",
          boxSizing: "border-box",
          zIndex: 3,
        }}
      >
        {/* Left description — Figma: left:60 top:66 font:45px w:730 color:#0d1f1f */}
        <p
          style={{
            position: "absolute",
            left: "3.125vw",
            top: "clamp(20px, 6.11vh, 66px)",
            width: "clamp(180px, 38.02vw, 730px)",
            fontFamily: font,
            fontWeight: 400,
            fontSize: "clamp(14px, 2.34vw, 45px)",
            lineHeight: 1,
            letterSpacing: "-0.035em",
            color: "#0d1f1f",
            margin: 0,
          }}
        >
          Получаете отдел продаж, который работает на рост прибыли, отчитывается в цифрах, масштабирует успешные решения
        </p>

        {/* Right list — Figma: left:910 top:57 font:35px opacity:0.5 color:#0d1f1f */}
        <div
          style={{
            position: "absolute",
            left: "47.4vw",
            top: "clamp(16px, 5.28vh, 57px)",
            fontFamily: font,
            fontWeight: 400,
            fontSize: "clamp(11px, 1.823vw, 35px)",
            lineHeight: 1.2,
            letterSpacing: "-0.035em",
            color: "#0d1f1f",
            opacity: 0.5,
            whiteSpace: "nowrap",
          }}
        >
          <p style={{ margin: 0 }}>Что делаем:</p>
          <p style={{ margin: 0 }}>{"• Аналитика воронки и тестирование гипотез"}</p>
          <p style={{ margin: 0 }}>{"• Контент и реклама"}</p>
          <p style={{ margin: 0 }}>{"• Управление остатками и закупками"}</p>
          <p style={{ margin: 0 }}>{"• Финансовая отчетность P&L"}</p>
          <p style={{ margin: 0 }}>{"• Команда: менеджер, аналитик, дизайнер"}</p>
        </div>
      </div>
    </section>
  );
}

// Figma node: 2040:326 "Услуги — Подбор новинок" — file MOHJ9F1OX9kaB0rKsCZm7i
function ServicesPodborSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  return (
    <section
      style={{
        ...sectionStyle,
        minHeight: "max(100svh, 760px)",
        backgroundColor: "#0f050e",
      }}
    >
      {/* Gray decorative rects behind phone — Figma: #454545, opacity:0.6 */}
      {/* Rect 1: left:calc(50%+137px) top:230 w:571 h:1130 r:30 */}
      <div
        style={{
          position: "absolute",
          left: "calc(50% + 7.14vw)",
          top: "21.3vh",
          width: "29.74vw",
          height: "104.63vh",
          background: "#454545",
          opacity: 0.6,
          borderRadius: "1.5625vw",
          pointerEvents: "none",
        }}
      />
      {/* Rect 2: left:calc(50%+99px) top:267 w:651 h:1130 r:30 */}
      <div
        style={{
          position: "absolute",
          left: "calc(50% + 5.16vw)",
          top: "24.72vh",
          width: "33.9vw",
          height: "104.63vh",
          background: "#454545",
          opacity: 0.6,
          borderRadius: "1.5625vw",
          pointerEvents: "none",
        }}
      />

      {/* Phone mockup card — Figma: left:calc(50%+62.51) top:314 w:724.813 h:1025.701
          border:13.765px rgba(254,254,254,0.1) r:27.531 bg:#0a0406
          inset-shadow:0 0 97px 14px rgba(255,0,230,0.4) */}
      <div
        style={{
          position: "absolute",
          left: "calc(50% + 3.26vw)",
          top: "29.07vh",
          width: "clamp(200px, 37.75vw, 725px)",
          height: "clamp(300px, 94.97vh, 1026px)",
          border: "clamp(5px, 0.716vw, 14px) solid rgba(254,254,254,0.1)",
          borderRadius: "clamp(10px, 1.43vw, 28px)",
          overflow: "hidden",
          boxSizing: "border-box",
          backgroundColor: "#0a0406",
          boxShadow: "inset 0 0 clamp(30px, 5.07vw, 97px) clamp(5px, 0.76vw, 15px) rgba(255,0,230,0.4)",
        }}
      >
        {/* Brand logo area — Figma (in card): left:43.85 top:426.36 w:195.593 h:46.397 */}
        <div
          style={{
            position: "absolute",
            left: "6.05%",
            top: "41.57%",
            width: "26.99%",
            height: "4.52%",
          }}
        >
          {/* Ellipse glow */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              top: "12.46%",
              left: 0,
              height: "24.74%",
              transform: "translateY(-50%)",
              overflow: "visible",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              src={PODBOR_ELLIPSE_IMG}
              style={{ position: "absolute", inset: "-96.15% -5.64%", width: "111.28%", height: "296.3%", maxWidth: "none", pointerEvents: "none" }}
            />
          </div>

          {/* Thin line — Figma: Rectangle4, centered, top:2.91px, h:4.415 w:185.218 */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "6.27%",
              width: "94.7%",
              height: "9.52%",
              transform: "translateX(-50%)",
              overflow: "hidden",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              src={PODBOR_LINE1_IMG}
              style={{ position: "absolute", top: "50%", left: 0, width: "100%", height: "30%", transform: "translateY(-50%)", maxWidth: "none", pointerEvents: "none" }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              src={PODBOR_LINE2_IMG}
              style={{ position: "absolute", top: "50%", left: 0, width: "100%", height: "30%", transform: "translateY(-50%)", maxWidth: "none", pointerEvents: "none", mixBlendMode: "plus-lighter" }}
            />
          </div>

          {/* PRO text logo — Figma: centered x, top: calc(50%-17.43px) → 12.47% */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "0%",
              width: "94.7%",
              height: "24.9%",
              transform: "translateX(-50%) translateY(-50%)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              src={PODBOR_PRO_IMG}
              style={{ position: "absolute", inset: "-95.61% -5.96%", width: "111.92%", height: "291.22%", maxWidth: "none", pointerEvents: "none" }}
            />
          </div>

          {/* Infinity/logo mark — animated */}
          <div style={{ position: "absolute", left: 0, top: "20.07%", width: "28.21%", height: "79.95%", pointerEvents: "none" }}>
            <InfinityAnimation />
          </div>
        </div>

        {/* "АНАЛИЗ САЛФЕТОК ДЛЯ УБОРКИ"
            Figma: left:680.96 → translateX(-100%) → net left ~6%, top:472.65, w:637.104
            font: Roboto Condensed Bold 63.345px → 3.3vw */}
        <p
          style={{
            position: "absolute",
            left: "6.07%",
            top: "46.08%",
            width: "87.9%",
            fontFamily: "Roboto Condensed, Arial Narrow, Arial, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(14px, 3.3vw, 63px)",
            lineHeight: 1,
            color: "#ffffff",
            textAlign: "right",
            margin: 0,
          }}
        >
          АНАЛИЗ САЛФЕТОК ДЛЯ УБОРКИ
        </p>
      </div>

      {/* Heading — Figma: left:60 top:60 font:100px tracking:-3.5px w:993 */}
      <p
        style={{
          position: "absolute",
          left: "3.125vw",
          top: "clamp(30px, 5.56vh, 60px)",
          width: "clamp(260px, 51.7vw, 993px)",
          fontFamily: font,
          fontWeight: 400,
          fontSize: "clamp(32px, 5.208vw, 100px)",
          lineHeight: 0.9,
          letterSpacing: "-0.035em",
          color: "#ffffff",
          margin: 0,
        }}
      >
        {"Подбираем "}
        <span style={{ color: "#ff00e6" }}>новинки</span>
        {" для запуска"}
      </p>

      {/* Subtitle — Figma: left:60 top:282 font:45px tracking:-1.575px w:770 */}
      <p
        style={{
          position: "absolute",
          left: "3.125vw",
          top: "clamp(110px, 26.11vh, 282px)",
          width: "clamp(200px, 40.1vw, 770px)",
          fontFamily: font,
          fontWeight: 400,
          fontSize: "clamp(15px, 2.34vw, 45px)",
          lineHeight: 1,
          letterSpacing: "-0.035em",
          color: "#ffffff",
          margin: 0,
        }}
      >
        Получаете презентацию с 3 товарами: анализ ниши, конкуренты, расчет юнит-экономики, оценка рисков, пошаговый план запуска
      </p>

      {/* "Что делаем:" list — Figma: left:60 top:795 font:35px opacity:0.5 tracking:-1.225px */}
      <div
        style={{
          position: "absolute",
          left: "3.125vw",
          top: "clamp(460px, 73.61vh, 795px)",
          fontFamily: font,
          fontWeight: 400,
          fontSize: "clamp(13px, 1.823vw, 35px)",
          lineHeight: 1.2,
          letterSpacing: "-0.035em",
          color: "#ffffff",
          opacity: 0.5,
        }}
      >
        <p style={{ margin: 0 }}>Что делаем:</p>
        <p style={{ margin: 0 }}>{"• Оцениваем спрос и конкуренцию"}</p>
        <p style={{ margin: 0 }}>{"• Считаем экономику и риски"}</p>
        <p style={{ margin: 0 }}>{"• Определяем потенциал прибыли"}</p>
        <p style={{ margin: 0 }}>{"• Даем стратегию запуска"}</p>
      </div>

      {/* Badge — Figma: left:calc(75%+59px) top:60, bg:rgba(69,69,69,0.3) blur:15px */}
      <div
        style={{
          position: "absolute",
          left: "calc(75% + 3.07vw)",
          top: "clamp(30px, 5.56vh, 60px)",
          display: "flex",
          alignItems: "center",
          padding: "clamp(8px, 1.11vh, 12px) clamp(10px, 0.83vw, 16px)",
          borderRadius: "300px",
          background: "rgba(69,69,69,0.3)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
        }}
      >
        <p
          style={{
            fontFamily: font,
            fontWeight: 400,
            fontSize: "clamp(10px, 1.302vw, 25px)",
            lineHeight: 1,
            letterSpacing: "-0.035em",
            color: "#ffffff",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            margin: 0,
          }}
        >
          подбор новинок
        </p>
      </div>
    </section>
  );
}

// Figma node: 2040:389 "Услуги — Подбор и развитие команды" — file MOHJ9F1OX9kaB0rKsCZm7i
function ServicesTeamSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
  const bullets = [
    "Определяем, кто реально нужен",
    "Разрабатываем портреты должностей",
    "Подбираем и собеседуем кандидатов",
    "Выстраиваем систему адаптации",
  ];
  return (
    <section style={{
      ...sectionStyle,
      minHeight: "max(100svh, 760px)",
      background: "linear-gradient(202.23deg, rgb(13,31,31) 15.55%, rgb(56,133,133) 99.342%)",
      overflow: "hidden",
    }}>
      {/* Heading — left:60 top:60 font:100px w:993px */}
      <p style={{
        position: "absolute",
        left: "3.125vw",
        top: "clamp(30px, 5.56vh, 60px)",
        width: "clamp(240px, 51.7vw, 993px)",
        fontFamily: font,
        fontWeight: 400,
        fontSize: "clamp(32px, 5.208vw, 100px)",
        lineHeight: 0.9,
        letterSpacing: "-0.035em",
        color: "#ffffff",
        margin: 0,
        zIndex: 2,
      }}>
        Найдем нужных людей
      </p>

      {/* Badge — left:1440 top:60 */}
      <div style={{
        position: "absolute",
        left: "clamp(900px, 75vw, 1440px)",
        top: "clamp(30px, 5.56vh, 60px)",
        display: "flex",
        alignItems: "center",
        padding: "clamp(8px, 1.11vh, 12px) clamp(10px, 0.83vw, 16px)",
        borderRadius: "300px",
        background: "rgba(69,69,69,0.3)",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        zIndex: 2,
      }}>
        <p style={{
          fontFamily: font,
          fontWeight: 400,
          fontSize: "clamp(10px, 1.302vw, 25px)",
          lineHeight: 1,
          letterSpacing: "-0.035em",
          color: "#ffffff",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          margin: 0,
        }}>
          подбор и развитие команды
        </p>
      </div>

      {/* Body text left — left:60 top:291 w:770px font:45px */}
      <p style={{
        position: "absolute",
        left: "3.125vw",
        top: "clamp(160px, 26.94vh, 291px)",
        width: "clamp(200px, 40.1vw, 770px)",
        fontFamily: font,
        fontWeight: 400,
        fontSize: "clamp(14px, 2.344vw, 45px)",
        lineHeight: 1,
        letterSpacing: "-0.035em",
        color: "#ffffff",
        margin: 0,
        zIndex: 2,
      }}>
        Вы получаете документ с рекомендациями: что исправить в первую очередь, какой рост это даст в цифрах, план внедрения на 30 дней
      </p>

      {/* Bullet list right — left:970 top:291 opacity:50% font:45px */}
      <div style={{
        position: "absolute",
        left: "clamp(360px, 50.52vw, 970px)",
        top: "clamp(160px, 26.94vh, 291px)",
        display: "flex",
        flexDirection: "column",
        gap: 0,
        opacity: 0.5,
        zIndex: 2,
      }}>
        {bullets.map((text, i) => (
          <p key={i} style={{
            fontFamily: font,
            fontWeight: 400,
            fontSize: "clamp(14px, 2.344vw, 45px)",
            lineHeight: 1,
            letterSpacing: "-0.035em",
            color: "#ffffff",
            margin: 0,
            whiteSpace: "nowrap",
          }}>
            • {text}
          </p>
        ))}
      </div>

      {/* Radar — left:12 top:573 w:1896 h:1891 flipped vertically */}
      <div style={{
        position: "absolute",
        left: "0.625vw",
        top: "clamp(320px, 53.06vh, 573px)",
        width: "98.75vw",
        height: "175.09vh",
        transform: "scaleY(-1)",
        zIndex: 1,
        pointerEvents: "none",
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src={TEAM_RADAR_IMG} style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }} />
      </div>

      {/* Gradient overlay — same container as radar, image in top half (bottom:50%) */}
      <div style={{
        position: "absolute",
        left: "0.677vw",
        top: "clamp(320px, 53.06vh, 573px)",
        width: "98.75vw",
        height: "175.09vh",
        zIndex: 2,
        pointerEvents: "none",
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: "50%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src={TEAM_GRADIENT_IMG} style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }} />
        </div>
      </div>

      {/* Dot 1 — left:444 top:850 size:67px */}
      <div style={{ position: "absolute", left: "23.125vw", top: "78.7vh", width: "clamp(30px, 3.49vw, 67px)", height: "clamp(30px, 3.49vw, 67px)", zIndex: 3, pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: "-74.63%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src={TEAM_DOT1_IMG} style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }} />
        </div>
      </div>

      {/* Dot 2 — left:797 top:848 size:67px */}
      <div style={{ position: "absolute", left: "41.51vw", top: "78.52vh", width: "clamp(30px, 3.49vw, 67px)", height: "clamp(30px, 3.49vw, 67px)", zIndex: 3, pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: "-74.63%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src={TEAM_DOT1_IMG} style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }} />
        </div>
      </div>

      {/* Dot 3 — left:1027 top:696 size:67px */}
      <div style={{ position: "absolute", left: "53.49vw", top: "64.44vh", width: "clamp(30px, 3.49vw, 67px)", height: "clamp(30px, 3.49vw, 67px)", zIndex: 3, pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: "-74.63%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src={TEAM_DOT2_IMG} style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }} />
        </div>
      </div>
    </section>
  );
}

// Figma node: 2040:411 "Услуги — Постоянная работа с командой"
function ServicesHrTeamSection() {
  return (
    <section
      style={{
        ...sectionStyle,
        backgroundColor: "#ffffff",
        minHeight: "max(100svh, 720px)",
      }}
    >
      {/* Heading */}
      <p
        style={{
          position: "absolute",
          left: "3.125vw",
          top: "5.556vh",
          fontFamily: "'Helvetica Neue', sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "clamp(36px, 5.208vw, 100px)",
          lineHeight: 0.9,
          letterSpacing: "clamp(-1.5px, -0.182vw, -3.5px)",
          color: "#290c26",
          width: "51.719vw",
          margin: 0,
        }}
      >
        Постоянная работа с командой
      </p>

      {/* Badge "HR-сопровождение" */}
      <div
        style={{
          position: "absolute",
          left: "calc(75% + 3.073vw)",
          top: "5.556vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.111vh 0.833vw",
          background: "#ececec",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          borderRadius: "300px",
          whiteSpace: "nowrap",
        }}
      >
        <span
          style={{
            fontFamily: "'Helvetica Neue', sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "clamp(13px, 1.302vw, 25px)",
            lineHeight: 1,
            letterSpacing: "clamp(-0.4px, -0.0456vw, -0.875px)",
            color: "#290c26",
            textTransform: "uppercase",
          }}
        >
          HR-сопровождение
        </span>
      </div>

      {/* Graph */}
      <div
        style={{
          position: "absolute",
          left: "0.156vw",
          top: "30.185vh",
          width: "99.844vw",
          height: "69.815vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "-0.25% 0 -0.11% 0",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src={HRTEAM_GRAPH_IMG}
            style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }}
          />
        </div>

      </div>

      {/* Large horizontal dotted line (rotated -90deg image) */}
      <div
        style={{
          position: "absolute",
          left: "-11.563vw",
          top: "33.519vh",
          width: "107.760vw",
          height: "66.389vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        <div style={{ transform: "rotate(-90deg)", flexShrink: 0 }}>
          <div
            style={{
              position: "relative",
              width: "37.344vw",
              height: "191.574vh",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              src={HRTEAM_DOTLINE_IMG}
              style={{ position: "absolute", display: "block", width: "100%", height: "100%", maxWidth: "none" }}
            />
          </div>
        </div>
      </div>

      {/* Vertical dotted line 1 — left:269px top:685px */}
      <div
        style={{
          position: "absolute",
          left: "14.010vw",
          top: "63.426vh",
          width: "37.344vw",
          height: "1.667vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 3,
        }}
      >
        <div style={{ transform: "rotate(-90deg)", flexShrink: 0 }}>
          <div style={{ position: "relative", width: "0.938vw", height: "37.344vw" }}>
            <div style={{ position: "absolute", inset: "-0.28% -27.78% -0.7% -27.78%" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                src={HRTEAM_DOTLINE1_IMG}
                style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Vertical dotted line 2 — left:calc(25%+254px) top:503px */}
      <div
        style={{
          position: "absolute",
          left: "calc(25% + 13.229vw)",
          top: "46.574vh",
          width: "37.344vw",
          height: "1.667vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 3,
        }}
      >
        <div style={{ transform: "rotate(-90deg)", flexShrink: 0 }}>
          <div style={{ position: "relative", width: "0.938vw", height: "37.344vw" }}>
            <div style={{ position: "absolute", inset: "-0.28% -27.78% -0.7% -27.78%" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                src={HRTEAM_DOTLINE2_IMG}
                style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Vertical dotted line 3 — left:calc(50%+179px) top:344px */}
      <div
        style={{
          position: "absolute",
          left: "calc(50% + 9.323vw)",
          top: "31.852vh",
          width: "37.344vw",
          height: "1.667vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 3,
        }}
      >
        <div style={{ transform: "rotate(-90deg)", flexShrink: 0 }}>
          <div style={{ position: "relative", width: "0.938vw", height: "37.344vw" }}>
            <div style={{ position: "absolute", inset: "-0.28% -27.78% -0.7% -27.78%" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                src={HRTEAM_DOTLINE1_IMG}
                style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Text label 1 — "Разрабатываем систему адаптации" left:calc(50%+38px) top:427px */}
      <p
        style={{
          position: "absolute",
          left: "calc(50% + 1.979vw)",
          top: "39.537vh",
          fontFamily: "'Helvetica Neue', sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "clamp(16px, 1.823vw, 35px)",
          lineHeight: 1,
          letterSpacing: "clamp(-0.5px, -0.0638vw, -1.225px)",
          color: "#290c26",
          width: "18.802vw",
          margin: 0,
          zIndex: 4,
        }}
      >
        Разрабатываем систему адаптации
      </p>

      {/* Text label 2 — "Сильная команда, которая растет вместе с бизнесом" left:calc(75%-32px) top:231px */}
      <p
        style={{
          position: "absolute",
          left: "calc(75% - 1.667vw)",
          top: "21.389vh",
          fontFamily: "'Helvetica Neue', sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "clamp(16px, 1.823vw, 35px)",
          lineHeight: 1,
          letterSpacing: "clamp(-0.5px, -0.0638vw, -1.225px)",
          color: "#290c26",
          width: "18.802vw",
          margin: 0,
          zIndex: 4,
        }}
      >
        Сильная команда, которая растет вместе с бизнесом
      </p>

      {/* Text label 3 — "Подбираем новых сотрудников по мере роста" left:60px top:766px */}
      <p
        style={{
          position: "absolute",
          left: "3.125vw",
          top: "70.926vh",
          fontFamily: "'Helvetica Neue', sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "clamp(16px, 1.823vw, 35px)",
          lineHeight: 1,
          letterSpacing: "clamp(-0.5px, -0.0638vw, -1.225px)",
          color: "#290c26",
          width: "21.719vw",
          margin: 0,
          zIndex: 4,
        }}
      >
        Подбираем новых сотрудников по мере роста
      </p>

      {/* Text label 4 — "Развиваем действующую команду" left:calc(25%+64px) top:600px */}
      <p
        style={{
          position: "absolute",
          left: "calc(25% + 3.333vw)",
          top: "55.556vh",
          fontFamily: "'Helvetica Neue', sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "clamp(16px, 1.823vw, 35px)",
          lineHeight: 1,
          letterSpacing: "clamp(-0.5px, -0.0638vw, -1.225px)",
          color: "#290c26",
          width: "18.802vw",
          margin: 0,
          zIndex: 4,
        }}
      >
        Развиваем действующую команду
      </p>
    </section>
  );
}

function ContactsSection() {
  const font = "Helvetica Neue, Helvetica, Arial, sans-serif";

  const contacts = [
    { label: "Телеграм", value: "@prostranstvo_mp", href: "https://t.me/prostranstvo_mp" },
    { label: "Почта", value: "hello@prostranstvo.ru", href: "mailto:hello@prostranstvo.ru" },
    { label: "Тг-канал", value: "@prostranstvo_channel", href: "https://t.me/prostranstvo_channel" },
    { label: "Телефон", value: "+7 (999) 000-00-00", href: "tel:+79990000000" },
  ];

  return (
    <section style={{
      ...sectionStyle,
      minHeight: "max(100svh, 720px)",
      background: "linear-gradient(160deg, #071518 0%, #0D2526 60%, #071518 100%)",
      display: "flex",
      alignItems: "center",
    }}>
      {/* Teal glow top-left */}
      <div style={{ position: "absolute", width: "60vw", height: "60vw", left: "-20vw", top: "-20vw", background: "radial-gradient(circle, rgba(10,186,181,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />
      {/* Teal glow bottom-right */}
      <div style={{ position: "absolute", width: "50vw", height: "50vw", right: "-10vw", bottom: "-15vw", background: "radial-gradient(circle, rgba(10,186,181,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{
        position: "relative",
        zIndex: 1,
        width: "min(1400px, calc(100vw - 80px))",
        margin: "0 auto",
        paddingTop: "clamp(60px, 8vh, 100px)",
        paddingBottom: "clamp(60px, 8vh, 100px)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        columnGap: "clamp(40px, 6vw, 120px)",
        alignItems: "center",
      }}>

        {/* Left: heading */}
        <div>
          <p style={{
            fontFamily: font,
            fontSize: "clamp(11px, 0.83vw, 16px)",
            color: "#0ABAB5",
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
            marginBottom: "clamp(16px, 2.5vh, 28px)",
            margin: "0 0 clamp(16px, 2.5vh, 28px) 0",
          }}>
            Контакты
          </p>
          <h2 style={{
            fontFamily: font,
            fontWeight: 400,
            fontSize: "clamp(36px, 4.17vw, 80px)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            color: "#ffffff",
            margin: "0 0 clamp(16px, 3vh, 32px) 0",
          }}>
            Свяжитесь с нами
          </h2>
          <p style={{
            fontFamily: font,
            fontWeight: 400,
            fontSize: "clamp(14px, 1.04vw, 20px)",
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.45)",
            margin: 0,
          }}>
            Ответим на вопросы, расскажем об условиях<br />работы и запишем на бесплатный разбор
          </p>
        </div>

        {/* Right: contacts + button */}
        <div style={{ display: "flex", flexDirection: "column" as const, gap: "clamp(24px, 4vh, 40px)" }}>

          {/* Contact list */}
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "clamp(16px, 2.5vh, 24px)" }}>
            {contacts.map(({ label, value, href }) => (
              <a key={label} href={href} style={{ display: "flex", alignItems: "center", gap: "clamp(14px, 1.25vw, 24px)", textDecoration: "none" }}>
                {/* Teal dot */}
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#0ABAB5", flexShrink: 0 }} />
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 2 }}>
                  <span style={{ fontFamily: font, fontSize: "clamp(10px, 0.73vw, 14px)", color: "rgba(255,255,255,0.35)", letterSpacing: "0.06em", textTransform: "uppercase" as const, lineHeight: 1 }}>
                    {label}
                  </span>
                  <span style={{ fontFamily: font, fontSize: "clamp(16px, 1.46vw, 28px)", color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    {value}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* CTA button */}
          <div style={{
            border: "1px solid rgba(10,186,181,0.4)",
            borderRadius: "clamp(12px, 1.25vw, 24px)",
            padding: "clamp(20px, 3vh, 36px) clamp(24px, 2.5vw, 48px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            background: "rgba(10,186,181,0.04)",
          }}>
            <div>
              <p style={{ fontFamily: font, fontWeight: 400, fontSize: "clamp(18px, 1.56vw, 30px)", letterSpacing: "-0.03em", color: "#ffffff", margin: "0 0 6px 0", lineHeight: 1.1 }}>
                Готовы начать?
              </p>
              <p style={{ fontFamily: font, fontSize: "clamp(12px, 0.83vw, 16px)", color: "rgba(255,255,255,0.4)", margin: 0, lineHeight: 1.4 }}>
                Бесплатный разбор кабинета за 30 минут
              </p>
            </div>
            <a href="/form" style={{
              fontFamily: font,
              fontSize: "clamp(13px, 0.94vw, 18px)",
              fontWeight: 400,
              color: "#071518",
              background: "#0ABAB5",
              border: "none",
              borderRadius: "clamp(8px, 0.83vw, 16px)",
              padding: "clamp(12px, 1.5vh, 18px) clamp(20px, 1.875vw, 36px)",
              cursor: "pointer",
              whiteSpace: "nowrap" as const,
              letterSpacing: "-0.02em",
              flexShrink: 0,
              textDecoration: "none",
              display: "inline-block",
            }}>
              Заполнить заявку
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}



function OrbitalSection() {
  return (
    <section style={{
      position: "relative",
      background: "linear-gradient(180deg, #071518 0%, #0a1f22 50%, #071518 100%)",
      padding: "clamp(60px, 10vh, 120px) 0",
      overflow: "hidden",
    }}>
      {/* dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(10,186,181,0.1) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        opacity: 0.4,
      }} />
      {/* title */}
      <div style={{ textAlign: "center", marginBottom: "clamp(40px,6vh,70px)", position: "relative", zIndex: 2 }}>
        <p style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: "clamp(10px,0.9vw,14px)", letterSpacing: "0.15em", textTransform: "uppercase", color: "#0ABAB5", marginBottom: "12px" }}>
          Наши кейсы
        </p>
        <h2 style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontWeight: 400, fontSize: "clamp(32px,4vw,80px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: "#ffffff", margin: 0 }}>
          Выберите кейс
        </h2>
      </div>
      <OrbitalCasesTimeline />
    </section>
  );
}

export default function Page() {
  return (
    <main style={{ position: "relative", width: "100%", backgroundColor: "#071518" }}>
      {/* Hero — без анимации, сразу виден */}
      <HeroSection />

      <FadeIn><GrowthModelSection /></FadeIn>
      <FadeIn><WhyChooseUsSection /></FadeIn>
      <FadeIn><CasesSection /></FadeIn>
      <FadeIn><OrbitalSection /></FadeIn>
      <FadeIn><CaseRevenueSection /></FadeIn>
      <FadeIn><CaseScreenshotSection /></FadeIn>
      <FadeIn><CaseSeasonalSection /></FadeIn>
      <FadeIn><CaseSeasonalScreenshotSection /></FadeIn>
      <FadeIn><CaseChairsSection /></FadeIn>
      <FadeIn><CaseChairsScreenshotSection /></FadeIn>
      <FadeIn><CaseChairsWbSection /></FadeIn>
      <FadeIn><Case1CIntroSection /></FadeIn>
      <FadeIn><Case1CStepsSection /></FadeIn>
      <FadeIn><CaseAIIntroSection /></FadeIn>
      <FadeIn><CaseAIStepsSection /></FadeIn>
      <FadeIn><CaseCRMIntroSection /></FadeIn>
      <FadeIn><CaseCRMStepsSection /></FadeIn>
      <FadeIn><CaseWarehouseBuildIntroSection /></FadeIn>
      <FadeIn><CaseWarehouseBuildScreenSection /></FadeIn>
      <FadeIn><ServicesSection /></FadeIn>
      <FadeIn><ServicesPodborSection /></FadeIn>
      <FadeIn><ServicesAuditSection /></FadeIn>
      <FadeIn><ServicesManagementSection /></FadeIn>
      <FadeIn><ServicesAiSection /></FadeIn>
      <FadeIn><ServicesAccountingSection /></FadeIn>
      <FadeIn><ServicesExternalSection /></FadeIn>
      <FadeIn><ServicesTeamSection /></FadeIn>
      <FadeIn><ServicesHrTeamSection /></FadeIn>
      <FadeIn><ContactsSection /></FadeIn>
    </main>
  );
}
