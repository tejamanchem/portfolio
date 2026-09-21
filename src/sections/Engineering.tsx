import React from "react";
import { SectionHeader } from "../components/SectionHeader";
import { EngineeringCard } from "../components/EngineeringCard";
import { portfolio } from "../data/portfolio";

export const Engineering: React.FC = () => {
  return (
    <section id="engineering" className="py-24 sm:py-32 relative z-10" aria-label="Engineering Section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="WHAT I BUILD"
          title="Core Engineering Competencies"
          description="Specialized in backend service architecture, asynchronous streaming pipelines, and resilient distributed data layers."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.engineeringAreas.map((area, index) => (
            <EngineeringCard key={area.id} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
