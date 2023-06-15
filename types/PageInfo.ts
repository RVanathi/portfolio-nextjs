import { PortableTextBlock } from "sanity";

import { Social } from "./Social";

export type PageInfo = {
  _id: string;
  _createdAt: Date;
  name: string;
  role: string;
  heroImage: string;
  backgroundInformation: PortableTextBlock[];
  profilePic: string;
  email: string;
  socials: Social[];
};
