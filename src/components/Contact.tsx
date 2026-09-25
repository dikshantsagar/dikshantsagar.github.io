import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  Phone,
  GraduationCap,
  Github,
  Linkedin,
  ArrowUpRight
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto rounded-3xl card-surface p-8 sm:p-14 text-center backdrop-blur-xl shadow-2xl relative overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/10 blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-xs font-mono mb-4">
          <Mail className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
          Interested in working together?
        </h2>

        <p className="text-[var(--text-secondary)] text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          I am currently seeking <span className="text-cyan-600 dark:text-cyan-300 font-medium">ML / AI research and industry internships</span>. I am also always open to exploring research collaborations at the intersection of foundation models, biomedicine, and physics.
        </p>

        {/* Primary Contact Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10 text-left">
          {/* Email card */}
          <div className="p-4 sm:p-5 rounded-2xl card-inner-box hover:border-cyan-400/40 transition-all flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block font-medium">
                  Email
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs font-mono text-[var(--text-primary)] group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <button
              onClick={copyEmail}
              className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
              title="Copy email"
            >
              {copiedEmail ? (
                <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Phone card */}
          <div className="p-4 sm:p-5 rounded-2xl card-inner-box hover:border-cyan-400/40 transition-all flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block font-medium">
                  Phone
                </span>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-xs font-mono text-[var(--text-primary)] group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            <button
              onClick={copyPhone}
              className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
              title="Copy phone"
            >
              {copiedPhone ? (
                <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Location / University card */}
          <div className="p-4 sm:p-5 rounded-2xl card-inner-box flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block font-medium">
                Affiliation
              </span>
              <span className="text-xs text-[var(--text-primary)] font-medium">
                UC Irvine • Baldi Lab
              </span>
            </div>
          </div>
        </div>

        {/* Quick Email Launcher Button */}
        <div className="mb-10">
          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=Internship%20Opportunity%20%2F%20Research%20Inquiry%20-%20Dikshant%20Sagar`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-all duration-200 shadow-xl shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Send className="w-4 h-4" />
            <span>Send Direct Message</span>
          </a>
        </div>

        {/* Social / Scholar Profile Links */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--text-secondary)]">
          <a
            href="https://scholar.google.com/citations?user=6FOyM3IAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors font-medium"
          >
            <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Google Scholar Profile</span>
            <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
          </a>

          <a
            href="https://github.com/dikshantsagar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors font-medium"
          >
            <Github className="w-4 h-4 text-[var(--text-secondary)]" />
            <span>GitHub Repository</span>
            <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
          </a>

          <a
            href="https://www.linkedin.com/in/dikshantsagar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors font-medium"
          >
            <Linkedin className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>LinkedIn Profile</span>
            <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
          </a>
        </div>
      </div>
    </section>
  );
};
