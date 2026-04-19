import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Logo } from './logo';
import { businessInfo, services } from '@/lib/data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-jet text-white pt-16 pb-8 border-t-4 border-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Logo size="md" variant="full" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {businessInfo.tagline}. We deliver premium construction and remodeling services across the Hudson Valley with an unwavering commitment to quality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand hover:-translate-y-1 transition-all text-gray-300 hover:text-white" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand hover:-translate-y-1 transition-all text-gray-300 hover:text-white" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold uppercase tracking-wider mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
               {[
                 { name: 'Home', href: '/' },
                 { name: 'About Us', href: '/about' },
                 { name: 'Our Projects', href: '/projects' },
                 { name: 'FAQ', href: '/faq' },
                 { name: 'Service Areas', href: '/service-areas' },
                 { name: 'Contact', href: '/contact' },
               ].map((link) => (
                 <li key={link.name}>
                   <Link href={link.href} className="text-gray-400 hover:text-brand hover:translate-x-1 inline-block transition-all text-sm">
                     {link.name}
                   </Link>
                 </li>
               ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-heading text-lg font-bold uppercase tracking-wider mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
               {services.map((service) => (
                 <li key={service.id}>
                   <Link href="/services" className="text-gray-400 hover:text-brand hover:translate-x-1 inline-block transition-all text-sm">
                     {service.title}
                   </Link>
                 </li>
               ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-heading text-lg font-bold uppercase tracking-wider mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="text-brand shrink-0 mt-0.5" size={18} />
                <span>{businessInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="text-brand shrink-0" size={18} />
                <a href={`tel:${businessInfo.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-brand transition-colors">{businessInfo.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="text-brand shrink-0" size={18} />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-brand transition-colors">{businessInfo.email}</a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Clock className="text-brand shrink-0 mt-0.5" size={18} />
                <span>{businessInfo.hours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} {businessInfo.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-brand transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
