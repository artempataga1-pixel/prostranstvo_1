"use client";
import Link from "next/link";

const FONT = "Helvetica Neue, Helvetica, Arial, sans-serif";

const metrics = [
  { value: "13", label: "этапов внедрения" },
  { value: "100%", label: "цифровизация" },
  { value: "1 нед", label: "обучение команды" },
];

const steps = [
  "Провели аудит текущих складских процессов: движение товара, приёмка, отгрузка, инвентаризация, документооборот",
  "Разработали техническое задание на внедрение 1С УНФ с учётом специфики фулфилмент-центра и интеграций с маркетплейсами",
  "Настроили 1С УНФ: справочники, права доступа, рабочие места, шаблоны документов и регламентные операции",
  "Интегрировали терминалы сбора данных (ТСД): приёмка, размещение, отбор и инвентаризация через сканирование ШК",
  "Разработали 13 бизнес-процессов в системе: от приёмки до отгрузки и возвратов с полной трассировкой товара",
  "Провели обучение команды: кладовщики, менеджеры, руководители — за 1 неделю все сотрудники работали в системе",
];

export default function CaseAutomation1CPage() {
  return (
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
          }}
        >
          ← Назад
        </Link>
        <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 14 }}>/</span>
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 14 }}>Кейсы</span>
        <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 14 }}>/</span>
        <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>1С УНФ + ТСД</span>
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
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em" }}>{m.label}</div>
            </div>
          ))}
        </div>

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
            Склад перешёл от бумажного учёта к полностью цифровому за 3 недели. Скорость обработки заказов выросла в 2.5 раза. Ошибки при сборке заказов снизились с 4.2% до 0.3%. Инвентаризация, которая ранее занимала 3 дня, теперь проводится за 4 часа. Команда из 15 человек освоила систему за 1 неделю обучения.
          </p>
        </section>

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
            }}
          >
            Получить такой же результат →
          </Link>
        </div>
      </main>
    </div>
  );
}
