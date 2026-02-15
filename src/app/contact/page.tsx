import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import contactData from "@/data/contact.json";

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

              <a
                href="#contact-form"
                className="inline-block bg-lavender-500 text-white px-8 py-3 font-semibold text-sm tracking-wide hover:bg-lavender-600 rounded-xl btn-shimmer transition-colors duration-300"
              >
                Drop Us a Line
              </a>
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
