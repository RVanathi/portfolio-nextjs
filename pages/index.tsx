import React, { useState } from "react";
import Header from "@/components/Header";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Project from "@/components/Project";
import Link from "next/link";
import Image from "next/image";
import HomeImage from "../public/assets/home.jpg";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import {
  Experience,
  PageInfo,
  Project as ProjectType,
  Skill,
  Social,
  MySkill,
} from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchExperiences } from "@/utils/fetchExperiences";
// import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocials } from "@/utils/fetchSocials";
import { fetchMySkills } from "@/utils/fetchMySkills";

type Props = {
  // pageInfo: PageInfo;
  pageInfo: string;
  experiences: Experience[];
  mySkills: MySkill[];
  projects: ProjectType[];
  socials: Social[];
};

const Home = ({
  pageInfo,
  experiences,
  projects,
  mySkills,
  socials,
}: Props) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const toggleDisplay = () => {
    setIsDisplayed(!isDisplayed);
  };
  return (
    <div className=" bg-[#002f3b] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-[#053642] scrollbar-thumb-[#A1C181]/80">
      <Head>
        <title>{`Vanathi's Portfolio`}</title>
      </Head>

      <Header socials={socials} />
      {/* Hero*/}
      <section id="hero" className="my-5 snap-start">
        <Hero />
      </section>
      {/* About*/}
      <section id="about" className="my-5 snap-center">
        <About />
      </section>
      {/* Experience*/}
      <section id="experience" className="my-5 snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      {/* Skills*/}
      <section id="skills" className="my-5 snap-start">
        <Skills mySkills={mySkills} />
      </section>
      {/* Projects*/}
      <section id="projects" className="my-5 snap-start">
        <Projects projects={projects} toggle={toggleDisplay} />
      </section>
      <section id="project" className="my-5 snap-start">
        {projects.map((project) => (
          // isDisplayed && (
          <section
            key={project._id}
            id={`${project.slug.current}`}
            // className={isDisplayed ? `my-5 snap-start` : `hidden`}
            className="my-5 snap-start"
          >
            {isDisplayed && (
              <Project project={project} toggle={toggleDisplay} />
            )}
          </section>
        ))}
      </section>
      {/* Contact Me*/}
      <section id="contact" className="my-5 snap-start">
        <ContactMe socials={socials} />
      </section>
      <Link href="#hero" onClick={toggleDisplay}>
        <footer className="my-5 sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center animate-bounce">
            <Image
              className="relative h-12 w-12 rounded-full opacity-100 hover:opacity-50 cursor-pointer"
              src={HomeImage}
              alt=""
            />
            <ChevronDoubleUpIcon className="absolute h-10 w-10 rounded-full text-[#A1C181] filter opacity-0 hover:opacity-70 cursor-pointer " />
          </div>
          <div className="pl-3 text-sm text-[#1f7b70]">
            Copyright ©2023 Vanathi Rajasekar
          </div>
        </footer>
      </Link>
    </div>
  );
};
export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const mySkills: MySkill[] = await fetchMySkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  const experiences: Experience[] = await fetchExperiences();

  return {
    props: {
      pageInfo: String(pageInfo),
      // pageInfo,
      experiences,
      mySkills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
