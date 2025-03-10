
import { Helmet } from "react-helmet";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import CanonicalTag from "@/components/CanonicalTag";

interface SEOHelmetProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const SEOHelmet = ({ faqs }: SEOHelmetProps) => {
  return (
    <>
      <Helmet>
        <title>Flooring Vancouver WA | Top-Rated Flooring Installation Services</title>
        <meta name="description" content="Expert flooring installation in Vancouver, WA. Family-owned flooring company serving Clark County since 2005. Hardwood, vinyl, laminate, carpet & tile. Free quotes!" />
        <meta name="keywords" content="flooring Vancouver WA, hardwood flooring Vancouver, vinyl flooring installation, laminate flooring Vancouver, carpet installation Vancouver WA, tile flooring, local flooring company" />
        <meta name="geo.region" content="US-WA" />
        <meta name="geo.placename" content="Vancouver" />
      </Helmet>
      
      <LocalBusinessSchema 
        name="FlooringQuotesVancouver" 
        description="Family-owned flooring company in Vancouver, WA providing expert installation of hardwood, vinyl, laminate, carpet, and tile flooring with free estimates."
        sameAs={["https://facebook.com/flooringquotesvancouver", "https://instagram.com/flooringquotesvancouver"]}
      />
      
      <FAQSchema faqs={faqs} />
      
      <CanonicalTag url="https://flooringquotesvancouver.com" />
    </>
  );
};

export default SEOHelmet;
