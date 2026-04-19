'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './logo';
import { businessInfo } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand text-white text-[11px] tracking-[0.05em] uppercase font-semibold h-8 px-4 md:px-10 hidden md:flex justify-between items-center z-50 relative">
        <div className="flex gap-4">
          <span>{businessInfo.hours}</span>
          <span className="hidden lg:inline">{businessInfo.address}</span>
        </div>
        <div className="flex gap-4">
          <a href={`mailto:${businessInfo.email}`} className="hover:text-jet transition-colors">{businessInfo.email}</a>
          <a href={`tel:${businessInfo.phone.replace(/[^0-9+]/g, '')}`} className="font-bold hover:text-jet transition-colors">{businessInfo.phone}</a>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={cn(
          'fixed w-full z-40 transition-all duration-300 flex flex-col justify-center h-24 md:h-32',
          scrolled || isOpen
            ? 'bg-jet/95 backdrop-blur-md shadow-lg text-white border-b border-white/10'
            : 'bg-jet/95 sm:bg-transparent text-white border-b border-white/10 sm:border-transparent' // default assuming hero has dark overlay
        )}
        style={{ top: scrolled ? '0' : 'auto' }} // auto means it naturally flows under top bar when not scrolled
      >
        <div className="w-full mx-auto px-4 sm:px-10">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" onClick={() => setIsOpen(false)} aria-label="Home">
              <Logo size="sm" variant="nav" className={cn(scrolled || isOpen ? "" : "text-white [&_span.text-jet]:text-white")} />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'text-[13px] font-medium tracking-[0.05em] uppercase relative group',
                    pathname === link.href ? 'text-brand' : 'hover:text-brand transition-colors'
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-1/2 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full group-hover:left-0",
                    pathname === link.href && "w-full left-0"
                  )}></span>
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link
                href="/contact"
                className="bg-brand hover:bg-brand-dark transition-colors text-white px-6 py-3 font-bold text-[12px] uppercase flex items-center gap-2"
              >
                Get Free Estimate
              </Link>
              <a href={`tel:${businessInfo.phone.replace(/[^0-9+]/g, '')}`} className="bg-white/10 p-2.5 rounded-full hover:bg-brand hover:-translate-y-0.5 transition-all text-white">
                <Phone size={18} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            'lg:hidden fixed inset-0 top-[72px] bg-jet/98 backdrop-blur-xl transition-all duration-300 ease-in-out',
            isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
          )}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 pb-20">
            {navLinks.map((link) => (
               <Link
               key={link.name}
               href={link.href}
               onClick={() => setIsOpen(false)}
               className={cn(
                 'text-2xl font-heading font-black uppercase tracking-wider',
                 pathname === link.href ? 'text-brand' : 'text-white hover:text-brand'
               )}
             >
               {link.name}
             </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-8 bg-brand text-white px-8 py-4 rounded-sm font-bold text-lg tracking-wide uppercase flex items-center gap-2 shadow-lg"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
