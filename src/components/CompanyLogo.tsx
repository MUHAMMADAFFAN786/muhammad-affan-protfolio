import { Building2 } from 'lucide-react';

interface CompanyLogoProps {
  name: string;
  src?: string;
  alt?: string;
}

/**
 * Circular glass container for a company logo.
 * If `src` is provided and loads successfully, the image is shown.
 * Otherwise a gradient placeholder with the first letter is displayed,
 * so you can drop in the official logo URL later without touching code.
 */
const CompanyLogo = ({ name, src, alt }: CompanyLogoProps) => {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full glass-strong flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform">
      {src ? (
        <img
          src={src}
          alt={alt ?? `${name} logo`}
          className="w-full h-full object-contain p-2"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none';
            const fallback = (e.currentTarget.parentElement?.querySelector('[data-fallback]') as HTMLElement);
            if (fallback) fallback.style.display = 'flex';
          }}
        />
      ) : null}
      <div
        data-fallback
        style={{ display: src ? 'none' : 'flex' }}
        className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/30 to-secondary/30 text-white font-bold text-2xl"
      >
        {src ? <Building2 className="w-6 h-6 text-slate-300" /> : initial}
      </div>
    </div>
  );
};

export default CompanyLogo;
