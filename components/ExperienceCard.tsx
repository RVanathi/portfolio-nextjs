import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/types/Experience";
import { PortableText } from "@portabletext/react";

type Props = { experience: Experience };

function ExperienceCard({ experience }: Props) {
  function expDate(date: Date) {
    const year = new Date(date).getFullYear();
    const month = new Date(date).toLocaleString("default", {
      month: "short",
    });
    return `${month} ${year}`;
  }

  return (
    <article className="flex flex-col rounded-lg items-center space-y-5 h-auto w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#053642] p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden">
      {/* flex-shrink-0 */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
          src={experience?.companyImage}
          alt=""
          width="150"
          height="150"
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="sm:text-2xl text-xl font-light">
          {experience.jobTitle}
        </h4>
        <p className="font-bold sm:text-2xl text-xl mt-1">
          {experience.company}
        </p>
        <div className="flex space-x-2 my-2">
          {/* Tech used */}
          {experience.technologies.map((technology) => (
            // <div key={technology._id}>
            <Image
              key={technology._id}
              className="h-7 w-7 rounded-full"
              src={technology?.image}
              alt=""
              height="100"
              width="150"
            />
            // </div>
          ))}
        </div>
        <p className="text-[14px] uppercase py-5 text-[#1f7b70] ">
          {expDate(experience.dateStarted)} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : expDate(experience.dateEnded)}
        </p>
        <div className="list-disc space-y-4 ml-5 text-sm sm:text-lg max-h-96 pr-5 overflow-y-scroll scrollbar-thin scrollbar-track-[#053642] scrollbar-thumb-[#A1C181]/80">
          <PortableText value={experience.points} />
          {/* <ul className="list-disc space-y-4 ml-5 text-lg max-h-96 pr-5 overflow-y-scroll scrollbar-thin scrollbar-track-[#053642] scrollbar-thumb-[#A1C181]/80"> */}
          {/* h-[300px] overflow-y-scroll scrollbar scrollbar-track-[#053642] scrollbar-thumb-[#A1C181]/80 */}
          {/* {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul> */}
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;
