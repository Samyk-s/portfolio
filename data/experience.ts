import { Experience, Education, SkillCategory } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Rewasoft",
    role: "Frontend Engineer",
    type: "Full-time",
    period: "2023 – Present",
    location: "Kathmandu, Nepal",
    description:
      "Building scalable frontend systems and SaaS products for enterprise clients across Nepal and Southeast Asia.",
    achievements: [
      "Led frontend architecture for a flagship SaaS product serving 2,000+ active users",
      "Reduced initial bundle size by 45% via code splitting, tree shaking, and lazy loading",
      "Built a shared component library (50+ components) adopted across 3 company products",
      "Improved Core Web Vitals: LCP 4.2s → 1.8s, CLS 0.22 → 0.04 for the main product",
      "Mentored 2 junior developers on React performance patterns and TypeScript best practices",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "TailwindCSS",
      "Docker",
      "Vercel",
    ],
    current: true,
  },
  {
    id: "2",
    company: "Freelance",
    role: "Frontend Developer",
    type: "Freelance",
    period: "2021 – 2023",
    location: "Remote · Worldwide",
    description:
      "Delivered 15+ web applications for startups and SMBs across e-commerce, fintech, and EdTech — from MVPs to full product launches.",
    achievements: [
      "Built and shipped 15+ production web apps for clients in the US, UK, and Australia",
      "Grew a client's organic traffic by 300% through technical SEO and Core Web Vitals optimization",
      "Developed custom CMS integrations with Contentful, Sanity, and Strapi",
      "Maintained 5-star client ratings with consistent on-time delivery",
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Firebase",
      "REST APIs",
    ],
  },
  {
    id: "3",
    company: "Open Source & Self-Directed",
    role: "Independent Developer",
    type: "Self-directed",
    period: "2020 – 2021",
    location: "Kathmandu, Nepal",
    description:
      "Intensive self-study of modern web development while contributing to open source projects and building personal projects.",
    achievements: [
      "Completed 500+ hours of structured coursework in React, TypeScript, and Node.js",
      "Contributed to 3 open source React component libraries on GitHub",
      "Built 10+ personal projects spanning full-stack web and CLI tooling",
      "Earned Meta Frontend Developer Professional Certificate (Coursera)",
    ],
    techStack: ["React", "JavaScript", "Node.js", "CSS", "Git"],
  },
];

export const education: Education[] = [
  {
    institution: "Tribhuvan University",
    degree: "Bachelor of Science in Computer Science & Information Technology",
    period: "2019 – 2023",
    location: "Kathmandu, Nepal",
    details:
      "Focus on software engineering, algorithms, data structures, and web technologies. Final year project: a real-time collaboration platform built with React and Node.js.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    icon: "🖥️",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "TailwindCSS",
    ],
  },
  {
    label: "State & Data",
    icon: "⚡",
    skills: [
      "Redux Toolkit",
      "React Query",
      "Zustand",
      "SWR",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    label: "Animation & 3D",
    icon: "✨",
    skills: ["GSAP", "Framer Motion", "Three.js", "CSS Animations", "Lottie"],
  },
  {
    label: "Tooling & DevOps",
    icon: "🛠️",
    skills: ["Docker", "Vercel", "Git", "GitHub Actions", "Webpack", "Vite"],
  },
  {
    label: "Backend & DB",
    icon: "🗄️",
    skills: ["Node.js", "Prisma", "PostgreSQL", "Supabase", "Firebase", "Redis"],
  },
];
