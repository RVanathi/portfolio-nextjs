import Header from "@/components/Header";
import type { NextPage } from "next";
import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

const Home: NextPage = () => {
  return (
    <div className=" bg-[#002f3b] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-[#053642] scrollbar-thumb-[#A1C181]/80">
      <Head>
        <title>Vanathi's Portfolio</title>
      </Head>

      <Header />
      {/* Hero*/}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About*/}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience*/}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      {/* Skills*/}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* Projects*/}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* Contact Me*/}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
};
export default Home;
