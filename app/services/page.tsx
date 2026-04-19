import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/page-hero';
import { CtaBanner } from '@/components/sections/cta-banner';
import { AnimatedSection } from '@/components/animated-section';
import { services } from '@/lib/data';
import { getIcon } from '@/lib/icon-map';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Construction Services',
  description: 'Explore our full range of construction services, including exteriors, interiors, siding, decks, roofing, and concrete. EJS Calderon Construction — Middletown NY.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero 
        title="Our Services"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        imageSrc="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000&auto=format&fit=crop"
      />

      {/* Detailed Services Alternating Grid */}
      <section className="bg-white py-12 md:py-24">
        {services.map((service, idx) => {
          const isEven = idx % 2 === 0;
          const Icon = getIcon(service.icon);
          return (
            <div key={service.id} id={service.id} className="scroll-m-24 py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Image */}
                  <AnimatedSection 
                    animation={isEven ? "slide-right" : "slide-left"} 
                    className={`relative h-[400px] sm:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl ${!isEven ? 'lg:order-2' : ''}`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10"></div>
                  </AnimatedSection>
                  
                  {/* Content */}
                  <AnimatedSection animation="fade-up" className={!isEven ? 'lg:order-1' : ''}>
                    <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center text-brand mb-6">
                      <Icon size={32} />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-heading font-black text-jet leading-tight mb-6">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {service.description} We bring years of specialized experience to completely revitalize and upgrade this aspect of your property, ensuring durability and aesthetic perfection.
                    </p>
                    
                    <ul className="space-y-4 mb-10">
                      {service.features.map(feature => (
                        <li key={feature} className="flex items-center gap-3 text-jet font-medium">
                          <CheckCircle2 className="text-brand shrink-0" size={20} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      href="/contact" 
                      className="inline-block bg-brand text-white px-8 py-4 rounded-sm font-bold tracking-wide uppercase hover:bg-brand-dark transition-all shadow-lg hover:shadow-brand/40 hover:-translate-y-1 active:scale-95"
                    >
                      Request a Quote
                    </Link>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Process Section */}
      <section className="bg-offwhite py-24 border-y border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="text-brand font-bold text-sm uppercase tracking-widest mb-4 block">How We Work</span>
            <h2 className="text-4xl sm:text-5xl font-heading font-black text-jet leading-tight">
              Our 5-Step Process
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-[44px] left-0 w-full h-[3px] bg-gradient-to-r from-brand-light via-brand to-brand-dark opacity-30"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">
              {[
                { step: "01", title: "Consultation", desc: "Initial site visit to discuss your vision." },
                { step: "02", title: "Design", desc: "Drafting plans and selecting materials." },
                { step: "03", title: "Permitting", desc: "Handling all municipal approvals." },
                { step: "04", title: "Construction", desc: "Executing the build with precision." },
                { step: "05", title: "Walkthrough", desc: "Final inspection and handover." },
              ].map((item, idx) => (
                <AnimatedSection key={item.step} animation="fade-up" delay={idx * 150} className="text-center group">
                  <div className="w-24 h-24 mx-auto bg-white border-4 border-brand text-brand rounded-full flex items-center justify-center text-3xl font-heading font-black shadow-lg mb-6 group-hover:-translate-y-2 transition-transform">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-jet mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
