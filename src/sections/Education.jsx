import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import ParticleBackground from "../components/UI/ParticleBackground";

export default function Education() {
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

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Information Technology",
      institution: "Acropolis institute of Technology & Research",
      location: "Indore, MadhyaPradesh",
      duration: "2020 - 2024",
      grade: "CGPA: 7.5/10",
      achievements: [
        "",
        "Winner of College Hackathon 2023",
        "Published research paper on AI/ML"
      ],
      icon: "mdi:school"
    },
    {
      degree: "Senior Secondary (XII)",
      field: "Science (PCM)",
      institution: "The saint Peter's H.S School",
      location: "indore, MadyaPradesh",
      duration: "2019 - 2020",
      grade: "Percentage: 70%",
      achievements: [
        "in Computer Science",
        "State Level Science Exhibition participant"
      ],
      icon: "mdi:book-open-page-variant"
    },
    {
      degree: "Secondary (X)",
      field: "MP Board",
      institution: "The saint Peter's H.S School",
      location: "indore, MadyaPradesh",
      duration: "2017 - 2018",
      grade: "Percentage: 78%",
      achievements: [
        "School Topper",
        "100/100 in Mathematics"
      ],
      icon: "mdi:certificate"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative py-12 lg:py-16 flex items-center"
      style={{
        background: 'linear-gradient(to bottom, #1e293b, #0f172a)',
        color: 'white',
        minHeight: '80vh'
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
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out'
          }}
        >
          <h2
            className="text-3xl lg:text-4xl font-bold mb-2"
            style={{
              color: '#f1f5f9',
              letterSpacing: '-0.02em'
            }}
          >
            Education & Qualifications
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
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
              Academic Journey
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
            className="text-sm lg:text-base max-w-2xl mx-auto"
            style={{ color: '#94a3b8' }}
          >
            Building a strong foundation in technology and innovation
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 relative">
          {/* Vertical Timeline Line */}
          <div
            className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(100, 116, 139, 0.3), transparent)'
            }}
          />

          {education.map((edu, index) => (
            <div
              key={index}
              className="relative"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease-out ${index * 0.2}s`
              }}
            >
              <div className={`lg:flex lg:items-center lg:gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Card Container */}
                <div className="lg:w-5/12">
                  <div
                    className="group rounded-xl overflow-hidden transition-all duration-300"
                    style={{
                      background: 'rgba(15, 23, 42, 0.6)',
                      border: '1px solid rgba(71, 85, 105, 0.3)',
                      backdropFilter: 'blur(20px)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.5)';
                      e.currentTarget.style.boxShadow = '0 12px 40px rgba(100, 116, 139, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.3)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
                    }}
                  >
                    {/* Terminal Header */}
                    <div
                      className="flex items-center justify-between px-4 py-3"
                      style={{
                        background: 'rgba(30, 41, 59, 0.5)',
                        borderBottom: '1px solid rgba(71, 85, 105, 0.2)'
                      }}
                    >
                      <div className="flex gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ background: '#ef4444' }}></span>
                        <span className="w-3 h-3 rounded-full" style={{ background: '#f59e0b' }}></span>
                        <span className="w-3 h-3 rounded-full" style={{ background: '#10b981' }}></span>
                      </div>
                      <div className="text-xs font-mono" style={{ color: '#64748b' }}>
                        education_{index + 1}.json
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      {/* Icon & Duration */}
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className="p-3 rounded-lg transition-all duration-300 group-hover:scale-110"
                          style={{
                            background: 'rgba(100, 116, 139, 0.2)',
                            border: '1px solid rgba(100, 116, 139, 0.3)'
                          }}
                        >
                          <Icon
                            icon={edu.icon}
                            className="text-3xl"
                            style={{ color: '#94a3b8' }}
                          />
                        </div>
                        <div className="text-right">
                          <div
                            className="text-xs font-semibold px-3 py-1 rounded-full inline-block"
                            style={{
                              background: 'rgba(100, 116, 139, 0.2)',
                              color: '#cbd5e1',
                              border: '1px solid rgba(100, 116, 139, 0.3)'
                            }}
                          >
                            {edu.duration}
                          </div>
                        </div>
                      </div>

                      {/* Degree & Field */}
                      <h3
                        className="text-xl font-bold mb-1"
                        style={{ color: '#f1f5f9' }}
                      >
                        {edu.degree}
                      </h3>
                      <p
                        className="text-base font-medium mb-3"
                        style={{ color: '#cbd5e1' }}
                      >
                        {edu.field}
                      </p>

                      {/* Institution */}
                      <div className="flex items-start gap-2 mb-2">
                        <Icon
                          icon="mdi:map-marker"
                          className="text-lg mt-0.5"
                          style={{ color: '#64748b' }}
                        />
                        <div>
                          <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                            {edu.institution}
                          </p>
                          <p style={{ color: '#64748b', fontSize: '0.75rem' }}>
                            {edu.location}
                          </p>
                        </div>
                      </div>

                      {/* Grade */}
                      <div className="flex items-center gap-2 mb-4">
                        <Icon
                          icon="mdi:trophy"
                          className="text-lg"
                          style={{ color: '#f59e0b' }}
                        />
                        <p
                          className="text-sm font-semibold"
                          style={{ color: '#cbd5e1' }}
                        >
                          {edu.grade}
                        </p>
                      </div>

                      {/* Achievements */}
                      <div>
                        <p
                          className="text-xs font-semibold mb-2 uppercase tracking-wide"
                          style={{ color: '#64748b' }}
                        >
                          Key Achievements
                        </p>
                        <ul className="space-y-1.5">
                          {edu.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2"
                            >
                              <span
                                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ background: '#64748b' }}
                              />
                              <span
                                className="text-sm"
                                style={{ color: '#94a3b8', lineHeight: '1.5' }}
                              >
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div
                      className="h-1 transition-all duration-300 group-hover:h-2"
                      style={{
                        background: 'linear-gradient(to right, transparent, rgba(100, 116, 139, 0.5), transparent)'
                      }}
                    />
                  </div>
                </div>

                {/* Timeline Dot - Desktop Only */}
                <div className="hidden lg:flex lg:w-2/12 justify-center">
                  <div
                    className="relative w-6 h-6 rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(100, 116, 139, 0.3)',
                      border: '3px solid rgba(148, 163, 184, 0.5)',
                      boxShadow: '0 0 20px rgba(100, 116, 139, 0.3)'
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: '#cbd5e1' }}
                    />
                  </div>
                </div>

                {/* Empty Space for Alignment */}
                <div className="hidden lg:block lg:w-5/12" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
