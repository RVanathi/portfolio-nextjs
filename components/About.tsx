"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PageInfo } from "@/types/PageInfo";
import { PortableText } from "@portabletext/react";

type Props = { pageInfo: PageInfo };

const About = ({ pageInfo }: Props) => {
  return (
    <>
      <h3 className="text-center pt-28 mb-1 uppercase tracking-[20px] text-[#1f7b70] text-xl md:text-2xl">
        {/* top-16 md:top-24 */}
        About
      </h3>
      <motion.div
        className="my-10 flex flex-col relative text-center md:text-left md:flex-row max-w-4xl px-4 justify-evenly mx-auto items-center"
        // h-screen
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* <h3 className="mb-4 absolute top-14 md:top-24 uppercase tracking-[20px] text-[#1f7b70] text-xl md:text-2xl">
          About
        </h3> */}
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
          className="p-0 m-0"
        >
          <Image
            className="-pb-5 -mb-20 md:mb-0 flex-shrink-0 w-48 h-48 sm:w-56 sm:h-56 rounded-full object-fit md:rounded-lg md:w-[450px] md:h-[280px]"
            alt=""
            src={pageInfo.profilePic}
            width={250}
            height={500}
          />
        </motion.div>

        <div className="pt-8 space-y-5 px-0 md:px-10 w-fit">
          <h4 className="text-2xl pt-20">
            Here is a{" "}
            <span className="underline decoration-[#A1C181]/50">little</span>{" "}
            background
          </h4>
          <div className="text-[0.75rem] sm:text-base md:text-base">
            <PortableText value={pageInfo.backgroundInformation} />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
