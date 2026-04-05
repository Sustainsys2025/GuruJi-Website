"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { getImagePath } from "@/lib/image-loader";

interface NavChild {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  children?: NavChild[];
}

interface NavbarProps {
  links: NavLink[];
  siteName: string;
}

export default function Navbar({ links, siteName }: NavbarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(null);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream-50/95 backdrop-blur-md shadow-sm"
          : "bg-cream-50/80 backdrop-blur-sm"
      }`}
    >
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender-200/50 to-transparent" />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src={getImagePath("/images/guruji-pics/logo.png")}
                alt={siteName}
                width={42}
                height={42}
                className="rounded-full shadow-sm ring-2 ring-lavender-200/60 group-hover:ring-lavender-300 transition-all duration-500"
              />
            </div>
            <span className="font-heading font-semibold text-indigo-700 text-lg tracking-wide hidden sm:block group-hover:text-lavender-600 transition-colors duration-300">
              {siteName}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {links.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() =>
                      setDropdownOpen(dropdownOpen === link.label ? null : link.label)
                    }
                    className={`px-3 py-2 text-sm font-semibold tracking-wide flex items-center gap-1 rounded-full transition-all duration-300 ${
                      pathname.startsWith(link.href)
                        ? "text-lavender-600 bg-lavender-50"
                        : "text-indigo-600 hover:text-lavender-600 hover:bg-lavender-50/50"
                    }`}
                    aria-expanded={dropdownOpen === link.label}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <svg
                      className={`w-3 h-3 transition-transform duration-300 ${
                        dropdownOpen === link.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {dropdownOpen === link.label && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-cream-50/95 backdrop-blur-md shadow-lg rounded-2xl py-2 z-50 border border-lavender-100/50 animate-fade-in">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-2.5 text-sm text-indigo-600 hover:bg-lavender-50 hover:text-lavender-600 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-semibold tracking-wide rounded-full transition-all duration-300 ${
                    pathname === link.href
                      ? "text-lavender-600 bg-lavender-50"
                      : "text-indigo-600 hover:text-lavender-600 hover:bg-lavender-50/50"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="https://apps.apple.com/gb/app/guruji-cambridge/id6760822891"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 p-2 text-indigo-600 hover:text-lavender-600 hover:bg-lavender-50/50 rounded-full transition-all duration-300 group"
              aria-label="Download on the App Store"
              title="Get our iOS App"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-indigo-600 hover:text-lavender-600 rounded-full hover:bg-lavender-50/50 transition-all duration-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileOpen ? "max-h-[80vh] opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-2 space-y-1">
            {links.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() =>
                      setDropdownOpen(dropdownOpen === link.label ? null : link.label)
                    }
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-indigo-600 rounded-xl hover:bg-lavender-50/50 transition-all duration-300"
                    aria-expanded={dropdownOpen === link.label}
                  >
                    {link.label}
                    <svg className={`w-3 h-3 transition-transform duration-300 ${dropdownOpen === link.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${dropdownOpen === link.label ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="bg-lavender-50/30 rounded-xl ml-4 py-1">
                      {link.children.map((child) => (
                        <Link key={child.href} href={child.href} className="block px-4 py-2 text-sm text-indigo-500 hover:text-lavender-600 transition-colors duration-200">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                    pathname === link.href ? "text-lavender-600 bg-lavender-50/50" : "text-indigo-600 hover:text-lavender-600 hover:bg-lavender-50/50"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="https://apps.apple.com/gb/app/guruji-cambridge/id6760822891"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-indigo-600 rounded-xl hover:bg-lavender-50/50 transition-all duration-300"
              aria-label="Download on the App Store"
            >
              <svg className="w-5 h-5" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              Get our iOS App
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
