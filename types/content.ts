export type SocialLink = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  period: string;
  highlights: string[];
  technologies: string[];
  github?: string;
  featured?: boolean;
};

export type SkillCategory = {
  label: string;
  items: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  detail: string;
};

export type SiteContent = {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  resumePath: string;
  socials: SocialLink[];
  story: {
    eyebrow: string;
    headline: string;
    paragraphs: string[];
  };
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  education: EducationItem[];
  cta: {
    headline: string;
    body: string;
  };
};
