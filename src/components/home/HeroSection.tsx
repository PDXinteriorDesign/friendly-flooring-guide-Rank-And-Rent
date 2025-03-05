
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
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
            Vancouver's Trusted Flooring Experts
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-white/90">
            Professional flooring installation, competitive pricing, and exceptional service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Get Your Free Quote
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
