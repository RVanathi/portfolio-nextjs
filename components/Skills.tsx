import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";
import { MySkill } from "@/typings";

type Props = { mySkills: MySkill[] };

function Skills({ mySkills }: Props) {
  return (
    <motion.div className="w-full lg:h-screen p-2">
      <div className="relative max-w-[2000px] mx-auto flex flex-col justify-center h-full items-center text-center min-h-screen md:text-left xl:flex-row xl:px-10 xl:space-y-0">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-[#1f7b70] text-2xl">
          Skills
        </h3>
        <h3 className="absolute top-36 uppercase tracking-[3px] text-[#1f7b70] text-sm">
          What I know
        </h3>
        <div className="mt-10 grid grid-cols-3 md:grid-cols-4 gap-6">
          {mySkills?.slice(0, mySkills.length / 2).map((mySkill) => (
            <Skill key={mySkill._id} mySkill={mySkill} />
          ))}
          {mySkills
            ?.slice(mySkills.length / 2, mySkills.length)
            .map((mySkill) => (
              <Skill key={mySkill._id} mySkill={mySkill} directionLeft />
            ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
