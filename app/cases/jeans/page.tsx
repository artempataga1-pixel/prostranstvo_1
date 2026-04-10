"use client";
import Link from "next/link";

const FONT = "Helvetica Neue, Helvetica, Arial, sans-serif";

const metrics = [
  { value: "+200%", label: "рост выручки" },
  { value: "1.5 мес", label: "до результата" },
  { value: "Ozon", label: "площадка" },
];

const steps = [
  "Провели полный аудит карточек товаров: фото, заголовки, описания, характеристики, SEO-теги",
  "Переработали контент: профессиональная съёмка, продающие описания, Rich-контент для каждой SKU",
  "Запустили автоматические и ручные рекламные кампании с оптимизацией ставок каждые 3 дня",
  "Выстроили стратегию управления ценами с учётом маржинальности и позиций в категории",
  "Настроили аналитику: ROAS, ДРР, CR карточки, конверсия в корзину и в заказ",
  "Масштабировали успешные гипотезы и отключили неэффективные рекламные инструменты",
];

export default function CaseJeansPage() {
  return (
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
          borderBottom: "1px solid rgba(10,186,181,0.15)",
          padding: "20px clamp(20px, 5vw, 80px)",
          display: "flex",
          alignItems: "center",
          gap: 24,
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: "#0ABAB5",
            textDecoration: "none",
            fontSize: 14,
            letterSpacing: "0.05em",
            transition: "opacity 0.2s",
          }}
        >
          ← Назад
        </Link>
        <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 14 }}>/</span>
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 14 }}>Кейсы</span>
        <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 14 }}>/</span>
        <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>Джинсы — Ozon</span>
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
            <div
              key={i}
              style={{
                padding: "clamp(20px, 3vh, 32px) 16px",
                background: "rgba(10,186,181,0.05)",
                border: "1px solid rgba(10,186,181,0.2)",
                borderRadius: 16,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  fontWeight: 700,
                  color: "#0ABAB5",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {m.value}
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em" }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* What was done */}
        <section style={{ marginBottom: "clamp(50px, 8vh, 100px)" }}>
          <h2
            style={{
              fontWeight: 400,
              fontSize: "clamp(24px, 3vw, 48px)",
              letterSpacing: "-0.03em",
              color: "#ffffff",
              marginBottom: "clamp(24px, 4vh, 40px)",
            }}
          >
            Что было сделано
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {steps.map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  padding: "20px 24px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "rgba(10,186,181,0.15)",
                    border: "1px solid rgba(10,186,181,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#0ABAB5",
                  }}
                >
                  {i + 1}
                </span>
                <p style={{ margin: 0, fontSize: "clamp(14px, 1.2vw, 16px)", color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Result */}
        <section
          style={{
            padding: "clamp(30px, 5vh, 60px)",
            background: "linear-gradient(135deg, rgba(10,186,181,0.08) 0%, rgba(10,186,181,0.03) 100%)",
            border: "1px solid rgba(10,186,181,0.25)",
            borderRadius: 20,
            marginBottom: "clamp(40px, 6vh, 80px)",
          }}
        >
          <h2
            style={{
              fontWeight: 400,
              fontSize: "clamp(22px, 2.5vw, 40px)",
              letterSpacing: "-0.03em",
              color: "#0ABAB5",
              marginBottom: 20,
            }}
          >
            Результат
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.3vw, 18px)",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            За 1.5 месяца работы выручка продавца выросла с 800 000 до 2 400 000 ₽ в месяц — прирост составил 200%. Доля рекламных расходов снизилась с 18% до 11% за счёт оптимизации кампаний. Органические позиции карточек поднялись в среднем на 40 мест в поисковой выдаче Ozon. Конверсия из просмотра в покупку выросла с 1.2% до 3.8%.
          </p>
        </section>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <Link
            href="/form"
            style={{
              display: "inline-block",
              padding: "clamp(14px, 2vh, 20px) clamp(30px, 4vw, 60px)",
              background: "linear-gradient(135deg, #0ABAB5, #076e6b)",
              borderRadius: 12,
              fontSize: "clamp(14px, 1.2vw, 18px)",
              fontWeight: 500,
              color: "#fff",
              textDecoration: "none",
              letterSpacing: "0.03em",
              boxShadow: "0 10px 40px rgba(10,186,181,0.3)",
              transition: "all 0.3s ease",
            }}
          >
            Получить такой же результат →
          </Link>
        </div>
      </main>
    </div>
  );
}
