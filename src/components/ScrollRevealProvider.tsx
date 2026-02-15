"use client";

import { useEffect } from "react";

export default function ScrollRevealProvider() {
  useEffect(() => {
    const revealClasses = [
      "reveal-on-scroll",
      "reveal-scale",
      "reveal-left",
      "reveal-right",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealClasses.forEach((cls) => {
      document.querySelectorAll(`.${cls}`).forEach((el) => {
        observer.observe(el);
      });
    });

    // Re-observe after route changes
    const mutationObserver = new MutationObserver(() => {
      revealClasses.forEach((cls) => {
        document.querySelectorAll(`.${cls}:not(.revealed)`).forEach((el) => {
          observer.observe(el);
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
