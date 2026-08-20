import type { Metadata } from "next";
import {
  Inter,
  Space_Grotesk,
} from "next/font/google";

import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

import { createMetadata } from "@/lib/seo";
import { organizationSchema } from "@/lib/organizationSchema";
import { ThemeProvider } from "@/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  ...createMetadata({
    title:
      "Pixorely | Websites, Shopify & Digital Marketing Agency",

    description:
      "Pixorely builds conversion-focused websites, Shopify stores, WordPress sites, HTML email templates and digital marketing experiences for growing brands.",
  }),
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className={`
          ${inter.variable}
          ${spaceGrotesk.variable}
          antialiased
        `}
      >
        {/* Organization Schema */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              organizationSchema,
            ),
          }}
        />

        {/* Theme */}

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          enableColorScheme
          storageKey="pixorely-theme"
        >
          {children}
        </ThemeProvider>

        {/* Vercel Speed Insights */}

        <SpeedInsights />
      </body>
    </html>
  );
}