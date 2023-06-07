import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { MySkill } from "@/typings";

const query = groq`
*[_type == "mySkill"]
`;

type Data = {
  mySkills: MySkill[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const mySkills: MySkill[] = await sanityClient.fetch(query);
  res.status(200).json({ mySkills });
}
