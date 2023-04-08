import React from "react";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import { motion } from "framer-motion";
type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
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
        <Image
          src="/../public/assets/logo.png"
          alt="/"
          width="150"
          height="150"
        />
        <SocialIcon
          url="https://www.instagram.com/vaanoz/"
          fgColor="#190933"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/vanathi-rajasekar/"
          fgColor="#190933"
          bgColor="transparent"
        />
      </motion.div>
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
        className="flex flex-row items-center p-6"
      >
        {/*Social Icons */}
        <SocialIcon
          url="https://www.youtube.com/sonnysangha"
          fgColor="#190933"
          bgColor="transparent"
        />
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="#190933"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-[#190933]-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
