import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

interface ClickRipple {
  id: number;
  x: number;
  y: number;
}

export const LaserPointer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [ripples, setRipples] = useState<ClickRipple[]>([]);
  const rippleCountRef = useRef(0);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Smooth springs for the laser reticle and trailing laser beam
  const springConfig = { damping: 28, stiffness: 420, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Ambient fluid laser cone reflecting across the background schematic
  const haloSpringConfig = { damping: 32, stiffness: 190, mass: 0.8 };
  const haloX = useSpring(mouseX, haloSpringConfig);
  const haloY = useSpring(mouseY, haloSpringConfig);

  useEffect(() => {
    // Detect touch / coarse pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check if hovering an interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest(
            "a, button, [role='button'], input, textarea, select, .interactive-element, .group, [tabindex]"
          )
        );
        setIsHovered(isInteractive);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicked(true);
      const newRipple: ClickRipple = {
        id: ++rippleCountRef.current,
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev.slice(-4), newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 700);
    };

    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Magic Laser Illumination Cone (revealing background topology) */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          x: haloX,
          y: haloY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovered ? 420 : 320,
          height: isHovered ? 420 : 320,
          background: isHovered
            ? "radial-gradient(circle, rgba(249, 115, 22, 0.22) 0%, rgba(245, 158, 11, 0.10) 40%, rgba(234, 88, 12, 0.03) 65%, transparent 75%)"
            : "radial-gradient(circle, rgba(249, 115, 22, 0.14) 0%, rgba(245, 158, 11, 0.05) 45%, transparent 70%)",
          transition: "width 0.3s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease",
        }}
      />

      {/* 2. Concentric Click Shockwaves */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ width: 0, height: 0, opacity: 0.9 }}
            animate={{ width: 140, height: 140, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="absolute rounded-full border-2 border-orange-400"
            style={{
              left: ripple.x,
              top: ripple.y,
              translateX: "-50%",
              translateY: "-50%",
              boxShadow: "0 0 16px rgba(249, 115, 22, 0.8), inset 0 0 10px rgba(251, 146, 60, 0.5)",
            }}
          />
        ))}
      </AnimatePresence>

      {/* 3. Trailing Laser Reticle Ring */}
      <motion.div
        className="absolute rounded-full border border-orange-500/50"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          width: isClicked ? 18 : isHovered ? 46 : 28,
          height: isClicked ? 18 : isHovered ? 46 : 28,
          boxShadow: isHovered
            ? "0 0 20px rgba(249, 115, 22, 0.7), inset 0 0 10px rgba(251, 146, 60, 0.3)"
            : "0 0 10px rgba(249, 115, 22, 0.35)",
          borderColor: isHovered ? "rgba(251, 146, 60, 0.9)" : "rgba(249, 115, 22, 0.45)",
          transition:
            "width 0.2s cubic-bezier(0.16, 1, 0.3, 1), height 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s",
        }}
      >
        {/* Reticle targeting crosshair ticks when hovering interactive elements */}
        {isHovered && (
          <>
            <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-orange-400 shadow-[0_0_6px_#f97316]" />
            <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-orange-400 shadow-[0_0_6px_#f97316]" />
            <span className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-0.5 h-2 bg-orange-400 shadow-[0_0_6px_#f97316]" />
            <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-0.5 h-2 bg-orange-400 shadow-[0_0_6px_#f97316]" />
          </>
        )}
      </motion.div>

      {/* 4. Ultra-sharp Magic Laser Focal Core */}
      <motion.div
        className="absolute rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width: isClicked ? 3.5 : isHovered ? 6.5 : 5,
          height: isClicked ? 3.5 : isHovered ? 6.5 : 5,
          backgroundColor: "#ffffff",
          boxShadow:
            "0 0 4px 1.5px #ffffff, 0 0 12px 3px #ff7700, 0 0 24px 6px rgba(249, 115, 22, 0.85), 0 0 40px 10px rgba(234, 88, 12, 0.4)",
          transition: "width 0.12s ease, height 0.12s ease",
        }}
      />
    </div>
  );
};
