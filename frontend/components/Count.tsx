import { COUNTERS, SERVICES } from "@/constants";
import React from "react";
import CounterItem from "./CounterItem";

const Count = () => {
  return (
    <section className="full-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-2 xl:flex-row">
      <div className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="relative z-20 flex flex-1 flex-col xl:w-full gap-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-x-12 gap-y-12 pr-12">
            {COUNTERS.map((counter) => (
              <CounterItem
                image={counter.image}
                imageWidth={counter.imageWidth}
                imageHeight={counter.imageHeight}
                value={counter.value}
                title={counter.title}
                description={counter.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Count;
