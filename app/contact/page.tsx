"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageHero from "@/components/SubPageHero";
import { useGsapScrollAnimation } from "@/components/hooks/useGsapAnimation";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useGsapScrollAnimation("fade-up");
  const infoRef = useGsapScrollAnimation("fade-right");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name') as string;
    const phone = form.get('phone') as string;
    const email = form.get('email') as string;
    const subject = form.get('subject') as string;
    const message = form.get('message') as string;

    const text = `*New Contact Inquiry*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email || 'N/A'}\n*Subject:* ${subject}\n*Message:* ${message}`;
    
    const whatsappUrl = `https://wa.me/917701833231?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
  };

  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <SubPageHero bgImage="/images/mytherapist%20gallery/WhatsApp%20Image%202026-09-04%20at%203.09.37%20PM.jpeg" title="Contact"
          highlight="Us"
          subtitle="We'd love to hear from you. Reach out to us with any questions or to schedule a visit."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
        />

        <section className="py-16 sm:py-20 bg-surface-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div ref={infoRef}>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Get in <span className="text-brand-blue">Touch</span>
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Have questions about our therapy services? Want to schedule a visit?
                  We&apos;re here to help. Reach out using any of the methods below.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Our Address</h3>
                      <p className="text-gray-600 text-sm">
                        My Therapist Development Center<br />
                        Noida, Uttar Pradesh - 201318
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-pink/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                      <a href="tel:+917701833231" className="text-brand-blue text-sm font-medium hover:underline">
                        +91 77018 33231
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                      <a href="mailto:mytherapists4@gmail.com" className="text-brand-blue text-sm font-medium hover:underline">
                        mytherapists4@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-pink/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Operating Hours</h3>
                      <p className="text-gray-600 text-sm">
                        Mon - Sat: 9:00 AM - 6:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div ref={formRef}>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                      <p className="text-gray-600">We&apos;ll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Send us a Message</h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                          <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink outline-none transition-all" placeholder="Your name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                          <input type="tel" name="phone" required className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink outline-none transition-all" placeholder="+91 XXXXX XXXXX" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" name="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink outline-none transition-all" placeholder="your@email.com" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                        <input type="text" name="subject" required className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink outline-none transition-all" placeholder="How can we help?" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                        <textarea name="message" required rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-pink/30 focus:border-brand-pink outline-none transition-all resize-none" placeholder="Tell us more about your inquiry..." />
                      </div>

                      <button type="submit" className="w-full px-8 py-3.5 bg-brand-pink text-white font-semibold rounded-xl hover:bg-pink-500 transition-all duration-200 shadow-md hover:shadow-lg">
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
