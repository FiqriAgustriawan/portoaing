'use client';

export default function Skills() {
  return (
    <section className="py-24" id="skills">
      <p
        className="text-[11px] uppercase tracking-[0.2em] mb-2"
        style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}
      >
        02 — Expertise
      </p>
      <h2
        className="text-2xl font-bold tracking-tight mb-10"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        What I Do
      </h2>

      {/* 2-Column Skills Grid — matching andi.ltd */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Card 1: Backend & Database */}
        <div
          className="p-7 rounded-xl"
          style={{
            backgroundColor: 'var(--card-bg)',
            border: '1px solid var(--border-color)',
          }}
        >
          <p
            className="text-[11px] uppercase tracking-[0.15em] mb-1"
            style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}
          >
            Backend & Database
          </p>
          <p
            className="text-[17px] font-medium mb-5"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            API Engineering
          </p>
          <ul
            className="space-y-2.5 text-[14px]"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}
          >
            {[
              'RESTful API Design',
              'Database Optimization',
              'Server-Side Architecture',
              'Authentication & Security',
              'Microservices & Queue Systems',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span
                  className="mt-[7px] w-[4px] h-[4px] rounded-full shrink-0"
                  style={{ backgroundColor: 'var(--accent)' }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Card 2: Frontend & DevOps */}
        <div
          className="p-7 rounded-xl"
          style={{
            backgroundColor: 'var(--card-bg)',
            border: '1px solid var(--border-color)',
          }}
        >
          <p
            className="text-[11px] uppercase tracking-[0.15em] mb-1"
            style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}
          >
            Frontend & DevOps
          </p>
          <p
            className="text-[17px] font-medium mb-5"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Modern Stack
          </p>
          <ul
            className="space-y-2.5 text-[14px]"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}
          >
            {[
              'React & Next.js Applications',
              'TypeScript Development',
              'Responsive UI Engineering',
              'Docker & Containerization',
              'CI/CD & Deployment',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span
                  className="mt-[7px] w-[4px] h-[4px] rounded-full shrink-0"
                  style={{ backgroundColor: 'var(--accent)' }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tech Badges Row — matching andi.ltd stack-badge style */}
      <div
        className="flex flex-wrap gap-2"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        {[
          { name: 'Laravel', url: 'https://github.com/FiqriAgustriawan?tab=repositories&q=&type=&language=php&sort=' },
          { name: 'Golang', url: 'https://github.com/FiqriAgustriawan?tab=repositories&q=&type=&language=go&sort=' },
          { name: 'Node.js' },
          { name: 'React', url: 'https://github.com/FiqriAgustriawan?tab=repositories&q=&type=&language=typescript&sort=' },
          { name: 'Next.js', url: 'https://github.com/FiqriAgustriawan?tab=repositories&q=&type=&language=typescript&sort=' },
          { name: 'TypeScript', url: 'https://github.com/FiqriAgustriawan?tab=repositories&q=&type=&language=typescript&sort=' },
          { name: 'MySQL' },
          { name: 'PostgreSQL' },
          { name: 'Docker' },
          { name: 'Supabase' },
          { name: 'Firebase' },
          { name: 'Git' },
          { name: 'Linux' },
          { name: 'Tailwind CSS' },
          { name: 'Vite' },
        ].map((tech) => {
          const commonClass =
            'inline-block px-3 py-1.5 rounded text-[12px] transition-colors duration-200';
          const commonStyle = {
            border: '1px solid var(--badge-border)',
            backgroundColor: 'var(--badge-bg)',
            color: 'var(--text-muted)',
          };

          if (tech.url) {
            return (
              <a
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${commonClass} hover:opacity-70`}
                style={commonStyle}
              >
                {tech.name}
              </a>
            );
          }
          return (
            <span
              key={tech.name}
              className={commonClass}
              style={commonStyle}
            >
              {tech.name}
            </span>
          );
        })}
      </div>
    </section>
  );
}
