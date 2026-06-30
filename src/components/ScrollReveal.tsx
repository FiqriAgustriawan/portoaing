'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
}

export default function ScrollReveal({ children, className = '', stagger = false }: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Once revealed, we don't need to observe it anymore
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before it fully enters viewport
      }
    );

    const container = containerRef.current;
    if (!container) return;

    const items = stagger
      ? container.querySelectorAll('.reveal-item')
      : [container];

    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, [stagger]);

  return (
    <div
      ref={containerRef}
      className={`${stagger ? '' : 'reveal-effect'} ${className}`}
    >
      {children}
    </div>
  );
}
