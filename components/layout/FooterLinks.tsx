"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";

import { socials } from "@/lib/socials";

export default function FooterLinks() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logo =
    mounted && resolvedTheme === "dark"
      ? "/logo-dark.png"
      : "/logo.png";

  const linkClass =
    "text-[var(--muted)] transition-all duration-300 hover:text-[var(--primary)]";

  const socialClass = `
    flex
    h-12
    w-12
    items-center
    justify-center

    rounded-full

    border
    border-[var(--border)]

    transition-all
    duration-300

    hover:-translate-y-1
    hover:border-[var(--primary)]
    hover:bg-[var(--primary)]
    hover:text-white
  `;

  const contactClass = `
    flex
    items-center
    gap-4

    text-[17px]
    text-[var(--muted)]

    transition-all
    duration-300

    hover:text-[var(--primary)]
  `;

  const contactIconClass = `
    flex
    h-11
    w-11
    shrink-0
    items-center
    justify-center

    rounded-full

    border
    border-[var(--border)]

    transition-all
    duration-300

    hover:border-[var(--primary)]
    hover:bg-[var(--primary)]
    hover:text-white
  `;

  return (
    <>
      {/* ================= Brand ================= */}

      <div className="space-y-8">
        <Image
          src={logo}
          alt="Pixorely"
          width={190}
          height={44}
          className="h-11 w-auto"
        />

        <p className="max-w-sm text-[18px] leading-9 text-[var(--muted)]">
          Pixorely helps businesses grow through premium
          websites, Shopify stores, WordPress development,
          digital marketing, HTML email templates, and
          professional email signatures.
        </p>
      </div>

      {/* ================= Navigation ================= */}

      <div>
        <h4 className="mb-8 text-xl font-semibold tracking-tight text-[var(--primary)]">
          Navigation
        </h4>

        <ul className="space-y-5">
          <li>
            <Link href="#services" className={linkClass}>
              Services
            </Link>
          </li>

          <li>
            <Link href="#case-studies" className={linkClass}>
              Case Studies
            </Link>
          </li>

          <li>
            <Link href="#success-stories" className={linkClass}>
              Success Stories
            </Link>
          </li>

          <li>
            <Link href="#faq" className={linkClass}>
              FAQ
            </Link>
          </li>

          <li>
            <Link href="#contact" className={linkClass}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* ================= Services ================= */}

      <div>
        <h4 className="mb-8 text-xl font-semibold tracking-tight text-[var(--primary)]">
          Services
        </h4>

        <ul className="space-y-5">
          <li className={linkClass}>Custom Website Design</li>
          <li className={linkClass}>WordPress Website Design</li>
          <li className={linkClass}>Shopify Store</li>
          <li className={linkClass}>Digital Marketing</li>
          <li className={linkClass}>Email Templates</li>
          <li className={linkClass}>Email Signatures</li>
        </ul>
      </div>

      {/* ================= Connect ================= */}

      <div>
        <h4 className="mb-8 text-xl font-semibold tracking-tight text-[var(--primary)]">
          Connect
        </h4>

        {/* Social Icons */}

        <div className="flex flex-wrap gap-4">
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={socialClass}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        {/* Contact */}

        <div className="mt-8 space-y-4">
          <a
            href="mailto:hello@pixorely.com"
            className={contactClass}
          >
            <span className={contactIconClass}>
              <Mail size={18} />
            </span>

            hello@pixorely.com
          </a>

          <a
            href="https://wa.me/923154716105"
            target="_blank"
            rel="noopener noreferrer"
            className={contactClass}
          >
            <span className={contactIconClass}>
              <Phone size={18} />
            </span>

            +92 315 4716105
          </a>
        </div>
      </div>
    </>
  );
}