"use client";

import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageHero from "@/components/SubPageHero";
import { useGsapStaggerChildren } from "@/components/hooks/useGsapAnimation";

const blogPosts = [
  {
    title: "Understanding Speech Delays in Children",
    excerpt: "Speech delays are common in children, but early intervention can make a significant difference. Learn about the signs to watch for and when to seek help.",
    date: "August 15, 2026",
    category: "Speech Therapy",
    readTime: "5 min read",
    image: "/images/speech-therapy.jpeg",
    slug: "/blogs/understanding-speech-delays",
  },
  {
    title: "What is ABA Therapy and How Does It Work?",
    excerpt: "Applied Behavior Analysis is a proven approach for children with ASD. Discover how ABA therapy uses positive reinforcement to build essential skills.",
    date: "August 10, 2026",
    category: "ABA Therapy",
    readTime: "7 min read",
    image: "/images/aba-therapy.jpeg",
    slug: "/blogs/what-is-aba-therapy",
  },
  {
    title: "Sensory Processing: Signs Your Child May Need Help",
    excerpt: "Does your child struggle with certain textures, sounds, or movements? Learn about sensory processing disorders and how therapy can help.",
    date: "August 5, 2026",
    category: "Sensory Integration",
    readTime: "6 min read",
    image: "/images/sensory-integration.jpeg",
    slug: "/blogs/sensory-processing-signs",
  },
  {
    title: "The Importance of Early Intervention",
    excerpt: "Research consistently shows that early therapy leads to better outcomes. Find out why starting therapy young can set your child up for success.",
    date: "July 28, 2026",
    category: "General",
    readTime: "4 min read",
    image: "/images/mytherapist%20gallery/WhatsApp%20Image%202026-09-04%20at%203.08.19%20PM%20(1).jpeg",
    slug: "/blogs/early-intervention",
  },
  {
    title: "How Occupational Therapy Helps Children Thrive",
    excerpt: "From fine motor skills to daily living tasks, occupational therapy plays a vital role in helping children become independent and confident.",
    date: "July 20, 2026",
    category: "Occupational Therapy",
    readTime: "5 min read",
    image: "/images/occupational-therapy.jpeg",
    slug: "/blogs/occupational-therapy-benefits",
  },
  {
    title: "Supporting Your Child with Special Education at Home",
    excerpt: "Parents play a crucial role in reinforcing therapy goals. Discover practical strategies to support your child's learning journey at home.",
    date: "July 15, 2026",
    category: "Special Education",
    readTime: "6 min read",
    image: "/images/special-education.jpeg",
    slug: "/blogs/special-education-at-home",
  },
];

export default function BlogsPage() {
  const gridRef = useGsapStaggerChildren(".blog-card", "fade-up");

  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <SubPageHero bgImage="/images/mytherapist%20gallery/WhatsApp%20Image%202026-09-04%20at%203.08.19%20PM%20(2).jpeg" title="Our"
          highlight="Blogs"
          subtitle="Insights, tips, and resources to help you understand your child's development and the therapy journey."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blogs" },
          ]}
        />

        <section className="py-16 sm:py-20 bg-surface-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="blog-card group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 jelly-hover flex flex-col"
                >
                  {/* Thumbnail */}
                  <Link href={post.slug} className="aspect-[16/9] relative bg-gray-100 flex items-center justify-center overflow-hidden block">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </Link>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-brand-pink bg-brand-pink/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    <Link href={post.slug} className="block mb-3">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-blue transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs text-gray-400">{post.date}</span>
                      <Link href={post.slug} className="inline-flex items-center text-brand-pink font-medium text-sm group-hover:text-brand-blue transition-colors">
                        Read More
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
