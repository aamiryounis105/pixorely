import type { ReactNode } from "react";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import SiteBackground from "@/components/layout/SiteBackground";

import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

import SmoothScroll from "@/providers/SmoothScroll";

interface WebsiteLayoutProps {
  children: ReactNode;
}

export default function WebsiteLayout({
  children,
}: WebsiteLayoutProps) {
  return (
    <div
      className="
        relative
        min-h-screen
        overflow-x-clip
        bg-transparent
      "
    >
      {/* =====================================================
          GLOBAL WEBSITE BACKGROUND
      ====================================================== */}

      <SiteBackground />

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <Navbar />

      {/* =====================================================
          WEBSITE CONTENT
      ====================================================== */}

      <SmoothScroll>
        <div
          className="
            relative
            z-10
            min-h-screen
            bg-transparent
          "
        >
          <main
            className="
              min-h-screen
              bg-transparent
              pt-28
            "
          >
            {children}
          </main>

          {/* =================================================
              FOOTER
          ================================================== */}

          <div className="relative bg-transparent">
            <Footer />
          </div>
        </div>
      </SmoothScroll>

      {/* =====================================================
          FLOATING WHATSAPP
      ====================================================== */}

      <FloatingWhatsApp />
    </div>
  );
}