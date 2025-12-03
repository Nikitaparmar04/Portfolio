import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import ParticleBackground from "../components/UI/ParticleBackground";

export default function Blogs() {
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

  const blogs = [
    {
      title: "AWS Cloud Computing: A Practical Learning Journey",
      description: "Deep dive into AWS services, hands-on labs, and real-world implementation. Covering EC2, S3, Lambda, and more with practical examples and best practices.",
      category: "Cloud Computing",
      platform: "Hashnode",
      date: "Oct 2024",
      readTime: "8 min read",
      tags: ["AWS", "Cloud", "DevOps"],
      link: "https://nikitaparmar.hashnode.dev/setting-up-an-application-load-balancer-with-aws-ec2",
      icon: "skill-icons:aws-dark"
    },
    {
      title: "Amazon RDS",
      description: "Deep dive into Amazon RDS database service, covering setup, configuration, and best practices for production-ready database solutions on AWS cloud.",
      category: "Cloud Computing",
      platform: "Hashnode",
      date: "Sep 2024",
      readTime: "10 min read",
      tags: ["AWS", "Cloud", "RDS"],
      link: "https://nikitaparmar.hashnode.dev/s3-programmatic-access-with-aws-cli",
      icon: "skill-icons:aws-dark"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="blogs"
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
            Technical Blogs & Articles
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
              Knowledge Sharing
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
            Sharing insights, tutorials, and practical learning experiences
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease-out ${index * 0.15}s`
              }}
            >
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div
                  className="rounded-2xl overflow-hidden transition-all duration-300 h-full flex flex-col relative"
                  style={{
                    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))',
                    border: '2px solid rgba(71, 85, 105, 0.4)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                    e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.6)';
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(100, 116, 139, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.4)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
                  }}
                >
                  {/* Header with Icon */}
                  <div className="relative p-4 pb-3">
                    <div className="flex items-start justify-between">
                      <div className="relative">
                        <div
                          className="relative p-3 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12"
                          style={{
                            background: 'linear-gradient(135deg, rgba(71, 85, 105, 0.3), rgba(100, 116, 139, 0.2))',
                            border: '2px solid rgba(148, 163, 184, 0.3)'
                          }}
                        >
                          <Icon
                            icon={blog.icon}
                            className="text-3xl"
                            style={{ color: '#f1f5f9' }}
                          />
                        </div>
                      </div>

                      <div
                        className="flex items-center gap-1 px-2 py-1 rounded-full font-bold transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.3))',
                          border: '1.5px solid rgba(16, 185, 129, 0.5)',
                          color: '#10b981',
                          fontSize: '0.6rem',
                          boxShadow: '0 0 15px rgba(16, 185, 129, 0.2)'
                        }}
                      >
                        <Icon icon="simple-icons:hashnode" className="text-xs" />
                        ARTICLE
                      </div>
                    </div>

                    <div className="mt-3">
                      <span
                        className="inline-block text-xs font-black px-2.5 py-1 rounded-lg uppercase tracking-widest"
                        style={{
                          background: 'linear-gradient(135deg, rgba(100, 116, 139, 0.4), rgba(71, 85, 105, 0.3))',
                          color: '#cbd5e1',
                          border: '1.5px solid rgba(148, 163, 184, 0.4)',
                          fontSize: '0.65rem'
                        }}
                      >
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-4 pb-4 flex-grow flex flex-col">
                    <h3
                      className="text-base font-black mb-2 transition-all duration-300 group-hover:text-white line-clamp-2"
                      style={{ 
                        color: '#f1f5f9', 
                        lineHeight: '1.3'
                      }}
                    >
                      {blog.title}
                    </h3>

                    <p
                      className="text-xs mb-3 flex-grow line-clamp-2"
                      style={{ color: '#cbd5e1', lineHeight: '1.5', fontSize: '0.7rem' }}
                    >
                      {blog.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {blog.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full font-bold"
                          style={{
                            background: idx === 0 
                              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.3))'
                              : 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(124, 58, 237, 0.3))',
                            color: idx === 0 ? '#60a5fa' : '#a78bfa',
                            border: '1.5px solid',
                            borderColor: idx === 0 ? 'rgba(59, 130, 246, 0.4)' : 'rgba(139, 92, 246, 0.4)',
                            fontSize: '0.65rem',
                            textTransform: 'uppercase'
                          }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between pt-3 border-t-2" style={{ borderColor: 'rgba(71, 85, 105, 0.3)' }}>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1" style={{ color: '#94a3b8', fontSize: '0.65rem' }}>
                          <Icon icon="mdi:calendar" className="text-xs" />
                          {blog.date}
                        </div>
                        <div className="flex items-center gap-1" style={{ color: '#94a3b8', fontSize: '0.65rem' }}>
                          <Icon icon="mdi:clock-outline" className="text-xs" />
                          {blog.readTime}
                        </div>
                      </div>

                      <div
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full font-bold"
                        style={{
                          background: 'linear-gradient(135deg, rgba(100, 116, 139, 0.4), rgba(71, 85, 105, 0.5))',
                          border: '2px solid rgba(148, 163, 184, 0.5)',
                          color: '#f1f5f9',
                          fontSize: '0.7rem',
                          textTransform: 'uppercase'
                        }}
                      >
                        Read
                        <Icon icon="mdi:arrow-right" className="text-base transition-all duration-300 group-hover:translate-x-2" />
                      </div>
                    </div>
                  </div>

                  {/* Animated Bottom Border */}
                  <div className="relative h-1 overflow-hidden">
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6, #ec4899)',
                        backgroundSize: '200% 100%',
                        animation: 'gradient-shift 3s ease infinite'
                      }}
                    />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <style>{`
          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>

        {/* View All Blogs Button */}
        <div
          className="text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out 0.5s'
          }}
        >
          <a
            href="https://hashnode.com/@devopslearner626"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300"
            style={{
              background: 'rgba(71, 85, 105, 0.3)',
              border: '1px solid rgba(71, 85, 105, 0.4)',
              color: '#cbd5e1',
              fontSize: '0.875rem',
              fontWeight: '600'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(100, 116, 139, 0.4)';
              e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.6)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(71, 85, 105, 0.3)';
              e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.4)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Icon icon="simple-icons:hashnode" className="text-xl" />
            View All Blogs on Hashnode
            <Icon icon="mdi:arrow-right" className="text-lg" />
          </a>
        </div>
      </div>
    </section>
  );
}
