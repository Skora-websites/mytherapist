import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[65vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/my-therapist-hero.jpeg" alt="" className="w-full h-full object-cover object-[center_30%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/20" />
      </div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-24 right-24 w-28 h-28 rounded-full border-2 border-white/10" />
        <div className="absolute bottom-28 right-36 w-16 h-16 rounded-2xl bg-brand-pink/20 rotate-12" />
        <div className="absolute top-1/3 left-8 w-10 h-10 rounded-full border border-white/10" />
        <div className="absolute bottom-24 left-1/3 w-6 h-6 rounded-lg bg-white/10 rotate-45" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-8 sm:pt-2 sm:pb-10 lg:pt-4 lg:pb-16 w-full">
        <div className="max-w-2xl z-10">
          <div className="inline-flex items-center gap-2 bg-brand-pink text-white text-sm font-semibold px-5 py-2 rounded-full mb-4 shadow-lg shadow-brand-pink/30">
            <span className="flex h-2 w-2 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-white" /></span>
            Trusted by 500+ Families in Noida
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] text-white tracking-tight">Welcome To</h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight"><span className="text-brand-pink">My </span><span className="text-brand-blue">Therapist</span></h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] mb-2 tracking-tight whitespace-nowrap"><span className="text-brand-pink">Child Development Centre</span></h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-4 max-w-xl">Empowering Children with Developmental Delays Through Personalized Therapy Plans.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start mb-4">
            <Link href="/book" className="group inline-flex items-center justify-center px-8 py-4 bg-brand-pink text-white font-bold rounded-2xl hover:bg-pink-500 transition-all duration-300 shadow-lg shadow-brand-pink/40 hover:shadow-xl text-base">Book an Appointment<svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
            <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 bg-brand-blue text-white font-bold rounded-2xl border-2 border-brand-blue hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/30 transition-all duration-300 text-base">Our Services</Link>
          </div>
          <div className="grid grid-cols-3 gap-6 pt-5 border-t border-white/20 max-w-lg">
            <div className="text-center lg:text-left"><div className="text-3xl sm:text-4xl font-bold text-brand-pink">10+</div><div className="text-sm text-white/70 font-medium mt-1">Years Experience</div></div>
            <div className="text-center lg:text-left"><div className="text-3xl sm:text-4xl font-bold text-white">500+</div><div className="text-sm text-white/70 font-medium mt-1">Happy Families</div></div>
            <div className="text-center lg:text-left"><div className="text-3xl sm:text-4xl font-bold text-brand-pink">11+</div><div className="text-sm text-white/70 font-medium mt-1">Therapy Services</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
