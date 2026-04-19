'use client';

import { useState, useEffect } from 'react';
import { Logo } from './logo';

export function Preloader() {
  const [complete, setComplete] = useState(false);
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 100);

    // Also wait for window load
    const handleLoad = () => {
      setProgress(100);
      setComplete(true);
      setTimeout(() => setVisible(false), 800); // Wait for fade out animation
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Safety fallback (max 2 seconds)
    const timeout = setTimeout(handleLoad, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!visible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-jet flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${complete ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className={`transition-all duration-700 ease-out ${complete ? 'scale-110 blur-sm' : 'scale-100 blur-0'}`}>
        <Logo size="lg" variant="full" />
      </div>
      
      <div className="w-64 h-1 bg-white/10 rounded-full mt-12 overflow-hidden flex">
        <div 
          className="h-full bg-brand transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
