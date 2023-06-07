import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MySkill } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  mySkill: MySkill;
  directionLeft?: boolean;
};

function Skill({ mySkill, directionLeft }: Props) {
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
          className="rounded-full border border-[#1f7b70] object-cover w-24 h-24 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
          src={urlFor(mySkill?.image).url()}
          alt=""
          height="150"
          width="150"
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#1f7b70]/75 h-24 w-24 md:w-28 md:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="uppercase text-xl font-semibold text-white opacity-100">
            {mySkill.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
