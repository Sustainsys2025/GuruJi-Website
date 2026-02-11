"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

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
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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
    <header className="bg-cream-50/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gold-200/50">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo / Site Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/guruji-pics/guru-darshan.jpg"
              alt={siteName}
              width={40}
              height={40}
              className="rounded-full border-2 border-gold-400 shadow-sm"
            />
            <span className="font-decorative text-maroon-500 text-lg hidden sm:block">
              {siteName}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {links.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() =>
                      setDropdownOpen(
                        dropdownOpen === link.label ? null : link.label
                      )
                    }
                    className={`px-3 py-2 text-sm font-bold uppercase tracking-[0.125em] flex items-center gap-1 ${
                      pathname.startsWith(link.href)
                        ? "text-maroon-500"
                        : "text-maroon-800 hover:text-maroon-500"
                    }`}
                    aria-expanded={dropdownOpen === link.label}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <svg
                      className={`w-3 h-3 transition-transform ${
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
                    <div className="absolute top-full left-0 mt-1 w-72 bg-cream-50 shadow-lg rounded-md py-2 z-50 border border-gold-200">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-maroon-800 hover:bg-saffron-50 hover:text-maroon-500 border-b border-gold-100/30 last:border-0"
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
                  className={`px-3 py-2 text-sm font-bold uppercase tracking-[0.125em] ${
                    pathname === link.href
                      ? "text-maroon-500"
                      : "text-maroon-800 hover:text-maroon-500"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-maroon-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gold-200/50 py-4 bg-cream-50">
            {links.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() =>
                      setDropdownOpen(dropdownOpen === link.label ? null : link.label)
                    }
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold uppercase tracking-[0.125em] text-maroon-800"
                    aria-expanded={dropdownOpen === link.label}
                  >
                    {link.label}
                    <svg className={`w-3 h-3 transition-transform ${dropdownOpen === link.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {dropdownOpen === link.label && (
                    <div className="bg-cream-100 py-1">
                      {link.children.map((child) => (
                        <Link key={child.href} href={child.href} className="block px-8 py-2 text-sm text-maroon-700 hover:text-maroon-500">
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
                  className={`block px-4 py-3 text-sm font-bold uppercase tracking-[0.125em] ${
                    pathname === link.href ? "text-maroon-500" : "text-maroon-800 hover:text-maroon-500"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
