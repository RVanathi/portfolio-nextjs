import { PortableTextBlock } from "sanity";
import { Technology } from "./Technology";

export type Project = {
  _id: string;
  _createdAt: Date;
  title: string;
  tech: string;
  slug: string;
  image: string;
  summary: PortableTextBlock[];
  linkToBuild: string;
  linkToCode: string;
  technologies: Technology[];
};
