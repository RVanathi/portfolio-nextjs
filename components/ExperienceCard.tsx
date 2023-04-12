import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 h-auto w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#053642] p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          className="w-28 h-28 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
          src="/../public/assets/acc2.png"
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
          <Image
            className="h-7 w-7 rounded-full"
            src="/../public/assets/sap_abap.jpg"
            alt=""
            height="100"
            width="150"
          />
          <Image
            className="h-7 w-7 rounded-full"
            src="/../public/assets/soap.png"
            alt=""
            height="100"
            width="150"
          />
        </div>
        <p className="uppercase py-5 text-[#1f7b70] ">
          Started work... - Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg overflow-y-scroll h-[250px]">
          <li>
            Summary points. Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </li>
          <li>
            Summary points. Suscipit maxime veniam velit culpa dignissimos
            eveniet quod inventore, aspernatur assumenda architecto libero
            numquam.
          </li>
          <li>
            Summary points. Molestias accusantium consequatur excepturi
            reprehenderit? Quidem, eum dicta.
          </li>
          <li>Summary points.Summary pointsSummary pointsSummary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
