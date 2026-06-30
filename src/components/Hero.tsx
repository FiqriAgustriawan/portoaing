'use client';

import Image from 'next/image';
import { Mail, ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { profileData } from '@/lib/data';

export default function Hero() {
  const formatTextWithBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold text-neutral-900 dark:text-neutral-100">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section min-h-[90vh] flex items-center pt-24 pb-16" id="home">
      <div className="w-full">
        {/* Profile Image */}
        <div className="mb-8 relative w-24 h-24 rounded-full overflow-hidden border border-neutral-200 dark:border-neutral-800">
          <Image
            src={profileData.photoUrl}
            alt={profileData.name}
            fill
            sizes="96px"
            priority
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            onError={(e) => {
              // Fallback to placeholder if profile_Fiqri.jpeg fails
              const target = e.target as HTMLImageElement;
              target.src = 'https://fiqrigustriawan.vercel.app/profile_Fiqri.jpeg';
            }}
          />
        </div>

        {/* Hero text */}
        <div className="hero-text font-mono">
          <p className="hero-label text-xs uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-2">
            {profileData.title.split(' | ')[0]}
          </p>
          <h1 className="hero-name text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-6">
            {profileData.name}
            <span className="cursor-blink inline-block w-[8px] h-[1em] bg-neutral-900 dark:bg-neutral-100 ml-1 align-middle animate-pulse"></span>
          </h1>

          <p className="hero-bio font-sans text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed mb-8">
            {formatTextWithBold(profileData.bioShort)}
          </p>

          <p className="hero-meta text-xs text-neutral-400 dark:text-neutral-500 mb-8 flex items-center gap-2">
            <span>{profileData.location}</span>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 absolute"></span>
              {profileData.availability}
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions flex flex-wrap gap-4 mb-12">
            <a
              href="#about"
              onClick={handleScrollToAbout}
              className="btn-primary inline-flex items-center gap-2 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 px-5 py-2.5 rounded-lg text-sm hover:opacity-90 transition-opacity font-mono font-medium"
            >
              <ArrowDown size={11} strokeWidth={2.5} />
              Learn More
            </a>
            <a
              href={profileData.socials.email}
              className="btn-ghost inline-flex items-center gap-2 border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 px-5 py-2.5 rounded-lg text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors font-mono font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Social Row */}
        <div className="social-row flex flex-wrap gap-3 font-mono text-xs">
          <a
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-chip inline-flex items-center gap-2 bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50 px-3 py-1.5 rounded-md border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 transition-all"
          >
            <LinkedinIcon size={11} />
            LinkedIn
          </a>
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-chip inline-flex items-center gap-2 bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50 px-3 py-1.5 rounded-md border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 transition-all"
          >
            <GithubIcon size={11} />
            GitHub
          </a>
          <a
            href={profileData.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="social-chip inline-flex items-center gap-2 bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50 px-3 py-1.5 rounded-md border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 transition-all"
          >
            <TwitterIcon size={11} />
            Twitter
          </a>
          <a
            href={profileData.socials.email}
            className="social-chip inline-flex items-center gap-2 bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50 px-3 py-1.5 rounded-md border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 transition-all"
          >
            <Mail size={11} />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
