'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (pathname !== '/') return;

      const sections = ['home', 'about', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
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

  const navLinkClass = (section: string) => {
    const isActive = pathname === '/' && activeSection === section;
    return `transition-colors duration-200 ${
      isActive
        ? 'text-[var(--text-primary)] underline underline-offset-4 decoration-1'
        : 'text-[var(--text-faint)] hover:text-[var(--text-primary)]'
    }`;
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md py-3'
          : 'py-5'
      }`}
      style={{
        backgroundColor: scrolled
          ? 'color-mix(in srgb, var(--bg-primary) 80%, transparent)'
          : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
      }}
    >
      <div className="max-w-[680px] mx-auto px-6 flex items-center justify-between">
        <Link
          href="/#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-sm tracking-tight font-medium hover:opacity-70 transition-opacity"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          fiqri.dev
        </Link>
        <div
          className="flex items-center gap-6 text-[13px]"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          <Link
            href="/#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className={navLinkClass('about')}
            data-section="about"
          >
            about
          </Link>
          <Link
            href="/#skills"
            onClick={(e) => handleNavClick(e, 'skills')}
            className={navLinkClass('skills')}
            data-section="skills"
          >
            skills
          </Link>
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className={navLinkClass('contact')}
            data-section="contact"
          >
            contact
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
