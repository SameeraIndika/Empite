import Capabilities from "@/components/Capabilities";
import Count from "@/components/Count";
import Hero from "@/components/Hero";
import Media from "@/components/Media";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Slider from "@/components/Slider";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Capabilities />
      <Media />
      <Count />
      <Testimonials />
    </>
  );
}
