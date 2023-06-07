import React, { useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Project as ProjectType } from "@/typings";
import { urlFor } from "@/sanity";
import Project from "../components/Project";

type Props = {
  project: ProjectType;
  toggle: () => void;
};

const ProjectItem = ({ project, toggle }: Props) => {
  return (
    <>
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative flex items-center justify-center w-full h-auto rounded-xl group hover:bg-gradient-to-br from-[#1f7b70]/75 to-[#A1C181]/75"
      >
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={urlFor(project?.image).url()}
          height={250}
          width={400}
          alt="/"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-center text-2xl tracking-wider">
            {project?.title}
          </h3>
          <p className="pb-4 pt-2 text-center">{project.tech}</p>
          <Link href={`#${project.slug.current}`}>
            {/* href={`#${project.slug.current}`} */}
            <p
              onClick={toggle}
              className="px-0 text-center font-semibold py-2 border border-white/50 uppercase text-xs tracking-widest transition-all hover:border-[#002f3b]/60 hover:text-[#002f3b]/50"
            >
              More Info
            </p>
          </Link>
        </div>
      </motion.div>
      {/* {isDisplayed && (
        <section id="project" className="flex-col w-full my-5 snap-start">
          <Project project={project} />
        </section>
      )} */}
    </>
  );
};
export default ProjectItem;
