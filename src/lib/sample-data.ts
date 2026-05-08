export type ResumeData = {
  name: string;
  email: string;
  phone: string;
  location: string;
  headline: string;
  targetRole: string;
  summary: string;
  skills: {
    frontend: string[];
    backend: string[];
    database: string[];
    devops: string[];
    languages: string[];
    tools: string[];
  };
  education: {
    degree: string;
    institution: string;
    year: string;
    grade: string;
  }[];
  experience: {
    role: string;
    company: string;
    duration: string;
    description: string;
  }[];
  projects: {
    name: string;
    stack: string[];
    description: string;
  }[];
};

export const sampleResume: ResumeData = {
  name: "Aarav Sharma",
  email: "aarav.sharma@example.com",
  phone: "+91 98765 43210",
  location: "Bengaluru, India",
  headline: "Aspiring Full Stack Developer",
  targetRole: "Full Stack Developer",
  summary:
    "Computer Science graduate with 1+ years of hands-on experience building responsive web apps with React and TypeScript. Passionate about clean UI, scalable APIs, and continuous learning.",
  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js"],
    database: ["MongoDB"],
    devops: [],
    languages: ["JavaScript", "TypeScript", "Python"],
    tools: ["Git", "GitHub", "VS Code", "Figma", "Postman"],
  },
  education: [
    {
      degree: "B.Tech in Computer Science",
      institution: "VIT, Vellore",
      year: "2021 — 2025",
      grade: "CGPA 8.7 / 10",
    },
    {
      degree: "Higher Secondary (PCM)",
      institution: "Delhi Public School",
      year: "2019 — 2021",
      grade: "94.2%",
    },
  ],
  experience: [
    {
      role: "Frontend Developer Intern",
      company: "Nimbus Labs",
      duration: "Jun 2024 — Dec 2024",
      description:
        "Built reusable component library in React + TypeScript, improved Lighthouse performance score by 28%, and shipped 12+ features.",
    },
    {
      role: "Open Source Contributor",
      company: "Various OSS",
      duration: "2023 — Present",
      description:
        "Merged 18+ PRs across React-based libraries, focused on accessibility and developer experience.",
    },
  ],
  projects: [
    {
      name: "PlanIt — Task Manager",
      stack: ["React", "TypeScript", "Tailwind", "Zustand"],
      description:
        "Drag-and-drop kanban board with offline-first support and 4k+ users.",
    },
    {
      name: "FinSight",
      stack: ["React", "Recharts", "Node.js"],
      description:
        "Personal finance dashboard with AI-driven monthly spending insights.",
    },
  ],
};

export type SkillGap = {
  category: string;
  missing: string[];
  weak: { skill: string; reason: string }[];
};

export const skillGaps: SkillGap[] = [
  {
    category: "Backend",
    missing: ["Express.js", "REST API design", "Authentication (JWT)", "GraphQL"],
    weak: [{ skill: "Node.js", reason: "Mentioned but no production experience" }],
  },
  {
    category: "Database",
    missing: ["PostgreSQL", "Redis", "Database modeling"],
    weak: [{ skill: "MongoDB", reason: "Basic queries only — no aggregation pipelines" }],
  },
  {
    category: "DevOps",
    missing: ["Docker", "CI/CD (GitHub Actions)", "AWS basics", "Nginx"],
    weak: [],
  },
  {
    category: "Testing",
    missing: ["Jest", "Vitest", "Playwright", "React Testing Library"],
    weak: [],
  },
];

export type Course = {
  id: string;
  title: string;
  platform: "YouTube" | "Coursera" | "Udemy" | "freeCodeCamp" | "GeeksforGeeks" | "NPTEL";
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  paid: boolean;
  skill: string;
  url: string;
  progress: number;
  rating: number;
};

export const courses: Course[] = [
  {
    id: "c1",
    title: "Node.js & Express — The Complete Guide",
    platform: "Udemy",
    duration: "32h",
    level: "Intermediate",
    paid: true,
    skill: "Express.js",
    url: "https://www.udemy.com/",
    progress: 42,
    rating: 4.7,
  },
  {
    id: "c2",
    title: "Backend with Node.js — Full Course",
    platform: "freeCodeCamp",
    duration: "8h",
    level: "Beginner",
    paid: false,
    skill: "Node.js",
    url: "https://www.freecodecamp.org/",
    progress: 0,
    rating: 4.9,
  },
  {
    id: "c3",
    title: "Docker for Developers",
    platform: "YouTube",
    duration: "5h",
    level: "Beginner",
    paid: false,
    skill: "Docker",
    url: "https://www.youtube.com/",
    progress: 18,
    rating: 4.6,
  },
  {
    id: "c4",
    title: "PostgreSQL for Everybody Specialization",
    platform: "Coursera",
    duration: "40h",
    level: "Beginner",
    paid: true,
    skill: "PostgreSQL",
    url: "https://www.coursera.org/",
    progress: 0,
    rating: 4.8,
  },
  {
    id: "c5",
    title: "Cloud Computing — NPTEL",
    platform: "NPTEL",
    duration: "12 weeks",
    level: "Intermediate",
    paid: false,
    skill: "AWS basics",
    url: "https://nptel.ac.in/",
    progress: 64,
    rating: 4.4,
  },
  {
    id: "c6",
    title: "Testing React Apps with Vitest",
    platform: "GeeksforGeeks",
    duration: "6h",
    level: "Intermediate",
    paid: false,
    skill: "Vitest",
    url: "https://www.geeksforgeeks.org/",
    progress: 12,
    rating: 4.3,
  },
];

export const dashboardStats = {
  resumeScore: 78,
  atsScore: 84,
  skillMatch: 62,
  rolesMatched: ["Frontend Developer", "React Developer", "UI Engineer"],
  weeklyProgress: [
    { week: "W1", score: 48 },
    { week: "W2", score: 53 },
    { week: "W3", score: 58 },
    { week: "W4", score: 62 },
    { week: "W5", score: 67 },
    { week: "W6", score: 71 },
    { week: "W7", score: 78 },
  ],
  skillRadar: [
    { area: "Frontend", value: 88, full: 100 },
    { area: "Backend", value: 35, full: 100 },
    { area: "Database", value: 42, full: 100 },
    { area: "DevOps", value: 18, full: 100 },
    { area: "Testing", value: 25, full: 100 },
    { area: "Soft Skills", value: 72, full: 100 },
  ],
};
