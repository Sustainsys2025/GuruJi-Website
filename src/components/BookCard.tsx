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
    <div className="group flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-cream-50 border border-gold-200/30">
      {/* Book cover placeholder */}
      <div
        className="aspect-[3/4] relative flex items-center justify-center"
        style={{ backgroundColor: colorPlaceholder }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="text-center px-6 relative z-10">
          <div className="text-gold-300/60 text-2xl mb-2">&#x2733;</div>
          <span className="text-white font-decorative text-2xl leading-tight block drop-shadow-lg">
            {title}
          </span>
          <span className="text-gold-200/70 text-xs mt-3 block uppercase tracking-wider">
            {type}
          </span>
        </div>
      </div>
      {/* Info */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-heading font-bold text-base text-maroon-800 group-hover:text-maroon-500 transition-colors">
          {title}
        </h3>
        <p className="text-maroon-700/60 text-sm mt-1 flex-1">{description}</p>
        <div className="mt-3">
          <span className="inline-flex items-center gap-1 text-gold-500 text-sm font-semibold hover:text-gold-600 cursor-pointer">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download {type}
          </span>
        </div>
      </div>
    </div>
  );
}
