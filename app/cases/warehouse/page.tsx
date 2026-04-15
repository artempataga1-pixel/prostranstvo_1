import Link from "next/link";
import Image from "next/image";
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

const WAREHOUSE_STEPS = [
  "Формирование плана помещения",
  "Распределение товара по АБС в секции хранения",
  "Набор и обучение команды",
  "Формирование и оптимизация отчётности товарной и финансовой",
  "Управление командой и вывод склада на самоокупаемость",
];

export default function CaseWarehousePage() {
  return (
    <>
      {/* Sticky header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          borderBottom: "1px solid rgba(16,185,129,0.15)",
          padding: "20px clamp(20px, 5vw, 80px)",
          display: "flex",
          alignItems: "center",
          gap: 24,
          background: "rgba(16,185,129,0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          fontFamily: FONT,
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
        <span style={{ color: "rgba(7,21,24,0.8)", fontSize: 14 }}>Склад ФФ</span>
      </header>

      {/* Intro block */}
      <div
        style={{
          background: "linear-gradient(180deg, #071518 0%, #0a1f22 50%, #071518 100%)",
          fontFamily: FONT,
          color: "#fff",
        }}
      >
        <main style={{ padding: "clamp(40px, 8vh, 100px) clamp(20px, 5vw, 80px)", maxWidth: 1100, margin: "0 auto" }}>
          <p
            style={{
              fontSize: "clamp(10px, 0.9vw, 13px)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#10b981",
              marginBottom: 16,
            }}
          >
            Фулфилмент · Строительство с нуля
          </p>
          <h1
            style={{
              fontWeight: 400,
              fontSize: "clamp(40px, 6vw, 96px)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              margin: "0 0 clamp(24px, 4vh, 48px)",
              background: "linear-gradient(135deg, #ffffff 0%, #10b981 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Склад ФФ
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
            Строительство и запуск фулфилмент-склада площадью 1 000 кв.м. для крупного бренда: 200 000+ единиц товара, профессиональное АВС-зонирование, WMS-система и обученная команда.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "clamp(12px, 2vw, 24px)",
              maxWidth: 600,
            }}
          >
            {[
              { value: 200, suffix: "к+", label: "единиц товара" },
              { value: 1000, suffix: " м²", label: "площадь склада" },
              { value: 5, suffix: "", label: "этапов запуска" },
            ].map((m, i) => (
              <GlowCard key={i} glowColor="teal" style={{ padding: "clamp(20px, 3vh, 32px) 16px", background: "rgba(16,185,129,0.05)", borderRadius: 16, textAlign: "center" as const }}>
                <div className="card-num" style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#10b981", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 8 }}>
                  <CountUp value={m.value} suffix={m.suffix} duration={2200} />
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em" }}>{m.label}</div>
              </GlowCard>
            ))}
          </div>
        </main>
      </div>

      {/* CaseWarehouseSection */}
      <section
        style={{
          ...sectionStyle,
          ...deferredSectionStyle,
          minHeight: "max(100svh, 780px)",
          background: "linear-gradient(156deg, #071518 0%, #0a2425 46%, #0d4e4f 120%)",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(54% 72% at 14% 86%, rgba(57, 198, 193, 0.34) 0%, rgba(57, 198, 193, 0.16) 38%, rgba(57, 198, 193, 0) 74%), radial-gradient(38% 52% at 84% 18%, rgba(9, 50, 51, 0.52) 0%, rgba(9, 50, 51, 0) 72%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "clamp(30px, 5.56vh, 60px)", right: "3.125vw", display: "flex", alignItems: "center", padding: "clamp(8px, 1.11vh, 12px) clamp(10px, 0.83vw, 16px)", borderRadius: "300px", background: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255, 255, 255, 0.12)", backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)", zIndex: 2 }}>
          <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(10px, 1.302vw, 25px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", textTransform: "uppercase", whiteSpace: "nowrap", margin: 0 }}>
            {"кейсы  •  склад фф"}
          </p>
        </div>
        <div
          className="warehouse-section-grid"
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
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "100%" }}>
            <div style={{ maxWidth: "min(58vw, 980px)" }}>
              <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(16px, 1.77vw, 34px)", lineHeight: 1, letterSpacing: "-0.035em", color: "rgba(255,255,255,0.58)", margin: "0 0 clamp(22px, 3.7vh, 40px) 0" }}>
                Запуск складской инфраструктуры под fullfilment-модель
              </p>
              <h2 style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(44px, 5.2vw, 100px)", lineHeight: 0.92, letterSpacing: "-0.045em", color: "#ffffff", margin: 0, whiteSpace: "pre-line" }}>
                {"Построили склад "}
                <span style={{ color: "#6ef7ef" }}>ФФ</span>
                {"\nдля крупного бренда"}
              </h2>
              <p style={{ maxWidth: "min(51vw, 860px)", fontFamily: FONT, fontWeight: 400, fontSize: "clamp(16px, 1.875vw, 36px)", lineHeight: 1.18, letterSpacing: "-0.035em", color: "#ffffff", opacity: 0.56, margin: "clamp(24px, 4.44vh, 48px) 0 0 0", whiteSpace: "pre-line" }}>
                {"Сформировали полный цикл приёмки, хранения, упаковки и\nотгрузки товара на складе. Запустили операционную модель с нуля\nи вывели объект на самоокупаемость."}
              </p>
            </div>
            <div className="warehouse-stats-inner" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(240px, 1fr))", gap: "clamp(14px, 1.3vw, 22px)", alignSelf: "stretch", marginTop: "clamp(36px, 7vh, 76px)" }}>
              {[
                { value: 200, suffix: " тыс.+", label: "единиц товара в контуре склада" },
                { value: 1000, suffix: " м²", label: "складской площади под запуск" },
              ].map((item) => (
                <GlowCard key={item.label} glowColor="teal" style={{ background: "rgba(255,255,255,0.07)", borderRadius: "28px", padding: "clamp(20px, 3.5vh, 38px) clamp(18px, 1.5vw, 28px)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)" }}>
                  <p className="card-num" style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(24px, 3.33vw, 64px)", lineHeight: 0.94, letterSpacing: "-0.045em", color: "#6ef7ef", margin: 0 }}>
                    <CountUp value={item.value} suffix={item.suffix} duration={2200} />
                  </p>
                  <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(13px, 1.15vw, 22px)", lineHeight: 1.1, letterSpacing: "-0.035em", color: "#ffffff", opacity: 0.48, margin: "clamp(10px, 1.85vh, 20px) 0 0 0" }}>{item.label}</p>
                </GlowCard>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "clamp(16px, 1.6vw, 26px)" }}>
            <GlowCard glowColor="teal" style={{ background: "linear-gradient(180deg, rgba(10, 186, 181, 0.24) 0%, rgba(10, 186, 181, 0.12) 100%)", borderRadius: "30px", padding: "clamp(22px, 4vh, 42px)" }}>
              <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(13px, 1.15vw, 22px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", opacity: 0.55, margin: 0, textTransform: "uppercase" }}>
                Операционный результат
              </p>
              <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(24px, 2.8vw, 54px)", lineHeight: 1, letterSpacing: "-0.04em", color: "#ffffff", margin: "clamp(16px, 2.22vh, 24px) 0 0 0" }}>
                Полный цикл:<br />приёмка, хранение,<br />упаковка и отгрузка
              </p>
            </GlowCard>
            <GlowCard glowColor="teal" style={{ background: "rgba(8, 19, 20, 0.58)", borderRadius: "30px", padding: "clamp(22px, 3.7vh, 40px)", display: "flex", flexDirection: "column", gap: "clamp(14px, 1.85vh, 20px)" }}>
              <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(22px, 2.45vw, 47px)", lineHeight: 0.98, letterSpacing: "-0.04em", color: "#ffffff", margin: 0 }}>
                Вывели склад на<br />самоокупаемость
              </p>
              <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(13px, 1.15vw, 22px)", lineHeight: 1.16, letterSpacing: "-0.035em", color: "#ffffff", opacity: 0.5, margin: 0 }}>
                Управление процессами, людьми и финансовой моделью перевели в предсказуемый операционный контур.
              </p>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* CaseWarehousePlanSection */}
      <section
        style={{
          ...sectionStyle,
          ...deferredSectionStyle,
          minHeight: "max(100svh, 820px)",
          background: "linear-gradient(180deg, #071518 0%, #0b2021 100%)",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(48% 70% at 84% 76%, rgba(10, 186, 181, 0.14) 0%, rgba(10, 186, 181, 0) 72%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: "2.81vw", top: "5.09vh", width: "clamp(50px, 6.09vw, 117px)", height: "clamp(26px, 5.56vh, 60px)", pointerEvents: "none" }}>
          <InfinityMark />
        </div>
        <div style={{ position: "absolute", top: "clamp(30px, 5.56vh, 60px)", right: "3.125vw", display: "flex", alignItems: "center", padding: "clamp(8px, 1.11vh, 12px) clamp(10px, 0.83vw, 16px)", borderRadius: "300px", background: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)", zIndex: 2 }}>
          <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(10px, 1.302vw, 25px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#ffffff", textTransform: "uppercase", whiteSpace: "nowrap", margin: 0 }}>
            {"кейсы  •  операционный запуск"}
          </p>
        </div>
        <div
          className="warehouse-plan-section-grid"
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
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(16px, 2vh, 22px)" }}>
            <GlowCard glowColor="teal" style={{ background: "#ffffff", borderRadius: "30px", padding: "clamp(10px, 1vw, 16px)", boxShadow: "0 30px 80px rgba(0, 0, 0, 0.18)" }}>
              <div style={{ position: "relative", width: "100%", height: "clamp(340px, 64vh, 690px)", borderRadius: "22px", background: "#ffffff", overflow: "hidden" }}>
                <Image alt="План склада" src="/warehouse-plan.jpg" fill sizes="(max-width: 768px) 100vw, 44vw" decoding="async" style={{ objectFit: "contain", objectPosition: "center" }} />
              </div>
            </GlowCard>
            <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(13px, 1.15vw, 22px)", lineHeight: 1.15, letterSpacing: "-0.035em", color: "#ffffff", opacity: 0.5, margin: 0 }}>
              План помещения, АБС-распределение зон хранения и логика движения товарного потока по складу.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(14px, 1.48vh, 16px)" }}>
            <div style={{ marginBottom: "clamp(10px, 1.85vh, 20px)" }}>
              <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(14px, 1.15vw, 22px)", lineHeight: 1, letterSpacing: "-0.035em", color: "#6ef7ef", textTransform: "uppercase", margin: 0 }}>
                Что сделали
              </p>
              <h3 style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(30px, 3.125vw, 60px)", lineHeight: 0.94, letterSpacing: "-0.04em", color: "#ffffff", margin: "clamp(12px, 1.85vh, 20px) 0 0 0" }}>
                Пять этапов запуска склада
              </h3>
            </div>
            {WAREHOUSE_STEPS.map((step, index) => (
              <GlowCard key={step} glowColor="teal" style={{ display: "grid", gridTemplateColumns: "clamp(54px, 3.7vw, 72px) minmax(0, 1fr)", gap: "clamp(14px, 1vw, 18px)", alignItems: "center", padding: "clamp(16px, 2.22vh, 24px)", borderRadius: "24px", background: "rgba(255,255,255,0.06)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
                <div style={{ width: "clamp(54px, 3.7vw, 72px)", height: "clamp(54px, 3.7vw, 72px)", borderRadius: "20px", background: "linear-gradient(180deg, rgba(10,186,181,0.34) 0%, rgba(10,186,181,0.12) 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: FONT, fontWeight: 400, fontSize: "clamp(18px, 1.67vw, 32px)", lineHeight: 1, letterSpacing: "-0.04em", color: "#ffffff" }}>
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "clamp(15px, 1.35vw, 26px)", lineHeight: 1.08, letterSpacing: "-0.035em", color: "#ffffff", margin: 0 }}>
                  {step}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Result Metrics */}
      <section style={{ background: "#071518", padding: "clamp(60px, 10vh, 120px) clamp(20px, 5vw, 80px)", fontFamily: FONT }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* Result metrics */}
          <div style={{ textAlign: "center", marginBottom: "clamp(40px, 7vh, 80px)" }}>
            <p style={{ fontSize: "clamp(10px, 0.9vw, 13px)", letterSpacing: "0.15em", textTransform: "uppercase", color: "#10b981", marginBottom: 16 }}>
              Результат
            </p>
            <h2 style={{ fontWeight: 400, fontSize: "clamp(28px, 3vw, 56px)", color: "#fff", letterSpacing: "-0.035em", marginBottom: 12 }}>
              Склад запущен и работает
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(14px, 1.3vw, 18px)", marginBottom: 0, maxWidth: 600, margin: "0 auto" }}>
              Первая партия товара принята через 6 недель после начала работ
            </p>
          </div>

          <div className="warehouse-result-metrics" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "clamp(12px, 2vw, 24px)", marginBottom: "clamp(50px, 8vh, 80px)" }}>
            {[
              { value: 200, suffix: "к+", label: "единиц товара" },
              { value: 2000, suffix: "", label: "отправлений в сутки" },
              { value: 4, suffix: " мес", label: "до самоокупаемости" },
              { value: 0.1, suffix: "%", label: "ошибок сборки", decimals: 1 },
            ].map((m, i) => (
              <GlowCard key={i} glowColor="teal" style={{ padding: "clamp(20px, 3vh, 36px) 16px", background: "rgba(16,185,129,0.05)", borderRadius: 20, textAlign: "center" }}>
                <p className="card-num" style={{ fontFamily: FONT, fontSize: "clamp(28px, 3.5vw, 52px)", fontWeight: 700, color: "#10b981", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 8, marginTop: 0 }}>
                  <CountUp value={m.value} suffix={m.suffix} decimals={m.decimals ?? 0} duration={2200} />
                </p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em", margin: 0 }}>{m.label}</p>
              </GlowCard>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <h3 style={{ fontWeight: 400, fontSize: "clamp(22px, 2.5vw, 44px)", color: "#fff", letterSpacing: "-0.035em", marginBottom: 12 }}>
              Хотите такой же результат?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(14px, 1.3vw, 20px)", marginBottom: 36 }}>
              Оставьте заявку — разберём ваш бизнес и предложим план роста
            </p>
            <Link href="/form" className="case-cta-btn" style={{ display: "inline-block", padding: "16px 48px", background: "#0ABAB5", borderRadius: 12, color: "#071518", fontFamily: FONT, fontSize: 16, fontWeight: 500, textDecoration: "none", letterSpacing: "-0.02em", transition: "box-shadow 0.3s ease, transform 0.2s ease" }}>
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
