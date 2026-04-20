import { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/page-hero';
import { CtaBanner } from '@/components/sections/cta-banner';
import { AnimatedSection } from '@/components/animated-section';
import { Target, Eye, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the history, mission, and team at EJS Calderon Construction LLC — Middletown NY.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero 
        title="About Us"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
        imageSrc="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop"
      />

      {/* Our Story */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <span className="text-brand font-bold text-sm uppercase tracking-widest mb-4 block">Our Story</span>
              <h2 className="text-4xl sm:text-5xl font-heading font-black text-jet leading-tight mb-6">
                Built on Trust, Crafted with Passion
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  EJS Calderon Construction LLC began with a shared vision: to elevate the standard of construction in the Hudson Valley. What started as a small family crew handling localized repairs has grown into a premier residential and commercial construction firm.
                </p>
                <p>
                  We treat every project as if we are building for our own family. Our commitment is entirely centered around transparency, rigorous quality control, and delivering beyond expectations.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-left" className="relative">
               {/* Vertical Timeline */}
               <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform sm:-translate-x-1/2"></div>
               {[
                 { year: "2008", title: "Founded", desc: "Started as a family-run exterior repair crew in Middletown." },
                 { year: "2012", title: "First Custom Build", desc: "Successfully completed our first ground-up residential build." },
                 { year: "2018", title: "Commercial Expansion", desc: "Began offering commercial fit-outs and renovations." },
                 { year: "Present", title: "Industry Leaders", desc: "Recognized as premium contractors across Orange County." },
               ].map((item, idx) => (
                 <div key={item.year} className={`relative flex items-center mb-12 sm:w-1/2 ${idx % 2 === 0 ? 'sm:ml-auto sm:pl-8' : 'sm:pr-8 sm:text-right'} pl-12`}>
                   <div className="absolute left-3.5 sm:left-auto sm:right-auto w-4 h-4 rounded-full bg-brand border-4 border-white shadow sm:-translate-x-1/2 sm:left-1/2 z-10 top-1.5" />
                   <div>
                     <span className="text-brand font-bold font-heading text-xl">{item.year}</span>
                     <h4 className="text-xl font-bold text-jet mt-1 mb-2">{item.title}</h4>
                     <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                   </div>
                 </div>
               ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-offwhite py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Our Mission", icon: Target, desc: "To deliver superior construction services by consistently improving our processes and maintaining the highest levels of professionalism and integrity." },
              { title: "Our Vision", icon: Eye, desc: "To be the preferred construction partner in the Hudson Valley, recognized for our unwavering commitment to quality and client satisfaction." },
              { title: "Core Values", icon: Heart, desc: "Craftsmanship, Transparency, Reliability, and Community. We build more than structures; we build enduring relationships." }
            ].map((card, idx) => (
              <AnimatedSection key={card.title} animation="fade-up" delay={idx * 100} className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-xl transition-shadow border-t-4 border-brand">
                <card.icon size={48} className="text-brand mx-auto mb-6" />
                <h3 className="text-2xl font-bold font-heading text-jet mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
