"use client";

import Link from "next/link";

interface AnnouncementBannerProps {
  text: string;
  href: string;
}

export default function AnnouncementBanner({
  text,
  href,
}: AnnouncementBannerProps) {
  return (
    <div
      className="relative overflow-hidden text-white text-center py-3.5 px-4 text-sm tracking-wider shadow-lg"
      style={{
        background: "linear-gradient(90deg, #b8260f 0%, #d44a00 25%, #ff6a00 50%, #d44a00 75%, #b8260f 100%)",
      }}
    >
      {/* Animated shimmer overlay */}
      <div className="absolute inset-0 pointer-events-none banner-shimmer" />

      {/* Subtle pattern overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)",
        }}
      />

      <Link
        href={href}
        className="relative z-10 inline-flex items-center gap-3 transition-all duration-300 group"
      >
        {/* Left fire/sparkle cluster */}
        <span className="flex items-center gap-1.5">
          <span className="text-yellow-300 text-sm banner-sparkle">&#9733;</span>
          <span className="text-orange-200 text-xs banner-sparkle-2">&#10022;</span>
        </span>

        {/* Main text */}
        <span
          className="font-bold uppercase text-white"
          style={{
            fontSize: "0.85rem",
            letterSpacing: "0.18em",
            textShadow: "0 1px 3px rgba(0,0,0,0.4)",
          }}
        >
          {text}
        </span>

        {/* Animated arrow */}
        <span className="inline-flex items-center banner-arrow">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-yellow-300"
            style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }}
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>

        {/* Right fire/sparkle cluster */}
        <span className="flex items-center gap-1.5">
          <span className="text-orange-200 text-xs banner-sparkle-3">&#10022;</span>
          <span className="text-yellow-300 text-sm banner-sparkle-4">&#9733;</span>
        </span>
      </Link>
    </div>
  );
}
