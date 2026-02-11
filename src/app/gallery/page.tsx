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

      <section className="py-12 md:py-16 lotus-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-maroon-700/70 mb-10 max-w-2xl mx-auto">
            {galleryData.description}
          </p>
          <GalleryGrid events={galleryData.events} />
        </div>
      </section>
    </>
  );
}
