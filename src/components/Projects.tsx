import React from 'react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-14 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Macro-Whitespace & Eyebrow Heading */}
      <div className="text-left mb-10 sm:mb-14">
        <div className="eyebrow-badge bg-blue-500/10 border border-blue-500/25 text-blue-600 dark:text-blue-400 mb-3 sm:mb-4">
          <span>04 / Flagship Architectures</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] mb-3 sm:mb-4">
          Engineered Systems & Models
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
          Deep architectural dives into AI systems built for scientific discovery, from cellular organelle phenotyping to 11B-parameter multimodal vision-language models.
        </p>
      </div>

      {/* Asymmetric Project Bento */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-7 text-left">
        {FEATURED_PROJECTS.map((proj) => (
          <div
            key={proj.id}
            className="double-bezel group flex flex-col justify-between"
          >
            <div className="bezel-core p-5 sm:p-8 lg:p-9 h-full flex flex-col justify-between">
              <div>
                {/* Meta Top Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs text-blue-600 dark:text-blue-400 font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                    {proj.period}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[var(--chip-bg)] text-[var(--chip-text)] border border-[var(--chip-border)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-1.5 leading-snug tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {proj.title}
                </h3>
                <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium mb-4">
                  {proj.subtitle}
                </p>

                {/* Problem Statement */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {proj.problem}
                </p>

                {/* Architecture Core Box */}
                <div className="p-4 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs mb-5">
                  <span className="font-mono text-[10px] text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] font-bold block mb-1">
                    Technical Solution
                  </span>
                  <p className="text-[var(--text-primary)] leading-relaxed">
                    {proj.solution}
                  </p>
                </div>

                {/* Quantified Outcome */}
                <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium mb-6">
                  <TrendingUp className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                  <span>{proj.outcome}</span>
                </div>
              </div>

              {/* Action Links & Key Metrics */}
              <div className="pt-5 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {proj.metrics.slice(0, 2).map((m, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-[var(--chip-bg)] text-[var(--chip-text)] border border-[var(--chip-border)]"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                {proj.paperUrl && (
                  <a
                    href={proj.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 pl-4 pr-1.5 py-1 rounded-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] text-xs font-semibold hover:opacity-90 transition-all duration-300 shadow-sm active:scale-[0.98]"
                  >
                    <span>Read Paper</span>
                    <span className="w-6 h-6 rounded-full bg-[var(--btn-primary-text)] text-[var(--btn-primary-bg)] flex items-center justify-center transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                      <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                    </span>
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
