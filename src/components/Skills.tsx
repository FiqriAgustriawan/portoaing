'use client';

import { profileData } from '@/lib/data';

export default function Skills() {
  const backendSkills = profileData.skills.filter(s => s.category === 'backend');
  const frontendSkills = profileData.skills.filter(s => s.category === 'frontend');
  const toolsSkills = profileData.skills.filter(s => s.category === 'tools');

  return (
    <section className="content-section py-20 border-t border-neutral-100 dark:border-neutral-900" id="skills">
      <div className="reveal">
        <p className="section-label font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-2">
          02 — Expertise
        </p>
        <h2 className="section-title font-mono text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-10">
          What I Do
        </h2>
      </div>

      <div className="skills-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Card 1: Backend */}
        <div className="skill-card bg-neutral-50 dark:bg-neutral-950 p-8 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300">
          <p className="skill-card-label font-mono text-xs uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
            Backend Engineering
          </p>
          <p className="skill-card-title font-semibold text-neutral-900 dark:text-neutral-100 text-lg mb-6">
            APIs & Architecture
          </p>
          <ul className="skill-list font-sans text-sm text-neutral-600 dark:text-neutral-400 space-y-3 list-none p-0 m-0">
            {backendSkills.map((skill, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600"></span>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Card 2: Frontend */}
        <div className="skill-card bg-neutral-50 dark:bg-neutral-950 p-8 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300">
          <p className="skill-card-label font-mono text-xs uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
            Frontend Development
          </p>
          <p className="skill-card-title font-semibold text-neutral-900 dark:text-neutral-100 text-lg mb-6">
            Interfaces & Interactivity
          </p>
          <ul className="skill-list font-sans text-sm text-neutral-600 dark:text-neutral-400 space-y-3 list-none p-0 m-0">
            {frontendSkills.map((skill, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600"></span>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Card 3: DevOps & Tools */}
        <div className="skill-card bg-neutral-50 dark:bg-neutral-950 p-8 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300">
          <p className="skill-card-label font-mono text-xs uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
            DevOps & Platform
          </p>
          <p className="skill-card-title font-semibold text-neutral-900 dark:text-neutral-100 text-lg mb-6">
            Infrastructure & Tools
          </p>
          <ul className="skill-list font-sans text-sm text-neutral-600 dark:text-neutral-400 space-y-3 list-none p-0 m-0">
            {toolsSkills.map((skill, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600"></span>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tech badges row */}
      <div className="stack-row flex flex-wrap gap-2.5 font-mono text-xs mt-8">
        {profileData.skills.map((skill, i) => {
          if (skill.url) {
            return (
              <a
                key={i}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="stack-badge bg-neutral-100/50 dark:bg-neutral-900/50 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50 px-3 py-1.5 rounded border border-neutral-200/40 dark:border-neutral-800/40 transition-colors"
              >
                {skill.name}
              </a>
            );
          }
          return (
            <span
              key={i}
              className="stack-badge bg-neutral-100/50 dark:bg-neutral-900/50 text-neutral-600 dark:text-neutral-400 px-3 py-1.5 rounded border border-neutral-200/40 dark:border-neutral-800/40"
            >
              {skill.name}
            </span>
          );
        })}
      </div>
    </section>
  );
}
