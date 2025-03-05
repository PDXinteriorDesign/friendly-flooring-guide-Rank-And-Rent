
import CarpetServiceCard from "./CarpetServiceCard";

interface CarpetService {
  title: string;
  description: string;
  features: string[];
}

interface CarpetServicesSectionProps {
  services: CarpetService[];
}

const CarpetServicesSection = ({ services }: CarpetServicesSectionProps) => {
  return (
    <section className="section-padding bg-earth-100">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Carpet Services</h2>
          <p className="text-lg text-muted-foreground">
            Discover our comprehensive range of carpet installation and maintenance services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <CarpetServiceCard
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarpetServicesSection;
