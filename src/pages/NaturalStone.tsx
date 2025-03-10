
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import ServiceSchema from "@/components/ServiceSchema";
import CanonicalTag from "@/components/CanonicalTag";

const NaturalStone = () => {
  return (
    <>
      <Helmet>
        <title>Natural Stone Flooring Vancouver WA | Marble, Granite & Slate Installation</title>
        <meta name="description" content="Luxury natural stone flooring installation in Vancouver WA. Expert installation of marble, granite, travertine, and slate. Local stone flooring specialists with 15+ years experience. Create timeless elegance in your Clark County home." />
        <meta name="keywords" content="natural stone flooring Vancouver WA, marble flooring installation, granite floors Vancouver, travertine installation Clark County, slate flooring contractors Vancouver" />
        <meta name="geo.region" content="US-WA" />
        <meta name="geo.placename" content="Vancouver" />
      </Helmet>
      
      <ServiceSchema 
        name="Natural Stone Flooring Installation Vancouver WA"
        description="Premium natural stone flooring services in Vancouver WA. Expert installation of marble, granite, travertine, and slate with free consultations and long-lasting durability."
        image="/lovable-uploads/b2b0388e-d34b-4577-8444-a5f7bacd095d.png"
        url="https://floorvancouver.com/natural-stone-vancouver-wa"
      />
      
      <CanonicalTag url="https://floorvancouver.com/natural-stone-vancouver-wa" />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/lovable-uploads/b2b0388e-d34b-4577-8444-a5f7bacd095d.png"
              alt="Luxury Vancouver WA kitchen featuring marble stone flooring, modern gray cabinets, and white countertops - premium natural stone installation by local experts"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="container-custom relative z-10 text-white">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Premium Natural Stone for Vancouver Homes
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-white/90">
                Elevate your Clark County space with the elegance of natural stone
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Natural Stone Services</h2>
              <p className="text-lg text-muted-foreground">
                Expert installation and care for all types of natural stone flooring
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
        <section className="section-padding" id="stone-benefits">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Choose Natural Stone in Vancouver, WA?</h2>
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
                  src="/lovable-uploads/cebd4a71-d60b-42c1-9a4a-d7534b7d5645.png"
                  alt="Elegant white marble stone tiles with natural veining patterns and textured surface - perfect for luxury Vancouver WA homes and businesses"
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Vancouver Space?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get a free, no-obligation quote for your natural stone project today. Serving all of Clark County including Vancouver, Ridgefield, and Battle Ground.
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
    title: "Stone Installation",
    description: "Expert installation of all natural stone types.",
    features: [
      "Marble installation",
      "Granite flooring",
      "Travertine fitting",
      "Slate installation",
    ],
  },
  {
    title: "Commercial Services",
    description: "Natural stone for commercial spaces.",
    features: [
      "Large-scale projects",
      "Custom designs",
      "Durability focus",
      "Timeline guarantees",
    ],
  },
  {
    title: "Maintenance & Restoration",
    description: "Keep your stone floors beautiful.",
    features: [
      "Regular sealing",
      "Professional cleaning",
      "Damage repair",
      "Restoration services",
    ],
  },
];

const benefits = [
  {
    title: "Unique Beauty",
    description: "Each stone is one-of-a-kind, adding natural beauty to your space.",
  },
  {
    title: "Lasting Value",
    description: "Natural stone can last for generations with proper care.",
  },
  {
    title: "Temperature Control",
    description: "Natural stone helps regulate room temperature year-round.",
  },
  {
    title: "Eco-Friendly",
    description: "A sustainable choice that requires no artificial manufacturing.",
  },
];

export default NaturalStone;
