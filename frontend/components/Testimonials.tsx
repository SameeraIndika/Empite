import React from 'react'
import Image from 'next/image';
import Slider from './Slider';

const Testimonials = () => {
  return (
    <section className="full-container flex flex-col gap-20 md:gap-28 xl:flex-row">
      <div className="full-container flex flex-col gap-20 md:gap-28 lg:py-10 xl:flex-row">
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 gap-y-12 px-4 xl:pl-60">
          <h4 className="muli-bold-20 text-dark-2">Testimonials</h4>
          <h1 className="playfair-display-semibold-70">
            We help to achieve mutual goals.
          </h1>
          <div className="md:gap-y-12">
            <h4 className="space-grotesk-bold-22 text-primary">
              <Slider />
            </h4>
          </div>
        </div>
        <div className="relative flex flex-1 items-start">
          <Image
            src="/testimonials-bg.png"
            alt="hero"
            width={998}
            height={926}
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials
