import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Building, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

export const Experience: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="experience" className="py-14 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Macro-Whitespace & Eyebrow Heading */}
      <div className="text-left mb-10 sm:mb-14">
        <div className="eyebrow-badge bg-blue-500/10 border border-blue-500/25 text-blue-600 dark:text-blue-400 mb-3 sm:mb-4">
          <span>03 / Career & Lab History</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] mb-3 sm:mb-4">
          Experience & Laboratories
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
          8+ years engineering foundation models and deep learning pipelines in close collaboration with experimental physicists, oncologists, and computational biologists.
        </p>
      </div>

      {/* Timeline with Double-Bezel Cards */}
      <div className="relative border-l border-[var(--border-subtle)] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8 sm:space-y-12 text-left">
        {EXPERIENCES.map((exp) => {
          const isExpanded = !!expandedIds[exp.id];
          const visibleBullets = isExpanded ? exp.bullets : exp.bullets.slice(0, 3);
          const hasMore = exp.bullets.length > 3;

          return (
            <div key={exp.id} className="relative group">
              {/* Glowing Haptic Timeline Node: Centered on line */}
              <div className="absolute -left-[33px] sm:-left-[49px] top-2 w-4 h-4 rounded-full bg-[var(--bg-primary)] border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
              </div>

              {/* Double-Bezel Card Container */}
              <div className="double-bezel">
                <div className="bezel-core p-5 sm:p-8 lg:p-9">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-semibold mt-1">
                        <Building className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" strokeWidth={1.5} />
                        <span>{exp.organization}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-[var(--text-muted)] shrink-0">
                      <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[var(--chip-bg)] border border-[var(--chip-border)] text-[var(--chip-text)]">
                        <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[var(--chip-bg)] border border-[var(--chip-border)] text-[var(--chip-text)]">
                        <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[var(--text-muted)]" strokeWidth={1.5} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Advisor Note */}
                  {exp.advisor && (
                    <div className="text-xs text-[var(--text-muted)] mb-4 pb-2.5 border-b border-[var(--border-subtle)] font-mono">
                      Advisor: <span className="text-[var(--text-primary)] font-semibold">{exp.advisor}</span>
                    </div>
                  )}

                  {/* Achievements List */}
                  <ul className="space-y-2.5 sm:space-y-3 mb-4 text-xs sm:text-sm text-[var(--text-secondary)]">
                    {visibleBullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 sm:gap-3 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Expand / Collapse Button for dense cards */}
                  {hasMore && (
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-blue-600 dark:text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 transition-all cursor-pointer active:scale-95 mb-4"
                    >
                      {isExpanded ? (
                        <>
                          <span>Show less</span>
                          <ChevronUp className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          <span>Show {exp.bullets.length - 3} more technical achievements</span>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  )}

                  {/* Quantified Focus Highlights */}
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-3.5 border-t border-[var(--border-subtle)]">
                    <span className="text-[10px] sm:text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider mr-1">
                      Key Benchmarks:
                    </span>
                    {exp.highlights.map((hl, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-mono font-medium bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20"
                      >
                        {hl}
                      </span>
                    ))}
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
