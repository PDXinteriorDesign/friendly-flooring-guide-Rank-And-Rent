
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const VinylFlooring = () => {
  return (
    <>
      <Helmet>
        <title>Vinyl Flooring Installation Vancouver WA | LVP & Sheet Vinyl Experts</title>
        <meta name="description" content="Expert vinyl flooring installation in Vancouver & Ridgefield, WA. Luxury vinyl plank, sheet vinyl, and waterproof options. Get free installation quotes today!" />
        <meta name="keywords" content="vinyl flooring installation Vancouver, luxury vinyl plank Vancouver, vinyl flooring for kitchens Vancouver, waterproof vinyl flooring, vinyl tile flooring, vinyl plank flooring installation" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d"
              alt="Modern vinyl flooring installation in Vancouver"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="container-custom relative z-10 text-white">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Premium Vinyl Flooring Solutions
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-white/90">
                Durable, waterproof, and stylish flooring options for every room
              </p>
              <Button size="lg" className="bg-wood-500 hover:bg-wood-600 text-white">
                Get Your Free Quote
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-earth-100">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Vinyl Flooring Services</h2>
              <p className="text-lg text-muted-foreground">
                Explore our range of vinyl flooring options and professional installation services
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

        {/* Why Choose Vinyl Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Choose Vinyl Flooring?</h2>
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
                  src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d"
                  alt="Luxury vinyl plank flooring installation"
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get a free, no-obligation quote for your vinyl flooring project today.
              </p>
              <Button size="lg" className="bg-wood-500 hover:bg-wood-600 text-white">
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
    title: "Luxury Vinyl Plank",
    description: "Premium LVP installation for a wood-look finish.",
    features: [
      "Waterproof protection",
      "Realistic wood appearance",
      "Durable construction",
      "Easy maintenance",
    ],
  },
  {
    title: "Sheet Vinyl",
    description: "Perfect for bathrooms and large spaces.",
    features: [
      "Seamless installation",
      "Moisture resistant",
      "Various patterns",
      "Cost-effective",
    ],
  },
  {
    title: "Vinyl Tile",
    description: "Versatile tile options for any room.",
    features: [
      "Easy replacement",
      "Custom patterns",
      "Water resistant",
      "Affordable options",
    ],
  },
];

const benefits = [
  {
    title: "100% Waterproof",
    description: "Perfect for bathrooms, kitchens, and basements with superior moisture protection.",
  },
  {
    title: "Durability",
    description: "Resistant to scratches, dents, and daily wear and tear.",
  },
  {
    title: "Easy Maintenance",
    description: "Simple to clean and maintain with no special treatments required.",
  },
  {
    title: "Cost-Effective",
    description: "Beautiful floors that fit your budget without compromising on quality.",
  },
];

export default VinylFlooring;
