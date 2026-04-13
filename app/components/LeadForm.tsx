"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const MARKETPLACES = [
  "Wildberries",
  "Ozon",
  "Яндекс Маркет",
  "AliExpress",
  "Несколько площадок",
  "Другое",
];

const REVENUES = [
  "до 500 тыс. ₽/мес",
  "500 тыс. — 3 млн ₽/мес",
  "3 — 10 млн ₽/мес",
  "10 — 30 млн ₽/мес",
  "от 30 млн ₽/мес",
];

const GLOW_CSS = `
  .lead-input {
    transition: border-color 0.2s, box-shadow 0.2s !important;
  }
  .lead-input:hover {
    border-color: rgba(10,186,181,0.45) !important;
    box-shadow: 0 0 0 1px rgba(10,186,181,0.2), 0 0 12px 2px rgba(10,186,181,0.12) !important;
  }
  .lead-input:focus {
    border-color: rgba(10,186,181,0.7) !important;
    box-shadow: 0 0 0 1px rgba(10,186,181,0.35), 0 0 18px 4px rgba(10,186,181,0.18) !important;
  }
  .lead-rev-btn:hover {
    border-color: rgba(10,186,181,0.45) !important;
    box-shadow: 0 0 0 1px rgba(10,186,181,0.2), 0 0 10px 2px rgba(10,186,181,0.1) !important;
    color: rgba(255,255,255,0.85) !important;
  }
`;

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "12px",
  padding: "16px 20px",
  color: "#ffffff",
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  fontSize: "clamp(14px, 1.04vw, 20px)",
  lineHeight: 1,
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
  WebkitAppearance: "none",
  appearance: "none",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
  fontSize: "clamp(11px, 0.78vw, 15px)",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "8px",
  letterSpacing: "-0.02em",
};

