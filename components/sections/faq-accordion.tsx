'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/lib/data';
import { AnimatedSection } from '../animated-section';
import { cn } from '@/lib/utils';

export function FaqAccordion() {
  const [activeTab, setActiveTab] = useState(faqs[0].category);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const activeCategoryFaqs = faqs.find(f => f.category === activeTab)?.questions || [];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
        {faqs.map((cat) => (
          <button
            key={cat.category}
            onClick={() => {
              setActiveTab(cat.category);
              setOpenIndex(0); // Reset to first item when switching tabs
            }}
            className={cn(
              "px-6 py-3 rounded-sm text-sm font-bold tracking-wide uppercase transition-all duration-300",
              activeTab === cat.category 
                ? "bg-brand text-white shadow-md" 
                : "bg-white text-gray-500 hover:bg-gray-100 hover:text-jet shadow-sm"
            )}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        {activeCategoryFaqs.map((faq, idx) => (
          <AnimatedSection key={idx} animation="fade-up" delay={idx * 50}>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-gray-50 focus:outline-none transition-colors group"
                aria-expanded={openIndex === idx}
              >
                <span className={cn(
                  "font-bold font-heading text-lg pr-8 transition-colors",
                  openIndex === idx ? "text-brand" : "text-jet group-hover:text-brand"
                )}>
                  {faq.q}
                </span>
                <div className={cn(
                  "shrink-0 transition-transform duration-300", 
                  openIndex === idx ? "text-brand rotate-180" : "text-gray-400 group-hover:text-brand rotate-0"
                )}>
                  {openIndex === idx ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </button>
              <div 
                className={cn(
                  "transition-all duration-300 ease-in-out overflow-hidden bg-white",
                  openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-50 mx-6">
                  {faq.a}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
