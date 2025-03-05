
import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CanonicalTag from "@/components/CanonicalTag";
import FAQSchema from "@/components/FAQSchema";

const Resources = () => {
  // Create FAQ items for schema markup
  const allFaqs = maintenanceGuides.flatMap(guide => {
    return [
      {
        question: `What is the best way to clean ${guide.title.split(" ")[0]} floors daily?`,
        answer: guide.dailyCare[0]
      },
      {
        question: `How often should I professionally clean my ${guide.title.split(" ")[0]} floors in Vancouver?`,
        answer: guide.regularMaintenance[guide.regularMaintenance.length - 1]
      }
    ];
  });

  return (
    <>
      <Helmet>
        <title>Flooring Maintenance Guides | Vancouver WA Flooring Care Resources</title>
        <meta name="description" content="Comprehensive Vancouver WA flooring maintenance guides for hardwood, vinyl, and carpet. Expert tips for extending your floor's lifespan in the Pacific Northwest climate. Local maintenance advice from Clark County's flooring specialists." />
        <meta name="keywords" content="flooring maintenance Vancouver WA, floor care guide Clark County, hardwood maintenance Pacific Northwest, vinyl floor care Vancouver, carpet care Washington, Vancouver WA flooring maintenance" />
        <meta name="geo.region" content="US-WA" />
        <meta name="geo.placename" content="Vancouver" />
      </Helmet>
      
      <CanonicalTag url="https://floorvancouver.com/resources" />
      
      <FAQSchema faqs={allFaqs} />

      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Vancouver WA Flooring Maintenance Guides</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert maintenance guides for Vancouver homeowners to protect and preserve their flooring investment. Trusted by Clark County residents since 2005.
          </p>
        </div>

        {/* Maintenance Guides */}
        {maintenanceGuides.map((guide, index) => (
          <section key={index} className="max-w-4xl mx-auto mb-16" id={`${guide.title.split(" ")[0].toLowerCase()}-maintenance`}>
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <FileText className="h-8 w-8 text-wood-500 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">{guide.title}</h2>
                  <p className="text-muted-foreground mb-6">{guide.description}</p>
                  <p className="text-muted-foreground mb-6">{guide.seoParagraph}</p>
                </div>
              </div>

              <Accordion type="single" collapsible className="mb-6">
                {/* Daily Care Section */}
                <AccordionItem value="daily-care">
                  <AccordionTrigger className="text-xl font-semibold">Daily Care for {guide.title.split(" ")[0]} Floors</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 mt-3">
                      {guide.dailyCare.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="font-medium text-wood-500">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Regular Maintenance Section */}
                <AccordionItem value="regular-maintenance">
                  <AccordionTrigger className="text-xl font-semibold">Regular {guide.title.split(" ")[0]} Maintenance</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 mt-3">
                      {guide.regularMaintenance.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="font-medium text-wood-500">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Prevention Tips Section */}
                <AccordionItem value="prevention-tips">
                  <AccordionTrigger className="text-xl font-semibold">Vancouver-Specific {guide.title.split(" ")[0]} Prevention Tips</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 mt-3">
                      {guide.preventionTips.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="font-medium text-wood-500">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Link to={guide.serviceLink} className="inline-block">
                <Button variant="outline" className="mt-4">
                  Explore Our Vancouver {guide.serviceLinkText} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>
          </section>
        ))}
      </div>
    </>
  );
};

const maintenanceGuides = [
  {
    title: "Hardwood Floor Maintenance in Vancouver WA",
    description: "Keep your hardwood floors looking beautiful for years to come with these essential care instructions.",
    seoParagraph: "Living in the Pacific Northwest means your hardwood floors face unique challenges. Our maintenance guide helps local homeowners protect their floors from Vancouver's rain and humidity while preserving their beauty and value. Whether you're in Salmon Creek or downtown Vancouver, these tips will help your hardwood floors stay gorgeous through every season.",
    serviceLink: "/hardwood-flooring-vancouver-wa",
    serviceLinkText: "Hardwood Flooring Services",
    dailyCare: [
      "Sweep or vacuum regularly to remove dust and debris",
      "Clean spills immediately with a slightly damp cloth",
      "Use only cleaning products specifically designed for hardwood floors",
      "Avoid wet mopping as excess water can damage wood"
    ],
    regularMaintenance: [
      "Clean with a professional hardwood floor cleaner monthly",
      "Reapply wood floor polish every 2-3 months",
      "Check for signs of wear or damage regularly",
      "Professional deep cleaning recommended annually"
    ],
    preventionTips: [
      "Use furniture pads under all furniture legs",
      "Place mats at all exterior doors to catch dirt and moisture",
      "Keep pet nails trimmed to prevent scratches",
      "Maintain consistent indoor humidity levels (35-55%)",
      "Avoid wearing high heels or sports cleats on hardwood floors"
    ]
  },
  {
    title: "Vinyl Flooring Care Guide for Vancouver Homes",
    description: "Maintain the appearance and durability of your vinyl flooring with these proper care techniques.",
    seoParagraph: "Modern vinyl flooring is a popular choice among local homeowners, and for good reason. It stands up beautifully to our Northwest weather while providing exceptional durability. From handling morning dew tracked in from Esther Short Park to managing winter moisture, these maintenance tips will help your vinyl floors look great year-round.",
    serviceLink: "/vinyl-flooring-vancouver-wa",
    serviceLinkText: "Vinyl Flooring Services",
    dailyCare: [
      "Sweep or vacuum with a soft brush attachment daily",
      "Wipe up spills promptly to prevent staining",
      "Use a damp mop with warm water for regular cleaning",
      "Avoid abrasive cleaners that can scratch the surface"
    ],
    regularMaintenance: [
      "Deep clean with approved vinyl floor cleaner monthly",
      "Check for loose edges or seams regularly",
      "Inspect for any signs of water damage or lifting",
      "Professional cleaning recommended every 12-18 months"
    ],
    preventionTips: [
      "Use protective mats at entrances and heavy traffic areas",
      "Install furniture protectors under heavy items",
      "Avoid rolling heavy appliances directly on the floor",
      "Protect from direct sunlight to prevent fading",
      "Clean up spills immediately to prevent slipping hazards"
    ]
  },
  {
    title: "Carpet Care and Maintenance for Vancouver Weather",
    description: "Extend the life of your carpet and maintain its appearance with these essential care guidelines.",
    seoParagraph: "Here in Vancouver, carpets need special attention during our rainy season and humid summers. Our guide helps you protect your investment with practical solutions for common challenges local homeowners face. From muddy pet paws to winter salt residue, we'll show you how to keep your carpets fresh and inviting throughout the year.",
    serviceLink: "/carpet-installation-vancouver-wa",
    serviceLinkText: "Carpet Flooring Services",
    dailyCare: [
      "Vacuum high-traffic areas daily",
      "Blot spills immediately - never rub or scrub",
      "Remove small debris promptly to prevent matting",
      "Use doormats to reduce dirt tracked onto carpeting"
    ],
    regularMaintenance: [
      "Deep vacuum entire carpet area weekly",
      "Professionally clean every 12-18 months",
      "Rotate furniture periodically to prevent wear patterns",
      "Spot clean stains using appropriate carpet cleaners"
    ],
    preventionTips: [
      "Remove shoes when possible to reduce dirt and wear",
      "Keep a carpet cleaning kit ready for emergencies",
      "Use carpet protector sprays in high-traffic areas",
      "Maintain proper indoor humidity to prevent mold",
      "Consider professional scotchgard treatment annually"
    ]
  }
];

export default Resources;
