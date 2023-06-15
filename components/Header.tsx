"use client";
import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "@/types/Social";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

type Props = { socials: Social[] };

function Header({ socials }: Props) {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex items-center justify-between"
      >
        {/*Social Icons */}
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="#1f7b70"
            bgColor="transparent"
            target="_blank"
            rel="noreferrer"
          />
        ))}
      </motion.div>
      <a href="#contact">
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center"
        >
          <EnvelopeIcon className="flex text-[#1f7b70] h-10 w-10 font-semibold pr-2" />
          {/* <SocialIcon
          href="/#contact"
          className="cursor-pointer"
          network="email"
          fgColor="#1f7b70"
          bgColor="transparent"
        /> */}
          <p className="cursor-pointer uppercase hidden md:inline-flex text-sm text-[#190933]-400">
            Get In Touch
          </p>
        </motion.div>
      </a>
    </header>
  );
}

export default Header;
