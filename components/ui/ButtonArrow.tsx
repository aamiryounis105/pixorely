"use client";

import { ArrowRight } from "lucide-react";

interface ButtonArrowProps {
  size?: "sm" | "md" | "lg";
}

export default function ButtonArrow({
  size = "md",
}: ButtonArrowProps) {
  const iconSize = {
    sm: 14,
    md: 16,
    lg: 18,
  };

  return (
    <span
      aria-hidden="true"
      className="
        flex
        items-center
        justify-center
        transition-transform
        duration-500
        ease-[cubic-bezier(.22,1,.36,1)]

        group-hover:translate-x-1.5
      "
    >
      <ArrowRight
        size={iconSize[size]}
        strokeWidth={2.2}
      />
    </span>
  );
}