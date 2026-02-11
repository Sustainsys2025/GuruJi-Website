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
    <footer className="bg-maroon-800 text-white">
      {/* Gold accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-decorative text-gold-300 text-lg">{siteName}</p>
            <p className="text-sm text-maroon-200 mt-1">
              Copyright &copy; {year} {siteName} &mdash; All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="text-gold-300 hover:text-gold-100"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            )}
            <Link href="/contact" className="text-sm text-gold-300 hover:text-gold-100">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
