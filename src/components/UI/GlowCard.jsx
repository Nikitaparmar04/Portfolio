import React from 'react';

export default function GlowCard({ children, className = "", glowColor = "purple" }) {
  const glowColors = {
    purple: 'rgba(139, 92, 246, 0.3)',
    pink: 'rgba(236, 72, 153, 0.3)',
    cyan: 'rgba(6, 182, 212, 0.3)',
    emerald: 'rgba(16, 185, 129, 0.3)',
    blue: 'rgba(59, 130, 246, 0.3)'
  };

  return (
    <div 
      className={`relative group ${className}`}
    >
      {/* Glow Effect */}
      <div 
        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
        style={{
          background: `linear-gradient(135deg, ${glowColors[glowColor]}, transparent)`,
        }}
      />
      
      {/* Animated Border */}
      <div 
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.5), rgba(236, 72, 153, 0.5), rgba(6, 182, 212, 0.5))',
          backgroundSize: '200% 200%',
          animation: 'borderGlow 3s ease infinite'
        }}
      />
      
      {/* Card Content */}
      <div 
        className="relative rounded-2xl transition-all duration-300"
        style={{
          background: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(71, 85, 105, 0.3)'
        }}
      >
        {children}
      </div>

      <style>{`
        @keyframes borderGlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}
