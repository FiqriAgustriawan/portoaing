'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { profileData } from '@/lib/data';

export default function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (pathname !== '/') return;

      const sections = ['home', 'about', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200/50 dark:border-neutral-800/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between">
        <Link
          href="/#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="font-mono text-sm tracking-tight font-medium hover:opacity-75 transition-opacity"
        >
          {profileData.shortName}
        </Link>
        <div className="flex items-center gap-6 font-mono text-xs">
          <nav className="flex items-center gap-5">
            <Link
              href="/#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className={`hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors ${
                pathname === '/' && activeSection === 'about'
                  ? 'text-neutral-900 dark:text-neutral-100'
                  : 'text-neutral-400 dark:text-neutral-500'
              }`}
            >
              about
            </Link>
            <Link
              href="/#skills"
              onClick={(e) => handleNavClick(e, 'skills')}
              className={`hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors ${
                pathname === '/' && activeSection === 'skills'
                  ? 'text-neutral-900 dark:text-neutral-100'
                  : 'text-neutral-400 dark:text-neutral-500'
              }`}
            >
              skills
            </Link>
            <Link
              href="/#experience"
              onClick={(e) => handleNavClick(e, 'experience')}
              className={`hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors ${
                pathname === '/' && activeSection === 'experience'
                  ? 'text-neutral-900 dark:text-neutral-100'
                  : 'text-neutral-400 dark:text-neutral-500'
              }`}
            >
              experience
            </Link>
            <Link
              href="/projects"
              className={`hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors ${
                pathname === '/projects'
                  ? 'text-neutral-900 dark:text-neutral-100'
                  : 'text-neutral-400 dark:text-neutral-500'
              }`}
            >
              projects
            </Link>
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className={`hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors ${
                pathname === '/' && activeSection === 'contact'
                  ? 'text-neutral-900 dark:text-neutral-100'
                  : 'text-neutral-400 dark:text-neutral-500'
              }`}
            >
              contact
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
