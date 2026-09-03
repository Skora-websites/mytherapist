"use client";

import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageHero from "@/components/SubPageHero";
import { useGsapStaggerChildren } from "@/components/hooks/useGsapAnimation";

const services = [
  {
    title: "Speech Therapy",
    slug: "speech-therapy",
    description:
      "Comprehensive speech therapy to address articulation, fluency, voice, and resonance disorders.",
    image: "/images/speech.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: "Language Therapy",
    slug: "language-therapy",
    description:
      "Targeted interventions for receptive and expressive language delays.",
    image: "/images/language.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
  },
  {
    title: "Special Education",
    slug: "special-education",
    description:
      "Individualized educational programs for children with learning disabilities.",
    image: "/images/education.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "ABA Therapy",
    slug: "aba-therapy",
    description:
      "Applied Behavior Analysis therapy to improve social skills, learning, and behavior.",
    image: "/images/aba.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Occupational Therapy",
    slug: "occupational-therapy",
    description:
      "Developing fine motor skills, hand-eye coordination, and daily living skills.",
    image: "/images/occupational.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
  },
  {
    title: "Sensory Integration",
    slug: "sensory-integration",
    description:
      "Specialized therapy to help children manage and respond to sensory input.",
    image: "/images/sensory.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  const gridRef = useGsapStaggerChildren(".service-card", "fade-up");

  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <SubPageHero bgImage="/images/services.jpg" title="Our"
          highlight="Services"
          subtitle="We offer a comprehensive range of specialized therapy services designed to support every aspect of your child's development."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services" },
          ]}
        />

        {/* Services Grid */}
        <section className="py-16 sm:py-20 bg-surface-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={`/services/${service.slug}`}
                  className="service-card group bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col relative h-[380px]"
                >
                  {/* Background Image with Gradient */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    {/* Gradient Overlay from bottom to top to make text readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-transparent from-40%" />
                  </div>

                  {/* Content (positioned at the bottom) */}
                  <div className="relative z-10 flex flex-col justify-end h-full p-6 sm:p-8">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-brand-blue mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    
                    <span className="inline-flex items-center text-brand-blue font-semibold text-sm group-hover:text-brand-pink transition-colors">
                      Explore Division
                      <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-brand-blue">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Start Your Child&apos;s Journey?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our expert therapists to discuss your child&apos;s needs and create a personalized therapy plan.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center px-8 py-4 bg-brand-pink text-white font-bold rounded-2xl hover:bg-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book an Appointment
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
