import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageHero from "@/components/SubPageHero";
import Link from "next/link";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const formattedTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1 bg-white">
        <SubPageHero 
          bgImage="/images/blogs.jpg" 
          title={formattedTitle}
          subtitle=""
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blogs", href: "/blogs" },
            { label: formattedTitle },
          ]}
        />
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
          <div className="prose prose-lg text-gray-700 mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{formattedTitle}</h2>
            <p className="mb-4">
              This is a placeholder for the full blog post content. In a fully functioning CMS-driven site, this content would be fetched from a database based on the slug <code>{slug}</code>.
            </p>
            <p className="mb-4">
              Early intervention and specialized therapy can make a world of difference. When children receive the support they need during crucial developmental windows, they build confidence and skills that last a lifetime.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Why It Matters</h3>
            <p className="mb-4">
              Parents often wonder if they should wait and see or take action. The consensus among professionals is clear: the earlier, the better. Working alongside trained therapists ensures that every child receives a tailored approach to overcome their unique challenges.
            </p>
            <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
              <Link href="/blogs" className="text-brand-pink font-semibold hover:text-brand-blue flex items-center transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                Back to Blogs
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
