import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { FileText, Sun, Moon, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'research-focus', 'publications', 'experience', 'projects', 'skills', 'education', 'contact'];
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
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <>
      {/* Floating Fluid Island Nav */}
      <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl">
        <div className="flex items-center justify-between gap-2 sm:gap-4 px-3.5 sm:px-5 lg:px-6 py-2.5 sm:py-3 rounded-full bg-[var(--nav-bg)] backdrop-blur-2xl border border-[var(--nav-border)] shadow-lg dark:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
          {/* Identity */}
          <a
            href="#hero"
            className="flex items-center gap-2 group text-left shrink-0 pl-1"
            aria-label="Dikshant Sagar - Back to top"
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600 dark:bg-blue-500 group-hover:scale-125 transition-transform duration-300" />
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base tracking-tight text-[var(--text-primary)] leading-tight whitespace-nowrap">
                {PERSONAL_INFO.name}
              </span>
              <span className="hidden xl:inline font-mono text-[10px] text-[var(--text-muted)] leading-none mt-0.5">
                Ph.D. Researcher @ UC Irvine
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-xs xl:text-[13px] px-2.5 xl:px-3 py-1.5 rounded-full font-medium transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] whitespace-nowrap ${
                    isActive
                      ? 'text-[var(--text-primary)] bg-[var(--bezel-outer-bg)] border border-[var(--border-subtle)] font-semibold shadow-xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bezel-outer-bg)]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Theme Toggle Pill */}
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bezel-outer-bg)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-300 cursor-pointer active:scale-95 shrink-0"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" strokeWidth={1.5} />
              ) : (
                <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-700" strokeWidth={1.5} />
              )}
            </button>

            {/* Nested Button-in-Button Trailing Icon CTA */}
            <a
              href={PERSONAL_INFO.cvPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 pl-3 sm:pl-3.5 pr-1 sm:pr-1.5 py-1 sm:py-1.5 rounded-full text-xs font-semibold bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90 transition-all duration-300 shadow-sm active:scale-[0.98] shrink-0"
            >
              <span>CV</span>
              <span className="w-5 h-5 sm:w-5 sm:h-5 rounded-full bg-[var(--btn-primary-text)] text-[var(--btn-primary-bg)] flex items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105">
                <ArrowUpRight className="w-3 h-3" strokeWidth={2} />
              </span>
            </a>

            {/* Hamburger Morph Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[var(--border-subtle)] bg-[var(--bezel-outer-bg)] text-[var(--text-primary)] flex items-center justify-center transition-colors cursor-pointer active:scale-95 shrink-0"
              aria-label="Toggle Navigation"
            >
              <div className="w-4 h-3.5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    mobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    mobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    mobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Screen-Filling Glass Modal Reveal for Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-slate-950/90 dark:bg-black/90 backdrop-blur-3xl flex flex-col justify-center px-8 py-20 animate-in fade-in duration-300">
          <div className="max-w-md mx-auto w-full flex flex-col gap-6">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-400 font-semibold mb-2">
              Navigation
            </span>

            <nav className="flex flex-col gap-3">
              {navLinks.map((link, idx) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${idx * 40}ms` }}
                  className="text-2xl font-bold tracking-tight text-white/90 hover:text-white hover:translate-x-2 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-6 mt-4 border-t border-white/10 flex flex-col gap-4">
              <a
                href={PERSONAL_INFO.cvPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-between p-4 rounded-2xl bg-white/10 border border-white/15 text-white font-medium text-sm"
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-400" strokeWidth={1.5} />
                  <span>Download Curriculum Vitae</span>
                </div>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
