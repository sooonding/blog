'use client';

import { useEffect, useRef } from 'react';

export default function AnimateIn({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const animateElements = entry.target.querySelectorAll('[data-animate]');
            animateElements.forEach(el => {
              requestAnimationFrame(() => {
                el.classList.add('animate-in');
              });
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}
