import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = { experience: Experience };

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 h-auto w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#053642] p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden">
      {/* flex-shrink-0 */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          className="w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
          src={urlFor(experience?.companyImage).url()}
          alt=""
          width="150"
          height="150"
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">Associate Software Engineer</h4>
        <p className="font-bold text-2xl mt-1">Accenture</p>
        <div className="flex space-x-2 my-2">
          {/* Tech used */}
          {experience.technologies.map((technology) => (
            <Image
              key={technology._id}
              className="h-7 w-7 rounded-full"
              src={urlFor(technology.image).url()}
              alt=""
              height="100"
              width="150"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-[#1f7b70] ">
          {/* {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()} */}
          {"Jun 2016 - May 2018"}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg max-h-96 pr-5 overflow-y-scroll scrollbar-thin scrollbar-track-[#053642] scrollbar-thumb-[#A1C181]/80">
          {/* h-[300px] overflow-y-scroll scrollbar scrollbar-track-[#053642] scrollbar-thumb-[#A1C181]/80 */}
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
