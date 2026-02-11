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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <Link
          key={event.slug}
          href={`/gallery/${event.slug}`}
          className="group block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gold-200/30"
        >
          <div className="aspect-[4/3] relative">
            <Image
              src={getImagePath(event.coverPhoto)}
              alt={event.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-maroon-900/80 to-transparent p-4">
              <span className="text-gold-200 text-xs font-semibold uppercase tracking-wider">
                {event.date}
              </span>
            </div>
          </div>
          <div className="p-4 bg-cream-50">
            <h3 className="font-heading font-bold text-lg text-maroon-800 group-hover:text-maroon-500 transition-colors">
              {event.title}
            </h3>
            <p className="text-temple-500 text-sm mt-1">{event.description}</p>
            <p className="text-gold-500 text-xs mt-2 font-semibold">
              {event.photos.length} photos
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
