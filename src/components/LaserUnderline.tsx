import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface LaserUnderlineProps {
  className?: string;
  width?: string;
}

export const LaserUnderline: React.FC<LaserUnderlineProps> = ({
  className = "",
  width = "w-full",
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative h-[2px] overflow-hidden my-3 ${width} ${className}`} aria-hidden="true">
      {/* Static subtle guide track */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      {/* Travelling Laser Scan Beam */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute top-0 bottom-0 w-32 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(249, 115, 22, 0.4) 25%, #ffffff 50%, rgba(249, 115, 22, 0.4) 75%, transparent 100%)",
            boxShadow: "0 0 10px 2px rgba(249, 115, 22, 0.7), 0 0 20px 4px rgba(245, 158, 11, 0.4)",
          }}
          animate={{
            x: ["-100%", "400%"],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 0.5,
          }}
        />
      )}
    </div>
  );
};
