import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Cambridge GuruJi Parivaar website and mobile app.",
};

export default function PrivacyPage() {
  const lastUpdated = "19 March 2026";

  return (
    <>
      <HeroSection
        title="Privacy Policy"
        subtitle="Your privacy matters to us"
        backgroundImage="/images/guruji-pics/charan.jpg"
      />

      <section className="py-14 md:py-20 lotus-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal-left">
            <p className="text-sm text-indigo-400 mb-10">
              Last updated: {lastUpdated}
            </p>

            {/* Introduction */}
            <div className="mb-10">
              <h2 className="font-heading font-bold text-xl md:text-2xl text-indigo-700 mb-4">
                Introduction
              </h2>
              <p className="text-indigo-400 leading-relaxed">
                Cambridge GuruJi Parivaar (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates
                the website <a href="https://gurujicambridge.com" className="text-lavender-500 hover:text-lavender-700 transition-colors duration-300">gurujicambridge.com</a> and
                the GuruJi Cambridge mobile application. This Privacy Policy explains how we handle
                information when you use our website and app. We are committed to protecting your
                privacy and being transparent about our practices.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-10">
              <h2 className="font-heading font-bold text-xl md:text-2xl text-indigo-700 mb-4">
                Information We Collect
              </h2>
              <p className="text-indigo-400 leading-relaxed mb-4">
                Our website and mobile app are designed as informational platforms. We do not require
                you to create an account, log in, or provide any personal information to use our services.
              </p>

              <h3 className="font-heading font-bold text-sm uppercase tracking-[0.15em] text-indigo-600 mb-3">
                Contact Form
              </h3>
              <p className="text-indigo-400 leading-relaxed mb-4">
                If you choose to use the contact form on our website, you may voluntarily provide your
                name, email address, and a message. This information is used solely to respond to your
                enquiry and is not stored in any database or shared with third parties.
              </p>

              <h3 className="font-heading font-bold text-sm uppercase tracking-[0.15em] text-indigo-600 mb-3">
                Newsletter Subscription
              </h3>
              <p className="text-indigo-400 leading-relaxed mb-4">
                If you choose to subscribe to our updates, you may provide your email address. This is
                used only to send you community announcements and satsang updates. You can unsubscribe
                at any time by contacting us.
              </p>

              <h3 className="font-heading font-bold text-sm uppercase tracking-[0.15em] text-indigo-600 mb-3">
                Mobile App
              </h3>
              <p className="text-indigo-400 leading-relaxed">
                The GuruJi Cambridge mobile app does not collect, store, or transmit any personal data.
                There are no user accounts, no login functionality, no in-app purchases, and no tracking
                or analytics. The app displays publicly available information from our website, including
                satsang schedules, photo galleries, and community information.
              </p>
            </div>

            {/* Cookies & Analytics */}
            <div className="mb-10">
              <h2 className="font-heading font-bold text-xl md:text-2xl text-indigo-700 mb-4">
                Cookies &amp; Analytics
              </h2>
              <p className="text-indigo-400 leading-relaxed">
                Our website may use essential cookies required for basic functionality. We do not use
                advertising cookies, tracking pixels, or third-party analytics services that track
                individual users. Our mobile app does not use any cookies or analytics tools.
              </p>
            </div>

            {/* Third-Party Services */}
            <div className="mb-10">
              <h2 className="font-heading font-bold text-xl md:text-2xl text-indigo-700 mb-4">
                Third-Party Services
              </h2>
              <p className="text-indigo-400 leading-relaxed mb-4">
                Our website embeds a Google Maps iframe to show venue directions. Google&apos;s own privacy
                policy applies to that embedded content. We also link to WhatsApp for community
                communication, which is governed by WhatsApp&apos;s privacy policy.
              </p>
              <p className="text-indigo-400 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to any third
                parties.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-10">
              <h2 className="font-heading font-bold text-xl md:text-2xl text-indigo-700 mb-4">
                Data Security
              </h2>
              <p className="text-indigo-400 leading-relaxed">
                Our website is served over HTTPS to ensure secure communication. Since we do not collect
                or store personal data beyond voluntary contact form submissions, the risk to your
                personal information is minimal.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-10">
              <h2 className="font-heading font-bold text-xl md:text-2xl text-indigo-700 mb-4">
                Children&apos;s Privacy
              </h2>
              <p className="text-indigo-400 leading-relaxed">
                Our website and app are suitable for all ages and are rated 4+ on the App Store. We do
                not knowingly collect any personal information from children or any other users.
              </p>
            </div>

            {/* Your Rights (UK GDPR) */}
            <div className="mb-10">
              <h2 className="font-heading font-bold text-xl md:text-2xl text-indigo-700 mb-4">
                Your Rights Under UK GDPR
              </h2>
              <p className="text-indigo-400 leading-relaxed mb-4">
                Under the UK General Data Protection Regulation, you have the right to access, correct,
                or request deletion of any personal information you have provided to us (such as through
                the contact form). Since we collect minimal data, exercising these rights is
                straightforward &mdash; simply contact us and we will address your request promptly.
              </p>
              <p className="text-indigo-400 leading-relaxed">
                You also have the right to lodge a complaint with the Information Commissioner&apos;s
                Office (ICO) at{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lavender-500 hover:text-lavender-700 transition-colors duration-300"
                >
                  ico.org.uk
                </a>{" "}
                if you believe your data protection rights have not been respected.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div className="mb-10">
              <h2 className="font-heading font-bold text-xl md:text-2xl text-indigo-700 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-indigo-400 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this
                page with an updated date. We encourage you to review this page periodically.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-4">
              <h2 className="font-heading font-bold text-xl md:text-2xl text-indigo-700 mb-4">
                Contact Us
              </h2>
              <p className="text-indigo-400 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <p className="text-indigo-400 text-sm mb-1">
                Email:{" "}
                <a
                  href="mailto:gurujicambridge@gmail.com"
                  className="text-lavender-500 hover:text-lavender-700 transition-colors duration-300"
                >
                  gurujicambridge@gmail.com
                </a>
              </p>
              <p className="text-indigo-400 text-sm mb-1">
                Website:{" "}
                <a
                  href="https://gurujicambridge.com/contact"
                  className="text-lavender-500 hover:text-lavender-700 transition-colors duration-300"
                >
                  gurujicambridge.com/contact
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
