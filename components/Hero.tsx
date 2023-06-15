"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundRings from "./BackgroundRings";
import Image from "next/image";
import { PageInfo } from "@/types/PageInfo";

type Props = { pageInfo: PageInfo };

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [`Hi, I'm ${pageInfo.name}`],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full h-screen flex flex-col space-y-8 items-center justify-center text-center">
      {/* overflow-hidden */}
      <BackgroundRings />
      <Image
        className="relative h-32 w-32 mx-auto object-cover"
        // rounded-full
        src={pageInfo.heroImage}
        alt="/"
        width="100"
        height="100"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-[#1f7b70] pb-2 tracking-[15px] sm:p-2">
          {`${pageInfo.role}`}
        </h2>
        <h1 className="text-4xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#A1C181" />
        </h1>
        <div className="pt-5">
          <a href="/#about">
            <button className="heroButton">About</button>
          </a>
          <a href="/#experience">
            <button className="heroButton">Experience</button>
          </a>
          <a href="/#skills">
            <button className="heroButton">Skills</button>
          </a>
          <a href="/#projects">
            <button className="heroButton">Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
