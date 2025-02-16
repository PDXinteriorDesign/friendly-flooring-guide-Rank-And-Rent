import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";

const WindowCoverings = () => {
  return (
    <>
      <Helmet>
        <title>Window Coverings Vancouver WA | Blinds, Shades & Custom Solutions</title>
        <meta name="description" content="Professional window covering solutions in Vancouver WA. Custom blinds, shades, and drapes for homes and businesses. Energy-efficient and stylish options available." />
        <meta name="keywords" content="window coverings Vancouver WA, blinds installation, custom shades, window treatments, commercial window coverings" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/lovable-uploads/733e92bb-54e7-4de6-b1f8-431bb475f857.png"
              alt="Elegant dining room showcasing custom window treatments with white sheer curtains, coffered ceiling, and hardwood flooring in Vancouver WA"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="container-custom relative z-10 text-white">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Custom Window Covering Solutions
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-white/90">
                Transform your windows with style and functionality
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Window Covering Services</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive window treatment solutions for every need
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
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Choose Our Window Coverings?</h2>
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
                  src="/lovable-uploads/34f6cc41-2bb7-4553-bd88-ed9c043c479a.png"
                  alt="Elegant sheer curtains filtering natural sunlight through a classic window frame, showcasing light control and privacy features in Vancouver WA"
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Windows?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get a free, no-obligation quote for your window covering project today.
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
    title: "Custom Blinds",
    description: "Tailored blind solutions for any window.",
    features: [
      "Vertical blinds",
      "Horizontal blinds",
      "Motorized options",
      "Custom sizing",
    ],
  },
  {
    title: "Designer Shades",
    description: "Elegant shade options for every style.",
    features: [
      "Roman shades",
      "Cellular shades",
      "Solar shades",
      "Roller shades",
    ],
  },
  {
    title: "Commercial Solutions",
    description: "Window coverings for business spaces.",
    features: [
      "Large-scale projects",
      "Energy efficiency",
      "Automated systems",
      "Maintenance services",
    ],
  },
];

const benefits = [
  {
    title: "Energy Efficiency",
    description: "Save on heating and cooling costs with insulating window treatments.",
  },
  {
    title: "Light Control",
    description: "Precise control over natural light and privacy.",
  },
  {
    title: "Custom Design",
    description: "Perfectly fitted solutions for any window size or shape.",
  },
  {
    title: "Smart Home Integration",
    description: "Motorized options that work with your smart home system.",
  },
];

export default WindowCoverings;
