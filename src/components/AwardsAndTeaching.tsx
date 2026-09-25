import React from 'react';
import { AWARDS, TEACHING_LIST, REVIEWER_SERVICES, EDUCATION_LIST } from '../data/portfolioData';
import {
  Award,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';

export const AwardsAndTeaching: React.FC = () => {
  return (
    <section id="awards" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Education First */}
      <div className="mb-20">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
            Education
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION_LIST.map((edu, idx) => (
            <div
              key={idx}
              className="card-surface p-6 sm:p-7 rounded-2xl transition-all duration-200 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                    {edu.period}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-300 text-[11px] font-mono font-medium">
                    GPA: {edu.gpa}
                  </span>
                </div>

                <h3 className="font-bold text-base text-[var(--text-primary)] mb-1.5">
                  {edu.degree}
                </h3>
                <div className="text-xs text-[var(--text-secondary)] font-medium mb-3">
                  {edu.institution} • {edu.location}
                </div>

                {edu.advisor && (
                  <div className="text-xs text-[var(--text-muted)] font-mono mb-2">
                    Advisor: <span className="text-cyan-600 dark:text-cyan-300 font-medium">{edu.advisor}</span>
                  </div>
                )}

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                  {edu.focus}
                </p>
              </div>

              {edu.thesis && (
                <div className="pt-3 border-t border-[var(--border-subtle)] mt-2">
                  <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block mb-1">
                    Thesis
                  </span>
                  <div className="text-xs text-[var(--text-primary)] font-medium leading-snug mb-2">
                    {edu.thesis}
                  </div>
                  {edu.thesisUrl && (
                    <a
                      href={edu.thesisUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 font-medium"
                    >
                      <span>Read Thesis</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Two Column Grid: Awards & Teaching */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-left">
        {/* Honors and Fellowships */}
        <div>
          <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider mb-6">
            <Award className="w-4 h-4" />
            <span>Honors, Awards & Fellowships</span>
          </div>

          <div className="space-y-3.5">
            {AWARDS.map((award, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all ${
                  award.highlight
                    ? 'bg-amber-500/10 dark:bg-[#14120a] border-amber-500/40 shadow-lg shadow-amber-950/10'
                    : 'card-surface hover:border-slate-300 dark:hover:border-white/20'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] leading-snug">
                    {award.title}
                  </h4>
                  <span className="font-mono text-xs text-[var(--text-muted)] shrink-0">
                    {award.year}
                  </span>
                </div>
                <div className="text-xs text-cyan-600 dark:text-cyan-400 font-mono mb-2">
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

        {/* Teaching & Peer Review Service */}
        <div>
          <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Teaching & Mentorship</span>
          </div>

          <div className="space-y-3.5 mb-10">
            {TEACHING_LIST.map((teach, idx) => (
              <div
                key={idx}
                className="card-surface p-5 rounded-2xl transition-all hover:border-cyan-500/30"
              >
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] leading-snug">
                    {teach.course}
                  </h4>
                  <span className="font-mono text-xs text-[var(--text-muted)] shrink-0">
                    {teach.terms}
                  </span>
                </div>
                <div className="text-xs text-cyan-600 dark:text-cyan-400 font-mono">
                  {teach.role} • {teach.institution}
                </div>
              </div>
            ))}
          </div>

          {/* Peer Reviewing Service */}
          <div>
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>Academic Peer Review Service</span>
            </div>

            <div className="card-surface p-5 rounded-2xl divide-y divide-[var(--border-subtle)]">
              {REVIEWER_SERVICES.map((rev, idx) => (
                <div key={idx} className="py-2.5 first:pt-0 last:pb-0 flex items-center justify-between text-xs">
                  <span className="text-[var(--text-primary)] font-medium">{rev.venue}</span>
                  <span className="font-mono text-[var(--text-muted)]">{rev.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
