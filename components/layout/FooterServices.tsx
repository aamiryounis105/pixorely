import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    label: "Custom Website Design",
    href: "#services",
  },
  {
    label: "WordPress Website Design",
    href: "#services",
  },
  {
    label: "Shopify Store",
    href: "#services",
  },
  {
    label: "Digital Marketing",
    href: "#services",
  },
  {
    label: "Email Templates",
    href: "#services",
  },
  {
    label: "Email Signatures",
    href: "#services",
  },
];

export default function FooterServices() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
        Services
      </p>

      <div className="mt-8">
        <ul className="space-y-5">
          {services.map((service) => (
            <li key={service.label}>
              <Link
                href={service.href}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-[15px]
                  font-medium
                  text-[var(--muted)]
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-[var(--primary)]
                "
              >
                <span>{service.label}</span>

                <ArrowUpRight
                  aria-hidden="true"
                  className="
                    h-3.5
                    w-3.5
                    translate-y-0.5
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:opacity-100
                  "
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}