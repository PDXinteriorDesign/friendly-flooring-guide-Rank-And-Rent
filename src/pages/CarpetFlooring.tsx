
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CarpetFlooring = () => {
  const hubspotFormUrl = "https://share-na2.hsforms.com/2ViHNhP0VREeNbPXGDMdneQ401s19";
  
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
              src="/lovable-uploads/887d956a-3a5e-4d38-aa6c-ce047e779c94.png"
              alt="Modern bedroom with fresh carpet installation featuring elegant windows and palm leaf ceiling fan"
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
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Enhance Comfort and Style with Expert Carpet Services</h2>
                <p className="text-lg text-muted-foreground">
                  Transform your residential or commercial space with our comprehensive carpet services. From seamless installations to meticulous maintenance and repairs, we provide solutions tailored to your specific needs.
                </p>
              </div>

              <div className="space-y-16">
                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold mb-4">Residential Installation: Comfort and Style for Your Home</h3>
                  <p className="text-muted-foreground">
                    Create a cozy and inviting atmosphere with our expert carpet installation services. We begin with a professional measurement to ensure accurate material ordering and minimize waste. Our team assists you in selecting from a wide variety of styles, colors, and textures to match your home's décor. The expert installation process includes thorough subfloor preparation, precise carpet cutting, and seamless seaming. We utilize advanced stretching techniques to eliminate wrinkles and ensure a smooth, long-lasting finish. As a convenience, we also offer a furniture moving service to streamline the installation process.
                  </p>
                </div>

                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold mb-4">Commercial Installation: Durable and Efficient Solutions for Your Business</h3>
                  <p className="text-muted-foreground">
                    For businesses requiring durable and efficient flooring solutions, our commercial carpet installation services deliver exceptional results. We offer heavy-duty options designed to withstand high traffic and demanding environments. Our team prioritizes quick installation to minimize downtime and disruption to your business operations. We work efficiently to complete projects on schedule while maintaining the highest quality standards. We also offer customizable maintenance plans to help you preserve the appearance and longevity of your commercial carpets.
                  </p>
                </div>

                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold mb-4">Maintenance & Repair: Preserve the Beauty and Longevity of Your Carpets</h3>
                  <p className="text-muted-foreground">
                    Extend the life and enhance the appearance of your carpets with our professional maintenance & repair services. Our deep cleaning process utilizes powerful extraction equipment to remove dirt, allergens, and stains from deep within the carpet fibers. We specialize in stain removal, addressing a wide range of spills and blemishes. For damaged carpets, we offer patch repairs, seamlessly blending repaired areas with the surrounding carpet. We also provide preventive care services, such as applying protective treatments to resist stains and wear.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Choose Our Carpet Services?</h2>
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
                    We are dedicated to providing exceptional carpet services with a focus on quality, efficiency, and customer satisfaction. Our experienced technicians are trained in the latest installation and maintenance techniques, and we use high-quality materials and equipment to ensure lasting results. We are committed to exceeding your expectations and delivering a carpet experience that enhances the comfort and beauty of your space.
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] animate-fade-up rounded-lg overflow-hidden">
                <img
                  src="/lovable-uploads/532f4405-f7f0-4a24-9818-10fd610b1467.png"
                  alt="Close-up of soft, comfortable carpet flooring with a relaxed person enjoying its plush texture"
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
