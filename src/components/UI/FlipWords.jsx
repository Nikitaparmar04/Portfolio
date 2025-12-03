import React, { useState, useEffect } from 'react';

const FlipWords = ({ words = [], duration = 2000, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300); // Animation duration
      
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  if (words.length === 0) return null;

  return (
    <span 
      className={`flip-words ${className}`}
      style={{
        display: 'inline-block',
        position: 'relative',
        minWidth: '200px', // Adjust based on your longest word
        textAlign: 'left'
      }}
    >
      <style>
        {`
          .flip-words {
            perspective: 1000px;
          }
          
          .flip-word {
            display: inline-block;
            transform-style: preserve-3d;
            transition: transform 0.3s ease, opacity 0.3s ease;
          }
          
          .flip-word.flip-out {
            transform: rotateX(90deg);
            opacity: 0;
          }
          
          .flip-word.flip-in {
            transform: rotateX(0deg);
            opacity: 1;
          }
        `}
      </style>
      
      <span 
        className={`flip-word ${isAnimating ? 'flip-out' : 'flip-in'}`}
      >
        {words[currentIndex]}
      </span>
    </span>
  );
};

export default FlipWords;