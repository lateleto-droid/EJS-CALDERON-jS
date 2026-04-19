'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Slight delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 w-full z-[100] transition-transform duration-500 ease-in-out p-4 sm:p-6",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="bg-jet text-white max-w-4xl mx-auto rounded-lg shadow-2xl border border-white/10 p-6 flex flex-col sm:flex-row items-center gap-6 justify-between">
        <div className="space-y-2 flex-1">
          <h4 className="font-heading font-bold text-lg">We use cookies</h4>
          <p className="text-gray-400 text-sm">
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking &quot;Accept&quot;, you consent to our use of cookies.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button 
            onClick={decline}
            className="flex-1 sm:flex-none px-6 py-2.5 rounded text-sm font-semibold border border-white/20 hover:bg-white/5 transition-colors"
          >
            Decline
          </button>
          <button 
            onClick={accept}
            className="flex-1 sm:flex-none px-6 py-2.5 rounded bg-brand hover:bg-brand-dark text-white text-sm font-semibold transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
