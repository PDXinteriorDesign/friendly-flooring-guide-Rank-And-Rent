
import { faqs, services, benefits } from "@/data/homePageData";
import SEOHelmet from "@/components/home/SEOHelmet";
import HeroSection from "@/components/home/HeroSection";
import TrustIndicators from "@/components/home/TrustIndicators";
import ServicesSection from "@/components/home/ServicesSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <>
      <SEOHelmet faqs={faqs} />

      <div className="min-h-screen">
        <HeroSection />
        <TrustIndicators />
        <ServicesSection services={services} />
        <BenefitsSection benefits={benefits} />
        <FAQSection faqs={faqs} />
        <ContactSection />
      </div>
    </>
  );
};

export default Index;
