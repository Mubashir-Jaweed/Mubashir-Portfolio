import React from 'react'

const DotBackground = ({children}:{children?:React.ReactNode }) => {
  return (
    <div className=" h-[50rem] w-full dark:bg-transparent bg-white  dark:bg-dot-[#3590ff]/[0.3] bg-dot-black/[0.2] relative flex flex-col items-center justify-center">
      <div className="absolute pointer-events-none inset-0  items-center  justify-center dark:bg-[#000319] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
}

export default DotBackground