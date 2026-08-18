import Link from "next/link";

export default function FooterBottom() {
  return (
    <div
      className="
        border-t
        border-[var(--border)]

        py-8
      "
    >
      <div
        className="
          flex
          flex-col
          items-center
          justify-between
          gap-6

          text-sm

          text-[var(--muted)]

          md:flex-row
        "
      >
        {/* Copyright */}

        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Pixorely. All rights reserved.
        </p>

        {/* Links */}

        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-6
          "
        >
          <Link
            href="/privacy-policy"
            className="
              transition-colors
              duration-300
              hover:text-[var(--primary)]
            "
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms-and-conditions"
            className="
              transition-colors
              duration-300
              hover:text-[var(--primary)]
            "
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
}