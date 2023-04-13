import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutImage from "../public/assets/coffee.jpg";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-4xl px-10 justify-evenly mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#1f7b70] text-2xl">
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
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-fit md:rounded-lg md:w-[450px] md:h-[280px] xl:w-[600px] xl:h-[350px]"
          alt=""
          src={AboutImage}
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10 w-fit">
        <h4 className="text-3xl">
          Here is a{" "}
          <span className="underline decoration-[#A1C181]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempora
          saepe itaque quisquam animi sint rerum, suscipit quas ullam vel eum,
          vitae obcaecati! Ea, assumenda impedit corporis inventore asperiores
          quo. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Quibusdam hic aut vero quas odio earum assumenda possimus. Cumque,
          voluptates, perspiciatis saepe, ratione expedita unde amet doloribus
          eligendi ad sit nemo! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sapiente quae dignissimos, modi asperiores provident
          repellat debitis accusantium animi natus quidem molestias, quo totam
          similique facilis assumenda cum sed corrupti quam.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
