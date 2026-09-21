import React from "react";
import {
  Server,
  Network,
  Cpu,
  Database,
  Cloud,
  Layers,
  Terminal,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import type { EngineeringArea } from "../data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  Server,
  Network,
  Cpu,
  Database,
  Cloud,
  Layers,
  Terminal,
};

interface EngineeringCardProps {
  area: EngineeringArea;
  index: number;
}

export const EngineeringCard: React.FC<EngineeringCardProps> = ({ area }) => {
  const IconComponent = iconMap[area.icon] || Server;

  return (
    <div className="group relative rounded-lg bg-[#0b0d14] border border-white/10 hover:border-orange-500/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_4px_30px_rgba(249,115,22,0.1)]">
      {/* Subtle top indicator bar */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Top Header Row with Icon & Area ID */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-11 h-11 rounded-md bg-[#131722] border border-white/10 flex items-center justify-center text-orange-400 group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-colors">
            <IconComponent className="w-5 h-5 text-orange-400" />
          </div>
          <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest px-2 py-1 rounded bg-[#10131c] border border-white/5">
            SYS::0{area.id.slice(0, 3).toUpperCase()}
          </span>
        </div>

        {/* Title and Tagline */}
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
          {area.title}
        </h3>
        <div className="text-xs font-mono text-orange-400/80 mb-3 tracking-wide">
          {area.tagline}
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {area.description}
        </p>

        {/* Technical Capabilities List */}
        <div className="space-y-2 mb-6">
          <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
            Key Capabilities
          </div>
          <ul className="space-y-1.5">
            {area.technicalCapabilities.map((cap, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <ChevronRight className="w-3.5 h-3.5 text-orange-400/70 shrink-0 mt-0.5" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Engineering System Artifact / Micro-Terminal */}
      <div className="pt-4 border-t border-white/5 mt-2">
        <div className="font-mono text-[10px] text-slate-500 px-2.5 py-1.5 rounded bg-[#07090e] border border-white/5 truncate flex items-center gap-1.5 text-orange-300/80">
          <span className="text-orange-500">›</span>
          <span className="truncate">{area.systemArtifact}</span>
        </div>
      </div>
    </div>
  );
};
