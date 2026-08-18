"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaThreads,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com/pixorely",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/pixorely",
    icon: FaInstagram,
  },
  {
    name: "Threads",
    href: "https://threads.net/@pixorely",
    icon: FaThreads,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/pixorely",
    icon: FaLinkedinIn,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@pixorely",
    icon: FaYoutube,
  },
];

export default function FooterSocial() {
  const contactCardClass = `
    group
    flex
    items-center
    gap-3
    rounded-xl
    border
    p-3
    transition-all
    duration-300
  `;

  const contactIconClass = `
    flex
    h-10
    w-10
    shrink-0
    items-center
    justify-center
    rounded-full
  `;

  const socialIconClass = `
    group
    flex
    h-9
    w-9
    items-center
    justify-center
    rounded-full
    border
    border-[var(--border)]
    text-[var(--muted)]
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-[var(--primary)]
    hover:bg-[var(--primary)]
    hover:text-white
  `;

  return (
    <div>
      {/* Heading */}

      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
        Connect
      </p>

      {/* Contact */}

      <div className="mt-8 space-y-4">
        {/* WhatsApp */}

        <a
          href="https://wa.me/923154716105"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Pixorely on WhatsApp"
          className={`
            ${contactCardClass}
            border-green-500/20
            bg-green-500/5
            hover:border-green-500
            hover:bg-green-500/10
          `}
        >
          <span
            className={`
              ${contactIconClass}
              bg-green-500
              text-white
            `}
          >
            <FaWhatsapp
              size={17}
              className="block shrink-0"
            />
          </span>

          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-[var(--foreground)]">
              WhatsApp
            </p>

            <p className="truncate text-sm text-[var(--muted)]">
              +92 315 4716105
            </p>
          </div>

          <ArrowUpRight
            size={15}
            className="
              shrink-0
              text-[var(--muted)]
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:text-[var(--foreground)]
            "
          />
        </a>

        {/* Email */}

        <a
          href="mailto:hello@pixorely.com"
          aria-label="Email Pixorely"
          className={`
            ${contactCardClass}
            border-[var(--border)]
            bg-[var(--card)]/50
            hover:border-[var(--primary)]
          `}
        >
          <span
            className={`
              ${contactIconClass}
              bg-[var(--primary-light)]
              text-[var(--primary)]
            `}
          >
            <Mail
              size={17}
              strokeWidth={2}
              className="block shrink-0"
            />
          </span>

          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-[var(--foreground)]">
              Email
            </p>

            <p className="truncate text-sm text-[var(--muted)]">
              hello@pixorely.com
            </p>
          </div>

          <ArrowUpRight
            size={15}
            className="
              shrink-0
              text-[var(--muted)]
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:text-[var(--foreground)]
            "
          />
        </a>
      </div>

      {/* Divider */}

      <div className="my-8 h-px bg-[var(--border)]" />

      {/* Social icons */}

      <div className="flex flex-wrap gap-2.5">
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={socialIconClass}
            >
              <Icon
                size={13}
                className="
                  block
                  shrink-0
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}