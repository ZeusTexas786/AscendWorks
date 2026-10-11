import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AIControlTowerFeature from "@/components/sections/AIControlTowerFeature";
import PlatformCapabilities from "@/components/sections/PlatformCapabilities";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import PartnersSection from "@/components/sections/PartnersSection";
import WhySection from "@/components/sections/WhySection";
import InsightsSection from "@/components/sections/InsightsSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* 1. Hero — full-screen dark */}
        <HeroSection />

        {/* 2. ServiceNow AI Control Tower expertise */}
        <AIControlTowerFeature />

        {/* 3. Services — light */}
        <ServicesSection />

        {/* 4. Named ServiceNow products and how they work together */}
        <PlatformCapabilities />

        {/* 5. Process — dark */}
        <ProcessSection />

        {/* 6. Delivery proof and standards — light */}
        <CaseStudiesSection />

        {/* 7. Why AscendWorks — dark */}
        <WhySection />

        {/* 8. Partners & Credentials — light */}
        <PartnersSection />

        {/* 9. Insights — navy mid */}
        <InsightsSection />

        {/* 10. CTA — light with dark card */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
