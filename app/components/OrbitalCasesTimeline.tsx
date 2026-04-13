"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { TrendingUp, ShoppingBag, BarChart2, Database, Cpu, Users, Warehouse } from "lucide-react";
import { useRouter } from "next/navigation";

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

function calculateNodePosition(index: number, total: number, rotationAngle: number, radius: number) {
  const baseAngle = (index / total) * 2 * Math.PI;
  const angle = baseAngle + (rotationAngle * Math.PI) / 180;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  const zIndex = Math.round((y + radius) / (2 * radius) * 10) + 1;
  const opacity = 0.6 + ((y + radius) / (2 * radius)) * 0.4;
  return { x, y, zIndex, opacity };
}

export default function OrbitalCasesTimeline() {
  const router = useRouter();
  const [rotationAngle, setRotationAngle] = useState(0);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const rotationRef = useRef(0);
  const orbitRef = useRef<HTMLDivElement>(null);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const RADIUS = isMobile ? 130 : 220;
  const ORBIT_SIZE = isMobile ? 310 : 560;
  const NODE_HIT_RADIUS = isMobile ? 28 : 36;

  // Вращение — не останавливается никогда
  useEffect(() => {
    const id = setInterval(() => {
      rotationRef.current = (rotationRef.current + 0.3) % 360;
      setRotationAngle(rotationRef.current);
    }, 50);
    return () => clearInterval(id);
  }, []);

  const clearTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!orbitRef.current) return;
    const rect = orbitRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const mx = e.clientX - cx;
    const my = e.clientY - cy;

    let found: number | null = null;
    for (let i = 0; i < CASES.length; i++) {
      const { x, y } = calculateNodePosition(i, CASES.length, rotationRef.current, RADIUS);
      const dist = Math.sqrt((mx - x) ** 2 + (my - y) ** 2);
      if (dist < NODE_HIT_RADIUS) {
        found = CASES[i].id;
        break;
      }
    }

    if (found !== null) {
      if (clearTimerRef.current) { clearTimeout(clearTimerRef.current); clearTimerRef.current = null; }
      setHoveredId(found);
    } else {
      if (!clearTimerRef.current) {
        clearTimerRef.current = setTimeout(() => {
          setHoveredId(null);
          clearTimerRef.current = null;
        }, 400);
      }
    }
  }, [RADIUS, NODE_HIT_RADIUS]);

  const handleMouseLeave = useCallback(() => {
    if (!clearTimerRef.current) {
      clearTimerRef.current = setTimeout(() => {
        setHoveredId(null);
        clearTimerRef.current = null;
      }, 800);
    }
  }, []);

  const handleMouseEnterCard = useCallback(() => {
    if (clearTimerRef.current) { clearTimeout(clearTimerRef.current); clearTimerRef.current = null; }
  }, []);

  // Mobile: tap to select
  const handleNodeTap = useCallback((id: number) => {
    setSelectedId(prev => prev === id ? null : id);
  }, []);

  const activeId = isMobile ? selectedId : hoveredId;
  const activeCase = CASES.find((c) => c.id === activeId) ?? null;

  // Mobile cards list
  if (isMobile) {
    return (
      <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
        {/* Orbit */}
        <div
          ref={orbitRef}
          style={{
            position: "relative",
            width: ORBIT_SIZE,
            height: ORBIT_SIZE,
            flexShrink: 0,
            cursor: activeCase ? "pointer" : "default",
            margin: "0 auto",
          }}
          onClick={(e) => {
            if (!orbitRef.current) return;
            const rect = orbitRef.current.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const mx = e.clientX - cx;
            const my = e.clientY - cy;
            for (let i = 0; i < CASES.length; i++) {
              const { x, y } = calculateNodePosition(i, CASES.length, rotationRef.current, RADIUS);
              const dist = Math.sqrt((mx - x) ** 2 + (my - y) ** 2);
              if (dist < NODE_HIT_RADIUS + 10) {
                handleNodeTap(CASES[i].id);
                return;
              }
            }
            // Click outside nodes — close card
            setSelectedId(null);
          }}
        >
          {/* Orbit rings */}
          <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: RADIUS * 2, height: RADIUS * 2, borderRadius: "50%", border: "1px solid rgba(10,186,181,0.15)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: RADIUS * 2 + 40, height: RADIUS * 2 + 40, borderRadius: "50%", border: "1px solid rgba(10,186,181,0.06)", pointerEvents: "none" }} />

          {/* Central sphere */}
          <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: 48, height: 48, borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, #1de8e2, #0ABAB5 40%, #076e6b)", boxShadow: "0 0 24px rgba(10,186,181,0.5), 0 0 48px rgba(10,186,181,0.2)", animation: "orbitalPulse 2.5s ease-in-out infinite", zIndex: 20, pointerEvents: "none" }} />

          {/* Nodes */}
          {CASES.map((caseItem, index) => {
            const { x, y, zIndex, opacity } = calculateNodePosition(index, CASES.length, rotationAngle, RADIUS);
            const isActive = selectedId === caseItem.id;
            const IconComp = ICON_MAP[caseItem.icon];

            return (
              <div
                key={caseItem.id}
                style={{
                  position: "absolute",
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: `translate(-50%, -50%) scale(${isActive ? 1.25 : 1})`,
                  zIndex: isActive ? 100 : zIndex + 10,
                  opacity,
                  transition: "transform 0.25s ease",
                  pointerEvents: "none",
                }}
              >
                <div style={{
                  width: 38, height: 38, borderRadius: "50%",
                  background: isActive ? `radial-gradient(circle at 35% 35%, ${caseItem.color}cc, ${caseItem.color}66)` : "rgba(7,21,24,0.9)",
                  border: `2px solid ${caseItem.color}`,
                  boxShadow: isActive ? `0 0 16px ${caseItem.color}88, 0 0 32px ${caseItem.color}44` : `0 0 8px ${caseItem.color}44`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.3s ease",
                }}>
                  <IconComp size={16} color={caseItem.color} />
                </div>
                <div style={{ position: "absolute", top: "calc(100% + 4px)", left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap", fontFamily: FONT, fontSize: 9, color: isActive ? caseItem.color : "rgba(255,255,255,0.55)", pointerEvents: "none", letterSpacing: "0.03em", transition: "color 0.3s" }}>
                  {caseItem.title}
                </div>
              </div>
            );
          })}
        </div>

        {/* Hint text */}
        {!activeCase && (
          <p style={{ fontFamily: FONT, fontSize: 12, color: "rgba(255,255,255,0.3)", textAlign: "center", margin: "8px 0 0", letterSpacing: "0.04em" }}>
            Нажмите на кейс
          </p>
        )}

        {/* Mobile info card */}
        <div style={{
          width: "100%",
          maxWidth: 380,
          opacity: activeCase ? 1 : 0,
          maxHeight: activeCase ? "400px" : "0px",
          overflow: "hidden",
          transition: "opacity 0.3s ease, max-height 0.4s ease",
          padding: activeCase ? "0 16px 20px" : "0 16px",
        }}>
          {activeCase && (() => {
            const IconComp = ICON_MAP[activeCase.icon];
            return (
              <div style={{ background: "rgba(7,21,24,0.97)", border: `1px solid ${activeCase.color}44`, borderRadius: 16, padding: 20, backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", boxShadow: `0 16px 40px rgba(0,0,0,0.6), 0 0 30px ${activeCase.color}18` }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px", borderRadius: 20, background: `${activeCase.color}18`, border: `1px solid ${activeCase.color}40`, marginBottom: 12 }}>
                  <IconComp size={10} color={activeCase.color} />
                  <span style={{ fontFamily: FONT, fontSize: 10, color: activeCase.color, letterSpacing: "0.08em", textTransform: "uppercase" }}>{activeCase.subtitle}</span>
                </div>
                <h3 style={{ fontFamily: FONT, fontWeight: 400, fontSize: 20, letterSpacing: "-0.03em", color: "#fff", margin: "0 0 8px" }}>{activeCase.title}</h3>
                <p style={{ fontFamily: FONT, fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: "0 0 14px" }}>{activeCase.description}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 14, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  {activeCase.metrics.map((metric, i) => (
                    <div key={i} style={{ textAlign: "center" }}>
                      <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 700, color: activeCase.color, letterSpacing: "-0.03em" }}>{metric}</div>
                      <div style={{ fontFamily: FONT, fontSize: 9, color: "rgba(255,255,255,0.35)", marginTop: 3, letterSpacing: "0.02em" }}>{activeCase.metricLabels[i]}</div>
                    </div>
                  ))}
                </div>
                <a
                  href={activeCase.href}
                  onClick={(e) => { e.preventDefault(); window.history.replaceState(null, '', '/#cases'); router.push(activeCase.href); }}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 20px", borderRadius: 10, background: activeCase.color, color: "#071518", fontFamily: FONT, fontSize: 14, fontWeight: 500, letterSpacing: "-0.02em", textDecoration: "none", cursor: "pointer" }}
                >
                  Открыть кейс →
                </a>
              </div>
            );
          })()}
        </div>

        <style>{`
          @keyframes orbitalPulse {
            0%, 100% { box-shadow: 0 0 24px rgba(10,186,181,0.5), 0 0 48px rgba(10,186,181,0.2); }
            50% { box-shadow: 0 0 40px rgba(10,186,181,0.8), 0 0 80px rgba(10,186,181,0.35); }
          }
        `}</style>
      </div>
    );
  }

  // Desktop layout
  return (
    <div style={{ width: "100%", maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 40, height: ORBIT_SIZE }}>

      {/* ── Orbit area ── */}
      <div
        ref={orbitRef}
        style={{ position: "relative", flexShrink: 0, width: ORBIT_SIZE, height: ORBIT_SIZE, cursor: activeCase ? "pointer" : "default" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          if (activeCase) {
            window.history.replaceState(null, '', '/#cases');
            router.push(activeCase.href);
          }
        }}
      >
        {/* Orbit rings */}
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: RADIUS * 2, height: RADIUS * 2, borderRadius: "50%", border: "1px solid rgba(10,186,181,0.15)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: RADIUS * 2 + 60, height: RADIUS * 2 + 60, borderRadius: "50%", border: "1px solid rgba(10,186,181,0.06)", pointerEvents: "none" }} />

        {/* Central sphere */}
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: 64, height: 64, borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, #1de8e2, #0ABAB5 40%, #076e6b)", boxShadow: "0 0 30px rgba(10,186,181,0.5), 0 0 60px rgba(10,186,181,0.2)", animation: "orbitalPulse 2.5s ease-in-out infinite", zIndex: 20, pointerEvents: "none" }} />

        {/* Nodes */}
        {CASES.map((caseItem, index) => {
          const { x, y, zIndex, opacity } = calculateNodePosition(index, CASES.length, rotationAngle, RADIUS);
          const isHovered = hoveredId === caseItem.id;
          const IconComp = ICON_MAP[caseItem.icon];

          return (
            <div
              key={caseItem.id}
              style={{
                position: "absolute",
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: `translate(-50%, -50%) scale(${isHovered ? 1.2 : 1})`,
                zIndex: isHovered ? 100 : zIndex + 10,
                opacity,
                transition: "transform 0.25s ease",
                pointerEvents: "none",
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: "50%",
                background: isHovered ? `radial-gradient(circle at 35% 35%, ${caseItem.color}cc, ${caseItem.color}66)` : "rgba(7,21,24,0.9)",
                border: `2px solid ${caseItem.color}`,
                boxShadow: isHovered ? `0 0 20px ${caseItem.color}88, 0 0 40px ${caseItem.color}44` : `0 0 10px ${caseItem.color}44`,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.3s ease",
              }}>
                <IconComp size={20} color={caseItem.color} />
              </div>
              <div style={{ position: "absolute", top: "calc(100% + 6px)", left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap", fontFamily: FONT, fontSize: 10, color: isHovered ? caseItem.color : "rgba(255,255,255,0.6)", pointerEvents: "none", letterSpacing: "0.03em", transition: "color 0.3s" }}>
                {caseItem.title}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Info card (fixed right panel) ── */}
      <div
        style={{ flex: 1, opacity: activeCase ? 1 : 0, pointerEvents: activeCase ? "auto" : "none", transition: "opacity 0.25s ease" }}
        onMouseEnter={handleMouseEnterCard}
        onMouseLeave={handleMouseLeave}
      >
        {activeCase && (() => {
          const IconComp = ICON_MAP[activeCase.icon];
          return (
            <div style={{ background: "rgba(7,21,24,0.97)", border: `1px solid ${activeCase.color}44`, borderRadius: 20, padding: 24, backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", boxShadow: `0 24px 60px rgba(0,0,0,0.6), 0 0 40px ${activeCase.color}18` }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 20, background: `${activeCase.color}18`, border: `1px solid ${activeCase.color}40`, marginBottom: 14 }}>
                <IconComp size={10} color={activeCase.color} />
                <span style={{ fontFamily: FONT, fontSize: 10, color: activeCase.color, letterSpacing: "0.08em", textTransform: "uppercase" }}>{activeCase.subtitle}</span>
              </div>
              <h3 style={{ fontFamily: FONT, fontWeight: 400, fontSize: 22, letterSpacing: "-0.03em", color: "#fff", margin: "0 0 10px" }}>{activeCase.title}</h3>
              <p style={{ fontFamily: FONT, fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.65, margin: "0 0 18px" }}>{activeCase.description}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 18, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                {activeCase.metrics.map((metric, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: FONT, fontSize: 18, fontWeight: 700, color: activeCase.color, letterSpacing: "-0.03em" }}>{metric}</div>
                    <div style={{ fontFamily: FONT, fontSize: 9, color: "rgba(255,255,255,0.35)", marginTop: 4, letterSpacing: "0.02em" }}>{activeCase.metricLabels[i]}</div>
                  </div>
                ))}
              </div>
              <a
                className="orbital-open-btn"
                href={activeCase.href}
                onClick={(e) => { e.preventDefault(); window.history.replaceState(null, '', '/#cases'); router.push(activeCase.href); }}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 20px", borderRadius: 12, background: activeCase.color, color: "#071518", fontFamily: FONT, fontSize: 14, fontWeight: 500, letterSpacing: "-0.02em", textDecoration: "none", transition: "box-shadow 0.25s ease, transform 0.2s ease", cursor: "pointer" }}
              >
                Открыть кейс →
              </a>
            </div>
          );
        })()}
      </div>

      <style>{`
        @keyframes orbitalPulse {
          0%, 100% { box-shadow: 0 0 30px rgba(10,186,181,0.5), 0 0 60px rgba(10,186,181,0.2); }
          50% { box-shadow: 0 0 50px rgba(10,186,181,0.8), 0 0 100px rgba(10,186,181,0.35); }
        }
        .orbital-open-btn:hover {
          box-shadow: 0 0 0 2px rgba(255,255,255,0.3), 0 0 24px currentColor, 0 8px 24px rgba(0,0,0,0.4);
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
}
