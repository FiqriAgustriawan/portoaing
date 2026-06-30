'use client';

import Image from 'next/image';
import { Mail, ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[85vh] flex items-center pt-28 pb-20" id="home">
      <div className="w-full">
        {/* Hero inner: photo + text side-by-side like andi.ltd */}
        <div className="flex items-start gap-8 mb-10">
          {/* Profile Photo */}
          <div className="shrink-0 relative w-[96px] h-[96px] rounded-md overflow-hidden">
            <Image
              src="/profile_Fiqri.jpeg"
              alt="Muhammad Fiqri Agustriawan"
              fill
              sizes="96px"
              priority
              className="object-cover"
              style={{ color: 'transparent' }}
            />
          </div>

          {/* Hero Text */}
          <div style={{ fontFamily: 'var(--font-mono)' }}>
            <p
              className="text-[11px] uppercase tracking-[0.2em] mb-3"
              style={{ color: 'var(--text-faint)' }}
            >
              Fullstack Software Engineer
            </p>
            <h1 className="text-[2.8rem] leading-[1.1] font-bold tracking-tight mb-0">
              Muhammad Fiqri
              <br />
              Agustriawan
              <span className="cursor-blink inline-block w-[3px] h-[0.85em] ml-1 align-baseline" style={{ backgroundColor: 'var(--text-primary)' }} />
            </h1>
          </div>
        </div>

        {/* Bio */}
        <p
          className="text-[17px] leading-[1.75] mb-6 max-w-full"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}
        >
          Building <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>resilient APIs, optimized databases</strong>, and
          scalable server solutions. Intern at{' '}
          <a
            href="https://ashari.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-70 transition-opacity"
            style={{ color: 'var(--text-primary)' }}
          >
            Ashari Tech
          </a>
          . Based in Bandung, Indonesia — open to opportunities worldwide.
        </p>

        {/* Location meta */}
        <p
          className="text-[13px] mb-8"
          style={{ color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}
        >
          Bandung, Indonesia &nbsp;·&nbsp; Open to Opportunities
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 mb-12" style={{ fontFamily: 'var(--font-mono)' }}>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, 'about')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-medium transition-opacity hover:opacity-85"
            style={{
              backgroundColor: 'var(--text-primary)',
              color: 'var(--bg-primary)',
            }}
          >
            <ArrowDown size={11} strokeWidth={2.5} />
            Learn More
          </a>
          <a
            href="mailto:muhfiqri033@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-medium transition-colors hover:opacity-80"
            style={{
              border: '1px solid var(--border-color)',
              color: 'var(--text-muted)',
            }}
          >
            Get in Touch
          </a>
        </div>

        {/* Social Chips Row */}
        <div
          className="flex flex-wrap gap-2.5"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {[
            { href: 'https://linkedin.com/in/fiqri-agustriawan', icon: <LinkedinIcon size={11} />, label: 'LinkedIn' },
            { href: 'https://github.com/FiqriAgustriawan', icon: <GithubIcon size={11} />, label: 'GitHub' },
            { href: 'https://twitter.com/fiqriagustriawan', icon: <TwitterIcon size={11} />, label: 'Twitter' },
            { href: 'mailto:muhfiqri033@gmail.com', icon: <Mail size={11} />, label: 'Email' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('mailto') ? undefined : '_blank'}
              rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-[12px] transition-all duration-200 hover:opacity-75"
              style={{
                border: '1px solid var(--border-color)',
                color: 'var(--text-muted)',
              }}
            >
              {social.icon}
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
