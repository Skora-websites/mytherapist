"use client";

import Link from "next/link";
import { useGsapStaggerChildren } from "./hooks/useGsapAnimation";

const services = [
  {
    title: "Speech Therapy",
    slug: "speech-therapy",
    description:
      "Comprehensive speech therapy to address articulation, fluency, voice, and resonance disorders.",
    image: "/images/speech-therapy.jpeg",
  },
  {
    title: "Language Therapy",
    slug: "language-therapy",
    description:
      "Targeted interventions for receptive and expressive language delays.",
    image: "/images/language-therapy.jpeg",
  },
  {
    title: "Special Education",
    slug: "special-education",
    description:
      "Individualized educational programs for children with learning disabilities.",
    image: "/images/special-education.jpeg",
  },
  {
    title: "ABA Therapy",
    slug: "aba-therapy",
    description:
      "Applied Behavior Analysis therapy to improve social skills, learning, and behavior.",
    image: "/images/aba-therapy.jpeg",
  },
  {
    title: "Occupational Therapy",
    slug: "occupational-therapy",
    description:
      "Developing fine motor skills, hand-eye coordination, and daily living skills.",
    image: "/images/occupational-therapy.jpeg",
  },
  {
    title: "Sensory Integration",
    slug: "sensory-integration",
    description:
      "Specialized therapy to help children manage and respond to sensory input.",
    image: "/images/sensory-integration.jpeg",
  },
];

export default function Services() {
  const gridRef = useGsapStaggerChildren(".service-card", "fade-up");

  return (
    <section id="services" className="py-16 sm:py-20 bg-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-brand-pink font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-brand-blue">Therapy Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            We offer a wide range of specialized therapy services designed to
            support children&apos;s development and help them reach their full potential.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={`/services/${service.slug}`}
              className="service-card group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
                {/* Subtle gradient at bottom for text transition */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 pt-2 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>
                
                <div className="flex items-center text-brand-pink font-semibold text-sm mt-auto">
                  <span className="group-hover:mr-2 transition-all duration-300">Learn More</span>
                  <svg 
                    className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
