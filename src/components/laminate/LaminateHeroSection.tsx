
import { Button } from "@/components/ui/button";

interface LaminateHeroSectionProps {
  hubspotFormUrl: string;
}

const LaminateHeroSection = ({ hubspotFormUrl }: LaminateHeroSectionProps) => {
  return (
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

export default LaminateHeroSection;
