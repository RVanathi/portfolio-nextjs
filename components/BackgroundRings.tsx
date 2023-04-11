import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgrounfRings = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#053642] rounded-full w-[200px] h-[200px] mt-52 animate-ping" />
      <div className="rounded-full border border-[#053642] w-[300px] h-[300px] absolute mt-52" />
      <div className="rounded-full border border-[#053642] w-[500px] h-[500px] absolute mt-52" />
      <div className="rounded-full border border-[#A1C181] opacity-20 w-[650px] h-[650px] absolute mt-52 animate-pulse" />
      <div className="rounded-full border border-[#053642] w-[800px] h-[800px] absolute mt-52" />
    </motion.div>
  );
};

export default BackgrounfRings;
