"use client";

import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEvent,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  disabled?: boolean;

  variant?: "primary" | "inverted";

  onlineEffect?: boolean;

  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  rel?: AnchorHTMLAttributes<HTMLAnchorElement>["rel"];
  ariaLabel?: string;

  onClick?: (
    event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="pixorely-button-arrow"
    >
      <path
        d="M5 12H19M13 6L19 12L13 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AnimatedButton({
  children,
  href,
  className,
  disabled = false,
  variant = "primary",
  onlineEffect = false,
  type = "button",
  target,
  rel,
  ariaLabel,
  onClick,
}: AnimatedButtonProps) {
  const classes = cn(
    "pixorely-animated-button",
    variant === "inverted" &&
      "pixorely-animated-button-inverted",
    disabled &&
      "pointer-events-none opacity-50",
    className,
  );

  const content = (
    <span className="pixorely-button-content">
      <span className="pixorely-button-group">
        <span className="pixorely-button-text">
          {children}
        </span>

        <span
          aria-hidden="true"
          className="pixorely-button-arrow-wrapper"
        >
          <ArrowIcon />
        </span>
      </span>
    </span>
  );

  const button = href ? (
    <Link
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : undefined}
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
  ) : (
    <button
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      className={classes}
      onClick={onClick}
    >
      {content}
    </button>
  );

  if (!onlineEffect) {
    return button;
  }

  return (
    <span className="pixorely-online-button">
      <span
        aria-hidden="true"
        className="pixorely-online-halo"
      />

      <span
        aria-hidden="true"
        className="pixorely-online-orbit"
      >
        <span className="pixorely-online-orbit-light" />
      </span>

      <span
        aria-hidden="true"
        className="
          pixorely-online-dot
          pixorely-online-dot-one
        "
      />

      <span
        aria-hidden="true"
        className="
          pixorely-online-dot
          pixorely-online-dot-two
        "
      />

      <span
        aria-hidden="true"
        className="
          pixorely-online-dot
          pixorely-online-dot-three
        "
      />

      {button}
    </span>
  );
}