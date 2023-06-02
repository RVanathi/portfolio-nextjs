import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { StarIcon, ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type Props = {};

const netflix = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="bg-[#002f3b] text-white h-screen relative flex flex-col text-left md:flew-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#1f7b70] text-2xl">
        Netflix clone
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-[#053642] scrollbar-thumb-[#A1C181]/80">
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="/../public/assets/netflix.jpg"
              alt=""
              width="300"
              height="200"
            />
          </motion.div>
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-3xl font-semibold text-center underline decoration-[#A1C181]/50">
              Overview
            </h4>
            <div className="grid md:grid-cols-5 gap-8">
              <div className="col-span-4">
                <p className="text-lg text-center md:text-left ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Perspiciatis velit autem iste aut nemo placeat debitis, qui
                  iusto cum magnam ducimus rerum maiores at facere, tempora
                  deleniti labore pariatur iure. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Quos dolore ipsa molestias
                  veniam delectus facere commodi minus odit possimus, unde omnis
                  quis vero tempore quasi ut voluptas perferendis alias aut.
                </p>
                <button className="projectButton mr-5">Demo</button>
                <button className="projectButton">Code</button>
                <Link href="/#projects" className="flex pt-4">
                  <ChevronDoubleLeftIcon className="pr-1 align-start text-[#A1C181] h-7 w-7 animate-pulse" />
                  Back
                </Link>
              </div>
              <div className="col-span-4 md:col-span-1 w-[250px] rounded-lg items-center bg-[#053642] p-5 opacity-50">
                <div className="p-2">
                  <p className="text-center font-semibold pb-2">Technologies</p>
                  <div className="grid grid-cols-2 md:grid-cols-1">
                    <p className="py-2 flex items-center">
                      <StarIcon className="text-[#A1C181] h-4 w-4 pr-1" />
                      React
                    </p>
                    <p className="py-2 flex items-center">
                      <StarIcon className="text-[#A1C181] h-4 w-4 pr-1" />
                      Stripe
                    </p>
                    <p className="py-2 flex items-center">
                      <StarIcon className="text-[#A1C181] h-4 w-4 pr-1" />
                      Firebase
                    </p>
                    <p className="py-2 flex items-center">
                      <StarIcon className="text-[#A1C181] h-4 w-4 pr-1" />
                      Redux
                    </p>
                    <p className="py-2 flex items-center">
                      <StarIcon className="text-[#A1C181] h-4 w-4 pr-1" />
                      TMDB API
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full absolute top-[30%] bg-[#A1C181]/25 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default netflix;
