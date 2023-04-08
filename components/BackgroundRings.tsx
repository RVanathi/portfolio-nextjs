import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgrounfRings = (props: Props) => {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute bg-[#9f86c0] rounded-full w-[200px] h-[200px] mt-52 animate-ping"></div>
    </div>
  );
};

export default BackgrounfRings;
