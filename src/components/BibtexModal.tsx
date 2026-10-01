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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/75 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-xl card-surface border-[var(--border-subtle)] p-6 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] mb-4">
          <div className="flex items-center gap-2">
            <Quote className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="font-mono text-xs text-[var(--text-primary)] font-semibold">BibTeX Citation</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] transition-colors cursor-pointer"
            aria-label="Close BibTeX Modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <h3 className="font-semibold text-sm text-[var(--text-primary)] mb-3 leading-snug">
          {publication.title}
        </h3>

        <div className="relative mb-5">
          <pre className="p-4 rounded-lg bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] border border-[var(--border-subtle)] text-xs font-mono overflow-x-auto max-h-64 leading-relaxed">
            {publication.bibtex}
          </pre>
        </div>

        <div className="flex items-center justify-between gap-3 pt-2">
          <span className="text-xs text-[var(--text-muted)] font-mono">
            {publication.venue} ({publication.year})
          </span>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Citation</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
