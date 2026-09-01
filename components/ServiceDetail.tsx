"use client";

import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageHero from "@/components/SubPageHero";
import { useGsapScrollAnimation, useGsapStaggerChildren } from "@/components/hooks/useGsapAnimation";

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  description: string;
  approaches: { title: string; description: string; icon: React.ReactNode }[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  bgImage?: string;
}

export default function ServiceDetail({
  title,
  subtitle,
  description,
  approaches,
  benefits,
  faqs,
  bgImage,
}: ServiceDetailProps) {
  const descRef = useGsapScrollAnimation("fade-up");
  const benefitsRef = useGsapStaggerChildren(".benefit-item", "fade-up");
  const faqRef = useGsapStaggerChildren(".faq-item", "fade-up");

  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <SubPageHero bgImage={bgImage}
          title={title}
          highlight={subtitle}
          subtitle={description}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: title },
          ]}
        />

        {/* Description */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={descRef}>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {description}
              </p>
            </div>

            {/* Approaches */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {approaches.map((approach) => (
                <div key={approach.title} className="bg-surface-muted rounded-2xl p-6 jelly-hover">
                  <div className="w-12 h-12 rounded-xl bg-brand-pink/10 flex items-center justify-center mb-4 text-brand-pink">
                    {approach.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{approach.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{approach.description}</p>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Key <span className="text-brand-blue">Benefits</span>
              </h2>
              <div ref={benefitsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="benefit-item flex items-center gap-3 bg-surface-pinkMuted rounded-xl p-4">
                    <div className="w-8 h-8 rounded-full bg-brand-pink/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked <span className="text-brand-blue">Questions</span>
              </h2>
              <div ref={faqRef} className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.question} className="faq-item bg-surface-muted rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-brand-blue/5 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Interested in {title}?
              </h3>
              <p className="text-gray-600 mb-6">
                Schedule a consultation to discuss how {title.toLowerCase()} can benefit your child.
              </p>
              <Link
                href="/book"
                className="inline-flex items-center px-8 py-3 bg-brand-pink text-white font-semibold rounded-xl hover:bg-pink-500 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Book an Appointment
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
