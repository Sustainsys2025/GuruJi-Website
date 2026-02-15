"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { getImagePath } from "@/lib/image-loader";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundPlaceholder?: string;
  large?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  backgroundPlaceholder = "#2a1f16",
  large = false,
}: HeroSectionProps) {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      if (bgRef.current) {
        const speed = 0.3;
        bgRef.current.style.transform = `translateY(${window.scrollY * speed}px)`;
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`relative flex items-center justify-center text-white overflow-hidden ${
        large ? "min-h-[75vh]" : "min-h-[45vh]"
      }`}
      style={!backgroundImage ? { backgroundColor: backgroundPlaceholder } : undefined}
    >
      {backgroundImage && (
        <div ref={bgRef} className="absolute inset-0" style={{ top: "-15%", bottom: "-15%" }}>
          <Image
            src={getImagePath(backgroundImage)}
            alt="Sacred background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      )}

      <div className="absolute inset-0 sacred-overlay" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-[15%] w-64 h-64 bg-lavender-400/5 rounded-full blur-3xl animate-breathe" />
      <div className="absolute bottom-1/4 right-[15%] w-48 h-48 bg-gold-300/5 rounded-full blur-3xl animate-breathe stagger-2" />

      {/* Soft bottom curve */}
      <div className="absolute bottom-0 left-0 right-0 z-[2]">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 0C1440 0 1080 50 720 50C360 50 0 0 0 0L0 60Z" fill="var(--color-cream-50)" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl animate-fade-in-up">
        <div className="text-gold-300/50 text-2xl mb-3 animate-float">&#10022;</div>
        <h1
          className={`font-heading font-bold leading-tight ${
            large ? "text-4xl md:text-5xl lg:text-6xl" : "text-3xl md:text-4xl lg:text-5xl"
          }`}
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
        >
          {title}
        </h1>
        <div className="sacred-divider mt-4" />
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-cream-200/90 font-light tracking-wide">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
