import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SubHero from "@/components/SubHero";
// import TechStack from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <SubHero />
      <About />
      <Projects  />
      <Contact />
      <Footer />
      {/* <TechStack/> */}
    </main>
  );
}
