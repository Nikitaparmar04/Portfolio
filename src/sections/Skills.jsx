import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import ParticleBackground from "../components/UI/ParticleBackground";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const skills = [
    // Frontend
    { name: "React", icon: "logos:react", category: "Frontend" },
    { name: "JavaScript", icon: "logos:javascript", category: "Frontend" },
    { name: "TypeScript", icon: "logos:typescript-icon", category: "Frontend" },
    { name: "HTML5", icon: "vscode-icons:file-type-html", category: "Frontend" },
    { name: "CSS3", icon: "vscode-icons:file-type-css", category: "Frontend" },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", category: "Frontend" },
    { name: "Redux", icon: "logos:redux", category: "Frontend" },
    // Backend
    { name: "Node.js", icon: "logos:nodejs-icon", category: "Backend" },
    { name: "Express", icon: "skill-icons:expressjs-dark", category: "Backend" },
    { name: "MongoDB", icon: "logos:mongodb-icon", category: "Backend" },
    { name: "MySQL", icon: "logos:mysql-icon", category: "Backend" },
    { name: "REST API", icon: "mdi:api", category: "Backend" },
    // Cloud & DevOps
    { name: "AWS", icon: "logos:aws", category: "Cloud" },
    { name: "Docker", icon: "logos:docker-icon", category: "DevOps" },
    { name: "Git", icon: "logos:git-icon", category: "Tools" },
    { name: "GitHub", icon: "logos:github-icon", category: "Tools" },
    // AI & Other
    { name: "C++", icon: "logos:c-plusplus", category: "Programming" },
    { name: "AI/ML", icon: "hugeicons:artificial-intelligence-05", category: "AI" }
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-8 lg:py-12 flex items-center"
      style={{
        background: 'linear-gradient(to bottom, #0f172a, #1e293b)',
        color: 'white',
        minHeight: '50vh'
      }}
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'radial-gradient(ellipse at center, rgba(71, 85, 105, 0.1) 0%, transparent 70%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Header */}
        <div
          className="text-center mb-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out'
          }}
        >
          <h2
            className="text-2xl lg:text-3xl font-bold mb-2"
            style={{ 
              color: '#f1f5f9',
              letterSpacing: '-0.02em'
            }}
          >
            Skills & Expertise
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div 
              style={{
                width: '40px',
                height: '2px',
                background: 'linear-gradient(to right, transparent, #64748b)'
              }}
            />
            <span 
              className="text-xs font-semibold tracking-wider uppercase"
              style={{ color: '#64748b' }}
            >
              Technologies
            </span>
            <div 
              style={{
                width: '40px',
                height: '2px',
                background: 'linear-gradient(to left, transparent, #64748b)'
              }}
            />
          </div>
          <p
            className="text-sm lg:text-base max-w-xl mx-auto"
            style={{ color: '#94a3b8' }}
          >
            Building robust applications with modern tech stack
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) rotate(0deg)' : 'translateY(20px) rotate(-2deg)',
                transition: `all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${index * 0.03}s`
              }}
            >
              <div
                className="p-3 rounded-lg transition-all duration-300 cursor-pointer h-full flex items-center gap-3 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.5) 0%, rgba(30, 41, 59, 0.3) 100%)',
                  border: '1px solid rgba(71, 85, 105, 0.2)',
                  backdropFilter: 'blur(10px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                  e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.5)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(51, 65, 85, 0.6) 100%)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(100, 116, 139, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.2)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15, 23, 42, 0.5) 0%, rgba(30, 41, 59, 0.3) 100%)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Icon */}
                <div className="flex-shrink-0 relative z-10">
                  <Icon
                    icon={skill.icon}
                    className="text-3xl transition-all duration-300 group-hover:scale-125 group-hover:rotate-12"
                    style={{
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                    }}
                  />
                </div>

                {/* Text */}
                <div className="flex-grow min-w-0 relative z-10">
                  <h3
                    className="text-xs font-semibold truncate transition-all duration-300 group-hover:text-white"
                    style={{ color: '#cbd5e1' }}
                  >
                    {skill.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Keyframes for animations */}
        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.3); }
          }
        `}</style>
      </div>
    </section>
  );
}
