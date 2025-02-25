
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HardwoodFlooring = () => {
  return (
    <>
      <Helmet>
        <title>Hardwood Flooring Installation & Refinishing Vancouver WA | Expert Installers</title>
        <meta name="description" content="Professional hardwood flooring installation & refinishing in Vancouver & Ridgefield, WA. Expert installers for new floors, refinishing, and repairs. Free quotes available!" />
        <meta name="keywords" content="hardwood floor installation Vancouver, hardwood floor refinishing Vancouver, engineered hardwood flooring Vancouver, oak hardwood flooring, maple hardwood flooring, hardwood floor repair Vancouver" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/lovable-uploads/7832e803-7dac-4dd4-b1a8-4e65feea97e6.png"
              alt="Professional hardwood flooring installation in progress showing light wood planks and leveling spacers"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="container-custom relative z-10 text-white">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Transform Your Home with Expert Hardwood Flooring Services
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-white/90">
                Unlock the timeless elegance and lasting value of hardwood floors with our comprehensive suite of services
              </p>
              <Button size="lg" className="bg-wood-500 hover:bg-wood-600 text-white">
                Get Your Free Quote
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-earth-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're envisioning a stunning new installation, seeking to revitalize existing floors through professional refinishing, or require meticulous repair services, our team of skilled artisans delivers unparalleled craftsmanship.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Services Sections */}
        <section className="py-16" id="installation">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto space-y-16">
              {/* New Installation Section */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">New Installation: Crafting Your Dream Floors - Step-by-Step</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Experience the luxury of brand-new hardwood with our expert installation services. We begin with a thorough subfloor inspection and preparation, ensuring a level and stable base. This may involve leveling uneven spots, repairing damaged areas, or installing a moisture barrier.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Next, we carefully acclimate the hardwood, allowing it to adjust to your home's humidity levels, preventing future warping or gapping. From classic oak and maple to exotic Brazilian cherry, we offer a wide variety of premium wood options.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our expert installation techniques include precise measurement, cutting, and nailing or gluing, depending on the chosen method. We specialize in custom patterns like herringbone or chevron, requiring meticulous planning and execution to create a truly unique and personalized space. Finally, we sand and finish the newly installed floors, ensuring a smooth and durable surface.
                </p>
              </div>

              {/* Refinishing Section */}
              <div className="space-y-6" id="refinishing">
                <h2 className="text-3xl font-bold">Refinishing: Revive and Restore - Detailed Process</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Breathe new life into your worn hardwood floors with our professional refinishing services. Our process begins with multiple passes of sanding, using progressively finer grits to remove the old finish, scratches, and imperfections. We meticulously clean the floor to remove all dust and debris.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Explore our diverse staining options to achieve the perfect hue, applying the stain evenly and allowing it to dry thoroughly. We then apply multiple coats of high-quality finish, such as polyurethane, for lasting protection and shine.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Benefit from our precise scratch repair and color matching expertise, ensuring seamless blending of repaired areas with the rest of the floor. Finally, we perform a final inspection to ensure a flawless finish.
                </p>
              </div>

              {/* Repair Services Section */}
              <div className="space-y-6" id="repairs">
                <h2 className="text-3xl font-bold">Repair Services: Preserve and Protect - Addressing Specific Issues</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Don't let damaged hardwood detract from your home's beauty. Our repair services address a range of issues with precision. For board replacement, we carefully remove the damaged board, match the wood species and grain, and install a new board, seamlessly integrating it into the existing floor.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  For water damage repair, we assess the extent of the damage, remove affected boards, dry the subfloor, and replace damaged sections. For gap filling, we use specialized fillers that match the wood's color and texture, preventing drafts and maintaining the floor's integrity.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  For scratch repair, we use specialized techniques and fillers to minimize the appearance of scratches, followed by touch-up finishing. We utilize proven techniques and high-quality materials to seamlessly restore your floors to their original splendor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-earth-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We're committed to exceeding your expectations with exceptional quality and customer service. Our attention to detail, combined with our passion for hardwood flooring, ensures a result that you'll cherish for years to come.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We utilize dust containment systems to minimize mess during sanding and prioritize eco-friendly finishing products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-wood-100">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get a free, no-obligation quote for your hardwood flooring project today.
              </p>
              <Button size="lg" className="bg-wood-500 hover:bg-wood-600 text-white">
                Request Free Quote <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HardwoodFlooring;
