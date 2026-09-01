"use client";

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageHero from "@/components/SubPageHero";
import { useGsapStaggerChildren } from "@/components/hooks/useGsapAnimation";

const galleryItems = [
  { title: "Therapy Sessions", category: "Activities", image: "/images/gallery_sessions.jpg" },
  { title: "Play Area", category: "Facilities", image: "/images/gallery_facilities.jpg" },
  { title: "Group Activities", category: "Sessions", image: "/images/gallery_activities.jpg" },
  { title: "Art & Craft", category: "Activities", image: "/images/gallery_activities.jpg" },
  { title: "Sensory Room", category: "Facilities", image: "/images/gallery_facilities.jpg" },
  { title: "Outdoor Play", category: "Activities", image: "/images/gallery_activities.jpg" },
  { title: "Assessment Area", category: "Facilities", image: "/images/gallery_sessions.jpg" },
  { title: "Parent Sessions", category: "Sessions", image: "/images/blog_parents.jpg" },
  { title: "Celebrations", category: "Events", image: "/images/gallery_sessions.jpg" },
];

export default function GalleryPage() {
  const gridRef = useGsapStaggerChildren(".gallery-item", "scale-in");

  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <SubPageHero bgImage="/images/gallery.jpg" title="Our"
          highlight="Gallery"
          subtitle="Take a glimpse inside our center and see the warm, engaging environment where children learn, grow, and thrive."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Gallery" },
          ]}
        />

        <section className="py-16 sm:py-20 bg-surface-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className="gallery-item group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 jelly-hover cursor-pointer"
                >
                  <div className="aspect-[4/3] relative bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-semibold">{item.title}</span>
                    <span className="text-white/70 text-sm ml-2">• {item.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
