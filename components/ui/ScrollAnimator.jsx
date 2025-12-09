'use client';

import { useEffect } from 'react';

const ScrollAnimator = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const prefersReduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const targets = Array.from(document.querySelectorAll('[data-animate]'));
    if (!targets.length) return undefined;

    if (prefersReduced) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.18 }
    );

    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default ScrollAnimator;
