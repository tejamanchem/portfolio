import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface SectionMarker {
  id: string;
  code: string;
  label: string;
}

const sectionMarkers: SectionMarker[] = [
  { id: "home", code: "01", label: "HOME" },
  { id: "about", code: "02", label: "ABOUT" },
  { id: "engineering", code: "03", label: "ENGINEERING" },
  { id: "architecture", code: "04", label: "ARCHITECTURE" },
  { id: "skills", code: "05", label: "SKILLS" },
  { id: "experience", code: "06", label: "EXPERIENCE" },
  { id: "projects", code: "07", label: "PROJECTS" },
  { id: "contact", code: "08", label: "CONTACT" },
];

export const ScrollWall: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollPercentage(Math.round(latest * 100));
    });

    // Intersection observer to track current active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sectionMarkers.forEach((marker) => {
      const element = document.getElementById(marker.id);
      if (element) observer.observe(element);
    });

    return () => {
      unsubscribe();
      observer.disconnect();
    };
  }, [scrollYProgress]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* 1. Mobile / Tablet Top Laser Progress Bar */}
      <div className="lg:hidden fixed top-0 inset-x-0 h-[2.5px] z-50 bg-[#050608]/50 overflow-hidden pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-orange-600 via-amber-400 to-orange-500 shadow-[0_0_12px_#f97316]"
          style={{ scaleX: scaleY, transformOrigin: "0%" }}
        />
      </div>

      {/* 2. Desktop "Scroll Wall" Telemetry Rail (Right Viewport Edge) */}
      <aside
        className="hidden lg:flex fixed right-0 top-0 bottom-0 z-40 w-14 flex-col justify-between items-center py-8 pointer-events-auto select-none"
        aria-label="Scroll Telemetry Wall"
      >
        {/* Wall Backing with subtle blur and graduated border */}
        <div className="absolute inset-0 bg-[#06080d]/85 backdrop-blur-md border-l border-white/10 shadow-2xl pointer-events-none" />

        {/* Top Telemetry Header */}
        <div className="relative z-10 flex flex-col items-center">
          <span className="font-mono text-[9px] text-orange-400 tracking-tighter uppercase font-bold">
            RAIL
          </span>
          <span className="font-mono text-[10px] text-slate-400 font-semibold mt-0.5">
            {scrollPercentage.toString().padStart(2, "0")}%
          </span>
        </div>

        {/* Central Laser Conduit Track & Milestone Nodes */}
        <div className="relative z-10 flex-1 w-full flex items-center justify-center my-4">
          {/* Graduation Notches along the wall edge */}
          <div className="absolute left-0 top-0 bottom-0 w-2 flex flex-col justify-between py-2 pointer-events-none opacity-40">
            {Array.from({ length: 24 }).map((_, i) => (
              <span
                key={i}
                className={`h-px bg-slate-500 ${i % 4 === 0 ? "w-2 bg-orange-400/80" : "w-1"}`}
              />
            ))}
          </div>

          {/* Background Guide Line */}
          <div className="absolute top-0 bottom-0 w-[2px] bg-[#1a1e2a]" />

          {/* Active Liquid Laser Energy Stream */}
          <motion.div
            className="absolute top-0 w-[2px] rounded-full"
            style={{
              height: "100%",
              scaleY: scaleY,
              transformOrigin: "top",
              background:
                "linear-gradient(180deg, #ea580c 0%, #f97316 40%, #fbbf24 80%, #ffffff 100%)",
              boxShadow: "0 0 10px #f97316, 0 0 20px rgba(249, 115, 22, 0.4)",
            }}
          />

          {/* Section Milestone Buttons */}
          <div className="absolute inset-y-0 flex flex-col justify-between items-center py-2">
            {sectionMarkers.map((marker) => {
              const isActive = activeSection === marker.id;
              const isHovered = hoveredSection === marker.id;

              return (
                <div key={marker.id} className="relative flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => scrollToSection(marker.id)}
                    onMouseEnter={() => setHoveredSection(marker.id)}
                    onMouseLeave={() => setHoveredSection(null)}
                    className={`relative z-10 w-4 h-4 rounded-full flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-400 ${
                      isActive
                        ? "bg-[#0b0e15] border-2 border-orange-400 shadow-[0_0_12px_#f97316] scale-125"
                        : "bg-[#11141e] border border-white/20 hover:border-orange-400/80 hover:scale-110"
                    }`}
                    aria-label={`Scroll to ${marker.label}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        isActive ? "bg-orange-400 animate-pulse" : "bg-slate-400"
                      }`}
                    />
                  </button>

                  {/* Laser HUD Tooltip on Hover */}
                  {isHovered && (
                    <div className="absolute right-7 px-2.5 py-1 rounded bg-[#0c0f17] border border-orange-500/40 shadow-xl font-mono text-[10px] text-white flex items-center gap-1.5 whitespace-nowrap z-30 pointer-events-none">
                      <span className="text-orange-400">{marker.code}</span>
                      <span>//</span>
                      <span>{marker.label}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Telemetry Status */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-ping mb-1" />
          <span className="font-mono text-[8px] text-slate-500 uppercase tracking-widest">
            SYNC
          </span>
        </div>
      </aside>
    </>
  );
};
