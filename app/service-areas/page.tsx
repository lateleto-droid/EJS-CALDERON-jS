import { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { CtaBanner } from '@/components/sections/cta-banner';
import { serviceAreas } from '@/lib/data';
import { AnimatedSection } from '@/components/animated-section';
import { MapPin } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Service Areas | EJS Calderon Construction — Orange County NY',
  description: 'EJS Calderon Construction serves Middletown, Newburgh, Port Jervis, Goshen, Monroe, Warwick, Montgomery, Chester, and surrounding areas in NY.',
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero 
        title="Service Areas"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Service Areas' }]}
        imageSrc="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-jet leading-tight mb-6">
              Proudly Serving the Hudson Valley
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Based in Middletown, NY, EJS Calderon Construction provides premium contracting services across Orange, Ulster, Dutchess, and Sullivan counties. 
              No matter where you are located within our service area, you can expect the same relentless dedication to quality.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceAreas.map((area, idx) => (
              <AnimatedSection key={area.name} animation="fade-up" delay={idx * 50} className="bg-offwhite rounded-xl p-8 border-b-4 border-brand shadow-sm hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand shadow border border-gray-100 mb-6 group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading text-jet mb-2">{area.name}</h3>
                <span className="text-xs font-bold uppercase tracking-widest text-brand mb-4 block">{area.county}</span>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {area.desc}
                </p>
                <Link 
                  href="/projects" 
                  className="text-jet font-bold text-xs uppercase tracking-widest hover:text-brand transition-colors inline-flex items-center gap-1 group-hover:gap-2"
                >
                  View Projects Here <span>→</span>
                </Link>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* Counties Served Row */}
      <section className="bg-jet py-12 text-center text-white border-y-4 border-brand">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-6 sm:gap-12 opacity-80">
            <span className="font-heading font-black text-xl md:text-2xl tracking-wide">ORANGE COUNTY</span>
            <span className="font-heading font-black text-xl md:text-2xl tracking-wide">ULSTER COUNTY</span>
            <span className="font-heading font-black text-xl md:text-2xl tracking-wide">DUTCHESS COUNTY</span>
            <span className="font-heading font-black text-xl md:text-2xl tracking-wide">SULLIVAN COUNTY</span>
         </div>
      </section>

      <CtaBanner />
    </>
  );
}
