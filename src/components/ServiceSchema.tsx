
import { Helmet } from "react-helmet";

interface ServiceSchemaProps {
  name: string;
  description: string;
  image?: string;
  provider?: string;
  areaServed?: string[];
  url?: string;
}

export const ServiceSchema = ({
  name,
  description,
  image,
  provider = "FloorVancouver",
  areaServed = ["Vancouver", "Ridgefield", "Salmon Creek", "Battle Ground", "Camas", "Washougal", "Clark County"],
  url
}: ServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "image": image,
    "provider": {
      "@type": "LocalBusiness",
      "name": provider
    },
    "areaServed": areaServed.map(area => ({
      "@type": "City",
      "name": area
    })),
    "url": url
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default ServiceSchema;
