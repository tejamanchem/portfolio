import React, { useState } from "react";
import { Github, ExternalLink, Cpu, GitBranch, AlertCircle, CheckCircle } from "lucide-react";
import type { ProjectItem } from "../data/portfolio";

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  // If this is a placeholder/empty template slot
  if (project.isPlaceholder || !project.name) {
    return (
      <div className="rounded-lg bg-[#0a0c12] border border-dashed border-white/15 p-8 text-center flex flex-col items-center justify-center min-h-[280px]">
        <div className="w-12 h-12 rounded-full bg-[#11141e] border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4">
          <GitBranch className="w-5 h-5 text-orange-400" />
        </div>
        <div className="font-mono text-xs uppercase tracking-widest text-orange-400 mb-2">
          Project Slot Available
        </div>
        <h3 className="text-lg font-bold text-white mb-2">
          Ready for Engineering Case Study
        </h3>
        <p className="text-slate-400 text-xs max-w-md leading-relaxed mb-5">
          Projects are configured cleanly in <code className="text-orange-300 font-mono bg-white/5 px-1.5 py-0.5 rounded">src/data/portfolio.ts</code>. Add your architecture flow, engineering challenges, problem statements, and live repository links.
        </p>
        <div className="font-mono text-[11px] text-slate-500 bg-[#07080d] px-3 py-1.5 rounded border border-white/5">
          SUPPORTS: ARCHITECTURE FLOW • CHALLENGES • TRADEOFFS • METRICS
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-[#0b0d14] border border-white/10 hover:border-orange-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_4px_30px_rgba(249,115,22,0.1)]">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-400" />
            <span className="font-mono text-[11px] text-orange-400 uppercase tracking-wider">
              ENGINEERING CASE STUDY
            </span>
          </div>
          {project.featured && (
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-orange-500/10 text-orange-400 border border-orange-500/20">
              FEATURED
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 hover:text-orange-400 transition-colors">
          {project.name}
        </h3>

        {/* Short Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Architecture Flow Preview */}
        {project.architecture && (
          <div className="mb-5 p-3 rounded bg-[#07090e] border border-white/5">
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Cpu className="w-3 h-3 text-orange-400" />
              <span>System Flow</span>
            </div>
            <div className="font-mono text-xs text-orange-300/90 truncate">
              {project.architecture}
            </div>
          </div>
        )}

        {/* Problem Statement */}
        {project.problem && (
          <div className="mb-5 text-xs text-slate-300">
            <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider block mb-1">
              Core Problem Solved
            </span>
            <p className="line-clamp-2">{project.problem}</p>
          </div>
        )}

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded bg-[#131722] text-slate-300 text-[11px] font-mono border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer & Links */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="text-xs font-mono text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1"
        >
          <span>Deep Dive Architecture</span>
          <span>→</span>
        </button>

        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Live Project"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Engineering Deep Dive Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#0c0e16] border border-orange-500/40 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-orange-400 uppercase tracking-wider">
                  Engineering Architecture Deep Dive
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {project.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 font-mono text-sm"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6 text-sm">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">
                  System Architecture
                </h4>
                <div className="p-3 bg-[#07090e] rounded border border-white/10 font-mono text-xs text-orange-300">
                  {project.architecture}
                </div>
              </div>

              {project.engineeringChallenges?.length > 0 && (
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-orange-400" />
                    <span>Key Engineering Challenges & Trade-Offs</span>
                  </h4>
                  <div className="space-y-3">
                    {project.engineeringChallenges.map((ec, idx) => (
                      <div key={idx} className="p-3.5 rounded bg-[#10131e] border border-white/5 space-y-2">
                        <div className="text-xs font-semibold text-white">
                          Challenge: {ec.challenge}
                        </div>
                        {ec.constraint && (
                          <div className="text-xs text-slate-400">
                            <strong className="text-slate-500 font-mono">Constraint:</strong> {ec.constraint}
                          </div>
                        )}
                        <div className="text-xs text-slate-300">
                          <strong className="text-orange-400 font-mono">Decision:</strong> {ec.decision}
                        </div>
                        <div className="text-xs text-slate-400 font-mono">
                          <strong className="text-slate-500">Trade-Off:</strong> {ec.tradeoff}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.solutions?.length > 0 && (
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-orange-400" />
                    <span>Architectural Solutions Implemented</span>
                  </h4>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-1.5 bg-[#07090e] p-3.5 rounded border border-white/5">
                    {project.solutions.map((sol, idx) => (
                      <li key={idx}>{sol}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.results?.length > 0 && (
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Verified Outcomes</span>
                  </h4>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                    {project.results.map((res, idx) => (
                      <li key={idx}>{res}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-[#171b26] hover:bg-[#202534] text-white rounded text-xs font-mono"
              >
                Close Deep Dive
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