export default function LeadForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    telegram: "",
    marketplace: "",
    revenue: "",
    task: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [agreed, setAgreed] = useState(false);

  function set(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        const data = await res.json();
        router.push(`/form/success?order=${data.orderNum ?? ""}`);
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error ?? `Ошибка ${res.status}`);
        setStatus("error");
      }
    } catch {
      setErrorMsg("Нет соединения. Проверьте интернет и попробуйте снова.");
      setStatus("error");
    }
  }


  return (
    <form onSubmit={submit} style={{ width: "100%" }}>
      <style>{GLOW_CSS}</style>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "clamp(12px, 1.25vw, 20px)",
        }}
      >
        {/* Имя */}
        <div>
          <label style={labelStyle}>Имя</label>
          <input
            className="lead-input"
            style={inputStyle}
            type="text"
            placeholder="Александр"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            required
          />
        </div>

        {/* Телефон */}
        <div>
          <label style={labelStyle}>Телефон</label>
          <input
            className="lead-input"
            style={inputStyle}
            type="tel"
            placeholder="+7 999 000 00 00"
            pattern="[\d\s\+\-\(\)]{7,20}"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            required
          />
        </div>

        {/* Telegram */}
        <div>
          <label style={labelStyle}>Telegram</label>
          <input
            className="lead-input"
            style={inputStyle}
            type="text"
            placeholder="@username"
            value={form.telegram}
            onChange={(e) => set("telegram", e.target.value)}
          />
        </div>

        {/* Маркетплейс */}
        <div>
          <label style={labelStyle}>Маркетплейс</label>
          <select
            className="lead-input"
            style={{ ...inputStyle, cursor: "pointer", color: form.marketplace ? "#fff" : "rgba(255,255,255,0.35)" }}
            value={form.marketplace}
            onChange={(e) => set("marketplace", e.target.value)}
            required
          >
            <option value="" disabled style={{ background: "#0D2526" }}>Выберите площадку</option>
            {MARKETPLACES.map((m) => (
              <option key={m} value={m} style={{ background: "#0D2526", color: "#fff" }}>
                {m}
              </option>
            ))}
          </select>
        </div>

        {/* Оборот */}
        <div style={{ gridColumn: "1 / -1" }}>
          <label style={labelStyle}>Ежемесячный оборот</label>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {REVENUES.map((r) => (
              <button
                key={r}
                type="button"
                className="lead-rev-btn"
                onClick={() => set("revenue", r)}
                style={{
                  padding: "10px 16px",
                  borderRadius: "8px",
                  border: form.revenue === r ? "1px solid #0ABAB5" : "1px solid rgba(255,255,255,0.12)",
                  background: form.revenue === r ? "rgba(10,186,181,0.15)" : "rgba(255,255,255,0.04)",
                  color: form.revenue === r ? "#0ABAB5" : "rgba(255,255,255,0.55)",
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  fontSize: "clamp(11px, 0.78vw, 14px)",
                  cursor: "pointer",
                  transition: "all 0.15s",
                  whiteSpace: "nowrap",
                }}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Задача */}
        <div style={{ gridColumn: "1 / -1" }}>
          <label style={labelStyle}>Ваша задача</label>
          <textarea
            className="lead-input"
            style={{
              ...inputStyle,
              height: "clamp(80px, 10vh, 120px)",
              resize: "none",
            }}
            placeholder="Расскажите, что хотите улучшить: рост оборота, снижение затрат, выход на новые площадки..."
            value={form.task}
            onChange={(e) => set("task", e.target.value)}
          />
        </div>
      </div>

      {/* Checkbox consent */}
      <label style={{
        display: "flex", alignItems: "flex-start", gap: "10px",
        marginTop: "clamp(16px, 2.5vh, 28px)",
        cursor: "pointer",
      }}>
        <span style={{ position: "relative", flexShrink: 0, marginTop: "1px" }}>
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
          />
          <span style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "18px", height: "18px",
            borderRadius: "5px",
            border: agreed ? "1.5px solid #0ABAB5" : "1.5px solid rgba(255,255,255,0.25)",
            background: agreed ? "rgba(10,186,181,0.15)" : "rgba(255,255,255,0.04)",
            transition: "border-color 0.15s, background 0.15s",
          }}>
            {agreed && (
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M1 4L3.5 6.5L9 1" stroke="#0ABAB5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </span>
        </span>
        <span style={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontSize: "clamp(10px, 0.72vw, 13px)",
          color: "rgba(255,255,255,0.35)",
          lineHeight: 1.5,
          letterSpacing: "-0.01em",
        }}>
          Я принимаю условия{" "}
          <a href="/oferta" target="_blank" rel="noopener noreferrer"
            style={{ color: "rgba(10,186,181,0.7)", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0ABAB5")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(10,186,181,0.7)")}
            onClick={(e) => e.stopPropagation()}
          >публичной оферты</a>{" "}
          и соглашаюсь с{" "}
          <a href="/privacy" target="_blank" rel="noopener noreferrer"
            style={{ color: "rgba(10,186,181,0.7)", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0ABAB5")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(10,186,181,0.7)")}
            onClick={(e) => e.stopPropagation()}
          >политикой конфиденциальности</a>
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "loading" || !agreed}
        style={{
          marginTop: "clamp(12px, 1.8vh, 20px)",
          width: "100%",
          padding: "clamp(16px, 2vh, 22px) 32px",
          borderRadius: "12px",
          background: !agreed ? "rgba(10,186,181,0.25)" : status === "loading" ? "rgba(10,186,181,0.5)" : "#0ABAB5",
          border: "none",
          color: !agreed ? "rgba(255,255,255,0.4)" : "#071518",
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontWeight: 500,
          fontSize: "clamp(14px, 1.15vw, 22px)",
          letterSpacing: "-0.02em",
          cursor: !agreed || status === "loading" ? "not-allowed" : "pointer",
          transition: "background 0.2s, color 0.2s",
        }}
      >
        {status === "loading" ? "Отправляем..." : "Получить бесплатный разбор"}
      </button>

      {status === "error" && (
        <p style={{
          marginTop: "12px",
          textAlign: "center",
          color: "#ff6b6b",
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontSize: "14px",
        }}>
          Ошибка: {errorMsg || "Попробуйте снова или напишите нам напрямую."}
        </p>
      )}
    </form>
  );
}
