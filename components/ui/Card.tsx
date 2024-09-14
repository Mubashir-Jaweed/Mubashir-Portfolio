"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Tooltip } from "./Tooltip";
import { MdArrowOutward } from "react-icons/md";

export const Card = ({
  data,
  children,
  childrenClassName,
  imageClassName,
  className,
}: {
  data: {
    imageUrl: string;
    icon: string;
    url?:string,
    urlText?:string,
    name: string;
    desc: string;
    techStack: {
      id: number;
      name: string;
      image: string;
    }[];
  };
  children?: React.ReactNode | string;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [direction, setDirection] = useState<
    "top" | "bottom" | "left" | "right" | string
  >("left");

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!ref.current) return;

    const direction = getDirection(event, ref.current);
    switch (direction) {
      case 0:
        setDirection("top");
        break;
      case 1:
        setDirection("right");
        break;
      case 2:
        setDirection("bottom");
        break;
      case 3:
        setDirection("left");
        break;
      default:
        setDirection("left");
        break;
    }
  };

  const getDirection = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    obj: HTMLElement
  ) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };

  return (
    <div className="bg-[#171927] p-3 rounded-xl w-[375px]">
      <motion.div
        onMouseEnter={handleMouseEnter}
        ref={ref}
        className={cn(
          " w-[350px] h-60  bg-transparent rounded-lg overflow-hidden group/card relative",
          className
        )}>
        <AnimatePresence mode="wait">
          <motion.div
            className="relative h-[300px] w-full"
            initial="initial"
            whileHover={direction}
            exit="exit">
            <motion.div className="group-hover/card:block hidden absolute inset-0 w-full h-[250px] bg-black/40 z-10 transition duration-500" />
            <motion.div
              variants={variants}
              className="h-[300px] w-full relative bg-gray-50 dark:bg-black"
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}>
              <Image
                alt="image"
                className={cn(
                  "h-[300px] w-full object-cover scale-[1.15]",
                  imageClassName
                )}
                width="1000"
                height="1000"
                src={data.imageUrl}
              />
            </motion.div>
            <motion.div
              variants={textVariants}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className={cn(
                "text-white absolute bottom-4 left-4 z-40",
                childrenClassName
              )}>
              {children}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="py-5">
        <div className="flex justify-start items-end gap-3">
          <Image
            alt="image"
            src={data.icon}
            className="h-10 w-10 border border-gray-700 rounded-lg"
          />
          <span className="text-xl">{data.name}</span>
        </div>
        <p className="w-full text-sm text-gray-400 pl-1 pt-2">{data.desc}</p>
        <div className="flex flex-row items-center justify-between mt-3 !mb-0 w-full">
          <span className="flex flex-row items-center justify-start">
            <Tooltip items={data.techStack} />
          </span>
          {data.url && (
            <a
              className="bg-[#a8c1ff17] hover:bg-[#a8c1ff27] p-2 rounded-lg text-sm flex gap-2 justify-center items-center"
              href={data.url}
              target="_blank">
              {data.urlText}
              <MdArrowOutward className="text-lg" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const variants = {
  initial: {
    x: 0,
  },
  exit: {
    x: 0,
    y: 0,
  },
  top: {
    y: 20,
  },
  bottom: {
    y: -20,
  },
  left: {
    x: 20,
  },
  right: {
    x: -20,
  },
};

const textVariants = {
  initial: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  exit: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  top: {
    y: -20,
    opacity: 1,
  },
  bottom: {
    y: 2,
    opacity: 1,
  },
  left: {
    x: -2,
    opacity: 1,
  },
  right: {
    x: 20,
    opacity: 1,
  },
};
