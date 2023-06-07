import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";
import netflixImg from "../public/assets/netflix.jpg";
import { Project } from "@/typings";
import project from "@/sanity/schemas/project";
// import Project from "./Project";

type Props = {
  projects: Project[];
  toggle: () => void;
};

function Projects({ projects, toggle }: Props) {
  // const [isDisplayed, setIsDisplayed] = useState(false);

  // const toggleDisplay = () => {
  //   setIsDisplayed(!isDisplayed);
  // };

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1 }}
        className="h-screen relative flex flex-col text-left md:flew-row max-w-full justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-[#1f7b70] text-2xl">
          Projects
        </h3>
        <h3 className="absolute top-36 uppercase tracking-[3px] text-[#1f7b70] text-sm">
          What I&apos;ve Built
        </h3>
        <div className="z-40 grid grid-cols-2 md:grid-cols-3 gap-8">
          {projects?.map((project) => (
            <ProjectItem key={project._id} project={project} toggle={toggle} />
          ))}

          {/* <ProjectItem
            title="Netflix Clone"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
          />
          <ProjectItem
            title="Blog App"
            backgroundImg={netflixImg}
            projectUrl="/blog"
          />
          <ProjectItem
            title="Portfolio"
            backgroundImg={netflixImg}
            projectUrl="/portfolio"
          />
          <ProjectItem
            title="Dino Game"
            backgroundImg={netflixImg}
            projectUrl="/dino"
          />
          <ProjectItem
            title="Slack Clone"
            backgroundImg={netflixImg}
            projectUrl="/slack"
          />
          <ProjectItem
            title="CRUD App"
            backgroundImg={netflixImg}
            projectUrl="/customer"
          /> */}
        </div>
      </motion.div>
      {/* <Project project={project} /> */}
    </div>
  );
}

export default Projects;
