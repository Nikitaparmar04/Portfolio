import React from 'react';

export default function GradientOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Gradient Orbs */}
      
      {/* Top Right Orb - Pink/Purple */}
      <div 
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
        style={{
          background: 'radial-gradient(circle, #ec4899 0%, #8b5cf6 50%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite'
        }}
      />
      
      {/* Top Left Orb - Cyan/Blue */}
      <div 
        className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #06b6d4 0%, #3b82f6 50%, transparent 70%)',
          animation: 'float 10s ease-in-out infinite reverse'
        }}
      />
      
      {/* Middle Right Orb - Purple */}
      <div 
        className="absolute top-1/3 -right-20 w-72 h-72 rounded-full opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #8b5cf6 0%, #6366f1 50%, transparent 70%)',
          animation: 'float 12s ease-in-out infinite'
        }}
      />
      
      {/* Bottom Left Orb - Emerald/Teal */}
      <div 
        className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #10b981 0%, #14b8a6 50%, transparent 70%)',
          animation: 'float 9s ease-in-out infinite reverse'
        }}
      />
      
      {/* Bottom Right Orb - Pink */}
      <div 
        className="absolute -bottom-20 right-1/4 w-64 h-64 rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #f472b6 0%, #ec4899 50%, transparent 70%)',
          animation: 'float 11s ease-in-out infinite'
        }}
      />

      {/* Keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(10px, -20px) scale(1.05);
          }
          50% {
            transform: translate(-5px, 10px) scale(0.95);
          }
          75% {
            transform: translate(-15px, -10px) scale(1.02);
          }
        }
      `}</style>
    </div>
  );
}
