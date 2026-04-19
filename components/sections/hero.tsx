import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, HardHat, Award } from 'lucide-react';
import { AnimatedSection } from '../animated-section';

export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col justify-center bg-jet">
      {/* Background with zoom animation and sleek gradients */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(17,24,39,0.8),rgba(17,24,39,0.8)),repeating-linear-gradient(45deg,#111827,#111827_10px,#1a2233_10px,#1a2233_20px)]">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop"
          alt="Construction site"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-hero-zoom opacity-30 mix-blend-overlay"
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 border-4 border-brand/20 rotate-12" />
        <div className="absolute bottom-1/4 right-20 w-48 h-48 border-4 border-brand/10 rotate-45" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-brand/10 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-[80px] w-full pt-20 h-full flex flex-col justify-center">

        <div className="absolute top-[120px] right-[40px] bg-white/5 border border-brand px-[20px] py-[12px] rounded-[4px] text-center hidden sm:block">
          <div className="text-[10px] text-white font-[700] tracking-[0.1em] uppercase">FULLY LICENSED & INSURED</div>
        </div>

        <div className="max-w-[700px]">
          <AnimatedSection animation="fade-in">
            <span className="text-brand font-bold text-[14px] uppercase tracking-[0.2em] mb-4 block">
              Premium Construction Services in Middletown, NY
            </span>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="text-[40px] md:text-[64px] font-accent font-normal text-white leading-[1.1] mb-6 max-w-[700px]">
              Building Your <br />
              <span className="text-brand">
                Vision
              </span>, <br />
              Crafting Excellence.
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-[18px] text-silver mb-10 max-w-[600px] leading-[1.6]">
              We bring your residential and commercial construction dreams to life with uncompromising quality, precision, and dedication.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300} className="flex flex-wrap gap-[20px] mb-16">
            <Link 
              href="/contact" 
              className="bg-brand text-white px-8 py-3 font-bold text-[12px] uppercase transition-colors hover:bg-brand-dark"
            >
              Get a Free Estimate
            </Link>
            <Link 
              href="/projects" 
              className="bg-transparent text-white border border-white px-8 py-3 font-bold text-[12px] uppercase transition-colors hover:bg-white/10"
            >
              View Our Projects
            </Link>
          </AnimatedSection>

          {/* We'll preserve the standard trust badges below but hide them on desktop if needed, or keep them as asked */}
          <AnimatedSection animation="fade-in" delay={500} className="flex flex-wrap gap-4 pt-8 border-t border-white/5 sm:hidden">
            <div className="bg-white/5 border border-brand px-5 py-3 rounded-[4px] flex items-center gap-3">
              <ShieldCheck className="text-brand" size={16} />
              <span className="text-[10px] text-white font-bold tracking-[0.1em] uppercase">Licensed & Insured</span>
            </div>
            <div className="bg-white/5 border border-brand px-5 py-3 rounded-[4px] flex items-center gap-3">
              <HardHat className="text-brand" size={16} />
              <span className="text-[10px] text-white font-bold tracking-[0.1em] uppercase">Free Estimates</span>
            </div>
            <div className="bg-white/5 border border-brand px-5 py-3 rounded-[4px] flex items-center gap-3">
              <Award className="text-brand" size={16} />
              <span className="text-[10px] text-white font-bold tracking-[0.1em] uppercase">Quality Craftsmanship</span>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
