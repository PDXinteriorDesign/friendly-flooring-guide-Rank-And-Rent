
import { Star, Shield, Clock, Ruler } from "lucide-react";

export const TrustIndicators = () => {
  return (
    <section className="py-8 bg-primary/5">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <Star className="w-8 h-8 text-primary mb-2" />
            <div className="font-semibold">5-Star Rated</div>
            <p className="text-sm text-muted-foreground">On Google Reviews</p>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="w-8 h-8 text-primary mb-2" />
            <div className="font-semibold">Licensed & Insured</div>
            <p className="text-sm text-muted-foreground">Professional Service</p>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="w-8 h-8 text-primary mb-2" />
            <div className="font-semibold">15+ Years</div>
            <p className="text-sm text-muted-foreground">Industry Experience</p>
          </div>
          <div className="flex flex-col items-center">
            <Ruler className="w-8 h-8 text-primary mb-2" />
            <div className="font-semibold">Free Estimates</div>
            <p className="text-sm text-muted-foreground">No Obligation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
