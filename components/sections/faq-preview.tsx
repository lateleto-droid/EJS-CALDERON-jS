'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/lib/data';
import { AnimatedSection } from '../animated-section';
import { cn } from '@/lib/utils';

export function FaqPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  // Just take the first 5 questions flat
  const previewFaqs = faqs.flatMap(cat => cat.questions).slice(0, 5);

  return (
    <section className="bg-offwhite py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <span className="text-brand font-bold text-sm uppercase tracking-widest mb-4 block">Got Questions?</span>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-jet leading-tight">
            Frequently Asked Questions
          </h2>
        </AnimatedSection>

        <div className="space-y-4">
          {previewFaqs.map((faq, idx) => (
            <AnimatedSection key={idx} animation="fade-up" delay={idx * 100}>
              <div 
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-gray-50 focus:outline-none transition-colors group"
                >
                  <span className={cn(
                    "font-bold font-heading text-lg pr-8 transition-colors",
                    openIndex === idx ? "text-brand" : "text-jet group-hover:text-brand"
                  )}>{faq.q}</span>
                  <div className="shrink-0 text-brand">
                    {openIndex === idx ? <Minus size={24} /> : <Plus size={24} />}
                  </div>
                </button>
                <div 
                  className={cn(
                    "transition-all duration-300 ease-in-out overflow-hidden bg-white",
                    openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100 mx-6">
                    {faq.a}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={500} className="text-center mt-12">
          <Link 
            href="/faq" 
            className="text-brand font-bold uppercase tracking-wide flex items-center justify-center gap-2 hover:gap-4 transition-all"
          >
            Read All FAQs <span className="text-xl">→</span>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
