import {
  Gauge,
  Headphones,
  LayoutDashboard,
  Rocket,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import type { Reason } from "./why.types";

export const reasons: Reason[] = [
  {
    id: "performance",

    title: "High Performance",

    description:
      "Every website is optimized for speed, smooth interactions, and excellent Core Web Vitals to deliver a better user experience.",

    icon: Rocket,

    size: "large-horizontal",

    stat: {
      value: 99,
      suffix: "+",
      label: "Performance Score",
    },

    highlights: [
      "Core Web Vitals",
      "Fast Loading",
    ],
  },

  {
    id: "responsive",

    title: "Fully Responsive",

    description:
      "Designed to look and perform beautifully across desktop, tablet, and every mobile device.",

    icon: Smartphone,

    size: "small",

    stat: {
      value: 100,
      suffix: "%",
      label: "Responsive",
    },

    highlights: [
      "Desktop",
      "Mobile",
    ],
  },

  {
    id: "design",

    title: "Premium Design",

    description:
      "Modern UI/UX crafted to build trust, strengthen your brand, and increase conversions.",

    icon: LayoutDashboard,

    size: "small",

    stat: {
      value: 500,
      suffix: "+",
      label: "Design Hours",
    },

    highlights: [
      "UI / UX",
      "Brand Focused",
    ],
  },

  {
    id: "seo",

    title: "SEO Ready",

    description:
      "Built with technical SEO best practices, clean architecture, and search-friendly code from day one.",

    icon: Gauge,

    size: "large-horizontal",

    stat: {
      value: 90,
      suffix: "+",
      label: "SEO Score",
    },

    highlights: [
      "Technical SEO",
      "Search Friendly",
    ],
  },

  {
    id: "support",

    title: "Dedicated Support",

    description:
      "Clear communication, project updates, and reliable support before, during, and after launch.",

    icon: Headphones,

    size: "large-horizontal",

    stat: {
      value: 24,
      suffix: "/7",
      label: "Support",

    },

    highlights: [
      "Quick Response",
      "Ongoing Help",
    ],
  },

  {
    id: "reliable",

    title: "Secure & Reliable",

    description:
      "Built using modern development standards with scalable, secure, and future-ready solutions.",

    icon: ShieldCheck,

    size: "small",

    stat: {
      value: 5,
      suffix: "+",
      label: "Years Experience",
    },

    highlights: [
      "Modern Stack",
      "Scalable",
    ],
  },
];