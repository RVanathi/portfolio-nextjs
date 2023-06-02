import React from "react";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";
import netflixImg from "../public/assets/netflix.jpg";
import blogImg from "../public/assets/blog.jpg";
import portImg from "../public/assets/portfolio.jpg";
import dinoImg from "../public/assets/dino.jpg";
import slackImg from "../public/assets/slack.jpg";
import custImg from "../public/assets/cust.jpg";

type Props = {};

function Projects({}: Props) {
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
          <ProjectItem
            title="Netflix Clone"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
          />
          <ProjectItem
            title="Blog App"
            backgroundImg={blogImg}
            projectUrl="/blog"
          />
          <ProjectItem
            title="Portfolio"
            backgroundImg={portImg}
            projectUrl="/portfolio"
          />
          <ProjectItem
            title="Dino Game"
            backgroundImg={dinoImg}
            projectUrl="/dino"
          />
          <ProjectItem
            title="Slack Clone"
            backgroundImg={slackImg}
            projectUrl="/slack"
          />
          <ProjectItem
            title="CRUD App"
            backgroundImg={custImg}
            projectUrl="/customer"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
