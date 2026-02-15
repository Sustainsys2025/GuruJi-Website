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
      <div className="bg-lavender-50 border border-lavender-200 rounded-2xl p-8 text-center sacred-glow animate-scale-in">
        <div className="text-lavender-400/60 text-xl mb-2">&#10022;</div>
        <h3 className="font-heading font-bold text-xl text-lavender-600 mb-2">
          Thank You!
        </h3>
        <p className="text-indigo-500">
          Your message has been sent. We will get back to you soon.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-lavender-500 hover:text-lavender-700 text-sm font-medium transition-colors duration-300"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="reveal-on-scroll">
      <h3 className="font-heading font-bold text-xl md:text-2xl text-indigo-700 mb-6">
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
            className="peer w-full px-5 pt-6 pb-2 border border-lavender-200 rounded-xl text-base bg-white focus:outline-none focus:ring-2 focus:ring-lavender-400 focus:border-transparent transition-all duration-300 text-indigo-700"
          />
          <label
            htmlFor="contact-name"
            className="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-300 text-base transition-all peer-focus:top-3 peer-focus:text-xs peer-focus:text-lavender-500 peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-xs"
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
            className="peer w-full px-5 pt-6 pb-2 border border-lavender-200 rounded-xl text-base bg-white focus:outline-none focus:ring-2 focus:ring-lavender-400 focus:border-transparent transition-all duration-300 text-indigo-700"
          />
          <label
            htmlFor="contact-email"
            className="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-300 text-base transition-all peer-focus:top-3 peer-focus:text-xs peer-focus:text-lavender-500 peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-xs"
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
            className="peer w-full px-5 pt-6 pb-2 border border-lavender-200 rounded-xl text-base bg-white focus:outline-none focus:ring-2 focus:ring-lavender-400 focus:border-transparent transition-all duration-300 resize-y text-indigo-700"
          />
          <label
            htmlFor="contact-message"
            className="absolute left-5 top-4 text-indigo-300 text-base transition-all peer-focus:top-1 peer-focus:text-xs peer-focus:text-lavender-500 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs"
          >
            {fields.message}
          </label>
        </div>
        <button
          type="submit"
          className="bg-lavender-500 text-white px-8 py-3.5 font-semibold text-sm tracking-wide hover:bg-lavender-600 rounded-xl btn-shimmer min-h-[52px] transition-colors duration-300"
        >
          {submitText}
        </button>
      </form>
    </div>
  );
}
