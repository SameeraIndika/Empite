import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";
import Count from "@/components/Count";
import Hero from "@/components/Hero";
import Media from "@/components/Media";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

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
      <About />
      <Contact />
    </>
  );
}
