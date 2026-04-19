'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '@/lib/data';
import { AnimatedSection } from '../animated-section';

export function FeaturedProjects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400; // approx card width
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-jet py-24 text-white overflow-hidden border-t-4 border-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <AnimatedSection animation="fade-up" className="max-w-2xl">
            <span className="text-brand font-bold text-sm uppercase tracking-widest mb-4 block">Our Portfolio</span>
            <h2 className="text-4xl sm:text-5xl font-heading font-black leading-tight">
              Featured Projects
            </h2>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={200} className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand hover:border-brand transition-colors text-white"
              aria-label="Previous projects"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand hover:border-brand transition-colors text-white"
              aria-label="Next projects"
            >
              <ChevronRight size={24} />
            </button>
          </AnimatedSection>
        </div>
      </div>

      <div className="w-full pl-4 sm:pl-6 lg:pl-8">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-12 pt-4 hide-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, idx) => (
            <AnimatedSection 
              key={project.id} 
              animation="fade-up"
              delay={idx * 100}
              className="min-w-[300px] sm:min-w-[400px] w-[300px] sm:w-[400px] shrink-0 snap-start group relative rounded-lg overflow-hidden cursor-pointer"
            >
              <div className="h-[450px] relative w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Always visible category badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-brand text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm">
                    {project.category}
                  </span>
                </div>

                {/* Dark overlay that brightens on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/95"></div>
                
                {/* Content */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 transition-transform duration-300">
                  <h3 className="text-2xl font-bold font-heading text-white mb-2 group-hover:text-brand transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-6 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
                    {project.description}
                  </p>
                  
                  {/* View details - slides up on hover */}
                  <div className="overflow-hidden">
                    <Link 
                      href={`/projects`}
                      className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <span className="border-b border-brand pb-0.5">View Details</span>
                      <span className="text-brand">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
          {/* Spacer for right edge */}
          <div className="min-w-[20px] shrink-0"></div>
        </div>
      </div>
    </section>
  );
}
