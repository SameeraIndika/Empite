import React from "react";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="full-container flex flex-col gap-20 md:gap-28 xl:flex-row">
      <div className="full-container flex flex-col gap-20 md:gap-28 xl:flex-row">
        <div className="relative flex flex-1 items-start">
          <Image src="/hero.png" alt="hero" width={998} height={926} />
        </div>
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 gap-y-10 px-4 pb-16 md:py-32">
          <h1 className="playfair-display-bold-88 lg:playfair-display-bold-88">
            Pushing The Envelope Of Software Development
          </h1>
          <p className="muli-regular-22 text-black xl:max-w-[520px]">
            With unique business ideas and the passionate people behind.
          </p>
          <div className="flex flex-col md:flex-row lg:flexStart gap-4">
            <Button type="button" title="Get Started" variant="btn_black" />
            <Button
              type="button"
              title="How it works"
              iconBefore="play-outline.svg"
              iconSize={74}
              variant="btn_transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
