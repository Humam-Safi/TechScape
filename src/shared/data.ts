export type Specialty = {
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  languages: string[];
  frameworks: string[];
  tools: string[];
  platforms?: string[];
  topStacks: string[];
  roles?: string[];
  responsibilities?: string[];
  industries?: string[];
  certifications?: string[];
  resources?: {
    title: string;
    url: string;
    type?: "course" | "doc" | "video" | "book" | "tool";
  }[];
  roadmap?: { stage: string; title: string; items: string[] }[];
  demand?: {
    marketGrowthPct?: number;
    jobOpeningsApprox?: string;
    difficulty?: "entry" | "intermediate" | "advanced";
  };
};

export const specialties: Specialty[] = [
  {
    id: "frontend",
    name: "Front-end Development",
    emoji: "🎨",
    tagline: "Interfaces that delight users",
    description:
      "Build interactive, accessible, and performant user interfaces for the web.",
    languages: ["HTML", "CSS", "JavaScript", "TypeScript"],
    frameworks: ["React", "Vue", "Svelte", "Next.js", "Vite", "Remix"],
    tools: ["Webpack", "Vite", "ESLint", "Prettier", "Storybook", "Playwright"],
    platforms: ["Web", "PWA", "Electron", "Tauri"],
    topStacks: [
      "React",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "Next.js",
      "Vite",
    ],
    roles: [
      "Front-end Engineer",
      "Web Developer",
      "React Developer",
      "Accessibility Engineer",
      "Email Developer",
    ],
    responsibilities: [
      "Translate designs into responsive UI",
      "Ensure accessibility (WCAG)",
      "Optimize performance and SEO",
      "Integrate APIs and state management",
      "Write tests and maintain design systems",
    ],
    industries: ["E-commerce", "SaaS", "Media", "Fintech", "Education"],
    certifications: ["WAI Web Accessibility", "Google Mobile Web Specialist"],
    resources: [
      {
        title: "MDN Web Docs",
        url: "https://developer.mozilla.org/",
        type: "doc",
      },
      { title: "Epic React", url: "https://epicreact.dev/", type: "course" },
      { title: "Web.dev", url: "https://web.dev/", type: "doc" },
    ],
    roadmap: [
      {
        stage: "foundation",
        title: "Foundations",
        items: ["HTML semantics", "CSS layout", "JavaScript basics"],
      },
      {
        stage: "intermediate",
        title: "Frameworks",
        items: ["React", "Routing", "State management"],
      },
      {
        stage: "advanced",
        title: "Production",
        items: ["Testing", "Performance", "Accessibility", "SSR/SSG"],
      },
    ],
    demand: {
      marketGrowthPct: 13,
      jobOpeningsApprox: "High",
      difficulty: "entry",
    },
  },
  {
    id: "backend",
    name: "Back-end Development",
    emoji: "🧠",
    tagline: "APIs, databases, and scalability",
    description:
      "Design robust services, APIs, and databases powering modern apps.",
    languages: ["JavaScript", "TypeScript", "Python", "Go", "Java", "C#"],
    frameworks: [
      "Node.js",
      "Express",
      "NestJS",
      "Django",
      "FastAPI",
      "Spring Boot",
    ],
    tools: ["PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes", "gRPC"],
    platforms: ["Linux", "Containers", "Serverless", "Cloud (AWS/GCP/Azure)"],
    topStacks: ["Node.js", "PostgreSQL", "Docker", "Redis", "Prisma", "NestJS"],
    roles: ["Back-end Engineer", "API Engineer", "Platform Engineer", "SRE"],
    responsibilities: [
      "Design REST/GraphQL/gRPC APIs",
      "Model data and manage migrations",
      "Implement auth and security",
      "Scale services, caching, and queues",
      "Observability and CI/CD",
    ],
    industries: ["Fintech", "Health", "SaaS", "Gaming", "Government"],
    certifications: ["AWS Developer Associate", "GCP Associate Engineer"],
    resources: [
      { title: "12-Factor App", url: "https://12factor.net/", type: "doc" },
      {
        title: "System Design Primer",
        url: "https://github.com/donnemartin/system-design-primer",
        type: "doc",
      },
    ],
    roadmap: [
      {
        stage: "foundation",
        title: "Foundations",
        items: ["HTTP & APIs", "Databases", "Linux basics"],
      },
      {
        stage: "intermediate",
        title: "Services",
        items: ["ORM", "Auth", "Caching", "Queues"],
      },
      {
        stage: "advanced",
        title: "Scale",
        items: ["Microservices", "Observability", "Kubernetes", "CDNs"],
      },
    ],
    demand: {
      marketGrowthPct: 15,
      jobOpeningsApprox: "Very High",
      difficulty: "intermediate",
    },
  },
  {
    id: "mobile",
    name: "Mobile Apps",
    emoji: "📱",
    tagline: "iOS, Android, and cross‑platform",
    description:
      "Create native and cross‑platform apps that run on iOS and Android.",
    languages: ["Kotlin", "Java", "Swift", "Dart", "JavaScript", "TypeScript"],
    frameworks: ["React Native", "Flutter", "SwiftUI", "Jetpack Compose"],
    tools: ["Xcode", "Android Studio", "Expo", "Firebase", "Fastlane"],
    platforms: ["iOS", "Android", "Cross‑platform"],
    topStacks: ["React Native", "Flutter", "SwiftUI", "Kotlin"],
    roles: ["iOS Engineer", "Android Engineer", "React Native Dev"],
    responsibilities: [
      "Build native UI and navigation",
      "Handle offline and sync",
      "Integrate device APIs",
      "Release to App Store/Play",
    ],
    industries: ["Consumer", "Enterprise", "Healthcare", "Mobility"],
    certifications: ["Apple iOS App Dev", "Associate Android Developer"],
    resources: [
      {
        title: "Apple Human Interface Guidelines",
        url: "https://developer.apple.com/design/human-interface-guidelines/",
        type: "doc",
      },
      {
        title: "Android Developers",
        url: "https://developer.android.com/",
        type: "doc",
      },
    ],
    roadmap: [
      {
        stage: "foundation",
        title: "Foundations",
        items: ["Language basics", "UI components", "Navigation"],
      },
      {
        stage: "intermediate",
        title: "Ecosystem",
        items: ["Networking", "Persistence", "Auth", "Testing"],
      },
      {
        stage: "advanced",
        title: "Performance",
        items: ["Animations", "Profiling", "CI/CD", "Native modules"],
      },
    ],
    demand: {
      marketGrowthPct: 10,
      jobOpeningsApprox: "High",
      difficulty: "intermediate",
    },
  },
  {
    id: "security",
    name: "Cyber Security",
    emoji: "🛡️",
    tagline: "Defense, detection, response",
    description:
      "Protect systems, data, and users from threats through prevention and response.",
    languages: ["Python", "Bash", "PowerShell", "C"],
    frameworks: ["Nmap", "Metasploit", "Burp Suite", "Wireshark"],
    tools: ["SIEM", "IDS/IPS", "Kali Linux", "OWASP ZAP"],
    platforms: ["On‑prem", "Cloud", "Networks", "Endpoints"],
    topStacks: ["OWASP", "Kali", "Wireshark", "Nmap"],
    roles: [
      "Security Analyst",
      "Penetration Tester",
      "SOC Analyst",
      "Blue/Red Team",
    ],
    responsibilities: [
      "Assess vulnerabilities and risks",
      "Threat detection and response",
      "Security awareness and policy",
      "Incident handling and forensics",
    ],
    industries: ["Banking", "Gov", "Healthcare", "SaaS"],
    certifications: ["CompTIA Security+", "CEH", "CISSP"],
    resources: [
      {
        title: "OWASP Top 10",
        url: "https://owasp.org/www-project-top-ten/",
        type: "doc",
      },
      { title: "TryHackMe", url: "https://tryhackme.com/", type: "course" },
    ],
    roadmap: [
      {
        stage: "foundation",
        title: "Foundations",
        items: ["Networking", "Linux", "Scripting"],
      },
      {
        stage: "intermediate",
        title: "Blue/Red",
        items: ["Threat modeling", "Pentesting", "SIEM"],
      },
      {
        stage: "advanced",
        title: "Specialize",
        items: ["Cloud security", "Forensics", "AppSec"],
      },
    ],
    demand: {
      marketGrowthPct: 32,
      jobOpeningsApprox: "Very High",
      difficulty: "advanced",
    },
  },
  {
    id: "data",
    name: "Data Analytics",
    emoji: "📊",
    tagline: "Insights from data",
    description:
      "Analyze, visualize, and communicate insights from data for decisions.",
    languages: ["Python", "R", "SQL"],
    frameworks: ["Pandas", "NumPy", "scikit‑learn", "Tableau", "Power BI"],
    tools: ["dbt", "Airflow", "Snowflake", "BigQuery"],
    platforms: ["Cloud Warehouses", "On‑prem DWH", "Notebooks"],
    topStacks: ["Python", "Pandas", "SQL", "Tableau"],
    roles: ["Data Analyst", "BI Developer", "Analytics Engineer"],
    responsibilities: [
      "Collect and clean data",
      "Build dashboards and reports",
      "Model and analyze trends",
      "Communicate insights to stakeholders",
    ],
    industries: ["Retail", "Healthcare", "Marketing", "Finance"],
    certifications: ["Tableau Certified", "Microsoft DA-100"],
    resources: [
      {
        title: "Practical SQL",
        url: "https://www.practicalsql.com/",
        type: "book",
      },
      {
        title: "Pandas Docs",
        url: "https://pandas.pydata.org/docs/",
        type: "doc",
      },
    ],
    roadmap: [
      {
        stage: "foundation",
        title: "Foundations",
        items: ["SQL", "Spreadsheets", "Data viz"],
      },
      {
        stage: "intermediate",
        title: "Analysis",
        items: ["Python/R", "Stats", "Dashboards"],
      },
      {
        stage: "advanced",
        title: "Ops",
        items: ["Pipelines", "dbt", "Airflow", "ML basics"],
      },
    ],
    demand: {
      marketGrowthPct: 25,
      jobOpeningsApprox: "High",
      difficulty: "entry",
    },
  },
  {
    id: "ai",
    name: "AI & Machine Learning",
    emoji: "🤖",
    tagline: "Models that learn",
    description:
      "Build models and systems that learn from data and power intelligent apps.",
    languages: ["Python", "C++", "Julia"],
    frameworks: ["PyTorch", "TensorFlow", "JAX", "Hugging Face"],
    tools: ["Weights & Biases", "Ray", "ONNX", "NVIDIA CUDA"],
    platforms: ["GPU", "Cloud ML", "Edge"],
    topStacks: ["PyTorch", "Transformers", "Python", "TensorRT"],
    roles: [
      "ML Engineer",
      "Data Scientist",
      "Research Engineer",
      "MLOps Engineer",
    ],
    responsibilities: [
      "Prepare data and features",
      "Train, evaluate, deploy models",
      "Monitor drift and performance",
      "Optimize inference",
    ],
    industries: ["Healthcare", "Autonomy", "Finance", "E-commerce"],
    certifications: ["AWS ML Specialty", "DeepLearning.AI Certificates"],
    resources: [
      {
        title: "Dive into Deep Learning",
        url: "https://d2l.ai/",
        type: "book",
      },
      { title: "Fast.ai", url: "https://www.fast.ai/", type: "course" },
      { title: "Hugging Face", url: "https://huggingface.co/", type: "tool" },
    ],
    roadmap: [
      {
        stage: "foundation",
        title: "Math & Code",
        items: ["Linear algebra", "Calculus", "Python"],
      },
      {
        stage: "intermediate",
        title: "Core ML",
        items: ["Classical ML", "DL", "NLP/CV"],
      },
      {
        stage: "advanced",
        title: "Production",
        items: ["MLOps", "Serving", "Optimization"],
      },
    ],
    demand: {
      marketGrowthPct: 35,
      jobOpeningsApprox: "High",
      difficulty: "advanced",
    },
  },
  {
    id: "uiux",
    name: "UI/UX Design",
    emoji: "✨",
    tagline: "Design that feels right",
    description:
      "Craft intuitive, inclusive, and beautiful product experiences.",
    languages: ["Figma Tokens", "Design Systems"],
    frameworks: ["Figma", "Framer", "Penpot"],
    tools: ["Figma", "Framer", "Zeplin", "FigJam"],
    platforms: ["Web", "Mobile", "Desktop"],
    topStacks: ["Design Systems", "Prototyping", "Accessibility"],
    roles: ["Product Designer", "UX Designer", "UI Designer", "UX Researcher"],
    responsibilities: [
      "User research and discovery",
      "Wireframes and prototypes",
      "Design systems and tokens",
      "Usability testing",
    ],
    industries: ["SaaS", "Fintech", "E-commerce", "Healthcare"],
    certifications: ["NN/g UX Certification"],
    resources: [
      { title: "Material Design", url: "https://m3.material.io/", type: "doc" },
      {
        title: "Designing Interfaces",
        url: "https://designinginterfaces.com/",
        type: "book",
      },
    ],
    roadmap: [
      {
        stage: "foundation",
        title: "Foundations",
        items: ["UX principles", "Typography", "Color"],
      },
      {
        stage: "intermediate",
        title: "Practice",
        items: ["Prototyping", "Design systems", "Accessibility"],
      },
      {
        stage: "advanced",
        title: "Research",
        items: ["Testing", "Metrics", "Handoff"],
      },
    ],
    demand: {
      marketGrowthPct: 7,
      jobOpeningsApprox: "Medium",
      difficulty: "entry",
    },
  },
  {
    id: "gamedev",
    name: "Game Development",
    emoji: "🕹️",
    tagline: "Playful worlds and engines",
    description:
      "Develop interactive games and simulations with engines and graphics.",
    languages: ["C#", "C++", "GDScript"],
    frameworks: ["Unity", "Unreal Engine", "Godot"],
    tools: ["Blender", "FMOD", "Photon"],
    platforms: ["PC", "Consoles", "Mobile"],
    topStacks: ["Unity", "Unreal", "Godot"],
    roles: ["Gameplay Programmer", "Engine Programmer", "Technical Artist"],
    responsibilities: [
      "Implement gameplay systems",
      "Performance and memory optimization",
      "Tools and pipeline development",
    ],
    industries: ["Gaming", "Simulation", "Training", "Film"],
    certifications: ["Unity Certified Associate"],
    resources: [
      {
        title: "Game Programming Patterns",
        url: "https://gameprogrammingpatterns.com/",
        type: "book",
      },
      {
        title: "Unreal Documentation",
        url: "https://docs.unrealengine.com/",
        type: "doc",
      },
    ],
    roadmap: [
      {
        stage: "foundation",
        title: "Foundations",
        items: ["Math & physics", "Engine basics", "Scripting"],
      },
      {
        stage: "intermediate",
        title: "Systems",
        items: ["Input", "Animation", "AI", "Networking"],
      },
      {
        stage: "advanced",
        title: "Ship",
        items: ["Profiling", "Tooling", "Build & deploy"],
      },
    ],
    demand: {
      marketGrowthPct: 9,
      jobOpeningsApprox: "Medium",
      difficulty: "advanced",
    },
  },
];

export const specialtiesMap = Object.fromEntries(
  specialties.map((s) => [s.id, s])
) as Record<string, Specialty>;
