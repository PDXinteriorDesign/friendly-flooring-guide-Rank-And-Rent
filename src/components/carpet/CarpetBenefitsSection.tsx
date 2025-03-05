
import { CheckCircle2 } from "lucide-react";

interface CarpetBenefit {
  title: string;
  description: string;
}

interface CarpetBenefitsSectionProps {
  benefits: CarpetBenefit[];
}

const CarpetBenefitsSection = ({ benefits }: CarpetBenefitsSectionProps) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Choose Our Carpet Services?</h2>
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
            <div className="mt-8">
              <p className="text-muted-foreground">
                We are dedicated to providing exceptional carpet services with a focus on quality, efficiency, and customer satisfaction. Our experienced technicians are trained in the latest installation and maintenance techniques, and we use high-quality materials and equipment to ensure lasting results. We are committed to exceeding your expectations and delivering a carpet experience that enhances the comfort and beauty of your space.
              </p>
            </div>
          </div>
          <div className="relative h-[500px] animate-fade-up rounded-lg overflow-hidden">
            <img
              src="/lovable-uploads/532f4405-f7f0-4a24-9818-10fd610b1467.png"
              alt="Close-up of soft, comfortable carpet flooring with a relaxed person enjoying its plush texture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarpetBenefitsSection;
