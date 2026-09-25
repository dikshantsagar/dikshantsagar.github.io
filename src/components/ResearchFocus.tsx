import React, { useState } from 'react';
import { RESEARCH_PILLARS } from '../data/portfolioData';
import {
  Brain,
  Sparkles,
  Cpu,
  Atom,
  ChevronRight,
  TrendingUp,
  AlertCircle,
  Lightbulb,
  CheckCircle2
} from 'lucide-react';

export const ResearchFocus: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState(RESEARCH_PILLARS[0].id);

  const pillarIcons: Record<string, React.ReactNode> = {
    'biomedical-imaging': <Atom className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
    'generative-diffusion': <Sparkles className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />,
    'vlm-physics': <Brain className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    'agentic-systems': <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
  };

  const currentPillar = RESEARCH_PILLARS.find((p) => p.id === selectedPillarId) || RESEARCH_PILLARS[0];

  return (
    <section id="research-focus" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-14 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-300 text-xs font-mono mb-4">
          <Brain className="w-3.5 h-3.5" />
          <span>Core Research Pillars</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
          Problem → Innovation → Impact
        </h2>
        <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
          Developing foundation models and generative methods grounded in biomedicine, physical laws, and high-stakes scientific applications. Explore the technical anatomy of my primary research directions.
        </p>
      </div>

      {/* Interactive Pillar Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {RESEARCH_PILLARS.map((pillar) => {
          const isSelected = pillar.id === selectedPillarId;
          return (
            <button
              key={pillar.id}
              onClick={() => setSelectedPillarId(pillar.id)}
              className={`p-5 rounded-2xl text-left transition-all duration-200 border cursor-pointer ${
                isSelected
                  ? 'bg-cyan-500/10 dark:bg-[#121828] border-cyan-500 dark:border-cyan-400/80 shadow-xl shadow-cyan-950/20 ring-1 ring-cyan-500/40'
                  : 'card-surface hover:border-slate-300 dark:hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl card-inner-box">
                  {pillarIcons[pillar.id] || <Brain className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />}
                </div>
                <span className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border ${
                  isSelected
                    ? 'bg-cyan-500/15 border-cyan-400/40 text-cyan-700 dark:text-cyan-200'
                    : 'bg-black/5 dark:bg-white/5 border-[var(--border-subtle)] text-[var(--text-muted)]'
                }`}>
                  {pillar.badge}
                </span>
              </div>
              <h3 className="font-semibold text-sm text-[var(--text-primary)] mb-1.5 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-xs text-[var(--text-muted)] line-clamp-2 leading-relaxed">
                {pillar.headline}
              </p>
            </button>
          );
        })}
      </div>

      {/* Detailed Pipeline Card (Problem -> Approach -> Impact) */}
      <div className="rounded-3xl card-surface p-6 sm:p-10 shadow-2xl">
        {/* Card Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)] mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-1.5">
              <span>Selected Pillar</span>
              <span>•</span>
              <span className="text-[var(--text-secondary)]">{currentPillar.badge}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] leading-tight">
              {currentPillar.headline}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2 shrink-0">
            {currentPillar.metrics.map((metric, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs font-mono font-medium"
              >
                <TrendingUp className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>{metric}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Step Scientific Narrative Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Step 1: The Problem */}
          <div className="p-6 rounded-2xl card-inner-box border-rose-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-rose-500 dark:text-rose-400 font-mono text-xs uppercase tracking-wider mb-3">
                <AlertCircle className="w-4 h-4" />
                <span>01. Scientific Challenge</span>
              </div>
              <h4 className="text-base font-semibold text-[var(--text-primary)] mb-2.5">
                The Fundamental Bottleneck
              </h4>
              <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed">
                {currentPillar.problem}
              </p>
            </div>
          </div>

          {/* Step 2: Technical Approach */}
          <div className="p-6 rounded-2xl card-inner-box border-cyan-500/35 shadow-inner flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider mb-3">
                <Lightbulb className="w-4 h-4" />
                <span>02. Technical Innovation</span>
              </div>
              <h4 className="text-base font-semibold text-[var(--text-primary)] mb-2.5">
                Architectural & Algorithmic Design
              </h4>
              <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed">
                {currentPillar.approach}
              </p>
            </div>
          </div>

          {/* Step 3: Verified Impact */}
          <div className="p-6 rounded-2xl card-inner-box border-emerald-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs uppercase tracking-wider mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>03. Verifiable Impact</span>
              </div>
              <h4 className="text-base font-semibold text-[var(--text-primary)] mb-2.5">
                Empirical Results & Papers
              </h4>
              <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed">
                {currentPillar.impact}
              </p>
            </div>
          </div>
        </div>

        {/* Tags footer */}
        <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-[var(--text-muted)] font-mono mr-1">Methods & Frameworks:</span>
            {currentPillar.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-3 py-1 rounded-lg card-inner-box text-[var(--text-secondary)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href="#publications"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
          >
            <span>View Related Publications</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
