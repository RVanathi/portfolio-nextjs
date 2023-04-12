import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-hidden"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#1f7b70] text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/assets/bitmoji.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl">
          Here is a{" "}
          <span className="underline decoration-[#A1C181]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempora
          saepe itaque quisquam animi sint rerum, suscipit quas ullam vel eum,
          vitae obcaecati! Ea, assumenda impedit corporis inventore asperiores
          quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          iusto obcaecati vero dolore commodi explicabo quo, totam laborum quia,
          doloremque neque. Recusandae asperiores velit amet aliquam minus
          voluptate rerum itaque! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eveniet veniam ut vero quisquam architecto, quidem
          similique soluta porro, corrupti eius reprehenderit deleniti velit
          dicta veritatis consequatur laborum? Magni, odio consequatur! Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          reiciendis beatae qui consequatur veniam aliquid, quasi harum facere
          voluptatem possimus, quae, vel provident repudiandae esse magnam
          ratione aut assumenda hic.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
