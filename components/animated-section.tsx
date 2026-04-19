'use client';

import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale';
  delay?: number; // Multiple of 100ms
  threshold?: number;
}

export function AnimatedSection({ 
  children, 
  className, 
  animation = 'fade-up', 
  delay = 0,
  threshold = 0.1 
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation(threshold);

  const animations = {
    'fade-up': 'translate-y-10 opacity-0',
    'fade-in': 'opacity-0',
    'slide-left': 'translate-x-10 opacity-0',
    'slide-right': '-translate-x-10 opacity-0',
    'scale': 'scale-90 opacity-0',
  };

  const visibleState = {
    'fade-up': 'translate-y-0 opacity-100',
    'fade-in': 'opacity-100',
    'slide-left': 'translate-x-0 opacity-100',
    'slide-right': 'translate-x-0 opacity-100',
    'scale': 'scale-100 opacity-100',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]',
        isVisible ? visibleState[animation] : animations[animation],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
