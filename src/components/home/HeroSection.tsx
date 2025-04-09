
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

export const HeroSection = () => {
  const hubspotFormUrl = "https://share-na2.hsforms.com/2ViHNhP0VREeNbPXGDMdneQ401s19";
  const phoneNumber = "(360) 555-1234"; // Replace with actual phone number
  
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/bbfdd965-b5d7-48b2-9fb9-77328e9e5c02.png"
          alt="Premium flooring showroom in Vancouver WA featuring hardwood and luxury vinyl samples"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Get Flooring Quotes in Vancouver, WA – Fast & Free
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-white/90">
            Compare top-rated flooring options for your home from Vancouver's trusted installers. Free estimates within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => window.open(hubspotFormUrl, '_blank')}
            >
              Get Your Free Quote
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
          <div className="mt-4 text-white/90">
            Serving Vancouver, Camas, Battle Ground, Ridgefield, & all of Clark County
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg"
          onClick={() => window.open(hubspotFormUrl, '_blank')}
        >
          Get a Quote
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
