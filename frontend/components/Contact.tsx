import { SERVICES } from "@/constants";
import React from "react";
import ServiceItem from "./ServiceItem";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="full-container flex flex-col gap-20 md:gap-28 xl:flex-row">
      <div className="flex flex-col xl:flex-row flex-auto">
        <div
          className="relative z-20 flex flex-col w-full md:w-full xl:w-2/3 gap-y-12 py-60 bg-no-repeat bg-cover"
          style={{ backgroundImage: 'url("map.png")' }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="play-button">
              <img src="play-solid.svg" alt="Play Button" />
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="relative z-20 flex flex-1 flex-col w-full md:w-1/2 gap-y-12 p-12 bg-light-4">
            <div className="grid grid-cols-1 grid-rows-1 gap-x-10 gap-y-12">
              <div className="flex flex-row gap-16">
                <div className="flex flex-col gap-y-8">
                  <Image
                    src="telephone.svg"
                    alt="telephon"
                    width={32}
                    height={32}
                  />
                  <h2 className="text-primary space-grotesk-bold-24">
                    Get in touch
                  </h2>
                  <div>
                    <p className="text-primary muli-regular-20">
                      Work and general inquiries
                    </p>
                    <p className="text-primary muli-bold-20">
                      +61.809.120.6705
                    </p>
                  </div>
                  <div>
                    <p className="text-primary muli-bold-20">
                      Assistance hours:{" "}
                    </p>
                    <p className="text-primary muli-regular-20">
                      Monday - Friday 9.00 am to 5.00 pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-20 flex flex-1 flex-col w-full md:w-1/2 gap-y-12 p-12 bg-light-3">
            <div className="grid grid-cols-1 grid-rows-1 gap-x-10 gap-y-12">
              <div className="flex flex-row gap-x-12">
                <div className="flex flex-col gap-y-8">
                  <Image src="email.svg" alt="email" width={32} height={32} />
                  <h2 className="text-primary space-grotesk-bold-24">
                    Post address
                  </h2>
                  <div>
                    <p className="text-primary muli-regular-20">
                      Level 1, Unit 9 / 677 Springvale Road, Mulgrave VIC 3170
                      Australia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
