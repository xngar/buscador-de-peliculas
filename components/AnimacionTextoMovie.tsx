"use client";
import React, { Suspense } from "react";
import TypingAnimation from "@/components/magicui/typing-animation";

type TextoProps = {
  texto: string;
};

const AnimacionTextoMovie = ({ texto }: TextoProps) => {
  return (
    <TypingAnimation
      className="text-4xl font-bold text-black dark:text-white"
      text={texto}
    />
  );
};

export default AnimacionTextoMovie;
