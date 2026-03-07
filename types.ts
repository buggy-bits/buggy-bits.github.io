export interface Profile {
  name: string;
  headline: string;
  tagline: string;
  location?: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    resume: string;
  };
}
export interface TechItem {
  name: string;
  description: string;
  url: string; // Documentation URL
  category: "core" | "language" | "tool";
}

export interface StackItem {
  name: string;
  description: string;
  url: string;
  category: "language" | "core" | "tool";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  links: {
    demo: string;
    repo: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  type: "education" | "work";
}
