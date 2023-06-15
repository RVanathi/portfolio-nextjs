"use client";
import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";
import { Skill as mySkill } from "@/types/Skill";

type Props = { skills: mySkill[] };

function Skills({ skills }: Props) {
  return (
    <motion.div className="w-full lg:h-screen p-2">
      <div className="relative max-w-[2000px] min-h-screen mx-auto flex flex-col justify-center items-center text-center md:text-left xl:flex-row xl:px-10 xl:space-y-0">
        {/* h-full min-h-screen*/}
        <h3 className="absolute top-20 md:top-24 pb-2 uppercase tracking-[20px] text-[#1f7b70] text-xl md:text-2xl">
          {/*top-24 text-2xl */}
          Skills
        </h3>
        <h3 className="pb-5 absolute top-32 md:top-36 uppercase tracking-[3px] text-[#1f7b70] text-sm">
          {/* top-36 */}
          What I know
        </h3>
        <div className="mt-20 pt-20 grid grid-cols-3 md:grid-cols-4 gap-6">
          {/* mt-10 */}
          {skills?.slice(0, skills.length / 2).map((skill) => (
            <Skill key={skill._id} skill={skill} />
          ))}
          {skills?.slice(skills.length / 2, skills.length).map((skill) => (
            <Skill key={skill._id} skill={skill} directionLeft />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
