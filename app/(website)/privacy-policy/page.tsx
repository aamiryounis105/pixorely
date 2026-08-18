import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Privacy Policy | Pixorely",
};

const privacySections = [
  {
    title: "Information We Collect",
    content:
      "We may collect personal information that you voluntarily provide when contacting us, requesting a quote, submitting a project inquiry, or communicating with our team. This may include your name, email address, phone number, company name, and project details.",
  },
  {
    title: "How We Use Your Information",
    content:
      "Your information is used to respond to inquiries, provide requested services, manage projects, communicate throughout the project lifecycle, improve our website, and deliver a better customer experience.",
  },
  {
    title: "Cookies & Analytics",
    content:
      "Our website may use cookies and analytics technologies to understand visitor behavior, measure website performance, improve user experience, and optimize our services. You may disable cookies through your browser settings if preferred.",
  },
  {
    title: "Third-Party Services",
    content:
      "We may use trusted third-party platforms such as Google Analytics, Google Workspace, Cloudflare, HubSpot, Mailchimp, Brevo, Formspree, WordPress, Shopify, and other service providers to operate our business efficiently. These providers maintain their own privacy policies.",
  },
  {
    title: "Data Security",
    content:
      "We implement reasonable administrative and technical safeguards to protect your personal information against unauthorized access, disclosure, alteration, or destruction. However, no online transmission or storage method can be guaranteed to be completely secure.",
  },
  {
    title: "Information Sharing",
    content:
      "Pixorely does not sell, rent, or trade your personal information. Information is shared only when necessary to provide requested services, comply with legal obligations, or work with trusted service providers on your behalf.",
  },
  {
    title: "Data Retention",
    content:
      "We retain your information only for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and maintain business records.",
  },
  {
    title: "Your Rights",
    content:
      "Depending on your location, you may have the right to request access to your personal information, request corrections, request deletion of your data, or object to certain types of processing. We will respond to reasonable requests where applicable.",
  },
  {
    title: "External Links",
    content:
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices, security, or content of external websites and encourage you to review their privacy policies before providing personal information.",
  },
  {
    title: "Children's Privacy",
    content:
      "Our services are not intended for children under the age of 13, and we do not knowingly collect personal information from children.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. Any updates will be posted on this page with the revised Last Updated date.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions regarding this Privacy Policy or how your information is handled, please contact us using the email address below.",
  },
];


export default function PrivacyPolicyPage() {
  return (
    <main className="pb-24 pt-40">
      {/* Hero */}

      <section>
        <Container>
          <div className="mx-auto max-w-5xl">

            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm text-[var(--muted)]"
            >
              <Link
                href="/"
                className="transition-colors duration-300 hover:text-[var(--primary)]"
              >
                Home
              </Link>

              <ChevronRight size={15} />

              <span className="text-[var(--foreground)]">
                Privacy Policy
              </span>
            </nav>

            <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-2">
              <ShieldCheck
                size={17}
                className="text-[var(--primary)]"
              />

              <span className="text-sm font-semibold text-[var(--primary)]">
                LEGAL INFORMATION
              </span>
            </div>

            <h1 className="mt-8 text-5xl font-bold tracking-tight text-[var(--foreground)] md:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-[var(--muted)]">
              Learn how Pixorely collects, uses, stores,
              and protects your personal information while
              using our website and services.
            </p>

            <p className="mt-8 text-sm text-[var(--muted)]">
              Last Updated: August 18, 2026
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/">
                Back to Home
              </Button>

              <Button
                href="#privacy-content"
                variant="outline"
              >
                Read Policy
              </Button>
            </div>

          </div>
        </Container>
      </section>

      {/* Content */}

      <section
        id="privacy-content"
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

              {privacySections.map(
                (section, index) => (
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
                    <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">

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

                      <div className="flex-1">

                        <h2 className="text-xl font-semibold tracking-tight text-[var(--foreground)] sm:text-2xl">
                          {section.title}
                        </h2>

                        <p className="mt-4 leading-8 text-[var(--muted)]">
                          {section.content}
                        </p>

                        {section.title ===
                          "Contact Us" && (
                          <a
                            href="mailto:hello@pixorely.com"
                            className="mt-5 inline-flex font-medium text-[var(--primary)] hover:opacity-70"
                          >
                            hello@pixorely.com
                          </a>
                        )}

                        {section.title ===
                          "Changes to This Policy" && (
                          <div className="mt-5">
                            <Link
                              href="/terms-and-conditions"
                              className="font-medium text-[var(--primary)] hover:opacity-70"
                            >
                              View Terms &
                              Conditions
                            </Link>
                          </div>
                        )}

                      </div>
                    </div>
                  </section>
                )
              )}

            </div>

          </div>

        </Container>
      </section>
    </main>
  );
}