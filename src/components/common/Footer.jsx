import React from "react";
import { Icon } from "@iconify/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative py-8 lg:py-10"
      style={{
        background: 'linear-gradient(to bottom, #0f172a, #1e293b)',
        borderTop: '1px solid rgba(71, 85, 105, 0.3)'
      }}
    >
      {/* Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'radial-gradient(ellipse at top, rgba(71, 85, 105, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Certifications & Badges Section */}
        <div className="mb-8">
          <h3
            className="text-center text-sm font-semibold mb-4 tracking-wider uppercase"
            style={{ color: '#94a3b8' }}
          >
            Certifications
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {/* Badge Container - You can add your AWS badge here */}
            <a
              href="https://www.credly.com/badges/a2d1a556-34fb-4a63-856a-da6f30cb0aaf/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-300"
              style={{
                opacity: 0.9
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = 1;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = 0.9;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                className="flex items-center gap-3 px-5 py-3 rounded-lg"
                style={{
                  background: 'rgba(30, 41, 59, 0.5)',
                  border: '1px solid rgba(71, 85, 105, 0.3)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* AWS Icon */}
                <Icon
                  icon="skill-icons:aws-dark"
                  className="text-3xl"
                />
                <div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: '#f1f5f9' }}
                  >
                    AWS Certified AI Practitioner
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: '#64748b' }}
                  >
                    Amazon Web Services
                  </div>
                </div>
                {/* Verification Badge */}
                <Icon
                  icon="mdi:check-decagram"
                  className="text-xl ml-2"
                  style={{ color: '#10b981' }}
                />
              </div>
            </a>

            {/* Google Project Management Certificate */}
            <a
              href="https://coursera.org/share/32ba2f52634add0bbc41db15d447e0a3"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-300"
              style={{
                opacity: 0.9
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = 1;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = 0.9;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                className="flex items-center gap-3 px-5 py-3 rounded-lg"
                style={{
                  background: 'rgba(30, 41, 59, 0.5)',
                  border: '1px solid rgba(71, 85, 105, 0.3)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Google Icon */}
                <Icon
                  icon="logos:google-icon"
                  className="text-3xl"
                />
                <div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: '#f1f5f9' }}
                  >
                    Foundation of Project Management
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: '#64748b' }}
                  >
                    Google • Jun 2024
                  </div>
                </div>
                {/* Verification Badge */}
                <Icon
                  icon="mdi:check-decagram"
                  className="text-xl ml-2"
                  style={{ color: '#10b981' }}
                />
              </div>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-6"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(71, 85, 105, 0.3), transparent)'
          }}
        />

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left - Name/Brand */}
          <div className="flex items-center gap-2">
            <span
              className="text-2xl font-bold"
              style={{
                fontFamily: "'Great Vibes', cursive",
                color: '#f1f5f9',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
              }}
            >
              &lt; Nikita /&gt;
            </span>
          </div>

          {/* Center - Copyright */}
          <div className="text-center">
            <p
              className="text-sm"
              style={{ color: '#94a3b8' }}
            >
              © {currentYear} Nikita. All rights reserved.
            </p>
            <p
              className="text-xs mt-1"
              style={{ color: '#64748b' }}
            >
              Built with React & TailwindCSS
            </p>
          </div>

          {/* Right - Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/nikitaparmar04"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300"
              style={{ color: '#94a3b8' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#f1f5f9';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#94a3b8';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Icon icon="mdi:github" className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/nikita-parmar01/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300"
              style={{ color: '#94a3b8' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#f1f5f9';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#94a3b8';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Icon icon="mdi:linkedin" className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/___nikita___parmar___/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300"
              style={{ color: '#94a3b8' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#f1f5f9';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#94a3b8';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Icon icon="mdi:instagram" className="text-2xl" />
            </a>
            <a
              href="https://x.com/NikitaParmar04"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300"
              style={{ color: '#94a3b8' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#f1f5f9';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#94a3b8';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Icon icon="mdi:twitter" className="text-2xl" />
            </a>
            <a
              href="mailto:nikitaparmar.dev@gmail.com"
              className="transition-all duration-300"
              style={{ color: '#94a3b8' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#f1f5f9';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#94a3b8';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Icon icon="mdi:email" className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
