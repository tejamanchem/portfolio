import React from "react";
import { Terminal, Github, Linkedin, Mail, ArrowUp, Activity } from "lucide-react";
import { portfolio } from "../data/portfolio";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#040507] border-t border-white/10 text-slate-400 text-xs font-mono py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Title */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="flex items-center gap-2 text-white font-bold tracking-wider">
            <Terminal className="w-4 h-4 text-orange-400" />
            <span>{portfolio.name}</span>
            <span className="text-slate-600">/</span>
            <span className="text-orange-400/90 font-normal text-xs">{portfolio.title}</span>
          </div>
          <div className="text-[11px] text-slate-500">
            © {currentYear} {portfolio.name}. Built with React & TypeScript.
          </div>
        </div>

        {/* System Uptime status */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#090c12] border border-white/5 text-[11px]">
          <Activity className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-slate-400">STATUS:</span>
          <span className="text-emerald-400">SERVICES OPTIMAL</span>
        </div>

        {/* Links & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={portfolio.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4 text-orange-400" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          {portfolio.socialLinks.linkedin && (
            <a
              href={portfolio.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-orange-400" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          )}

          {portfolio.socialLinks.twitter && (
            <a
              href={portfolio.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
              aria-label="Twitter / X Profile"
            >
              <svg className="w-4 h-4 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="hidden sm:inline">Twitter / X</span>
            </a>
          )}

          {portfolio.socialLinks.email && (
            <a
              href={`mailto:${portfolio.socialLinks.email}`}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-4 h-4 text-orange-400" />
              <span className="hidden sm:inline">Email</span>
            </a>
          )}

          <div className="h-3 w-px bg-white/10" />

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 text-slate-400 hover:text-orange-400 transition-colors p-1"
            aria-label="Scroll back to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
