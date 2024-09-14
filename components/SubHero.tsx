import React from "react";
import { ShootingStars } from "./ui/ShootingStars";
import { StarsBackground } from "./ui/StarBackground";

const SubHero = () => {
  return (
    <div className="py-20 bg-[#000319] flex flex-col items-center justify-center relative w-full">
      <h1 className="uppercase text-[7.800rem]  font-[700] text-center leading-[0.8] bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-neutral-300 ">
        <span className="py-2 text-white">
          Coding
          <br />
          <span className="text-blue-500">
            Cool
            <br />
            Shit
          </span>
          <br />
          since
          <br />
          2021
        </span>
      </h1>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
};

export default SubHero;
