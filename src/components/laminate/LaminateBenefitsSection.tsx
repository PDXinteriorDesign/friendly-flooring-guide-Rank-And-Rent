
import { CheckCircle2 } from "lucide-react";

interface LaminateBenefit {
  title: string;
  description: string;
}

interface LaminateBenefitsSectionProps {
  benefits: LaminateBenefit[];
}

const LaminateBenefitsSection = ({ benefits }: LaminateBenefitsSectionProps) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Choose Laminate Flooring?</h2>
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
          </div>
          <div className="relative h-[500px] animate-fade-up rounded-lg overflow-hidden">
            <img
              src="/lovable-uploads/a72f9a3c-7821-458d-afbf-eb71e54afa1d.png"
              alt="Premium gray laminate flooring with realistic wood grain pattern, showcasing professional installation and durable finish for Vancouver WA homes"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaminateBenefitsSection;
