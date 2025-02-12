
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CarpetFlooring = () => {
  return (
    <>
      <Helmet>
        <title>Carpet Installation & Cleaning Vancouver WA | Expert Installation Services</title>
        <meta name="description" content="Professional carpet installation and cleaning services in Vancouver & Ridgefield, WA. Expert installers offering plush, stain-resistant, and commercial carpet options. Get free quotes today!" />
        <meta name="keywords" content="carpet installation Vancouver, carpet cleaning Vancouver, carpet removal Vancouver, plush carpets, stain-resistant carpets, commercial carpets" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1582562124811-c09040d0a901"
              alt="Professional carpet installation in Vancouver"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="container-custom relative z-10 text-white">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Expert Carpet Installation Services
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-white/90">
                Transform your space with premium carpet solutions and professional installation
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Carpet Services</h2>
              <p className="text-lg text-muted-foreground">
                Discover our comprehensive range of carpet installation and maintenance services
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
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Choose Carpet Flooring?</h2>
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
                  src="https://images.unsplash.com/photo-1582562124811-c09040d0a901"
                  alt="Carpet installation process"
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
                Get a free, no-obligation quote for your carpet installation project today.
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
    title: "Residential Installation",
    description: "Expert carpet installation for homes of all sizes.",
    features: [
      "Professional measurement",
      "Wide variety of styles",
      "Expert installation",
      "Furniture moving service",
    ],
  },
  {
    title: "Commercial Installation",
    description: "Durable carpet solutions for business spaces.",
    features: [
      "Heavy-duty options",
      "Quick installation",
      "Minimal disruption",
      "Maintenance plans",
    ],
  },
  {
    title: "Maintenance & Repair",
    description: "Keep your carpets looking their best.",
    features: [
      "Deep cleaning",
      "Stain removal",
      "Patch repairs",
      "Preventive care",
    ],
  },
];

const benefits = [
  {
    title: "Comfort & Warmth",
    description: "Experience luxurious comfort underfoot and improved room insulation.",
  },
  {
    title: "Noise Reduction",
    description: "Enjoy a quieter home with carpet's natural sound dampening properties.",
  },
  {
    title: "Safety Features",
    description: "Non-slip surface perfect for families with children or elderly members.",
  },
  {
    title: "Versatile Styles",
    description: "Choose from a wide range of colors, patterns, and textures to match your décor.",
  },
];

export default CarpetFlooring;
