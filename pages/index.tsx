// import Image from "next/image";
import Header from "@/components/Header";
import type { NextPage } from "next";
import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <div className=" bg-[#002f3b] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
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
      <section id="experience">
        <WorkExperience />
      </section>
      {/* Experience*/}
      {/* Skills*/}
      {/* Projects*/}
      {/* Contact Me*/}
    </div>
  );
};
export default Home;
