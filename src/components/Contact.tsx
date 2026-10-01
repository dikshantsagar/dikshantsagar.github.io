import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Copy, Check, MapPin, ExternalLink, GraduationCap, Github, Linkedin, FileText, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Massive Double-Bezel Contact Island */}
      <div className="double-bezel p-1.5 sm:p-2 rounded-3xl sm:rounded-[2.5rem] text-left">
        <div className="bezel-core p-6 sm:p-12 lg:p-14 rounded-[calc(1.5rem-2px)] sm:rounded-[calc(2.5rem-8px)]">
          <div className="max-w-3xl mb-8 sm:mb-12">
            <div className="eyebrow-badge bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>07 / Availability & Contact</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] mb-3 sm:mb-4">
              Initiate Collaboration
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed">
              Actively seeking ML/AI Research Scientist and Applied Scientist internships for Summer and Fall. Open to exploring high-impact research collaborations in multimodal biomedical foundation models and physics-informed AI.
            </p>
          </div>

          {/* Primary Action Array */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
            {/* Email Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-between group">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider block font-semibold">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-xs text-[var(--text-primary)] hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] transition-colors cursor-pointer shrink-0 ml-2"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-500" strokeWidth={2} />
                ) : (
                  <Copy className="w-4 h-4" strokeWidth={1.5} />
                )}
              </button>
            </div>

            {/* Location / Institutional Lab */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[var(--bezel-outer-bg)] border border-[var(--border-subtle)] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-[var(--text-muted)]" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider block font-semibold">
                  Lab Location
                </span>
                <span className="text-xs text-[var(--text-primary)] font-medium truncate block">
                  UC Irvine, Baldi Lab, CA
                </span>
              </div>
            </div>

            {/* Curriculum Vitae Button-in-Button */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-between">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider block font-semibold truncate">
                    Curriculum Vitae
                  </span>
                  <span className="text-xs text-[var(--text-primary)] font-medium truncate block">
                    Verified Academic CV
                  </span>
                </div>
              </div>
              <a
                href={PERSONAL_INFO.cvPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-1.5 pl-3 pr-1 py-1 rounded-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] text-xs font-semibold hover:opacity-90 transition-all duration-300 shrink-0 ml-2"
              >
                <span>PDF</span>
                <span className="w-5 h-5 rounded-full bg-[var(--btn-primary-text)] text-[var(--btn-primary-bg)] flex items-center justify-center transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                  <ArrowUpRight className="w-3 h-3" strokeWidth={2} />
                </span>
              </a>
            </div>
          </div>

          {/* Social Credibility Links */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] font-medium">
            <a
              href="https://scholar.google.com/citations?user=6FOyM3IAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <GraduationCap className="w-4 h-4" strokeWidth={1.5} />
              <span>Google Scholar Profile</span>
              <ExternalLink className="w-3 h-3 opacity-40" strokeWidth={1.5} />
            </a>

            <a
              href="https://github.com/dikshantsagar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[var(--text-primary)] transition-colors"
            >
              <Github className="w-4 h-4" strokeWidth={1.5} />
              <span>GitHub Repositories</span>
              <ExternalLink className="w-3 h-3 opacity-40" strokeWidth={1.5} />
            </a>

            <a
              href="https://www.linkedin.com/in/dikshantsagar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" strokeWidth={1.5} />
              <span>LinkedIn Network</span>
              <ExternalLink className="w-3 h-3 opacity-40" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
