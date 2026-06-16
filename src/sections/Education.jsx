import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import ParticleBackground from "../components/UI/ParticleBackground";

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Information Technology",
    institution: "Acropolis Institute of Technology & Research",
    location: "Indore, Madhya Pradesh",
    duration: "2020 – 2024",
    grade: "7.5 / 10 CGPA",
    icon: "mdi:school-outline",
    accentColor: "#818cf8",
    glowColor: "rgba(129,140,248,0.25)",
    achievements: [
      "Winner — College Hackathon 2023",
      "Published Research Paper on AI / ML",
    ],
    tags: ["B.Tech", "IT", "AI/ML"],
  },
  {
    degree: "Senior Secondary (XII)",
    field: "Science — PCM",
    institution: "The Saint Peter's H.S. School",
    location: "Indore, Madhya Pradesh",
    duration: "2019 – 2020",
    grade: "70%",
    icon: "mdi:book-open-page-variant-outline",
    accentColor: "#34d399",
    glowColor: "rgba(52,211,153,0.2)",
    achievements: [
      "State Level Science Exhibition Participant",
      "Strong foundation in Computer Science",
    ],
    tags: ["Class XII", "PCM", "Science"],
  },
  {
    degree: "Secondary (X)",
    field: "MP Board",
    institution: "The Saint Peter's H.S. School",
    location: "Indore, Madhya Pradesh",
    duration: "2017 – 2018",
    grade: "78%",
    icon: "mdi:certificate-outline",
    accentColor: "#f59e0b",
    glowColor: "rgba(245,158,11,0.2)",
    achievements: [
      "School Topper",
      "Perfect Score — 100/100 in Mathematics",
    ],
    tags: ["Class X", "Board Exam", "Topper"],
  },
];

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.08 }
    );
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative py-20 lg:py-28"
      style={{
        background: "linear-gradient(180deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)",
        color: "white",
        minHeight: "80vh",
      }}
    >
      <style>{`
        @keyframes timeline-glow {
          0%, 100% { opacity: 0.4; box-shadow: 0 0 8px currentColor; }
          50% { opacity: 1; box-shadow: 0 0 20px currentColor, 0 0 40px currentColor; }
        }
        @keyframes dot-ping {
          0% { transform: scale(1); opacity: 0.8; }
          80%, 100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .edu-card {
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.35s ease,
                      border-color 0.35s ease;
        }
        .edu-card:hover {
          transform: translateY(-8px) scale(1.01);
        }
      `}</style>

      <ParticleBackground />

      {/* Ambient blobs */}
      <div style={{
        position: "absolute", top: "15%", left: "3%",
        width: "280px", height: "280px",
        background: "radial-gradient(circle, rgba(129,140,248,0.07) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none", zIndex: 1,
      }} />
      <div style={{
        position: "absolute", bottom: "15%", right: "3%",
        width: "320px", height: "320px",
        background: "radial-gradient(circle, rgba(52,211,153,0.06) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none", zIndex: 1,
      }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* ── Section Header ── */}
        <div
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease-out",
          }}
        >
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "linear-gradient(135deg, rgba(129,140,248,0.15), rgba(168,85,247,0.1))",
            border: "1px solid rgba(129,140,248,0.3)",
            borderRadius: "100px", padding: "6px 18px", marginBottom: "18px",
          }}>
            <Icon icon="mdi:school-outline" style={{ color: "#818cf8", fontSize: "14px" }} />
            <span style={{ color: "#a5b4fc", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Academic Journey
            </span>
          </div>

          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{
              background: "linear-gradient(135deg, #f1f5f9 0%, #a5b4fc 50%, #c084fc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.02em",
            }}
          >
            Education & Qualifications
          </h2>
          <p className="text-sm lg:text-base max-w-xl mx-auto" style={{ color: "#94a3b8" }}>
            Building a strong foundation — from classrooms to cutting-edge AI engineering.
          </p>
        </div>

        {/* ── Timeline ── */}
        <div className="relative">

          {/* Vertical line */}
          <div
            className="hidden lg:block absolute top-0 bottom-0"
            style={{
              left: "50%", transform: "translateX(-50%)", width: "2px",
              background: "linear-gradient(to bottom, transparent, rgba(129,140,248,0.3) 20%, rgba(129,140,248,0.3) 80%, transparent)",
            }}
          />

          <div className="space-y-12 lg:space-y-16">
            {education.map((edu, index) => {
              const isLeft = index % 2 === 0;
              const isActive = activeCard === index;
              const delay = index * 0.18;

              return (
                <div
                  key={index}
                  className="relative"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(40px)",
                    transition: `all 0.65s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
                  }}
                >
                  <div className="lg:flex lg:items-center lg:gap-0" style={{ position: "relative" }}>

                    {/* ── LEFT SLOT ── */}
                    <div className="lg:w-[calc(50%-28px)]">
                      {isLeft ? (
                        /* Card on left */
                        <div
                          className="edu-card"
                          onMouseEnter={() => setActiveCard(index)}
                          onMouseLeave={() => setActiveCard(null)}
                          style={{
                            background: isActive
                              ? `linear-gradient(135deg, ${edu.accentColor}10 0%, rgba(15,23,42,0.85) 100%)`
                              : "linear-gradient(135deg, rgba(15,23,42,0.7) 0%, rgba(30,41,59,0.5) 100%)",
                            border: `1px solid ${isActive ? edu.accentColor + "50" : "rgba(71,85,105,0.25)"}`,
                            borderRadius: "20px",
                            backdropFilter: "blur(20px)",
                            boxShadow: isActive
                              ? `0 20px 60px ${edu.glowColor}, 0 0 0 1px ${edu.accentColor}20`
                              : "0 4px 24px rgba(0,0,0,0.3)",
                            overflow: "hidden",
                          }}
                        >
                          <CardContent edu={edu} isActive={isActive} />
                        </div>
                      ) : (
                        /* Year label on left */
                        <div className="hidden lg:flex justify-end pr-8">
                          <YearPill duration={edu.duration} color={edu.accentColor} />
                        </div>
                      )}
                    </div>

                    {/* ── TIMELINE DOT (desktop) ── */}
                    <div className="hidden lg:flex w-14 justify-center flex-shrink-0 relative" style={{ zIndex: 2 }}>
                      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {/* Ping ring */}
                        <div style={{
                          position: "absolute", width: "32px", height: "32px",
                          borderRadius: "50%",
                          background: `${edu.accentColor}25`,
                          animation: isActive ? "dot-ping 1.2s ease-out infinite" : "none",
                        }} />
                        {/* Dot */}
                        <div style={{
                          width: "20px", height: "20px", borderRadius: "50%",
                          background: `linear-gradient(135deg, ${edu.accentColor}, ${edu.accentColor}80)`,
                          border: `3px solid ${edu.accentColor}50`,
                          boxShadow: isActive
                            ? `0 0 16px ${edu.accentColor}, 0 0 32px ${edu.accentColor}50`
                            : `0 0 8px ${edu.accentColor}50`,
                          transition: "box-shadow 0.3s ease",
                          zIndex: 1,
                        }} />
                      </div>
                    </div>

                    {/* ── RIGHT SLOT ── */}
                    <div className="lg:w-[calc(50%-28px)] mt-4 lg:mt-0">
                      {!isLeft ? (
                        /* Card on right */
                        <div
                          className="edu-card"
                          onMouseEnter={() => setActiveCard(index)}
                          onMouseLeave={() => setActiveCard(null)}
                          style={{
                            background: isActive
                              ? `linear-gradient(135deg, ${edu.accentColor}10 0%, rgba(15,23,42,0.85) 100%)`
                              : "linear-gradient(135deg, rgba(15,23,42,0.7) 0%, rgba(30,41,59,0.5) 100%)",
                            border: `1px solid ${isActive ? edu.accentColor + "50" : "rgba(71,85,105,0.25)"}`,
                            borderRadius: "20px",
                            backdropFilter: "blur(20px)",
                            boxShadow: isActive
                              ? `0 20px 60px ${edu.glowColor}, 0 0 0 1px ${edu.accentColor}20`
                              : "0 4px 24px rgba(0,0,0,0.3)",
                            overflow: "hidden",
                          }}
                        >
                          <CardContent edu={edu} isActive={isActive} />
                        </div>
                      ) : (
                        /* Year label on right */
                        <div className="hidden lg:flex justify-start pl-8">
                          <YearPill duration={edu.duration} color={edu.accentColor} />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile year pill */}
                  <div className="lg:hidden flex justify-center mt-3">
                    <YearPill duration={edu.duration} color={edu.accentColor} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ── Sub-components ── */

function CardContent({ edu, isActive }) {
  return (
    <div style={{ padding: "24px" }}>
      {/* Top row: icon + degree */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", marginBottom: "14px" }}>
        {/* Icon box */}
        <div style={{
          width: "48px", height: "48px", borderRadius: "14px", flexShrink: 0,
          background: isActive ? `${edu.accentColor}20` : "rgba(30,41,59,0.6)",
          border: `1px solid ${isActive ? edu.accentColor + "40" : "rgba(71,85,105,0.2)"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.3s ease",
        }}>
          <Icon icon={edu.icon} style={{
            fontSize: "24px",
            color: isActive ? edu.accentColor : "#94a3b8",
            filter: isActive ? `drop-shadow(0 0 6px ${edu.accentColor})` : "none",
            transition: "all 0.3s ease",
          }} />
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <h3 style={{
            fontSize: "17px", fontWeight: 700, color: "#f1f5f9",
            lineHeight: 1.2, marginBottom: "4px",
          }}>
            {edu.degree}
          </h3>
          <p style={{
            fontSize: "13px", fontWeight: 600,
            color: isActive ? edu.accentColor : "#94a3b8",
            transition: "color 0.3s ease",
          }}>
            {edu.field}
          </p>
        </div>
      </div>

      {/* Institution */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "10px" }}>
        <Icon icon="mdi:map-marker-outline" style={{ fontSize: "15px", color: "#64748b", marginTop: "2px", flexShrink: 0 }} />
        <div>
          <p style={{ fontSize: "13px", color: "#cbd5e1", fontWeight: 500 }}>{edu.institution}</p>
          <p style={{ fontSize: "11px", color: "#64748b" }}>{edu.location}</p>
        </div>
      </div>

      {/* Grade */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: "6px",
        background: `${edu.accentColor}15`, border: `1px solid ${edu.accentColor}30`,
        borderRadius: "8px", padding: "5px 12px", marginBottom: "14px",
      }}>
        <Icon icon="mdi:trophy-outline" style={{ fontSize: "13px", color: edu.accentColor }} />
        <span style={{ fontSize: "12px", fontWeight: 600, color: edu.accentColor }}>{edu.grade}</span>
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "14px" }}>
        {edu.tags.map((tag) => (
          <span key={tag} style={{
            fontSize: "10px", fontWeight: 600, padding: "3px 10px",
            borderRadius: "100px", letterSpacing: "0.05em",
            background: "rgba(71,85,105,0.2)",
            border: "1px solid rgba(71,85,105,0.3)",
            color: "#94a3b8",
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Achievements */}
      <div>
        <p style={{
          fontSize: "10px", fontWeight: 700, color: "#64748b",
          textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px",
        }}>
          Highlights
        </p>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
          {edu.achievements.map((a, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
              <div style={{
                width: "5px", height: "5px", borderRadius: "50%",
                background: edu.accentColor, flexShrink: 0, marginTop: "7px",
                boxShadow: isActive ? `0 0 6px ${edu.accentColor}` : "none",
              }} />
              <span style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.5 }}>{a}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom gradient bar */}
      <div style={{
        height: "3px", borderRadius: "0 0 20px 20px",
        background: `linear-gradient(90deg, transparent, ${edu.accentColor}60, transparent)`,
        marginTop: "20px", marginLeft: "-24px", marginRight: "-24px", marginBottom: "-24px",
        opacity: isActive ? 1 : 0.3, transition: "opacity 0.3s ease",
      }} />
    </div>
  );
}

function YearPill({ duration, color }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: "6px",
      background: `${color}12`,
      border: `1px solid ${color}35`,
      borderRadius: "100px", padding: "8px 16px",
    }}>
      <Icon icon="mdi:calendar-month-outline" style={{ fontSize: "13px", color }} />
      <span style={{ fontSize: "12px", fontWeight: 700, color, letterSpacing: "0.04em" }}>
        {duration}
      </span>
    </div>
  );
}
