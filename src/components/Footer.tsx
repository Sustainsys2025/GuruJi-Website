import Link from "next/link";

interface FooterProps {
  siteName: string;
  socialLinks: {
    facebook?: string;
  };
}

export default function Footer({ siteName, socialLinks }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-indigo-800 text-white relative">
      {/* Soft top curve */}
      <div className="absolute -top-[30px] left-0 right-0">
        <svg viewBox="0 0 1440 30" fill="none" className="w-full" preserveAspectRatio="none">
          <path d="M0 30L1440 30L1440 30C1440 30 1080 0 720 0C360 0 0 30 0 30Z" fill="var(--color-indigo-800)" />
        </svg>
      </div>

      {/* Lavender accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-lavender-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading font-semibold text-cream-200 text-xl tracking-wide">{siteName}</p>
            <p className="text-sm text-indigo-300 mt-2 font-light">
              &copy; {year} {siteName} &mdash; All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center gap-6">
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="text-lavender-300 hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-lavender-600/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            )}
            <Link
              href="/contact"
              className="text-sm text-lavender-300 hover:text-white transition-colors duration-300 font-light tracking-wide"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-lavender-400/20 to-transparent mt-8 mb-5" />

        {/* Sustainsys Credit */}
        <div className="flex items-center justify-end">
          <a
            href="https://sustainsys.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 group transition-all duration-300 opacity-70 hover:opacity-100"
          >
            <span className="text-xs text-indigo-300 group-hover:text-cream-200 transition-colors duration-300" style={{ letterSpacing: "0.05em" }}>
              Created &amp; Maintained by
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://sustainsys.co.uk/logo_only.png"
              alt="SustainSys Logo"
              className="h-6 w-auto rounded-sm group-hover:brightness-110 transition-all duration-300"
            />
            <span className="text-xs font-semibold text-cream-200 group-hover:text-white transition-colors duration-300">
              SustainSys Consulting Ltd
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
