import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageHero from "@/components/SubPageHero";
import Leadership from "@/components/Leadership";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about My Therapist Development Center and our founder Vaishali Chauhan with 10+ years of experience in ASD and DHLS therapy.",
};

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <SubPageHero bgImage="/images/about.jpg" title="About"
          highlight="Us"
          subtitle="Discover our mission, values, and the passionate team behind My Therapist Development Center."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About Us" },
          ]}
        />
        <Leadership />

        {/* Mission & Values Section */}
        <section className="py-16 sm:py-20 bg-surface-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-brand-pink font-semibold text-sm uppercase tracking-wider mb-3">
                Our Mission
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Dedicated to <span className="text-brand-blue">Every Child&apos;s Growth</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center jelly-hover">
                <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To be the leading pediatric therapy center in Noida, empowering every child to reach their full developmental potential.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center jelly-hover">
                <div className="w-16 h-16 rounded-2xl bg-brand-pink/10 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Providing compassionate, evidence-based therapy services tailored to each child&apos;s unique needs in a nurturing environment.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center jelly-hover">
                <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Integrity, compassion, excellence, and family-centered care form the foundation of everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
