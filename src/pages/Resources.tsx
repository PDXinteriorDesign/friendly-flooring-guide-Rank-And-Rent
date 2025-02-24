
import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Resources = () => {
  return (
    <>
      <Helmet>
        <title>Flooring Maintenance Guides | Vancouver WA Flooring Care</title>
        <meta name="description" content="Comprehensive flooring maintenance guides for hardwood, vinyl, and carpet flooring. Learn how to properly care for and maintain your floors in Vancouver WA." />
        <meta name="keywords" content="flooring maintenance, floor care guide, hardwood maintenance, vinyl floor care, carpet care, Vancouver WA flooring" />
      </Helmet>

      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Vancouver WA Flooring Maintenance Guides</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert maintenance guides for Vancouver homeowners to protect and preserve their flooring investment. Trusted by Clark County residents since 1995.
          </p>
        </div>

        {/* Maintenance Guides */}
        {maintenanceGuides.map((guide, index) => (
          <section key={index} className="max-w-4xl mx-auto mb-16">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <FileText className="h-8 w-8 text-wood-500 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">{guide.title}</h2>
                  <p className="text-muted-foreground mb-6">{guide.description}</p>
                  <p className="text-muted-foreground mb-6">{guide.seoParagraph}</p>
                </div>
              </div>

              <Accordion type="single" collapsible>
                {/* Daily Care Section */}
                <AccordionItem value="daily-care">
                  <AccordionTrigger className="text-xl font-semibold">Daily Care</AccordionTrigger>
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
                  <AccordionTrigger className="text-xl font-semibold">Regular Maintenance</AccordionTrigger>
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
                  <AccordionTrigger className="text-xl font-semibold">Prevention Tips</AccordionTrigger>
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
