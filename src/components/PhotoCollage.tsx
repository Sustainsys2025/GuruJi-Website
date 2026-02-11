"use client";

import Image from "next/image";
import { useState } from "react";
import { getImagePath } from "@/lib/image-loader";

interface PhotoCollageProps {
  photos: string[];
  title: string;
}

export default function PhotoCollage({ photos, title }: PhotoCollageProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Assign collage layout classes based on position
  function getSpanClass(index: number, total: number): string {
    if (total <= 2) return "span-2-col";
    if (index === 0) return "span-2-both"; // First photo is large
    if (index === 3 && total > 5) return "span-2-col"; // 4th photo spans wide
    if (index === total - 1 && total % 3 === 1) return "span-2-col"; // Last photo fills if odd
    return "";
  }

  return (
    <div>
      {/* Collage Grid */}
      <div className="collage-grid">
        {photos.map((photo, i) => (
          <button
            key={photo}
            onClick={() => setSelectedIndex(i)}
            className={`relative overflow-hidden rounded-lg group cursor-pointer ${getSpanClass(i, photos.length)}`}
            aria-label={`View photo ${i + 1} of ${photos.length} from ${title}`}
          >
            <Image
              src={getImagePath(photo)}
              alt={`${title} - Photo ${i + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, 33vw"
              loading={i < 4 ? "eager" : "lazy"}
            />
            {/* Subtle gold border on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-400/50 rounded-lg transition-colors" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-maroon-900/95 flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-label="Image viewer"
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-gold-300 text-3xl hover:text-white z-10"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close viewer"
          >
            &times;
          </button>
          {/* Prev */}
          {selectedIndex > 0 && (
            <button
              className="absolute left-4 text-gold-300 text-5xl hover:text-white z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(selectedIndex - 1);
              }}
              aria-label="Previous photo"
            >
              &#8249;
            </button>
          )}
          {/* Next */}
          {selectedIndex < photos.length - 1 && (
            <button
              className="absolute right-4 text-gold-300 text-5xl hover:text-white z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(selectedIndex + 1);
              }}
              aria-label="Next photo"
            >
              &#8250;
            </button>
          )}
          {/* Image */}
          <div
            className="relative w-[90vw] h-[85vh] max-w-5xl"
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
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gold-300 text-sm">
            {selectedIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </div>
  );
}
