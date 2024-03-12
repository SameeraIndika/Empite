import React from "react";
import Image from "next/image";

interface ServiceItemProps {
  image: string;
  imageWidth?: number;
    imageHeight?: number;
  title: string;
  description: string;
}

const ServiceItem = ({
  image,
  imageWidth,
  imageHeight,
  title,
  description,
}: ServiceItemProps) => {
  return (
    <div>
      <div className="flex flex-col gap-y-12">
        {image && (
          <Image
            src={image}
            alt={title}
            width={imageWidth}
            height={imageHeight}
          />
        )}
        <div className="gap-y-12">
          <h2 className="text-secondary space-grotesk-bold-24 mb-6">{title}</h2>
          <p className="text-secondary muli-regular-22">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
