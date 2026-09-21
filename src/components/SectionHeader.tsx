import React from "react";
import { Terminal } from "lucide-react";
import { LaserUnderline } from "./LaserUnderline";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
}) => {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 sm:mb-16 ${isCenter ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}>
      <div
        className={`inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#11141c] border border-orange-500/20 text-orange-400 font-mono text-[11px] uppercase tracking-wider mb-4 ${
          isCenter ? "mx-auto" : ""
        }`}
      >
        <Terminal className="w-3 h-3 text-orange-400" />
        <span>{eyebrow}</span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
        {title}
      </h2>

      <LaserUnderline width={isCenter ? "max-w-md mx-auto" : "max-w-md"} className="mb-4" />

      {description && (
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
