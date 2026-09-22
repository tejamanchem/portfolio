import React, { useState } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { Download, Sparkles, Terminal, FileText, Check, Copy, Code2, Layers, ShieldCheck } from "lucide-react";

interface TemplateSectionProps {
  onOpenTemplate: () => void;
}

export const TemplateSection: React.FC<TemplateSectionProps> = ({ onOpenTemplate }) => {
  const [copied, setCopied] = useState(false);

  const quickCloneCmd = "git clone https://github.com/tejamanchem/portfolio.git my-portfolio";

  const handleCopy = () => {
    navigator.clipboard.writeText(quickCloneCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const zipDownloadUrl = `${import.meta.env.BASE_URL}downloads/portfolio-starter-template.zip`;
  const resumeDownloadUrl = `${import.meta.env.BASE_URL}downloads/resume-starter-template.html`;

  return (
    <section id="template" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="OPEN SOURCE STARTER KIT"
          title="Build Your Own Portfolio & Resume"
          description="Loved this portfolio? Want to own it? Everything you see here is modular, open-source, and ready to deploy in under 3 minutes."
        />

        {/* Dedicated Showcase Tile / Card */}
        <div className="mt-12 rounded-2xl bg-gradient-to-b from-[#0f1320] via-[#0c0f18] to-[#07090f] border border-orange-500/35 hover:border-orange-500/60 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(249,115,22,0.12)] p-6 sm:p-10 relative overflow-hidden transition-all duration-300">
          {/* Subtle Top-Right Flare */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Narrative & Value Proposition */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 animate-pulse text-orange-400" />
                <span>Loved this portfolio? Want to make it yours?</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Clone, Customize &amp; Launch Your Personal Engineering Brand
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Skip building from scratch. Take this exact production portfolio template—pre-packaged with React 18, Vite, Tailwind CSS, interactive architecture deep-dive cards, ATS resume generator, and real-time GitHub telemetry. Simply replace the data in <code className="text-orange-300 font-mono bg-orange-500/10 px-1.5 py-0.5 rounded text-xs border border-orange-500/20">src/data/portfolio.ts</code> and ship your site today!
              </p>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#121624]/80 border border-white/5">
                  <div className="p-1 rounded bg-orange-500/10 text-orange-400 mt-0.5 shrink-0">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs font-bold text-white">React 18 + Vite + Tailwind</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Ultra-fast build pipeline with instant HMR and full TypeScript typing.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#121624]/80 border border-white/5">
                  <div className="p-1 rounded bg-blue-500/10 text-blue-400 mt-0.5 shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs font-bold text-white">Standalone ATS Resume</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Recruiter-ready single-page resume with built-in 1-click PDF print styling.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#121624]/80 border border-white/5">
                  <div className="p-1 rounded bg-amber-500/10 text-amber-400 mt-0.5 shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs font-bold text-white">Deep-Dive Architecture Modals</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Non-colliding portal modals with scrollbars for showcasing system designs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#121624]/80 border border-white/5">
                  <div className="p-1 rounded bg-emerald-500/10 text-emerald-400 mt-0.5 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs font-bold text-white">100% Free &amp; Open Source</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">MIT licensed. Host for free on Vercel, Netlify, or GitHub Pages forever.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Download Card & Terminal Action */}
            <div className="lg:col-span-5 space-y-4">
              {/* Primary Action Box */}
              <div className="p-5 rounded-xl bg-[#111522] border border-orange-500/30 space-y-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-orange-500 animate-ping" />
                    <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider">
                      Turnkey Starter Kit
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                    v1.0.0 · 1.3 MB
                  </span>
                </div>

                <div className="space-y-2">
                  <a
                    href={zipDownloadUrl}
                    download="portfolio-starter-template.zip"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_18px_rgba(249,115,22,0.35)] hover:shadow-[0_0_24px_rgba(249,115,22,0.6)]"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Full Template (.ZIP)</span>
                  </a>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={resumeDownloadUrl}
                      download="resume-starter-template.html"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#171c2b] hover:bg-[#20273c] text-slate-200 hover:text-white font-mono text-[11px] font-semibold border border-white/10 transition-colors text-center"
                    >
                      <FileText className="w-3.5 h-3.5 text-blue-400" />
                      <span>ATS Resume (.HTML)</span>
                    </a>

                    <button
                      type="button"
                      onClick={onOpenTemplate}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#171c2b] hover:bg-[#20273c] text-orange-300 hover:text-white font-mono text-[11px] font-semibold border border-orange-500/30 hover:border-orange-500/60 transition-colors text-center"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                      <span>View All Options</span>
                    </button>
                  </div>
                </div>

                {/* Git Clone Snippet */}
                <div className="pt-2 border-t border-white/10">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Terminal className="w-3 h-3 text-orange-400" />
                      <span>Or clone repo via terminal</span>
                    </span>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="flex items-center gap-1 text-[10px] font-mono text-slate-400 hover:text-orange-300 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="font-mono text-[11px] text-orange-300/90 bg-[#070910] p-2.5 rounded border border-white/5 overflow-x-auto select-all">
                    <code>{quickCloneCmd}</code>
                  </pre>
                </div>
              </div>

              {/* 3 Step Micro Flow */}
              <div className="p-3.5 rounded-xl bg-[#0e121d]/80 border border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="text-orange-400 font-semibold">1. Unzip</span>
                <span>→</span>
                <span className="text-slate-200">2. Edit portfolio.ts</span>
                <span>→</span>
                <span className="text-emerald-400 font-semibold">3. Deploy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
