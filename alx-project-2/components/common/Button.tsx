// components/common/Button.tsx
import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  children,
  size = "medium",
  shape = "rounded-md",
  onClick,
}) => {
  // Map size prop to padding and font size
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  // Map shape prop to Tailwind rounded classes
  const shapeClasses = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  };

  return (
    <button
      onClick={onClick}
      className={`${sizeClasses[size]} ${shapeClasses[shape]} bg-blue-500 text-white hover:bg-blue-600 transition`}
    >
      {children}
    </button>
  );
};

export default Button;
