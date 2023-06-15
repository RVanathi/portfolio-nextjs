"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/Project";

type Props = { projects: Project[] };

function Projects({ projects }: Props) {
  return (
    <div className="w-full">
      <h3 className="text-center pt-28 pb-1 uppercase tracking-[20px] text-[#1f7b70] text-xl sm:text-2xl">
        Projects
      </h3>
      <h3 className="text-center pb-5 top-32 md:top-36 uppercase tracking-[3px] text-[#1f7b70] text-sm">
        What I&apos;ve Built
      </h3>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1 }}
        className="p-10 relative flex flex-col text-left md:flew-row max-w-full justify-evenly mx-auto items-center"
      >
        {/* <h3 className="absolute top-24 uppercase tracking-[20px] text-[#1f7b70] text-2xl">
          Projects
        </h3>
        <h3 className="absolute top-36 uppercase tracking-[3px] text-[#1f7b70] text-sm">
          What I&apos;ve Built
        </h3> */}
        <div className="z-40 grid grid-cols-2 md:grid-cols-3 gap-8">
          {projects?.map((project) => (
            <div key={project._id}>
              <motion.div
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-center w-full h-auto rounded-xl group hover:bg-gradient-to-br from-[#1f7b70]/75 to-[#A1C181]/75"
              >
                <Image
                  className="rounded-xl group-hover:opacity-10"
                  src={project?.image}
                  height={250}
                  width={400}
                  alt="/"
                />
                <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <h3 className="text-center text-sm sm:text-xl md:text-2xl tracking-wider">
                    {project?.title}
                  </h3>
                  <p className="pb-4 pt-2 text-sm sm:text-lg text-center">
                    {project.tech}
                  </p>
                  <Link href={`/${project.slug}`}>
                    <p className="px-0 text-center font-semibold py-0 sm:py-2 border border-white/50 uppercase text-[10px] sm:text-sm tracking-widest transition-all hover:border-[#002f3b]/60 hover:text-[#002f3b]/50">
                      More Info
                    </p>
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
