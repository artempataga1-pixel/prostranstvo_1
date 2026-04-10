"use client";
import { useState, useEffect, useRef } from "react";
import { TrendingUp, ShoppingBag, BarChart2, Database, Cpu, Users, Warehouse } from "lucide-react";
import Link from "next/link";

const CASES = [
  {
    id: 1,
    title: "Джинсы",
    subtitle: "Ozon Маркетплейс",
    description: "Выручка выросла с 800 тыс. до 2.4 млн ₽/мес за 1.5 месяца после оптимизации карточек и рекламных кампаний",
    metrics: ["+200%", "1.5 мес", "Ozon"],
    metricLabels: ["рост выручки", "до результата", "площадка"],
    color: "#0ABAB5",
    href: "/cases/jeans",
    icon: "TrendingUp",
  },
  {
    id: 2,
    title: "Кресла Ozon",
    subtitle: "Игровые кресла",
    description: "Запуск нового бренда игровых кресел на Ozon с нуля — выход в топ категории за 3 месяца",
    metrics: ["Топ-10", "3 мес", "Ozon"],
    metricLabels: ["позиция в категории", "до топ-10", "площадка"],
    color: "#f59e0b",
    href: "/cases/chairs",
    icon: "ShoppingBag",
  },
  {
    id: 3,
    title: "Сезонный товар",
    subtitle: "Wildberries",
    description: "Сезонный товар — управление стоками, рекламой и ценообразованием в пиковый период",
    metrics: ["+180%", "2 мес", "WB"],
    metricLabels: ["рост продаж", "сезонный период", "площадка"],
    color: "#f97316",
    href: "/cases/seasonal",
    icon: "BarChart2",
  },
  {
    id: 4,
    title: "1С УНФ + ТСД",
    subtitle: "Автоматизация склада",
    description: "Внедрение 1С УНФ + ТСД для фулфилмент-центра: 13 этапов, 100% цифровизация склада",
    metrics: ["13", "100%", "1 нед"],
    metricLabels: ["этапов внедрения", "цифровизация", "обучение команды"],
    color: "#0ABAB5",
    href: "/cases/automation-1c",
    icon: "Database",
  },
  {
    id: 5,
    title: "ИИ Агенты",
    subtitle: "Автоматизация бизнеса",
    description: "Внедрение ИИ-агентов для автоматизации рутинных бизнес-процессов — работа 24/7 без участия человека",
    metrics: ["24/7", "80%", "ИИ"],
    metricLabels: ["работа без участия", "экономия времени", "автоматизация"],
    color: "#8b5cf6",
    href: "/cases/ai-agents",
    icon: "Cpu",
  },
  {
    id: 6,
    title: "CRM Система",
    subtitle: "Внедрение под клиента",
    description: "Полный цикл: аудит, подбор CRM, развёртывание, обучение персонала и месяц поддержки",
    metrics: ["13", "1 мес", "CRM"],
    metricLabels: ["этапов внедрения", "поддержка после", "под бизнес"],
    color: "#38bdf8",
    href: "/cases/crm",
    icon: "Users",
  },
  {
    id: 7,
    title: "Склад ФФ",
    subtitle: "Строительство с нуля",
    description: "Строительство и запуск фулфилмент-склада 1 000 кв.м. для крупного бренда: 200к+ единиц товара, АВС-зонирование",
    metrics: ["200к+", "1 000", "5"],
    metricLabels: ["единиц товара", "кв.м. площадь", "этапов запуска"],
    color: "#10b981",
    href: "/cases/warehouse",
    icon: "Warehouse",
  },
];

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  TrendingUp,
  ShoppingBag,
  BarChart2,
  Database,
  Cpu,
  Users,
  Warehouse,
};

const FONT = "Helvetica Neue, Helvetica, Arial, sans-serif";
const RADIUS = 220;

function calculateNodePosition(index: number, total: number, rotationAngle: number) {
  const baseAngle = (index / total) * 2 * Math.PI;
  const angle = baseAngle + (rotationAngle * Math.PI) / 180;
  const x = Math.cos(angle) * RADIUS;
  const y = Math.sin(angle) * RADIUS;
  // zIndex based on y position (front/back)
  const zIndex = Math.round((y + RADIUS) / (2 * RADIUS) * 10) + 1;
  // opacity based on y position
  const opacity = 0.6 + ((y + RADIUS) / (2 * RADIUS)) * 0.4;
  return { x, y, zIndex, opacity };
}

