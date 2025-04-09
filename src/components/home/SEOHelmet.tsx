
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
        <title>Get Flooring Quotes in Vancouver, WA – Fast & Free | Vancouver Flooring Experts</title>
        <meta name="description" content="Compare flooring quotes from top-rated Vancouver, WA installers. Free, no-obligation estimates for hardwood, vinyl, laminate, carpet & tile. Serving all Clark County." />
        <meta name="keywords" content="flooring quotes Vancouver WA, Vancouver flooring installation, hardwood flooring Vancouver, vinyl flooring installation, laminate flooring quotes, local flooring company, Clark County flooring contractors" />
        <meta name="geo.region" content="US-WA" />
        <meta name="geo.placename" content="Vancouver" />
      </Helmet>
      
      <LocalBusinessSchema 
        name="FlooringQuotesVancouver" 
        description="Family-owned flooring company in Vancouver, WA providing expert installation of hardwood, vinyl, laminate, carpet, and tile flooring with free estimates. Serving all of Clark County since 2005."
        sameAs={["https://facebook.com/flooringquotesvancouver", "https://instagram.com/flooringquotesvancouver"]}
        reviewCount={86}
        ratingValue={4.9}
      />
      
      <FAQSchema faqs={faqs} />
      
      <CanonicalTag url="https://flooringquotesvancouver.com" />
    </>
  );
};

export default SEOHelmet;
