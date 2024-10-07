import React from 'react'
import { ShootingStars } from './ui/ShootingStars';
import { StarsBackground } from './ui/StarBackground';
import { Card } from './ui/Card';
import imageUrl from '@/public/game.png'
import dart from '@/public/dart.png'
import flutter from '@/public/flutter.png'
import js from '@/public/js.png'
import ts from '@/public/ts.png'
import next from '@/public/next.png'
import zenixIcon from '@/public/zenixIcon.png'
import zenix from '@/public/zenix.png'
import wlIcon from '@/public/wlIcon.png'
import wl from '@/public/wl.png'
import qrIcon from '@/public/qrIcon.png'
import qr from '@/public/qr.png'
import tailwind from '@/public/tailwind.png'

const Projects = () => {


    const work = [
      {
        id: 1,
        imageUrl: wl,
        icon: wlIcon,
        url: "",
        urlText: "Check Live App",
        name: "Words Legends - Epic Words Adventure",
        desc: "Words Legends is an engaging word puzzle game where players uncover hidden words in a letter grid, enhancing vocabulary and cognitive skills. Enjoy various themes and compete against friends for added fun!",
        techStack: [
          {
            id: 1,
            name: "Flutter",
            image: flutter,
          },
          {
            id: 2,
            name: "Dart",
            image: dart,
          },
        ],
      },
      {
        id: 2,
        imageUrl: qr,
        url: "",
        urlText: "Check Live App",
        icon: qrIcon,
        name: "QR & Barcode Scanner.io",
        desc: "QR and Barcode Scanner.io is a fast and easy-to-use tool for scanning and decoding QR codes and barcodes. Scan instantly and access information effortlessly with a simple tap.",
        techStack: [
          {
            id: 1,
            name: "Flutter",
            image: flutter,
          },
          {
            id: 2,
            name: "Dart",
            image: dart,
          },
        ],
      },
      {
        id: 3,
        imageUrl: zenix,
        icon: zenixIcon,
        url: "",
        urlText: "Check Live App",
        name: "Zenix Vpn - Fast Secure Vpn",
        desc: "Zenix VPN offers fast, secure, and private internet access, protecting your online activity with just one tap. Stay safe and anonymous while browsing anywhere, anytime",
        techStack: [
          {
            id: 1,
            name: "Flutter",
            image: flutter,
          },
          {
            id: 2,
            name: "Dart",
            image: dart,
          },
        ],
      },
    ];

  return (
    <div id='projects' className="py-20 bg-[#000319] flex flex-col items-center justify-center relative w-full ">
      <span className="md:text-[60px] text-[30px] font-montserrat font-bold text-center md:w-[70%] w-[90%] leading-tight pb-20">
        Highlights of My <span className="text-blue-500">Latest Projects</span>
      </span>
      <div className="w-[90%] h-auto z-20 flex gap-10 justify-center flex-wrap">
        {work.map((project, i) => (
          <Card data={project} />
        ))}
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}

export default Projects