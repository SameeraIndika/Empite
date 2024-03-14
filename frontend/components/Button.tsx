import React from "react";
import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  iconBefore?: string;
  iconAfter?: string;
  iconSize?: number;
  variant: "btn_black" | "btn_white" | "btn_gray" | "btn_transparent";
  className?: string;
};

const Button = ({
  type,
  title,
  iconBefore,
  iconAfter,
  iconSize,
  variant,
  className,
}: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-md border ${variant}`}
      type={type}
    >
      {iconBefore && (
        <Image
          src={iconBefore}
          alt={title}
          width={iconSize || 24}
          height={iconSize || 24}
        />
      )}
      <label className="muli-regular-20 whitespace-nowrap">{title}</label>
      {iconAfter && (
        <Image
          src={iconAfter}
          alt={title}
          width={iconSize || 24}
          height={iconSize || 24}
        />
      )}
    </button>
  );
};

export default Button;
