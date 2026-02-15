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
    <div className={`reveal-on-scroll ${centered ? "text-center" : ""}`}>
      <div className="text-lavender-400/50 text-lg mb-2">&#10022;</div>
      <h2
        className={`font-heading font-bold text-2xl md:text-3xl lg:text-[2.625rem] text-indigo-700 ${
          centered ? "text-center" : ""
        } ${className}`}
      >
        {children}
      </h2>
      <div
        className={`w-16 h-0.5 bg-gradient-to-r from-lavender-400 to-transparent mt-3 rounded-full ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
