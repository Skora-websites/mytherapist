import Link from "next/link";

interface SubPageHeroProps {
  title: string;
  highlight?: string;
  subtitle: string;
  breadcrumbs: { label: string; href?: string }[];
  bgImage?: string;
}

export default function SubPageHero({
  title,
  highlight,
  subtitle,
  breadcrumbs,
  bgImage,
}: SubPageHeroProps) {
  return (
    <div className="relative overflow-hidden min-h-[320px] sm:min-h-[380px] flex items-end">
      {bgImage && (
        <div className="absolute inset-0">
          <img src={bgImage} alt="" className="w-full h-full object-cover" />
        </div>
      )}
      {!bgImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue to-blue-800" />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20 w-full">
        <div className="mb-4">
          <nav className="flex items-center gap-2 text-sm text-white/70">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && (<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>)}
                {crumb.href ? (<Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>) : (<span className="text-white">{crumb.label}</span>)}
              </span>
            ))}
          </nav>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 drop-shadow-lg">
          {title}{" "}
          {highlight && <span className="text-brand-pink">{highlight}</span>}
        </h1>

      </div>
    </div>
  );
}
