'use client';

import { useCountUp } from '@/hooks/use-count-up';

const StatItem = ({ end, label, suffix = '+' }: { end: number, label: string, suffix?: string }) => {
  const { count, ref } = useCountUp(end, 2000);
  
  return (
    <div className="flex flex-col items-center justify-center border-r border-white/5 last:border-r-0 py-4" ref={ref}>
      <div className="text-[32px] font-[800] text-brand">
        {count}{suffix}
      </div>
      <div className="text-[10px] text-silver uppercase tracking-[0.1em] mt-1">
        {label}
      </div>
    </div>
  );
};

export function StatsSection() {

  return (
    <div className="bg-jet-light w-full border-t border-white/5 relative z-10 hidden sm:block">
      <div className="w-full">
        <div className="grid grid-cols-4 h-[100px]">
          <StatItem end={15} label="Years Experience" />
          <StatItem end={500} label="Projects Completed" />
          <StatItem end={100} label="Satisfaction" suffix="%" />
          <StatItem end={50} label="Team Members" />
        </div>
      </div>
    </div>
  );
}
