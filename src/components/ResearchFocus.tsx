import React from 'react';
import { RESEARCH_PILLARS } from '../data/portfolioData';
import { Sparkles, Brain, Cpu, Atom } from 'lucide-react';

export const ResearchFocus: React.FC = () => {
  const pillarIcons: Record<string, React.ReactNode> = {
    'biomedical-imaging': <Atom className="w-5 h-5 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />,
    'generative-diffusion': <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" strokeWidth={1.5} />,
    'vlm-physics': <Brain className="w-5 h-5 text-cyan-600 dark:text-cyan-400" strokeWidth={1.5} />,
    'agentic-systems': <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" strokeWidth={1.5} />
  };

  return (
    <section id="research-focus" className="py-14 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Macro-Whitespace & Eyebrow Heading */}
      <div className="text-left mb-10 sm:mb-14">
        <div className="eyebrow-badge bg-blue-500/10 border border-blue-500/25 text-blue-600 dark:text-blue-400 mb-3 sm:mb-4">
          <span>01 / Core Specialization</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] mb-3 sm:mb-4">
          Research Directions & Systems
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
          Pioneering representation learning and physics-grounded generative models deployed in high-consequence biomedical and particle physics pipelines.
        </p>
      </div>

      {/* Asymmetrical Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 text-left">
        {RESEARCH_PILLARS.map((pillar, idx) => {
          const isSpan7 = idx === 0 || idx === 3;
          const colClass = isSpan7 ? 'lg:col-span-7' : 'lg:col-span-5';

          return (
            <div
              key={pillar.id}
              className={`${colClass} double-bezel group`}
            >
              <div className="bezel-core p-5 sm:p-8 h-full flex flex-col justify-between">
                <div>
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-10 h-10 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110">
                      {pillarIcons[pillar.id] || <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />}
                    </div>
                    <span className="font-mono text-[11px] px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-semibold tracking-wide">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title & Headline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-2 leading-snug tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="font-mono text-xs text-blue-600 dark:text-blue-400 font-medium mb-4">
                    {pillar.headline}
                  </p>

                  {/* Technical Approach & Problem */}
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {pillar.approach}
                  </p>

                  {/* High-Impact Proof Box */}
                  <div className="p-4 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs mb-6">
                    <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-[0.2em] font-semibold block mb-1">
                      Demonstrated Impact
                    </span>
                    <p className="text-[var(--text-primary)] font-medium leading-relaxed">
                      {pillar.impact}
                    </p>
                  </div>
                </div>

                {/* Footer Tag Strip */}
                <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-[var(--chip-bg)] border border-[var(--chip-border)] text-[var(--chip-text)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 font-mono text-xs text-blue-600 dark:text-blue-400 font-medium">
                    <span>{pillar.metrics[0]}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
