import { ShieldCheck, Target, Clock, DollarSign } from 'lucide-react';
import { AnimatedSection } from '../animated-section';

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Licensed & Insured",
      desc: "Complete peace of mind knowing your project is protected and built to local codes in NY.",
      icon: ShieldCheck
    },
    {
      title: "Quality Materials",
      desc: "We never cut corners. We source premium-grade materials to ensure longevity and beauty.",
      icon: Target
    },
    {
      title: "On-Time Delivery",
      desc: "We respect your time. Our rigorous project management keeps everything strictly on schedule.",
      icon: Clock
    },
    {
      title: "Competitive Pricing",
      desc: "Transparent estimates with no hidden fees, providing maximum value for your investment.",
      icon: DollarSign
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <AnimatedSection animation="fade-up">
            <span className="text-brand font-bold text-sm uppercase tracking-widest mb-4 block">The EJS Calderon Difference</span>
            <h2 className="text-4xl sm:text-5xl font-heading font-black text-jet leading-tight mb-6">
              Why Partner With Us?
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {reasons.map((reason, idx) => (
            <AnimatedSection key={reason.title} animation="fade-up" delay={idx * 100} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center text-white shadow-lg shadow-brand/30">
                  <reason.icon size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading text-jet mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{reason.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
