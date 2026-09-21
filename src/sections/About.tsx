import React from "react";
import { SectionHeader } from "../components/SectionHeader";
import { portfolio } from "../data/portfolio";
import { ArrowRight, CheckCircle2, ShieldCheck, Terminal } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative z-10" aria-label="About Section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="ENGINEERING PHILOSOPHY"
          title="Backend-Driven Full-Stack Engineering & System Architecture"
          description="Architecting resilient distributed systems, robust data layers, and asynchronous event streams — seamlessly integrated with modern full-stack product interfaces."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Core Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            {portfolio.about.bio.map((paragraph, index) => (
              <p key={index} className="text-sm sm:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Philosophy quote */}
            <div className="p-4 sm:p-5 rounded-lg bg-[#0e111a] border-l-2 border-orange-500 text-slate-200 font-mono text-xs sm:text-sm">
              <span className="text-orange-400 font-semibold block mb-1">CORE AXIOM:</span>
              "{portfolio.about.corePhilosophy}"
            </div>

            {/* Subtle Request Flow Graphic */}
            <div className="pt-4">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-orange-400" />
                <span>Standard Request Processing Pipeline</span>
              </div>
              <div className="p-4 rounded-lg bg-[#0a0c12] border border-white/10 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 font-mono text-[11px]">
                <div className="px-3 py-1.5 rounded bg-[#121520] text-sky-400 border border-white/5">
                  Client Request
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-orange-400 shrink-0 hidden sm:inline" />
                <div className="px-3 py-1.5 rounded bg-[#121520] text-orange-400 border border-white/5">
                  API Gateway / Auth
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-orange-400 shrink-0 hidden sm:inline" />
                <div className="px-3 py-1.5 rounded bg-[#121520] text-emerald-400 border border-white/5">
                  Domain Logic
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-orange-400 shrink-0 hidden sm:inline" />
                <div className="px-3 py-1.5 rounded bg-[#121520] text-amber-400 border border-white/5">
                  Kafka & DB
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Principles */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono text-orange-400/90 uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-orange-400" />
              <span>Architectural Principles</span>
            </div>

            <div className="space-y-3">
              {portfolio.about.principles.map((principle, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-[#0b0e15] border border-white/10 hover:border-orange-500/40 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                    <h3 className="text-sm font-bold text-white">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-6">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
