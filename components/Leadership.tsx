"use client";

import { useGsapScrollAnimation, useGsapStaggerChildren } from "./hooks/useGsapAnimation";

export default function Leadership() {
  const imageRef = useGsapScrollAnimation("fade-left");
  const contentRef = useGsapScrollAnimation("fade-right");
  const highlightsRef = useGsapStaggerChildren(".highlight-card", "fade-up");

  return (
    <section id="leadership" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image / Visual */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-brand-blue/10 via-surface-muted to-surface-pinkMuted flex items-center justify-center">
                {/* Placeholder for leadership photo */}
                <div className="text-center p-8">
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-brand-blue/10 flex items-center justify-center">
                    <svg className="w-20 h-20 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-brand-blue font-semibold text-lg">
                    Vaishali Chauhan
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Founder &amp; Lead Therapist
                  </p>
                </div>
              </div>
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-4 -right-4 sm:bottom-6 sm:-right-6 bg-brand-pink text-white rounded-2xl shadow-xl px-6 py-4 text-center">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm font-medium">Years of<br />Experience</div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef}>
            <span className="inline-block text-brand-pink font-semibold text-sm uppercase tracking-wider mb-3">
              Meet Our Leader
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Vaishali <span className="text-brand-blue">Chauhan</span>
            </h2>
            <div className="w-16 h-1 bg-brand-pink rounded-full mb-6" />

            <p className="text-gray-600 leading-relaxed mb-4">
              Vaishali Chauhan is the founder and lead therapist at My Therapist
              Development Center, bringing over <strong className="text-gray-900">10 years of specialized
              experience</strong> in the field of child development and therapy.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Her deep expertise spans across <strong className="text-brand-blue">Autism Spectrum Disorder (ASD)</strong> and{" "}
              <strong className="text-brand-blue">Developmental Hearing &amp; Language
              Screening (DHLS)</strong>, making her one of the most trusted professionals
              in the Noida region for pediatric therapy.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Under her leadership, the center has helped hundreds of children
              overcome communication challenges and achieve significant developmental
              milestones. Her compassionate approach and evidence-based methodology
              have earned the trust of families across the region.
            </p>

            {/* Highlights */}
            <div ref={highlightsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="highlight-card flex items-center gap-3 bg-surface-muted rounded-xl p-4 jelly-hover">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">ASD Specialist</div>
                  <div className="text-xs text-gray-500">Certified Expert</div>
                </div>
              </div>
              <div className="highlight-card flex items-center gap-3 bg-surface-muted rounded-xl p-4 jelly-hover">
                <div className="w-10 h-10 rounded-lg bg-brand-pink/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">DHLS Certified</div>
                  <div className="text-xs text-gray-500">Language Screening</div>
                </div>
              </div>
              <div className="highlight-card flex items-center gap-3 bg-surface-muted rounded-xl p-4 jelly-hover">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">500+ Families</div>
                  <div className="text-xs text-gray-500">Successfully Served</div>
                </div>
              </div>
              <div className="highlight-card flex items-center gap-3 bg-surface-muted rounded-xl p-4 jelly-hover">
                <div className="w-10 h-10 rounded-lg bg-brand-pink/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Compassionate Care</div>
                  <div className="text-xs text-gray-500">Child-Centered Approach</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
