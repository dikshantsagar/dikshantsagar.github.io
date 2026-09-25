import React from 'react';
import { SKILL_CATEGORIES, CERTIFICATIONS } from '../data/portfolioData';
import {
  Code,
  Brain,
  Sparkles,
  Cpu,
  Atom,
  Award,
  CheckCircle2,
  Terminal
} from 'lucide-react';

export const Skills: React.FC = () => {
  const categoryIcons: Record<string, React.ReactNode> = {
    'Languages & Core': <Code className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
    'ML / DL Frameworks': <Brain className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
    'Generative AI & Methods': <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-300" />,
    'Systems, HPC & Infrastructure': <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
    'Domain & Scientific Computing': <Atom className="w-4 h-4 text-amber-600 dark:text-amber-400" />
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-14 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-xs font-mono mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>Technical Stack & Systems</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
          Core Competencies & Technologies
        </h2>
        <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
          Grounded in high-performance GPU computing, large model training pipelines, and interdisciplinary domain scientific workflows.
        </p>
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className="card-surface p-6 rounded-2xl transition-all duration-200 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[var(--border-subtle)]">
                <div className="p-2.5 rounded-xl card-inner-box">
                  {categoryIcons[cat.name] || <Code className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />}
                </div>
                <h3 className="font-semibold text-sm text-[var(--text-primary)]">
                  {cat.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg card-inner-box hover:bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] hover:border-cyan-400/40 text-xs font-mono text-[var(--text-secondary)] hover:text-cyan-600 dark:hover:text-cyan-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Banner */}
      <div className="p-6 sm:p-8 rounded-3xl card-surface shadow-lg">
        <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider mb-5">
          <Award className="w-4 h-4" />
          <span>Professional Certifications</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-4 rounded-xl card-inner-box hover:border-cyan-500/30 transition-all"
            >
              <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 mt-0.5 shrink-0" />
              <div>
                <div className="text-xs font-medium text-[var(--text-primary)] leading-snug">
                  {cert.name}
                </div>
                <div className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400/80 mt-1">
                  {cert.issuer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
