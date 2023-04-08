// import Image from "next/image";
import Header from "@/components/Header";
import type { NextPage } from "next";
import Head from "next/head";
import Hero from "@/components/Hero";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <div className=" bg-[#E8D7F1] text-[#190933] h-screen">
      <Head>
        <title>Vanathi's Portfolio</title>
      </Head>

      <Header />
      {/* Hero*/}
      <section id="hero">
        <Hero />
      </section>
      {/* About*/}
      {/* Experience*/}
      {/* Skills*/}
      {/* Projects*/}
      {/* Contact Me*/}
    </div>
  );
};
export default Home;
