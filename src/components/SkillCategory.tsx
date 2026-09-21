import React from "react";
import type { SkillCategory as SkillCategoryType } from "../data/portfolio";
import { TechIcon } from "./TechIcon";
import { Server, Database, Cpu, Cloud, BarChart3, Layout } from "lucide-react";

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => {
  const getCategoryIcon = (catName: string) => {
    const norm = catName.toLowerCase();
    if (norm.includes("backend") || norm.includes("api")) {
      return <Server className="w-3.5 h-3.5 text-orange-400" />;
    }
    if (norm.includes("database") || norm.includes("orm")) {
      return <Database className="w-3.5 h-3.5 text-orange-400" />;
    }
    if (norm.includes("messaging") || norm.includes("stream")) {
      return <Cpu className="w-3.5 h-3.5 text-orange-400" />;
    }
    if (norm.includes("cloud") || norm.includes("devops")) {
      return <Cloud className="w-3.5 h-3.5 text-orange-400" />;
    }
    if (norm.includes("analytics") || norm.includes("tool")) {
      return <BarChart3 className="w-3.5 h-3.5 text-orange-400" />;
    }
    return <Layout className="w-3.5 h-3.5 text-orange-400" />;
  };

  return (
    <div className="h-full rounded-xl bg-[#080b11] border border-white/[0.08] hover:border-orange-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] group">
      {/* Equalized Header & Description Zone */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#101420] border border-orange-500/25 flex items-center justify-center">
              {getCategoryIcon(category.category)}
            </div>
            <h3 className="font-mono text-xs font-bold text-orange-400 tracking-wider">
              {category.category}
            </h3>
          </div>
          <span className="text-[10px] font-mono text-slate-500 bg-[#0c0f17] px-2 py-0.5 rounded border border-white/5">
            {category.skills.length} TECH
          </span>
        </div>
        
        {/* Fixed min-height ensures horizontal divider line aligns equally across all grid columns */}
        <p className="text-xs text-slate-400 leading-relaxed min-h-[38px] mb-4">
          {category.description}
        </p>
      </div>

      {/* Aligned Divider Line and Normal Tech Badges with Symbols */}
      <div className="pt-4 border-t border-white/[0.08] flex-1 flex flex-col justify-start">
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <div
              key={skill}
              className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-[#0c0f17] hover:bg-[#121622] text-slate-300 hover:text-white border border-white/[0.08] hover:border-orange-500/40 text-xs font-mono transition-all group/item"
            >
              <TechIcon name={skill} className="w-3.5 h-3.5 shrink-0" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
