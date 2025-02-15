
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HardwoodFlooring = () => {
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
              </div>
              <div className="relative h-[500px] animate-fade-up rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                  alt="Hardwood flooring installation in progress"
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
