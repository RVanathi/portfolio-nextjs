import { PortableTextBlock } from "sanity";
import { Technology } from "./Technology";

export type Experience = {
  _id: string;
  _createdAt: Date;
  company: string;
  companyImage: string;
  dateStarted: Date;
  dateEnded: Date;
  isCurrentlyWorkingHere: Boolean;
  jobTitle: string;
  points: PortableTextBlock[];
  technologies: Technology[];
};
