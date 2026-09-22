import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, Cpu, AlertCircle, CheckCircle, Github, ExternalLink, Copy, Check, Terminal } from "lucide-react";
import type { ProjectItem } from "../data/portfolio";

interface DeepDiveModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const DeepDiveModal: React.FC<DeepDiveModalProps> = ({ project, onClose }) => {
  const [copiedFlow, setCopiedFlow] = useState(false);

  useEffect(() => {
    if (!project) return;

    // Lock background page scroll while modal is open
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    // Handle Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyFlow = () => {
    if (!project.architecture) return;
    navigator.clipboard.writeText(project.architecture);
    setCopiedFlow(true);
    setTimeout(() => setCopiedFlow(false), 2000);
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="deep-dive-title"
    >
      {/* Floating Card Container */}
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0c0f18] border border-orange-500/40 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(249,115,22,0.15)] flex flex-col overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-80 h-32 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Card Header (Fixed at top) */}
        <div className="relative px-6 py-5 border-b border-white/10 bg-[#0e121d]/90 backdrop-blur-sm flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="font-mono text-[11px] text-orange-400 font-semibold uppercase tracking-wider">
                Engineering Architecture Deep Dive
              </span>
            </div>
            <h2 id="deep-dive-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.name}
            </h2>
            <div className="flex flex-wrap gap-1.5 mt-2.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded bg-[#161a28] text-slate-300 text-[11px] font-mono border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10 shrink-0"
            aria-label="Close Deep Dive Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Card Body with Independent Internal Scrollbar */}
        <div className="modal-scroll overflow-y-auto px-6 sm:px-8 py-6 space-y-6 text-sm flex-1">
          {/* System Flow Architecture Box */}
          {project.architecture && (
            <div className="rounded-xl bg-[#080a11] border border-white/10 p-4 relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-orange-400">
                  <Terminal className="w-4 h-4 text-orange-400" />
                  <span>Pipeline Architecture & Event Flow</span>
                </div>
                <button
                  onClick={handleCopyFlow}
                  type="button"
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#131724] hover:bg-[#1a2032] text-[11px] font-mono text-slate-300 hover:text-white border border-white/10 transition-colors"
                >
                  {copiedFlow ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Flow</span>
                    </>
                  )}
                </button>
              </div>
              <div className="font-mono text-xs text-orange-300/90 leading-relaxed bg-[#05060b] p-3 rounded-lg border border-white/5 whitespace-pre-wrap break-words">
                {project.architecture}
              </div>
            </div>
          )}

          {/* Problem Statement */}
          {project.problem && (
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">
                Problem Statement & System Friction
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed bg-[#10131e] p-4 rounded-xl border border-white/5">
                {project.problem}
              </p>
            </div>
          )}

          {/* Key Engineering Challenges & Trade-Offs */}
          {project.engineeringChallenges?.length > 0 && (
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-orange-400" />
                <span>Key Engineering Challenges & Trade-Offs</span>
              </h3>
              <div className="space-y-3.5">
                {project.engineeringChallenges.map((ec, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#0f121d] border border-white/5 space-y-2.5">
                    <div className="text-sm font-semibold text-white flex items-start gap-2">
                      <span className="text-orange-400 font-mono text-xs mt-0.5">#{idx + 1}</span>
                      <span>{ec.challenge}</span>
                    </div>
                    {ec.constraint && (
                      <div className="text-xs text-slate-300 pl-5">
                        <strong className="text-slate-400 font-mono">Constraint:</strong> {ec.constraint}
                      </div>
                    )}
                    <div className="text-xs text-slate-200 pl-5">
                      <strong className="text-orange-400 font-mono">Decision:</strong> {ec.decision}
                    </div>
                    <div className="text-xs text-slate-400 pl-5">
                      <strong className="text-amber-400/90 font-mono">Trade-Off:</strong> {ec.tradeoff}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architectural Solutions Implemented */}
          {project.solutions?.length > 0 && (
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-orange-400" />
                <span>Architectural Solutions Implemented</span>
              </h3>
              <ul className="space-y-2 bg-[#080a11] p-4 rounded-xl border border-white/5">
                {project.solutions.map((sol, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2.5 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-1.5" />
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Verified Production Outcomes */}
          {project.results?.length > 0 && (
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Verified Production Outcomes & Metrics</span>
              </h3>
              <div className="grid grid-cols-1 gap-2 bg-[#0a1215] p-4 rounded-xl border border-emerald-500/20">
                {project.results.map((res, idx) => (
                  <div key={idx} className="text-xs text-slate-200 flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Card Footer (Fixed at bottom) */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#0e121d]/95 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#161a28] hover:bg-[#1f2538] text-xs font-mono text-slate-300 hover:text-white border border-white/10 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-orange-400" />
                <span>Source Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#161a28] hover:bg-[#1f2538] text-xs font-mono text-slate-300 hover:text-white border border-white/10 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-orange-400" />
                <span>Live Project</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-mono text-xs font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]"
          >
            Close Deep Dive
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
