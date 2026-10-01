import React from 'react';
import { AWARDS, TEACHING_LIST, REVIEWER_SERVICES, EDUCATION_LIST } from '../data/portfolioData';
import { Award, ExternalLink, BookOpen } from 'lucide-react';

export const AwardsAndTeaching: React.FC = () => {
  return (
    <section id="education" className="py-14 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Macro-Whitespace & Eyebrow Heading */}
      <div className="text-left mb-10 sm:mb-14">
        <div className="eyebrow-badge bg-blue-500/10 border border-blue-500/25 text-blue-600 dark:text-blue-400 mb-3 sm:mb-4">
          <span>06 / Academic Rigor</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] mb-3 sm:mb-4">
          Education & Distinctions
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
          Ph.D. and Master's curriculum maintained with a perfect 4.0 GPA, complemented by competitive research fellowships, best paper honors, and teaching appointments.
        </p>
      </div>

      {/* Education Double-Bezel Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-8 sm:mb-12 text-left">
        {EDUCATION_LIST.map((edu, idx) => (
          <div
            key={idx}
            className="double-bezel group flex flex-col justify-between"
          >
            <div className="bezel-core p-5 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs text-blue-600 dark:text-blue-400 font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                    {edu.period}
                  </span>
                  <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border border-emerald-500/25 font-bold">
                    GPA {edu.gpa}
                  </span>
                </div>

                <h3 className="font-bold text-base sm:text-lg text-[var(--text-primary)] mb-1 leading-snug">
                  {edu.degree}
                </h3>
                <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {edu.institution}
                </div>

                {edu.advisor && (
                  <div className="text-xs text-[var(--text-muted)] font-mono mb-3">
                    Advisor: <span className="text-[var(--text-primary)] font-semibold">{edu.advisor}</span>
                  </div>
                )}

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                  {edu.focus}
                </p>
              </div>

              {edu.thesis && (
                <div className="pt-3 border-t border-[var(--border-subtle)] text-xs">
                  <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-[0.2em] font-semibold block mb-1">
                    Thesis
                  </span>
                  <p className="font-medium text-[var(--text-primary)] leading-snug line-clamp-2 mb-2">
                    {edu.thesis}
                  </p>
                  {edu.thesisUrl && (
                    <a
                      href={edu.thesisUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline transition-colors"
                    >
                      <span>Read Thesis</span>
                      <ExternalLink className="w-2.5 h-2.5" strokeWidth={1.5} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Two Column Grid: Honors & Teaching/Service */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 text-left">
        {/* Honors and Fellowships */}
        <div className="double-bezel">
          <div className="bezel-core p-5 sm:p-8 h-full">
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-bold mb-5 sm:mb-6">
              <Award className="w-4 h-4" strokeWidth={1.5} />
              <span>Honors & Fellowships</span>
            </div>

            <div className="space-y-3 sm:space-y-3.5">
              {AWARDS.map((award, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 ${
                    award.highlight
                      ? 'bg-blue-500/[0.08] border-blue-500/25 shadow-sm'
                      : 'bg-[var(--bg-surface-elevated)] border-[var(--border-subtle)]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-bold text-xs sm:text-sm text-[var(--text-primary)]">
                      {award.title}
                    </h4>
                    <span className="font-mono text-xs text-[var(--text-muted)] shrink-0">
                      {award.year}
                    </span>
                  </div>
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-1">
                    {award.issuer}
                  </div>
                  {award.description && (
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {award.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Teaching & Peer Review Service */}
        <div className="double-bezel">
          <div className="bezel-core p-5 sm:p-8 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-bold mb-5 sm:mb-6">
                <BookOpen className="w-4 h-4" strokeWidth={1.5} />
                <span>Pedagogical Appointments</span>
              </div>

              <div className="space-y-3 mb-8">
                {TEACHING_LIST.map((teach, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-bold text-xs sm:text-sm text-[var(--text-primary)]">
                        {teach.role}
                      </h4>
                      <span className="font-mono text-xs text-[var(--text-muted)] shrink-0">
                        {teach.terms}
                      </span>
                    </div>
                    <div className="text-xs text-[var(--text-secondary)] font-medium mb-0.5">
                      {teach.course}
                    </div>
                    <div className="text-[11px] text-[var(--text-muted)]">
                      {teach.institution}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Peer Reviewer Box */}
            <div className="pt-6 border-t border-[var(--border-subtle)]">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)] mb-3 font-semibold">
                Peer Reviewer for Journals & Conferences
              </div>
              <div className="flex flex-wrap gap-2">
                {REVIEWER_SERVICES.map((rev, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-[var(--chip-bg)] border border-[var(--chip-border)] text-[var(--chip-text)]"
                  >
                    {rev.venue} ({rev.year})
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
