import React from "react";
import { SectionHeader } from "../components/SectionHeader";
import { SystemArchitecture } from "../components/SystemArchitecture";

export const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="py-24 sm:py-32 relative z-10" aria-label="Architecture Section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="DISTRIBUTED SYSTEMS"
          title="How I Think About Systems"
          description="Designing for failure isolation, predictable backpressure, idempotent message processing, and decoupled asynchronous data streams."
        />

        <SystemArchitecture />
      </div>
    </section>
  );
};
