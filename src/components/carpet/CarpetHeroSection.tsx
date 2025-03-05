
import { Button } from "@/components/ui/button";

interface CarpetHeroSectionProps {
  hubspotFormUrl: string;
}

const CarpetHeroSection = ({ hubspotFormUrl }: CarpetHeroSectionProps) => {
  return (
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
  );
};

export default CarpetHeroSection;
