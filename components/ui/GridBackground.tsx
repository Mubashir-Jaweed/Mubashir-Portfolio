import React from 'react'

const GridBackground = ({children}:{children?:React.ReactNode }) => {
  return (
    <div className=" h-full w-full dark:bg-transparent bg-white  dark:bg-grid-blue-500/[0.5] bg-dot-black/[0.2] relative  rounded-3xl">
      <div className="absolute pointer-events-none inset-0  items-center  justify-center dark:bg-gray-900 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] rounded-3xl"></div>
      {children}
    </div>
  );
}

export default GridBackground