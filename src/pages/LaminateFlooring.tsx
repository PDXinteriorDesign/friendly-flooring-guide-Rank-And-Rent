import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";

const LaminateFlooring = () => {
  return (
    <>
      <Helmet>
        <title>Laminate Flooring Installation Vancouver WA | Affordable & Durable</title>
        <meta name="description" content="Expert laminate flooring installation in Vancouver WA. Durable, affordable, and stylish laminate floors for residential and commercial spaces. Free installation quotes!" />
        <meta name="keywords" content="laminate flooring Vancouver WA, laminate floor installation, affordable flooring, durable flooring, commercial laminate flooring" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/lovable-uploads/d0672cde-d628-49b2-876e-ac03bc1ea08f.png"
              alt="Modern living room with beautiful laminate flooring, featuring metal dining chairs and contemporary furniture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="container-custom relative z-10 text-white">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Premium Laminate Flooring Solutions
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-white/90">
                Beautiful, durable, and affordable flooring options for every space
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Laminate Flooring Services</h2>
              <p className="text-lg text-muted-foreground">
                Discover our comprehensive range of laminate flooring solutions
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
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Choose Laminate Flooring?</h2>
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
                  src="/lovable-uploads/a72f9a3c-7821-458d-afbf-eb71e54afa1d.png"
                  alt="Premium gray laminate flooring with realistic wood grain pattern, showcasing professional installation and durable finish for Vancouver WA homes"
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
                Get a free, no-obligation quote for your laminate flooring project today.
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
    description: "Expert laminate flooring installation for homes.",
    features: [
      "Professional measurement",
      "Moisture barrier installation",
      "Expert installation",
      "Quality finishing touches",
    ],
  },
  {
    title: "Commercial Installation",
    description: "Durable laminate solutions for business spaces.",
    features: [
      "High-traffic durability",
      "Quick installation",
      "Minimal disruption",
      "Commercial grade materials",
    ],
  },
  {
    title: "Maintenance Services",
    description: "Keep your laminate floors looking their best.",
    features: [
      "Regular maintenance",
      "Damage repair",
      "Deep cleaning",
      "Preventive care",
    ],
  },
];

const benefits = [
  {
    title: "Cost-Effective",
    description: "Get the look of hardwood or stone at a fraction of the cost.",
  },
  {
    title: "Durability",
    description: "Resistant to scratches, dents, and daily wear and tear.",
  },
  {
    title: "Easy Maintenance",
    description: "Simple to clean and maintain with basic care.",
  },
  {
    title: "Versatile Styles",
    description: "Wide range of styles and patterns to match any décor.",
  },
];

export default LaminateFlooring;
