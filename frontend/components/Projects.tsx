import React from "react";
import Image from "next/image";
import Button from "./Button";

const Projects = () => {
  return (
    <section className="full-container flex flex-col xl:flex-row">
      <div className="flex flex-col xl:flex-row flex-auto">
        <div
          className="relative z-20 flex flex-1 flex-col md:w-full gap-y-12 pl-32 py-32 bg-no-repeat bg-cover"
          style={{ backgroundImage: 'url("capabilities.png")' }}
        >
          <h4 className="muli-bold-20 lg:muli-bold-20 text-light-1">
            Capabilities
          </h4>
          <h1 className="playfair-display-semibold-60 lg:playfair-display-semibold-60 text-secondary">
            <span style={{ display: "block" }}>Mobile.</span>
            <span style={{ display: "block" }}>Web.</span>
            <span style={{ display: "block" }}>Cloud.</span>
          </h1>

          <div className="lg:flexStart hidden gap-4">
            <Button
              type="button"
              iconAfter="arrow-right.svg"
              title="View Services"
              variant="btn_black"
              muli-bold-18
            />
          </div>
        </div>
        <div
          className="relative z-20 flex flex-1 flex-col md:w-full gap-y-12 pl-32 py-32 bg-no-repeat bg-cover"
          style={{ backgroundImage: 'url("showcase.png")' }}
        >
          <h4 className="muli-bold-20 lg:muli-bold-20 text-light-1">
            Showcase
          </h4>
          <h1 className="playfair-display-semibold-60 lg:playfair-display-semibold-60 text-secondary">
            <span style={{ display: "block" }}>Our most recent </span>
            <span style={{ display: "block" }}>projects.</span>
          </h1>

          <div className="lg:flexStart hidden gap-4">
            <Button
              type="button"
              iconAfter="arrow-right.svg"
              title="View Projects"
              variant="btn_black"
              muli-bold-18
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
