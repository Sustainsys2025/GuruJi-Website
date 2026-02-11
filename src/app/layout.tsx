import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import siteData from "@/data/site.json";

export const metadata: Metadata = {
  title: {
    default: siteData.name,
    template: `%s | ${siteData.name}`,
  },
  description: siteData.description,
  metadataBase: new URL("https://gurujicambridge.com"),
  openGraph: {
    title: siteData.name,
    description: siteData.description,
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Italiana&family=Roboto+Condensed:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <AnnouncementBanner
          text={siteData.announcement.text}
          href={siteData.announcement.href}
        />
        <Navbar links={siteData.navLinks} siteName={siteData.name} />
        <main className="flex-1">{children}</main>
        <Footer
          siteName={siteData.name}
          socialLinks={siteData.socialLinks}
        />
      </body>
    </html>
  );
}
