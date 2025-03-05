
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CarpetCTASectionProps {
  hubspotFormUrl: string;
}

const CarpetCTASection = ({ hubspotFormUrl }: CarpetCTASectionProps) => {
  return (
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
  );
};

export default CarpetCTASection;
