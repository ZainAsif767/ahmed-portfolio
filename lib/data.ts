export const site = {
  name: "Ahmed Ismail",
  fullName: "Muhammad Ahmed Ismail",
  role: "Senior Software Engineer",
  tagline: "Elixir · Phoenix · LiveView",
  email: "iamahmedismail19@gmail.com",
  location: "Lahore, Pakistan",
  resumeFile: "/Ahmed-Ismail-Resume.pdf",
  socials: {
    github: "https://github.com/imahmedismail",
    linkedin: "https://linkedin.com/in/muhammad-ahmed-ismail-6418b9148/",
    elixirForum: "https://elixirforum.com/u/iamahmed",
  },
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const heroStats = [
  { value: "5+", label: "Years experience" },
  { value: "10+", label: "Production platforms" },
  { value: "4", label: "Industries served" },
];

export const trustSectors = ["Cybersecurity", "SaaS", "Logistics", "EdTech"];

export type Experience = {
  company: string;
  role: string;
  type: string;
  period: string;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Claridy AI",
    role: "Senior Software Engineer",
    type: "Full-time · Remote",
    period: "Aug 2025 — Present",
    points: [
      "Developing Phoenix LiveView applications with a strong focus on performance and UX.",
      "Designing Ecto schemas, migrations and data models for consistent, reliable data structures.",
      "Building real-time components and interactive interfaces with LiveView and Alpine.js.",
    ],
    stack: ["Elixir", "Phoenix", "LiveView", "Ecto", "Alpine.js"],
  },
  {
    company: "Hawks Tech",
    role: "Senior Software Engineer",
    type: "Full-time",
    period: "Aug 2024 — Aug 2025",
    points: [
      "Led architecture and implementation of Elixir backend systems focused on scalability.",
      "Designed real-time features with Phoenix LiveView and WebSockets; mentored junior engineers on OTP.",
      "Managed multi-tenant setups with PostgreSQL schemas and database optimization.",
    ],
    stack: ["Elixir", "OTP", "LiveView", "PostgreSQL", "CI/CD"],
  },
  {
    company: "Cloud Bedrock LLC",
    role: "Senior Software Engineer",
    type: "Part-time · Remote",
    period: "May 2024 — Aug 2025",
    points: [
      "Built scalable backend services in Elixir with emphasis on concurrency (GenServer, Tasks).",
      "Built event-driven pipelines for real-time notifications and led third-party API integrations.",
      "Integrated PostgreSQL and MariaDB for multi-database operations.",
    ],
    stack: ["Elixir", "GenServer", "Kafka", "PostgreSQL", "MariaDB"],
  },
  {
    company: "DyCoders",
    role: "Software Engineer",
    type: "Full-time · Remote",
    period: "Aug 2022 — Jul 2024",
    points: [
      "Developed Elixir applications with Phoenix, Absinthe (GraphQL) and PostgreSQL.",
      "Built real-time user interfaces with Phoenix LiveView for seamless in-app experiences.",
      "Containerized deployments with Docker and AWS S3; CI/CD automation with ExUnit pipelines.",
    ],
    stack: ["Elixir", "Phoenix", "GraphQL", "Docker", "AWS"],
  },
  {
    company: "RegBits Pvt. Ltd.",
    role: "Associate Software Engineer",
    type: "Full-time · Onsite",
    period: "Aug 2020 — Aug 2022",
    points: [
      "Implemented real-time data handling with Phoenix Channels and WebSockets.",
      "Created and optimized PostgreSQL schemas and queries for data-heavy applications.",
      "Integrated third-party services like PayPal; managed AWS infrastructure for backups and storage.",
    ],
    stack: ["Elixir", "Phoenix", "PostgreSQL", "AWS", "PayPal"],
  },
];

export const services = [
  {
    title: "Build from scratch",
    description:
      "Take an idea from zero to a launched product — architecture, database, real-time features and a polished UI, all shipped to production.",
    icon: "rocket",
  },
  {
    title: "Scale & harden",
    description:
      "Make slow, fragile apps fast and resilient. I use Elixir/OTP and the BEAM to handle concurrency and stay up under real load.",
    icon: "trending",
  },
  {
    title: "Join your team",
    description:
      "Plug in as a senior engineer who ships clean, maintainable code and lifts the whole codebase — not just my own tickets.",
    icon: "users",
  },
];

