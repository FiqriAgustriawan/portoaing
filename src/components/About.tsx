'use client';

export default function About() {
  return (
    <section className="py-24" id="about">
      <p
        className="text-[11px] uppercase tracking-[0.2em] mb-2"
        style={{ color: 'var(--text-faint)', fontFamily: 'var(--font-mono)' }}
      >
        01 — About
      </p>
      <h2
        className="text-2xl font-bold tracking-tight mb-8"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        Who I Am
      </h2>
      <div
        className="space-y-6 text-[16px] leading-[1.8]"
        style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}
      >
        <p>
          I&apos;m a{' '}
          <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
            fullstack software engineer
          </strong>{' '}
          specializing in backend architecture, database optimization, and scalable
          API development. Currently interning at{' '}
          <a
            href="https://ashari.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-70 transition-opacity"
            style={{ color: 'var(--text-primary)' }}
          >
            Ashari Tech
          </a>
          , I build modern web applications using Next.js and contemporary
          software stacks.
        </p>
        <p>
          With hands-on experience across the full technology stack — from
          designing RESTful APIs with{' '}
          <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
            Laravel and Golang
          </strong>{' '}
          to crafting responsive interfaces with{' '}
          <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
            React and Next.js
          </strong>{' '}
          — I focus on delivering clean, maintainable solutions that balance
          performance with developer experience.
        </p>
        <p>
          I&apos;m passionate about solving complex engineering challenges —
          whether optimizing database queries, containerizing services with
          Docker, or implementing CI/CD pipelines. A pragmatic approach that
          prioritizes{' '}
          <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
            reliability and operational excellence
          </strong>
          .
        </p>
      </div>
    </section>
  );
}
