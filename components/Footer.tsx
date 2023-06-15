// "use client";
import React from "react";
import Image from "next/image";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import HomeImage from "../public/assets/home.jpg";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="my-5 sticky bottom-5 w-full cursor-pointer">
      <a
        href="/#hero"
        className="flex items-center justify-center animate-bounce"
      >
        <Image
          className="relative h-12 w-12 rounded-full opacity-100 hover:opacity-50 cursor-pointer"
          src={HomeImage}
          alt=""
        />
        <ChevronDoubleUpIcon className="absolute h-10 w-10 rounded-full text-[#A1C181] filter opacity-0 hover:opacity-70 cursor-pointer " />
      </a>
      <div className="pl-3 text-xs text-[#1f7b70]">
        Copyright ©2023 Vanathi Rajasekar
      </div>
    </footer>
  );
}

export default Footer;
