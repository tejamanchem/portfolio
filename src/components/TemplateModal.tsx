import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, Download, FileText, Sparkles, Check, Copy, Terminal, FileCode } from "lucide-react";

interface TemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TemplateModal: React.FC<TemplateModalProps> = ({ isOpen, onClose }) => {
  const [copiedCmd, setCopiedCmd] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickStartCode = `git clone https://github.com/tejamanchem/portfolio.git my-portfolio
cd my-portfolio
npm install
npm run dev`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(quickStartCode);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  const zipDownloadUrl = `${import.meta.env.BASE_URL}downloads/portfolio-starter-template.zip`;
  const resumeDownloadUrl = `${import.meta.env.BASE_URL}downloads/resume-starter-template.html`;
  const configDownloadUrl = `${import.meta.env.BASE_URL}downloads/portfolio-config-template.json`;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="template-modal-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-[#0c0f18] border border-orange-500/40 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_40px_rgba(249,115,22,0.18)] flex flex-col overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-72 h-32 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-white/10 bg-[#0e121d]/90 backdrop-blur-sm flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
              <span className="font-mono text-[11px] text-orange-400 font-semibold uppercase tracking-wider">
                Open Source Starter Kits
              </span>
            </div>
            <h2 id="template-modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Build Your Own Portfolio &amp; Resume
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Download the exact starter template, plug in your details, and launch your engineering portfolio in 3 minutes.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10 shrink-0"
            aria-label="Close Template Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-scroll overflow-y-auto px-6 sm:px-8 py-6 space-y-6 flex-1 text-sm">
          {/* Download Options Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1: Full Portfolio ZIP */}
            <div className="p-4 rounded-xl bg-[#10131e] border border-orange-500/30 hover:border-orange-500/60 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-3">
                  <Download className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base mb-1 group-hover:text-orange-400 transition-colors">
                  Portfolio Starter Kit
                </h3>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/15 text-orange-300 mb-2">
                  Complete Project (.ZIP · 1.3 MB)
                </span>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Full React 18 + Vite + Tailwind CSS codebase with interactive deep-dive architecture modals, ATS resume generator, and laser scrollbars.
                </p>
              </div>

              <a
                href={zipDownloadUrl}
                download="portfolio-starter-template.zip"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(249,115,22,0.3)]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .ZIP</span>
              </a>
            </div>

            {/* Card 2: Standalone ATS Resume HTML */}
            <div className="p-4 rounded-xl bg-[#10131e] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base mb-1 group-hover:text-blue-400 transition-colors">
                  ATS Resume Template
                </h3>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/15 text-blue-300 mb-2">
                  Standalone File (.HTML)
                </span>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Single-file, ATS-scannable resume template with built-in 1-click "Print / Save as PDF", clean typography, and zero dependencies.
                </p>
              </div>

              <a
                href={resumeDownloadUrl}
                download="resume-starter-template.html"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#181d2a] hover:bg-[#22293b] text-slate-200 hover:text-white font-mono text-xs font-semibold border border-white/10 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .HTML</span>
              </a>
            </div>
          </div>

          {/* Quick Raw Config JSON option */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-[#0f1320] border border-emerald-500/20 text-xs">
            <div className="flex items-center gap-2.5 text-slate-300">
              <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                <FileCode className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-slate-200">Raw Data Schema Template</p>
                <p className="text-[11px] text-slate-400">Just the raw JSON data structure for projects, skills, and experience</p>
              </div>
            </div>
            <a
              href={configDownloadUrl}
              download="portfolio-config-template.json"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-mono text-[11px] font-semibold border border-emerald-500/30 transition-colors self-start sm:self-auto shrink-0"
            >
              <Download className="w-3 h-3" />
              <span>Download .JSON</span>
            </a>
          </div>

          {/* Quick Terminal Command */}
          <div className="rounded-xl bg-[#080a11] border border-white/10 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                <Terminal className="w-4 h-4 text-orange-400" />
                <span>Or Clone Directly with Git</span>
              </div>
              <button
                onClick={handleCopyCode}
                type="button"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#131724] hover:bg-[#1a2032] text-[11px] font-mono text-slate-300 hover:text-white border border-white/10 transition-colors"
              >
                {copiedCmd ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Command</span>
                  </>
                )}
              </button>
            </div>
            <pre className="font-mono text-xs text-orange-300/90 bg-[#05060b] p-3 rounded-lg border border-white/5 overflow-x-auto">
              <code>{quickStartCode}</code>
            </pre>
          </div>

          {/* 3-Step Setup Instructions */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <span>🚀 3 Simple Steps to Make It Yours</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#0d101a] border border-white/5 space-y-1">
                <div className="font-mono text-orange-400 font-bold">01. Unpack &amp; Install</div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Extract the ZIP and run <code className="text-orange-300 font-mono">npm install</code> to install dependencies.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-[#0d101a] border border-white/5 space-y-1">
                <div className="font-mono text-orange-400 font-bold">02. Add Your Info</div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Open <code className="text-orange-300 font-mono">src/data/portfolio.ts</code> and update your name, bio, skills &amp; projects.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-[#0d101a] border border-white/5 space-y-1">
                <div className="font-mono text-orange-400 font-bold">03. Build &amp; Deploy</div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Run <code className="text-orange-300 font-mono">npm run build</code> and host for free on Vercel, Netlify, or GitHub Pages.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#0e121d]/95 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>100% Free &amp; Open Source (MIT)</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-[#161a28] hover:bg-[#202538] text-white font-mono text-xs rounded-lg transition-colors border border-white/10"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
