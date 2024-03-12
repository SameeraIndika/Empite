import Capabilities from "@/components/Capabilities";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Capabilities />
    </>
  );
}
