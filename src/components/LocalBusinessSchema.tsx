
import { Helmet } from "react-helmet";

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  image?: string;
  telephone?: string;
  address?: string;
  priceRange?: string;
  areaServed?: string[];
  sameAs?: string[];
  url?: string;
  openingHours?: string[];
  reviewCount?: number;
  ratingValue?: number;
}

export const LocalBusinessSchema = ({
  name = "FloorVancouver",
  description = "Professional flooring installation in Vancouver, WA offering hardwood, vinyl, laminate, carpet, tile and natural stone services.",
  image = "/lovable-uploads/bbfdd965-b5d7-48b2-9fb9-77328e9e5c02.png",
  telephone = "(123) 456-7890",
  address = "Vancouver, WA 98660",
  priceRange = "$$",
  areaServed = ["Vancouver", "Ridgefield", "Salmon Creek", "Battle Ground", "Camas", "Washougal", "Clark County"],
  sameAs = [],
  url = "https://floorvancouver.com",
  openingHours = ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
  reviewCount = 56,
  ratingValue = 4.8
}: LocalBusinessSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": name,
    "description": description,
    "image": image,
    "telephone": telephone,
    "priceRange": priceRange,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Vancouver",
      "addressRegion": "WA",
      "postalCode": "98660",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.6387,
      "longitude": -122.6615
    },
    "areaServed": areaServed.map(area => ({
      "@type": "City",
      "name": area
    })),
    "url": url,
    "sameAs": sameAs,
    "openingHoursSpecification": openingHours.map(hours => {
      const [days, timeRange] = hours.split(" ");
      const [opens, closes] = timeRange.split("-");
      return {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": days,
        "opens": opens,
        "closes": closes
      };
    }),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "reviewCount": reviewCount
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
