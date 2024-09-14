import React from "react";
import { AuroraBackground } from "./ui/AuroraBackground";
import DotBackground from "./ui/DotBackground";
import GradientButton from "./ui/GradientButton";
import { ShootingStars } from "./ui/ShootingStars";
import { StarsBackground } from "./ui/StarBackground";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div>
      <AuroraBackground showRadialGradient={true}>
        {/* <DotBackground> */}
          <span className="text-md uppercase text-gray">
            Hi! I’m Mubashir, a Full-Stack Developer.
          </span>

          <TextGenerateEffect
            words="Transforming Concepts into Code
                 Bringing Ideas to Life Digitally"
            duration={1}
            className={
              "text-[60px] font-montserrat font-bold text-center w-[70%] leading-tight"
            }
          />
          <span className="text-md uppercase text-gray-200 mt-2">
            Building powerful web and mobile solutions that bring ideas to life.
          </span>
          <a href="#work">
            <GradientButton word="Show my Work" />
          </a>
        {/* </DotBackground> */}
      </AuroraBackground>
      <StarsBackground/>
      <ShootingStars/>

    </div>
  );
};

export default Hero;
