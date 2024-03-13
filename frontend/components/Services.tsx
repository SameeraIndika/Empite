import React from "react";
import Image from "next/image";
import Button from "./Button";
import ServiceItem from "./ServiceItem";
import { SERVICES } from "@/constants";

const Services = () => {
  return (
    <section className="full-container padding-container bg-black flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="hero-map" />

        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 gap-y-12">
          <h4 className="muli-bold-20 lg:muli-bold-20 text-dark-3">
            WHAT WE DO
          </h4>
          <h1 className="playfair-display-semibold-70 lg:playfair-display-semibold-70 text-white">
            Integrated tech solutions across all digital platforms
          </h1>
        </div>
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 gap-y-12">
          <p className="space-grotesk-regular-22 text-white xl:max-w-[520px]">
            We are committed to keeping you ahead in today’s fast-paced and
            ever-evolving world by delivering digital solutions that solve
            problems in a secure, simple and effective way.
          </p>

          <div className="grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-12">
            {SERVICES.map((service) => (
              <ServiceItem
                image={service.image}
                imageWidth={service.imageWidth}
                imageHeight={service.imageHeight}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
