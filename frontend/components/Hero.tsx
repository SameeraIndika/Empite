import React from "react";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="full-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="full-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="relative flex flex-1 items-start">
          <Image src="/hero.png" alt="hero" width={998} height={926} />
        </div>
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 gap-y-12">
          <h1 className="playfair-display-bold-88 lg:playfair-display-bold-88">
            Pushing The Envelope Of Software Development
          </h1>
          <p className="muli-regular-22 text-black xl:max-w-[520px]">
            With unique business ideas and the passionate people behind.
          </p>
          <div className="lg:flexStart hidden gap-4">
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
