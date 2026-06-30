'use client';

import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { profileData } from '@/lib/data';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-32 flex flex-col justify-between">
      <div>
        <ScrollReveal>
          <div className="mb-12">
            <p className="section-label font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-2">
              Portfolio
            </p>
            <h1 className="section-title font-mono text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4">
              Things I've Built
            </h1>
            <p className="font-sans text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
              A collection of backend services, APIs, devops setups, and fullstack experiments that demonstrate my engineering capabilities.
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {profileData.projects.map((project, idx) => (
              <div
                key={idx}
                className="project-card bg-neutral-50 dark:bg-neutral-950 p-8 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 text-lg">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                          aria-label={`GitHub link for ${project.title}`}
                        >
                          <GithubIcon size={16} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                          aria-label={`Live demo link for ${project.title}`}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="font-sans text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 font-mono text-[10px]">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-neutral-200/50 dark:bg-neutral-900/50 text-neutral-500 dark:text-neutral-500 px-2 py-1 rounded border border-neutral-200/30 dark:border-neutral-800/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <Footer />
    </main>
  );
}
