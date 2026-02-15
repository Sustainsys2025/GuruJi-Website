interface BookCardProps {
  title: string;
  description: string;
  type: string;
  colorPlaceholder: string;
}

export default function BookCard({
  title,
  description,
  type,
  colorPlaceholder,
}: BookCardProps) {
  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden card-hover bg-cream-50 border border-lavender-100/30 reveal-on-scroll">
      {/* Book cover */}
      <div
        className="aspect-[3/4] relative flex items-center justify-center"
        style={{ backgroundColor: colorPlaceholder }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="text-center px-6 relative z-10">
          <div className="text-gold-300/60 text-xl mb-2">&#10022;</div>
          <span className="text-white font-heading font-semibold text-2xl leading-tight block drop-shadow-lg">
            {title}
          </span>
          <span className="text-cream-200/70 text-xs mt-3 block uppercase tracking-wider font-light">
            {type}
          </span>
        </div>
      </div>
      {/* Info */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-heading font-bold text-base text-indigo-700 group-hover:text-lavender-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-indigo-400 text-sm mt-1.5 flex-1 font-light">{description}</p>
        <div className="mt-4">
          <span className="inline-flex items-center gap-1.5 text-lavender-500 text-sm font-semibold hover:text-lavender-700 cursor-pointer transition-colors duration-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download {type}
          </span>
        </div>
      </div>
    </div>
  );
}
