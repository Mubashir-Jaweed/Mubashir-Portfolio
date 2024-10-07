import React from 'react'
import { ShootingStars } from './ui/ShootingStars'
import { StarsBackground } from './ui/StarBackground'

const TechStack = () => {
  return (
    <div className="py-20 bg-[#000319] flex flex-col items-center justify-center relative w-full ">
      <span className="text-[60px] font-montserrat font-bold text-center w-[70%] leading-tight pb-20">
        My Tech
        <span className="text-blue-500"> Stack</span>
      </span>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}

export default TechStack