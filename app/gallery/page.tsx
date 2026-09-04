"use client";

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageHero from "@/components/SubPageHero";
import { useGsapStaggerChildren } from "@/components/hooks/useGsapAnimation";

const galleryItems = [
  { title: "Group Therapy Session", category: "Activities", image: "/images/mytherapist%20gallery/WhatsApp%20Image%202026-09-04%20at%203.08.18%20PM%20(1).jpeg" },
  { title: "Parent Meeting", category: "Sessions", image: "/images/mytherapist%20gallery/WhatsApp%20Image%202026-09-04%20at%203.08.18%20PM%20(2).jpeg" },
  { title: "Christmas Celebration", category: "Events", image: "/images/mytherapist%20gallery/WhatsApp%20Image%202026-09-04%20at%203.08.18%20PM.jpeg" },
  { title: "One-on-One Therapy", category: "Activities", image: "/images/mytherapist%20gallery/WhatsApp%20Image%202026-09-04%20at%203.08.19%20PM%20(1).jpeg" },
  { title: "Holi Celebrations", category: "Events", image: "/images/mytherapist%20gallery/WhatsApp%20Image%202026-09-04%20at%203.08.19%20PM%20(2).jpeg" },
  { title: "Birthday Party", category: "Events", image: "/images/mytherapist%20gallery/WhatsApp%20Image%202026-09-04%20at%203.08.19%20PM%20(3).jpeg" },
  { title: "Learning Corner", category: "Sessions", image: "/images/mytherapist%20gallery/WhatsApp%20Image%202026-09-04%20at%203.08.19%20PM.jpeg" },
  { title: "Autism Awareness", category: "Sessions", image: "/images/mytherapist%20gallery/WhatsApp%20Image%202026-09-04%20at%203.08.20%20PM%20(1).jpeg" },
  { title: "Our Team", category: "Facilities", image: "/images/mytherapist%20gallery/WhatsApp%20Image%202026-09-04%20at%203.08.20%20PM%20(2).jpeg" },
  { title: "Art & Craft", category: "Activities", image: "/images/mytherapist%20gallery/WhatsApp%20Image%202026-09-04%20at%203.08.20%20PM.jpeg" },
  { title: "Team Gathering", category: "Facilities", image: "/images/mytherapist%20gallery/WhatsApp%20Image%202026-09-04%20at%203.09.37%20PM.jpeg" },
  { title: "ABA Therapy Session", category: "Activities", image: "/images/aba-therapy.jpeg" },
];

export default function GalleryPage() {
  const gridRef = useGsapStaggerChildren(".gallery-item", "scale-in");

  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <SubPageHero bgImage="/images/mytherapist%20gallery/WhatsApp%20Image%202026-09-04%20at%203.08.18%20PM%20(1).jpeg" title="Our"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent flex items-end p-4">
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
