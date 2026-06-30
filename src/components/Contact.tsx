'use client';

import { Mail } from 'lucide-react';
import { LinkedinIcon } from './Icons';

export default function Contact() {
  return (
    <section className="py-24" id="contact">
      {/* CTA Box — matching andi.ltd contact card */}
      <div
        className="p-10 sm:p-12 rounded-xl"
        style={{
          backgroundColor: 'var(--card-bg)',
          border: '1px solid var(--border-color)',
        }}
      >
        <p
          className="text-[11px] uppercase tracking-[0.2em] mb-2"
          style={{ color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}
        >
          04 — Contact
        </p>
        <h2
          className="text-2xl font-bold tracking-tight mb-4"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Let&apos;s Work Together
        </h2>
        <p
          className="text-[15px] leading-[1.8] max-w-lg mb-8"
          style={{
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-sans)',
          }}
        >
          Interested in building scalable backend APIs, optimizing your database
          layer, or constructing modern fullstack applications? Let&apos;s
          discuss how we can work together.
        </p>

        <div
          className="flex flex-wrap gap-3"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          <a
            href="mailto:muhfiqri033@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-medium transition-opacity hover:opacity-85"
            style={{
              backgroundColor: 'var(--text-primary)',
              color: 'var(--bg-primary)',
            }}
          >
            <Mail size={11} strokeWidth={2.5} />
            Send Email
          </a>
          <a
            href="https://linkedin.com/in/fiqri-agustriawan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-medium transition-colors hover:opacity-80"
            style={{
              border: '1px solid var(--border-color)',
              color: 'var(--text-muted)',
            }}
          >
            <LinkedinIcon size={11} />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
