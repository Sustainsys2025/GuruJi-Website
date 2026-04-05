import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import contactData from "@/data/contact.json";
import siteData from "@/data/site.json";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with us. Find our contact details, send us a message, or visit us at our venue.",
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title={contactData.hero.title}
        subtitle={contactData.hero.subtitle}
        backgroundImage="/images/guruji-pics/charan.jpg"
      />

      {/* Contact Info + Map */}
      <section className="py-14 md:py-20 lotus-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left: Contact Information */}
            <div className="flex-1 reveal-left">
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-indigo-700 mb-6">
                Contact Us
              </h2>

              <h3 className="font-heading font-bold text-sm uppercase tracking-[0.15em] text-indigo-600 mb-4">
                {contactData.darshan.heading}
              </h3>
              <p className="text-indigo-400 leading-relaxed mb-8">
                {contactData.darshan.description}
              </p>

              <h3 className="font-heading font-bold text-sm uppercase tracking-[0.15em] text-indigo-600 mb-3">
                {contactData.info.businessName}
              </h3>
              <p className="text-indigo-400 text-sm mb-4">
                {contactData.info.address}
              </p>

              <p className="text-indigo-400 text-sm mb-1">
                email : <a href={`mailto:${contactData.info.email}`} className="text-lavender-500 hover:text-lavender-700 transition-colors duration-300">{contactData.info.email}</a>
              </p>
              <p className="text-indigo-400 text-sm mb-6">
                or Whatsapp {contactData.info.whatsapp}
              </p>

              <h3 className="font-heading font-bold text-sm uppercase tracking-[0.15em] text-indigo-600 mb-3">
                TIMINGS
              </h3>
              <p className="text-indigo-400 text-sm mb-8">
                {contactData.info.timings}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center bg-lavender-500 text-white px-8 py-3 font-semibold text-sm tracking-wide hover:bg-lavender-600 rounded-xl btn-shimmer transition-colors duration-300 h-12"
                >
                  Drop Us a Line
                </a>
                <a
                  href="https://apps.apple.com/gb/app/guruji-cambridge/id6760822891"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-indigo-700 text-white px-6 py-3 rounded-xl hover:bg-indigo-800 transition-colors duration-300 group h-12"
                  aria-label="Download on the App Store"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                  </svg>
                  <span className="font-semibold text-sm tracking-wide">Get our iOS App</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-6">
                <span className="text-indigo-400 text-sm">Follow us:</span>
                {siteData.socialLinks.facebook && (
                  <a
                    href={siteData.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Facebook"
                    className="text-[#1877F2] hover:opacity-80 transition-opacity duration-300 group"
                  >
                    <svg className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                )}
                {siteData.socialLinks.instagram && (
                  <a
                    href={siteData.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                    className="text-[#E1306C] hover:opacity-80 transition-opacity duration-300 group"
                  >
                    <svg className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Right: Google Map */}
            <div className="flex-1 w-full reveal-right">
              <div className="w-full aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg border border-lavender-100/30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4887.0!2d-0.0857!3d52.2284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d87c32e2e9a5c5%3A0x2b4db24f2d61a16e!2sCaxton%20Village%20Hall!5e0!3m2!1sen!2suk!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Caxton Village Hall - Map"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-14 md:py-20 bg-cream-200/50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            title={contactData.form.title}
            fields={contactData.form.fields}
            submitText={contactData.form.submitText}
          />
        </div>
      </section>
    </>
  );
}
