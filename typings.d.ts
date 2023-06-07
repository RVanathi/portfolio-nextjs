import { Slug } from "sanity";

interface SanityBody {
  _rev: string;
  _id: string;
  _updatedAt: string;
  _createdAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  name: string;
  role: string;
  heroImage: Image;
  backgroundInformation: string;
  profilePic: Image;
  email: string;
  social: Social;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  // progress: number;
  title: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  // progress: number;
  title: string;
}

export interface MySkill extends SanityBody {
  _type: "skill";
  image: Image;
  // progress: number;
  title: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  tech: string;
  slug: Slug;
  image: Image;
  summary: string;
  linkToBuild: string;
  linkToCode: string;
  technologies: Technology[];
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
