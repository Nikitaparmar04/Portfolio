import React, { useEffect, useState } from 'react';

export default function Loader() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: 'linear-gradient(to bottom, #0f172a, #1e293b)',
      }}
    >
      {/* Terminal Window */}
      <div 
        className="w-80 rounded-lg overflow-hidden"
        style={{
          background: 'rgba(15, 23, 42, 0.9)',
          border: '1px solid rgba(71, 85, 105, 0.3)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
        }}
      >
        {/* Terminal Header */}
        <div 
          className="flex items-center justify-between px-4 py-3"
          style={{
            background: 'rgba(30, 41, 59, 0.8)',
            borderBottom: '1px solid rgba(71, 85, 105, 0.3)'
          }}
        >
          <span 
            className="text-sm font-mono"
            style={{ color: '#94a3b8' }}
          >
            Status
          </span>
          <div className="flex gap-2">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ background: '#ef4444' }}
            />
            <div 
              className="w-3 h-3 rounded-full"
              style={{ background: '#eab308' }}
            />
            <div 
              className="w-3 h-3 rounded-full"
              style={{ background: '#22c55e' }}
            />
          </div>
        </div>

        {/* Terminal Body */}
        <div 
          className="p-6"
          style={{
            background: '#1e1e1e',
            minHeight: '120px'
          }}
        >
          <div className="flex items-center gap-2">
            <span 
              className="text-lg font-mono font-semibold"
              style={{ color: '#22c55e' }}
            >
              Loading{dots}
            </span>
            <span 
              className="inline-block w-2 h-5"
              style={{
                background: '#22c55e',
                animation: 'blink 1s infinite'
              }}
            />
          </div>
          
          {/* Loading bar */}
          <div 
            className="mt-4 h-1 rounded-full overflow-hidden"
            style={{ background: 'rgba(71, 85, 105, 0.3)' }}
          >
            <div 
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(to right, #22c55e, #10b981)',
                width: '100%',
                animation: 'loading 1.5s ease-in-out infinite'
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
