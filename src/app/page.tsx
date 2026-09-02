import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Features from "@/components/Features";
import Steps from "@/components/Steps";
import Pricing from "@/components/Pricing";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Features />
      <Steps />
      <Pricing />
      <CtaFinal />
      <Footer />
    </>
  );
}
