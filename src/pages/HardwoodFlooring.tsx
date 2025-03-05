
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HardwoodFlooring = () => {
  const hubspotFormUrl = "https://share-na2.hsforms.com/2ViHNhP0VREeNbPXGDMdneQ401s19";
  
  return (
    <>
      <Helmet>
        <title>Hardwood Flooring Installation & Refinishing Vancouver WA | Expert Installers</title>
        <meta name="description" content="Professional hardwood flooring installation & refinishing in Vancouver & Ridgefield, WA. Expert installers for new floors, refinishing, and repairs. Free quotes available!" />
        <meta name="keywords" content="hardwood floor installation Vancouver, hardwood floor refinishing Vancouver, engineered hardwood flooring Vancouver, oak hardwood flooring, maple hardwood flooring, hardwood floor repair Vancouver" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/lovable-uploads/7832e803-7dac-4dd4-b1a8-4e65feea97e6.png"
              alt="Professional hardwood flooring installation in progress showing light wood planks and leveling spacers"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="container-custom relative z-10 text-white">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Expert Hardwood Flooring Services in Vancouver
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-white/90">
                Professional installation, refinishing, and repair services for your home
              </p>
              <Button 
                size="lg" 
                className="bg-wood-500 hover:bg-wood-600 text-white"
                onClick={() => window.open(hubspotFormUrl, '_blank')}
              >
                Get Your Free Quote
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-earth-100">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Hardwood Flooring Services</h2>
              <p className="text-lg text-muted-foreground">
                Discover our comprehensive range of hardwood flooring services, delivered by experienced professionals
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-fade-up">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-wood-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Services Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Transform Your Home with Expert Hardwood Flooring Services</h2>
                <p className="text-lg text-muted-foreground">
                  Unlock the timeless elegance and lasting value of hardwood floors with our comprehensive suite of services. Whether you're envisioning a stunning new installation, seeking to revitalize existing floors through professional refinishing, or require meticulous repair services, our team of skilled artisans delivers unparalleled craftsmanship.
                </p>
              </div>

              <div className="space-y-16">
                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold mb-4">New Installation: Crafting Your Dream Floors - Step-by-Step</h3>
                  <p className="text-muted-foreground">
                    Experience the luxury of brand-new hardwood with our expert installation services. We begin with a thorough subfloor inspection and preparation, ensuring a level and stable base. This may involve leveling uneven spots, repairing damaged areas, or installing a moisture barrier. Next, we carefully acclimate the hardwood, allowing it to adjust to your home's humidity levels, preventing future warping or gapping. From classic oak and maple to exotic Brazilian cherry, we offer a wide variety of premium wood options. Our expert installation techniques include precise measurement, cutting, and nailing or gluing, depending on the chosen method. We specialize in custom patterns like herringbone or chevron, requiring meticulous planning and execution to create a truly unique and personalized space. Finally, we sand and finish the newly installed floors, ensuring a smooth and durable surface.
                  </p>
                </div>

                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold mb-4">Refinishing: Revive and Restore - Detailed Process</h3>
                  <p className="text-muted-foreground">
                    Breathe new life into your worn hardwood floors with our professional refinishing services. Our process begins with multiple passes of sanding, using progressively finer grits to remove the old finish, scratches, and imperfections. We meticulously clean the floor to remove all dust and debris. Explore our diverse staining options to achieve the perfect hue, applying the stain evenly and allowing it to dry thoroughly. We then apply multiple coats of high-quality finish, such as polyurethane, for lasting protection and shine. Benefit from our precise scratch repair and color matching expertise, ensuring seamless blending of repaired areas with the rest of the floor. Finally, we perform a final inspection to ensure a flawless finish.
                  </p>
                </div>

                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold mb-4">Repair Services: Preserve and Protect - Addressing Specific Issues</h3>
                  <p className="text-muted-foreground">
                    Don't let damaged hardwood detract from your home's beauty. Our repair services address a range of issues with precision. For board replacement, we carefully remove the damaged board, match the wood species and grain, and install a new board, seamlessly integrating it into the existing floor. For water damage repair, we assess the extent of the damage, remove affected boards, dry the subfloor, and replace damaged sections. For gap filling, we use specialized fillers that match the wood's color and texture, preventing drafts and maintaining the floor's integrity. For scratch repair, we use specialized techniques and fillers to minimize the appearance of scratches, followed by touch-up finishing. We utilize proven techniques and high-quality materials to seamlessly restore your floors to their original splendor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Choose Our Hardwood Flooring Services?</h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <CheckCircle2 className="w-6 h-6 text-wood-500 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <p className="text-muted-foreground">
                    We're committed to exceeding your expectations with exceptional quality and customer service. Our attention to detail, combined with our passion for hardwood flooring, ensures a result that you'll cherish for years to come. We utilize dust containment systems to minimize mess during sanding and prioritize eco-friendly finishing products.
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] animate-fade-up rounded-lg overflow-hidden">
                <img
                  src="/lovable-uploads/394c320d-eec4-4d3f-ac10-86ecf03abf05.png"
                  alt="Collection of hardwood flooring samples showcasing various wood tones and grain patterns"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-wood-100">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get a free, no-obligation quote for your hardwood flooring project today.
              </p>
              <Button 
                size="lg" 
                className="bg-wood-500 hover:bg-wood-600 text-white"
                onClick={() => window.open(hubspotFormUrl, '_blank')}
              >
                Request Free Quote <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const services = [
  {
    title: "New Installation",
    description: "Professional installation of new hardwood floors for your home.",
    features: [
      "Expert installation techniques",
      "Wide variety of wood species",
      "Custom patterns available",
      "Subfloor preparation",
    ],
  },
  {
    title: "Refinishing",
    description: "Restore the beauty of your existing hardwood floors.",
    features: [
      "Sanding and refinishing",
      "Staining options",
      "Scratch repair",
      "Color matching",
    ],
  },
  {
    title: "Repair Services",
    description: "Fix damaged areas and maintain your hardwood floors.",
    features: [
      "Board replacement",
      "Water damage repair",
      "Gap filling",
      "Scratch repair",
    ],
  },
];

const benefits = [
  {
    title: "Expert Installation Team",
    description: "Our installers have years of experience and are fully licensed and insured.",
  },
  {
    title: "Premium Materials",
    description: "We use only the highest quality hardwood and finishing materials.",
  },
  {
    title: "Lifetime Support",
    description: "Get expert advice on maintaining your floors for years to come.",
  },
  {
    title: "Satisfaction Guaranteed",
    description: "Your satisfaction is our top priority, backed by our written guarantee.",
  },
];

export default HardwoodFlooring;
