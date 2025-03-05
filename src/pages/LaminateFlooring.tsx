
import { Helmet } from "react-helmet";
import LaminateHeroSection from "@/components/laminate/LaminateHeroSection";
import LaminateServicesSection from "@/components/laminate/LaminateServicesSection";
import LaminateBenefitsSection from "@/components/laminate/LaminateBenefitsSection";
import LaminateCTASection from "@/components/laminate/LaminateCTASection";

const LaminateFlooring = () => {
  const hubspotFormUrl = "https://share-na2.hsforms.com/2ViHNhP0VREeNbPXGDMdneQ401s19";
  
  return (
    <>
      <Helmet>
        <title>Laminate Flooring Installation Vancouver WA | Affordable & Durable</title>
        <meta name="description" content="Expert laminate flooring installation in Vancouver WA. Durable, affordable, and stylish laminate floors for residential and commercial spaces. Free installation quotes!" />
        <meta name="keywords" content="laminate flooring Vancouver WA, laminate floor installation, affordable flooring, durable flooring, commercial laminate flooring" />
      </Helmet>

      <div className="min-h-screen">
        <LaminateHeroSection hubspotFormUrl={hubspotFormUrl} />
        <LaminateServicesSection services={services} />
        <LaminateBenefitsSection benefits={benefits} />
        <LaminateCTASection hubspotFormUrl={hubspotFormUrl} />
      </div>
    </>
  );
};

const services = [
  {
    title: "Residential Installation",
    description: "Expert laminate flooring installation for homes.",
    features: [
      "Professional measurement",
      "Moisture barrier installation",
      "Expert installation",
      "Quality finishing touches",
    ],
  },
  {
    title: "Commercial Installation",
    description: "Durable laminate solutions for business spaces.",
    features: [
      "High-traffic durability",
      "Quick installation",
      "Minimal disruption",
      "Commercial grade materials",
    ],
  },
  {
    title: "Maintenance Services",
    description: "Keep your laminate floors looking their best.",
    features: [
      "Regular maintenance",
      "Damage repair",
      "Deep cleaning",
      "Preventive care",
    ],
  },
];

const benefits = [
  {
    title: "Cost-Effective",
    description: "Get the look of hardwood or stone at a fraction of the cost.",
  },
  {
    title: "Durability",
    description: "Resistant to scratches, dents, and daily wear and tear.",
  },
  {
    title: "Easy Maintenance",
    description: "Simple to clean and maintain with basic care.",
  },
  {
    title: "Versatile Styles",
    description: "Wide range of styles and patterns to match any décor.",
  },
];

export default LaminateFlooring;
