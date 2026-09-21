import React from "react";
import { SectionHeader } from "../components/SectionHeader";
import { SkillCategory } from "../components/SkillCategory";
import { portfolio } from "../data/portfolio";

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 relative z-10" aria-label="Skills Section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="TECHNOLOGY STACK"
          title="Tools & Technologies"
          description="A production-focused stack centered around backend runtimes, distributed event streaming, relational storage, and modern frontend integration."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6 items-stretch">
          {portfolio.skills.map((category) => (
            <SkillCategory key={category.category} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};
