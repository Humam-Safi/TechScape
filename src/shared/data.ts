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
  },
];

export const specialtiesMap = Object.fromEntries(
  specialties.map((s) => [s.id, s])
) as Record<string, Specialty>;
