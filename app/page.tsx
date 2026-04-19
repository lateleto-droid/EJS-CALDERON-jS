import { Metadata } from 'next';
import { Hero } from '@/components/sections/hero';
import { StatsSection } from '@/components/sections/stats';
import { AboutPreview } from '@/components/sections/about-preview';
import { ServicesSection } from '@/components/sections/services';
import { Testimonials } from '@/components/sections/testimonials';
import { FaqPreview } from '@/components/sections/faq-preview';
import { CtaBanner } from '@/components/sections/cta-banner';

export const metadata: Metadata = {
  title: 'EJS Calderon Construction | Premium Construction Services Middletown NY',
  description: 'Premium construction services in Middletown, NY. EJS Calderon Construction offers exteriors, interiors, siding, decks, roofing, and concrete.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <AboutPreview />
      <ServicesSection />
      <Testimonials />
      <FaqPreview />
      <CtaBanner />
    </>
  );
}
