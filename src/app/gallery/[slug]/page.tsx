import type { Metadata } from "next";
import Link from "next/link";
import PhotoCollage from "@/components/PhotoCollage";
import galleryData from "@/data/gallery.json";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return galleryData.events.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = galleryData.events.find((e) => e.slug === slug);
  if (!event) return { title: "Gallery" };
  return {
    title: event.title,
    description: event.description,
  };
}

export default async function EventGalleryPage({ params }: PageProps) {
  const { slug } = await params;
  const event = galleryData.events.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <section className="py-12 md:py-16 lotus-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <div className="mb-6">
          <Link
            href="/gallery"
            className="text-maroon-500 hover:text-maroon-700 text-sm font-semibold inline-flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Gallery
          </Link>
        </div>

        {/* Event Title */}
        <div className="text-center mb-10">
          <div className="text-gold-400/60 text-2xl mb-2">&#x2733;</div>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-maroon-800">
            {event.title}
          </h1>
          <div className="sacred-divider mt-3" />
          <p className="text-temple-500 mt-3">{event.date} &middot; {event.photos.length} photos</p>
        </div>

        {/* Photo Collage */}
        <PhotoCollage photos={event.photos} title={event.title} />
      </div>
    </section>
  );
}
