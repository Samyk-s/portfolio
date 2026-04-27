import { Education, Experience, SkillCategory } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Rewasoft Pvt. Ltd.",
    role: "Frontend Engineer",
    type: "Full-time",
    period: "05/2025 - 05/2026",
    location: "Kathmandu, Nepal",
    description:
      "Built production-grade React and Next.js applications across enterprise CRM systems, travel platforms, and hospital ecosystem products.",
    achievements: [
      "Built and maintained a production CRM system with 8+ modules including leads, contacts, accounts, tasks, and campaigns to support core business workflows.",
      "Designed reusable React, Redux, and TypeScript component architecture that reduced duplication and made feature development easier to scale.",
      "Integrated 15+ Swagger-documented REST APIs and implemented state management with Redux Toolkit and React Query to improve data flow and reduce redundant API calls.",
      "Developed and deployed full-stack applications with Next.js and NestJS, including travel and hospital platforms with responsive UI, SEO, and production deployment workflows.",
      "Collaborated with backend, product, and design teams on API integration, UI implementation, code reviews, and end-to-end feature delivery.",
    ],
    techStack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "REST APIs",
      "NestJS",
      "Docker",
      "Vercel",
    ],
    current: true,
  },
];

export const professionalProjects = [
  {
    title: "Enterprise CRM System",
    tech: "React.js, TypeScript, Redux Toolkit, React Query, REST APIs",
    description:
      "Built a production CRM system with 8+ modules for leads, contacts, accounts, tasks, and campaigns, with reusable components and optimized state management across core business workflows.",
  },
  {
    title: "8000Club - 3D Travel Experience Platform",
    tech: "Next.js, Three.js, Blender, GSAP",
    description:
      "Engineered an immersive 3D travel platform with GIS-based mountain models, optimized Blender assets, Three.js rendering, GSAP storytelling, and bundle-aware asset loading.",
  },
  {
    title: "Full-Stack Travel Booking Platform",
    tech: "Next.js, NestJS, MySQL, Docker",
    description:
      "Developed authentication, booking workflows, user dashboards, loyalty points, frontend-backend API integration, production deployment, validation, and resilient booking management logic.",
  },
  {
    title: "Tilganga Hospital Ecosystem Platform",
    tech: "Next.js, Tailwind CSS, REST APIs",
    description:
      "Developed academic, informational, and booking platforms by converting designs into responsive Next.js components with strong usability, accessibility, SEO, and API integration consistency.",
  },
];

export const education: Education[] = [
  {
    institution: "Nepal College of Information Technology (NCIT)",
    degree: "Bachelor in Computer Engineering",
    period: "Pokhara University",
    location: "Lalitpur, Nepal",
    details:
      "Studied computer engineering with a focus on software development, data structures, systems, and practical web application engineering.",
  },
  {
    institution: "Trinity International College",
    degree: "Higher Secondary Education - Science",
    period: "High School",
    location: "Kathmandu, Nepal",
    details:
      "Completed a science background that built the analytical and technical foundation for engineering and software development.",
  },
];

export const certifications = [
  {
    institution: "Broadway Infosys",
    title: "React.js Training",
    period: "11/2024 - 01/2025",
    credential: "Credential ID: B21372",
    details:
      "Completed focused React.js training covering component architecture, hooks, state management, API integration, and production-oriented frontend practices.",
  },
];

export const officeTechStack = [
  {
    label: "Frontend Development",
    icon: "react",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    label: "State & Data Handling",
    icon: "data",
    skills: ["Redux Toolkit", "React Query", "React Hooks", "Context API", "REST APIs", "Swagger"],
  },
  {
    label: "Tools & Deployment",
    icon: "tools",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Postman", "Chrome DevTools", "Lighthouse"],
  },
  {
    label: "Advanced & Specialized",
    icon: "special",
    skills: ["Three.js", "GSAP", "Blender", "Performance Optimization", "SEO Implementation"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    icon: "UI",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS"],
  },
  {
    label: "State & Data",
    icon: "API",
    skills: ["Redux Toolkit", "React Query", "React Hooks", "Context API", "REST APIs", "Swagger"],
  },
  {
    label: "Animation & 3D",
    icon: "3D",
    skills: ["GSAP", "Three.js", "Blender", "CSS Animations"],
  },
  {
    label: "Tooling & DevOps",
    icon: "OPS",
    skills: ["Docker", "Vercel", "Git", "GitHub", "Postman", "Lighthouse"],
  },
  {
    label: "Backend Coordination",
    icon: "BE",
    skills: ["Node.js", "NestJS", "MySQL", "API Integration", "Deployment"],
  },
];
