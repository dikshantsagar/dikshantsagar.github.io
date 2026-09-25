import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { Download, Menu, X, ArrowUpRight, FileText, Sun, Moon } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'research-focus', 'publications', 'experience', 'projects', 'skills', 'awards', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Research', href: '#research-focus', id: 'research-focus' },
    { label: 'Publications', href: '#publications', id: 'publications' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Honors', href: '#awards', id: 'awards' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-2 rounded-full bg-[var(--nav-bg)] backdrop-blur-xl border border-[var(--nav-border)] shadow-2xl">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="group flex flex-col text-left transition-colors shrink-0"
          aria-label="Dikshant Sagar - Back to top"
        >
          <span className="font-semibold text-sm sm:text-base tracking-tight text-[var(--text-primary)] group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors">
            {PERSONAL_INFO.name}
          </span>
          <span className="font-mono text-[10px] sm:text-[10.5px] text-cyan-600 dark:text-cyan-400 font-medium whitespace-nowrap">
            Ph.D. Researcher • UC Irvine
          </span>
        </a>

        {/* Desktop Navigation Links: visible on laptop/desktop viewports */}
        <nav className="hidden xl:flex items-center gap-1 bg-[var(--nav-pill-bg)] border border-[var(--border-subtle)] rounded-full p-1 shadow-md mx-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`inline-flex items-center text-xs px-3.5 py-1.5 rounded-full font-medium transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'text-cyan-600 dark:text-cyan-300 bg-cyan-500/10 dark:bg-white/10 border border-cyan-500/30 dark:border-cyan-400/40 shadow-inner'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/[0.08] border border-transparent'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Theme Toggle & Download CV */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-1.5 sm:p-2 rounded-full border border-[var(--border-subtle)] bg-[var(--card-inner)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer shadow-sm shrink-0"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300 hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700 hover:-rotate-12 transition-transform" />
            )}
          </button>

          {/* Download CV */}
          <a
            href={PERSONAL_INFO.cvPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="CV_Dikshant_Sagar.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-all duration-200 shadow-sm shrink-0 whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 sm:p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors shrink-0"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden mt-2 p-5 rounded-2xl bg-[var(--nav-bg)] backdrop-blur-2xl border border-[var(--nav-border)] shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 max-w-7xl mx-auto">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border-subtle)]">
            <span className="font-semibold text-sm text-[var(--text-primary)]">
              Navigation
            </span>

            <button
              onClick={toggleTheme}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--card-inner)] text-xs font-mono text-[var(--text-secondary)]"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-300" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-slate-700" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>

          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-cyan-600 dark:text-cyan-300 bg-cyan-500/10 dark:bg-white/10 border border-cyan-500/30 dark:border-cyan-400/30 font-semibold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-[var(--border-subtle)] flex flex-col gap-2.5">
            <a
              href={PERSONAL_INFO.cvPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="CV_Dikshant_Sagar.pdf"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-cyan-400 text-slate-900 text-sm font-semibold hover:bg-cyan-300 transition-colors shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>

            <a
              href="mailto:dikshans@uci.edu"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm font-medium transition-colors border border-[var(--border-subtle)]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
