"use client";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiWordpress,
  SiShopify,
  SiFlutter,
  SiFigma,
  SiCloudflare,
  SiVercel,
  SiGmail,
  SiHtml5,
  SiCss,
  SiJavascript,
} from "react-icons/si";

import { FaMicrosoft } from "react-icons/fa";

const technologies = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "WordPress", icon: SiWordpress },
  { name: "Shopify", icon: SiShopify },
  { name: "Flutter", icon: SiFlutter },
  { name: "Figma", icon: SiFigma },
  { name: "Cloudflare", icon: SiCloudflare },
  { name: "Vercel", icon: SiVercel },
  { name: "Gmail", icon: SiGmail },
  { name: "Outlook", icon: FaMicrosoft },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss },
  { name: "JavaScript", icon: SiJavascript },
];

const row1 = [...technologies, ...technologies];
const row2 = [...technologies.slice().reverse(), ...technologies.slice().reverse()];

export default function TechnologyMarquee() {
  return (
    <section className="marquee-section">

      <p className="marquee-heading">
        BUILT WITH MODERN TECHNOLOGIES
      </p>

      {/* Row 1 */}

      <div className="marquee-wrapper">
        <div className="marquee-track marquee-track-left">
          {row1.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                className="marquee-pill"
                key={`${item.name}-${index}`}
              >
                <Icon className="marquee-icon" />
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Row 2 */}

      <div className="marquee-wrapper marquee-wrapper-second">
        <div className="marquee-track marquee-track-right">
          {row2.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                className="marquee-pill"
                key={`${item.name}-second-${index}`}
              >
                <Icon className="marquee-icon" />
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}