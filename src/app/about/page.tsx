import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import aboutData from "@/data/about.json";
import { getImagePath } from "@/lib/image-loader";

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

      {/* Devotional CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={getImagePath("/images/guruji-pics/charan.jpg")}
            alt="Sacred charan background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-indigo-900/75" />
        </div>
        <div className="absolute top-1/4 left-[10%] w-48 h-48 bg-lavender-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-[10%] w-64 h-64 bg-gold-300/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center reveal-on-scroll">
          <div className="text-gold-300/40 text-2xl mb-4 animate-float">&#10022;</div>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white">
            Walk the Path of Devotion With Us
          </h2>
          <div className="sacred-divider mt-3" />
          <p className="mt-5 text-cream-200/80 text-lg font-light leading-relaxed">
            Every gathering is an opportunity to come together, share in the divine experience, and strengthen our bonds as a community.
          </p>
        </div>
      </section>
    </>
  );
}
