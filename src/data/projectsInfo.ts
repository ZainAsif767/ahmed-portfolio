const projects = [
  {
    id: 3,
    title: "Catchpole",
    description:
      "Catchpole is a comprehensive cybersecurity platform built on the robust Phoenix framework, leveraging Elixir's fault-tolerant and scalable architecture. The application provides advanced threat detection, risk management, and automated response capabilities for enterprise security teams. Built with Phoenix LiveView for real-time updates and seamless user interactions, the platform offers a modern web interface that delivers instant security insights and automated remediation workflows. The Phoenix framework's actor-based concurrency model enables the platform to handle thousands of concurrent security events while maintaining high performance and reliability. The system integrates with various security tools and APIs, providing a unified dashboard for security operations. Phoenix's built-in clustering capabilities ensure high availability and fault tolerance, making it ideal for critical security infrastructure that requires 24/7 operation.",
    image: "/projects-images/catchpole.png",
    demoLink: "https://dev.catchpole.io",
    technologies: [
      "Phoenix Framework",
      "Elixir",
      "LiveView",
      "PostgreSQL",
      "REST APIs",
    ],
    category: ["Phoenix", "Elixir", "LiveView"],
    githubLink: "",
    highlights: [
      "Real-time threat detection with Phoenix LiveView for instant security insights",
      "Fault-tolerant architecture leveraging Elixir's actor-based concurrency model",
      "High-performance event processing handling thousands of concurrent security events",
      "Built-in clustering for high availability and 24/7 operation",
    ],
    yearCompleted: "In Progress",
  },
];

const categories = [
  "All",
  ...new Set(projects.flatMap((project) => project.category)),
];

export { projects, categories };
