
import { Helmet } from "react-helmet";
import CarpetHeroSection from "@/components/carpet/CarpetHeroSection";
import CarpetServicesSection from "@/components/carpet/CarpetServicesSection";
import CarpetDetailedServicesSection from "@/components/carpet/CarpetDetailedServicesSection";
import CarpetBenefitsSection from "@/components/carpet/CarpetBenefitsSection";
import CarpetCTASection from "@/components/carpet/CarpetCTASection";

const CarpetFlooring = () => {
  const hubspotFormUrl = "https://share-na2.hsforms.com/2ViHNhP0VREeNbPXGDMdneQ401s19";
  
  return (
    <>
      <Helmet>
        <title>Carpet Installation & Cleaning Vancouver WA | Expert Installation Services</title>
        <meta name="description" content="Professional carpet installation and cleaning services in Vancouver & Ridgefield, WA. Expert installers offering plush, stain-resistant, and commercial carpet options. Get free quotes today!" />
        <meta name="keywords" content="carpet installation Vancouver, carpet cleaning Vancouver, carpet removal Vancouver, plush carpets, stain-resistant carpets, commercial carpets" />
      </Helmet>

      <div className="min-h-screen">
        <CarpetHeroSection hubspotFormUrl={hubspotFormUrl} />
        <CarpetServicesSection services={services} />
        <CarpetDetailedServicesSection />
        <CarpetBenefitsSection benefits={benefits} />
        <CarpetCTASection hubspotFormUrl={hubspotFormUrl} />
      </div>
    </>
  );
};

const services = [
  {
    title: "Residential Installation",
    description: "Expert carpet installation for homes of all sizes.",
    features: [
      "Professional measurement",
      "Wide variety of styles",
      "Expert installation",
      "Furniture moving service",
    ],
  },
  {
    title: "Commercial Installation",
    description: "Durable carpet solutions for business spaces.",
    features: [
      "Heavy-duty options",
      "Quick installation",
      "Minimal disruption",
      "Maintenance plans",
    ],
  },
  {
    title: "Maintenance & Repair",
    description: "Keep your carpets looking their best.",
    features: [
      "Deep cleaning",
      "Stain removal",
      "Patch repairs",
      "Preventive care",
    ],
  },
];

const benefits = [
  {
    title: "Comfort & Warmth",
    description: "Experience luxurious comfort underfoot and improved room insulation.",
  },
  {
    title: "Noise Reduction",
    description: "Enjoy a quieter home with carpet's natural sound dampening properties.",
  },
  {
    title: "Safety Features",
    description: "Non-slip surface perfect for families with children or elderly members.",
  },
  {
    title: "Versatile Styles",
    description: "Choose from a wide range of colors, patterns, and textures to match your décor.",
  },
];

export default CarpetFlooring;
