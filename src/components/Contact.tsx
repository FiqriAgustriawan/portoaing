'use client';

import { Mail } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { profileData } from '@/lib/data';

export default function Contact() {
  return (
    <section className="content-section py-20 border-t border-neutral-100 dark:border-neutral-900" id="contact">
      <div className="reveal">
        <div className="cta-box bg-neutral-50 dark:bg-neutral-950 p-10 sm:p-12 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50">
          <p className="section-label font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-2">
            04 — Contact
          </p>
          <h2 className="cta-title font-mono text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4">
            Let's Work Together
          </h2>
          <p className="cta-body font-sans text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed mb-8">
            Interested in building scalable backend APIs, containerizing your services, or constructing interactive frontend interfaces? Let's discuss how we can work together.
          </p>
          <div className="cta-actions flex flex-wrap gap-4 font-mono text-xs">
            <a
              href={profileData.socials.email}
              className="btn-primary inline-flex items-center gap-2 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              <Mail size={11} strokeWidth={2.5} />
              Send Email
            </a>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-2 border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 px-5 py-2.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors font-medium"
            >
              <LinkedinIcon size={11} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
