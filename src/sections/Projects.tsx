import React, { useState } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { ProjectCard } from "../components/ProjectCard";
import { portfolio } from "../data/portfolio";
import { Filter } from "lucide-react";

type ProjectCategory = "ALL" | "OUTAGE & NOTIFICATIONS" | "TELEMETRY & ANALYTICS" | "INTEGRATION & VALIDATION";

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("ALL");

  const filterProject = (projectId: string, category: ProjectCategory): boolean => {
    if (category === "ALL") return true;
    if (category === "OUTAGE & NOTIFICATIONS") {
      return projectId === "project-zcn" || projectId === "project-noc";
    }
    if (category === "TELEMETRY & ANALYTICS") {
      return projectId === "project-pulse" || projectId === "project-noc";
    }
    if (category === "INTEGRATION & VALIDATION") {
      return projectId === "project-aqm" || projectId === "project-subsidy";
    }
    return true;
  };

  const categories: { label: ProjectCategory; count: number }[] = [
    { label: "ALL", count: portfolio.projects.length },
    {
      label: "OUTAGE & NOTIFICATIONS",
      count: portfolio.projects.filter((p) => filterProject(p.id, "OUTAGE & NOTIFICATIONS")).length,
    },
    {
      label: "TELEMETRY & ANALYTICS",
      count: portfolio.projects.filter((p) => filterProject(p.id, "TELEMETRY & ANALYTICS")).length,
    },
    {
      label: "INTEGRATION & VALIDATION",
      count: portfolio.projects.filter((p) => filterProject(p.id, "INTEGRATION & VALIDATION")).length,
    },
  ];

  const filteredProjects = portfolio.projects.filter((project) =>
    filterProject(project.id, selectedCategory)
  );

  return (
    <section id="projects" className="py-24 sm:py-32 relative z-10" aria-label="Projects Section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="SYSTEM CASE STUDIES"
          title="Featured Projects & Production Systems"
          description="Mission-critical telecommunications systems, automated outage classifiers, multi-channel notification engines, and real-time operational telemetry."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 mr-2 py-1">
            <Filter className="w-3.5 h-3.5 text-orange-400" />
            <span>FILTER:</span>
          </div>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.label;
            return (
              <button
                key={cat.label}
                type="button"
                onClick={() => setSelectedCategory(cat.label)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
                  isActive
                    ? "bg-orange-500/20 text-orange-300 border border-orange-500/60 shadow-[0_0_12px_rgba(249,115,22,0.25)]"
                    : "bg-[#0b0e16] text-slate-400 border border-white/10 hover:border-white/25 hover:text-slate-200"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-orange-500/30 text-orange-200" : "bg-white/5 text-slate-500"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
