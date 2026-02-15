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
    <section className="py-16 bg-lavender-50 lotus-bg">
      <div className="max-w-xl mx-auto px-4 text-center reveal-on-scroll">
        <div className="text-lavender-400/60 text-lg mb-2">&#10022;</div>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-indigo-700 mb-3">
          {heading}
        </h2>
        <div className="sacred-divider" />
        <p className="text-indigo-400 mb-8 mt-4 font-light">{description}</p>
        {submitted ? (
          <div className="bg-sage-50 border border-sage-200 rounded-2xl p-6 animate-scale-in">
            <p className="text-sage-600 font-semibold">
              Thank you for subscribing!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3">
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
              className="flex-1 px-5 py-3.5 bg-white border border-lavender-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-lavender-400 focus:border-transparent transition-all duration-300 text-indigo-700 placeholder:text-indigo-300"
            />
            <button
              type="submit"
              className="bg-lavender-500 text-white px-7 py-3.5 font-semibold text-sm tracking-wide hover:bg-lavender-600 rounded-xl btn-shimmer transition-colors duration-300"
            >
              {buttonText}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
