import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import ParticleBackground from "../components/UI/ParticleBackground";

const projects = [
  {
    title: "RAG Pipeline with RAGAS Evaluation",
    subtitle: "Production-grade Retrieval-Augmented Generation",
    description:
      "End-to-end RAG system that grounds LLM responses in your own documents — with automated quality scoring via RAGAS metrics (faithfulness, answer relevancy, context precision).",
    bullets: [
      "Scales to millions of docs via vector indexing — zero hallucination tolerance",
      "RAGAS auto-eval loop catches regressions before they hit production",
      "Plug-and-play embeddings: swap OpenAI ↔ Hugging Face with one config line",
      "Modular retriever supports FAISS, Pinecone & Chroma out of the box",
    ],
    technologies: ["LangChain", "OpenAI", "FAISS", "RAGAS", "Python", "FastAPI"],
    github: "https://github.com/Nikitaparmar04/Production-Grade-RAG-Pipeline-with-RAGAS-Based-Evaluation",
    live: null,
    status: "completed",
    statusLabel: "Live",
    accentColor: "#818cf8",
    glowColor: "rgba(129,140,248,0.22)",
    icon: "mdi:brain",
    bgPattern: "mdi:database-search",
  },
  {
    title: "Multi-Agent AI Trip Planner",
    subtitle: "Built on LangGraph Agentic Framework",
    description:
      "Orchestrates specialized AI agents — flight scout, hotel analyst, itinerary designer — via a LangGraph state machine that plans complete trips autonomously.",
    bullets: [
      "Parallel agent execution cuts planning time by 60% vs sequential LLM calls",
      "Self-correcting graph — agents retry & re-route on tool failure automatically",
      "Real-time web search grounding keeps recommendations fresh & accurate",
      "Exportable day-by-day itinerary with cost breakdowns and booking links",
    ],
    technologies: ["LangGraph", "LangChain", "OpenAI", "Tavily Search", "Python", "Streamlit"],
    github: "https://github.com/Nikitaparmar04/Multi-Agent-Travel-Planner-using-LangGraph",
    live: null,
    status: "completed",
    statusLabel: "Live",
    accentColor: "#34d399",
    glowColor: "rgba(52,211,153,0.2)",
    icon: "mdi:map-marker-path",
    bgPattern: "mdi:airplane",
  },
  {
    title: "Local AI Assistant — Offline LLM",
    subtitle: "100% Private, No Cloud Required",
    description:
      "A fully offline AI assistant powered by locally-run LLMs (Ollama/llama.cpp). All inference stays on-device — ideal for sensitive data, air-gapped environments, and zero-latency chat.",
    bullets: [
      "Runs Mistral / LLaMA 3 / Phi-3 locally — no API key, no data leaves your machine",
      "RAG over local files: chat with PDFs, notes & codebases offline",
      "Persistent memory layer remembers context across sessions",
      "Hot-swap models at runtime without restarting the app",
    ],
    technologies: ["Ollama", "LangChain", "llama.cpp", "ChromaDB", "Python", "React"],
    github: "https://github.com/Nikitaparmar04/Local-AI-Assistant-with-Offline-LLM",
    live: null,
    status: "inprogress",
    statusLabel: "In Progress",
    accentColor: "#f59e0b",
    glowColor: "rgba(245,158,11,0.18)",
    icon: "mdi:robot-outline",
    bgPattern: "mdi:chip",
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
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
      id="projects"
      className="relative py-20 lg:py-28"
      style={{
        background: "linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
        color: "white",
        minHeight: "80vh",
      }}
    >
      <style>{`
        @keyframes card-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes progress-bar {
          from { width: 0%; }
          to { width: 65%; }
        }
        .proj-card {
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1),
                      box-shadow 0.4s ease, border-color 0.4s ease,
                      background 0.4s ease;
        }
        .proj-card:hover { transform: translateY(-10px) scale(1.01); }
        .tech-pill { transition: all 0.2s ease; }
        .tech-pill:hover { transform: translateY(-2px); }
        .github-btn { transition: all 0.25s ease; }
        .github-btn:hover { transform: scale(1.05); }
      `}</style>

      <ParticleBackground />

      {/* Ambient blobs */}
      <div style={{
        position: "absolute", top: "8%", right: "4%",
        width: "350px", height: "350px",
        background: "radial-gradient(circle, rgba(129,140,248,0.07) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none", zIndex: 1,
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: "4%",
        width: "300px", height: "300px",
        background: "radial-gradient(circle, rgba(52,211,153,0.06) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none", zIndex: 1,
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* ── Section Header ── */}
        <div
          className="text-center mb-14"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease-out",
          }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "linear-gradient(135deg, rgba(129,140,248,0.15), rgba(168,85,247,0.1))",
            border: "1px solid rgba(129,140,248,0.3)",
            borderRadius: "100px", padding: "6px 18px", marginBottom: "18px",
          }}>
            <Icon icon="mdi:brain" style={{ color: "#818cf8", fontSize: "14px" }} />
            <span style={{ color: "#a5b4fc", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              AI Projects
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
            Featured Projects
          </h2>
          <p className="text-sm lg:text-base max-w-xl mx-auto" style={{ color: "#94a3b8" }}>
            Building intelligent systems — from RAG pipelines to multi-agent orchestration.
          </p>
        </div>

        {/* ── Projects Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const isHovered = hoveredCard === index;
            return (
              <div
                key={project.title}
                className="proj-card"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? (isHovered ? "translateY(-10px) scale(1.01)" : "translateY(0)") : "translateY(40px)",
                  transition: `opacity 0.6s ease-out ${index * 0.15}s, transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease, border-color 0.4s ease`,
                  borderRadius: "22px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  border: `1px solid ${isHovered ? project.accentColor + "50" : "rgba(71,85,105,0.25)"}`,
                  background: isHovered
                    ? `linear-gradient(145deg, ${project.accentColor}0e 0%, rgba(15,23,42,0.92) 60%, rgba(30,41,59,0.7) 100%)`
                    : "linear-gradient(145deg, rgba(15,23,42,0.75) 0%, rgba(30,41,59,0.5) 100%)",
                  backdropFilter: "blur(20px)",
                  boxShadow: isHovered
                    ? `0 24px 60px ${project.glowColor}, 0 0 0 1px ${project.accentColor}18`
                    : "0 4px 24px rgba(0,0,0,0.35)",
                  cursor: "default",
                }}
              >
                {/* ── Card Hero Banner ── */}
                <div style={{
                  height: "160px", position: "relative", overflow: "hidden",
                  background: `linear-gradient(135deg, ${project.accentColor}10 0%, rgba(15,23,42,0.9) 100%)`,
                  borderBottom: `1px solid ${isHovered ? project.accentColor + "30" : "rgba(71,85,105,0.15)"}`,
                  transition: "border-color 0.4s ease",
                }}>
                  {/* BG pattern icon */}
                  <Icon icon={project.bgPattern} style={{
                    position: "absolute", right: "-20px", bottom: "-20px",
                    fontSize: "140px",
                    color: isHovered ? `${project.accentColor}18` : "rgba(71,85,105,0.08)",
                    transition: "color 0.4s ease",
                    pointerEvents: "none",
                  }} />

                  {/* Status badge */}
                  <div style={{
                    position: "absolute", top: "14px", right: "14px",
                    display: "flex", alignItems: "center", gap: "5px",
                    background: project.status === "inprogress"
                      ? "rgba(245,158,11,0.15)" : "rgba(52,211,153,0.12)",
                    border: `1px solid ${project.status === "inprogress" ? "rgba(245,158,11,0.35)" : "rgba(52,211,153,0.3)"}`,
                    borderRadius: "100px", padding: "4px 10px",
                  }}>
                    <div style={{
                      width: "6px", height: "6px", borderRadius: "50%",
                      background: project.status === "inprogress" ? "#f59e0b" : "#34d399",
                      animation: project.status === "inprogress" ? "spin-slow 2s linear infinite" : "none",
                      boxShadow: `0 0 6px ${project.status === "inprogress" ? "#f59e0b" : "#34d399"}`,
                    }} />
                    <span style={{
                      fontSize: "10px", fontWeight: 700,
                      color: project.status === "inprogress" ? "#f59e0b" : "#34d399",
                      letterSpacing: "0.06em",
                    }}>
                      {project.statusLabel}
                    </span>
                  </div>

                  {/* Central icon */}
                  <div style={{
                    position: "absolute", top: "50%", left: "28px",
                    transform: "translateY(-50%)",
                  }}>
                    <div style={{
                      width: "62px", height: "62px", borderRadius: "18px",
                      background: isHovered ? `${project.accentColor}20` : "rgba(30,41,59,0.6)",
                      border: `1px solid ${isHovered ? project.accentColor + "45" : "rgba(71,85,105,0.2)"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.4s ease",
                      boxShadow: isHovered ? `0 0 20px ${project.accentColor}30` : "none",
                    }}>
                      <Icon icon={project.icon} style={{
                        fontSize: "30px",
                        color: isHovered ? project.accentColor : "#94a3b8",
                        filter: isHovered ? `drop-shadow(0 0 8px ${project.accentColor})` : "none",
                        transition: "all 0.4s ease",
                      }} />
                    </div>
                  </div>

                  {/* Progress bar for in-progress */}
                  {project.status === "inprogress" && (
                    <div style={{
                      position: "absolute", bottom: "0", left: "0", right: "0",
                      height: "3px", background: "rgba(245,158,11,0.1)",
                    }}>
                      <div style={{
                        height: "100%", width: isVisible ? "65%" : "0%",
                        background: "linear-gradient(90deg, #f59e0b80, #f59e0b)",
                        transition: "width 1.8s ease-out 0.8s",
                        boxShadow: "0 0 8px #f59e0b80",
                      }} />
                    </div>
                  )}
                </div>

                {/* ── Card Body ── */}
                <div style={{ padding: "22px", flex: 1, display: "flex", flexDirection: "column" }}>

                  {/* Title + subtitle */}
                  <div style={{ marginBottom: "10px" }}>
                    <h3 style={{
                      fontSize: "16px", fontWeight: 700, color: "#f1f5f9",
                      lineHeight: 1.25, marginBottom: "5px",
                    }}>
                      {project.title}
                    </h3>
                    <p style={{
                      fontSize: "11px", fontWeight: 600,
                      color: isHovered ? project.accentColor : "#64748b",
                      textTransform: "uppercase", letterSpacing: "0.07em",
                      transition: "color 0.3s ease",
                    }}>
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: "13px", color: "#94a3b8", lineHeight: 1.65,
                    marginBottom: "14px",
                  }}>
                    {project.description}
                  </p>

                  {/* Future-oriented bullets */}
                  <ul style={{
                    listStyle: "none", margin: "0 0 16px 0", padding: 0,
                    display: "flex", flexDirection: "column", gap: "7px",
                    flex: 1,
                  }}>
                    {project.bullets.map((b, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                        <div style={{
                          width: "5px", height: "5px", borderRadius: "50%",
                          background: project.accentColor, flexShrink: 0, marginTop: "7px",
                          boxShadow: isHovered ? `0 0 6px ${project.accentColor}` : "none",
                          transition: "box-shadow 0.3s ease",
                        }} />
                        <span style={{ fontSize: "12px", color: "#94a3b8", lineHeight: 1.55 }}>
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="tech-pill"
                        style={{
                          fontSize: "10px", fontWeight: 600, padding: "4px 10px",
                          borderRadius: "100px",
                          background: isHovered ? `${project.accentColor}12` : "rgba(71,85,105,0.2)",
                          border: `1px solid ${isHovered ? project.accentColor + "30" : "rgba(71,85,105,0.3)"}`,
                          color: isHovered ? project.accentColor : "#94a3b8",
                          letterSpacing: "0.04em",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                      padding: "10px 16px", borderRadius: "12px",
                      background: isHovered
                        ? `linear-gradient(135deg, ${project.accentColor}25, ${project.accentColor}10)`
                        : "rgba(71,85,105,0.2)",
                      border: `1px solid ${isHovered ? project.accentColor + "45" : "rgba(71,85,105,0.3)"}`,
                      color: isHovered ? project.accentColor : "#94a3b8",
                      fontSize: "13px", fontWeight: 600, textDecoration: "none",
                      transition: "all 0.3s ease",
                      boxShadow: isHovered ? `0 4px 16px ${project.accentColor}20` : "none",
                    }}
                  >
                    <Icon icon="mdi:github" style={{ fontSize: "18px" }} />
                    View on GitHub
                    <Icon icon="mdi:arrow-top-right" style={{ fontSize: "14px" }} />
                  </a>
                </div>

                {/* Bottom accent bar */}
                <div style={{
                  height: "3px",
                  background: `linear-gradient(90deg, transparent, ${project.accentColor}${isHovered ? "90" : "30"}, transparent)`,
                  transition: "all 0.4s ease",
                }} />
              </div>
            );
          })}
        </div>

        {/* ── GitHub CTA ── */}
        <div
          className="text-center mt-14"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease-out 0.5s",
          }}
        >
          <a
            href="https://github.com/Nikitaparmar04"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              padding: "14px 32px", borderRadius: "100px",
              background: "linear-gradient(135deg, rgba(129,140,248,0.15), rgba(168,85,247,0.1))",
              border: "1px solid rgba(129,140,248,0.3)",
              color: "#a5b4fc", fontSize: "14px", fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 0 30px rgba(129,140,248,0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(129,140,248,0.25), rgba(168,85,247,0.15))";
              e.currentTarget.style.boxShadow = "0 0 40px rgba(129,140,248,0.25)";
              e.currentTarget.style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(129,140,248,0.15), rgba(168,85,247,0.1))";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(129,140,248,0.1)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <Icon icon="mdi:github" style={{ fontSize: "20px" }} />
            See All Projects on GitHub
            <Icon icon="mdi:arrow-right" style={{ fontSize: "16px" }} />
          </a>
        </div>

      </div>
    </section>
  );
}
