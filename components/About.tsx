import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutImage from "../public/assets/abt.jpg";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      className="my-4 flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-4xl px-4 justify-evenly mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="mb-4 absolute top-24 uppercase tracking-[20px] text-[#1f7b70] text-2xl">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className=""
      >
        <Image
          className="mt-16 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-fit md:rounded-lg md:w-[450px] md:h-[280px]"
          // xl:w-[600px] xl:h-[350px]
          alt=""
          src={AboutImage}
        />
      </motion.div>

      <div className="mt-10 space-y-10 px-0 md:px-10 w-fit">
        <h4 className="text-3xl">
          Here is a{" "}
          <span className="underline decoration-[#A1C181]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I am a software engineer holding a Master &apos;s degree from TU
          Delft, Netherlands. With two years of professional experience as an
          SAP ABAP software developer, I have fine-tuned my skills in software
          development and garnered invaluable industry insights. My master
          thesis on &lsquo;Humans disagree with the IoU for measuring object
          detector localization error&lsquo; was published as a research paper
          at IEEE ICIP 2022 conference. This experience has not only piqued my
          curiosity but also deepened my understanding of cutting-edge
          technologies.
          <br /> As a self-taught enthusiast of JavaScript, I have fostered a
          genuine passion for web development. At present, my focus revolves
          around creating captivating front-end web applications using
          frameworks such as React.js and Next.js. Additionally, I am keenly
          interested in full-stack development and have gained hands-on
          experience with a few content management systems (CMS) for the backend
          components of my applications. My zeal for continuous learning,
          enables me to keep myself up to date with the latest advancements and
          effortlessly adapt to new tech stacks as required.
          <br /> Now, I am seeking an exciting opportunity as a software
          developer, where I can apply my comprehensive knowledge, creative
          mindset, and valuable experience to contribute to meaningful software
          projects. I am eager to grow both personally and professionally in a
          collaborative and innovative environment. Together, let us embark on a
          journey of growth and excellence 😊.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
