import React from "react";
import GradientButton from "./ui/GradientButton";
import { ShootingStars } from "./ui/ShootingStars";
import { StarsBackground } from "./ui/StarBackground";

const Contact = () => {
  return (
    <div className="py-20 bg-[#000319] flex flex-col items-center justify-center relative w-full ">
      <span className="text-[60px] font-montserrat font-bold text-center w-[60%] leading-tight pb-5">
        Are you ready to enhance and elevate your
        <span className="text-blue-500"> online presence?</span>
      </span>
      <span className="text-md uppercase text-gray-200">
        Contact me today to explore how I can help you reach your goals.
      </span>
      <a href="#work">
        <GradientButton word="Contact me Now" />
      </a>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
};

export default Contact;
