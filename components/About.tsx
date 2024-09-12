import React from "react";
import Grid from "./ui/Grid";
import { ShootingStars } from "./ui/ShootingStars";
import { StarsBackground } from "./ui/StarBackground";

const About = () => {
  return (
    <div className="py-20 bg-[#000319] flex flex-col items-center justify-center relative w-full">
      {/* <TextSparkles text="About Me" /> */}
      <Grid/>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
};

export default About;
