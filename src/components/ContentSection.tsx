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
    <section className="py-12 md:py-16 lotus-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } gap-8 lg:gap-12 items-center`}
        >
          {/* Text */}
          <div className="flex-1">
            <div className="text-gold-400/50 text-xl mb-2">&#x2733;</div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-maroon-800 mb-4">
              {heading}
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-gold-400 to-transparent mb-6" />
            <p className="text-maroon-700/70 leading-relaxed text-base md:text-lg">
              {description}
            </p>
          </div>
          {/* Image */}
          {imageSrc ? (
            <div className="flex-1 w-full">
              <div className="relative rounded-lg overflow-hidden shadow-lg diya-glow border border-gold-200/30 aspect-[3/4] max-w-md mx-auto">
                <Image
                  src={getImagePath(imageSrc)}
                  alt={imageAlt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          ) : imagePlaceholder ? (
            <div className="flex-1 w-full">
              <div
                className="w-full aspect-[4/3] rounded-lg border border-gold-200/30 shadow-lg"
                style={{ backgroundColor: imagePlaceholder }}
                role="img"
                aria-label={imageAlt}
              >
                <div className="w-full h-full flex items-center justify-center text-white/50 text-sm">
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
