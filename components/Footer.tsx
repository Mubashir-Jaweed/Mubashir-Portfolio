import React from "react";
import { ShootingStars } from "./ui/ShootingStars";
import { StarsBackground } from "./ui/StarBackground";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-10 bg-[#000319] flex flex-col items-center justify-center relative w-full">
      <div className=" flex justify-center gap-2 w-full px-5">
        <a
          href="https://github.com/Mubashir-Jaweed"
          target="_blank"
          rel="noopener noreferrer"
          className=" z-10 hover:text-blue-500 hover:border-blue-500 border border-gray-400 rounded-lg h-10 w-10 flex justify-center items-center">
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/mubashir-jaweed-%F0%9F%87%B5%F0%9F%87%B8-51626b240/"
          target="_blank"
          rel="noopener noreferrer"
          className=" z-10 hover:text-blue-500 hover:border-blue-500 border border-gray-400 rounded-lg h-10 w-10 flex justify-center items-center">
          <FaLinkedin className="text-2xl" />
        </a>
        <a
          href="mailto:mubashir.jaweed.dev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className=" z-10 hover:text-blue-500 hover:border-blue-500 border border-gray-400 rounded-lg h-10 w-10 flex justify-center items-center">
          <MdEmail className="text-2xl" />
        </a>
        <a
          href="https://www.instagram.com/mubashir_jaweed/"
          target="_blank"
          rel="noopener noreferrer"
          className=" z-10 hover:text-blue-500 hover:border-blue-500 border border-gray-400 rounded-lg h-10 w-10 flex justify-center items-center">
          <RiInstagramFill className="text-2xl" />
        </a>
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
};

export default Footer;
