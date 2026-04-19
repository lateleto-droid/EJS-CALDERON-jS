import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from '../animated-section';

export function AboutPreview() {
  return (
    <section className="bg-white py-24 object-cover relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <AnimatedSection animation="slide-right" className="relative h-[600px] rounded-lg overflow-hidden shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop"
              alt="Construction team at work"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10"></div>
            
            {/* Overlay box */}
            <div className="absolute bottom-8 left-8 bg-jet p-6 rounded shadow-xl max-w-sm hidden sm:block">
              <p className="text-white font-serif italic text-lg leading-relaxed">
                &quot;We don&apos;t just build structures. We build trust, enduring relationships, and the foundation of our community.&quot;
              </p>
            </div>
          </AnimatedSection>
          
          <div>
            <AnimatedSection animation="fade-up">
              <span className="text-brand font-bold text-sm uppercase tracking-widest mb-4 block">Who We Are</span>
              <h2 className="text-4xl sm:text-5xl font-heading font-black text-jet leading-tight mb-6">
                Middletown&apos;s Trusted Name in Construction
              </h2>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={100}>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                EJS Calderon Construction LLC was founded on a simple principle: deliver exceptional craftsmanship without compromise. Based right here in Middletown, NY, we are a family-owned business deeply rooted in our community.
              </p>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Whether we&apos;re pouring a new foundation, raising the roof on a dream home, or remodeling a modern kitchen, our team brings decades of combined experience, premium materials, and a steadfast commitment to your vision.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <Link 
                href="/about" 
                className="text-brand font-bold uppercase tracking-wide flex items-center gap-2 hover:gap-4 transition-all group"
              >
                Learn More About Us
                <span className="text-xl">→</span>
              </Link>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}
