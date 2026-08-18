"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function FooterBrand() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logo =
    mounted && resolvedTheme === "dark"
      ? "/logo-dark.png"
      : "/logo.png";

  return (
    <div className="max-w-md">

      {/* Logo */}

      <div className="mb-4">
        <Logo size="footer" />
      </div>  

      {/* Description */}

      <p
        className="
          mt-8

          text-[17px]
          leading-8

          text-[var(--muted)]
        "
      >
        Pixorely is a digital agency specializing in custom websites,
        WordPress development, Shopify stores, digital marketing,
        HTML email templates, and professional email signatures that
        help businesses build a stronger online presence.
      </p>
    </div>
  );
}