import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-3.5 h-3.5" }) => {
  const norm = name.toLowerCase().trim();

  // Node.js
  if (norm.includes("node.js") || norm === "node") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="#68a063" fill="rgba(104, 160, 99, 0.15)" />
        <path d="M12 22V12" stroke="#68a063" />
        <path d="M21 7l-9 5-9-5" stroke="#68a063" />
      </svg>
    );
  }

  // TypeScript
  if (norm.includes("typescript")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178c6" fillOpacity="0.2" stroke="#3178c6" strokeWidth="1.5" />
        <text x="5" y="17" fill="#60a5fa" fontSize="12" fontWeight="bold" fontFamily="monospace">TS</text>
      </svg>
    );
  }

  // JavaScript
  if (norm.includes("javascript")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#f7df1e" fillOpacity="0.2" stroke="#f7df1e" strokeWidth="1.5" />
        <text x="6" y="17" fill="#fde047" fontSize="12" fontWeight="bold" fontFamily="monospace">JS</text>
      </svg>
    );
  }

  // React
  if (norm.includes("react")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="#38bdf8" />
      </svg>
    );
  }

  // PostgreSQL
  if (norm.includes("postgres")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5">
        <path d="M4 6c0-1.66 3.58-3 8-3s8 1.34 8 3v12c0 1.66-3.58 3-8 3s-8-1.34-8-3V6z" fill="rgba(56, 189, 248, 0.1)" />
        <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        <path d="M4 6c0 1.66 3.58 3 8 3s8-1.34 8-3" />
      </svg>
    );
  }

  // Redis
  if (norm.includes("redis")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <polygon points="12,2 22,7 12,12 2,7" fill="#dc2626" fillOpacity="0.25" stroke="#ef4444" strokeWidth="1.5" />
        <polygon points="2,12 12,17 22,12" stroke="#ef4444" strokeWidth="1.5" />
        <polygon points="2,17 12,22 22,17" stroke="#ef4444" strokeWidth="1.5" />
      </svg>
    );
  }

  // Apache Kafka
  if (norm.includes("kafka")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" fill="#f97316" fillOpacity="0.3" />
        <circle cx="4" cy="7" r="2.5" />
        <circle cx="20" cy="7" r="2.5" />
        <circle cx="4" cy="17" r="2.5" />
        <circle cx="20" cy="17" r="2.5" />
        <line x1="6.5" y1="8" x2="9.5" y2="10.5" />
        <line x1="17.5" y1="8" x2="14.5" y2="10.5" />
        <line x1="6.5" y1="16" x2="9.5" y2="13.5" />
        <line x1="17.5" y1="16" x2="14.5" y2="13.5" />
      </svg>
    );
  }

  // GraphQL / Apollo
  if (norm.includes("graphql") || norm.includes("apollo") || norm.includes("postgraphile")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#e879f9" strokeWidth="1.5">
        <polygon points="12,2 21,7.5 21,17 12,22 3,17 3,7.5" fill="rgba(232, 121, 249, 0.12)" />
        <circle cx="12" cy="2" r="1.5" fill="#e879f9" />
        <circle cx="21" cy="7.5" r="1.5" fill="#e879f9" />
        <circle cx="21" cy="17" r="1.5" fill="#e879f9" />
        <circle cx="12" cy="22" r="1.5" fill="#e879f9" />
        <circle cx="3" cy="17" r="1.5" fill="#e879f9" />
        <circle cx="3" cy="7.5" r="1.5" fill="#e879f9" />
        <polygon points="12,6 18,10 18,15 12,18 6,15 6,10" />
      </svg>
    );
  }

  // Docker
  if (norm.includes("docker")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5">
        <path d="M2 13h20c0 4.5-3.5 8-8 8H7c-3 0-5-2-5-5v-3z" fill="rgba(56, 189, 248, 0.15)" />
        <rect x="5" y="9" width="3" height="3" fill="#38bdf8" fillOpacity="0.4" />
        <rect x="9" y="9" width="3" height="3" fill="#38bdf8" fillOpacity="0.4" />
        <rect x="13" y="9" width="3" height="3" fill="#38bdf8" fillOpacity="0.4" />
        <rect x="9" y="5" width="3" height="3" fill="#38bdf8" fillOpacity="0.4" />
      </svg>
    );
  }

  // Azure / Cloud
  if (norm.includes("azure") || norm.includes("cloud")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.5">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" fill="rgba(14, 165, 233, 0.15)" />
      </svg>
    );
  }

  // Git / GitHub Actions
  if (norm.includes("git")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.5">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="12" r="3" fill="rgba(249, 115, 22, 0.3)" />
        <path d="M6 9v6" />
        <path d="M9 12h6" />
      </svg>
    );
  }

  // MongoDB
  if (norm.includes("mongo")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="1.5">
        <path d="M12 2C8 7 6 12 12 22C18 12 16 7 12 2Z" fill="rgba(74, 222, 128, 0.15)" />
        <line x1="12" y1="2" x2="12" y2="22" />
      </svg>
    );
  }

  // Linux
  if (norm.includes("linux")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="3" fill="rgba(251, 191, 36, 0.1)" />
        <polyline points="7 10 10 12 7 14" />
        <line x1="12" y1="15" x2="16" y2="15" />
      </svg>
    );
  }

  // Power BI / Analytics / Monitoring
  if (norm.includes("power bi") || norm.includes("monitoring") || norm.includes("analytics")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="1.5">
        <rect x="4" y="14" width="3.5" height="7" rx="1" fill="#f59e0b" fillOpacity="0.4" />
        <rect x="10.25" y="9" width="3.5" height="12" rx="1" fill="#f59e0b" fillOpacity="0.6" />
        <rect x="16.5" y="4" width="3.5" height="17" rx="1" fill="#f59e0b" fillOpacity="0.8" />
      </svg>
    );
  }

  // REST APIs / RESTful
  if (norm.includes("rest") || norm.includes("api")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5">
        <rect x="3" y="5" width="18" height="14" rx="3" fill="rgba(56, 189, 248, 0.08)" />
        <path d="M7 12h10M13 8l4 4-4 4" />
      </svg>
    );
  }

  // TypeORM / ORM / SQL / Databases
  if (norm.includes("typeorm") || norm.includes("orm") || norm.includes("sql") || norm.includes("database")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5">
        <ellipse cx="12" cy="6" rx="8" ry="3" fill="rgba(245, 158, 11, 0.15)" />
        <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
        <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    );
  }

  // Microservices / Architecture
  if (norm.includes("microservice") || norm.includes("consumer") || norm.includes("handler")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="1.5" fill="rgba(251, 146, 60, 0.15)" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" fill="rgba(251, 146, 60, 0.15)" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" fill="rgba(251, 146, 60, 0.15)" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" fill="rgba(251, 146, 60, 0.15)" />
      </svg>
    );
  }

  // CI/CD / Pipeline / Queue
  if (norm.includes("ci/cd") || norm.includes("queue") || norm.includes("stream") || norm.includes("event")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 3" />
        <path d="M8 3l4-2 4 2" />
      </svg>
    );
  }

  // CSS / Styling
  if (norm.includes("css")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5">
        <path d="M4 3l1.5 15L12 21l6.5-3L20 3H4z" fill="rgba(56, 189, 248, 0.12)" />
        <path d="M8 8h8M8 12h7l-.5 4-2.5.7-2.5-.7-.2-2" />
      </svg>
    );
  }

  // Default clean terminal / code glyph
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.5">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};
