import React, { useState } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { portfolio } from "../data/portfolio";
import { Github, Linkedin, Mail, Copy, Check, Terminal, ExternalLink, FileText, Phone } from "lucide-react";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    if (!portfolio.contact.email) return;
    navigator.clipboard.writeText(portfolio.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyPhone = () => {
    if (!portfolio.contact.phone) return;
    navigator.clipboard.writeText(portfolio.contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative z-10" aria-label="Contact Section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="COMMUNICATION CHANNELS"
          title={portfolio.contact.heading}
          description={portfolio.contact.subheading}
          align="center"
        />

        <div className="max-w-3xl mx-auto">
          {/* Main Terminal Card */}
          <div className="rounded-xl bg-[#0b0d14] border border-orange-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-4 mb-8 border-b border-white/10 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-orange-400" />
                <span className="text-white font-semibold">CONNECT::DISPATCH_STREAM</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ACTIVE</span>
              </div>
            </div>

            {/* Grid of contact routes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {/* GitHub Card */}
              <a
                href={portfolio.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-[#11141e] border border-white/10 hover:border-orange-500/50 transition-all flex items-center justify-between group focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-[#181c28] border border-white/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-500/10 group-hover:border-orange-500/40 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">
                      GitHub
                    </div>
                    <div className="text-xs font-mono text-slate-400">
                      @tejamanchem
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-orange-400 group-hover:translate-x-0.5 transition-all" />
              </a>

              {/* LinkedIn Card */}
              {portfolio.contact.linkedin && (
                <a
                  href={portfolio.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-[#11141e] border border-white/10 hover:border-orange-500/50 transition-all flex items-center justify-between group focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-[#181c28] border border-white/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-500/10 group-hover:border-orange-500/40 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">
                        LinkedIn
                      </div>
                      <div className="text-xs font-mono text-slate-400">
                        Professional Profile
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-orange-400 group-hover:translate-x-0.5 transition-all" />
                </a>
              )}

              {/* Twitter / X Card */}
              {portfolio.contact.twitter && (
                <a
                  href={portfolio.contact.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-[#11141e] border border-white/10 hover:border-orange-500/50 transition-all flex items-center justify-between group focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-[#181c28] border border-white/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-500/10 group-hover:border-orange-500/40 transition-colors">
                      <svg className="w-4 h-4 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">
                        X
                      </div>
                      <div className="text-xs font-mono text-slate-400">
                        @Teja31962915
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-orange-400 group-hover:translate-x-0.5 transition-all" />
                </a>
              )}
            </div>

            {/* Email Dispatch Card */}
            {portfolio.contact.email ? (
              <div className="p-4 rounded-lg bg-[#11141e] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-[#181c28] border border-white/10 flex items-center justify-center text-orange-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">
                      Direct Inquiries
                    </div>
                    <div className="text-sm font-bold text-white font-mono">
                      {portfolio.contact.email}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-2 rounded bg-[#171b26] hover:bg-[#202534] text-xs font-mono text-slate-300 hover:text-white border border-white/10 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${portfolio.contact.email}`}
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded bg-orange-600 hover:bg-orange-500 text-xs font-mono text-white font-semibold transition-colors"
                  >
                    <span>Send Mail</span>
                  </a>
                </div>
              </div>
            ) : null}

            {/* Direct Phone / Call Card */}
            {portfolio.contact.phone ? (
              <div className="mt-3 p-4 rounded-lg bg-[#11141e] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-[#181c28] border border-white/10 flex items-center justify-center text-orange-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">
                      Direct Phone
                    </div>
                    <div className="text-sm font-bold text-white font-mono">
                      {portfolio.contact.phone}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleCopyPhone}
                    type="button"
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-2 rounded bg-[#171b26] hover:bg-[#202534] text-xs font-mono text-slate-300 hover:text-white border border-white/10 transition-colors"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Number</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`tel:${portfolio.contact.phone.replace(/\s+/g, "")}`}
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded bg-orange-600 hover:bg-orange-500 text-xs font-mono text-white font-semibold transition-colors"
                  >
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            ) : null}

            {/* Direct Resume Document Action */}
            <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-[#101420] via-[#141824] to-[#121520] border border-orange-500/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-[#181c28] border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-orange-400 uppercase tracking-wider">
                    Official Resume (ATS-Optimized &bull; Printable)
                  </div>
                  <div className="text-sm font-bold text-white">
                    Teja Sai Manikanta Manchem &bull; SDE2
                  </div>
                </div>
              </div>

              <a
                href={`${import.meta.env.BASE_URL}resume.html`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-mono text-xs font-bold transition-all shadow-[0_0_12px_rgba(249,115,22,0.3)]"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>OPEN RESUME</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>

            {/* Availability Footer Note */}
            <div className="mt-8 pt-4 border-t border-white/5 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-slate-500">
              <span className="text-orange-400/90">
                {portfolio.contact.status}
              </span>
              <span>{portfolio.contact.responseMessage}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
