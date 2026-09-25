import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ScientificCanvas } from './ScientificCanvas';
import {
  FileText,
  ArrowRight,
  ExternalLink,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  Check,
  Copy,
  Building,
  MapPin
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
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 sm:pt-36 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Dynamic Scientific Particle / Neural Manifold Background */}
      <ScientificCanvas />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-300 text-xs font-mono mb-8 backdrop-blur-md shadow-lg shadow-emerald-950/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 dark:bg-emerald-400"></span>
          </span>
          <span className="font-medium tracking-wide">
            Actively seeking ML/AI Research & Industry Internships
          </span>
        </div>

        {/* Profile Avatar & Affiliation Badges */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full blur-md opacity-35 group-hover:opacity-70 transition duration-500" />
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-white/50 dark:border-white/30 shadow-2xl bg-slate-900">
              <img
                src="./images/profile_avatar.jpg"
                srcSet="./images/profile_avatar.jpg 1x, ./images/profile.jpg 2x"
                alt={PERSONAL_INFO.name}
                width="128"
                height="128"
                className="w-full h-full object-cover object-top"
                style={{ imageRendering: 'auto' }}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          <div className="text-center sm:text-left">
            {/* Split responsive badges on mobile to prevent awkward wrapping */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full card-inner-box text-xs font-mono text-cyan-600 dark:text-cyan-300 shadow-sm">
                <Building className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400 shrink-0" />
                <span className="font-medium whitespace-nowrap">UC Irvine • Baldi Lab</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full card-inner-box text-xs font-mono text-[var(--text-secondary)] shadow-sm">
                <span className="whitespace-nowrap">Advisor: <span className="text-[var(--text-primary)] font-semibold">Dr. Pierre Baldi</span></span>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-[var(--text-muted)] font-mono">
              <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </div>

        {/* Name with subtle editorial tracking */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] mb-6 max-w-4xl">
          Hi, I'm <span className="text-gradient-cyan">{PERSONAL_INFO.name}</span>.
        </h1>

        {/* Researcher Identity & Value Proposition - Biomedicine Priority */}
        <p className="text-lg sm:text-xl lg:text-2xl font-light text-[var(--text-primary)] max-w-3xl mb-8 md:mb-4 leading-relaxed">
          Ph.D. Researcher developing <span className="text-cyan-600 dark:text-cyan-300 font-medium">Multimodal Biomedical AI</span>,{' '}
          <span className="text-indigo-600 dark:text-indigo-300 font-medium">physics-guided generative diffusion</span>, and{' '}
          <span className="text-emerald-600 dark:text-emerald-300 font-medium">vision-language foundation models</span> for frontier scientific discovery.
        </p>

        <p className="hidden md:block text-sm sm:text-base text-[var(--text-muted)] max-w-2xl mb-10 leading-relaxed">
          Pioneering deep learning solutions in biomedicine (cellular phenotyping, de novo drug discovery, digital pathology, neurospectroscopy) and high-energy particle physics (CERN / Fermilab neutrino experiments). Author of 15+ peer-reviewed papers across Nature Communications Physics, Cytometry A, and NeurIPS workshops.
        </p>

        {/* Primary Action Buttons (Row 1) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6">
          <a
            href="#research-focus"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Research</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.cvPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="CV_Dikshant_Sagar.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-[var(--text-primary)] card-surface hover:border-cyan-400/50 transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Download CV (PDF)</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-[var(--text-secondary)] card-surface hover:text-[var(--text-primary)] transition-all duration-200 cursor-pointer"
            title="Copy email to clipboard"
          >
            {copiedEmail ? (
              <>
                <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                <span className="text-emerald-600 dark:text-emerald-300 text-xs font-mono font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span className="text-xs font-mono text-[var(--text-primary)]">dikshans@uci.edu</span>
                <Copy className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              </>
            )}
          </button>
        </div>

        {/* Social / Scholar Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[var(--text-secondary)] mt-4 mb-14">
          <a
            href="https://scholar.google.com/citations?user=6FOyM3IAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full card-surface hover:border-cyan-400/50 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all"
          >
            <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="font-medium">Google Scholar</span>
            <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
          </a>

          <a
            href="https://github.com/dikshantsagar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full card-surface hover:border-cyan-400/50 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all"
          >
            <Github className="w-4 h-4 text-[var(--text-secondary)]" />
            <span className="font-medium">GitHub</span>
            <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
          </a>

          <a
            href="https://www.linkedin.com/in/dikshantsagar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full card-surface hover:border-cyan-400/50 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all"
          >
            <Linkedin className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="font-medium">LinkedIn</span>
            <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
          </a>
        </div>

        {/* Highlight Stats Strip - with robust vertical centering */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl card-surface shadow-lg flex flex-col items-center justify-center text-center hover:border-cyan-500/40 transition-all min-h-[110px]"
            >
              <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-600 dark:text-cyan-300 mb-1.5 tracking-tight leading-none">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs text-[var(--text-muted)] uppercase tracking-wider font-mono leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
