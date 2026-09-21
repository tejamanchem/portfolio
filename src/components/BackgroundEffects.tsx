import React from "react";

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* 1. Structural engineering grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* 2. Light Backend Architectural Topology Blueprint Layer */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 transition-opacity duration-700"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="backend-topology"
            width="280"
            height="280"
            patternUnits="userSpaceOnUse"
          >
            {/* Bus conduit lines */}
            <path
              d="M 20 60 L 260 60 M 60 20 L 60 260 M 220 20 L 220 260 M 20 220 L 260 220"
              stroke="rgba(249, 115, 22, 0.12)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <path
              d="M 60 140 L 140 140 L 140 220 M 140 60 L 140 140 L 220 140"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="1.2"
            />
            {/* Server / Microservice Nodes */}
            <rect
              x="52"
              y="52"
              width="16"
              height="16"
              rx="3"
              fill="rgba(249, 115, 22, 0.08)"
              stroke="rgba(249, 115, 22, 0.3)"
              strokeWidth="1"
            />
            <circle cx="60" cy="60" r="2.5" fill="#f97316" opacity="0.6" />

            <rect
              x="212"
              y="52"
              width="16"
              height="16"
              rx="3"
              fill="rgba(255, 255, 255, 0.04)"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="1"
            />
            <circle cx="220" cy="60" r="2.5" fill="#38bdf8" opacity="0.5" />

            {/* Database / Storage Cluster Node */}
            <rect
              x="132"
              y="132"
              width="16"
              height="16"
              rx="8"
              fill="rgba(249, 115, 22, 0.1)"
              stroke="rgba(249, 115, 22, 0.35)"
              strokeWidth="1"
            />
            <circle cx="140" cy="140" r="3" fill="#fb923c" opacity="0.7" />

            {/* Queue / Kafka Bus Buffer Nodes */}
            <rect
              x="52"
              y="212"
              width="16"
              height="16"
              rx="3"
              fill="rgba(255, 255, 255, 0.04)"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="1"
            />
            <circle cx="60" cy="220" r="2" fill="#34d399" opacity="0.5" />

            <rect
              x="212"
              y="212"
              width="16"
              height="16"
              rx="3"
              fill="rgba(249, 115, 22, 0.08)"
              stroke="rgba(249, 115, 22, 0.3)"
              strokeWidth="1"
            />
            <circle cx="220" cy="220" r="2.5" fill="#f97316" opacity="0.6" />

            {/* Data flow packet indicators */}
            <circle cx="100" cy="60" r="1.5" fill="#ffffff" opacity="0.35" />
            <circle cx="180" cy="60" r="1.5" fill="#ffffff" opacity="0.35" />
            <circle cx="60" cy="180" r="1.5" fill="#f97316" opacity="0.4" />
            <circle cx="220" cy="100" r="1.5" fill="#f97316" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#backend-topology)" />
      </svg>

      {/* 3. Ambient warm orange/amber glow highlights matching the hero doorway */}
      <div
        className="absolute top-[18%] right-[-10%] w-[550px] h-[550px] rounded-full blur-[140px] opacity-20"
        style={{ background: "radial-gradient(circle, #f97316 0%, #ea580c 45%, transparent 70%)" }}
      />
      <div
        className="absolute top-[55%] left-[-10%] w-[650px] h-[650px] rounded-full blur-[160px] opacity-15"
        style={{ background: "radial-gradient(circle, #f59e0b 0%, #d97706 45%, transparent 70%)" }}
      />
      <div
        className="absolute top-[85%] right-[15%] w-[450px] h-[450px] rounded-full blur-[150px] opacity-12"
        style={{ background: "radial-gradient(circle, #f97316 0%, transparent 65%)" }}
      />
      
      {/* 4. Top subtle vignette */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#050608] to-transparent" />
      {/* 5. Bottom subtle vignette */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#050608] to-transparent" />
    </div>
  );
};

