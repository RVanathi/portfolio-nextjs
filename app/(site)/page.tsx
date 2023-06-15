import React from "react";
import {
  getExperiences,
  getPageInfo,
  getProjects,
  getSkills,
  getSocials,
} from "@/sanity/utils";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";

export default async function Home() {
  const [pageInfo, experiences, skills, projects, socials] = await Promise.all([
    getPageInfo(),
    getExperiences(),
    getSkills(),
    getProjects(),
    getSocials(),
  ]);

  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-rounded-full scrollbar-thin scrollbar-track-[#053642] scrollbar-thumb-[#A1C181]/80">
      <Header socials={socials} />
      {/* Hero*/}
      <section id="hero" className="my-10 snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      {/* About*/}
      <section id="about" className=" my-10 pb-36 snap-start">
        <About pageInfo={pageInfo} />
      </section>
      {/* Experience*/}
      <section id="experience" className="my-10 pb-28 snap-start">
        <WorkExperience experiences={experiences} />
      </section>
      {/* Skills*/}
      <section id="skills" className="my-10 pb-28 snap-start">
        <Skills skills={skills} />
      </section>
      {/* Projects*/}
      <section id="projects" className="my-10 pb-40 snap-start">
        <Projects projects={projects} />
      </section>
      {/* Contact Me*/}
      <section id="contact" className="my-10 pb-10 snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>
      <Footer />
    </div>
  );
}
