import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Skill } from "@/types/Skill";
import { Social } from "@/types/Social";
import { PageInfo } from "@/types/PageInfo";
import { Experience } from "@/types/Experience";

export async function getPageInfo(): Promise<PageInfo> {
  const query = groq`*[_type == "pageInfo"][0]{
    _id,
    _createdAt,
    name,
    role,
    "heroImage":heroImage.asset->url,
    backgroundInformation,
    "profilePic":profilePic.asset->url,
    email,
    socials[]->,
  }`;

  return createClient(clientConfig).fetch(query);
}

export async function getExperiences(): Promise<Experience[]> {
  const query = groq`*[_type == "experience"]{
    _id,
    _createdAt,
    company,
    "companyImage":companyImage.asset->url,
    dateStarted,
    dateEnded,
    isCurrentlyWorkingHere,
    jobTitle,
    points[],
    technologies[]->{"image":image.asset->url},
  }`;

  return createClient(clientConfig).fetch(query);
}

export async function getSkills(): Promise<Skill[]> {
  const query = groq`*[_type == "skill"]{
    _id,
    _createdAt,
    title,
    "image":image.asset->url,
  }`;
  return createClient(clientConfig).fetch(query);
}

export async function getProjects(): Promise<Project[]> {
  const query = groq`*[_type == "project"]{
    _id,
    _createdAt,
    "slug":slug.current,
    title,
    tech,
    "image":image.asset->url,
    summary,
    linkToBuild,
    linkToCode,
    technologies[]->,
  }`;

  return createClient(clientConfig).fetch(query);
}

export async function getProject(slug: string): Promise<Project> {
  const query = groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      "slug":slug.current,
      title,
      tech,
      "image":image.asset->url,
      summary,
      linkToBuild,
      linkToCode,
      technologies[]->,
    }`;

  return createClient(clientConfig).fetch(query, { slug });
}

export async function getSocials(): Promise<Social[]> {
  const query = groq`*[_type == "social"]{
    _id,
    _createdAt,
    title,
    url,
  }`;
  return createClient(clientConfig).fetch(query);
}
