
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}
