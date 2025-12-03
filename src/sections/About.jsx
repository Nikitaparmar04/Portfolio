import React, { useEffect, useRef, useState } from "react";
import { personalData } from "../data/personal-data";
import ParticleBackground from "../components/ui/ParticleBackground";
import nikitaImg from "../assets/nikitaimg.png";

export default function About() {
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

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-8 lg:py-12 flex items-center"
      style={{ 
        background: 'linear-gradient(to bottom, #1e293b, #0f172a)',
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          
          {/* Left side - Description */}
          <div 
            className="order-2 lg:order-1"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out'
            }}
          >
            <div 
              className="p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(71, 85, 105, 0.3)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
              }}
            >
              {/* Terminal-style header */}
              <div 
                className="flex justify-between items-center mb-4 pb-3 px-4 pt-3"
                style={{ 
                  borderBottom: '1px solid rgba(71, 85, 105, 0.2)',
                  background: 'rgba(30, 41, 59, 0.5)',
                  margin: '-1.5rem -1.5rem 1rem -1.5rem',
                  borderRadius: '0.75rem 0.75rem 0 0'
                }}
              >
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ background: '#ef4444' }}></span>
                  <span className="w-3 h-3 rounded-full" style={{ background: '#f59e0b' }}></span>
                  <span className="w-3 h-3 rounded-full" style={{ background: '#10b981' }}></span>
                </div>
                <div 
                  className="text-xs font-mono"
                  style={{ color: '#64748b' }}
                >
                  about.js
                </div>
              </div>
              
              <h2 
                className="text-lg font-medium mb-4 uppercase tracking-wider"
                style={{ color: '#cbd5e1' }}
              >
                Who I am?
              </h2>
              
              <p 
                className="text-sm lg:text-base leading-relaxed"
                style={{ color: '#cbd5e1' }}
              >
                {personalData.description}
              </p>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div 
            className="order-1 lg:order-2 flex justify-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out 0.2s'
            }}
          >
            <div 
              className="p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(71, 85, 105, 0.3)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
              }}
            >
              <div className="relative group">
                <img
                  src={nikitaImg}
                  alt={personalData.name}
                  className="w-full h-auto object-cover shadow-lg transition-all duration-700 cursor-pointer rounded-lg"
                  style={{
                    maxWidth: '240px',
                    filter: 'grayscale(0%)',
                    border: '2px solid rgba(100, 116, 139, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.borderColor = 'rgba(100, 116, 139, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.borderColor = 'rgba(100, 116, 139, 0.2)';
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
