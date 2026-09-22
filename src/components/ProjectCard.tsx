import React from "react";
import { Github, ExternalLink, Cpu, GitBranch, ArrowRight } from "lucide-react";
import type { ProjectItem } from "../data/portfolio";

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDeepDive: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDeepDive }) => {
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
          Projects are configured cleanly in <code className="text-orange-300 font-mono bg-white/5 px-1.5 py-0.5 rounded">src/data/portfolio.ts</code>.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-[#0b0d14] border border-white/10 hover:border-orange-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_8px_35px_rgba(249,115,22,0.12)] group">
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
        <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-orange-400 transition-colors">
          {project.name}
        </h3>

        {/* Short Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Architecture Flow Preview */}
        {project.architecture && (
          <div className="mb-5 p-3 rounded-lg bg-[#07090e] border border-white/5">
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
            <p className="line-clamp-2 text-slate-400 leading-relaxed">{project.problem}</p>
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
          onClick={() => onOpenDeepDive(project)}
          className="text-xs font-mono text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1.5 group/btn"
        >
          <span className="underline decoration-orange-400/40 underline-offset-4 group-hover/btn:decoration-orange-400">
            Deep Dive Architecture
          </span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
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
    </div>
  );
};
