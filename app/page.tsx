import About from "@/components/About";
import Hero from "@/components/Hero";
import SubHero from "@/components/SubHero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <SubHero />
      <About/>
    </main>
  );
}
