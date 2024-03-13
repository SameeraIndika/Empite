import React from "react";
import Image from "next/image";

interface CounterItemProps {
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  value: number;
  title: string;
  description: string;
  highlight?: string;
}

const CounterItem = ({
  image,
  imageWidth,
  imageHeight,
  value,
  title,
  description,
  highlight,
}: CounterItemProps) => {
  return (
    <div className="gap-y-12">
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-row gap-x-4 items-end align-top">
          {image && (
            <Image
              src={image}
              alt={title}
              width={imageWidth}
              height={imageHeight}
            />
          )}
          <h4 className="text-primary muli-extra-bold-54">{value}</h4>
        </div>
        <div className="gap-y-2">
          <h2 className="text-primary space-grotesk-bold-22 mb-6">{title}</h2>
        </div>
      </div>
      <p className="text-primary muli-regular-20">{description}</p>
    </div>
  );
};

export default CounterItem;
