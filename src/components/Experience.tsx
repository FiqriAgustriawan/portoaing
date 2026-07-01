'use client';

export default function Experience() {
  const experiences = [
    {
      role: 'Software Engineer Intern',
      company: 'Ashari Tech',
      companyUrl: 'https://ashari.tech',
      period: '2024 — Present',
      description:
        'Developing modern web applications with Next.js, React, and TypeScript. Building scalable user interfaces and integrating backend APIs for production systems.',
    },
    {
      role: 'BNSP Certified Web Developer',
      company: 'BNSP Indonesia',
      period: '2024',
      description:
        'Completed professional web development certification, validating expertise in standards-based web application development and industry best practices.',
    },
  ];

  return (
    <section className="py-24" id="experience">
      <p
        className="text-[11px] uppercase tracking-[0.2em] mb-2"
        style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}
      >
        03 — Experience
      </p>
      <h2
        className="text-2xl font-bold tracking-tight mb-10"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        Where I&apos;ve Been
      </h2>

      <div className="space-y-10">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1 md:gap-8 pb-10"
            style={{
              borderBottom:
                i < experiences.length - 1
                  ? '1px solid var(--border-color)'
                  : 'none',
            }}
          >
            <div className="md:max-w-[480px]">
              <h3 className="text-[17px] font-semibold mb-1">{exp.role}</h3>
              <p
                className="text-[12px] mb-4"
                style={{
                  color: 'var(--text-faint)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {exp.company}
                  </a>
                ) : (
                  exp.company
                )}
              </p>
              <p
                className="text-[14px] leading-relaxed"
                style={{
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {exp.description}
              </p>
            </div>
            <span
              className="text-[12px] shrink-0 mt-1 md:mt-0"
              style={{
                color: 'var(--text-faint)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {exp.period}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
