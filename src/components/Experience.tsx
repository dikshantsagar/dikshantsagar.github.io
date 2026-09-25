import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Building, MapPin, Calendar, User, TrendingUp } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-14 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-300 text-xs font-mono mb-4">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Research Appointments & Laboratories</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
          Research Experience & Impact
        </h2>
        <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
          8+ years developing deep learning models for high-consequence scientific environments, collaborating closely with oncologists, structural biologists, and high-energy physicists.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12 text-left">
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Node Icon */}
            <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-[var(--bg-primary)] border-2 border-cyan-500 dark:border-cyan-400 flex items-center justify-center shadow-md">
              <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 group-hover:scale-125 transition-transform" />
            </div>

            {/* Experience Card */}
            <div className="p-6 sm:p-8 rounded-2xl card-surface hover:border-cyan-500/40 shadow-xl transition-all duration-300">
              {/* Card Meta Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold mb-1">
                    <Building className="w-3.5 h-3.5" />
                    <span>{exp.organization}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[var(--text-secondary)]">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full card-inner-box">
                    <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full card-inner-box">
                    <MapPin className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Advisor if applicable */}
              {exp.advisor && (
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-4 pb-3 border-b border-[var(--border-subtle)] font-mono">
                  <User className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>
                    Advisor: <span className="text-[var(--text-primary)] font-semibold">{exp.advisor}</span>
                  </span>
                </div>
              )}

              {/* Bullets */}
              <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-[var(--text-secondary)]">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 mt-2 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Key Technical Highlights / Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[var(--border-subtle)]">
                <span className="text-xs text-[var(--text-muted)] font-mono mr-1">Focus Areas:</span>
                {exp.highlights.map((hl, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-700 dark:text-cyan-300 text-xs font-mono"
                  >
                    <TrendingUp className="w-3 h-3" />
                    <span>{hl}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
