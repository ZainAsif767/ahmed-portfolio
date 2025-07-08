interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  type: "Full-time" | "Contract" | "Freelance" | "Part-time";
  description: string;
  achievements: string[];
  technologies: string[];
  companyUrl?: string;
  current: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Catchpole",
    position: "Senior Full Stack Developer",
    duration: "2023 - Present",
    location: "Remote",
    type: "Full-time",
    description:
      "Leading development of a comprehensive cybersecurity platform built with Phoenix framework, focusing on real-time threat detection and automated response capabilities.",
    achievements: [
      "Architected and implemented real-time threat detection system using Phoenix LiveView",
      "Optimized system performance to handle 10,000+ concurrent security events",
      "Built fault-tolerant architecture leveraging Elixir's actor-based concurrency model",
      "Integrated multiple security APIs and tools into unified dashboard",
      "Implemented automated remediation workflows reducing response time by 75%",
    ],
    technologies: [
      "Elixir",
      "Phoenix",
      "LiveView",
      "PostgreSQL",
      "REST APIs",
      "WebSockets",
    ],
    companyUrl: "https://dev.catchpole.io",
    current: true,
  },
  {
    id: 2,
    company: "Picsello",
    position: "Full Stack Developer",
    duration: "2022 - 2023",
    location: "Remote",
    type: "Full-time",
    description:
      "Developed an all-in-one business management platform for photographers, streamlining workflows from booking to gallery delivery with integrated payment processing.",
    achievements: [
      "Built comprehensive client booking and scheduling system with two-way calendar sync",
      "Developed beautiful, professional client galleries with integrated digital upsells",
      "Implemented automated email workflows and CRM for lead management",
      "Created Smart Profit Calculator™ for pricing guidance and business growth",
      "Integrated secure payment processing and contract management system",
    ],
    technologies: [
      "Elixir",
      "Phoenix",
      "LiveView",
      "AlpineJS",
      "TailwindCSS",
      "Wallaby",
    ],
    companyUrl: "https://www.picsello.com/",
    current: false,
  },
  {
    id: 3,
    company: "African Management Institute",
    position: "Software Developer",
    duration: "2021 - 2022",
    location: "Remote",
    type: "Contract",
    description:
      "Contributed to pan-African non-profit platform empowering entrepreneurs and managers across the continent with blended learning programs and business development tools.",
    achievements: [
      "Developed low-bandwidth, mobile-friendly online learning platform",
      "Built entrepreneurship training modules for 'Start Your Business' program",
      "Implemented peer learning and support group features",
      "Created impact tracking system for success stories and case studies",
      "Optimized platform accessibility across 39 African countries",
    ],
    technologies: ["Elixir", "Phoenix", "LiveView", "AlpineJS", "TailwindCSS"],
    companyUrl: "https://www.africanmanagers.com/",
    current: false,
  },
];
