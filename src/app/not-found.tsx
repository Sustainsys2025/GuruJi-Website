import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 lotus-bg">
      <div className="text-center">
        <div className="text-gold-400/50 text-3xl mb-4">&#x2733;</div>
        <h1 className="font-heading font-bold text-6xl text-maroon-500 mb-4">
          404
        </h1>
        <h2 className="font-heading font-bold text-2xl text-maroon-800 mb-4">
          Page Not Found
        </h2>
        <div className="sacred-divider mb-6" />
        <p className="text-maroon-700/70 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-maroon-500 text-white px-8 py-3 font-bold uppercase text-sm tracking-[0.125em] hover:bg-maroon-600 rounded-sm transition-colors"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
