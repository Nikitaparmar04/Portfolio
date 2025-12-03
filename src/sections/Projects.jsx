import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import ParticleBackground from "../components/ui/ParticleBackground";

export default function Projects() {
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
 
  const projects = [
    {
      title: "Scribbly.io",
      description: "A real-time multiplayer drawing game where players sketch and guess words together. Built with WebSocket architecture for synchronized canvas updates, live chat, and smart game state management.",
      technologies: ["React", "Node.js", "Express", "Socket.io", "Canvas API", "JavaScript"],
      github: "https://github.com/yourusername/scribbly.io",
      live: "https://scribbly.io",
      image: "/scribbly.png"
    },
    {
      title: "Cloud-based Hospital Report Automation",
      description: "A serverless hospital reporting system that automates document processing and secure storage using AWS. Features Lambda-based pipelines, S3 encrypted storage, and DynamoDB for scalable record management.",
      technologies: ["Node.js", "AWS Lambda", "S3", "API Gateway", "DynamoDB", "Cognito", "CloudWatch"],
      github: "https://github.com/yourusername/hospital-reporting-system",
      live: "https://your-live-url.com",
      image: "/hospital-report.png"
    },
    {
      title: "YouTube Playlist Study-Time Analyzer (Chrome Extension)",
      description: "A Chrome extension that calculates total YouTube playlist duration and creates personalized study schedules. Uses YouTube API to analyze video metadata and generate progress-based timelines.",
      technologies: ["JavaScript", "Chrome Extensions API", "YouTube Data API", "Manifest V3"],
      github: "https://github.com/yourusername/yt-playlist-analyzer",
      live: "https://your-live-url.com",
      image: "/playlist-analyzer.png"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-12 lg:py-16 flex items-center"
      style={{
        background: 'linear-gradient(to bottom, #0f172a, #1e293b)',
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
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
            Featured Projects
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
              Portfolio
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
            Showcasing my best work and innovative solutions
          </p>
        </div>

        {/* Projects Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease-out ${index * 0.15}s`
              }}
            >
              {/* Terminal Card */}
              <div
                className="rounded-xl overflow-hidden transition-all duration-300 h-full flex flex-col"
                style={{
                  background: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(71, 85, 105, 0.3)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
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
                    project.tsx
                  </div>
                </div>

                {/* Project Image/Placeholder */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: '200px', background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.9))' }}
                >
                  {/* Aesthetic Code Pattern Background */}
                  <div className="absolute inset-0 opacity-20 font-mono text-xs overflow-hidden" style={{ color: '#64748b' }}>
                    <div className="p-4 space-y-1">
                      <div>{'<div className="container">'}</div>
                      <div className="pl-4">{'  const [state, setState] = useState();'}</div>
                      <div className="pl-4">{'  useEffect(() => {'}</div>
                      <div className="pl-8">{'    // Initialize'}</div>
                      <div className="pl-4">{'  }, []);'}</div>
                      <div className="pl-4">{'  return ('}</div>
                      <div className="pl-8">{'    <Component />'}</div>
                      <div className="pl-4">{'  );'}</div>
                      <div>{'</div>'}</div>
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(100, 116, 139, 0.1) 0%, transparent 70%)'
                    }}
                  />

                  {/* Central Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div 
                        className="absolute inset-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-50"
                        style={{ background: 'rgba(100, 116, 139, 0.3)' }}
                      />
                      <Icon
                        icon={index === 0 ? "mdi:draw" : index === 1 ? "mdi:cloud" : "simple-icons:googlechrome"}
                        className="text-7xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 relative z-10"
                        style={{ color: '#94a3b8' }}
                      />
                    </div>
                  </div>

                  {/* Bottom Line Accent */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-2"
                    style={{
                      background: 'linear-gradient(to right, transparent, rgba(100, 116, 139, 0.5), transparent)'
                    }}
                  />
                </div>

                {/* Project Content */}
                <div className="p-5 flex-grow flex flex-col">
                  <h3
                    className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-white"
                    style={{ color: '#f1f5f9' }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm mb-4 flex-grow"
                    style={{ color: '#cbd5e1', lineHeight: '1.6' }}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-md font-medium"
                        style={{
                          background: 'rgba(100, 116, 139, 0.2)',
                          color: '#94a3b8',
                          border: '1px solid rgba(100, 116, 139, 0.3)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 flex-1 justify-center"
                      style={{
                        background: 'rgba(71, 85, 105, 0.3)',
                        border: '1px solid rgba(71, 85, 105, 0.4)',
                        color: '#cbd5e1',
                        fontSize: '0.875rem'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(100, 116, 139, 0.4)';
                        e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.6)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(71, 85, 105, 0.3)';
                        e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.4)';
                      }}
                    >
                      <Icon icon="mdi:github" className="text-lg" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 flex-1 justify-center"
                      style={{
                        background: 'rgba(100, 116, 139, 0.3)',
                        border: '1px solid rgba(100, 116, 139, 0.4)',
                        color: '#cbd5e1',
                        fontSize: '0.875rem'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(148, 163, 184, 0.4)';
                        e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.6)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(100, 116, 139, 0.3)';
                        e.currentTarget.style.borderColor = 'rgba(100, 116, 139, 0.4)';
                      }}
                    >
                      <Icon icon="mdi:open-in-new" className="text-lg" />
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
