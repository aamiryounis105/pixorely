import {
  Globe,
  Mail,
  Megaphone,
  Search,
} from "lucide-react";

import {
  FaShopify,
  FaWordpress,
} from "react-icons/fa";

import type { Service } from "./services.types";

export const services: Service[] = [
  {
    id: "custom-websites",
    title: "Custom Websites",
    icon: Globe,
    description:
      "Modern, high-performance websites built to strengthen your brand, engage your audience, and turn more visitors into customers.",
    features: [
      "Custom Business Websites",
      "SaaS Platforms & Dashboards",
      "Modern UI/UX Design",
      "Lightning-Fast Performance",
      "Fully Responsive Design",
      "SEO-Ready Development",
    ],
  },

  {
    id: "wordpress",
    title: "WordPress",
    icon: FaWordpress,
    description:
      "Professional WordPress websites built for easy management, strong performance, and long-term business growth.",
    features: [
      "Custom WordPress Development",
      "Elementor & Gutenberg",
      "WooCommerce Integration",
      "Speed Optimization",
      "Enterprise-Grade Security",
      "Easy Content Management",
    ],
  },

  {
    id: "shopify",
    title: "Shopify",
    icon: FaShopify,
    description:
      "Conversion-focused Shopify stores designed to create a smooth shopping experience and help increase online sales.",
    features: [
      "Custom Shopify Stores",
      "Product & Collection Setup",
      "Shopify App Integrations",
      "Optimized Checkout Experience",
      "Mobile-First Shopping",
      "Conversion Optimization",
    ],
  },

  {
    id: "seo",
    title: "SEO",
    icon: Search,
    description:
      "Search optimization strategies that improve visibility, strengthen your website, and attract more qualified organic traffic.",
    features: [
      "Technical SEO Audits",
      "On-Page Optimization",
      "Keyword Research",
      "Core Web Vitals",
      "Local SEO Strategy",
      "Performance Reporting",
    ],
  },

  {
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    description:
      "Data-driven marketing campaigns built to increase visibility, generate quality leads, and support measurable business growth.",
    features: [
      "Meta Ads Campaigns",
      "Google Ads Management",
      "Social Media Marketing",
      "Lead Generation",
      "Campaign Optimization",
      "Monthly Performance Reports",
    ],
  },

  {
    id: "email-solutions",
    title: "Email Solutions",
    icon: Mail,
    description:
      "Professional email templates, branded signatures, and custom signature generators designed for reliable cross-platform communication.",
    features: [
      "HTML Email Templates",
      "HTML Email Signatures",
      "Signature Generators",
      "Cross-Client Compatibility",
      "Mobile Responsive Design",
      "Setup & Installation Support",
    ],
  },
];