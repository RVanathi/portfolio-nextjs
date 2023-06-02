import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import type { NextPage } from "next";
import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
// import DotGroup from "@/components/DotGroup";
import Link from "next/link";
import Image from "next/image";
import HomeImage from "../public/assets/home.jpg";
// import useMediaQuery from "@/hooks/useMediaQuery";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";

const Home: NextPage = () => {
  // const [isTopOfPage, setIsTopOfPage] = useState(true);
  // const [selectedPage, setSelectedPage] = useState("hero");
  // const isDesktop = useMediaQuery("(min-width: 1060px)");

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY === 0) {
  //       setIsTopOfPage(true);
  //       setSelectedPage("home");
  //     }
  //     if (window.scrollY !== 0) setIsTopOfPage(false);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className=" bg-[#002f3b] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-[#053642] scrollbar-thumb-[#A1C181]/80">
      <Head>
        <title>{`Vanathi's Portfolio`}</title>
      </Head>

      <Header />
      {/* <div className="z-40 w-5/6 mx-auto md:h-full">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
      </div> */}
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
        <WorkExperience />
      </section>
      {/* Skills*/}
      <section id="skills" className="my-5 snap-start">
        <Skills />
      </section>
      {/* Projects*/}
      <section id="projects" className="my-5 snap-start">
        <Projects />
      </section>
      {/* Contact Me*/}
      <section id="contact" className="my-5 snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
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
