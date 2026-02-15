import Image from "next/image";
import { getImagePath } from "@/lib/image-loader";

interface ContentSectionProps {
  heading: string;
  description: string;
  imagePlaceholder?: string;
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean;
}

export default function ContentSection({
  heading,
  description,
  imagePlaceholder,
  imageSrc,
  imageAlt = "Section image",
  reverse = false,
}: ContentSectionProps) {
  return (
    <section className="py-16 md:py-20 lotus-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } gap-10 lg:gap-16 items-center`}
        >
          {/* Text */}
          <div className={`flex-1 ${reverse ? "reveal-right" : "reveal-left"}`}>
            <div className="text-lavender-400/50 text-lg mb-2">&#10022;</div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-indigo-700 mb-4">
              {heading}
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-lavender-400 to-transparent mb-6 rounded-full" />
            <p className="text-indigo-400 leading-relaxed text-base md:text-lg">
              {description}
            </p>
          </div>
          {/* Image */}
          {imageSrc ? (
            <div className={`flex-1 w-full ${reverse ? "reveal-left" : "reveal-right"}`}>
              <div className="relative rounded-2xl overflow-hidden sacred-glow aspect-[3/4] max-w-md mx-auto">
                <Image
                  src={getImagePath(imageSrc)}
                  alt={imageAlt}
                  fill
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Soft gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/10 to-transparent" />
              </div>
            </div>
          ) : imagePlaceholder ? (
            <div className={`flex-1 w-full ${reverse ? "reveal-left" : "reveal-right"}`}>
              <div
                className="w-full aspect-[4/3] rounded-2xl shadow-lg"
                style={{ backgroundColor: imagePlaceholder }}
                role="img"
                aria-label={imageAlt}
              >
                <div className="w-full h-full flex items-center justify-center text-white/50 text-sm rounded-2xl">
                  [Image: {imageAlt}]
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