export default function OrbitalCasesTimeline() {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (autoRotate) {
      intervalRef.current = setInterval(() => {
        setRotationAngle((prev) => (prev + 0.3) % 360);
      }, 50);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoRotate]);

  const handleNodeClick = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
      setActiveId(null);
      setAutoRotate(true);
    } else {
      setExpandedId(id);
      setActiveId(id);
      setAutoRotate(false);
    }
  };

  const handleBackgroundClick = () => {
    setExpandedId(null);
    setActiveId(null);
    setAutoRotate(true);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 900,
        height: 600,
        margin: "0 auto",
        overflow: "visible",
        cursor: expandedId !== null ? "pointer" : "default",
      }}
      onClick={handleBackgroundClick}
    >
      {/* Orbit ring */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: RADIUS * 2,
          height: RADIUS * 2,
          borderRadius: "50%",
          border: "1px solid rgba(10,186,181,0.15)",
          pointerEvents: "none",
        }}
      />

      {/* Second decorative ring */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: RADIUS * 2 + 60,
          height: RADIUS * 2 + 60,
          borderRadius: "50%",
          border: "1px solid rgba(10,186,181,0.06)",
          pointerEvents: "none",
        }}
      />

      {/* Central sphere */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 35%, #1de8e2, #0ABAB5 40%, #076e6b)",
          boxShadow: "0 0 30px rgba(10,186,181,0.5), 0 0 60px rgba(10,186,181,0.2)",
          animation: "orbitalPulse 2.5s ease-in-out infinite",
          zIndex: 20,
          pointerEvents: "none",
        }}
      />

      {/* Orbital nodes */}
      {CASES.map((caseItem, index) => {
        const { x, y, zIndex, opacity } = calculateNodePosition(index, CASES.length, rotationAngle);
        const isActive = activeId === caseItem.id;
        const isExpanded = expandedId === caseItem.id;
        const IconComp = ICON_MAP[caseItem.icon];

        // Card positioning logic: keep within container
        const cardLeft = x > 0 ? "calc(100% + 12px)" : "auto";
        const cardRight = x <= 0 ? "calc(100% + 12px)" : "auto";
        const cardTop = y > 50 ? "auto" : "0";
        const cardBottom = y > 50 ? "0" : "auto";

        return (
          <div
            key={caseItem.id}
            style={{
              position: "absolute",
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: `translate(-50%, -50%) scale(${isActive ? 1.2 : 1})`,
              zIndex: isExpanded ? 100 : zIndex + 10,
              opacity: isExpanded || !expandedId ? opacity : 0.3,
              transition: "transform 0.3s ease, opacity 0.3s ease",
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleNodeClick(caseItem.id);
            }}
          >
            {/* Node circle */}
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: isActive
                  ? `radial-gradient(circle at 35% 35%, ${caseItem.color}cc, ${caseItem.color}66)`
                  : "rgba(7,21,24,0.9)",
                border: `2px solid ${caseItem.color}`,
                boxShadow: isActive
                  ? `0 0 20px ${caseItem.color}88, 0 0 40px ${caseItem.color}44`
                  : `0 0 10px ${caseItem.color}44`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <IconComp size={20} color={caseItem.color} />
            </div>

            {/* Tooltip label */}
            {!isExpanded && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 6px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  whiteSpace: "nowrap",
                  fontFamily: FONT,
                  fontSize: 10,
                  color: "rgba(255,255,255,0.6)",
                  pointerEvents: "none",
                  letterSpacing: "0.03em",
                }}
              >
                {caseItem.title}
              </div>
            )}

            {/* Expanded card */}
            {isExpanded && (
              <div
                style={{
                  position: "absolute",
                  left: cardLeft,
                  right: cardRight,
                  top: cardTop,
                  bottom: cardBottom,
                  width: 280,
                  background: "rgba(7,21,24,0.95)",
                  border: "1px solid rgba(10,186,181,0.3)",
                  borderRadius: 16,
                  padding: 20,
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  zIndex: 200,
                  boxShadow: `0 20px 60px rgba(0,0,0,0.8), 0 0 30px ${caseItem.color}22`,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Card header */}
                <div style={{ marginBottom: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <IconComp size={16} color={caseItem.color} />
                    <span
                      style={{
                        fontFamily: FONT,
                        fontSize: 16,
                        fontWeight: 600,
                        color: caseItem.color,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {caseItem.title}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: FONT,
                      fontSize: 11,
                      color: "rgba(255,255,255,0.5)",
                      margin: 0,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {caseItem.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontFamily: FONT,
                    fontSize: 12,
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.6,
                    margin: "0 0 16px",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical" as const,
                    overflow: "hidden",
                  }}
                >
                  {caseItem.description}
                </p>

                {/* Metrics */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: 8,
                    marginBottom: 16,
                  }}
                >
                  {caseItem.metrics.map((metric, i) => (
                    <div
                      key={i}
                      style={{
                        textAlign: "center",
                        padding: "8px 4px",
                        background: "rgba(255,255,255,0.04)",
                        borderRadius: 8,
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: FONT,
                          fontSize: 14,
                          fontWeight: 700,
                          color: caseItem.color,
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {metric}
                      </div>
                      <div
                        style={{
                          fontFamily: FONT,
                          fontSize: 9,
                          color: "rgba(255,255,255,0.4)",
                          marginTop: 2,
                          letterSpacing: "0.03em",
                        }}
                      >
                        {caseItem.metricLabels[i]}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA button */}
                <Link
                  href={caseItem.href}
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "10px 16px",
                    background: `linear-gradient(135deg, ${caseItem.color}22, ${caseItem.color}44)`,
                    border: `1px solid ${caseItem.color}66`,
                    borderRadius: 8,
                    fontFamily: FONT,
                    fontSize: 12,
                    fontWeight: 500,
                    color: caseItem.color,
                    textDecoration: "none",
                    letterSpacing: "0.05em",
                    transition: "all 0.2s ease",
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  Открыть кейс →
                </Link>
              </div>
            )}
          </div>
        );
      })}

      <style>{`
        @keyframes orbitalPulse {
          0%, 100% { box-shadow: 0 0 30px rgba(10,186,181,0.5), 0 0 60px rgba(10,186,181,0.2); }
          50% { box-shadow: 0 0 50px rgba(10,186,181,0.8), 0 0 100px rgba(10,186,181,0.35); }
        }
      `}</style>
    </div>
  );
}
