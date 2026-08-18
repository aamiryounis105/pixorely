import Hero from "@/components/hero/Hero";
import Services from "@/components/services";
import Work from "@/components/work";
import WhyUs from "@/components/why-us";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Work />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}