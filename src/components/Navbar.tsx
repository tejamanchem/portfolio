import React, { useState, useEffect } from "react";
import { Menu, X, Terminal, Github, Linkedin, FileText, ExternalLink } from "lucide-react";
import { portfolio } from "../data/portfolio";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Engineering", href: "#engineering" },
    { name: "Architecture", href: "#architecture" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050608]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-white group focus-visible:ring-2 focus-visible:ring-orange-500 rounded px-1.5 py-1 focus-visible:outline-none"
          aria-label={`${portfolio.name} - Home`}
        >
          <div className="w-8 h-8 rounded bg-[#12151e] border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:border-orange-500 transition-colors shadow-[0_0_12px_rgba(249,115,22,0.15)]">
            <Terminal className="w-4 h-4 text-orange-400" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono font-bold tracking-wider text-base text-white group-hover:text-orange-400 transition-colors">
              {portfolio.name}
            </span>
            <span className="font-mono text-[10px] text-slate-400 tracking-tight flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              FULL-STACK ARCHITECT
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs font-mono tracking-wide text-slate-300 hover:text-orange-400 transition-colors rounded-md hover:bg-white/[0.04] focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
            >
              {link.name}
            </a>
          ))}

          <div className="h-4 w-px bg-white/10 mx-2" />

          {/* GitHub quick link */}
          <a
            href={portfolio.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-slate-300 hover:text-white bg-[#11141c] hover:bg-[#181c28] border border-white/10 hover:border-orange-500/40 rounded-md transition-all focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
            aria-label="GitHub Profile"
          >
            <Github className="w-3.5 h-3.5 text-orange-400" />
            <span>GitHub</span>
          </a>

          {/* LinkedIn quick link */}
          {portfolio.socialLinks.linkedin && (
            <a
              href={portfolio.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-slate-300 hover:text-white bg-[#11141c] hover:bg-[#181c28] border border-white/10 hover:border-orange-500/40 rounded-md transition-all focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5 text-orange-400" />
              <span>LinkedIn</span>
            </a>
          )}

          {/* Twitter / X quick link */}
          {portfolio.socialLinks.twitter && (
            <a
              href={portfolio.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-slate-300 hover:text-white bg-[#11141c] hover:bg-[#181c28] border border-white/10 hover:border-orange-500/40 rounded-md transition-all focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
              aria-label="Twitter / X Profile"
            >
              <svg className="w-3.5 h-3.5 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>X</span>
            </a>
          )}

          {/* View Resume Action */}
          <a
            href={`${import.meta.env.BASE_URL}resume.html`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 rounded-md transition-all shadow-[0_0_12px_rgba(249,115,22,0.35)] hover:shadow-[0_0_16px_rgba(249,115,22,0.6)] focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none ml-1"
            aria-label="View Resume (opens in separate page)"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden gap-1.5">
          <a
            href={`${import.meta.env.BASE_URL}resume.html`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 text-xs font-mono font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 rounded-md flex items-center gap-1 shadow-[0_0_10px_rgba(249,115,22,0.3)]"
            aria-label="View Resume"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
          <a
            href={portfolio.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-300 hover:text-white bg-[#11141c] border border-white/10 rounded-md"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4 text-orange-400" />
          </a>
          {portfolio.socialLinks.linkedin && (
            <a
              href={portfolio.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-300 hover:text-white bg-[#11141c] border border-white/10 rounded-md"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-orange-400" />
            </a>
          )}
          {portfolio.socialLinks.twitter && (
            <a
              href={portfolio.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-300 hover:text-white bg-[#11141c] border border-white/10 rounded-md"
              aria-label="Twitter / X Profile"
            >
              <svg className="w-4 h-4 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 rounded-md bg-[#11141c] text-slate-300 hover:text-white border border-white/10 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-[60px] bg-[#080a0f]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 shadow-2xl transition-all"
          role="dialog"
          aria-label="Mobile Navigation Menu"
        >
          <div className="flex flex-col space-y-3">
            <div className="text-[11px] font-mono text-orange-400/80 uppercase tracking-widest pb-1 border-b border-white/5">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-mono text-slate-200 hover:text-orange-400 hover:bg-white/[0.04] rounded-md transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-slate-600 font-mono">→</span>
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <a
                href={`${import.meta.env.BASE_URL}resume.html`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-mono font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 rounded-md shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>VIEW RESUME (PDF)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href={portfolio.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-mono text-white bg-[#171b26] border border-orange-500/30 rounded-md hover:border-orange-500 transition-colors"
              >
                <Github className="w-4 h-4 text-orange-400" />
                <span>github.com/tejamanchem</span>
              </a>

              {portfolio.socialLinks.linkedin && (
                <a
                  href={portfolio.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2 text-xs font-mono text-white bg-[#171b26] border border-orange-500/30 rounded-md hover:border-orange-500 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-orange-400" />
                  <span>LinkedIn Profile</span>
                </a>
              )}

              {portfolio.socialLinks.twitter && (
                <a
                  href={portfolio.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2 text-xs font-mono text-white bg-[#171b26] border border-orange-500/30 rounded-md hover:border-orange-500 transition-colors"
                >
                  <svg className="w-4 h-4 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span>X Profile</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
