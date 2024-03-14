import { LOCATIONS } from "@/constants";
import React from "react";
import ServiceItem from "./ServiceItem";
import Link from "next/link";
import Image from "next/image";
import Location from "./Location";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <section className="full-container padding-container bg-primary flex flex-col gap-20 md:gap-28 xl:flex-row">
      <div className="max-container padding-container flex flex-col gap-20 py-10 md:gap-28 lg:py-20 xl:flex-row">
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-4 gap-x-10 gap-y-2">
            <div>
              <Link href="/">
                <Image
                  src="/logo-light.png"
                  alt="logo-light"
                  width={115}
                  height={55}
                />
              </Link>
            </div>
            <div>
              {LOCATIONS.map((location) => (
                <Location name={location.name} address={location.address} />
              ))}
            </div>
            <div>
              <div className="flex flex-col gap-y-8">
                <div className="flex flex-col gap-y-8">
                  <h2 className="text-dark-3 space-grotesk-bold-22">
                    Work inquiries
                  </h2>
                  <p className="text-secondary muli-bold-24">
                    Interested in working with us? hello@empite.com
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-y-8">
                <div className="flex flex-col gap-y-8">
                  <h2 className="text-dark-3 space-grotesk-bold-22">
                    Stay in touch
                  </h2>
                  <Newsletter />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-y-2 mt-32">
            <h2 className="text-secondary muli-regular-22">
              © 2020, Empite Pty Ltd
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
