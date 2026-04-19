import Link from 'next/link';
import { services } from '@/lib/data';
import { getIcon } from '@/lib/icon-map';
import { AnimatedSection } from '../animated-section';

export function ServicesSection() {
  return (
    <section className="bg-offwhite py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <AnimatedSection animation="fade-up">
            <span className="text-brand font-bold text-sm uppercase tracking-widest mb-4 block">Our Expertise</span>
            <h2 className="text-4xl sm:text-5xl font-heading font-black text-jet leading-tight mb-6">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-gray-600 text-lg">
              From the foundation to the highest roof peak, we provide end-to-end services to bring your project to life with precision and care.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = getIcon(service.icon);
            return (
              <AnimatedSection 
                key={service.id} 
                animation="fade-up" 
                delay={index * 100}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-b-2 border-transparent hover:border-brand group"
              >
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center text-brand mb-6 group-hover:-translate-y-1 transition-transform">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold font-heading text-jet mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed line-clamp-3">
                  {service.description}
                </p>
                <Link 
                  href={`/services#${service.id}`}
                  className="text-brand font-semibold uppercase tracking-wide text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn More <span>→</span>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <AnimatedSection animation="fade-up">
            <Link 
              href="/services" 
              className="inline-block bg-jet text-white px-8 py-4 rounded-sm font-bold tracking-wide uppercase hover:bg-jet-light transition-colors shadow-lg active:scale-95"
            >
              View All Services
            </Link>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
}
