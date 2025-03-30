
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceSchema from "@/components/ServiceSchema";

const FloorRefinishing = () => {
  const hubspotFormUrl = "https://share-na2.hsforms.com/2ViHNhP0VREeNbPXGDMdneQ401s19";
  
  return (
    <>
      <Helmet>
        <title>Floor Refinishing Vancouver WA | Hardwood Restoration Experts</title>
        <meta name="description" content="Professional floor refinishing in Vancouver, WA. Transform worn, damaged hardwood floors with our skilled refinishing services. Free quotes and satisfaction guaranteed!" />
        <meta name="keywords" content="floor refinishing Vancouver WA, hardwood floor refinishing, wood floor restoration, floor sanding Vancouver, hardwood floor repair, floor staining Vancouver WA" />
      </Helmet>

      <ServiceSchema 
        name="Floor Refinishing Services Vancouver WA" 
        description="Professional hardwood floor refinishing, restoration and repair services in Vancouver, WA. We bring worn floors back to life with expert sanding, staining and finishing."
        image="/lovable-uploads/7832e803-7dac-4dd4-b1a8-4e65feea97e6.png"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/lovable-uploads/887d956a-3a5e-4d38-aa6c-ce047e779c94.png"
              alt="Professional floor refinishing in progress showing sanding and restoration of worn hardwood"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container-custom relative z-10 text-white">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Professional Floor Refinishing in Vancouver
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-white/90">
                Revitalize your worn hardwood floors with our expert refinishing services
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => window.open(hubspotFormUrl, '_blank')}
              >
                Get Your Free Quote
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-primary/5">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Floor Refinishing Services</h2>
              <p className="text-lg text-muted-foreground">
                We restore the beauty of your hardwood floors through our comprehensive refinishing process
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {refinishingServices.map((service, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-fade-up">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Floor Refinishing Process</h2>
                <p className="text-lg text-muted-foreground">
                  We follow a meticulous, step-by-step approach to restore your hardwood floors to their original beauty
                </p>
              </div>

              <div className="space-y-12">
                {refinishingProcess.map((step, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3 flex justify-center">
                      <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-3xl font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-primary/5">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">What Our Clients Say</h2>
                <p className="text-lg text-muted-foreground">
                  Hear from Vancouver homeowners who have transformed their floors with our refinishing services
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="italic mb-4">{testimonial.quote}</p>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
                <p className="text-lg text-muted-foreground">
                  Get answers to common questions about our floor refinishing services
                </p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Restore Your Hardwood Floors?</h2>
              <p className="text-lg text-white/90 mb-8">
                Get a free, no-obligation quote for your floor refinishing project today.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.open(hubspotFormUrl, '_blank')}
              >
                Request Free Quote <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const refinishingServices = [
  {
    title: "Complete Floor Refinishing",
    description: "Comprehensive refinishing to restore badly worn or damaged hardwood floors.",
    features: [
      "Deep sanding to remove old finish",
      "Repairs for damaged boards",
      "Custom stain application",
      "Multiple coats of premium finish"
    ],
  },
  {
    title: "Screening & Recoating",
    description: "Light refinishing for floors with minor wear but no deep damage.",
    features: [
      "Surface abrasion of existing finish",
      "No stain or color changes",
      "Fresh topcoat application",
      "Extends floor life between full refinishes"
    ],
  },
  {
    title: "Stain & Color Changes",
    description: "Transform the look of your hardwood floors with custom staining options.",
    features: [
      "Custom stain matching",
      "Lighten or darken existing floors",
      "Water-based or oil-based options",
      "Low-VOC environmentally friendly products"
    ],
  },
];

const refinishingProcess = [
  {
    title: "Initial Assessment & Preparation",
    description: "We begin with a thorough evaluation of your floor condition, discussing your goals and preferences. Our team prepares the space by removing furniture, protecting adjacent areas, and ensuring proper ventilation."
  },
  {
    title: "Sanding & Board Repairs",
    description: "Using professional-grade equipment, we sand the floor to remove the old finish and imperfections. We repair or replace damaged boards and fill gaps as needed to create a smooth, even surface."
  },
  {
    title: "Stain Application",
    description: "If desired, we apply custom-mixed stains to achieve your preferred color and look. We offer a wide range of options from light natural tones to rich, dark finishes, all applied with expert technique for even coverage."
  },
  {
    title: "Finish Application",
    description: "We apply multiple coats of premium polyurethane or other finishes, allowing proper drying time between coats. Options include matte, satin, semi-gloss, or high-gloss sheens to match your preference."
  },
  {
    title: "Final Inspection & Cleanup",
    description: "After the final coat has cured, we perform a detailed inspection to ensure perfect results. We clean the workspace thoroughly and provide you with maintenance instructions to keep your newly refinished floors looking beautiful."
  }
];

const testimonials = [
  {
    quote: "Our 75-year-old oak floors looked terrible after decades of wear. FlooringQuotesVancouver brought them back to life! The transformation was amazing - they look better than new while keeping the character of the wood.",
    name: "David & Karen T.",
    location: "Vancouver, WA"
  },
  {
    quote: "The refinishing team was professional, clean, and finished on time. They minimized dust throughout the process and the floors in our 1940s home look absolutely stunning. Highly recommend!",
    name: "Michelle R.",
    location: "Hazel Dell, WA"
  }
];

const faqs = [
  {
    question: "How long does the floor refinishing process take?",
    answer: "For an average-sized room (about 250 square feet), the complete refinishing process typically takes 3-5 days. This includes sanding, staining, applying multiple coats of finish, and allowing proper drying time between steps. Larger areas or floors requiring extensive repairs may take longer. We provide a specific timeline during your initial consultation."
  },
  {
    question: "Can you match my existing hardwood floor color?",
    answer: "Yes, we specialize in custom color matching. Our refinishing experts can match your existing floor color or help you select a new stain color that complements your home's interior design. We can provide sample areas to test different stain options before proceeding with the entire floor."
  },
  {
    question: "How much does floor refinishing cost in Vancouver?",
    answer: "In the Vancouver, WA area, professional hardwood floor refinishing typically costs between $3-$7 per square foot depending on the condition of the floors, specific services needed, and the type of finish selected. We provide detailed, no-obligation quotes after assessing your specific flooring situation."
  },
  {
    question: "How often should hardwood floors be refinished?",
    answer: "Most hardwood floors need complete refinishing every 7-10 years, but this varies based on traffic, care, and the thickness of the wood. Homes with pets or high foot traffic may need refinishing more frequently. A screen and recoat (light refinishing) can be done every 3-5 years to extend the life between full refinishings."
  }
];

export default FloorRefinishing;
