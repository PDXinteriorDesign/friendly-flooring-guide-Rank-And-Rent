
import LocationLayout from "@/components/locations/LocationLayout";

const RidgefieldPage = () => {
  const locationContent = {
    introduction: "Ridgefield, Washington has seen tremendous growth with beautiful new homes and neighborhoods taking shape across the community. As your local flooring experts serving Clark County since 2005, we bring specialized knowledge of Ridgefield's homes and design preferences. Whether you're in a historic property near downtown or a new construction in one of Ridgefield's expanding developments, our team delivers premium flooring solutions with attentive service and expert installation techniques.",
    services: [
      {
        title: "Premium Hardwood Flooring for Ridgefield Homes",
        description: "Enhance your Ridgefield home with beautiful hardwood floors that add warmth and value. Our selection includes traditional oak, maple, hickory and exotic options installed by certified technicians."
      },
      {
        title: "Waterproof Vinyl Flooring in Ridgefield",
        description: "Perfect for Ridgefield's active families, our luxury vinyl plank and tile options resist moisture, scratches, and dents while looking just like natural materials."
      },
      {
        title: "Laminate Flooring Installation for Ridgefield Properties",
        description: "Durable, budget-friendly laminate floors installed by Ridgefield's trusted flooring experts. Ideal for high-traffic areas and homes with children and pets."
      },
      {
        title: "Custom Tile Solutions for Ridgefield Residences",
        description: "From stunning kitchen backsplashes to durable bathroom floors, our tile installation services bring quality craftsmanship to Ridgefield homes."
      }
    ],
    faqs: [
      {
        question: "What's the most durable flooring for Ridgefield homes with pets?",
        answer: "For Ridgefield homeowners with pets, we typically recommend luxury vinyl plank flooring or laminate with a high AC rating (AC4 or AC5). These options resist scratches, dents, and water damage while still looking beautiful. Many of our Ridgefield clients with dogs particularly appreciate the performance of today's advanced vinyl products that can handle wet paws and occasional accidents."
      },
      {
        question: "Do you offer flooring options that work with radiant heat systems in Ridgefield homes?",
        answer: "Yes! Many Ridgefield homeowners are installing radiant heat systems, and we offer several compatible flooring options. Engineered hardwood, luxury vinyl plank, and certain laminates work well with radiant systems. We'll help you select the right product and ensure proper installation techniques for optimal performance with your heating system."
      },
      {
        question: "How long will my new floors last in my Ridgefield home?",
        answer: "With proper care, hardwood floors in Ridgefield homes can last 25+ years and can be refinished multiple times. Quality vinyl and laminate typically last 15-20 years, while properly installed tile can last 50+ years. We help Ridgefield homeowners select the right products based on their lifestyle, expected longevity, and maintenance preferences."
      }
    ],
    testimonial: {
      quote: "From selection to installation, the FlooringQuotesVancouver team made the process easy and stress-free. Our new hardwood floors completely transformed our Ridgefield home, and the attention to detail was impressive. I've already recommended them to several neighbors.",
      author: "Sarah K.",
      role: "Ridgefield Homeowner"
    }
  };

  return (
    <LocationLayout
      title="Hardwood Flooring in Ridgefield, WA | Free Quotes"
      metaDescription="Get affordable and expert hardwood flooring installation in Ridgefield. Free quotes. Same-day response. Trusted local flooring contractors serving Ridgefield since 2005."
      cityName="Ridgefield"
      headerImage="/lovable-uploads/532f4405-f7f0-4a24-9818-10fd610b1467.png"
      content={locationContent}
    />
  );
};

export default RidgefieldPage;
