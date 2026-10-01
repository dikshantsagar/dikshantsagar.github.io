import React from 'react';
import { SKILL_CATEGORIES, CERTIFICATIONS } from '../data/portfolioData';
import { Code, Brain, Sparkles, Cpu, Atom, Award, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const categoryIcons: Record<string, React.ReactNode> = {
    'Languages & Core': <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />,
    'ML / DL Frameworks': <Brain className="w-4 h-4 text-indigo-600 dark:text-indigo-400" strokeWidth={1.5} />,
    'Generative AI & Methods': <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" strokeWidth={1.5} />,
    'Systems, HPC & Infrastructure': <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" strokeWidth={1.5} />,
    'Domain & Scientific Computing': <Atom className="w-4 h-4 text-amber-600 dark:text-amber-400" strokeWidth={1.5} />
  };

  return (
    <section id="skills" className="py-14 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Macro-Whitespace & Eyebrow Heading */}
      <div className="text-left mb-10 sm:mb-14">
        <div className="eyebrow-badge bg-blue-500/10 border border-blue-500/25 text-blue-600 dark:text-blue-400 mb-3 sm:mb-4">
          <span>05 / Technical Stack</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] mb-3 sm:mb-4">
          Core Competencies & Systems
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
          Deep proficiencies spanning distributed GPU training, large multimodal architectures, and high-performance computing clusters.
        </p>
      </div>

      {/* Skills Grid with Double-Bezel Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-8 sm:mb-10 text-left">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className="double-bezel group flex flex-col justify-between"
          >
            <div className="bezel-core p-5 sm:p-7 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[var(--border-subtle)]">
                  <div className="w-8 h-8 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-center shrink-0">
                    {categoryIcons[cat.name] || <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />}
                  </div>
                  <h3 className="font-bold text-xs uppercase tracking-[0.2em] font-mono text-[var(--text-primary)]">
                    {cat.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-[var(--chip-bg)] border border-[var(--chip-border)] text-[11px] sm:text-xs font-mono text-[var(--chip-text)] hover:text-[var(--text-primary)] transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Double-Bezel Panel */}
      <div className="double-bezel text-left">
        <div className="bezel-core p-5 sm:p-8 lg:p-9">
          <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-bold mb-5 sm:mb-6">
            <Award className="w-4 h-4" strokeWidth={1.5} />
            <span>Professional Credentials & Certifications</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="font-semibold text-xs sm:text-sm text-[var(--text-primary)] leading-snug">
                    {cert.name}
                  </div>
                  <div className="font-mono text-[11px] text-[var(--text-muted)] mt-1">
                    {cert.issuer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
