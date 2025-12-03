export const heroStyles = {
  section: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem 1rem',
    minHeight: '100vh',
    background: 'transparent',
    color: 'white',
    overflow: 'hidden'
  },

  gradientOverlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
    zIndex: 1,
    pointerEvents: 'none'
  },

  container: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '2rem',
    maxWidth: '1200px',
    width: '100%',
    position: 'relative',
    zIndex: 2
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '2rem',
    alignItems: 'center'
  },

  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '1rem'
  },

  heading: {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: '700',
    lineHeight: '1.2',
    color: '#f1f5f9',
    marginBottom: '1rem',
    letterSpacing: '-0.02em'
  },

  description: {
    fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
    color: '#cbd5e1',
    marginBottom: '2.5rem',
    lineHeight: '1.7',
    maxWidth: '500px'
  },

  socialContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '2.5rem'
  },

  socialIcon: {
    color: '#94a3b8',
    cursor: 'pointer',
    display: 'flex',
    padding: '0.75rem',
    borderRadius: '50%',
    background: 'rgba(30, 41, 59, 0.6)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(71, 85, 105, 0.3)',
    transition: 'all 0.3s ease'
  },

  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    flexWrap: 'wrap'
  },

  primaryButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.875rem 1.75rem',
    background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
    border: 'none',
    borderRadius: '0.75rem',
    color: 'white',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 20px rgba(139, 92, 246, 0.4)',
    transition: 'all 0.3s ease'
  },

  secondaryButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.875rem 1.75rem',
    background: 'rgba(30, 41, 59, 0.6)',
    border: '1px solid rgba(139, 92, 246, 0.3)',
    borderRadius: '0.75rem',
    color: '#cbd5e1',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease'
  },

  terminal: {
    background: 'rgba(15, 23, 42, 0.7)',
    border: '1px solid rgba(139, 92, 246, 0.2)',
    borderRadius: '1rem',
    overflow: 'hidden',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 40px rgba(139, 92, 246, 0.1)',
    backdropFilter: 'blur(20px)'
  },

  terminalHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 1.5rem',
    background: 'rgba(30, 41, 59, 0.6)',
    borderBottom: '1px solid rgba(71, 85, 105, 0.2)'
  },

  terminalButtons: {
    display: 'flex',
    gap: '0.5rem'
  },

  terminalButton: {
    height: '12px',
    width: '12px',
    borderRadius: '50%'
  },

  terminalTitle: {
    fontSize: '0.75rem',
    color: '#64748b',
    fontFamily: 'monospace'
  },

  codeContent: {
    padding: '1.5rem',
    fontFamily: 'monospace',
    fontSize: 'clamp(0.75rem, 1.8vw, 0.95rem)',
    lineHeight: '1.7',
    overflow: 'auto'
  },

  cssString: `
    @media (min-width: 1024px) {
      .hero-grid {
        grid-template-columns: 1fr 1fr !important;
        gap: 3rem !important;
      }
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    .blink::after {
      content: '▋';
      animation: blink 1s infinite;
      color: #8b5cf6;
    }
    .social-icon {
      transition: all 0.3s ease;
    }
    .social-icon:hover {
      transform: translateY(-4px);
      background: rgba(139, 92, 246, 0.2) !important;
      border-color: rgba(139, 92, 246, 0.5) !important;
      color: #a78bfa !important;
      box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
    }
    .btn-gap {
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    .btn-gap::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s ease;
    }
    .btn-gap:hover::before {
      left: 100%;
    }
    .btn-gap:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 35px rgba(139, 92, 246, 0.4);
    }
    .btn-secondary:hover {
      border-color: rgba(139, 92, 246, 0.6) !important;
      background: rgba(139, 92, 246, 0.1) !important;
    }
    .accent-text {
      background: linear-gradient(135deg, #8b5cf6, #ec4899);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: none;
    }
    .terminal-glow {
      animation: terminalPulse 3s ease-in-out infinite;
    }
    @keyframes terminalPulse {
      0%, 100% { box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 40px rgba(139, 92, 246, 0.1); }
      50% { box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 60px rgba(139, 92, 246, 0.2); }
    }
  `
};
