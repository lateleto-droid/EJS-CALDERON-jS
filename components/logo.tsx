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
    sm: 'h-16 w-[220px] sm:h-20 sm:w-[280px] md:h-24 md:w-[380px]',
    md: 'h-24 w-[300px] md:h-32 md:w-[450px]',
    lg: 'h-32 w-[350px] md:h-40 md:w-[600px]',
  };

  return (
    <div className={cn('relative', sizeClasses[size], className)}>
      <Image
        src="/logo.jpg"
        alt="EJS Calderon Construction LLC"
        fill
        sizes="(max-width: 768px) 300px, 600px"
        className="object-contain object-left scale-[1.25] origin-left"
        priority
      />
    </div>
  );
}
