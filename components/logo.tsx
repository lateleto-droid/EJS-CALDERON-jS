import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'nav' | 'icon';
  className?: string;
}

export function Logo({ size = 'md', className }: LogoProps) {
  const sizeClasses = {
    sm: 'h-20 w-[320px] md:h-28 md:w-[500px]',
    md: 'h-32 w-[550px]',
    lg: 'h-40 w-[800px]',
  };

  return (
    <div className={cn('relative', sizeClasses[size], className)}>
      <Image
        src="/logo-black.png.png"
        alt="EJS Calderon Construction LLC"
        fill
        sizes="(max-width: 768px) 400px, 800px"
        className="object-contain object-left mix-blend-screen contrast-125 brightness-110 scale-[1.35] origin-left"
        priority
      />
    </div>
  );
}
