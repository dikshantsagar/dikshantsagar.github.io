import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FileText, Download, Check, ExternalLink, Eye } from 'lucide-react';

export const CVSection: React.FC = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section id="cv" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl card-surface p-8 sm:p-12 overflow-hidden shadow-2xl backdrop-blur-xl">
        {/* Subtle accent glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-xs font-mono mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-3">
            Looking for a Complete Overview?
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-8">
            Download the comprehensive CV covering 15+ peer-reviewed publications, 8+ years of machine learning & foundation model development, research fellowship honors, and full technical proficiencies.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={PERSONAL_INFO.cvPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="CV_Dikshant_Sagar.pdf"
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              {downloaded ? (
                <>
                  <Check className="w-4 h-4 text-emerald-950" />
                  <span>Downloaded CV!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Latest CV (PDF)</span>
                </>
              )}
            </a>

            <a
              href={PERSONAL_INFO.cvPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-[var(--text-primary)] card-inner-box hover:bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] transition-all duration-200"
            >
              <Eye className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Preview in Browser</span>
              <ExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-xs font-mono text-[var(--text-muted)]">
            <span>• Updated: September 2026</span>
            <span>• Format: PDF Document</span>
            <span>• Verified Academic Credentials</span>
          </div>
        </div>
      </div>
    </section>
  );
};
