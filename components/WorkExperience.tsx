import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="my-5 h-screen flex relative overflow-hidden flex-col md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-[#1f7b70] text-2xl">
        Experience
      </h3>
      <div className="mt-20 w-full flex space-x-5 p-10 snap-x snap-mandatory justify-center">
        {/* Experience Card*/}
        <ExperienceCard />
      </div>
    </motion.div>
  );
};
// className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory justify-center scrollbar-thin scrollbar-track-[#053642] scrollbar-thumb-[#A1C181]/80"
export default WorkExperience;
