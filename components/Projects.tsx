import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flew-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#1f7b70] text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-[#053642] scrollbar-thumb-[#A1C181]/80">
        {projects.map((project, i) => {
          return (
            <div
              key={project}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            >
              <motion.div
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/../public/assets/net.jpg"
                  alt=""
                  width="120"
                  height="180"
                />
              </motion.div>

              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#A1C181]/50">
                    Case study {i + 1} of {projects.length}:
                  </span>{" "}
                  UPS clone
                </h4>
                <p className="text-lg text-center md:text-left ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Perspiciatis velit autem iste aut nemo placeat debitis, qui
                  iusto cum magnam ducimus rerum maiores at facere, tempora
                  deleniti labore pariatur iure. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Quos dolore ipsa molestias
                  veniam delectus facere commodi minus odit possimus, unde omnis
                  quis vero tempore quasi ut voluptas perferendis alias aut.
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full absolute top-[30%] bg-[#A1C181]/25 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
