
import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MapPin, ArrowRight, Phone } from "lucide-react";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import ServiceSchema from "@/components/ServiceSchema";

interface LocationLayoutProps {
  title: string;
  metaDescription: string;
  cityName: string;
  headerImage: string;
  content: {
    introduction: string;
    services: {
      title: string;
      description: string;
    }[];
    faqs: {
      question: string;
      answer: string;
    }[];
    testimonial?: {
      quote: string;
      author: string;
      role?: string;
    };
  };
}

const LocationLayout: React.FC<LocationLayoutProps> = ({
  title,
  metaDescription,
  cityName,
  headerImage,
  content
}) => {
  const hubspotFormUrl = "https://share-na2.hsforms.com/2ViHNhP0VREeNbPXGDMdneQ401s19";
  const phoneNumber = "(360) 555-1234"; // Replace with actual phone number

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`flooring ${cityName}, flooring installation ${cityName}, hardwood flooring ${cityName}, vinyl flooring ${cityName}, laminate flooring ${cityName}`} />
      </Helmet>

      <LocalBusinessSchema 
        name="FlooringQuotesVancouver"
        description={`Family-owned flooring company serving ${cityName} with expert installation of hardwood, vinyl, laminate, carpet, and tile flooring.`}
        areaServed={[cityName, "Vancouver", "Clark County"]}
      />
      
      <ServiceSchema 
        name={`Flooring Installation in ${cityName}, WA`}
        description={`Expert flooring installation services in ${cityName}, WA. We offer hardwood, vinyl, laminate, carpet, and tile flooring options.`}
        url={`https://flooringquotesvancouver.com/locations/${cityName.toLowerCase().replace(/\s+/g, '-')}`}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={headerImage}
              alt={`Professional flooring services in ${cityName}, WA showing modern hardwood installation`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="container-custom relative z-10 text-white">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Expert Flooring Services in {cityName}, WA
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-white/90">
                Professional installation, competitive pricing, and exceptional service
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white"
                  onClick={() => window.open(hubspotFormUrl, '_blank')}
                >
                  Get Your Free Quote in {cityName}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 hover:bg-white/20 text-white border-white flex items-center gap-2"
                  onClick={() => window.location.href = `tel:${phoneNumber.replace(/\D/g, '')}`}
                >
                  <Phone className="w-5 h-5" />
                  {phoneNumber}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="text-primary" />
                <h2 className="text-3xl font-bold">Flooring in {cityName}, Washington</h2>
              </div>
              
              <div className="prose max-w-none text-lg">
                <p>{content.introduction}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-primary/5">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center">Our Flooring Services in {cityName}</h2>
              
              <div className="space-y-8">
                {content.services.map((service, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-2">{service.description}</p>
                    <div className="mt-4">
                      <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
                        Learn More
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section (if available) */}
        {content.testimonial && (
          <section className="section-padding bg-white">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <div className="bg-primary/5 p-8 rounded-lg">
                  <p className="text-xl italic mb-4">"{content.testimonial.quote}"</p>
                  <p className="font-semibold">{content.testimonial.author}</p>
                  {content.testimonial.role && (
                    <p className="text-sm text-muted-foreground">{content.testimonial.role}</p>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQs Section */}
        <section className="section-padding bg-primary/5">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions About Flooring in {cityName}</h2>
              
              <div className="space-y-6">
                {content.faqs.map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Space in {cityName}?</h2>
              <p className="text-lg text-white/90 mb-8">
                Get a free, no-obligation quote for your flooring project today.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.open(hubspotFormUrl, '_blank')}
              >
                Request Free Quote in {cityName} <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LocationLayout;
