import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Terms & Conditions | Pixorely",
  description:
    "Read the Terms & Conditions governing the use of the Pixorely website and services.",
};

const terms = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing or using the Pixorely website or engaging our services, you agree to comply with these Terms & Conditions. If you do not agree with any part of these terms, please discontinue using our website and services.",
  },
  {
    title: "Our Services",
    content:
      "Pixorely provides professional digital services including custom website development, WordPress websites, Shopify stores, mobile applications, UI/UX design, search engine optimization (SEO), digital marketing, HTML email templates, HTML email signatures, email signature generators, and website maintenance services.",
  },
  {
    title: "Project Proposals & Quotations",
    content:
      "All quotations and project proposals are based on the agreed scope of work. Any additional features, revisions, or requests outside the original scope may require additional time and cost.",
  },
  {
    title: "Client Responsibilities",
    content:
      "Clients are responsible for providing accurate project requirements, content, branding assets, credentials, approvals, and timely feedback. Delays in providing required information may affect project timelines.",
  },
  {
    title: "Payments",
    content:
      "Payment terms are agreed upon before work begins. Depending on the project, deposits or milestone payments may be required. Final deliverables or website deployment may be withheld until outstanding balances have been paid.",
  },
  {
    title: "Revisions",
    content:
      "Reasonable revisions are included as specified in the project proposal. Requests beyond the agreed scope or after final approval may incur additional charges.",
  },
  {
    title: "Intellectual Property",
    content:
      "Upon full payment, ownership of the final approved deliverables is transferred to the client unless otherwise agreed. Pixorely reserves the right to showcase completed projects in its portfolio unless a written confidentiality agreement is in place.",
  },
  {
    title: "Third-Party Services",
    content:
      "Our projects may integrate third-party services such as WordPress, Shopify, Google, Cloudflare, HubSpot, Mailchimp, Brevo, CodeTwo, Figma, and other providers. Pixorely is not responsible for outages, policy changes, pricing updates, or limitations introduced by these services.",
  },
  {
    title: "Limitation of Liability",
    content:
      "Pixorely shall not be liable for indirect, incidental, or consequential damages including loss of revenue, data, or business interruption. Our total liability shall not exceed the amount paid for the specific service provided.",
  },
  {
    title: "Warranty",
    content:
      "We make reasonable efforts to ensure deliverables function as agreed at project completion. Future browser updates, hosting changes, operating system updates, or third-party platform modifications are not covered unless included within a maintenance agreement.",
  },
  {
    title: "Project Cancellation",
    content:
      "Either party may cancel a project by written notice. Work completed up to the cancellation date may be invoiced accordingly. Deposits may be non-refundable once work has commenced.",
  },
  {
    title: "Privacy",
    content:
      "Your use of our website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information.",
  },
  {
    title: "Changes to These Terms",
    content:
      "Pixorely may update these Terms & Conditions from time to time. Updated versions will be published on this page with the revised Last Updated date.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions regarding these Terms & Conditions, please contact us at hello@pixorely.com. We are happy to assist you.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="py-10">
      {/* ================= HERO ================= */}

      <section>
        <Container>
          <div className="mx-auto max-w-5xl">
            {/* Breadcrumb */}

            <nav
              aria-label="Breadcrumb"
              className="
                flex
                items-center
                gap-2
                text-sm
                text-[var(--muted)]
              "
            >
              <Link
                href="/"
                className="
                  transition-colors
                  duration-300
                  hover:text-[var(--primary)]
                "
              >
                Home
              </Link>

              <ChevronRight
                size={15}
                strokeWidth={2}
              />

              <span className="text-[var(--foreground)]">
                Terms & Conditions
              </span>
            </nav>

            {/* Badge */}

            <div
              className="
                mt-10
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[var(--border)]
                bg-[var(--card)]
                px-5
                py-2
              "
            >
              <ShieldCheck
                size={17}
                className="text-[var(--primary)]"
              />

              <span
                className="
                  text-sm
                  font-semibold
                  text-[var(--primary)]
                "
              >
                LEGAL INFORMATION
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                mt-8
                text-5xl
                font-bold
                tracking-tight
                text-[var(--foreground)]
                md:text-6xl
              "
            >
              Terms & Conditions
            </h1>

            {/* Description */}

            <p
              className="
                mt-6
                max-w-3xl
                text-lg
                leading-9
                text-[var(--muted)]
              "
            >
              These Terms & Conditions explain the rules,
              responsibilities, and guidelines for using the
              Pixorely website and our professional digital
              services.
            </p>

            {/* Last Updated */}

            <p
              className="
                mt-8
                text-sm
                text-[var(--muted)]
              "
            >
              Last Updated: August 18, 2026
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/">
                Back to Home
              </Button>

              <Button
                href="#terms-content"
                variant="outline"
              >
                Read Terms
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= CONTENT ================= */}

      <section
        id="terms-content"
        className="mt-24 scroll-mt-32"
      >
        <Container>
          <div
            className="
              mx-auto
              max-w-4xl
              rounded-[32px]
              border
              border-[var(--border)]
              bg-[var(--card)]
              p-7
              sm:p-10
              md:p-14
            "
          >
            <div className="space-y-10">
              {terms.map((section, index) => (
                <section
                  key={section.title}
                  className="
                    border-b
                    border-[var(--border)]
                    pb-10
                    last:border-0
                    last:pb-0
                  "
                >
                  <div
                    className="
                      flex
                      flex-col
                      gap-5
                      sm:flex-row
                      sm:items-start
                      sm:gap-6
                    "
                  >
                    {/* Number */}

                    <span
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[var(--primary-light)]
                        text-base
                        font-bold
                        text-[var(--primary)]
                      "
                    >
                      {(index + 1)
                        .toString()
                        .padStart(2, "0")}
                    </span>

                    {/* Content */}

                    <div className="flex-1">
                      <h2
                        className="
                          text-xl
                          font-semibold
                          tracking-tight
                          text-[var(--foreground)]
                          sm:text-2xl
                        "
                      >
                        {section.title}
                      </h2>

                      <p
                        className="
                          mt-4
                          leading-8
                          text-[var(--muted)]
                        "
                      >
                        {section.content}
                      </p>

                      {/* Privacy Policy Link */}

                      {section.title === "Privacy" && (
                        <Link
                          href="/privacy-policy"
                          className="
                            mt-5
                            inline-flex
                            font-medium
                            text-[var(--primary)]
                            transition-opacity
                            duration-300
                            hover:opacity-70
                          "
                        >
                          View Privacy Policy
                        </Link>
                      )}

                      {/* Contact Email */}

                      {section.title === "Contact Us" && (
                        <a
                          href="mailto:hello@pixorely.com"
                          className="
                            mt-5
                            inline-flex
                            font-medium
                            text-[var(--primary)]
                            transition-opacity
                            duration-300
                            hover:opacity-70
                          "
                        >
                          hello@pixorely.com
                        </a>
                      )}
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}