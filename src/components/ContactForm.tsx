"use client";

import { useState } from "react";

interface ContactFormProps {
  title: string;
  fields: {
    name: string;
    email: string;
    message: string;
  };
  submitText: string;
}

export default function ContactForm({
  title,
  fields,
  submitText,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  }

  if (submitted) {
    return (
      <div className="bg-saffron-50 border border-gold-200 rounded-lg p-8 text-center diya-glow">
        <h3 className="font-heading font-bold text-xl text-maroon-500 mb-2">
          Thank You!
        </h3>
        <p className="text-maroon-800/70">
          Your message has been sent. We will get back to you soon.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-maroon-500 underline hover:text-maroon-700 text-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div>
      <h3 className="font-heading font-bold text-xl md:text-2xl text-maroon-800 mb-6">
        {title}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="relative">
          <input
            type="text"
            id="contact-name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            placeholder=" "
            className="peer w-full px-4 pt-6 pb-2 border border-gold-200 rounded-sm text-base bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
          />
          <label
            htmlFor="contact-name"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-temple-400 text-base transition-all peer-focus:top-3 peer-focus:text-xs peer-focus:text-maroon-500 peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-xs"
          >
            {fields.name}
          </label>
        </div>
        <div className="relative">
          <input
            type="email"
            id="contact-email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            placeholder=" "
            className="peer w-full px-4 pt-6 pb-2 border border-gold-200 rounded-sm text-base bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
          />
          <label
            htmlFor="contact-email"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-temple-400 text-base transition-all peer-focus:top-3 peer-focus:text-xs peer-focus:text-maroon-500 peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-xs"
          >
            {fields.email}
          </label>
        </div>
        <div className="relative">
          <textarea
            id="contact-message"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            placeholder=" "
            className="peer w-full px-4 pt-6 pb-2 border border-gold-200 rounded-sm text-base bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent resize-y"
          />
          <label
            htmlFor="contact-message"
            className="absolute left-4 top-4 text-temple-400 text-base transition-all peer-focus:top-1 peer-focus:text-xs peer-focus:text-maroon-500 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs"
          >
            {fields.message}
          </label>
        </div>
        <button
          type="submit"
          className="bg-maroon-500 text-white px-8 py-3 font-bold uppercase text-sm tracking-[0.125em] hover:bg-maroon-600 rounded-sm min-h-[56px]"
        >
          {submitText}
        </button>
      </form>
    </div>
  );
}
