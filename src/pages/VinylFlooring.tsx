
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceSchema from "@/components/ServiceSchema";
import CanonicalTag from "@/components/CanonicalTag";

const VinylFlooring = () => {
  return (
    <>
      <Helmet>
        <title>Vinyl Flooring Installation Vancouver WA | LVP & SPC Vinyl Experts</title>
        <meta name="description" content="Expert vinyl flooring installation in Vancouver & Ridgefield, WA. Luxury vinyl plank (LVP), SPC vinyl, and 100% waterproof options. Local installers with 15+ years experience. Free in-home consultations!" />
        <meta name="keywords" content="vinyl flooring installation Vancouver WA, luxury vinyl plank Vancouver, SPC vinyl flooring Clark County, waterproof vinyl flooring, vinyl plank flooring installation, Vancouver WA flooring company" />
        <meta name="geo.region" content="US-WA" />
        <meta name="geo.placename" content="Vancouver" />
      </Helmet>
      
      <ServiceSchema 
        name="Vinyl Flooring Installation Vancouver WA"
        description="Professional vinyl flooring installation in Vancouver WA. Luxury vinyl plank (LVP), sheet vinyl, and waterproof options professionally installed with expert craftsmanship and free quotes."
        image="/lovable-uploads/df9914bd-1442-4316-9f1e-08a6a3da6c67.png"
        url="https://floorvancouver.com/vinyl-flooring-vancouver-wa"
      />
      
      <CanonicalTag url="https://floorvancouver.com/vinyl-flooring-vancouver-wa" />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden" id="vinyl-hero">
          <div className="absolute inset-0 z-0">
            <img
              src="/lovable-uploads/df9914bd-1442-4316-9f1e-08a6a3da6c67.png"
              alt="Modern vinyl plank flooring installation in Vancouver WA home, showcasing wood-look luxury vinyl with waterproof properties by local installers"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="container-custom relative z-10 text-white">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Vancouver's Vinyl Flooring Experts
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-white/90">
                Durable, waterproof, and stylish vinyl flooring solutions for every Clark County home
              </p>
              <Button size="lg" className="bg-wood-500 hover:bg-wood-600 text-white">
                Get Your Free Vancouver Quote
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
        <section className="section-padding bg-white" id="vinyl-options">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Transform Your Vancouver Home with Versatile Vinyl Flooring</h2>
                <p className="text-lg text-muted-foreground">
                  Discover the perfect blend of style, durability, and affordability with our comprehensive vinyl flooring services. From the luxurious wood-look of Luxury Vinyl Plank (LVP) to the seamless practicality of Sheet Vinyl and the versatile design options of Vinyl Tile, we offer solutions to elevate any Clark County space.
                </p>
              </div>

              <div className="space-y-16">
                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold mb-4">Luxury Vinyl Plank (LVP): Premium Wood-Look Flooring for Vancouver Homes</h3>
                  <p className="text-muted-foreground">
                    Experience the warmth and beauty of hardwood with the exceptional resilience of LVP. Our premium LVP installation process begins with a meticulous subfloor preparation, ensuring a smooth and level surface. We then carefully lay each plank, utilizing a click-lock system or adhesive for a secure and seamless fit. The realistic wood appearance is achieved through high-definition printing and textured surfaces, mimicking natural wood grain. The durable construction of LVP provides superior resistance to scratches, dents, and wear, while its waterproof protection makes it ideal for Vancouver kitchens and bathrooms, standing up perfectly to our Pacific Northwest climate.
                  </p>
                </div>

                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold mb-4">Sheet Vinyl: Seamless Solution for Vancouver's Moisture-Prone Areas</h3>
                  <p className="text-muted-foreground">
                    For large areas or moisture-prone environments like bathrooms, our sheet vinyl installation offers a practical and cost-effective solution for Vancouver homes. We start by precisely measuring the space and preparing the subfloor. The sheet vinyl is then carefully rolled out and adhered to the floor, ensuring a seamless installation that prevents water seepage. Its moisture-resistant properties make it perfect for areas exposed to spills and humidity, especially important in our rainy Pacific Northwest climate. With a variety of patterns and textures available, you can achieve the desired aesthetic without sacrificing functionality in your Clark County home.
                  </p>
                </div>

                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold mb-4">Vinyl Tile: Custom Options for Vancouver WA Homeowners</h3>
                  <p className="text-muted-foreground">
                    Unleash your creativity with our diverse range of vinyl tile options for Vancouver homes. Our installation process involves precise measurement and layout, allowing for custom patterns and designs that reflect your unique style. Each tile is individually adhered to the subfloor, providing a stable and long-lasting surface. The easy replacement feature allows for quick and simple repairs or updates as needed. The water-resistant properties of vinyl tile make it suitable for various rooms in your Vancouver home, including kitchens and bathrooms. With a wide selection of colors, patterns, and textures, you can create a unique and personalized space that withstands our local climate.
                  </p>
                </div>
              </div>

              <div className="mt-16 text-center">
                <Link to="/blog/are-vinyl-floors-waterproof">
                  <Button variant="outline" size="lg">
                    Learn More About Waterproof Vinyl Options <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Choose Us?</h2>
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
                    We pride ourselves on delivering exceptional vinyl flooring installations with meticulous attention to detail and superior craftsmanship. Our experienced installers ensure a flawless finish, and we use high-quality materials to guarantee lasting performance. We prioritize customer satisfaction and strive to exceed your expectations with every project.
                  </p>
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
        <section className="section-padding bg-wood-100" id="contact">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Upgrade Your Vancouver Floors?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get a free, no-obligation quote for your vinyl flooring project today. Serving Vancouver, Ridgefield, Salmon Creek, Battle Ground and all of Clark County.
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
