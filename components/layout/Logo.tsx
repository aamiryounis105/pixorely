"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface LogoProps {
  className?: string;
  size?: "navbar" | "footer";
}

const logoSizes = {
  navbar: {
    width: 220,
    height: 56,
    className: "h-10 w-auto sm:h-11 lg:h-12",
  },

  footer: {
    width: 280,
    height: 72,
    className: "h-14 w-auto lg:h-16",
  },
};

export default function Logo({
  className,
  size = "navbar",
}: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentSize = logoSizes[size];

  const logoSource =
    mounted && resolvedTheme === "dark"
      ? "/logo-dark.png"
      : "/logo.png";

  const isNavbar = size === "navbar";

  return (
    <Link
      href="#home"
      aria-label="Pixorely Home"
      className={clsx(
        "inline-flex shrink-0 items-center transition-opacity duration-300 hover:opacity-90",
        className
      )}
    >
      <Image
        src={logoSource}
        alt="Pixorely"
        width={currentSize.width}
        height={currentSize.height}
        priority={isNavbar}
        loading={isNavbar ? "eager" : "lazy"}
        fetchPriority={isNavbar ? "high" : "auto"}
        draggable={false}
        className={clsx(
          "block max-w-none select-none object-contain",
          currentSize.className
        )}
      />
    </Link>
  );
}