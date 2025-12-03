import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook } from "lucide-react";
import ParticleBackground from "../components/ui/ParticleBackground";
import { personalData } from "../data/personal-data";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const mailtoLink = `mailto:${personalData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: personalData.email,
      href: `mailto:${personalData.email}`
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalData.phone,
      href: `tel:${personalData.phone}`
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalData.address,
      href: null
    }
  ];

  const socialLinks = [
    { icon: Github, href: personalData.github, label: "GitHub" },
    { icon: Linkedin, href: personalData.linkedIn, label: "LinkedIn" },
    { icon: Facebook, href: personalData.facebook, label: "Facebook" }
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
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
            Get In Touch
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
              Let's Connect
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
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Contact Info */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease-out 0.2s'
            }}
          >
            <div
              className="rounded-2xl overflow-hidden h-full"
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(71, 85, 105, 0.3)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
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
                  contact_info.json
                </div>
              </div>

              {/* Contact Details */}
              <div className="p-6 space-y-6">
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: '#f1f5f9' }}
                >
                  Contact Information
                </h3>

                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className="p-3 rounded-lg transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: 'rgba(100, 116, 139, 0.2)',
                        border: '1px solid rgba(100, 116, 139, 0.3)'
                      }}
                    >
                      <info.icon size={20} style={{ color: '#94a3b8' }} />
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-wide mb-1"
                        style={{ color: '#64748b' }}
                      >
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm transition-colors duration-300 hover:text-white"
                          style={{ color: '#cbd5e1' }}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm" style={{ color: '#cbd5e1' }}>
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Social Links */}
                <div className="pt-6 border-t" style={{ borderColor: 'rgba(71, 85, 105, 0.3)' }}>
                  <p
                    className="text-xs font-semibold uppercase tracking-wide mb-4"
                    style={{ color: '#64748b' }}
                  >
                    Follow Me
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg transition-all duration-300 hover:scale-110"
                        style={{
                          background: 'rgba(71, 85, 105, 0.3)',
                          border: '1px solid rgba(71, 85, 105, 0.4)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(100, 116, 139, 0.4)';
                          e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.6)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(71, 85, 105, 0.3)';
                          e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.4)';
                        }}
                        aria-label={social.label}
                      >
                        <social.icon size={20} style={{ color: '#cbd5e1' }} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease-out 0.4s'
            }}
          >
            <div
              className="rounded-2xl overflow-hidden h-full"
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(71, 85, 105, 0.3)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
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
                  send_message.js
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: '#f1f5f9' }}
                >
                  Send Me a Message
                </h3>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-wide mb-2"
                      style={{ color: '#64748b' }}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-300 focus:outline-none"
                      style={{
                        background: 'rgba(30, 41, 59, 0.5)',
                        border: '1px solid rgba(71, 85, 105, 0.3)',
                        color: '#f1f5f9'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(148, 163, 184, 0.6)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(100, 116, 139, 0.2)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(71, 85, 105, 0.3)';
                        e.target.style.boxShadow = 'none';
                      }}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-wide mb-2"
                      style={{ color: '#64748b' }}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-300 focus:outline-none"
                      style={{
                        background: 'rgba(30, 41, 59, 0.5)',
                        border: '1px solid rgba(71, 85, 105, 0.3)',
                        color: '#f1f5f9'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(148, 163, 184, 0.6)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(100, 116, 139, 0.2)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(71, 85, 105, 0.3)';
                        e.target.style.boxShadow = 'none';
                      }}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wide mb-2"
                    style={{ color: '#64748b' }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-300 focus:outline-none"
                    style={{
                      background: 'rgba(30, 41, 59, 0.5)',
                      border: '1px solid rgba(71, 85, 105, 0.3)',
                      color: '#f1f5f9'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(148, 163, 184, 0.6)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(100, 116, 139, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(71, 85, 105, 0.3)';
                      e.target.style.boxShadow = 'none';
                    }}
                    placeholder="Project Discussion"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wide mb-2"
                    style={{ color: '#64748b' }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-300 focus:outline-none resize-none"
                    style={{
                      background: 'rgba(30, 41, 59, 0.5)',
                      border: '1px solid rgba(71, 85, 105, 0.3)',
                      color: '#f1f5f9'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(148, 163, 184, 0.6)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(100, 116, 139, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(71, 85, 105, 0.3)';
                      e.target.style.boxShadow = 'none';
                    }}
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(100, 116, 139, 0.4), rgba(71, 85, 105, 0.5))',
                    border: '1px solid rgba(148, 163, 184, 0.4)',
                    color: '#f1f5f9',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(148, 163, 184, 0.5), rgba(100, 116, 139, 0.6))';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(100, 116, 139, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(100, 116, 139, 0.4), rgba(71, 85, 105, 0.5))';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
