import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import SubscribeSection from "@/components/SubscribeSection";
import homeData from "@/data/home.json";
import siteData from "@/data/site.json";
import galleryData from "@/data/gallery.json";
import { getImagePath } from "@/lib/image-loader";

export const metadata: Metadata = {
  title: "Home",
  description: siteData.description,
};

export default function HomePage() {

  // Featured event - most recent
  const featuredEvent = galleryData.events[0];

  return (
    <>
      {/* Hero */}
      <HomeHero
        title={homeData.hero.title}
        subtitle={homeData.hero.subtitle}
      />

      {/* GuruJi Quote */}
      <section className="py-12 md:py-14">
        <div className="max-w-3xl mx-auto px-4 text-center reveal-on-scroll">
          <div className="bg-lavender-50/50 border border-lavender-100/40 rounded-3xl p-8 md:p-10 sacred-glow">
            <div className="text-gold-400/40 text-lg mb-3">&#10022;</div>
            <blockquote className="font-heading text-xl md:text-2xl text-indigo-600 italic leading-relaxed">
              &ldquo;Mein srishti ke pher mein kabhi hastakshape nahin karda...lekin jidde utte guruan di mauj aa jave, lekh mitakar nava lekh likh saknawan.&rdquo;
            </blockquote>
            <div className="sacred-divider mt-4" />
            <p className="text-lavender-500 text-sm mt-3 font-semibold tracking-wider uppercase">
              &mdash; GuruJi
            </p>
          </div>
        </div>
      </section>

      {/* Who Are We */}
      <section className="py-16 md:py-20 lotus-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex-1 reveal-left">
              <div className="text-lavender-400/50 text-lg mb-2">&#10022;</div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-indigo-700 mb-4">
                {homeData.intro.heading}
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-lavender-400 to-transparent mb-6 rounded-full" />
              <p className="text-indigo-400 leading-relaxed text-base md:text-lg">
                {homeData.intro.description}
              </p>
            </div>
            <div className="flex-1 w-full reveal-right">
              <div className="relative rounded-2xl overflow-hidden sacred-glow">
                <Image
                  src={getImagePath("/images/guruji-pics/light-of-divinity.jpg")}
                  alt="Light of Divinity"
                  width={700}
                  height={400}
                  className="w-full h-auto transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event of the Day */}
      {featuredEvent && (
        <section className="py-16 md:py-20 bg-cream-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 reveal-on-scroll">
              <div className="text-lavender-400/50 text-lg mb-2">&#10022;</div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-indigo-700">
                Featured Gallery
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-lavender-400 to-transparent mx-auto mt-3 rounded-full" />
            </div>
            <Link href={`/gallery/${featuredEvent.slug}`} className="group block reveal-scale">
              <div className="relative rounded-3xl overflow-hidden sacred-glow aspect-[21/9]">
                <Image
                  src={getImagePath(featuredEvent.coverPhoto)}
                  alt={featuredEvent.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 via-indigo-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <span className="text-cream-200/80 text-xs font-semibold uppercase tracking-wider">
                    {featuredEvent.date}
                  </span>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mt-2 group-hover:text-lavender-200 transition-colors duration-300">
                    {featuredEvent.title}
                  </h3>
                  <p className="text-cream-200/70 mt-2 text-sm font-light max-w-lg">
                    {featuredEvent.description}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-4 text-lavender-300 text-sm font-semibold group-hover:text-white transition-colors duration-300">
                    View {featuredEvent.photos.length} photos
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* CTA / Invitation */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={getImagePath("/images/guruji-pics/temple-dome.jpg")}
            alt="Temple dome background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-indigo-900/75" />
        </div>

        {/* Decorative orbs */}
        <div className="absolute top-1/3 left-[10%] w-48 h-48 bg-lavender-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-[10%] w-64 h-64 bg-gold-300/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center reveal-on-scroll">
          <div className="text-gold-300/40 text-2xl mb-4 animate-float">&#10022;</div>
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed">
            {homeData.cta.heading}
          </h2>
          <div className="sacred-divider mt-4" />
          <p className="mt-5 text-cream-200/80 text-lg font-light leading-relaxed">
            {homeData.cta.description}
          </p>
          {siteData.socialLinks.facebook && (
            <div className="mt-8">
              <a
                href={siteData.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-lavender-300 hover:text-white transition-colors duration-300 group"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                <span className="text-sm font-light tracking-wide">Follow us on Facebook</span>
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
