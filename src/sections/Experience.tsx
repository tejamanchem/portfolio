import React from "react";
import { SectionHeader } from "../components/SectionHeader";
import { portfolio } from "../data/portfolio";
import { Briefcase, Calendar, MapPin, CheckCircle2, FileCode } from "lucide-react";

export const Experience: React.FC = () => {
  const hasRealExperience = portfolio.experience.some(
    (exp) => !exp.isPlaceholder && exp.company && exp.company.trim() !== ""
  );

  return (
    <section id="experience" className="py-24 sm:py-32 relative z-10" aria-label="Experience Section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="CAREER TIMELINE"
          title="Professional Experience"
          description="A timeline of software engineering roles, distributed systems impact, and production achievements."
        />

        {hasRealExperience ? (
          <div className="space-y-8">
            <div className="flex items-center gap-3 p-3.5 rounded-lg bg-[#0e111a] border border-orange-500/20 max-w-md">
              <div className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-pulse" />
              <div className="font-mono text-xs text-slate-300">
                <span className="font-bold text-white">DHAN AI</span>
                <span className="text-slate-500 mx-2">•</span>
                <span className="text-orange-400">4 yrs 10 mos total tenure</span>
              </div>
            </div>

            <div className="relative border-l border-white/10 ml-4 sm:ml-44 space-y-12">
              {portfolio.experience
                .filter((exp) => !exp.isPlaceholder && exp.company)
                .map((item) => (
                  <div key={item.id} className="relative pl-6 sm:pl-8 group">
                    {/* Timeline indicator node */}
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#050608] border-2 border-orange-500 group-hover:bg-orange-500 transition-colors shadow-[0_0_10px_rgba(249,115,22,0.4)]" />

                    {/* Desktop Date on the left */}
                    <div className="sm:absolute sm:-left-44 sm:w-36 sm:text-right font-mono text-xs text-orange-400 font-semibold mb-2 sm:mb-0">
                      {item.startDate} — {item.endDate}
                    </div>

                  <div className="rounded-lg bg-[#0b0d14] border border-white/10 p-6 hover:border-orange-500/40 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-orange-400" />
                        <span>{item.role}</span>
                        <span className="text-slate-500 font-normal">@</span>
                        <span className="text-orange-400">{item.company}</span>
                      </h3>
                      {item.location && (
                        <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{item.location}</span>
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {item.achievements?.length > 0 && (
                      <ul className="space-y-1.5 mb-5">
                        {item.achievements.map((ach, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {item.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-[#121520] text-slate-300 text-[11px] font-mono border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Graceful empty state matching user instructions: no fake companies or dates */
          <div className="max-w-2xl mx-auto rounded-xl bg-[#090b11] border border-dashed border-white/15 p-8 sm:p-10 text-center">
            <div className="w-12 h-12 rounded-full bg-[#111420] border border-orange-500/30 flex items-center justify-center text-orange-400 mx-auto mb-4">
              <Calendar className="w-5 h-5 text-orange-400" />
            </div>

            <div className="font-mono text-xs uppercase tracking-widest text-orange-400 mb-2">
              Status: Ready for Real History
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              Experience will be added
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              To keep this portfolio 100% truthful, no simulated companies or placeholder employment dates are displayed. You can simply add your genuine roles and achievements into:
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-2 rounded bg-[#06070a] border border-white/10 font-mono text-xs text-orange-300 mb-6">
              <FileCode className="w-4 h-4 text-orange-400" />
              <span>src/data/portfolio.ts → experience[]</span>
            </div>

            <div className="text-[11px] font-mono text-slate-500">
              TIMELINE COMPONENT CONFIGURED & READY FOR MULTIPLE ROLES
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
