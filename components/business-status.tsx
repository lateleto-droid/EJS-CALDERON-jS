'use client';

import { useState, useEffect } from 'react';
import { businessInfo } from '@/lib/data';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BusinessStatus() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const checkStatus = () => {
      const now = new Date();
      // Use NY timezone for accurate checking if possible, but local is fine for client
      // 0 = Sun, 1 = Mon ... 6 = Sat
      const day = now.getDay();
      const hour = now.getHours();

      // Mon-Sat 6AM-6PM, Sun Closed
      if (day === 0) {
        setIsOpen(false);
      } else if (hour >= 6 && hour < 18) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkStatus();
    // Recheck every minute
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-3">
      <Clock className="text-brand shrink-0" size={24} />
      <div>
        <p className="font-bold text-jet">{businessInfo.hours}</p>
        <span className={cn(
          "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider mt-1",
          isOpen ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
        )}>
          <span className={cn("w-1.5 h-1.5 rounded-full", isOpen ? "bg-green-500" : "bg-red-500")}></span>
          {isOpen ? "Currently Open" : "Currently Closed"}
        </span>
      </div>
    </div>
  );
}
