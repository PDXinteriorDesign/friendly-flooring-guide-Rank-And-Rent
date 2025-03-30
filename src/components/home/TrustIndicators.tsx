
import { Star, Shield, Clock, Ruler, Award, Users } from "lucide-react";

export const TrustIndicators = () => {
  return (
    <section className="py-8 bg-primary/5">
      <div className="container-custom">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Why Homeowners Choose Us</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
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
          <div className="flex flex-col items-center">
            <Award className="w-8 h-8 text-primary mb-2" />
            <div className="font-semibold">Best Price Guarantee</div>
            <p className="text-sm text-muted-foreground">Competitive Rates</p>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-8 h-8 text-primary mb-2" />
            <div className="font-semibold">Local Experts</div>
            <p className="text-sm text-muted-foreground">Vancouver Owned</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
