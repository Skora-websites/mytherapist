const fs = require('fs');

// Fix Home Hero - remove external image, use beautiful gradient with SVG pattern
let hero = `import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Beautiful gradient background with therapy-themed pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-pinkMuted via-white to-surface-muted">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"url(\\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230066cc' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\\")}} />
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-pink/8 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-brand-blue/8 blur-[100px]" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-brand-pink/5 blur-[80px]" />
      </div>

      {/* Decorative floating shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-24 right-24 w-28 h-28 rounded-full border-2 border-brand-pink/10" />
        <div className="absolute bottom-28 right-36 w-16 h-16 rounded-2xl bg-brand-pink/10 rotate-12" />
        <div className="absolute top-1/3 left-8 w-10 h-10 rounded-full border border-brand-blue/10" />
        <div className="absolute bottom-24 left-1/3 w-6 h-6 rounded-lg bg-brand-blue/10 rotate-45" />
        <div className="absolute top-40 right-1/3 w-4 h-4 rounded-full bg-brand-pink/15" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text Content */}
          <div className="text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 bg-brand-pink text-white text-sm font-semibold px-5 py-2 rounded-full mb-8 shadow-lg shadow-brand-pink/30">
              <span className="flex h-2 w-2 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-white" /></span>
              Trusted by 500+ Families in Noida
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] text-gray-900 mb-2 tracking-tight">Welcome To</h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] mb-2 tracking-tight"><span className="text-brand-blue">My Therapist</span></h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] mb-6 tracking-tight"><span className="text-brand-pink">Development Center</span></h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">Empowering children with specialized therapy services including speech, language, occupational therapy, and ABA therapy in a warm, child-friendly environment.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link href="/book" className="group inline-flex items-center justify-center px-8 py-4 bg-brand-pink text-white font-bold rounded-2xl hover:bg-pink-500 transition-all duration-300 shadow-lg shadow-brand-pink/40 hover:shadow-xl text-base">Book an Appointment<svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
              <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 bg-brand-blue text-white font-bold rounded-2xl border-2 border-brand-blue hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/30 transition-all duration-300 text-base">Our Services</Link>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200/60">
              <div className="text-center lg:text-left"><div className="text-3xl sm:text-4xl font-bold text-brand-blue">9+</div><div className="text-sm text-gray-500 font-medium mt-1">Years Experience</div></div>
              <div className="text-center lg:text-left"><div className="text-3xl sm:text-4xl font-bold text-brand-pink">500+</div><div className="text-sm text-gray-500 font-medium mt-1">Happy Families</div></div>
              <div className="text-center lg:text-left"><div className="text-3xl sm:text-4xl font-bold text-brand-blue">11+</div><div className="text-sm text-gray-500 font-medium mt-1">Therapy Services</div></div>
            </div>
          </div>
          {/* Right — Visual Card */}
          <div className="relative z-10 hidden lg:block">
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-blue/10 to-brand-pink/10 backdrop-blur-sm rounded-3xl p-8 border border-brand-blue/10 shadow-2xl">
                <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-brand-blue/20 via-brand-pink/10 to-brand-blue/15 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/80 shadow-xl flex items-center justify-center"><svg className="w-16 h-16 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></div>
                    <p className="text-brand-blue font-bold text-lg">Compassionate Care</p>
                    <p className="text-gray-500 text-sm mt-1">For Every Child&apos;s Journey</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 sm:bottom-6 sm:-left-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"><div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center"><svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><div><div className="font-bold text-gray-900 text-sm">Evidence-Based</div><div className="text-xs text-gray-500">Proven Methods</div></div></div>
              <div className="absolute -top-4 -right-4 sm:top-6 sm:-right-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"><div className="w-11 h-11 rounded-xl bg-brand-pink/10 flex items-center justify-center"><svg className="w-5 h-5 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><div><div className="font-bold text-gray-900 text-sm">Child-Friendly</div><div className="text-xs text-gray-500">Safe &amp; Welcoming</div></div></div>
              <div className="absolute bottom-1/2 -right-4 sm:right-4 bg-brand-pink text-white rounded-2xl shadow-xl px-5 py-3 text-center"><div className="text-2xl font-bold">9+</div><div className="text-xs font-medium">Years</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`;
fs.writeFileSync('components/Hero.tsx', hero);
console.log('Hero.tsx rewritten');

// Fix SubPageHero - remove external image dependency, use gradient with pattern
let sub = `import Link from "next/lin
