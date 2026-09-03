"use client";

import { useGsapStaggerChildren } from "./hooks/useGsapAnimation";

const features = [
  {
    title: "Expert Speech Therapists",
    description:
      "Certified pathologists with years of specialized experience.",
    image: "/images/speech.jpg",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: "brand-blue",
  },
  {
    title: "Comprehensive Assessments",
    description:
      "Thorough evaluations to understand unique strengths and needs.",
    image: "/images/about.jpg",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: "brand-pink",
  },
  {
    title: "Child-Friendly Environment",
    description:
      "Warm and stimulating spaces where children feel comfortable.",
    image: "/images/gallery_activities.jpg",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: "brand-blue",
  },
  {
    title: "Customized Therapy Plans",
    description:
      "Individualized plans tailored to specific goals and learning styles.",
    image: "/images/aba.jpg",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1H3a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    color: "brand-pink",
  },
];

export default function WhyChooseUs() {
  const gridRef = useGsapStaggerChildren(".feature-card", "fade-up");

  return (
    <section className="py-16 sm:py-20 bg-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-brand-pink font-semibold text-sm uppercase tracking-wider mb-3">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Makes Us <span className="text-brand-blue">Different</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            We are committed to providing the highest quality therapy services
            in a nurturing environment that celebrates each child&apos;s unique journey.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="feature-card group flex flex-col sm:flex-row items-center sm:items-start bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 gap-6 hover:-translate-y-1 jelly-hover cursor-pointer"
            >
              {/* Left Hexagon Image */}
              <div className="relative flex-shrink-0 w-32 h-36">
                <div 
                  className="w-full h-full overflow-hidden"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                {/* Small Icon Hexagon */}
                <div 
                  className={`absolute -bottom-1 -right-1 w-11 h-12 flex items-center justify-center text-white ${feature.color === 'brand-blue' ? 'bg-brand-blue' : 'bg-brand-pink'} group-hover:scale-110 transition-transform duration-300 shadow-md`}
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  {feature.icon}
                </div>
              </div>

              {/* Right Content */}
              <div className="flex-1 text-center sm:text-left mt-4 sm:mt-0 pt-2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className={`inline-flex items-center text-sm font-bold ${feature.color === 'brand-blue' ? 'text-brand-blue' : 'text-brand-pink'} group-hover:opacity-80 transition-opacity`}>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
