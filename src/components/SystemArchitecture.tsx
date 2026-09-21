import React, { useState } from "react";
import {
  Server,
  Layers,
  Database,
  Cpu,
  Radio,
  Workflow,
  HardDrive,
  Info,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { portfolio, type ArchitectureNode } from "../data/portfolio";

export const SystemArchitecture: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<ArchitectureNode>(
    portfolio.architectureNodes[1] // Default to API Gateway
  );

  const getNodeIcon = (category: ArchitectureNode["category"]) => {
    switch (category) {
      case "client":
        return <Layers className="w-4 h-4 text-sky-400" />;
      case "gateway":
        return <Workflow className="w-4 h-4 text-orange-400" />;
      case "service":
        return <Server className="w-4 h-4 text-emerald-400" />;
      case "messaging":
        return <Radio className="w-4 h-4 text-amber-400" />;
      case "cache":
        return <Cpu className="w-4 h-4 text-red-400" />;
      case "database":
        return <Database className="w-4 h-4 text-indigo-400" />;
      case "worker":
        return <HardDrive className="w-4 h-4 text-purple-400" />;
      default:
        return <Server className="w-4 h-4 text-orange-400" />;
    }
  };

  return (
    <div className="rounded-xl bg-[#090b10] border border-white/10 p-5 sm:p-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Diagram Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
          <span className="font-mono text-xs text-slate-300 font-semibold uppercase tracking-wider">
            DISTRIBUTED_SYSTEM_TOPOLOGY
          </span>
        </div>
        <div className="text-[11px] font-mono text-slate-400">
          SELECT A NODE TO INSPECT ARCHITECTURAL PATTERN & TRADE-OFFS
        </div>
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Nodes Flow Layout (Left / Center) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">
            System Request & Event Pipeline
          </div>

          {/* Flow list for all viewports with interactive selection */}
          <div className="space-y-3">
            {portfolio.architectureNodes.map((node, index) => {
              const isSelected = selectedNode.id === node.id;
              return (
                <div key={node.id} className="relative">
                  {/* Vertical connector line */}
                  {index < portfolio.architectureNodes.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-6 bg-gradient-to-b from-orange-500/40 to-white/10 z-0" />
                  )}

                  <button
                    type="button"
                    onClick={() => setSelectedNode(node)}
                    className={`w-full relative z-10 text-left p-3.5 sm:p-4 rounded-lg border transition-all duration-200 flex items-center justify-between group focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none ${
                      isSelected
                        ? "bg-[#141824] border-orange-500/60 shadow-[0_0_20px_rgba(249,115,22,0.15)]"
                        : "bg-[#0d0f17] border-white/10 hover:border-white/20 hover:bg-[#10131d]"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-9 h-9 rounded-md flex items-center justify-center border transition-colors ${
                          isSelected
                            ? "bg-orange-500/20 border-orange-500/60 text-orange-400"
                            : "bg-[#161a26] border-white/10 text-slate-400 group-hover:text-slate-200"
                        }`}
                      >
                        {getNodeIcon(node.category)}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-sm font-semibold transition-colors ${
                              isSelected ? "text-orange-400" : "text-white"
                            }`}
                          >
                            {node.label}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                            {node.protocol}
                          </span>
                        </div>
                        <div className="text-xs text-slate-400 font-mono mt-0.5">
                          {node.subtext}
                        </div>
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-2 text-xs font-mono">
                      <span className={`text-[11px] ${isSelected ? "text-orange-400" : "text-slate-500 group-hover:text-slate-300"}`}>
                        Inspect
                      </span>
                      <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? "text-orange-400 translate-x-0.5" : "text-slate-600"}`} />
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Node Details Panel (Right side) */}
        <div className="lg:col-span-5 sticky top-24">
          <div className="rounded-lg bg-[#0e111a] border border-orange-500/30 p-6 shadow-xl relative">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-orange-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-semibold">
                  Node Telemetry & Architecture
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                ACTIVE
              </span>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-bold text-white mb-1">
                {selectedNode.label}
              </h4>
              <p className="text-xs font-mono text-slate-400">
                Protocol: <span className="text-orange-300">{selectedNode.protocol}</span>
              </p>
            </div>

            <div className="space-y-4 text-xs leading-relaxed">
              <div>
                <div className="font-mono text-[11px] text-slate-500 uppercase tracking-wider mb-1">
                  Architectural Responsibility
                </div>
                <p className="text-slate-300 bg-[#07090e] p-3 rounded border border-white/5">
                  {selectedNode.description}
                </p>
              </div>

              <div>
                <div className="font-mono text-[11px] text-slate-500 uppercase tracking-wider mb-1">
                  Engineering Trade-Offs & Decisions
                </div>
                <p className="text-slate-300 bg-[#07090e] p-3 rounded border border-white/5 font-mono text-[11px]">
                  {selectedNode.tradeoffs}
                </p>
              </div>

              <div className="pt-2">
                <div className="p-3 rounded bg-[#131724] border border-orange-500/20 text-[11px] font-mono text-orange-300/90 flex items-center justify-between">
                  <span>RESILIENCE_STRATEGY:</span>
                  <span className="text-white">AUTOMATIC RETRY & IDEMPOTENCY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
