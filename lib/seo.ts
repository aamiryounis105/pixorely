import type { Metadata } from "next";
import { SITE } from "./constants";

export function createMetadata({
  title,
  description,
}: {
  title: string;
  description?: string;
}): Metadata {
  const metaDescription = description ?? SITE.description;

  return {
    metadataBase: new URL(SITE.url),

    title,

    description: metaDescription,

    keywords: SITE.keywords,

    applicationName: SITE.name,

    authors: [
      {
        name: SITE.author,
        url: SITE.url,
      },
    ],

    creator: SITE.author,

    publisher: SITE.name,

    category: "Digital Agency",

    alternates: {
      canonical: "/",
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      title,
      description: metaDescription,
      url: SITE.url,
      siteName: SITE.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: SITE.socialImage,
          width: 1200,
          height: 630,
          alt: `${SITE.name} - ${SITE.slogan}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description: metaDescription,
      images: [SITE.socialImage],
    },

    icons: {
      icon: [
        {
          url: "/favicon.ico",
        },
        {
          url: "/logo-icon.png",
          type: "image/png",
        },
      ],
      apple: "/logo-icon.png",
    },
  };
}
