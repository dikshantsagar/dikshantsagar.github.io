import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  Check,
  Copy,
  MapPin,
  Building
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85dvh] lg:min-h-[92dvh] flex items-center pt-24 sm:pt-28 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Typography, Credentials & Haptic CTAs (7 cols) */}
        <div className="lg:col-span-7 flex flex-col text-left">
          
          {/* Mobile Profile & Status Header (Visible on mobile/tablet, hidden on desktop) */}
          <div className="flex lg:hidden flex-col items-center gap-3 mb-6">
            <div className="double-bezel p-1.5 rounded-3xl shrink-0 shadow-xl">
              <div className="bezel-core w-24 h-24 sm:w-28 sm:h-28 rounded-[calc(1.5rem-4px)] overflow-hidden relative bg-slate-900">
                <img
                  src="./images/profile.jpg"
                  alt="Dikshant Sagar"
                  width="112"
                  height="112"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Seeking ML/AI Internships</span>
            </div>
          </div>

          {/* Desktop-only Eyebrow Badge (Hidden on mobile) */}
          <div className="hidden lg:inline-flex self-start items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono uppercase tracking-[0.2em] font-semibold mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Seeking ML/AI Research & Applied Scientist Internships</span>
          </div>

          {/* Massive Display Typography */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter leading-[1.15] sm:leading-[1.08] text-transparent bg-clip-text bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-white/95 dark:to-white/60 pb-1.5 sm:pb-3 mb-1 sm:mb-2 text-center sm:text-left">
            Dikshant Sagar
          </h1>

          <p className="text-sm sm:text-lg lg:text-xl font-medium text-blue-600 dark:text-blue-400 tracking-tight mb-2 sm:mb-3 text-center sm:text-left">
            AI & Machine Learning Ph.D. Researcher at UC Irvine
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-mono text-[var(--text-muted)] mb-4">
            <div className="flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />
              <span>Pierre Baldi Lab</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-400" strokeWidth={1.5} />
              <span>Irvine, CA</span>
            </div>
          </div>

          <p className="text-xs sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-xl mb-6 sm:mb-8 text-center sm:text-left">
            Third-year CS Ph.D. candidate advised by <span className="text-[var(--text-primary)] font-semibold">Dr. Pierre Baldi</span>. Engineering multimodal biomedical foundation models, physics-conditioned diffusion, and vision-language architectures for frontier scientific discovery.
          </p>

          {/* Double-Bezel Metric Bento Grid: Symmetrical Dividers */}
          <div className="double-bezel p-1 sm:p-1.5 rounded-2xl mb-6 sm:mb-8 w-full max-w-2xl mx-auto lg:mx-0">
            <div className="bezel-core rounded-[calc(1rem-2px)] grid grid-cols-2 sm:grid-cols-4">
              {/* Stat 1: Top-Left */}
              <div className="p-3.5 sm:p-5 flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="font-mono text-xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight leading-none mb-1">15+</span>
                <span className="text-[11px] sm:text-xs text-[var(--text-muted)] font-medium leading-snug">Papers Published</span>
              </div>
              {/* Stat 2: Top-Right */}
              <div className="p-3.5 sm:p-5 flex flex-col items-center sm:items-start text-center sm:text-left border-l border-[var(--border-subtle)]">
                <span className="font-mono text-xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight leading-none mb-1">4.0</span>
                <span className="text-[11px] sm:text-xs text-[var(--text-muted)] font-medium leading-snug">Ph.D. & M.S. GPA</span>
              </div>
              {/* Stat 3: Bottom-Left */}
              <div className="p-3.5 sm:p-5 flex flex-col items-center sm:items-start text-center sm:text-left border-t sm:border-t-0 sm:border-l border-[var(--border-subtle)]">
                <span className="font-mono text-xl sm:text-3xl font-extrabold text-amber-600 dark:text-amber-400 tracking-tight leading-none mb-1">2x</span>
                <span className="text-[11px] sm:text-xs text-[var(--text-muted)] font-medium leading-snug">Best Paper Honors</span>
              </div>
              {/* Stat 4: Bottom-Right */}
              <div className="p-3.5 sm:p-5 flex flex-col items-center sm:items-start text-center sm:text-left border-l border-t sm:border-t-0 border-[var(--border-subtle)]">
                <span className="font-mono text-xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight leading-none mb-1">8+ Yrs</span>
                <span className="text-[11px] sm:text-xs text-[var(--text-muted)] font-medium leading-snug">ML System R&D</span>
              </div>
            </div>
          </div>

          {/* Action CTAs: Responsive Layout */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 sm:mb-8 w-full max-w-xl mx-auto lg:mx-0">
            <div className="grid grid-cols-2 gap-3 w-full sm:w-auto">
              <a
                href={PERSONAL_INFO.cvPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90 transition-all duration-400 shadow-md active:scale-[0.98]"
              >
                <span>CV (PDF)</span>
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[var(--btn-primary-text)] text-[var(--btn-primary-bg)] flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={2} />
                </span>
              </a>

              <a
                href="#publications"
                className="group inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-3 rounded-full text-xs sm:text-sm font-medium text-[var(--btn-secondary-text)] border border-[var(--btn-secondary-border)] bg-[var(--btn-secondary-bg)] hover:bg-[var(--bg-surface-elevated)] transition-all active:scale-[0.98]"
              >
                <span>Papers</span>
                <ArrowRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:translate-x-0.5" strokeWidth={1.5} />
              </a>
            </div>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-mono text-[var(--text-secondary)] border border-[var(--border-subtle)] bg-[var(--bezel-outer-bg)] hover:text-[var(--text-primary)] hover:border-[var(--border-medium)] transition-all cursor-pointer active:scale-95"
              title="Copy verified email"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" strokeWidth={2} />
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />
                  <span>{PERSONAL_INFO.email}</span>
                  <Copy className="w-3 h-3 text-[var(--text-muted)]" strokeWidth={1.5} />
                </>
              )}
            </button>
          </div>

          {/* Social Credibility Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-5 text-xs text-[var(--text-secondary)] font-medium">
            <a
              href="https://scholar.google.com/citations?user=6FOyM3IAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <GraduationCap className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span>Scholar</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-50" />
            </a>
            <span className="text-[var(--border-medium)]">•</span>
            <a
              href="https://github.com/dikshantsagar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[var(--text-primary)] transition-colors"
            >
              <Github className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span>GitHub</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-50" />
            </a>
            <span className="text-[var(--border-medium)]">•</span>
            <a
              href="https://www.linkedin.com/in/dikshantsagar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span>LinkedIn</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-50" />
            </a>
          </div>
        </div>

        {/* Right Column: Double-Bezel Hardware Showcase (Desktop only, hidden on mobile/tablet) */}
        <div className="hidden lg:flex lg:col-span-5 justify-end">
          <div className="w-full max-w-sm double-bezel p-2 rounded-[2.5rem]">
            <div className="bezel-core rounded-[calc(2.5rem-8px)] overflow-hidden relative aspect-4/5 bg-slate-900 flex flex-col justify-end p-5">
              <img
                src="./images/profile.jpg"
                alt="Dikshant Sagar"
                width="400"
                height="500"
                className="absolute inset-0 w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                loading="eager"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              {/* Floating Haptic Glass Card */}
              <div className="relative z-10 p-3.5 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/20 text-xs shadow-2xl flex flex-col gap-2">
                <div className="flex items-center justify-between text-white font-medium">
                  <div className="flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-blue-400" strokeWidth={1.5} />
                    <span>UC Irvine • Baldi Lab</span>
                  </div>
                  <span className="font-mono text-[10px] text-blue-300 font-semibold px-2 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/30">
                    Ph.D. Candidate
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-300 font-mono text-[11px] pt-1.5 border-t border-white/10">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" strokeWidth={1.5} />
                    <span>Irvine, CA</span>
                  </div>
                  <span className="text-emerald-400 font-medium">Seeking Internships</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
