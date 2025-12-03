import React from 'react';
import { Github, Linkedin, Facebook, Twitter, Download, Mail } from 'lucide-react';
import ParticleBackground from '../components/UI/ParticleBackground';
import { heroStyles } from '../styles/heroStyles';
import { personalData } from '../data/personal-data';
import FlipWords from '../components/UI/FlipWords';

function HeroSection() {
  return (
    <>
    <section style={heroStyles.section}>
      <ParticleBackground />
      
      <div style={heroStyles.gradientOverlay} />

      <div style={heroStyles.container}>
        <style>{heroStyles.cssString}</style>

        <div className="hero-grid" style={heroStyles.grid}>
          {/* Left Column */}
          <div style={heroStyles.leftColumn}>
            <h1 style={heroStyles.heading}>
              Hello, <br />
              I'm{' '}
              <span className="accent-text">{personalData.name}</span>
              <br />
              {`a  `}
               <FlipWords 
                words={personalData.designation}
                duration={3000}
                className="text-slate-400"
              />
            </h1>

            <p style={heroStyles.description}>
              Crafting elegant solutions with modern technologies. Specialized in building scalable web applications.
            </p>

            {/* Social Icons */}
            <div style={heroStyles.socialContainer}>
              {[
                { href: personalData.github, icon: Github },
                { href: personalData.linkedIn, icon: Linkedin },
                { href: personalData.facebook, icon: Facebook },
                { 
                  href: personalData.leetcode, 
                  icon: () => (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                    </svg>
                  )
                },
                { href: personalData.twitter, icon: Twitter }
              ].map((item, idx) => (
                <a 
                  key={idx}
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon"
                  style={heroStyles.socialIcon}
                >
                  <item.icon size={24} />
                </a>
              ))}
            </div>

            {/* Buttons */}
            <div style={heroStyles.buttonContainer}>
              <a href="#contact" style={{ textDecoration: 'none' }}>
                <button className="btn-gap" style={heroStyles.primaryButton}>
                  <span>Contact me</span>
                  <Mail size={18} />
                </button>
              </a>

              <a href={personalData.resume} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button className="btn-gap" style={heroStyles.secondaryButton}>
                  <span>Get Resume</span>
                  <Download size={18} />
                </button>
              </a>
            </div>
          </div>

          {/* Right Column - Code Terminal */}
          <div style={heroStyles.terminal}>
            <div style={heroStyles.terminalHeader}>
              <div style={heroStyles.terminalButtons}>
                {['#ef4444', '#f59e0b', '#10b981'].map((color, idx) => (
                  <div key={idx} style={{ ...heroStyles.terminalButton, background: color }} />
                ))}
              </div>
              <div style={heroStyles.terminalTitle}>developer.js</div>
            </div>

            <div style={heroStyles.codeContent}>
              <div className="blink">
                <span style={{ color: '#64748b' }}>const</span>
                {' '}<span style={{ color: '#cbd5e1' }}>developer</span>
                {' '}<span style={{ color: '#64748b' }}>=</span>
                {' '}<span style={{ color: '#94a3b8' }}>{'{'}</span>
              </div>
              <div style={{ marginLeft: '1.5rem' }}>
                <span style={{ color: '#cbd5e1' }}>name:</span>
                {' '}<span style={{ color: '#94a3b8' }}>'</span>
                <span style={{ color: '#e2e8f0' }}>Nikita Parmar</span>
                <span style={{ color: '#94a3b8' }}>',</span>
              </div>
              <div style={{ marginLeft: '1.5rem' }}>
                <span style={{ color: '#cbd5e1' }}>role:</span>
                {' '}<span style={{ color: '#94a3b8' }}>'</span>
                <span style={{ color: '#e2e8f0' }}>Software Developer</span>
                <span style={{ color: '#94a3b8' }}>',</span>
              </div>
              <div style={{ marginLeft: '1.5rem' }}>
                <span style={{ color: '#cbd5e1' }}>skills:</span>
                {' '}<span style={{ color: '#94a3b8' }}>[</span>
              </div>
              <div style={{ marginLeft: '3rem' }}>
                <span style={{ color: '#94a3b8' }}>'</span>
                <span style={{ color: '#e2e8f0' }}>React</span>
                <span style={{ color: '#94a3b8' }}>',  '</span>
                <span style={{ color: '#e2e8f0' }}>NextJS</span>
                <span style={{ color: '#94a3b8' }}>',  '</span>
                <span style={{ color: '#e2e8f0' }}>Redux</span>
                <span style={{ color: '#94a3b8' }}>',</span>
              </div>
              <div style={{ marginLeft: '3rem' }}>
                <span style={{ color: '#94a3b8' }}>'</span>
                <span style={{ color: '#e2e8f0' }}>Express</span>
                <span style={{ color: '#94a3b8' }}>',  '</span>
                <span style={{ color: '#e2e8f0' }}>NestJS</span>
                <span style={{ color: '#94a3b8' }}>',  '</span>
                <span style={{ color: '#e2e8f0' }}>MongoDB</span>
                <span style={{ color: '#94a3b8' }}>',</span>
              </div>
              <div style={{ marginLeft: '3rem' }}>
                <span style={{ color: '#94a3b8' }}>'</span>
                <span style={{ color: '#e2e8f0' }}>Docker</span>
                <span style={{ color: '#94a3b8' }}>',  '</span>
                <span style={{ color: '#e2e8f0' }}>AWS</span>
                <span style={{ color: '#94a3b8' }}>'</span>
              </div>
              <div style={{ marginLeft: '1.5rem' }}>
                <span style={{ color: '#94a3b8' }}>],</span>
              </div>
              <div style={{ marginLeft: '1.5rem' }}>
                <span style={{ color: '#cbd5e1' }}>traits:</span>
                {' '}<span style={{ color: '#94a3b8' }}>{'{'}</span>
              </div>
              <div style={{ marginLeft: '3rem' }}>
                <span style={{ color: '#cbd5e1' }}>hardWorker:</span>
                {' '}<span style={{ color: '#64748b' }}>true</span>
                <span style={{ color: '#94a3b8' }}>,</span>
              </div>
              <div style={{ marginLeft: '3rem' }}>
                <span style={{ color: '#cbd5e1' }}>quickLearner:</span>
                {' '}<span style={{ color: '#64748b' }}>true</span>
                <span style={{ color: '#94a3b8' }}>,</span>
              </div>
              <div style={{ marginLeft: '3rem' }}>
                <span style={{ color: '#cbd5e1' }}>problemSolver:</span>
                {' '}<span style={{ color: '#64748b' }}>true</span>
              </div>
              <div style={{ marginLeft: '1.5rem' }}>
                <span style={{ color: '#94a3b8' }}>{'}'}</span>
              </div>
              <div>
                <span style={{ color: '#94a3b8' }}>{'};'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
}

export default HeroSection;
