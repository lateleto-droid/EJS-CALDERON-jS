import { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { CtaBanner } from '@/components/sections/cta-banner';
import { ProjectsGallery } from '@/components/sections/projects-gallery';

export const metadata: Metadata = {
  title: 'Our Projects | EJS Calderon Construction Portfolio — Middletown NY',
  description: 'View our portfolio of residential and commercial construction projects, including complete remodels, decks, roofing, and additions.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero 
        title="Our Projects"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Projects' }]}
        imageSrc="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="bg-offwhite py-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsGallery />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
