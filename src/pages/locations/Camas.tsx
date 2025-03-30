
import LocationLayout from "@/components/locations/LocationLayout";

const CamasPage = () => {
  const locationContent = {
    introduction: "Camas, Washington is known for its beautiful homes and unique architectural styles. At FlooringQuotesVancouver, we've been providing premium flooring solutions to Camas homeowners since 2005. Our team understands the local climate conditions and home styles that are popular in this charming city. Whether you need durable flooring for high-traffic areas or luxurious options for your master bedroom, our expert installers deliver outstanding results tailored to Camas homeowners' specific needs and preferences.",
    services: [
      {
        title: "Hardwood Flooring Installation in Camas",
        description: "Our premium hardwood flooring options bring timeless elegance to Camas homes. We offer solid and engineered options perfect for the Pacific Northwest climate."
      },
      {
        title: "Vinyl Flooring Solutions for Camas Homes",
        description: "Durable, waterproof, and stylish vinyl options that stand up to Camas's wet climate while providing the beautiful look of natural materials."
      },
      {
        title: "Carpet Installation in Camas",
        description: "From plush comfort to stain-resistant options, we offer carpet solutions perfect for Camas families looking for cozy, warm flooring."
      },
      {
        title: "Tile and Stone Flooring for Camas Properties",
        description: "Beautiful, long-lasting tile and stone options installed by our expert Camas-area technicians for kitchens, bathrooms, and more."
      }
    ],
    faqs: [
      {
        question: "What's the best flooring for Camas basements?",
        answer: "For Camas basements, which can experience moisture issues due to our climate, we typically recommend luxury vinyl plank or tile. These waterproof options resist moisture damage while still providing a beautiful look that mimics hardwood or stone. Engineered hardwood is another option if moisture barriers are properly installed."
      },
      {
        question: "How long does flooring installation typically take in Camas homes?",
        answer: "Most Camas residential flooring projects take 1-3 days depending on the square footage and type of flooring. Hardwood installations may take longer than vinyl or carpet. We work efficiently to minimize disruption to your household while ensuring perfect installation results."
      },
      {
        question: "Do you offer eco-friendly flooring options for Camas residents?",
        answer: "Yes! We offer several sustainable flooring options including bamboo, cork, and FSC-certified hardwoods. Many Camas homeowners are choosing these environmentally friendly options that don't compromise on quality or appearance."
      }
    ],
    testimonial: {
      quote: "The team at FlooringQuotesVancouver did an amazing job with our hardwood floors. They were professional, on time, and the quality of work exceeded our expectations. Our Camas home has never looked better!",
      author: "Jennifer M.",
      role: "Camas Homeowner"
    }
  };

  return (
    <LocationLayout
      title="Flooring Installation in Camas, WA | Free Quotes"
      metaDescription="Expert flooring installation in Camas, WA. Hardwood, vinyl, laminate, carpet & tile services with free estimates. Local flooring experts serving Clark County."
      cityName="Camas"
      headerImage="/lovable-uploads/40ee1fa8-0e9e-417b-acb9-6f62c412e409.png"
      content={locationContent}
    />
  );
};

export default CamasPage;
