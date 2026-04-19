import Link from 'next/link';
import { AnimatedSection } from '../animated-section';

export function CtaBanner() {
  return (
    <section className="relative bg-brand py-24 overflow-hidden border-b-8 border-jet">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_2px,transparent_2px)] [background-size:32px_32px]"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <AnimatedSection animation="scale">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-white leading-tight mb-8">
            Ready to Build Your Vision?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Contact EJS Calderon Construction today for a free, no-obligation estimate on your next residential or commercial project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/contact" 
              className="bg-jet text-white px-10 py-5 rounded-sm font-bold tracking-[0.1em] uppercase hover:bg-jet-light transition-all shadow-2xl hover:shadow-black/50 hover:-translate-y-1 active:scale-95"
            >
              Get Your Free Estimate
            </Link>
            <a 
              href="tel:5852611174" 
              className="bg-white text-brand px-10 py-5 rounded-sm font-bold tracking-[0.1em] uppercase hover:bg-gray-100 transition-all shadow-2xl hover:-translate-y-1 active:scale-95 border border-transparent"
            >
              Call (585) 261-1174
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
