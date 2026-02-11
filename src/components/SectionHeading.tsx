interface SectionHeadingProps {
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  children,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <div className="text-gold-400/50 text-xl mb-2">&#x2733;</div>
      <h2
        className={`font-heading font-bold text-2xl md:text-3xl lg:text-[2.625rem] text-maroon-800 ${
          centered ? "text-center" : ""
        } ${className}`}
      >
        {children}
      </h2>
      <div
        className={`w-16 h-0.5 bg-gradient-to-r from-gold-400 to-transparent mt-3 ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
