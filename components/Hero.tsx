import React from "react";
import { AuroraBackground } from "./ui/AuroraBackground";
import GradientButton from "./ui/GradientButton";
import { ShootingStars } from "./ui/ShootingStars";
import { StarsBackground } from "./ui/StarBackground";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div>
      <AuroraBackground showRadialGradient={true}>
        {/* <DotBackground> */}
        <span className="text-[10px] md:text-base lg:text-base uppercase text-center text-gray">
          Hi! I’m Mubashir, a Full-Stack Developer.
        </span>

        <TextGenerateEffect
          words="Transforming Concepts into Code
                 Bringing Ideas to Life Digitally"
          duration={1}
          className={
            "md:text-[60px] font-montserrat font-bold text-center md:w-[70%] leading-tight text-[30px] w-[90%]"
          }
        />
        <span className="md:text-base lg:text-base  text-[10px] uppercase text-gray-200 mt-2 text-center">
          Building powerful web and mobile solutions that bring ideas to life.
        </span>
        <a href="#projects" className="z-10">
          <GradientButton word="Show my Work" />
        </a>
        {/* </DotBackground> */}
      </AuroraBackground>
      <StarsBackground />
      <ShootingStars />
    </div>
  );
};

export default Hero;
