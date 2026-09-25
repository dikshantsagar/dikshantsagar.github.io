import React from 'react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import {
  Code,
  TrendingUp,
  FileText,
  ExternalLink,
  Workflow
} from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-14 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-xs font-mono mb-3">
          <Workflow className="w-3.5 h-3.5" />
          <span>Flagship Systems</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
          Featured Projects & Architectures
        </h2>
        <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
          Deep dives into complex AI systems built for scientific discovery, from cellular organelle phenotyping & de novo molecular discovery to 11B-parameter vision-language models and autonomous multi-agent facility controllers.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {FEATURED_PROJECTS.map((proj) => (
          <div
            key={proj.id}
            className="card-surface p-7 sm:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-cyan-950/20 group"
          >
            <div>
              {/* Top Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                  {proj.period}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md card-inner-box text-[11px] font-mono text-[var(--text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-200 transition-colors">
                {proj.title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
                {proj.subtitle}
              </p>

              {/* Problem -> Solution -> Outcome Breakdown */}
              <div className="space-y-3.5 mb-6">
                <div className="p-4 rounded-xl card-inner-box border-rose-500/25 text-xs">
                  <span className="font-mono text-[10px] uppercase text-rose-500 dark:text-rose-300 font-semibold block mb-1">
                    Problem Context
                  </span>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {proj.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl card-inner-box border-cyan-500/25 text-xs">
                  <span className="font-mono text-[10px] uppercase text-cyan-600 dark:text-cyan-300 font-semibold block mb-1">
                    Technical Solution
                  </span>
                  <p className="text-[var(--text-primary)] leading-relaxed">
                    {proj.solution}
                  </p>
                </div>

                <div className="p-4 rounded-xl card-inner-box border-emerald-500/25 text-xs">
                  <span className="font-mono text-[10px] uppercase text-emerald-600 dark:text-emerald-300 font-semibold block mb-1">
                    Quantified Outcome
                  </span>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {proj.outcome}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Metrics and Links */}
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                {proj.metrics.map((m, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-200 text-xs font-mono font-medium"
                  >
                    <TrendingUp className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                    {m}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-3.5 border-t border-[var(--border-subtle)]">
                {proj.paperUrl && (
                  <a
                    href={proj.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-300 hover:text-cyan-500 dark:hover:text-cyan-200 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Read Paper</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {proj.codeUrl && (
                  <a
                    href={proj.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>Code Repository</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
