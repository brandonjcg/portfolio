export interface IList {
  title: string;
  slug: string;
  period: string;
  description: string;
}

export interface IProject {
  slug: string;
  name: string;
  description: string;
  images: string[];
  technologies: string[];
  githubUrl?: string;
  websiteUrl?: string;
}
