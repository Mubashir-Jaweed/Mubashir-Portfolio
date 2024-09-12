import React from 'react'

const GridBackground = ({children}:{children?:React.ReactNode }) => {
  return (
    <div className=" h-full w-full dark:bg-transparent bg-white  dark:bg-grid-[#888]/[0.3] bg-dot-black/[0.2] relative flex flex-col items-center justify-center rounded-3xl">
      <div className="absolute pointer-events-none inset-0  items-center  justify-center dark:bg-[#000319] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] rounded-3xl"></div>
      {children}
    </div>
  );
}

export default GridBackground