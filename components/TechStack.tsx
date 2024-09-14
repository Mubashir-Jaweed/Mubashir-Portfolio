"use client";

import React from "react";
import { ShootingStars } from "./ui/ShootingStars";
import { StarsBackground } from "./ui/StarBackground";

const TechStack = () => {
  return (
    <div className="py-20 bg-[#000319] flex flex-col items-center justify-center relative w-full ">
      <span className="text-[60px] font-montserrat font-bold text-center w-[70%] leading-tight pb-20">
        The Hell is This! <span className="text-blue-500">My Tech Stack</span>
      </span>
      <StarsBackground />
      <ShootingStars />
    </div>
  );
};
export const skills = [
  {
    title: "React.js",
  },
  {
    title: "Tailwind CSS",
  },
  {
    title: "Next.js",
  },
  {
    title: "Flutter",
  },
  {
    title: "SCSS",
  },
  {
    title: "JavaScript",
  },
  {
    title: "TypeScript",
  },
  {
    title: "Dart",
  },
  {
    title: "Vite.js",
  },
  {
    title: "Node.js",
  },
  {
    title: "Express.js",
  },
  {
    title: "MongoDB",
  },
  {
    title: "Firebase",
  },
  {
    title: "React Native",
  },
];

export default TechStack;
