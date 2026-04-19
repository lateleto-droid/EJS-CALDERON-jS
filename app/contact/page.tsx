import { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { ContactForm } from '@/components/sections/contact-form';
import { BusinessStatus } from '@/components/business-status';
import { AnimatedSection } from '@/components/animated-section';
import { businessInfo } from '@/lib/data';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { faqs } from '@/lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | EJS Calderon Construction — Free Estimates Middletown NY',
  description: 'Contact EJS Calderon Construction in Middletown, NY for a free residential or commercial construction estimate. Reach us by phone, email, or our online form.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero 
        title="Contact Us"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        imageSrc="https://images.unsplash.com/photo-1504307651254-35680f356fce?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="bg-offwhite py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 item-start">
            
            {/* Left Col: Info */}
            <div>
              <AnimatedSection>
                <span className="text-brand font-bold text-sm uppercase tracking-widest mb-4 block">Get in Touch</span>
                <h2 className="text-4xl sm:text-5xl font-heading font-black text-jet leading-tight mb-8">
                  Let’s Discuss Your Next Project
                </h2>
                <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                  Ready to upgrade your home or business? Contact us today for a free, detailed estimate. Our team is ready to answer your questions and help you plan your next move.
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={100} className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand shadow-sm shrink-0 mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-jet mb-1">Office Location</h4>
                    <p className="text-gray-600">{businessInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand shadow-sm shrink-0 mt-1">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-jet mb-1">Phone Number</h4>
                    <a href={`tel:${businessInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-brand text-lg font-bold hover:underline">
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand shadow-sm shrink-0 mt-1">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-jet mb-1">Email Address</h4>
                    <a href={`mailto:${businessInfo.email}`} className="text-gray-600 hover:text-brand transition-colors">
                      {businessInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand shadow-sm shrink-0 mt-1">
                    <BusinessStatus />
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <h4 className="font-bold text-sm uppercase tracking-widest text-jet mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                    <a 
                      key={idx} 
                      href="#" 
                      className="w-10 h-10 bg-jet text-white rounded-full flex items-center justify-center hover:bg-brand transition-colors hover:-translate-y-1"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Right Col: Form */}
            <AnimatedSection animation="slide-left" className="lg:mt-4">
              <ContactForm />
            </AnimatedSection>
            
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.8471018512!2d-74.42398502347209!3d41.44849209090622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d2d0c242095f3b%3A0x6eac343ac054c256!2s7%20Lincoln%20St%2C%20Middletown%2C%20NY%2010940!5e0!3m2!1sen!2sus!4v1715012345678!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="EJS Calderon Construction Office Location"
          className="absolute inset-0 grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
        />
      </section>
    </>
  );
}
