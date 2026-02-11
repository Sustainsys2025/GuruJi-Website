"use client";

import { useState } from "react";

interface SubscribeSectionProps {
  heading: string;
  description: string;
  placeholder: string;
  buttonText: string;
}

export default function SubscribeSection({
  heading,
  description,
  placeholder,
  buttonText,
}: SubscribeSectionProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  }

  return (
    <section className="py-16 bg-cream-200 lotus-bg">
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="text-gold-400/60 text-2xl mb-2">&#x2733;</div>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-maroon-800 mb-3">
          {heading}
        </h2>
        <div className="sacred-divider" />
        <p className="text-maroon-700/70 mb-8 mt-4">{description}</p>
        {submitted ? (
          <p className="text-maroon-500 font-semibold">
            Thank you for subscribing!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <label htmlFor="subscribe-email" className="sr-only">
              {placeholder}
            </label>
            <input
              id="subscribe-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              required
              className="flex-1 px-4 py-3 bg-white border border-gold-200 rounded-sm text-base focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
            <button
              type="submit"
              className="bg-maroon-500 text-white px-6 py-3 font-bold uppercase text-sm tracking-[0.125em] hover:bg-maroon-600 rounded-sm"
            >
              {buttonText}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
