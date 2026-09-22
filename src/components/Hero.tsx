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
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] lg:h-screen lg:max-h-screen flex items-center overflow-hidden bg-[#050608]"
      aria-label="Hero Section"
    >
      {/* Primary Cinematic Background Visual (Right-aligned, perfectly fitted to viewport) */}
      <div
        className="absolute inset-y-0 right-0 w-full lg:w-[58%] xl:w-[54%] z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="w-full h-full bg-no-repeat transition-all duration-700"
          style={{
            backgroundImage: `url('${bgImage}')`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        />
        {/* Seamless left blend into the dark left section where text sits */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-36 xl:w-52 bg-gradient-to-r from-[#050608] via-[#050608]/85 to-transparent" />
        {/* Top fade under navbar */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#050608]/90 to-transparent" />
        {/* Bottom edge fade into subsequent sections */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#050608] to-transparent" />
      </div>

      {/* Mobile background dimming overlay for high contrast */}
      <div
        className="lg:hidden absolute inset-0 z-[1] pointer-events-none bg-[#050608]/82"
        aria-hidden="true"
      />

      {/* Hero Content Container - Perfectly fitted within 100vh on Desktop */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 lg:py-0 flex items-center h-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl lg:max-w-lg xl:max-w-xl text-left"
        >
          {/* Terminal Eyebrow Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#11141c]/90 border border-orange-500/30 text-orange-400 font-mono text-xs tracking-wider mb-4 shadow-[0_0_15px_rgba(249,115,22,0.12)]"
          >
            <Terminal className="w-3.5 h-3.5 text-orange-400 shrink-0" />
            <span className="font-semibold uppercase truncate">{portfolio.title}</span>
            <span className="w-1 h-3 bg-orange-400/80 animate-pulse ml-0.5" />
          </motion.div>

          {/* Main Headline - Balanced typography */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-white leading-[1.14] mb-3.5"
          >
            <span>{portfolio.headline}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 mt-1">
              {portfolio.subheadline}
            </span>
          </motion.h1>

          {/* Core Summary */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm xl:text-[15px] text-slate-300 leading-relaxed font-normal mb-5 max-w-lg"
          >
            {portfolio.summary}
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 mb-5"
          >
            <a
              href={`${import.meta.env.BASE_URL}resume.html`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-mono text-xs font-bold tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(249,115,22,0.35)] hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:outline-none"
              aria-label="View Official Resume (opens in separate page)"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>VIEW RESUME</span>
            </a>

            <a
              href="#engineering"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-[#12151e] hover:bg-[#191d2a] text-slate-200 hover:text-white font-mono text-xs font-semibold tracking-wider border border-white/10 hover:border-orange-500/40 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
            >
              <span>VIEW ENGINEERING</span>
              <ChevronRight className="w-3.5 h-3.5 text-orange-400" />
            </a>

            <a
              href={portfolio.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-[#12151e] hover:bg-[#191d2a] text-slate-200 hover:text-white font-mono text-xs font-semibold tracking-wider border border-white/10 hover:border-orange-500/40 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
            >
              <Github className="w-3.5 h-3.5 text-orange-400" />
              <span>GITHUB</span>
            </a>
          </motion.div>

          {/* System Telemetry & Architecture Status */}
          <motion.div
            variants={itemVariants}
            className="pt-3.5 border-t border-white/10 flex flex-wrap items-center gap-3 sm:gap-5 text-[11px] font-mono text-slate-400"
          >
            <div className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-slate-500">SYSTEM:</span>
              <span className="text-slate-200">DISTRIBUTED</span>
            </div>
            <div className="text-white/15">•</div>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500">EVENT_STREAM:</span>
              <span className="text-orange-400">KAFKA READY</span>
            </div>
            <div className="text-white/15">•</div>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500">LATENCY:</span>
              <span className="text-slate-200">&lt; 2ms (P99)</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Discrete Bottom Scroll Indicator */}
      <a
        href="#about"
        className="hidden lg:flex items-center gap-2 text-[11px] font-mono text-slate-500 hover:text-orange-400 transition-colors absolute bottom-4 left-6 sm:left-8 z-10"
        aria-label="Scroll to About section"
      >
        <span>EXPLORE SYSTEMS</span>
        <ArrowDown className="w-3 h-3 animate-bounce text-orange-400" />
      </a>
    </section>
  );
};
