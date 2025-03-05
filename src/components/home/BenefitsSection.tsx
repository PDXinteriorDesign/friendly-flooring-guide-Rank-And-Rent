
import { CheckCircle2 } from "lucide-react";

interface BenefitItem {
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  benefits: BenefitItem[];
}

export const BenefitsSection = ({ benefits }: BenefitsSectionProps) => {
  return (
    <section className="section-padding bg-primary/5">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Choose Us?</h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] animate-fade-up">
            <img
              src="/lovable-uploads/abb299e5-c1cd-4330-b799-8d758ea07e2d.png"
              alt="Professional flooring installation in Vancouver WA"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
