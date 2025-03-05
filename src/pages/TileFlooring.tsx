
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import ServiceSchema from "@/components/ServiceSchema";
import CanonicalTag from "@/components/CanonicalTag";

const TileFlooring = () => {
  return (
    <>
      <Helmet>
        <title>Tile Flooring Installation Vancouver WA | Professional Ceramic & Porcelain Services</title>
        <meta name="description" content="Expert tile flooring installation in Vancouver WA. Ceramic, porcelain, and designer tiles for kitchens, bathrooms, and commercial spaces. Local tile installers with 15+ years experience. Free quotes!" />
        <meta name="keywords" content="tile flooring Vancouver WA, ceramic tile installation, porcelain tile Vancouver, bathroom tiles, kitchen tile flooring, Vancouver WA tile contractor, tile installation near me" />
        <meta name="geo.region" content="US-WA" />
        <meta name="geo.placename" content="Vancouver" />
      </Helmet>
      
      <ServiceSchema 
        name="Tile Flooring Installation Vancouver WA"
        description="Professional tile installation services for Vancouver WA homes and businesses. Expert installation of ceramic, porcelain, and designer tiles with free quotes and guaranteed craftsmanship."
        image="/lovable-uploads/8cca6a29-110d-47c4-a035-2befcffc5b02.png"
        url="https://floorvancouver.com/tile-flooring-vancouver-wa"
      />
      
      <CanonicalTag url="https://floorvancouver.com/tile-flooring-vancouver-wa" />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/lovable-uploads/8cca6a29-110d-47c4-a035-2befcffc5b02.png"
              alt="Modern kitchen with elegant tile flooring in Vancouver WA, featuring white cabinets, granite countertops and professionally installed ceramic tile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="container-custom relative z-10 text-white">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Vancouver WA Tile Flooring Experts
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-white/90">
                Beautiful, durable tile solutions for any Clark County space
              </p>
              <Button size="lg" className="bg-wood-500 hover:bg-wood-600 text-white">
                Get Your Free Vancouver Quote
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-earth-100" id="tile-services">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Vancouver Tile Installation Services</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive tile installation and maintenance services for Vancouver and Clark County homes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-fade-up">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-wood-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Choose Tile Flooring?</h2>
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
              </div>
              <div className="relative h-[500px] animate-fade-up rounded-lg overflow-hidden">
                <img
                  src="/lovable-uploads/3cfd1e9f-56b6-442c-aa57-809df348b965.png"
                  alt="Various tile samples including marble, wood-look, and natural stone patterns showcasing design options"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-wood-100" id="contact">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Vancouver Home?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get a free, no-obligation quote for your tile flooring project today. Serving Vancouver, Ridgefield, Salmon Creek, and all of Clark County.
              </p>
              <Button size="lg" className="bg-wood-500 hover:bg-wood-600 text-white">
                Request Free Vancouver Quote <ArrowRight className="ml-2" />
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
    title: "Residential Tile Installation",
    description: "Expert tile installation for homes.",
    features: [
      "Custom design layouts",
      "Bathroom and kitchen expertise",
      "Waterproofing",
      "Professional grouting",
    ],
  },
  {
    title: "Commercial Tile Services",
    description: "Durable tile solutions for businesses.",
    features: [
      "Large-scale installations",
      "High-traffic materials",
      "Quick turnaround",
      "Commercial grade products",
    ],
  },
  {
    title: "Tile Maintenance",
    description: "Keep your tile floors pristine.",
    features: [
      "Grout cleaning",
      "Tile repair",
      "Sealing services",
      "Regular maintenance",
    ],
  },
];

const benefits = [
  {
    title: "Durability",
    description: "Tile flooring can last decades with proper maintenance.",
  },
  {
    title: "Water Resistance",
    description: "Perfect for bathrooms, kitchens, and other moisture-prone areas.",
  },
  {
    title: "Design Flexibility",
    description: "Endless patterns and style options to match any décor.",
  },
  {
    title: "Easy Maintenance",
    description: "Simple to clean and maintain with basic care.",
  },
];

export default TileFlooring;
