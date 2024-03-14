import React from "react";

const About = () => {
  return (
    <section className="full-container flex flex-col xl:flex-row">
      <div className="flex flex-col xl:flex-row flex-auto">
        <div
          className="relative z-20 flex flex-col md:w-full gap-y-12 py-64"
          style={{ backgroundImage: 'url("about-bg.png")' }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="play-button">
              <img src="play-solid.svg" alt="Play Button" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
