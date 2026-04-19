'use client';

import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { reviews } from '@/lib/data';
import { AnimatedSection } from '../animated-section';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <span className="text-brand font-bold text-sm uppercase tracking-widest mb-4 block">Client Testimonials</span>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-jet leading-tight">
            What Our Clients Say
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="scale" delay={200} className="relative bg-offwhite p-8 md:p-16 rounded-2xl shadow-xl">
          <Quote className="absolute top-8 left-8 md:top-12 md:left-12 text-brand/10 w-16 h-16 md:w-24 md:h-24 fill-current transform -scale-x-100" />
          
          <div className="relative z-10 h-[220px] sm:h-[180px] flex flex-col justify-center items-center text-center">
            {reviews.map((review, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 flex flex-col justify-center items-center transition-all duration-700 ease-in-out ${
                  idx === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
                }`}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#FFD700] text-xl">★</span>
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-serif italic text-gray-700 mb-8 leading-relaxed">
                  &quot;{review.quote}&quot;
                </p>
                <h4 className="font-heading font-bold text-jet uppercase tracking-wider text-sm">
                  — {review.name}
                </h4>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-brand w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
