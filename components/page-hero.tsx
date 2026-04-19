import Image from 'next/image';
import Link from 'next/link';

export function PageHero({ 
  title, 
  breadcrumbs, 
  imageSrc = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop" 
}: { 
  title: string;
  breadcrumbs: { label: string, href?: string }[];
  imageSrc?: string;
}) {
  return (
    <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center bg-jet mt-[72px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          className="object-cover opacity-40"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-jet/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-white leading-tight mb-6 tracking-tight">
          {title}
        </h1>
        
        <nav className="flex justify-center" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm sm:text-base font-semibold tracking-wider text-gray-300 uppercase">
            {breadcrumbs.map((item, idx) => (
              <li key={item.label} className="flex items-center">
                {idx > 0 && <span className="mx-2 text-brand">/</span>}
                {item.href ? (
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
