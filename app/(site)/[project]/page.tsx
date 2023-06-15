"use client";

import { getProject } from "@/sanity/utils";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { StarIcon, ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Footer from "@/components/Footer";

type Props = { params: { project: string } };

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className="h-screen overflow-y-scroll scrollbar-thin scrollbar-track-[#053642] scrollbar-thumb-[#A1C181]/80">
      {/* overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-[#053642] scrollbar-thumb-[#A1C181]/80 */}
      <h3 className="text-center py-20 mb-1 uppercase tracking-[20px] text-[#1f7b70] text-xl md:text-2xl">
        {project?.title}
      </h3>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1 }}
        className=" relative flex flex-col text-left md:flew-row max-w-full justify-evenly mx-auto items-center z-0"
      >
        {/* overflow-hidden h-screen */}
        {/* <h3 className="absolute top-24 uppercase tracking-[20px] text-[#1f7b70] text-2xl">
        {project?.title}
      </h3> */}
        <div className="w-auto relative flex z-20 ">
          {/* w-screen overflow-y-hidden snap-y snap-mandatory overflow-y-scroll scrollbar-thin scrollbar-track-[#053642] scrollbar-thumb-[#A1C181]/80 */}
          <div className=" flex flex-col space-y-5 items-center justify-center p-10 md:p-20">
            {/* flex-shrink-0  snap-center p-20 md:p-44*/}
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image src={project.image} alt="" width="300" height="200" />
            </motion.div>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl sm:text-3xl font-semibold text-center underline decoration-[#A1C181]/50">
                Overview
              </h4>
              <div className="grid md:grid-cols-5 gap-8">
                <div className="col-span-4">
                  <div className="text-sm sm:text-xl text-center md:text-left ">
                    <PortableText value={project?.summary} />
                  </div>
                  <a
                    href={`${project?.linkToBuild}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="projectButton mr-5">Demo</button>
                  </a>
                  <a
                    href={`${project?.linkToCode}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="projectButton">Code</button>
                  </a>
                  <a href="/#projects" className="flex pt-4">
                    <ChevronDoubleLeftIcon className="pr-1 align-start text-[#A1C181] h-7 w-7 animate-pulse" />
                    Back
                  </a>
                </div>
                <div className="col-span-4 md:col-span-1 w-full md:w-[250px] rounded-lg items-center bg-[#053642] p-5 opacity-50">
                  <div className="p-2">
                    <p className="align-middle items-center text-center font-semibold pb-2">
                      Technologies
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-1">
                      {project?.technologies?.map((technology) => (
                        <p
                          key={technology._id}
                          className="py-2 flex items-center"
                        >
                          <StarIcon className="text-[#A1C181] h-4 w-4 pr-1 text-sm sm:text-lg" />
                          {technology?.title}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full absolute top-[30%] bg-[#A1C181]/25 left-0 h-[500px] -skew-y-12" />
      </motion.div>
      <Footer />
    </div>
  );
}
