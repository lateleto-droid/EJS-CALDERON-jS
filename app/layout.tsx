import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import { Navbar, Footer, Preloader, Chatbot, BackToTop, CookieConsent } from '@/components';
import { businessInfo } from '@/lib/data';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: {
    default: 'EJS Calderon Construction | Premium Construction Services Middletown NY',
    template: '%s | EJS Calderon Construction',
  },
  description: 'Building Your Vision, Crafting Excellence. Premium residential and commercial construction in Middletown, NY and the Hudson Valley.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'EJS Calderon Construction',
    description: 'Premium construction services in Middletown, NY.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EJS Calderon Construction LLC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EJS Calderon Construction',
    description: 'Premium construction services in Middletown, NY.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ConstructionBusiness',
    name: businessInfo.name,
    url: 'https://www.ejscalderon.com', // Replace with dynamic URL if applicable
    telephone: businessInfo.phone,
    email: businessInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7 Lincoln St',
      addressLocality: 'Middletown',
      addressRegion: 'NY',
      postalCode: '10940',
      addressCountry: 'US'
    },
    openingHours: 'Mo,Tu,We,Th,Fr,Sa 06:00-18:00',
    priceRange: '$$$',
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body text-jet dark:bg-jet dark:text-white antialiased selection:bg-brand selection:text-white" suppressHydrationWarning>
        <Preloader />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Chatbot />
        <BackToTop />
        <CookieConsent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
