'use client';

import { profileData } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-neutral-100 dark:border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-neutral-400 dark:text-neutral-500">
      <span className="footer-copy">
        © {currentYear} {profileData.name}. All rights reserved.
      </span>
      {profileData.footerQuote && (
        <span className="footer-quote italic text-center sm:text-right">
          {profileData.footerQuote}
        </span>
      )}
    </footer>
  );
}
