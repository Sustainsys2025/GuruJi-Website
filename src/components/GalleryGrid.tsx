import Link from "next/link";
import Image from "next/image";
import { getImagePath } from "@/lib/image-loader";

interface GalleryEvent {
  slug: string;
  title: string;
  date: string;
  description: string;
  photos: string[];
  coverPhoto: string;
}

interface GalleryGridProps {
  events: GalleryEvent[];
}

export default function GalleryGrid({ events }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event, i) => (
        <Link
          key={event.slug}
          href={`/gallery/${event.slug}`}
          className="group block rounded-2xl overflow-hidden card-hover bg-cream-50 border border-lavender-100/30 reveal-on-scroll"
          style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
        >
          <div className="aspect-[4/3] relative image-hover-zoom rounded-t-2xl">
            <Image
              src={getImagePath(event.coverPhoto)}
              alt={event.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="text-cream-200/90 text-xs font-semibold uppercase tracking-wider">
                {event.date}
              </span>
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-heading font-bold text-lg text-indigo-700 group-hover:text-lavender-600 transition-colors duration-300">
              {event.title}
            </h3>
            <p className="text-indigo-400 text-sm mt-1.5 font-light leading-relaxed">{event.description}</p>
            <p className="text-lavender-500 text-xs mt-3 font-semibold flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {event.photos.length} photos
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
