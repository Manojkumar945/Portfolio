// Types for the portfolio website

// Type for experience data
export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

// Type for skill data
export interface Skill {
  name: string;
  proficiency: number;
}

// Type for certification data
export interface Certification {
  name: string;
  issuer: string;
}

// Type for project data
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  links: {
    demo: string;
    github: string;
  };
}

// Type for contact form data
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}