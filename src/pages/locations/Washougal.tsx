
import LocationLayout from "@/components/locations/LocationLayout";

const WashougalPage = () => {
  const locationContent = {
    introduction: "Washougal's unique blend of historic charm and new development calls for flooring solutions that complement diverse architectural styles. At FlooringQuotesVancouver, we've been serving Washougal homeowners since 2005 with expert flooring installation services tailored to local needs. Our team understands the specific challenges of Washougal homes, from moisture considerations near the Columbia River to the durability requirements for families enjoying the outdoor lifestyle. We bring quality materials, skilled craftsmanship, and exceptional value to every Washougal flooring project.",
    services: [
      {
        title: "Hardwood Floor Installation in Washougal",
        description: "Classic, beautiful hardwood flooring installed by Washougal's trusted experts. We offer solid and engineered options in a variety of species and finishes."
      },
      {
        title: "Luxury Vinyl Plank for Washougal Homes",
        description: "Modern, waterproof vinyl flooring that's perfect for Washougal's active households. Looks like natural wood but withstands moisture and daily wear."
      },
      {
        title: "Carpet Installation Services in Washougal",
        description: "From plush to berber, we offer quality carpet options installed by experienced technicians throughout the Washougal area."
      },
      {
        title: "Tile Flooring for Washougal Residences",
        description: "Beautiful, durable tile installed by skilled craftsmen. Perfect for Washougal kitchens, bathrooms, entryways, and more."
      }
    ],
    faqs: [
      {
        question: "What flooring is best for Washougal homes near the river?",
        answer: "For Washougal homes near the Columbia River that may experience higher humidity or flooding risks, we recommend waterproof luxury vinyl plank or tile flooring. These options provide complete moisture protection while still offering beautiful wood or stone looks. For areas that don't flood but experience humidity, engineered hardwood with proper underlayment is also an excellent option for Washougal homeowners."
      },
      {
        question: "How do I maintain my floors with Washougal's rainy climate?",
        answer: "For Washougal homes dealing with our rainy Pacific Northwest weather, we recommend placing quality mats at entrances and implementing a 'shoes off' policy when possible. For hardwood, prompt cleaning of any water is important. Vinyl and laminate are more forgiving with moisture but should still be wiped dry. We provide all Washougal customers with maintenance guides specific to their flooring type and our local climate conditions."
      },
      {
        question: "Do you offer flooring installation year-round in Washougal?",
        answer: "Yes, we install flooring in Washougal homes throughout the year. We take special precautions during winter months when heating systems can cause drier conditions, allowing wood products to properly acclimate to prevent gaps later. Our experienced Washougal installers adjust techniques seasonally to ensure optimal results regardless of when your project takes place."
      }
    ],
    testimonial: {
      quote: "We had our entire main floor redone in engineered hardwood and couldn't be happier. The team was professional, respectful of our home, and the finished product is stunning. Being in Washougal, we appreciated their knowledge about handling the moisture issues specific to our location.",
      author: "Robert L.",
      role: "Washougal Homeowner"
    }
  };

  return (
    <LocationLayout
      title="Flooring Installation Washougal, WA | Free Estimates"
      metaDescription="Expert flooring installation in Washougal, WA. Hardwood, vinyl, laminate & carpet services with competitive pricing and professional installation. Free quotes available."
      cityName="Washougal"
      headerImage="/lovable-uploads/d625c946-f85f-4cd4-96e8-002c9e311d62.png"
      content={locationContent}
    />
  );
};

export default WashougalPage;
