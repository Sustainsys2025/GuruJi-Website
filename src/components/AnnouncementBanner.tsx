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
    <div className="bg-maroon-500 text-white text-center py-2.5 px-4 text-sm tracking-wide">
      <Link
        href={href}
        className="hover:text-gold-200 inline-flex items-center gap-2"
      >
        <span className="text-gold-300">&#10035;</span>
        {text}
        <span className="text-gold-300">&#10035;</span>
      </Link>
    </div>
  );
}
