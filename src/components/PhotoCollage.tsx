"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { getImagePath } from "@/lib/image-loader";

interface PhotoCollageProps {
  photos: string[];
  title: string;
}

export default function PhotoCollage({ photos, title }: PhotoCollageProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const goNext = useCallback(() => {
    if (selectedIndex !== null && selectedIndex < photos.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  }, [selectedIndex, photos.length]);

  const goPrev = useCallback(() => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedIndex, goNext, goPrev]);

  function getSpanClass(index: number, total: number): string {
    if (total <= 2) return "span-2-col";
    if (index === 0) return "span-2-both";
    if (index === 3 && total > 5) return "span-2-col";
    if (index === total - 1 && total % 3 === 1) return "span-2-col";
    return "";
  }

  return (
    <div>
      <div className="collage-grid">
        {photos.map((photo, i) => (
          <button
            key={photo}
            onClick={() => setSelectedIndex(i)}
            className={`relative overflow-hidden rounded-2xl group cursor-pointer reveal-scale ${getSpanClass(i, photos.length)}`}
            style={{ transitionDelay: `${i * 0.05}s` }}
            aria-label={`View photo ${i + 1} of ${photos.length} from ${title}`}
          >
            <Image
              src={getImagePath(photo)}
              alt={`${title} - Photo ${i + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 50vw, 33vw"
              loading={i < 4 ? "eager" : "lazy"}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-lavender-900/0 group-hover:bg-lavender-900/10 transition-colors duration-500 rounded-2xl" />
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-lavender-300/40 rounded-2xl transition-colors duration-500" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-indigo-900/95 backdrop-blur-sm flex items-center justify-center animate-fade-in"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-label="Image viewer"
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-cream-200/80 hover:text-white z-10 p-2 rounded-full hover:bg-white/10 transition-all duration-300"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close viewer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          {selectedIndex > 0 && (
            <button
              className="absolute left-4 md:left-6 text-cream-200/80 hover:text-white z-10 p-3 rounded-full hover:bg-white/10 transition-all duration-300"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label="Previous photo"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next */}
          {selectedIndex < photos.length - 1 && (
            <button
              className="absolute right-4 md:right-6 text-cream-200/80 hover:text-white z-10 p-3 rounded-full hover:bg-white/10 transition-all duration-300"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              aria-label="Next photo"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            className="relative w-[90vw] h-[85vh] max-w-5xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={getImagePath(photos[selectedIndex])}
              alt={`${title} - Photo ${selectedIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream-200/60 text-sm font-light tracking-wider">
            {selectedIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </div>
  );
}
