export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  role: string;
  timeline: string;
  techStack: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  screenshots: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  gradient: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  techStack: string[];
  current?: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  label: string;
  icon: string;
  skills: string[];
}
