import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundRings from "./BackgroundRings";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Vanthi Rajasekar"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <BackgroundRings />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#00afb9" />
      </h1>
    </div>
  );
}

export default Hero;
// #9f86c0
