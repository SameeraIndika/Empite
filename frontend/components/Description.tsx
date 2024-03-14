import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CLIENTS } from "@/constants";

type TestimonialContentProps = {
  activeImage: any;
  clickNext: any;
  clickPrev: any;
};

const Description = ({
  activeImage,
  clickNext,
  clickPrev,
}: TestimonialContentProps) => {
  const firstSlide = 1;
  const lastSlide = CLIENTS.length;
  return (
    <div className="place-items-start w-full relative">
      {CLIENTS.map((client, id) => (
        <div
          key={id}
          className={`${
            id === activeImage
              ? "block w-full h-full md:h-full pt-12 pb-40 text-left"
              : "hidden"
          }`}
        >
          <motion.div
            initial={{
              opacity: id === activeImage ? 0 : 0.5,
              scale: id === activeImage ? 0.5 : 0.3,
            }}
            animate={{
              opacity: id === activeImage ? 1 : 0.5,
              scale: id === activeImage ? 1 : 0.3,
            }}
            transition={{
              ease: "linear",
              duration: 0.2,
              x: { duration: 1 },
            }}
            className="w-full"
          >
            <Image
              src={client.profile}
              alt={client.title}
              width={75}
              height={75}
              className="rounded-full mb-8"
            />
            <div className="flex flex-col gap-y-4 mb-8">
              <div className="muli-bold-22 text-primary">{client.title}</div>
              <div className="muli-regular-20 text-primary">
                {client.description}
              </div>
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="space-grotesk-bold-22 text-primary">
                {client.name}
              </div>
              <div className="muli-regular-20 text-primary">
                {client.position}
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col">
            <div className="absolute bottom left-0 flex flex-row gap-x-8 pt-12">
              <div className="mt-2 muli-semibold-22 text-primary">
                {firstSlide}
              </div>
              <div className="text-primary">_________</div>
              <div className="mt-2 muli-semibold-22 text-primary">
                {lastSlide}
              </div>
            </div>
            <div className="absolute bottom right-0 flex flex-row gap-x-8 pt-12">
              <div className="cursor-pointer" onClick={clickPrev}>
                <Image src="previous.svg" alt="right" width={54} height={54} />
              </div>
              <div className="cursor-pointer" onClick={clickNext}>
                <Image src="next.svg" alt="right" width={54} height={54} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
