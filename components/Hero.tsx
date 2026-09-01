import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/hero.jpg" alt="" className="w-full h-full object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/20" />
      </div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-24 right-24 w-28 h-28 rounded-full border-2 border-white/10" />
        <div className="absolute bottom-28 right-36 w-16 h-16 rounded-2xl bg-brand-pink/20 rotate-12" />
        <div className="absolute top-1/3 left-8 w-10 h-10 rounded-full border border-white/10" />
        <div className="absolute bottom-24 left-1/3 w-6 h-6 rounded-lg bg-white/10 rotate-45" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 bg-brand-pink text-white text-sm font-semibold px-5 py-2 rounded-full mb-8 shadow-lg shadow-brand-pink/30">
              <span className="flex h-2 w-2 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-white" /></span>
              Trusted by 500+ Families in Noida
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] text-white mb-2 tracking-tight">Welcome To</h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] mb-2 tracking-tight"><span className="text-brand-pink">My Therapist</span></h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] mb-6 tracking-tight text-white">Development Center</h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">Empowering children with specialized therapy services including speech, language, occupational therapy, and ABA therapy in a warm, child-friendly environment.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link href="/book" className="group inline-flex items-center justify-center px-8 py-4 bg-brand-pink text-white font-bold rounded-2xl hover:bg-pink-500 transition-all duration-300 shadow-lg shadow-brand-pink/40 hover:shadow-xl text-base">Book an Appointment<svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
              <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 bg-brand-blue text-white font-bold rounded-2xl border-2 border-brand-blue hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/30 transition-all duration-300 text-base">Our Services</Link>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center lg:text-left"><div className="text-3xl sm:text-4xl font-bold text-brand-pink">9+</div><div className="text-sm text-white/70 font-medium mt-1">Years Experience</div></div>
              <div className="text-center lg:text-left"><div className="text-3xl sm:text-4xl font-bold text-white">500+</div><div className="text-sm text-white/70 font-medium mt-1">Happy Families</div></div>
              <div className="text-center lg:text-left"><div className="text-3xl sm:text-4xl font-bold text-brand-pink">11+</div><div className="text-sm text-white/70 font-medium mt-1">Therapy Services</div></div>
            </div>
          </div>
          <div className="relative z-10 hidden lg:block">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl">
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                  <img src="/images/about.jpg" alt="Therapy session" className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-3 px-2 pb-2">
                  <div className="w-10 h-10 rounded-xl bg-brand-pink/20 flex items-center justify-center"><svg className="w-5 h-5 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></div>
                  <div><p className="text-white font-bold text-sm">Compassionate Care</p><p className="text-white/60 text-xs">For Every Child's Journey</p></div>
                </div>
              </div>
              <div className="absolute -bottom-4 right-4 sm:bottom-6 sm:right-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"><div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center"><svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><div><div className="font-bold text-gray-900 text-sm">Evidence-Based</div><div className="text-xs text-gray-500">Proven Methods</div></div></div>
              <div className="absolute -top-4 left-4 sm:top-6 sm:left-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"><div className="w-11 h-11 rounded-xl bg-brand-pink/10 flex items-center justify-center"><svg className="w-5 h-5 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><div><div className="font-bold text-gray-900 text-sm">Child-Friendly</div><div className="text-xs text-gray-500">Safe &amp; Welcoming</div></div></div>
              <div className="absolute bottom-1/2 -right-4 sm:right-4 bg-brand-pink text-white rounded-2xl shadow-xl px-5 py-3 text-center"><div className="text-2xl font-bold">9+</div><div className="text-xs font-medium">Years</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}