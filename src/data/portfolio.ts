export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  email: string;
}

export interface EngineeringArea {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  technicalCapabilities: string[];
  systemArtifact: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  category: "client" | "gateway" | "service" | "messaging" | "cache" | "database" | "worker";
  subtext: string;
  protocol: string;
  description: string;
  tradeoffs: string;
  x: number; // percentage coordinate 0-100
  y: number; // percentage coordinate 0-100
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location?: string;
  description: string;
  technologies: string[];
  achievements: string[];
  isPlaceholder?: boolean;
}

export interface EngineeringChallenge {
  challenge: string;
  problem?: string;
  constraint: string;
  decision: string;
  tradeoff: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  architecture: string; // e.g., "Client -> API Gateway -> Service -> Kafka -> Consumer -> Database"
  problem: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image?: string;
  featured?: boolean;
  engineeringChallenges: EngineeringChallenge[];
  solutions: string[];
  results: string[];
  isPlaceholder?: boolean;
}

export interface PortfolioData {
  name: string;
  title: string;
  headline: string;
  subheadline: string;
  summary: string;
  about: {
    headline: string;
    bio: string[];
    corePhilosophy: string;
    principles: { title: string; desc: string }[];
  };
  socialLinks: SocialLinks;
  contact: {
    heading: string;
    subheading: string;
    email: string;
    github: string;
    linkedin: string;
    twitter?: string;
    status: string;
    responseMessage: string;
  };
  engineeringAreas: EngineeringArea[];
  architectureNodes: ArchitectureNode[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
}

export const portfolio: PortfolioData = {
  name: "Teja",
  title: "SDE2 · Backend-Driven Full-Stack Engineer & System Architect",
  headline: "Backend-Driven Full-Stack Engineer",
  subheadline: "System Architecture & Scalable Engineering.",
  summary:
    "SDE2 at Dhan AI with nearly 5 years of experience specializing in backend-driven full-stack engineering and system architecture — architecting resilient APIs, microservices, Apache Kafka event streams, and scalable PostgreSQL/TypeORM data layers powering responsive client applications.",
  
  about: {
    headline: "SDE2 at Dhan AI · Backend-Driven Full-Stack Engineering & System Architecture",
    bio: [
      "I am an SDE2 at Dhan AI with nearly 5 years of software engineering experience specializing in backend-driven full-stack engineering, distributed systems, and scalable system architecture.",
      "Over my tenure at Dhan AI—advancing from Junior Software Engineer to SDE2—I have architected and scaled production systems utilizing Node.js, TypeScript, PostgreSQL, TypeORM, GraphQL (Apollo GraphQL & PostGraphile), and Apache Kafka. My focus centers on bulletproof data consistency, transactional integrity, low-latency API contracts, asynchronous event-driven pipelines, and cloud services on Microsoft Azure.",
      "By anchoring my engineering in deep backend systems and pairing it with robust full-stack execution in React and TypeScript, I deliver cohesive, end-to-end architectures where database transactions, event streams, and modern user experiences function in harmony."
    ],
    corePhilosophy: "Code is temporary; architecture, interface contracts, and data consistency endure.",
    principles: [
      {
        title: "Contract-First Architecture",
        desc: "Strict schemas, explicit error models, and backwards-compatible REST and GraphQL contracts across service boundaries."
      },
      {
        title: "Resilient & Asynchronous",
        desc: "Decoupling workloads through Apache Kafka event streams, idempotency keys, and resilient consumer retry policies."
      },
      {
        title: "Predictable Performance",
        desc: "Optimized indexing, query profiling with pgAdmin, TypeORM caching layers, and connection pooling over speculative optimization."
      },
      {
        title: "Full-Stack System Cohesion",
        desc: "Designing APIs with deep client context, reducing network cascades, and ensuring synchronous and asynchronous state align seamlessly."
      }
    ]
  },

  socialLinks: {
    github: "https://github.com/tejamanchem",
    linkedin: "https://www.linkedin.com/in/teja-sai-018665215/",
    twitter: "https://x.com/Teja31962915",
    email: "tejamanchem144@gmail.com"
  },

  contact: {
    heading: "Let's build something meaningful.",
    subheading:
      "Whether you're looking for a backend engineer for scalable microservices, distributed event pipelines, or full-stack application development, let's connect.",
    email: "tejamanchem144@gmail.com",
    github: "https://github.com/tejamanchem",
    linkedin: "https://www.linkedin.com/in/teja-sai-018665215/",
    twitter: "https://x.com/Teja31962915",
    status: "Open to backend & distributed systems opportunities",
    responseMessage: "Direct engineering contact. Typically responding within 24 hours."
  },

  engineeringAreas: [
    {
      id: "backend-systems",
      title: "Backend Systems",
      tagline: "Scalable Logic & High-Throughput Services",
      description:
        "Building reliable backend services, business logic engines, and scalable workloads designed for predictable latency and high availability under load.",
      icon: "Server",
      technicalCapabilities: [
        "Node.js & TypeScript service runtime",
        "Multi-threaded worker processes",
        "Connection pooling & resource management",
        "Graceful degradation & circuit breakers"
      ],
      systemArtifact: "PROCESS::WORKER_POOL [STATUS: HEALTHY | LATENCY: 2.1ms]"
    },
    {
      id: "apis-microservices",
      title: "APIs & Microservices",
      tagline: "Contract-Driven Communication",
      description:
        "Designing REST and GraphQL interfaces and modular microservices with strict schema validation, robust authentication, and deterministic error handling.",
      icon: "Network",
      technicalCapabilities: [
        "RESTful API design & OpenAPI specs",
        "GraphQL schema & resolver optimization",
        "Rate limiting & token-bucket algorithms",
        "API Gateway routing & middleware pipelines"
      ],
      systemArtifact: "POST /v1/events -> 202 ACCEPTED [TRACE_ID: 8fa9-410c]"
    },
    {
      id: "event-driven",
      title: "Event-Driven Architecture",
      tagline: "Asynchronous Messaging & Streaming",
      description:
        "Working with asynchronous communication, decoupled message queues, and Kafka event streaming to ensure durable, decoupled distributed state.",
      icon: "Cpu",
      technicalCapabilities: [
        "Kafka topic partitioning & consumer groups",
        "Idempotent event processing & deduplication",
        "Dead-letter queues & retry strategies",
        "Outbox pattern for distributed consistency"
      ],
      systemArtifact: "KAFKA::TOPIC[orders.events] -> CONSUMER_GROUP[rebalance:ok]"
    },
    {
      id: "databases-storage",
      title: "Databases & Storage",
      tagline: "Data Modeling & Cache Topology",
      description:
        "Designing and optimizing SQL/NoSQL schemas, implementing multi-tier caching with Redis, indexing strategies, and transactional consistency.",
      icon: "Database",
      technicalCapabilities: [
        "PostgreSQL schema design & relational indexing",
        "MongoDB document structure & aggregation",
        "Redis cache-aside, pub/sub, & key expiration",
        "Query execution planning & optimization"
      ],
      systemArtifact: "POSTGRES[POOL: 24/50 | P99_QUERY: 1.4ms] + REDIS[HIT_RATIO: 94.2%]"
    },
    {
      id: "cloud-devops",
      title: "Cloud & DevOps",
      tagline: "Containerization & Automation",
      description:
        "Automating build pipelines, packaging applications in lightweight containers, cloud integration with Azure, and continuous deployment workflows.",
      icon: "Cloud",
      technicalCapabilities: [
        "Docker multi-stage builds & container optimization",
        "Azure cloud services & resource provisioning",
        "GitHub Actions CI/CD automation pipelines",
        "Structured logging, tracing, & health probes"
      ],
      systemArtifact: "DOCKER::BUILD [IMAGE: 42MB] -> GITHUB_ACTION [DEPLOY: SUCCESS]"
    },
    {
      id: "fullstack-apps",
      title: "Full-Stack Applications",
      tagline: "End-to-End Cohesion",
      description:
        "Building responsive React frontend applications that integrate cleanly with backend APIs, handling async state, optimistic UI, and user experience.",
      icon: "Layers",
      technicalCapabilities: [
        "React & TypeScript component architecture",
        "Type-safe API client consumption",
        "State management & cache invalidation",
        "Performance optimization & responsive layouts"
      ],
      systemArtifact: "UI::CLIENT [HYDRATION: 18ms] <-> WS_STREAM [CONNECTED]"
    }
  ],

  architectureNodes: [
    {
      id: "client",
      label: "Client / Frontend",
      category: "client",
      subtext: "Web & Mobile Applications",
      protocol: "HTTPS / WSS",
      description: "React client issuing type-safe REST/GraphQL requests and consuming real-time streaming updates.",
      tradeoffs: "Optimistic updates vs. verified server state confirmation.",
      x: 10,
      y: 35
    },
    {
      id: "gateway",
      label: "API Gateway",
      category: "gateway",
      subtext: "Traffic Router & Security",
      protocol: "Reverse Proxy",
      description: "Enforces rate limiting, JWT validation, SSL termination, and routes requests to appropriate microservices.",
      tradeoffs: "Centralized policy enforcement vs. single ingress latency hop.",
      x: 35,
      y: 35
    },
    {
      id: "services",
      label: "Backend Services",
      category: "service",
      subtext: "Core Domain Logic",
      protocol: "Internal RPC / HTTP",
      description: "Decoupled domain services executing business logic, input validation, and transactional invariants.",
      tradeoffs: "Modular service boundaries vs. network serialization overhead.",
      x: 62,
      y: 20
    },
    {
      id: "cache",
      label: "Redis Cache Layer",
      category: "cache",
      subtext: "Sub-millisecond In-Memory Store",
      protocol: "RESP Protocol",
      description: "Cache-aside lookups for hot entity reads, session management, and distributed rate limiting counters.",
      tradeoffs: "Extreme read throughput vs. cache invalidation complexity.",
      x: 90,
      y: 20
    },
    {
      id: "kafka",
      label: "Kafka Message Broker",
      category: "messaging",
      subtext: "Durable Event Stream",
      protocol: "Kafka Binary Protocol",
      description: "Partitioned event log decoupling transactional services from asynchronous consumers with replayable history.",
      tradeoffs: "Decoupled async throughput vs. eventual consistency considerations.",
      x: 62,
      y: 60
    },
    {
      id: "workers",
      label: "Event Consumers",
      category: "worker",
      subtext: "Async Worker Pools",
      protocol: "Consumer Groups",
      description: "Idempotent background workers processing events, generating notifications, and synchronizing read models.",
      tradeoffs: "Horizontal scaling of workers vs. partition rebalance handling.",
      x: 90,
      y: 60
    },
    {
      id: "database",
      label: "PostgreSQL Database",
      category: "database",
      subtext: "Primary Relational Storage",
      protocol: "TCP / Connection Pool",
      description: "ACID-compliant storage for core business entities with strict foreign keys, indexes, and connection pooling.",
      tradeoffs: "Strong consistency & relational integrity vs. horizontal write scaling.",
      x: 62,
      y: 90
    }
  ],

  skills: [
    {
      category: "BACKEND & APIS",
      description: "Service runtime, microservices, and contract-first API development.",
      skills: [
        "Node.js",
        "TypeScript",
        "JavaScript",
        "REST APIs",
        "RESTful WebServices",
        "GraphQL",
        "Apollo GraphQL",
        "PostGraphile",
        "Microservices"
      ]
    },
    {
      category: "DATABASES & ORM",
      description: "Relational modeling, ORM mapping, and query optimization.",
      skills: [
        "PostgreSQL",
        "TypeORM",
        "SQL",
        "MongoDB",
        "pgAdmin",
        "Redis"
      ]
    },
    {
      category: "MESSAGING & STREAMING",
      description: "Distributed messaging, high-throughput event logs, and queues.",
      skills: [
        "Apache Kafka",
        "Event-driven systems",
        "Message queues",
        "Consumer Groups",
        "Idempotent Handlers"
      ]
    },
    {
      category: "CLOUD & DEVOPS",
      description: "Cloud infrastructure, containerization, and automated deployments.",
      skills: [
        "Microsoft Azure",
        "Docker",
        "CI/CD",
        "GitHub Actions",
        "Azure Services"
      ]
    },
    {
      category: "ANALYTICS & TOOLS",
      description: "Operational intelligence, debugging, and development tooling.",
      skills: [
        "Microsoft Power BI",
        "Git",
        "Linux",
        "pgAdmin",
        "Monitoring",
        "Logging"
      ]
    },
    {
      category: "FRONTEND",
      description: "Complementary full-stack capabilities for complete product delivery.",
      skills: [
        "React",
        "TypeScript",
        "Modern CSS",
        "API integration",
        "State Management"
      ]
    }
  ],

  experience: [
    {
      id: "exp-dhan-sde2",
      company: "Dhan AI",
      role: "SDE2",
      startDate: "Jun 2025",
      endDate: "Present",
      location: "India · Remote",
      description:
        "Leading core distributed architecture, telecom diagnostic systems, and real-time observability platforms. Architect of the NOC PulseTriage outage classification engine and the Pulse geospatial operational metrics dashboard.",
      technologies: [
        "PostgreSQL",
        "TypeORM",
        "Node.js",
        "TypeScript",
        "Apache Kafka",
        "Event Correlation Models",
        "WebSockets",
        "GraphQL",
        "Apollo GraphQL",
        "PostGraphile",
        "Microsoft Azure",
        "Redis"
      ],
      achievements: [
        "Architected the NOC PulseTriage platform, utilizing temporal event correlation models over Kafka event logs to automatically classify network outages (power cut vs. ONT down vs. fiber cable cut).",
        "Designed and implemented an interactive end-to-end network topology graph from subscriber ONT through splitters to central OLT chassis, pinpointing root-cause equipment faults with sub-second latency.",
        "Built the Pulse real-time operational dashboard, aggregating cross-system throughput, week-over-week order velocity, GIS outage vs. customer call heatmaps, and speed test distribution telemetry.",
        "Engineered scalable GraphQL interfaces (Apollo GraphQL & PostGraphile) and robust TypeORM PostgreSQL transactions handling high-frequency telemetry ingestion."
      ],
      isPlaceholder: false
    },
    {
      id: "exp-dhan-se",
      company: "Dhan AI",
      role: "Software Engineer",
      startDate: "May 2022",
      endDate: "Jul 2025",
      location: "Hyderabad, Telangana, India",
      description:
        "Engineered distributed communication microservices, address intelligence platforms, and automated government subsidy enrollment workflows across mission-critical telecom services.",
      technologies: [
        "Node.js",
        "TypeScript",
        "Node-RED",
        "Apache Kafka",
        "Smarty Address API",
        "PostgreSQL",
        "TypeORM",
        "Redis",
        "REST APIs",
        "RESTful WebServices",
        "Azure Key Vault",
        "Docker"
      ],
      achievements: [
        "Developed the ZCN (Zero-touch Customer Notification) platform, embedding Node-RED business logic flows to dynamically orchestrate outage notifications across multi-channel endpoints (SMS/Email/Push).",
        "Engineered the AQM (Address Quality Management) system integrating Smarty Address APIs, delivering USPS CASS standardization and automated fiber broadband service qualification with sub-10ms Redis caching.",
        "Architected the GovSubsidy enrollment engine, securely interfacing with external government registry APIs to automate eligibility checks and apply billing discounts to customer accounts.",
        "Designed resilient database schemas and automated TypeORM migrations in PostgreSQL, utilizing pgAdmin profiling and connection pooling to ensure 99.99% service uptime."
      ],
      isPlaceholder: false
    },
    {
      id: "exp-dhan-jse",
      company: "Dhan AI",
      role: "Junior Software Engineer (Intern)",
      startDate: "Dec 2021",
      endDate: "May 2022",
      location: "Hyderabad, Telangana, India",
      description:
        "Contributed to backend data pipelines with Apache Kafka, built data ingestion endpoints, and developed operational analytics dashboards using Microsoft Power BI.",
      technologies: [
        "Apache Kafka",
        "Microsoft Power BI",
        "SQL",
        "Node.js",
        "JavaScript",
        "REST APIs",
        "PostgreSQL"
      ],
      achievements: [
        "Built real-time telemetry and operational intelligence dashboards with Microsoft Power BI, integrating with live database queries and subscriber speed test feeds.",
        "Assisted in configuring Kafka topics and message producer/consumer workers for backend data ingestion pipelines.",
        "Developed backend RESTful endpoints and data transformation scripts in Node.js and JavaScript."
      ],
      isPlaceholder: false
    }
  ],

  projects: [
    {
      id: "project-zcn",
      name: "Intelligent Customer Communication & Outage Notification Engine",
      description:
        "High-throughput distributed communication platform dispatching automated, preference-driven notifications across multi-channel endpoints (SMS, Email, Push, Webhooks) during network outages and operational events.",
      architecture:
        "Incident Telemetry → Kafka Ingestion → Node-RED Workflow Engine → Customer Preference Filter → Multi-Channel Dispatcher (SMS/Email/Push) → Delivery Tracker & PostgreSQL",
      problem:
        "During critical network disruptions, cascading alerts flooded communication channels without honoring customer communication channel preferences or quiet hours, resulting in duplicate notifications, carrier rate-limiting, and severe customer dissatisfaction.",
      technologies: [
        "Node.js",
        "TypeScript",
        "Node-RED",
        "Apache Kafka",
        "PostgreSQL",
        "TypeORM",
        "Redis",
        "REST APIs",
        "Webhooks"
      ],
      githubUrl: "https://github.com/tejamanchem",
      liveUrl: "",
      featured: true,
      engineeringChallenges: [
        {
          challenge: "Dynamic business rule orchestration without continuous microservice redeployment",
          constraint:
            "Incident management teams needed to create and modify multi-step notification workflows tailored to outage severity and regional tiers without waiting for full release cycles.",
          decision:
            "Embedded a headless Node-RED flow execution runtime inside a Node.js microservice wrapper, exposing visual flow configuration for conditional routing, channel fallbacks, and payload transformations.",
          tradeoff:
            "Introduced a runtime dependency on Node-RED flow definitions, which required strict automated JSON schema validation to prevent runtime syntax errors."
        },
        {
          challenge: "Preventing carrier rate-limit blacklisting and notification storms during sudden major outages",
          constraint:
            "A single severed fiber trunk can trigger 50,000+ subscriber disconnect events within seconds, overwhelming SMS gateways and third-party telecom APIs.",
          decision:
            "Architected Kafka partitioned topics with Redis token-bucket rate limiters and message deduplication hashes, batching and pacing outbound dispatches with exponential backoff and DLQs.",
          tradeoff:
            "Introduced a 15-30 second delivery pacing window across large subscriber bases in exchange for 100% gateway deliverability and avoiding carrier blacklisting."
        }
      ],
      solutions: [
        "Built custom Node-RED rule nodes for customer preference filtering, quiet-hours suppression, and dynamic template rendering.",
        "Designed an asynchronous Kafka ingestion pipeline with Redis idempotency keys to eliminate duplicate alert dispatching.",
        "Implemented end-to-end delivery telemetry capturing SMS delivery receipts (DLR), email open rates, and webhook retry statuses."
      ],
      results: [
        "Successfully processed over 2M+ automated outage and operational notifications with 99.98% delivery reliability.",
        "Reduced incoming customer care call center volume by 42% during major network incidents through proactive, instant alerts.",
        "Decreased notification workflow modification turnaround time from 3 business days to under 30 minutes via Node-RED flow updates."
      ],
      isPlaceholder: false
    },
    {
      id: "project-noc",
      name: "NOC Network Outage Classifier & End-to-End Fiber Topology System",
      description:
        "Intelligent network diagnostics and triage platform that classifies outage root causes (power cut vs. ONT down vs. fiber cable cut) using temporal event correlation models, while rendering an end-to-end network topology graph from ONT to OLT to pinpoint affected systems.",
      architecture:
        "Syslog / SNMP Stream → Kafka Event Ingestion → Temporal Event Correlation & Classifier → Network Topology Engine (ONT to OLT) → Interactive Topology Canvas UI & Proactive Alert Dispatcher",
      problem:
        "When broadband connections dropped, Network Operations Center (NOC) engineers were inundated with thousands of cascading alarms and could not quickly tell whether an outage was an individual household power outage, a dead ONT, or a snapped fiber trunk cable, delaying repair response.",
      technologies: [
        "Node.js",
        "TypeScript",
        "Event Correlation Models",
        "Apache Kafka",
        "PostgreSQL",
        "TypeORM",
        "D3.js / Topology Canvas",
        "WebSockets",
        "SNMP"
      ],
      githubUrl: "https://github.com/tejamanchem",
      liveUrl: "",
      featured: true,
      engineeringChallenges: [
        {
          challenge: "Distinguishing utility power cuts from optical network equipment failures and fiber cuts",
          constraint:
            "When residential power fails, the customer's Optical Network Terminal (ONT) powers down abruptly without standard network disconnect procedures, generating alarms indistinguishable from fiber cut events.",
          decision:
            "Engineered an event correlation engine that analyzes preceding and succeeding telemetry events across neighboring network nodes—evaluating 'dying gasp' SNMP signals, power grid telemetry, and geographic clustering of adjacent ONT loss-of-signal events within a 30-second window.",
          tradeoff:
            "A 30-second temporal observation window was required to aggregate neighboring telemetry, trading instantaneous alarm dispatching for 96% classification accuracy."
        },
        {
          challenge: "Rendering high-density end-to-end network topology graphs (ONT → Splitter → OLT) without browser lag",
          constraint:
            "Displaying hierarchical telecommunications infrastructure containing thousands of customer ONTs, fiber splitters, distribution hubs, and OLT ports caused severe DOM lag and memory bottlenecks.",
          decision:
            "Built an optimized hierarchical graph rendering engine using HTML5 Canvas and D3-force with level-of-detail (LOD) node virtualization and WebSocket incremental diffs, highlighting only impacted branches and critical path failure nodes.",
          tradeoff:
            "Canvas-based rendering required custom tooltip and hit-testing math compared to standard SVG DOM elements, but yielded butter-smooth 60fps interaction on enterprise topology graphs."
        }
      ],
      solutions: [
        "Trained and deployed temporal classification models categorizing events into: Power Outage, ONT Hardware Fault, Port Failure, or Fiber Trunk Severance.",
        "Built an interactive end-to-end network topology visualization rendering the full physical and logical path from customer ONT through fiber splitters to the central office OLT.",
        "Automated targeted incident notifications dispatched directly to affected customers with root cause explanation, ETA for resolution, and live status tracking."
      ],
      results: [
        "Decreased Mean Time to Identify (MTTI) network outages by 68%, cutting diagnosis time from hours to under 2 minutes.",
        "Prevented hundreds of unnecessary field technician truck rolls by accurately differentiating residential utility power outages from actual fiber breaks.",
        "Empowered NOC operators with real-time visual root-cause diagnostics across active metropolitan fiber networks."
      ],
      isPlaceholder: false
    },
    {
      id: "project-pulse",
      name: "Pulse – Real-Time Telecom Observability, Outage Heatmap & Speed Test Platform",
      description:
        "Centralized operational intelligence and monitoring platform tracking cross-system data served, notification delivery rates, week-over-week order velocity, GIS geospatial outage vs. customer support call heatmaps, and subscriber speed test metrics.",
      architecture:
        "Multi-System Metrics & Speed Test Feeds → Kafka Aggregator → TimescaleDB & Redis Rollups → Real-Time Analytics API → Interactive GIS Heatmap + WoW Trend Dashboard",
      problem:
        "Telecom leadership, operations, and support staff operated with fragmented dashboards, unable to correlate live physical network outages with spikes in customer care calls, order velocity changes, or actual subscriber bandwidth performance in the field.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Microsoft Power BI",
        "Redis",
        "Geospatial GIS Engine",
        "Recharts",
        "WebSockets"
      ],
      githubUrl: "https://github.com/tejamanchem",
      liveUrl: "",
      featured: true,
      engineeringChallenges: [
        {
          challenge: "Real-time geospatial correlation of active network outages with surging customer care call locations",
          constraint:
            "Correlating thousands of incoming call records per minute with dynamic geospatial outage polygon boundaries strained standard database spatial queries.",
          decision:
            "Implemented spatial coordinate bucketing in Redis and PostGIS spatial indexing, calculating distance-weighted proximity heatmaps in micro-batches every 5 seconds and pushing geospatial delta layers to the frontend via WebSockets.",
          tradeoff:
            "Micro-batch spatial joins introduced a minor 5-second telemetry lag, preventing database locking and maintaining 60fps GIS map panning and zooming."
        },
        {
          challenge: "Instant week-over-week (WoW) order and notification velocity comparisons over massive datasets",
          constraint:
            "Calculating real-time comparisons between today's metrics and the exact same weekday and hour from last week across millions of order and notification records led to expensive aggregate SQL scans.",
          decision:
            "Pre-computed time-series rollups in Redis sliding-window sorted sets and scheduled materialized aggregation tables, providing instant O(1) lookups for current vs. historical delta indicators.",
          tradeoff:
            "Required continuous background aggregation workers and Redis memory allocation in return for sub-50ms dashboard page loads."
        }
      ],
      solutions: [
        "Created an interactive GIS map plotting real-time fiber outage boundaries alongside customer support call volume heatmaps to immediately identify emerging trouble spots.",
        "Engineered a week-over-week analytics module comparing orders dispatched, notifications delivered, and system data volume (Today vs. Last Week).",
        "Built a Speed Test Analysis module tracking subscriber download/upload bandwidth, test frequency, latency jitter, and speed degradation patterns across geographical regions."
      ],
      results: [
        "Reduced time-to-detect unannounced network degradations from 45 minutes to under 3 minutes by detecting localized call center surges.",
        "Gave operations teams full visibility into weekly order velocity and multi-system data serving health on a single pane of glass.",
        "Analyzed over 500,000 subscriber speed tests, pinpointing Wi-Fi router bottlenecks vs. actual ISP fiber line degradation."
      ],
      isPlaceholder: false
    },
    {
      id: "project-aqm",
      name: "AQM – Address Quality Management & Broadband Service Qualification",
      description:
        "Enterprise address validation, standardization, and serviceability qualification engine integrating Smarty Address APIs to cleanse messy customer inputs, classify property types, and verify fiber broadband readiness.",
      architecture:
        "Customer Checkout / Intake UI → Address Sanitization & Geohash Pre-filter → Smarty API Gateway → CASS Normalization & Unit Parsing → Broadband Serviceability Engine → Redis Cache & PostgreSQL",
      problem:
        "Unstructured and mistyped customer addresses resulted in failed broadband service qualification checks, incorrect fiber availability promises, and costly on-site technician dispatches to non-existent or misclassified premises.",
      technologies: [
        "Node.js",
        "TypeScript",
        "Smarty Address API",
        "PostgreSQL",
        "TypeORM",
        "Redis",
        "Docker",
        "RESTful WebServices"
      ],
      githubUrl: "https://github.com/tejamanchem",
      liveUrl: "",
      featured: false,
      engineeringChallenges: [
        {
          challenge: "Sub-100ms real-time address autocomplete while minimizing expensive third-party API costs",
          constraint:
            "Querying the external Smarty Address API on every keystroke added 120-180ms latency and generated significant per-query API billing.",
          decision:
            "Implemented a two-tier caching architecture in Redis with normalized geohash keys, phonetic indexing, and local in-memory pre-validation of common postal codes and street suffixes.",
          tradeoff:
            "Maintained a Redis cache invalidation layer and spatial index in exchange for a 65% reduction in external API costs and sub-10ms cached response times."
        },
        {
          challenge: "Accurately identifying Multi-Dwelling Units (MDU) vs. Single Family Units (SFU)",
          constraint:
            "Apartment numbers, building letters, and suite designations are frequently omitted or entered incorrectly by customers, causing fiber technicians to arrive without knowing the exact termination terminal.",
          decision:
            "Built algorithmic parsing adhering to USPS CASS standards that detects missing secondary designators, prompts users with validated unit lists, and maps addresses to specific building fiber distribution terminals (FDT).",
          tradeoff:
            "Introduced a mandatory unit-clarification prompt in the checkout funnel when multiple living units exist, trading one minor user interaction step for eliminating 100% of wrong-door dispatches."
        }
      ],
      solutions: [
        "Integrated Smarty US Address Search API with custom normalization sanitizers to standardize street abbreviations, ZIP+4 codes, and county designations.",
        "Created automated address qualification algorithms linking validated coordinates to telecom fiber distribution boundaries and port availability.",
        "Engineered batch verification workers for cleansing legacy customer databases and correcting stale address records."
      ],
      results: [
        "Reduced customer onboarding address validation errors by 92% across all order channels.",
        "Eliminated unnecessary truck rolls caused by bad address data, saving substantial operational dispatch costs.",
        "Delivered sub-10ms response times for 65%+ of repeat address queries via high-speed Redis caching."
      ],
      isPlaceholder: false
    },
    {
      id: "project-subsidy",
      name: "Telecom Subsidy Eligibility & Benefit Verification Platform",
      description:
        "Automated compliance and verification platform interfacing with external government registry APIs to determine subscriber subsidy qualification (e.g. ACP / Lifeline), manage enrollment lifecycles, and automatically apply billing discounts.",
      architecture:
        "Subscriber Benefit Application → Encrypted PII Ingestion → Government Registry API Gateway → Eligibility Decision Engine → Automated Billing Discount Pipeline (TypeORM / PostgreSQL)",
      problem:
        "Verifying low-income subscriber eligibility for government telecom subsidies required manual document inspection taking 10-14 days per application, creating massive administrative backlogs, customer drop-off, and regulatory compliance risks.",
      technologies: [
        "Node.js",
        "TypeScript",
        "External Government APIs",
        "PostgreSQL",
        "TypeORM",
        "Azure Key Vault",
        "Redis",
        "REST APIs"
      ],
      githubUrl: "https://github.com/tejamanchem",
      liveUrl: "",
      featured: false,
      engineeringChallenges: [
        {
          challenge: "Handling intermittent external government API outages and unpredictable latency spikes",
          constraint:
            "Government registry verification endpoints frequently experienced latency spikes of 5-15 seconds and sudden throttling during peak national enrollment periods.",
          decision:
            "Designed an asynchronous worker pattern with circuit breakers, exponential backoff retries, and instant provisional application acknowledgment, decoupling the frontend user onboarding experience from external API delays.",
          tradeoff:
            "Required background polling and webhook status updates instead of synchronous responses, but achieved zero application drops during government system outages."
        },
        {
          challenge: "Securing highly sensitive applicant PII (SSN, national benefit IDs, income thresholds) under strict compliance",
          constraint:
            "Strict federal and state regulatory mandates required strict protection of customer sensitive identification records and detailed auditability of every eligibility check.",
          decision:
            "Utilized Azure Key Vault for envelope encryption of PII data, storing only salted cryptographic hashes for identity matching and maintaining immutable append-only compliance audit logs in PostgreSQL.",
          tradeoff:
            "Added cryptographic encryption/decryption overhead on database writes, compensated by connection pooling and selective indexing of non-sensitive attributes."
        }
      ],
      solutions: [
        "Developed a resilient integration client with government verification APIs featuring automatic failover, timeout management, and rate limiting.",
        "Built an automated finite state machine (FSM) governing subscriber status: Submitted, Under Verification, Approved, Discount Active, and Recertification Due.",
        "Implemented automated billing integration via TypeORM that applies discounted broadband pricing to active customer billing statements immediately upon government approval."
      ],
      results: [
        "Reduced subsidy approval turnaround time from 14 business days to under 45 seconds through automated API verification.",
        "Enabled thousands of qualifying low-income families to access affordable high-speed broadband.",
        "Achieved 100% compliance during regulatory and government benefit program audits."
      ],
      isPlaceholder: false
    }
  ]
};

