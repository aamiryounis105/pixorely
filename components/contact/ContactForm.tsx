"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

import {
  ArrowRight,
  Loader2,
  CheckCircle2,
} from "lucide-react";

const SERVICES = [
  "Custom Website Development",
  "WordPress Website",
  "Shopify Store",
  "Mobile App Development",
  "SEO",
  "Digital Marketing",
  "Email Templates",
  "Email Signatures",
  "Email Signature Generator",
  "Other",
];

const BUDGETS = [
  "Under $500",
  "$500 - $1,000",
  "$1,000 - $2,500",
  "$2,500 - $5,000",
  "$5,000+",
];

const TIMELINES = [
  "ASAP",
  "1-2 Weeks",
  "Within 1 Month",
  "Flexible",
];

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    const form = e.currentTarget;

    const formData = new FormData(form);

    const response = await fetch(
      "https://formspree.io/f/mppaqeeg",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    setLoading(false);

    if (response.ok) {
      setSuccess(true);
      form.reset();
    }
  }

  if (success) {
    return (
      <div
        className="
          flex
          min-h-[650px]
          items-center
          justify-center
          p-12
          text-center
        "
      >
        <div className="max-w-md">
          <CheckCircle2
            size={70}
            className="mx-auto text-green-500"
          />

          <h3 className="mt-6 text-3xl font-bold">
            Thank You!
          </h3>

          <p className="mt-4 text-[var(--muted)]">
            Your message has been sent
            successfully.

            We'll get back to you within
            24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 lg:p-12 xl:p-16"
    >
      <div className="grid gap-6">

        <Input
          label="Full Name"
          name="name"
          required
        />

        <Input
          label="Email Address"
          name="email"
          type="email"
          required
        />

        <Input
          label="Phone Number"
          name="phone"
        />

        <Input
          label="Company"
          name="company"
        />

        <Select
          label="Service"
          name="service"
          options={SERVICES}
        />

        <div className="grid gap-6 md:grid-cols-2">

          <Select
            label="Budget"
            name="budget"
            options={BUDGETS}
          />

          <Select
            label="Timeline"
            name="timeline"
            options={TIMELINES}
          />

        </div>

        <div>

          <label className="mb-2 block font-medium">
            Project Details
          </label>

          <textarea
            required
            name="message"
            rows={6}
            placeholder="Tell us about your project..."
            className={fieldClass}
          />

        </div>

        <Button
          type="submit"
          disabled={loading}
          className="mt-2 w-full sm:w-auto"
        >
          {loading ? (
            <span className="inline-flex items-center gap-2">
              <Loader2
                size={18}
                className="animate-spin"
              />
              Sending...
            </span>
          ) : (
            "Submit"
          )}
        </Button>

      </div>
    </form>
  );
}

const fieldClass = `
w-full
rounded-xl
border
border-[var(--border)]
bg-[var(--background)]
px-4
py-3
outline-none
transition-all
duration-300
focus:border-[var(--primary)]
focus:ring-2
focus:ring-[var(--primary-light)]
`;

function Input({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
}) {
  return (
    <div>
      <label className="mb-2 block font-medium">
        {label}
      </label>

      <input
        {...props}
        className={fieldClass}
      />
    </div>
  );
}

function Select({
  label,
  options,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-2 block font-medium">
        {label}
      </label>

      <select
        {...props}
        className={fieldClass}
      >
        <option value="">
          Select...
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}