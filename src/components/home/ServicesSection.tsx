
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceItem {
  title: string;
  description: string;
  link: string;
}

interface ServicesSectionProps {
  services: ServiceItem[];
}

export const ServicesSection = ({ services }: ServicesSectionProps) => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Expert Flooring Services in Vancouver, WA</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive flooring solutions for homes and businesses throughout Clark County since 2005
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-fade-up">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Button variant="outline" className="w-full" asChild>
                <Link to={service.link}>Learn More</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
