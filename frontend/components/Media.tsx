import React from "react";

const Media = () => {
  return (
    <section className="full-container flex flex-col xl:flex-row">
      <div className="flex flex-col xl:flex-row flex-auto">
        <div className="relative z-20 flex flex-col md:w-full gap-y-12 py-64 xl:w-5/6">
          <video
            className="w-full h-full absolute top-0 left-0 object-cover"
            autoPlay
            loop
            muted
            playsInline
            src="video-1.mp4"
          >
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="play-button">
              <img src="play-solid.svg" alt="Play Button" />
            </button>
          </div>
        </div>

        <div className="relative flex flex-row lg:w-full">
          <div
            className="relative z-20 flex flex-col w-1/2 md:w-full xl:w-1/2 gap-y-12 pl-32 py-32 bg-no-repeat bg-cover"
            style={{ backgroundImage: 'url("media-bg-2.png")' }}
          >
            {/* Content for the second column */}
          </div>

          <div
            className="relative z-20 flex flex-col w-1/2 md:w-full xl:w-1/3 gap-y-12 py-32 bg-no-repeat bg-cover"
            style={{ backgroundImage: 'url("media-bg-3.png")' }}
          >
            {/* Content for the third column */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
