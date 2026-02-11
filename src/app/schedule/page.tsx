import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import scheduleData from "@/data/schedule.json";
import { getImagePath } from "@/lib/image-loader";

export const metadata: Metadata = {
  title: "Satsang Schedule & Venue",
  description:
    "Find our upcoming Satsang schedule, venue details, and guidelines for attending our spiritual gatherings.",
};

export default function SchedulePage() {
  return (
    <>
      <HeroSection
        title={scheduleData.hero.title}
        subtitle={scheduleData.hero.subtitle}
        backgroundImage="/images/guruji-pics/guru-darshan-full.jpg"
      />

      {/* Section Title */}
      <section className="py-10 lotus-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading>SATSANG Schedule</SectionHeading>
        </div>
      </section>

      {/* Section 1: Venue - Image Left, Text Right */}
      <section className="py-12 md:py-16 lotus-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Monthly Satsang Poster */}
            <div className="flex-1 w-full">
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-lg overflow-hidden shadow-lg border border-gold-200/30">
                <Image
                  src={getImagePath("/images/guruji-pics/satsang-feb-26.webp")}
                  alt="Monthly Satsang Poster"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
            </div>
            {/* Text */}
            <div className="flex-1">
              <div className="text-gold-400/50 text-xl mb-2">&#x2733;</div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-maroon-800 mb-3">
                {scheduleData.venue.heading}
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-gold-400 to-transparent mb-6" />
              <p className="text-maroon-700/70 leading-relaxed mb-4">
                {scheduleData.venue.description}
              </p>
              <p className="text-maroon-700/70 leading-relaxed mb-4">
                <strong className="text-maroon-800">Sewa and Sewadars:</strong> {scheduleData.venue.sewaNote}
              </p>
              <p className="text-maroon-700/70 leading-relaxed mb-6">
                {scheduleData.venue.closingNote}
              </p>
              <Link
                href="/contact"
                className="inline-block bg-maroon-500 text-white px-8 py-3 font-bold uppercase text-sm tracking-[0.125em] hover:bg-maroon-600 rounded-sm transition-colors"
              >
                Directions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Schedule 2026 - Text Left, Image/Table Right */}
      <section className="py-12 md:py-16 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-start">
            {/* Schedule Table */}
            <div className="flex-1 w-full">
              <div className="bg-cream-50 border border-gold-200/30 rounded-lg shadow-lg overflow-hidden">
                <div className="bg-maroon-800 px-6 py-4 text-center">
                  <h3 className="font-heading font-bold text-lg text-gold-300">
                    GURU Ji Satsang - Schedule 2026
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-maroon-50 border-b border-gold-200/30">
                        <th className="px-4 py-3 text-left text-xs font-bold text-maroon-800 uppercase tracking-wider">Date</th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-maroon-800 uppercase tracking-wider">Day</th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-maroon-800 uppercase tracking-wider">Timing</th>
                      </tr>
                    </thead>
                    <tbody>
                      {scheduleData.schedule2026.dates.map((row, i) => (
                        <tr key={row.date} className={`border-b border-gold-100/20 ${i % 2 === 0 ? "bg-cream-50" : "bg-saffron-50/30"}`}>
                          <td className="px-4 py-2.5 text-sm text-maroon-800 font-medium">{row.date}</td>
                          <td className="px-4 py-2.5 text-sm text-maroon-700/70">{row.day}</td>
                          <td className="px-4 py-2.5 text-sm text-maroon-700/70">{row.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Text */}
            <div className="flex-1">
              <div className="text-gold-400/50 text-xl mb-2">&#x2733;</div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-maroon-800 mb-3">
                {scheduleData.schedule2026.heading}
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-gold-400 to-transparent mb-6" />
              <p className="text-maroon-700/70 leading-relaxed mb-4">
                {scheduleData.schedule2026.description}
              </p>
              <p className="text-maroon-700/70 leading-relaxed">
                {scheduleData.schedule2026.closingNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Guidelines - Image Left, Text Right */}
      <section className="py-12 md:py-16 lotus-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Guidelines card (like image on reference) */}
            <div className="flex-1 w-full">
              <div className="bg-cream-50 border border-gold-200/30 rounded-lg shadow-lg p-6 md:p-8 max-w-md mx-auto">
                <div className="text-center mb-4">
                  <div className="text-gold-400/50 text-xl mb-1">&#x2733;</div>
                  <h3 className="font-heading font-bold text-lg text-maroon-800">GuruJi Satsang Guidelines</h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-gold-400 to-transparent mx-auto mt-2" />
                </div>
                <ol className="space-y-2 text-sm">
                  {scheduleData.guidelines.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-gold-500 font-bold text-xs mt-0.5 shrink-0">{i + 1}.</span>
                      <span className="text-maroon-700/70">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            {/* Text */}
            <div className="flex-1">
              <div className="text-gold-400/50 text-xl mb-2">&#x2733;</div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-maroon-800 mb-3">
                {scheduleData.guidelines.heading}
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-gold-400 to-transparent mb-6" />
              <p className="text-maroon-700/70 leading-relaxed mb-4">
                {scheduleData.guidelines.intro}
              </p>
              <p className="text-maroon-700/70 leading-relaxed mb-4">
                {scheduleData.guidelines.description}
              </p>
              <p className="text-maroon-700/70 leading-relaxed">
                {scheduleData.guidelines.closingNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Schedule 2025 Archive - Text Left, Table Right */}
      <section className="py-12 md:py-16 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-start">
            {/* Schedule Table */}
            <div className="flex-1 w-full">
              <div className="bg-cream-50 border border-gold-200/30 rounded-lg shadow-lg overflow-hidden">
                <div className="bg-maroon-800 px-6 py-4 text-center">
                  <h3 className="font-heading font-bold text-lg text-gold-300">
                    GURU Ji Satsang - Schedule 2025
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-maroon-50 border-b border-gold-200/30">
                        <th className="px-4 py-3 text-left text-xs font-bold text-maroon-800 uppercase tracking-wider">Date</th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-maroon-800 uppercase tracking-wider">Day</th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-maroon-800 uppercase tracking-wider">Timing</th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-maroon-800 uppercase tracking-wider">Occasion</th>
                      </tr>
                    </thead>
                    <tbody>
                      {scheduleData.schedule2025.dates.map((row, i) => (
                        <tr key={row.date} className={`border-b border-gold-100/20 ${i % 2 === 0 ? "bg-cream-50" : "bg-saffron-50/30"}`}>
                          <td className="px-4 py-2.5 text-sm text-maroon-800 font-medium">{row.date}</td>
                          <td className="px-4 py-2.5 text-sm text-maroon-700/70">{row.day}</td>
                          <td className="px-4 py-2.5 text-sm text-maroon-700/70">{row.time}</td>
                          <td className="px-4 py-2.5 text-sm text-gold-600 font-medium">{row.occasion}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Text */}
            <div className="flex-1">
              <div className="text-gold-400/50 text-xl mb-2">&#x2733;</div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-maroon-800 mb-3">
                {scheduleData.schedule2025.heading}
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-gold-400 to-transparent mb-6" />
              <p className="text-maroon-700/70 leading-relaxed mb-4">
                {scheduleData.schedule2025.description}
              </p>
              <p className="text-maroon-700/70 leading-relaxed italic">
                <strong className="text-maroon-800 not-italic">Please note:</strong> {scheduleData.schedule2025.note}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
