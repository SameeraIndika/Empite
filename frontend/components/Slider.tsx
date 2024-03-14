"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import Description from "./Description";
import { CLIENTS } from "@/constants";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === CLIENTS.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(CLIENTS.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);
  return (
    <Description
      activeImage={activeImage}
      clickNext={clickNext}
      clickPrev={clickPrev}
    />
  );
};

export default Slider;
