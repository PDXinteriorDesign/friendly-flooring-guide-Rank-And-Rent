
import LocationLayout from "@/components/locations/LocationLayout";

const BattleGroundPage = () => {
  const locationContent = {
    introduction: "Battle Ground, WA homes deserve beautiful, durable flooring that stands up to the Pacific Northwest lifestyle. As Clark County's trusted flooring experts since 2005, we've helped hundreds of Battle Ground homeowners transform their spaces with premium flooring installations. Our team understands the unique needs of Battle Ground properties, from moisture considerations to architectural styles common in the area. We bring expertise, quality materials, and exceptional service to every project, large or small.",
    services: [
      {
        title: "Hardwood Flooring in Battle Ground",
        description: "Classic, durable hardwood floors installed by local experts. Choose from oak, maple, hickory and exotic options that add value to your Battle Ground home."
      },
      {
        title: "Vinyl Plank Flooring for Battle Ground Homes",
        description: "Modern, waterproof vinyl flooring that's perfect for Battle Ground's active families. Looks like real wood but stands up to moisture and heavy traffic."
      },
      {
        title: "Carpet Installation for Battle Ground Residences",
        description: "Cozy, comfortable carpet options in hundreds of styles and colors. Professional installation ensures your Battle Ground home stays warm and inviting."
      },
      {
        title: "Laminate Flooring Solutions in Battle Ground",
        description: "Affordable, durable laminate flooring that resists scratches and dents. Ideal for busy Battle Ground households with children and pets."
      }
    ],
    faqs: [
      {
        question: "What flooring works best for Battle Ground's climate conditions?",
        answer: "In Battle Ground's variable climate, we recommend engineered hardwood, luxury vinyl plank, or laminate flooring. These options resist expansion and contraction from humidity changes common in our area while still providing beautiful results. We install with proper underlayment and moisture barriers specific to Battle Ground's conditions."
      },
      {
        question: "How much does new flooring cost for an average Battle Ground home?",
        answer: "For a typical 1,500-2,000 sq ft Battle Ground home, flooring projects generally range from $6,000-$15,000 depending on the materials chosen. Vinyl and laminate offer budget-friendly options around $3-5 per square foot installed, while hardwood options typically range from $8-12 per square foot installed. We provide detailed, no-obligation quotes for all Battle Ground projects."
      },
      {
        question: "Do you work with Battle Ground contractors and builders?",
        answer: "Absolutely! We partner with many Battle Ground contractors, builders, and designers on new construction and renovation projects throughout the area. We offer competitive pricing, reliable scheduling, and quality installations that builders trust for their Battle Ground projects."
      }
    ],
    testimonial: {
      quote: "We had our entire downstairs redone in luxury vinyl plank and couldn't be happier with the results. The crew was professional, cleaned up thoroughly, and finished ahead of schedule. Our Battle Ground home looks completely transformed!",
      author: "Michael T.",
      role: "Battle Ground Homeowner"
    }
  };

  return (
    <LocationLayout
      title="Flooring Installation in Battle Ground, WA | Free Estimates"
      metaDescription="Expert flooring installation services in Battle Ground, WA. Hardwood, vinyl, laminate & carpet options with free quotes. Local flooring contractors serving Battle Ground families since 2005."
      cityName="Battle Ground"
      headerImage="/lovable-uploads/733e92bb-54e7-4de6-b1f8-431bb475f857.png"
      content={locationContent}
    />
  );
};

export default BattleGroundPage;
