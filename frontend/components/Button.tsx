import React from "react";
import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  iconSize?: number;
  variant: "btn_black" | "btn_white" | "btn_transparent";
};

const Button = ({ type, title, icon, iconSize, variant }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-md border ${variant}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={iconSize || 24} height={iconSize || 24} />}
      <label className="muli-regular-20 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
