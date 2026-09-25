import React, { useState } from 'react';
import { PUBLICATIONS, Publication } from '../data/portfolioData';
import { BibtexModal } from './BibtexModal';
import {
  BookOpen,
  FileDown,
  ExternalLink,
  Quote,
  Search,
  Award,
  GraduationCap
} from 'lucide-react';

export const Publications: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'highlight' | 'biomedicine' | 'vlm-physics'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBibtexPub, setSelectedBibtexPub] = useState<Publication | null>(null);

  const categories = [
    { id: 'all', label: 'All Publications' },
    { id: 'highlight', label: 'Selected Highlights' },
    { id: 'biomedicine', label: 'Biomedicine & Clinical AI' },
    { id: 'vlm-physics', label: 'VLMs & Particle Physics' }
  ];

  const filteredPublications = PUBLICATIONS.filter((pub) => {
    const matchesCategory =
      activeCategory === 'all' ||
      pub.category === activeCategory ||
      (activeCategory === 'highlight' && (pub.award || pub.impactFactor));

    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      pub.title.toLowerCase().includes(q) ||
      pub.venue.toLowerCase().includes(q) ||
      pub.authors.some((a) => a.toLowerCase().includes(q)) ||
      pub.summary.toLowerCase().includes(q) ||
      pub.technicalDetails.toLowerCase().includes(q);

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="publications" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-300 text-xs font-mono mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Peer-Reviewed Literature</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
          Selected Research & Publications
        </h2>
        <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
          15+ peer-reviewed papers spanning multimodal biomedical representation learning, physics-informed generative AI, and vision-language foundation models.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 dark:bg-cyan-400 text-white dark:text-slate-900 font-semibold shadow-md shadow-cyan-500/20'
                  : 'card-surface text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-slate-300 dark:hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search papers, methods, topics..."
            className="w-full pl-10 pr-8 py-2.5 rounded-xl card-surface border-[var(--border-subtle)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-cyan-400 shadow-inner transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Publications List */}
      <div className="space-y-6">
        {filteredPublications.map((pub) => {
          return (
            <article
              key={pub.id}
              className="group p-6 sm:p-8 rounded-2xl card-surface hover:border-cyan-500/40 shadow-xl transition-all duration-200 text-left"
            >
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-md card-inner-box border-cyan-500/30 font-mono text-xs text-cyan-600 dark:text-cyan-300 font-semibold">
                    {pub.venue}
                  </span>
                  <span className="font-mono text-xs text-[var(--text-muted)]">
                    {pub.year}
                  </span>

                  {pub.impactFactor && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-300 text-[11px] font-mono font-medium">
                      Impact Factor: {pub.impactFactor}
                    </span>
                  )}

                  {pub.acceptanceRate && (
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 dark:text-indigo-300 text-[11px] font-mono font-medium">
                      {pub.acceptanceRate} Acceptance
                    </span>
                  )}
                </div>

                {pub.award && (
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-300 text-xs font-mono font-semibold shadow-sm">
                    <Award className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                    <span>{pub.award}</span>
                  </div>
                )}
              </div>

              {/* Paper Title */}
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-2.5 group-hover:text-cyan-600 dark:group-hover:text-cyan-200 transition-colors leading-snug">
                {pub.title}
              </h3>

              {/* Authors List with Dikshant highlighted */}
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-5 font-mono leading-relaxed">
                {pub.authors.map((author, index) => {
                  const isDikshant = author.includes('Dikshant') || author.includes('Sagar');
                  return (
                    <span key={index}>
                      {isDikshant ? (
                        <span className="text-cyan-600 dark:text-cyan-300 font-bold underline decoration-cyan-400/60 decoration-2">
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

              {/* Plain-English summary + Technical details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-xl card-inner-box text-xs mb-5">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold block mb-1.5">
                    Significance & Takeaway
                  </span>
                  <p className="text-[var(--text-primary)] leading-relaxed">
                    {pub.summary}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold block mb-1.5">
                    Technical Contribution
                  </span>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {pub.technicalDetails}
                  </p>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {pub.pdfUrl && (
                  <a
                    href={pub.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-400 text-slate-900 text-xs font-semibold hover:bg-cyan-300 transition-colors shadow-sm"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                )}

                {pub.externalUrl && (
                  <a
                    href={pub.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl card-inner-box hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-medium transition-colors"
                  >
                    <span>Paper / Publisher</span>
                    <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
                  </a>
                )}

                {pub.arxivUrl && pub.arxivUrl !== pub.externalUrl && (
                  <a
                    href={pub.arxivUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl card-inner-box hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-medium transition-colors"
                  >
                    <span>arXiv Preprint</span>
                    <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
                  </a>
                )}

                <button
                  onClick={() => setSelectedBibtexPub(pub)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl card-inner-box hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-medium transition-colors ml-auto cursor-pointer"
                >
                  <Quote className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>BibTeX</span>
                </button>
              </div>
            </article>
          );
        })}

        {filteredPublications.length === 0 && (
          <div className="text-center py-12 rounded-2xl card-surface text-[var(--text-muted)] text-sm">
            No publications found matching "{searchQuery}".
          </div>
        )}
      </div>

      {/* Theses Section */}
      <div className="mt-14 p-6 sm:p-8 rounded-3xl card-surface shadow-xl text-left">
        <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider mb-5">
          <GraduationCap className="w-4 h-4" />
          <span>Academic Theses</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl card-inner-box">
            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400/90 block mb-1.5 font-medium">
              Master's Thesis • Cal State LA (2024)
            </span>
            <h4 className="font-bold text-sm sm:text-base text-[var(--text-primary)] mb-2 leading-snug">
              Deep Reconstruction Model for Exposing Low Concentration Metabolites in Edited-MRS Brain Scans
            </h4>
            <a
              href="https://scholarworks.calstate.edu/concern/theses/k0698h814"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 font-medium"
            >
              <span>View CSULA Thesis Archive</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="p-5 rounded-2xl card-inner-box">
            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400/90 block mb-1.5 font-medium">
              B.Tech Thesis • IIIT Delhi (2021)
            </span>
            <h4 className="font-bold text-sm sm:text-base text-[var(--text-primary)] mb-2 leading-snug">
              Multiple Myeloma Cancer Cell Instance Segmentation from Bone Marrow Aspirate Slides
            </h4>
            <a
              href="https://arxiv.org/abs/2110.04275"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 font-medium"
            >
              <span>View arXiv:2110.04275</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* BibTeX Modal */}
      <BibtexModal
        publication={selectedBibtexPub}
        onClose={() => setSelectedBibtexPub(null)}
      />
    </section>
  );
};
