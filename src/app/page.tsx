import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import SubscribeSection from "@/components/SubscribeSection";
import homeData from "@/data/home.json";
import siteData from "@/data/site.json";

export const metadata: Metadata = {
  title: "Home",
  description: siteData.description,
};

export default function HomePage() {
  return (
    <>
      {/* Hero with Guru Darshan background */}
      <HeroSection
        title={homeData.hero.title}
        subtitle={homeData.hero.subtitle}
        backgroundImage="/images/guruji-pics/guru-darshan-full.jpg"
        large
      />

      {/* Who Are We - with Light of Divinity image */}
      <section className="py-12 md:py-16 lotus-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="flex-1">
              <div className="text-gold-400/50 text-xl mb-2">&#x2733;</div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-maroon-800 mb-4">
                {homeData.intro.heading}
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-gold-400 to-transparent mb-6" />
              <p className="text-maroon-700/70 leading-relaxed text-base md:text-lg">
                {homeData.intro.description}
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="relative rounded-lg overflow-hidden shadow-lg diya-glow border border-gold-200/30">
                <Image
                  src="/images/guruji-pics/light-of-divinity.jpg"
                  alt="Light of Divinity"
                  width={700}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Invitation with temple image */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/guruji-pics/temple-dome.jpg"
            alt="Temple dome background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-maroon-900/80" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div className="text-gold-300/60 text-3xl mb-4">&#x2733;</div>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white">
            {homeData.cta.heading}
          </h2>
          <div className="sacred-divider mt-3" />
          <p className="mt-4 text-gold-200/80 text-lg font-decorative">
            {homeData.cta.description}
          </p>
          {siteData.socialLinks.facebook && (
            <div className="mt-8">
              <a
                href={siteData.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold-300 hover:text-gold-100"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe */}
      <SubscribeSection
        heading={homeData.subscribe.heading}
        description={homeData.subscribe.description}
        placeholder={homeData.subscribe.placeholder}
        buttonText={homeData.subscribe.buttonText}
      />
    </>
  );
}
