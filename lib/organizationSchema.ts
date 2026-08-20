import { SITE } from "@/lib/constants";
import { socials } from "@/lib/socials";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  "@id": `${SITE.url}/#organization`,

  name: SITE.name,

  url: SITE.url,

  logo: {
    "@type": "ImageObject",
    url: `${SITE.url}/logo-square.png`,
  },

  description: SITE.description,

  email: SITE.email,

  telephone: SITE.phone,

  sameAs: socials.map((social) => social.href),
};