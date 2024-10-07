import React from "react";
import aboutImg from "@/public/about.png";
import gameImg from "@/public/game.png";
import Image from "next/image";
import { TextRevealCard } from "./TextRevealCard";
import GridBackground from "./GridBackground";
import { GradientBackground } from "./GradientBackground";
import GradientButton from "./GradientButton";
import DotBackground from "./DotBackground";
const Grid = () => {
  return (
    <div className="h-auto w-[90%]  lg:grid flex flex-col grid-cols-5 grid-rows-3 gap-5 z-20">
      <div className="md:h-[450px] col-span-3 row-span-2 rounded-2xl border-[0.1px] border-gray-700 relative">
        <Image
          alt="about img"
          src={aboutImg}
          className="rounded-2xl h-full w-full object-cover "
        />
        <span
          className="text-white md:text-[32px] text-[20px] font-bold absolute bottom-5 left-5 right-5 width-[65%] leading-tight
        ">
          I Emphasize Collaboration and Clear Communication with Clients
        </span>
      </div>
      <div className="col-span-2 border-[0.1px] border-gray-700 rounded-2xl text-center h-[210px] md:block hidden">
        <GridBackground>
          <TextRevealCard
            className="w-full md:text-[32px] text-[20px] "
            text="You know the goal,"
            revealText="I know the code."></TextRevealCard>
        </GridBackground>
      </div>
      <div className="col-span-2 border-[0.1px] border-gray-700 rounded-2xl flex justify-center align-center h-[210px]  relative">
        <span className="md:text-[32px]  text-[20px] font-bold absolute bottom-5 left-5 right-5 leading-tight">
          Coding the Web 💻, Dreaming of Game Adventures 🎮🕹️
        </span>
        <span></span>
        <Image
          alt="about img"
          src={gameImg}
          className="rounded-2xl  w-full object-cover bg-bottom"
        />
      </div>
      <div className="border-[0.1px] border-gray-700 rounded-2xl col-span-2">
        <DotBackground>
          <span className="md:text-[32px]  text-[20px] font-bold z-20 leading-tight text-center">
            I'm open to working across various time zones
          </span>
        </DotBackground>
      </div>
      <div className="col-span-3 border-[0.5px] bg-gray-900 border-gray-700 rounded-2xl ">
        <GridBackground>
          <div className="h-full w-full flex justify-center align-center flex-col p-7 text-center ">
            <span className="md:text-[32px]  text-[20px] font-bold z-20 ">
              Currently Building a Next.js SaaS Application in Real-Time
            </span>
          </div>
        </GridBackground>
      </div>
    </div>
  );
};

export default Grid;