export const skillGroups = [
  {
    title: "Backend",
    subtitle: "Languages & frameworks",
    icon: "layers",
    skills: ["Elixir", "Phoenix", "LiveView", "OTP", "Absinthe GraphQL", "Ruby on Rails"],
  },
  {
    title: "Frontend",
    subtitle: "UI & interactivity",
    icon: "monitor",
    skills: ["JavaScript", "Tailwind CSS", "Alpine.js", "HTML", "CSS"],
  },
  {
    title: "Data & Messaging",
    subtitle: "Storage & event streams",
    icon: "database",
    skills: ["PostgreSQL", "MySQL", "MariaDB", "Redis", "Kafka", "RabbitMQ"],
  },
  {
    title: "Cloud & Tooling",
    subtitle: "Infra & workflow",
    icon: "cloud",
    skills: ["AWS", "Docker", "CI/CD", "Git", "ExUnit", "Wallaby"],
  },
];

export type Project = {
  name: string;
  category: string;
  description: string;
  impact?: string;
  tags: string[];
  url?: string;
  node: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    name: "Catchpole",
    node: "catchpole@prod",
    category: "Cybersecurity Platform",
    description:
      "A comprehensive cybersecurity platform built on Phoenix, leveraging Elixir's fault-tolerant architecture for advanced threat detection, risk management and security monitoring.",
    impact:
      "Built real-time monitoring interfaces with LiveView that surface threats to security teams as they happen.",
    tags: ["Phoenix", "Elixir", "LiveView", "PostgreSQL"],
    url: "https://www.catchpole.io",
    featured: true,
  },
  {
    name: "Picsello",
    node: "picsello@prod",
    category: "Photography Business SaaS",
    description:
      "An all-in-one business management platform for photographers — client management, scheduling, invoicing and automated gallery delivery, from booking to final delivery.",
    impact:
      "Shipped booking, gallery and invoicing features used by professional photographers to run their day-to-day business.",
    tags: ["Elixir", "Phoenix", "LiveView", "Alpine.js", "Tailwind"],
    url: "https://www.picsello.com/",
    featured: true,
  },
  {
    name: "Corridor",
    node: "corridor@prod",
    category: "B2B Logistics Platform",
    description:
      "A B2B platform connecting logistics providers with customers for freight booking and tracking — dynamic pricing, multi-tenant PostgreSQL schemas and real-time shipment tracking over WebSockets.",
    impact:
      "Spearheaded development end to end, from background-worker pricing engines to live tracking UIs.",
    tags: ["Elixir", "Phoenix", "LiveView", "PostgreSQL", "WebSockets"],
    featured: true,
  },
  {
    name: "African Management Institute",
    node: "ami@prod",
    category: "EdTech Platform",
    description:
      "A pan-African platform empowering entrepreneurs and managers with training and professional development. Maintained a large Elixir codebase with 120+ database tables and Absinthe GraphQL APIs.",
    impact:
      "Delivered learning experiences for a platform that trains entrepreneurs and managers across Africa.",
    tags: ["Elixir", "Phoenix", "GraphQL", "Absinthe"],
    url: "https://africanmanagers.org/",
    featured: true,
  },
  {
    name: "InvoTeams",
    node: "invoteams@prod",
    category: "Microservices Platform",
    description:
      "Microservices architecture in Elixir and Phoenix handling real-time data across distributed systems, with GenServer-driven background jobs and REST/GraphQL service communication.",
    tags: ["Elixir", "Microservices", "GraphQL"],
    url: "https://invoteams.com/",
    featured: false,
  },
  {
    name: "Supertrends",
    node: "supertrends@prod",
    category: "AI Trend Platform",
    description:
      "High-traffic AI-based platform. Built and maintained GraphQL APIs and mobile-facing endpoints, resolving architectural issues in critical backend components.",
    tags: ["Elixir", "Phoenix", "GraphQL"],
    url: "https://www.supertrends.com/",
    featured: false,
  },
  {
    name: "International Lifelines",
    node: "lifelines@prod",
    category: "Non-profit Backend",
    description:
      "RESTful APIs for a global non-profit, with AWS S3 cloud infrastructure for secure, efficient storage under high-traffic workloads.",
    tags: ["Elixir", "Phoenix", "REST", "AWS S3"],
    url: "https://internationallifeline.com/",
    featured: false,
  },
];

export const education = {
  degree: "BS Computer Science",
  school: "FAST National University of Computer & Emerging Sciences",
  period: "2016 — 2020",
};
