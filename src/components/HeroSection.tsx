import Image from "next/image";

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
  backgroundPlaceholder = "#800020",
  large = false,
}: HeroSectionProps) {
  return (
    <section
      className={`relative flex items-center justify-center text-white overflow-hidden ${
        large ? "min-h-[70vh]" : "min-h-[40vh]"
      }`}
      style={!backgroundImage ? { backgroundColor: backgroundPlaceholder } : undefined}
    >
      {/* Background image */}
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Sacred background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      )}
      {/* Sacred overlay */}
      <div className="absolute inset-0 sacred-overlay" />
      {/* Subtle gold border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-3xl">
        {/* Om symbol decorative */}
        <div className="text-gold-300/60 text-3xl mb-4 font-decorative">&#x2733;</div>
        <h1
          className={`font-heading font-bold ${
            large ? "text-4xl md:text-5xl lg:text-6xl" : "text-3xl md:text-4xl lg:text-5xl"
          }`}
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.4)" }}
        >
          {title}
        </h1>
        <div className="sacred-divider mt-4" />
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-gold-200 font-decorative">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
