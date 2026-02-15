import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import GalleryGrid from "@/components/GalleryGrid";
import galleryData from "@/data/gallery.json";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Browse photographs from our Satsangs and celebrations throughout the year.",
};

export default function GalleryPage() {
  return (
    <>
      <HeroSection
        title={galleryData.hero.title}
        subtitle={galleryData.hero.subtitle}
        backgroundImage={galleryData.hero.backgroundImage}
      />

      <section className="py-14 md:py-20 lotus-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-indigo-400 mb-12 max-w-2xl mx-auto font-light reveal-on-scroll">
            {galleryData.description}
          </p>
          <GalleryGrid events={galleryData.events} />
        </div>
      </section>
    </>
  );
}
