import { MySkill } from "../typings";

export const fetchMySkills = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getMySkills`
  );

  const data = await res.json();
  const mySkills: MySkill[] = data.mySkills;
  // console.log("fetching", skills)
  return mySkills;
};
