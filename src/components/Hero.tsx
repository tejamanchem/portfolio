import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Github, Terminal, ChevronRight, Activity, FileText } from "lucide-react";
import { portfolio } from "../data/portfolio";

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const bgImage = `${import.meta.env.BASE_URL}assets/portfolio-bg.png`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[100vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#050608]"
      aria-label="Hero Section"
    >
      {/* Primary Cinematic Background Visual (Positioned to the right on desktop so no text overlaps it) */}
      <div
        className="absolute inset-y-0 right-0 w-full lg:w-[65%] xl:w-[60%] z-0 bg-no-repeat transition-all duration-700 pointer-events-none"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        {/* Seamless left blend into the dark left section where text sits */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-48 xl:w-64 bg-gradient-to-r from-[#050608] via-[#050608]/85 to-transparent" />
      </div>

      {/* Layered Lighting and Readability Vignettes */}
      {/* 1. Mobile readability overlay */}
      <div
        className="lg:hidden absolute inset-0 z-[1] pointer-events-none bg-[#050608]/80"
        aria-hidden="true"
      />
      {/* 2. Bottom fade into the subsequent page sections */}
      <div
        className="absolute bottom-0 inset-x-0 h-44 z-[1] pointer-events-none bg-gradient-to-t from-[#050608] via-[#050608]/80 to-transparent"
        aria-hidden="true"
      />
      {/* 3. Top fade for navbar readability */}
      <div
        className="absolute top-0 inset-x-0 h-32 z-[1] pointer-events-none bg-gradient-to-b from-[#050608]/90 to-transparent"
        aria-hidden="true"
      />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 flex flex-col justify-between min-h-[100vh] lg:min-h-screen">
        {/* Empty spacer to vertically balance navbar */}
        <div className="h-6 sm:h-12" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl lg:max-w-lg text-left"
        >
          {/* Eyebrow Label */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#11141c]/90 border border-orange-500/30 text-orange-400 font-mono text-xs tracking-wider mb-6 shadow-[0_0_15px_rgba(249,115,22,0.12)]"
          >
            <Terminal className="w-3.5 h-3.5 text-orange-400" />
            <span className="font-semibold uppercase">{portfolio.title}</span>
            <span className="w-1 h-3 bg-orange-400/80 animate-pulse ml-1" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
          >
            <span>{portfolio.headline}</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              {portfolio.subheadline}
            </span>
          </motion.h1>

          {/* Core Summary */}
          <motion.p
            variants={itemVariants}
           className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-8 max-w-xl"
          >
            {portfolio.summary}
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3.5 pt-2"
          >
            <a
              href={`${import.meta.env.BASE_URL}resume.html`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-mono text-xs font-bold tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_25px_rgba(249,115,22,0.65)] focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:outline-none"
              aria-label="View Resume (opens in new page)"
            >
              <FileText className="w-4 h-4" />
              <span>VIEW RESUME</span>
            </a>

            <a
              href="#engineering"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#12151e] hover:bg-[#191d2a] text-slate-200 hover:text-white font-mono text-xs font-semibold tracking-wider border border-white/10 hover:border-orange-500/40 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
            >
              <span>VIEW ENGINEERING</span>
              <ChevronRight className="w-4 h-4 text-orange-400" />
            </a>

            <a
              href={portfolio.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#12151e] hover:bg-[#191d2a] text-slate-200 hover:text-white font-mono text-xs font-semibold tracking-wider border border-white/10 hover:border-orange-500/40 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
            >
              <Github className="w-4 h-4 text-orange-400" />
              <span>GITHUB</span>
            </a>
          </motion.div>

          {/* Engineering Metadata / Architecture Status */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] font-mono text-slate-400"
          >
            <div className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-slate-500">SYSTEM:</span>
              <span className="text-slate-200">DISTRIBUTED</span>
            </div>
            <div className="hidden sm:inline text-white/15">•</div>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500">EVENT_STREAM:</span>
              <span className="text-orange-400">KAFKA READY</span>
            </div>
            <div className="hidden sm:inline text-white/15">•</div>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500">LATENCY:</span>
              <span className="text-slate-200">&lt; 2ms (P99)</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Scroll Cue */}
        <div className="pt-8 pb-4 flex items-center justify-between text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
            <span className="text-slate-400 text-[11px]">PORTFOLIO PHASE 1.0</span>
          </div>

          <a
            href="#about"
            className="flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors focus-visible:ring-2 focus-visible:ring-orange-500 rounded p-1"
            aria-label="Scroll to About section"
          >
            <span className="text-[11px]">EXPLORE SYSTEMS</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-orange-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
