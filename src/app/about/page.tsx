import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import aboutData from "@/data/about.json";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about our spiritual community in Cambridgeshire, our mission, gatherings, and seva.",
};

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title={aboutData.hero.title}
        subtitle={aboutData.hero.subtitle}
        backgroundImage="/images/guruji-pics/mandir-hall.jpg"
      />

      {aboutData.sections.map((section, index) => (
        <ContentSection
          key={section.heading}
          heading={section.heading}
          description={section.description}
          imageSrc={section.imageSrc}
          imageAlt={section.heading}
          reverse={index % 2 !== 0}
        />
      ))}

      {/* Devotional CTA at bottom */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/guruji-pics/charan.jpg"
            alt="Sacred charan background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-maroon-900/80" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div className="text-gold-300/60 text-3xl mb-4">&#x2733;</div>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white">
            Walk the Path of Devotion With Us
          </h2>
          <div className="sacred-divider mt-3" />
          <p className="mt-4 text-gold-200/80 text-lg font-decorative">
            Every gathering is an opportunity to come together, share in the divine experience, and strengthen our bonds as a community.
          </p>
        </div>
      </section>
    </>
  );
}
