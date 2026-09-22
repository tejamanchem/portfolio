import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BackgroundEffects } from "./components/BackgroundEffects";
import { LaserPointer } from "./components/LaserPointer";
import { ScrollWall } from "./components/ScrollWall";
import { TemplateModal } from "./components/TemplateModal";
import { About } from "./sections/About";
import { Engineering } from "./sections/Engineering";
import { Architecture } from "./sections/Architecture";
import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { TemplateSection } from "./sections/TemplateSection";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);

  const handleOpenTemplate = () => setIsTemplateModalOpen(true);
  const handleCloseTemplate = () => setIsTemplateModalOpen(false);

  return (
    <div className="min-h-screen bg-[#050608] text-slate-100 relative selection:bg-orange-500/20 selection:text-orange-300">
      {/* Background ambient lighting and grid patterns */}
      <BackgroundEffects />

      {/* Magic Interactive Laser Pointer */}
      <LaserPointer />

      {/* Futuristic Scroll Wall Telemetry Rail */}
      <ScrollWall />

      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content Layout */}
      <main id="content" className="relative z-10">
        <Hero />
        <About />
        <Engineering />
        <Architecture />
        <Skills />
        <Experience />
        <Projects />
        <TemplateSection onOpenTemplate={handleOpenTemplate} />
        <Contact />
      </main>

      {/* Minimal Engineering Footer */}
      <Footer />

      {/* Open Source Template Starter Kit Modal */}
      <TemplateModal isOpen={isTemplateModalOpen} onClose={handleCloseTemplate} />
    </div>
  );
};

export default App;
