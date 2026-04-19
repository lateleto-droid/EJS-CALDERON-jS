import { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { CtaBanner } from '@/components/sections/cta-banner';
import { FaqAccordion } from '@/components/sections/faq-accordion';

export const metadata: Metadata = {
  title: 'FAQ | EJS Calderon Construction — Construction Answers Middletown NY',
  description: 'Find answers to frequently asked questions about construction, remodeling, permitting, pricing, and timelines with EJS Calderon Construction.',
};

export default function FaqPage() {
  return (
    <>
      <PageHero 
        title="Frequently Asked Questions"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
        imageSrc="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="bg-offwhite py-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
