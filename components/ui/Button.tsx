"use client";

import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEvent,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

import ButtonArrow from "./ButtonArrow";

interface ButtonProps {
  children: ReactNode;

  href?: string;

  variant?: "primary" | "outline" | "ghost";

  size?: "sm" | "md" | "lg";

  fullWidth?: boolean;

  arrow?: boolean;

  className?: string;

  disabled?: boolean;

  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];

  rel?: AnchorHTMLAttributes<HTMLAnchorElement>["rel"];

  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];

  onClick?: (
    event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => void;
}

export default function Button({
  children,

  href,

  variant = "primary",

  size = "md",

  fullWidth = false,

  arrow = true,

  className,

  disabled = false,

  target,

  rel,

  type = "button",

  onClick,
}: ButtonProps) {
  const base =
    `
      group

      inline-flex

      items-center

      justify-center

      gap-2.5

      rounded-full

      font-semibold

      whitespace-nowrap

      transition-all

      duration-300

      ease-[cubic-bezier(.22,1,.36,1)]

      active:scale-[0.97]

      disabled:pointer-events-none

      disabled:opacity-50
    `;

  const sizes = {
    sm: "h-10 px-5 text-sm",

    md: "h-12 px-6 text-sm",

    lg: "h-14 px-7 text-base",
  };

  const variants = {
    primary:
      `
        bg-[var(--primary)]

        text-white

        border

        border-[var(--primary)]

        hover:bg-[var(--primary-hover)]

        hover:border-[var(--primary-hover)]

        hover:-translate-y-0.5

        hover:shadow-[0_12px_30px_rgba(255,106,0,.25)]
      `,

    outline:
      `
        border

        border-[var(--border)]

        bg-transparent

        text-[var(--foreground)]

        hover:border-[var(--primary)]

        hover:text-[var(--primary)]

        hover:bg-transparent
      `,

    ghost:
      `
        bg-transparent

        text-[var(--foreground)]

        hover:bg-[var(--secondary)]
      `,
  };

  const classes = cn(
    base,

    sizes[size],

    variants[variant],

    fullWidth && "w-full",

    className
  );

  const content = (
    <>
      <span>{children}</span>

      {arrow && <ButtonArrow size={size} />}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={classes}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault();
            return;
          }

          onClick?.(event);
        }}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
      onClick={onClick}
    >
      {content}
    </button>
  );
}