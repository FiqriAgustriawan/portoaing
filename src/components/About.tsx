'use client';

import Link from 'next/link';
import { profileData } from '@/lib/data';

export default function About() {
  const formatTextWithBoldAndLinks = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-semibold text-neutral-900 dark:text-neutral-100">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith('[') && part.includes('](')) {
        const textMatch = part.match(/\[(.*?)\]/);
        const urlMatch = part.match(/\((.*?)\)/);
        if (textMatch && urlMatch) {
          const linkText = textMatch[1];
          const linkUrl = urlMatch[1];
          const isExternal = linkUrl.startsWith('http');
          
          if (isExternal) {
            return (
              <a
                key={i}
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                {linkText}
              </a>
            );
          }
          return (
            <Link
              key={i}
              href={linkUrl}
              className="underline hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              {linkText}
            </Link>
          );
        }
      }
      return part;
    });
  };

  return (
    <section className="content-section py-20 border-t border-neutral-100 dark:border-neutral-900" id="about">
      <div className="reveal">
        <p className="section-label font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-2">
          01 — About
        </p>
        <h2 className="section-title font-mono text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-8">
          Who I Am
        </h2>
        <div className="about-body font-sans text-neutral-600 dark:text-neutral-400 space-y-6 text-base sm:text-lg leading-relaxed max-w-3xl">
          {profileData.bioLong.map((para, idx) => (
            <p key={idx}>
              {formatTextWithBoldAndLinks(para)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
