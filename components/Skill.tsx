"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Skill } from "@/types/Skill";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Image
          className="rounded-full border border-[#1f7b70] object-cover w-16 h-16 sm:h-20 sm:w-20 md:w-24 md:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
          // w-24 h-24 md:w-28 md:h-28 sm:w-16 sm:h-16
          src={skill.image}
          alt=""
          height="150"
          width="150"
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#1f7b70]/75 w-16 h-16 sm:h-20 sm:w-20 md:w-24 md:h-24 rounded-full z-0">
        {/* h-24 w-24 md:w-28 md:h-28 */}
        <div className="flex items-center justify-center h-full">
          <p className="uppercase text-md sm:text-lg md:text-xl font-semibold text-white opacity-100">
            {/* text-xl */}
            {skill.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
