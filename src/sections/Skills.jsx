import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import ParticleBackground from "../components/UI/ParticleBackground";

const skillCategories = [
  {
    id: "all",
    label: "All",
    icon: "solar:layers-bold",
  },
  {
    id: "AI & GenAI",
    label: "AI & GenAI",
    icon: "hugeicons:artificial-intelligence-05",
  },
  {
    id: "Frontend",
    label: "Frontend",
    icon: "solar:monitor-bold",
  },
  {
    id: "Backend",
    label: "Backend",
    icon: "solar:server-bold",
  },
  {
    id: "Tools",
    label: "Tools & Cloud",
    icon: "solar:cloud-bold",
  },
];

const skills = [
  // AI & GenAI
  { name: "LangChain", icon: "simple-icons:langchain", category: "AI & GenAI", color: "#1c7a4b" },
  { name: "OpenAI API", icon: "simple-icons:openai", category: "AI & GenAI", color: "#10a37f" },
  { name: "Gemini AI", icon: "logos:google-gemini", category: "AI & GenAI", color: "#4285f4" },
  { name: "Hugging Face", icon: "simple-icons:huggingface", category: "AI & GenAI", color: "#f5a623" },
  { name: "RAG Pipelines", icon: "mdi:brain", category: "AI & GenAI", color: "#a855f7" },
  { name: "Prompt Eng.", icon: "mdi:comment-text-outline", category: "AI & GenAI", color: "#06b6d4" },
  { name: "LLMOps", icon: "mdi:cog-transfer", category: "AI & GenAI", color: "#f43f5e" },
  { name: "Fine-tuning", icon: "mdi:tune-variant", category: "AI & GenAI", color: "#8b5cf6" },
  { name: "Vector DB", icon: "mdi:database-search", category: "AI & GenAI", color: "#ec4899" },
  { name: "AI/ML", icon: "hugeicons:artificial-intelligence-05", category: "AI & GenAI", color: "#6366f1" },
  // Frontend
  { name: "React", icon: "logos:react", category: "Frontend", color: "#61dafb" },
  { name: "Next.js", icon: "logos:nextjs-icon", category: "Frontend", color: "#ffffff" },
  { name: "JavaScript", icon: "logos:javascript", category: "Frontend", color: "#f7df1e" },
  { name: "TypeScript", icon: "logos:typescript-icon", category: "Frontend", color: "#3178c6" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", category: "Frontend", color: "#38bdf8" },
  { name: "Redux", icon: "logos:redux", category: "Frontend", color: "#764abc" },
  { name: "HTML5", icon: "vscode-icons:file-type-html", category: "Frontend", color: "#e34f26" },
  { name: "CSS3", icon: "vscode-icons:file-type-css", category: "Frontend", color: "#1572b6" },
  // Backend
  { name: "Node.js", icon: "logos:nodejs-icon", category: "Backend", color: "#339933" },
  { name: "Express", icon: "skill-icons:expressjs-dark", category: "Backend", color: "#ffffff" },
  { name: "MongoDB", icon: "logos:mongodb-icon", category: "Backend", color: "#47a248" },
  { name: "MySQL", icon: "logos:mysql-icon", category: "Backend", color: "#4479a1" },
  { name: "REST API", icon: "mdi:api", category: "Backend", color: "#64748b" },
  { name: "Python", icon: "logos:python", category: "Backend", color: "#3776ab" },
  // Tools & Cloud
  { name: "AWS", icon: "logos:aws", category: "Tools", color: "#ff9900" },
  { name: "Docker", icon: "logos:docker-icon", category: "Tools", color: "#2496ed" },
  { name: "Git", icon: "logos:git-icon", category: "Tools", color: "#f05032" },
  { name: "GitHub", icon: "logos:github-icon", category: "Tools", color: "#ffffff" },
  { name: "VS Code", icon: "logos:visual-studio-code", category: "Tools", color: "#007acc" },
  { name: "C++", icon: "logos:c-plusplus", category: "Tools", color: "#00599c" },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  const filtered = activeCategory === "all"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-16 lg:py-24"
      style={{
        background: "linear-gradient(to bottom, #0f172a, #1e293b 50%, #0f172a)",
        color: "white",
        minHeight: "60vh",
      }}
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 10px rgba(99,102,241,0.2); }
          50% { box-shadow: 0 0 25px rgba(99,102,241,0.5), 0 0 50px rgba(168,85,247,0.2); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .skill-card:hover {
          transform: translateY(-8px) scale(1.04) !important;
        }
        .tab-btn:hover {
          background: rgba(99,102,241,0.15) !important;
          border-color: rgba(99,102,241,0.5) !important;
          color: #a5b4fc !important;
        }
        .tab-btn.active {
          background: linear-gradient(135deg, rgba(99,102,241,0.3), rgba(168,85,247,0.2)) !important;
          border-color: rgba(99,102,241,0.6) !important;
          color: #c7d2fe !important;
          box-shadow: 0 0 20px rgba(99,102,241,0.3) !important;
        }
      `}</style>

      <ParticleBackground />

      {/* Ambient glow blobs */}
      <div style={{
        position: "absolute", top: "10%", left: "5%", width: "300px", height: "300px",
        background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none", zIndex: 1,
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "5%", width: "350px", height: "350px",
        background: "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none", zIndex: 1,
      }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* Section Header */}
        <div
          className="text-center mb-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease-out",
          }}
        >
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.1))",
            border: "1px solid rgba(99,102,241,0.3)",
            borderRadius: "100px", padding: "6px 16px", marginBottom: "16px",
          }}>
            <Icon icon="hugeicons:artificial-intelligence-05" style={{ color: "#818cf8", fontSize: "14px" }} />
            <span style={{ color: "#a5b4fc", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Technical Arsenal
            </span>
          </div>

          <h2
            className="text-3xl lg:text-4xl font-bold mb-3"
            style={{
              background: "linear-gradient(135deg, #f1f5f9 0%, #a5b4fc 50%, #c084fc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.02em",
            }}
          >
            Skills & Expertise
          </h2>
          <p className="text-sm lg:text-base max-w-xl mx-auto" style={{ color: "#94a3b8" }}>
            From AI & GenAI engineering to full-stack development — building intelligent, scalable solutions.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease-out 0.15s",
          }}
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`tab-btn ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                display: "flex", alignItems: "center", gap: "6px",
                padding: "8px 16px", borderRadius: "100px",
                border: "1px solid rgba(71,85,105,0.3)",
                background: "rgba(15,23,42,0.4)",
                color: "#94a3b8", fontSize: "13px", fontWeight: 500,
                cursor: "pointer", transition: "all 0.25s ease",
                backdropFilter: "blur(10px)",
              }}
            >
              <Icon icon={cat.icon} style={{ fontSize: "14px" }} />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.5s ease-out 0.25s",
          }}
        >
          {filtered.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{
                padding: "14px 12px",
                borderRadius: "14px",
                border: `1px solid ${hoveredSkill === skill.name ? `${skill.color}40` : "rgba(71,85,105,0.2)"}`,
                background: hoveredSkill === skill.name
                  ? `linear-gradient(135deg, ${skill.color}12 0%, rgba(30,41,59,0.7) 100%)`
                  : "linear-gradient(135deg, rgba(15,23,42,0.6) 0%, rgba(30,41,59,0.3) 100%)",
                backdropFilter: "blur(12px)",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: "10px",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                boxShadow: hoveredSkill === skill.name
                  ? `0 12px 35px ${skill.color}25, 0 0 0 1px ${skill.color}20`
                  : "0 2px 10px rgba(0,0,0,0.2)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${0.25 + index * 0.04}s`,
              }}
            >
              {/* Icon wrapper */}
              <div style={{
                width: "48px", height: "48px",
                borderRadius: "12px",
                background: hoveredSkill === skill.name
                  ? `${skill.color}20`
                  : "rgba(30,41,59,0.5)",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.3s ease",
                animation: hoveredSkill === skill.name ? "float 2s ease-in-out infinite" : "none",
                border: hoveredSkill === skill.name ? `1px solid ${skill.color}30` : "1px solid rgba(71,85,105,0.15)",
              }}>
                <Icon
                  icon={skill.icon}
                  style={{
                    fontSize: "26px",
                    filter: hoveredSkill === skill.name
                      ? `drop-shadow(0 0 6px ${skill.color}80)`
                      : "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                    transition: "all 0.3s ease",
                  }}
                />
              </div>

              {/* Skill name */}
              <span style={{
                fontSize: "11px", fontWeight: 600,
                color: hoveredSkill === skill.name ? "#f1f5f9" : "#94a3b8",
                textAlign: "center", lineHeight: 1.2,
                transition: "color 0.3s ease",
                letterSpacing: "0.02em",
              }}>
                {skill.name}
              </span>

              {/* Category pill */}
              <span style={{
                fontSize: "9px", fontWeight: 500,
                color: hoveredSkill === skill.name ? skill.color : "rgba(100,116,139,0.6)",
                textTransform: "uppercase", letterSpacing: "0.08em",
                transition: "color 0.3s ease",
              }}>
                {skill.category}
              </span>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div
          className="flex flex-wrap justify-center gap-6 mt-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease-out 0.5s",
          }}
        >
          {[
            { value: "10+", label: "AI & GenAI Tools", icon: "hugeicons:artificial-intelligence-05", color: "#818cf8" },
            { value: "3+", label: "Years Experience", icon: "mdi:calendar-star", color: "#34d399" },
            { value: "20+", label: "Technologies", icon: "mdi:code-braces", color: "#f59e0b" },
            { value: "AWS", label: "AI Certified", icon: "logos:aws", color: "#ff9900" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                gap: "4px", padding: "16px 24px", borderRadius: "16px",
                background: "linear-gradient(135deg, rgba(15,23,42,0.6), rgba(30,41,59,0.4))",
                border: "1px solid rgba(71,85,105,0.2)",
                backdropFilter: "blur(10px)",
                minWidth: "120px",
              }}
            >
              <Icon icon={stat.icon} style={{ fontSize: "20px", color: stat.color, marginBottom: "4px" }} />
              <span style={{ fontSize: "22px", fontWeight: 700, color: stat.color, lineHeight: 1 }}>{stat.value}</span>
              <span style={{ fontSize: "11px", color: "#64748b", textAlign: "center", fontWeight: 500 }}>{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
