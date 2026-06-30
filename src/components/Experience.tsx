'use client';

import { profileData } from '@/lib/data';

export default function Experience() {
  return (
    <section className="content-section py-20 border-t border-neutral-100 dark:border-neutral-900" id="experience">
      <div className="reveal">
        <p className="section-label font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-2">
          03 — Experience
        </p>
        <h2 className="section-title font-mono text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-10">
          Where I've Been
        </h2>
      </div>

      <div className="space-y-12">
        {profileData.experiences.map((exp, i) => (
          <div
            key={i}
            className="experience-item flex flex-col md:flex-row md:items-baseline justify-between border-b border-neutral-100 dark:border-neutral-900 pb-8 last:border-0 last:pb-0"
          >
            <div className="md:max-w-xl">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 text-lg">
                {exp.role}
              </h3>
              <p className="font-mono text-xs text-neutral-500 dark:text-neutral-500 mt-1 mb-4">
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
                  >
                    {exp.company}
                  </a>
                ) : (
                  exp.company
                )}
              </p>
              <p className="font-sans text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {exp.description}
              </p>
            </div>
            <div className="font-mono text-xs text-neutral-400 dark:text-neutral-500 mt-2 md:mt-0">
              {exp.period}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
