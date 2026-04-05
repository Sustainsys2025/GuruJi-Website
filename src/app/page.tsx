import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import FeaturedVideo from "@/components/FeaturedVideo";
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

      {/* Featured Satsang Video */}
      <section className="py-16 md:py-20 bg-cream-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 reveal-on-scroll">
            <div className="text-lavender-400/50 text-lg mb-2">&#10022;</div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-indigo-700">
              Featured Satsang
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-lavender-400 to-transparent mx-auto mt-3 rounded-full" />
          </div>
          <div className="reveal-scale">
            <FeaturedVideo
              src="/videos/feb-satsang-2026.mp4"
              title="Feb26 - Maha ShivRatri Satsang"
              date="February 2026"
              description="Glimpses from the blessed Maha ShivRatri Satsang celebration."
            />
          </div>
        </div>
      </section>

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
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-5">
              {siteData.socialLinks.facebook && (
                <a
                  href={siteData.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lavender-300 hover:text-white transition-colors duration-300 group"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                  <span className="text-sm font-light tracking-wide">Facebook</span>
                </a>
              )}
              {siteData.socialLinks.instagram && (
                <a
                  href={siteData.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lavender-300 hover:text-white transition-colors duration-300 group"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  <span className="text-sm font-light tracking-wide">Instagram</span>
                </a>
              )}
            </div>
            <a
              href="https://apps.apple.com/gb/app/guruji-cambridge/id6760822891"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl pl-4 pr-6 py-3 text-white hover:bg-white/20 transition-all duration-300 group"
              aria-label="Download on the App Store"
            >
              <svg className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs font-light leading-none mb-0.5">Download on the</div>
                <div className="text-lg font-semibold leading-tight tracking-tight">App Store</div>
              </div>
            </a>
          </div>
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
