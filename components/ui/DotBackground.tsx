import React from 'react'

const DotBackground = ({children}:{children?:React.ReactNode }) => {
  return (
    <div className=" h-full w-ful rounded-2xl p-5 dark:bg-transparent bg-white  dark:bg-dot-[#3590ff]/[0.9] bg-dot-black/[0.2] relative flex flex-col items-center justify-center">
      <div className=" rounded-2xl absolute pointer-events-none inset-0  items-center  justify-center dark:bg-[#000319] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
}

export default DotBackground