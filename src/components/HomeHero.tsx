import Image from "next/image";
import { getImagePath } from "@/lib/image-loader";

interface HomeHeroProps {
  title: string;
  subtitle?: string;
}

export default function HomeHero({ title, subtitle }: HomeHeroProps) {
  return (
    <section className="relative overflow-hidden min-h-[70vh] flex items-center">
      {/* Warm gradient background - lighter to contrast with saffron image */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, #fdfcf8 0%, #fff7e6 25%, #ffecbf 50%, #ffd978 80%, #ffcc50 100%)",
        }}
      />

      {/* Subtle decorative shapes */}
      <div
        className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, #ffc53d 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-15%] left-[20%] w-[300px] h-[300px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #ffd978 0%, transparent 70%)",
        }}
      />

      {/* Faint mandala / lotus decorative SVG */}
      <div className="absolute left-8 bottom-8 opacity-[0.08]">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="#7a4800" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="70" stroke="#7a4800" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="50" stroke="#7a4800" strokeWidth="0.5" />
          {[0, 30, 60, 90, 120, 150].map((angle) => (
            <line
              key={angle}
              x1="100"
              y1="10"
              x2="100"
              y2="190"
              stroke="#7a4800"
              strokeWidth="0.5"
              transform={`rotate(${angle} 100 100)`}
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left side - Text */}
        <div className="flex-1 text-center lg:text-left py-12 lg:py-0">
          <div className="text-saffron-500/60 text-2xl mb-4">&#10022;</div>
          <h1
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight"
            style={{
              color: "#3d3020",
              textShadow: "0 2px 4px rgba(255,179,15,0.2)",
            }}
          >
            {title}
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-saffron-500 to-gold-400 mt-5 mb-5 rounded-full lg:mx-0 mx-auto" />
          {subtitle && (
            <p
              className="text-lg md:text-xl font-light leading-relaxed max-w-lg lg:mx-0 mx-auto"
              style={{ color: "#6b5840" }}
            >
              {subtitle}
            </p>
          )}
          <a
            href="https://apps.apple.com/gb/app/guruji-cambridge/id6760822891"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-black rounded-xl px-5 py-2.5 mt-6 hover:bg-gray-800 transition-colors duration-300 group lg:mx-0 mx-auto"
            aria-label="Download on the App Store"
          >
            <svg className="w-7 h-7 text-white group-hover:scale-105 transition-transform duration-300" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] text-white/80 leading-none mb-0.5">Download on the</div>
              <div className="text-base font-semibold text-white leading-tight tracking-tight">App Store</div>
            </div>
          </a>
        </div>

        {/* Right side - GuruJi Image */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="relative w-[320px] h-[420px] sm:w-[380px] sm:h-[500px] md:w-[420px] md:h-[560px] lg:w-[460px] lg:h-[600px]">
            {/* Soft glow behind image */}
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-30"
              style={{
                background: "radial-gradient(circle, #ffb30f 0%, transparent 70%)",
                transform: "scale(1.2)",
              }}
            />
            <Image
              src={getImagePath("/images/guruji-pics/guruji-saffron.webp")}
              alt="GuruJi Maharaj"
              fill
              className="object-cover object-top drop-shadow-2xl"
              priority
              sizes="(max-width: 768px) 320px, (max-width: 1024px) 420px, 460px"
              style={{
                filter: "contrast(1.15) saturate(1.1)",
                borderRadius: "0 0 40% 40%",
                maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Soft bottom curve */}
      <div className="absolute bottom-0 left-0 right-0 z-[2]">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
          <path
            d="M0 60L1440 60L1440 0C1440 0 1080 50 720 50C360 50 0 0 0 0L0 60Z"
            fill="var(--color-cream-50)"
          />
        </svg>
      </div>
    </section>
  );
}
