import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
// import netflixImg from "../public/assets/netflix.jpg";

type Props = {
  title: string;
  backgroundImg: StaticImageData;
  projectUrl: string;
};

const ProjectItem = ({ title, backgroundImg, projectUrl }: Props) => {
  return (
    <motion.div
      initial={{ y: -300, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative flex items-center justify-center w-full h-auto rounded-xl group hover:bg-gradient-to-br from-[#1f7b70]/75 to-[#A1C181]/75"
    >
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        height={250}
        width={400}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-center text-2xl tracking-wider">{title}</h3>
        <p className="pb-4 pt-2 text-center">React JS</p>
        <Link href={projectUrl}>
          <p className="px-0 text-center font-semibold py-2 border border-white/50 uppercase text-xs tracking-widest transition-all hover:border-[#002f3b]/60 hover:text-[#002f3b]/50">
            More Info
          </p>
        </Link>
      </div>
    </motion.div>
  );
};
export default ProjectItem;
