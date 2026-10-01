import React, { useState } from 'react';
import { PUBLICATIONS, Publication } from '../data/portfolioData';
import { BibtexModal } from './BibtexModal';
import {
  ExternalLink,
  Search,
  Award,
  Quote,
  ArrowUpRight
} from 'lucide-react';

export const Publications: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'highlight' | 'all' | 'biomedicine' | 'vlm-physics'>('highlight');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBibtexPub, setSelectedBibtexPub] = useState<Publication | null>(null);

  const categories = [
    { id: 'highlight', label: 'Selected Highlights' },
    { id: 'all', label: 'All Publications (15+)' },
    { id: 'biomedicine', label: 'Biomedicine & Clinical AI' },
    { id: 'vlm-physics', label: 'VLMs & Particle Physics' }
  ];

  const filteredPublications = PUBLICATIONS.filter((pub) => {
    const matchesCategory =
      activeCategory === 'all' ||
      (activeCategory === 'highlight' && (pub.award || pub.impactFactor || pub.venue.includes('Nature') || pub.venue.includes('NeurIPS'))) ||
      pub.category === activeCategory;

    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      pub.title.toLowerCase().includes(q) ||
      pub.venue.toLowerCase().includes(q) ||
      pub.authors.some((a) => a.toLowerCase().includes(q)) ||
      pub.summary.toLowerCase().includes(q);

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="publications" className="py-14 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Macro-Whitespace & Eyebrow Heading */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-12 text-left">
        <div>
          <div className="eyebrow-badge bg-blue-500/10 border border-blue-500/25 text-blue-600 dark:text-blue-400 mb-3 sm:mb-4">
            <span>02 / Peer-Reviewed Literature</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] mb-2 sm:mb-3">
            Selected Publications
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            15+ papers across Nature Communications Physics, Cytometry A, Computers in Biology & Medicine, and NeurIPS workshops.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full lg:w-72">
          <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" strokeWidth={1.5} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search papers or methods..."
            className="w-full pl-11 pr-8 py-2.5 sm:py-3 rounded-full bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs font-medium text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-blue-500 transition-all duration-300"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Floating Category Pills: Horizontal scroll on mobile */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap mb-8 sm:mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id as any)}
            className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer active:scale-95 ${
              activeCategory === cat.id
                ? 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] shadow-sm'
                : 'bg-[var(--bezel-outer-bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Publications List with Double-Bezel Cards */}
      <div className="space-y-5 sm:space-y-6 text-left">
        {filteredPublications.map((pub) => (
          <article
            key={pub.id}
            className="double-bezel group"
          >
            <div className="bezel-core p-5 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25">
                      {pub.venue}
                    </span>
                    <span className="font-mono text-xs text-[var(--text-muted)]">
                      {pub.year}
                    </span>
                    {pub.impactFactor && (
                      <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-[var(--chip-bg)] text-[var(--chip-text)] border border-[var(--chip-border)]">
                        IF {pub.impactFactor}
                      </span>
                    )}
                  </div>

                  {pub.award && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-semibold shadow-sm">
                      <Award className="w-3.5 h-3.5 text-amber-500" strokeWidth={1.5} />
                      <span>{pub.award}</span>
                    </div>
                  )}
                </div>

                {/* Paper Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-2.5 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {pub.title}
                </h3>

                {/* Authors */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-4 font-mono leading-relaxed">
                  {pub.authors.map((author, index) => {
                    const isDikshant = author.includes('Dikshant') || author.includes('Sagar');
                    return (
                      <span key={index}>
                        {isDikshant ? (
                          <span className="text-[var(--text-primary)] font-bold underline decoration-blue-500 decoration-2">
                            {author}
                          </span>
                        ) : (
                          <span>{author}</span>
                        )}
                        {index < pub.authors.length - 1 && ', '}
                      </span>
                    );
                  })}
                </p>

                {/* Key Result Takeaway */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  <span className="text-[var(--text-primary)] font-semibold">Key Significance: </span>
                  {pub.summary}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[var(--border-subtle)]">
                {pub.pdfUrl && (
                  <a
                    href={pub.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 pl-4 pr-1.5 py-1 rounded-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] text-xs font-semibold hover:opacity-90 transition-all duration-300 shadow-sm active:scale-[0.98]"
                  >
                    <span>Download PDF</span>
                    <span className="w-6 h-6 rounded-full bg-[var(--btn-primary-text)] text-[var(--btn-primary-bg)] flex items-center justify-center transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                      <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                    </span>
                  </a>
                )}

                {pub.externalUrl && (
                  <a
                    href={pub.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bezel-outer-bg)] hover:bg-[var(--bg-surface-elevated)] text-xs font-medium text-[var(--text-primary)] transition-all duration-300"
                  >
                    <span>ArXiv / Publisher</span>
                    <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" strokeWidth={1.5} />
                  </a>
                )}

                <button
                  onClick={() => setSelectedBibtexPub(pub)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bezel-outer-bg)] hover:bg-[var(--bg-surface-elevated)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-300 cursor-pointer"
                >
                  <Quote className="w-3 h-3 text-[var(--text-muted)]" strokeWidth={1.5} />
                  <span>BibTeX</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* BibTeX Modal */}
      <BibtexModal
        publication={selectedBibtexPub}
        onClose={() => setSelectedBibtexPub(null)}
      />
    </section>
  );
};
