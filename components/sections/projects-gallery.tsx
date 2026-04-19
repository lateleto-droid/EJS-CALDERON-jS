'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '@/lib/data';
import { AnimatedSection } from '../animated-section';
import { cn } from '@/lib/utils';

export function ProjectsGallery() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const categories = ['All', 'Exteriors', 'Interiors', 'Siding', 'Decks', 'Roofing', 'Concrete'];

  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

  // Simple image carousel (since we only have 1 image per project in the dummy data, we'll duplicate it to show carousel UI working)
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextImage = () => setImageIndex((prev) => (prev === 2 ? 0 : prev + 1));
  const prevImage = () => setImageIndex((prev) => (prev === 0 ? 2 : prev - 1));

  return (
    <>
      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300",
              filter === cat 
                ? "bg-brand text-white shadow-md" 
                : "bg-white text-gray-500 hover:bg-gray-100 border border-divider"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <AnimatedSection 
            key={project.id} 
            animation="fade-up" 
            delay={(idx % 3) * 100}
            className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <div onClick={() => openModal(project)}>
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-jet/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-brand text-white rounded-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye size={24} />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <span className="text-brand font-bold text-xs uppercase tracking-widest mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold font-heading text-jet mb-2">{project.title}</h3>
                <p className="text-gray-600 line-clamp-2 text-sm">
                  {project.description}
                </p>
                <div className="mt-6 flex items-center text-brand font-semibold text-sm uppercase tracking-wide group-hover:translate-x-1 transition-transform">
                  View Details <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          No projects found in this category.
        </div>
      )}

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-jet/90 backdrop-blur-sm" onClick={closeModal}></div>
          
          <div 
            className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-xl shadow-2xl overflow-y-auto animate-in fade-in zoom-in-95 duration-300"
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-jet hover:bg-brand hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col lg:flex-row">
              {/* Image Carousel Area */}
              <div className="lg:w-3/5 relative h-[300px] sm:h-[400px] lg:h-auto bg-gray-100">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button onClick={prevImage} className="w-10 h-10 bg-white/50 hover:bg-white rounded-full flex items-center justify-center text-jet transition-colors shadow">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={nextImage} className="w-10 h-10 bg-white/50 hover:bg-white rounded-full flex items-center justify-center text-jet transition-colors shadow">
                    <ChevronRight size={20} />
                  </button>
                </div>
                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className={cn("w-2 h-2 rounded-full", i === imageIndex ? "bg-brand" : "bg-white/50")} />
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <div className="lg:w-2/5 p-6 sm:p-8 lg:p-10 flex flex-col">
                <span className="text-brand font-bold text-xs uppercase tracking-widest mb-2 block">
                  {selectedProject.category}
                </span>
                <h2 className="text-3xl font-heading font-black text-jet leading-tight mb-6">
                  {selectedProject.title}
                </h2>
                
                <div className="grid grid-cols-2 gap-4 bg-offwhite p-4 rounded-lg mb-8">
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Timeline</span>
                    <span className="font-bold text-jet">{selectedProject.stats.timeline}</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-gray-500 mb-1">SqFt</span>
                    <span className="font-bold text-jet">{selectedProject.stats.sqft}</span>
                  </div>
                </div>

                <div className="prose prose-sm text-gray-600 mb-10 flex-1">
                  <p className="leading-relaxed">{selectedProject.fullDescription}</p>
                </div>

                <Link 
                  href="/contact" 
                  onClick={closeModal}
                  className="w-full text-center bg-brand text-white px-6 py-4 rounded-sm font-bold tracking-wide uppercase hover:bg-brand-dark transition-colors shadow-lg active:scale-95 mt-auto"
                >
                  Start a Similar Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
