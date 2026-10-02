import Navbar from "@/components/voltpro/Navbar";
import ScrollProgress from "@/components/voltpro/ScrollProgress";
import Hero from "@/components/voltpro/Hero";
import TrustSection from "@/components/voltpro/TrustSection";
import Services from "@/components/voltpro/Services";
import About from "@/components/voltpro/About";
import ServiceArea from "@/components/voltpro/ServiceArea";
import Portfolio from "@/components/voltpro/Portfolio";
import Reviews from "@/components/voltpro/Reviews";
import FAQ from "@/components/voltpro/FAQ";
import CTA from "@/components/voltpro/CTA";
import Footer from "@/components/voltpro/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <Services />
        <About />
        <ServiceArea />
        <Portfolio />
        <Reviews />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}