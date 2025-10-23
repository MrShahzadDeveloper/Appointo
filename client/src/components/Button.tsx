"use client";
import React from "react";
import clsx from "clsx";
import { IconType } from "react-icons";

interface ButtonProps {
  text: string;
  classStyle?: string; // instead of separate color, textColor, padding, etc.
  icon?: IconType;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  classStyle = "bg-[#5F71FF] text-white px-6 py-4",
  icon: Icon,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        `flex items-center justify-center gap-2 rounded-full py-2 font-medium text-sm md:text-base 
         transition-all duration-200 shadow-sm active:scale-[0.97]`,
        classStyle,
        className
      )}
    >
      <span>{text}</span>
      {Icon && <Icon size={18} className="mt-0.5" />}
    </button>
  );
};

export default Button;
