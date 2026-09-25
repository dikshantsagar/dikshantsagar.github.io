import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)] py-12 px-4 sm:px-6 lg:px-8 text-xs text-[var(--text-muted)]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-semibold text-[var(--text-primary)]">
            {PERSONAL_INFO.name}
          </span>
          <span className="hidden sm:inline text-[var(--text-muted)]">•</span>
          <span>Ph.D. Candidate in Computer Science, UC Irvine</span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--text-secondary)]">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Deployed statically on GitHub Pages</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full card-inner-box hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          aria-label="Scroll back to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
