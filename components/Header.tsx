import React from "react";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "@/typings";

type Props = { socials: Social[] };

function Header({ socials }: Props) {
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
          />
        ))}
      </motion.div>
      <Link href="/#contact" legacyBehavior>
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
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="#1f7b70"
            bgColor="transparent"
          />
          <p className="cursor-pointer uppercase hidden md:inline-flex text-sm text-[#190933]-400">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
