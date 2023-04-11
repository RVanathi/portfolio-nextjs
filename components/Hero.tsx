import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundRings from "./BackgroundRings";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Vanathi Rajasekar"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundRings />
      <Image
        className="relative h-32 w-32 mx-auto object-cover"
        // rounded-full
        src="/../public/assets/new.png"
        alt="/"
        width="100"
        height="100"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-[#1f7b70] pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#A1C181" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
// #9f86c0
// #be95c4;
// #ffc8dd
// #cdb4db
//#163a4a
//#002f3b
// #063c49
// #053642
//#8cc084
//#9ac893
//#85d6cd
//#33998d
//#2a9d8f
//#233D4D
//#FE7F2D
//#A1C181
//#619B8A
// #1f7b70
