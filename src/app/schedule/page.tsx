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

function getNextSatsangDate(dates: { date: string }[]): string | null {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const monthMap: Record<string, number> = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
  };
  for (const entry of dates) {
    const parts = entry.date.split("-");
    const day = parseInt(parts[0], 10);
    const month = monthMap[parts[1]];
    const year = 2000 + parseInt(parts[2], 10);
    const d = new Date(year, month, day);
    if (d >= now) return entry.date;
  }
  return null;
}

export default function SchedulePage() {
  const nextDate = getNextSatsangDate(scheduleData.schedule2026.dates);

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

      {/* Section 1: Venue */}
      <section className="py-14 md:py-20 lotus-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex-1 w-full reveal-left">
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden sacred-glow">
                <Image
                  src={getImagePath("/images/guruji-pics/satsang-mar-26.jpeg")}
                  alt="Monthly Satsang Poster"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
            </div>
            <div className="flex-1 reveal-right">
              <div className="text-lavender-400/50 text-lg mb-2">&#10022;</div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-indigo-700 mb-3">
                {scheduleData.venue.heading}
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-lavender-400 to-transparent mb-6 rounded-full" />
              <p className="text-indigo-400 leading-relaxed mb-4">
                {scheduleData.venue.description}
              </p>
              <p className="text-indigo-400 leading-relaxed mb-4">
                <strong className="text-indigo-600">Sewa and Sewadars:</strong> {scheduleData.venue.sewaNote}
              </p>
              <p className="text-indigo-400 leading-relaxed mb-6">
                {scheduleData.venue.closingNote}
              </p>
              <Link
                href="/contact"
                className="inline-block bg-lavender-500 text-white px-8 py-3 font-semibold text-sm tracking-wide hover:bg-lavender-600 rounded-xl btn-shimmer transition-colors duration-300"
              >
                Directions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Schedule 2026 */}
      <section className="py-14 md:py-20 bg-cream-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-start">
            <div className="flex-1 w-full reveal-right">
              <div className="bg-cream-50 border border-lavender-100/30 rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-indigo-700 px-6 py-4 text-center">
                  <h3 className="font-heading font-bold text-lg text-cream-200">
                    GURU Ji Satsang - Schedule 2026
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-lavender-50 border-b border-lavender-100/30">
                        <th className="px-4 py-3 text-left text-xs font-bold text-indigo-700 uppercase tracking-wider">Date</th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-indigo-700 uppercase tracking-wider">Day</th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-indigo-700 uppercase tracking-wider">Timing</th>
                      </tr>
                    </thead>
                    <tbody>
                      {scheduleData.schedule2026.dates.map((row, i) => {
                        const isNext = row.date === nextDate;
                        return (
                          <tr
                            key={row.date}
                            className={`border-b border-lavender-100/20 ${
                              isNext
                                ? "relative"
                                : i % 2 === 0
                                  ? "bg-cream-50"
                                  : "bg-lavender-50/30"
                            }`}
                            style={isNext ? {
                              background: "linear-gradient(90deg, #ff6a00, #ff9f1a, #ff6a00)",
                            } : undefined}
                          >
                            <td className={`px-4 py-3 text-sm font-bold ${isNext ? "text-white" : "text-indigo-700"}`}>
                              {isNext && <span className="mr-1.5">&#9733;</span>}
                              {row.date}
                            </td>
                            <td className={`px-4 py-3 text-sm ${isNext ? "text-white font-semibold" : "text-indigo-400"}`}>
                              {row.day}
                            </td>
                            <td className={`px-4 py-3 text-sm ${isNext ? "text-white font-semibold" : "text-indigo-400"}`}>
                              {row.time}
                            </td>
                            {isNext && (
                              <td className="px-4 py-3 text-xs font-bold text-yellow-200 uppercase tracking-wider whitespace-nowrap">
                                &#8592; Next Satsang
                              </td>
                            )}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="flex-1 reveal-left">
              <div className="text-lavender-400/50 text-lg mb-2">&#10022;</div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-indigo-700 mb-3">
                {scheduleData.schedule2026.heading}
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-lavender-400 to-transparent mb-6 rounded-full" />
              <p className="text-indigo-400 leading-relaxed mb-4">
                {scheduleData.schedule2026.description}
              </p>
              <p className="text-indigo-400 leading-relaxed">
                {scheduleData.schedule2026.closingNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Guidelines */}
      <section className="py-14 md:py-20 lotus-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            <div className="flex-1 w-full reveal-left">
              <div className="bg-cream-50 border border-lavender-100/30 rounded-2xl shadow-lg p-6 md:p-8 max-w-md mx-auto sacred-glow">
                <div className="text-center mb-4">
                  <div className="text-lavender-400/50 text-lg mb-1">&#10022;</div>
                  <h3 className="font-heading font-bold text-lg text-indigo-700">GuruJi Satsang Guidelines</h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-lavender-400 to-transparent mx-auto mt-2 rounded-full" />
                </div>
                <ol className="space-y-2.5 text-sm">
                  {scheduleData.guidelines.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-lavender-500 font-bold text-xs mt-0.5 shrink-0">{i + 1}.</span>
                      <span className="text-indigo-400">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="flex-1 reveal-right">
              <div className="text-lavender-400/50 text-lg mb-2">&#10022;</div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-indigo-700 mb-3">
                {scheduleData.guidelines.heading}
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-lavender-400 to-transparent mb-6 rounded-full" />
              <p className="text-indigo-400 leading-relaxed mb-4">
                {scheduleData.guidelines.intro}
              </p>
              <p className="text-indigo-400 leading-relaxed mb-4">
                {scheduleData.guidelines.description}
              </p>
              <p className="text-indigo-400 leading-relaxed">
                {scheduleData.guidelines.closingNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Schedule 2025 Archive */}
      <section className="py-14 md:py-20 bg-cream-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-start">
            <div className="flex-1 w-full reveal-right">
              <div className="bg-cream-50 border border-lavender-100/30 rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-indigo-700 px-6 py-4 text-center">
                  <h3 className="font-heading font-bold text-lg text-cream-200">
                    GURU Ji Satsang - Schedule 2025
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-lavender-50 border-b border-lavender-100/30">
                        <th className="px-4 py-3 text-left text-xs font-bold text-indigo-700 uppercase tracking-wider">Date</th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-indigo-700 uppercase tracking-wider">Day</th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-indigo-700 uppercase tracking-wider">Timing</th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-indigo-700 uppercase tracking-wider">Occasion</th>
                      </tr>
                    </thead>
                    <tbody>
                      {scheduleData.schedule2025.dates.map((row, i) => (
                        <tr key={row.date} className={`border-b border-lavender-100/20 ${i % 2 === 0 ? "bg-cream-50" : "bg-lavender-50/30"}`}>
                          <td className="px-4 py-2.5 text-sm text-indigo-700 font-medium">{row.date}</td>
                          <td className="px-4 py-2.5 text-sm text-indigo-400">{row.day}</td>
                          <td className="px-4 py-2.5 text-sm text-indigo-400">{row.time}</td>
                          <td className="px-4 py-2.5 text-sm text-lavender-500 font-medium">{row.occasion}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="flex-1 reveal-left">
              <div className="text-lavender-400/50 text-lg mb-2">&#10022;</div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-indigo-700 mb-3">
                {scheduleData.schedule2025.heading}
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-lavender-400 to-transparent mb-6 rounded-full" />
              <p className="text-indigo-400 leading-relaxed mb-4">
                {scheduleData.schedule2025.description}
              </p>
              <p className="text-indigo-400 leading-relaxed italic">
                <strong className="text-indigo-600 not-italic">Please note:</strong> {scheduleData.schedule2025.note}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
