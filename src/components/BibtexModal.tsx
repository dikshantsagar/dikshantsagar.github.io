import React, { useState } from 'react';
import { Publication } from '../data/portfolioData';
import { X, Copy, Check, Quote } from 'lucide-react';

interface BibtexModalProps {
  publication: Publication | null;
  onClose: () => void;
}

export const BibtexModal: React.FC<BibtexModalProps> = ({ publication, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!publication) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(publication.bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl card-surface border-[var(--border-subtle)] p-6 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)] mb-4">
          <div className="flex items-center gap-2">
            <Quote className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="font-mono text-sm text-[var(--text-primary)] font-medium">BibTeX Citation</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close BibTeX Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <h3 className="font-semibold text-sm text-[var(--text-primary)] mb-3 line-clamp-2">
          {publication.title}
        </h3>

        <div className="relative">
          <pre className="p-4 rounded-xl bg-slate-900 text-cyan-200 border border-slate-800 text-xs font-mono overflow-x-auto max-h-72 leading-relaxed">
            {publication.bibtex}
          </pre>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs text-[var(--text-muted)] font-mono">
            {publication.venue} ({publication.year})
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-950" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy BibTeX</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
