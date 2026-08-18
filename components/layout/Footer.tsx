import Container from "@/components/ui/Container";

import FooterBottom from "./FooterBottom";
import FooterCTA from "./FooterCTA";
import FooterBrand from "./FooterBrand";
import FooterNavigation from "./FooterNavigation";
import FooterServices from "./FooterServices";
import FooterSocial from "./FooterSocial";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="
        relative
        overflow-hidden
      "
    >

      <Container>
        {/* CTA */}

        <FooterCTA />

        {/* Main Footer */}

        <div
          className="
            grid

            gap-y-16
            gap-x-20

            border-t
            border-[var(--border)]

            py-16

            lg:grid-cols-[1.8fr_1fr_1fr_1fr]
          "
        >
          <FooterBrand />

          <FooterNavigation />

          <FooterServices />

          <FooterSocial />
        </div>

        <FooterBottom />
      </Container>
    </footer>
  );
}
