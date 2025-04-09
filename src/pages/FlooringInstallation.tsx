
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceSchema from "@/components/ServiceSchema";
import CanonicalTag from "@/components/CanonicalTag";

const FlooringInstallation = () => {
  const hubspotFormUrl = "https://share-na2.hsforms.com/2ViHNhP0VREeNbPXGDMdneQ401s19";

  return (
    <>
      <Helmet>
        <title>Flooring Installation Vancouver WA | Professional Installation Services</title>
        <meta name="description" content="Expert flooring installation in Vancouver WA. Professional installers for hardwood, vinyl, laminate, carpet & tile. Free in-home estimates, 15+ years experience & guaranteed craftsmanship." />
        <meta name="keywords" content="flooring installation vancouver wa, floor installers clark county, professional flooring installation, flooring contractors vancouver, hardwood flooring installation, vinyl plank installation" />
        <meta name="geo.region" content="US-WA" />
        <meta name="geo.placename" content="Vancouver" />
      </Helmet>
      
      <ServiceSchema 
        name="Flooring Installation Vancouver WA"
        description="Professional flooring installation services in Vancouver WA and throughout Clark County. Expert installers for all types of flooring including hardwood, vinyl, laminate, carpet and tile."
        image="/lovable-uploads/bbfdd965-b5d7-48b2-9fb9-77328e9e5c02.png"
        url="https://flooringquotesvancouver.com/flooring-installation-vancouver-wa"
      />
      
      <CanonicalTag url="https://flooringquotesvancouver.com/flooring-installation-vancouver-wa" />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/lovable-uploads/bbfdd965-b5d7-48b2-9fb9-77328e9e5c02.png"
              alt="Professional flooring installation in Vancouver WA by licensed contractor working on hardwood floors in a newly renovated home"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="container-custom relative z-10 text-white">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Professional Flooring Installation in Vancouver, WA
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-white/90">
                Expert installers with 15+ years experience in all flooring types throughout Clark County
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => window.open(hubspotFormUrl, '_blank')}
              >
                Get Your Free Vancouver Quote
              </Button>
            </div>
          </div>
        </section>

        {/* Installation Services Section */}
        <section className="section-padding bg-earth-100">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Comprehensive Flooring Installation Services</h2>
              <p className="text-lg text-muted-foreground">
                Choose from our complete range of professional installation services for any Vancouver home
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {installationServices.map((service, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-fade-up">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-wood-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    asChild
                  >
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Process Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Vancouver Flooring Installation Process</h2>
              <p className="text-lg text-muted-foreground">
                A seamless, hassle-free experience from start to finish
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="space-y-8">
                  {installationSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-white"
                    onClick={() => window.open(hubspotFormUrl, '_blank')}
                  >
                    Get a Free Quote Today
                  </Button>
                </div>
              </div>
              <div className="relative h-[500px] animate-fade-up rounded-lg overflow-hidden">
                <img
                  src="/lovable-uploads/df9914bd-1442-4316-9f1e-08a6a3da6c67.png"
                  alt="Flooring installation in progress in a Vancouver WA home, showing professional installers working on vinyl plank flooring"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vancouver-Specific Content */}
        <section className="section-padding bg-earth-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Vancouver's Unique Flooring Installation Considerations</h2>
              <div className="prose max-w-none">
                <p>
                  Vancouver, Washington's climate presents specific challenges and considerations for flooring installation. With annual rainfall averaging 42 inches and high humidity during winter months, moisture-resistant flooring solutions are essential for many Clark County homes, especially those near the Columbia River and in areas like Felida and Hazel Dell.
                </p>
                <p>
                  Our team of Vancouver flooring installers understands these local challenges. We've completed over 1,200 installations throughout Clark County, from historic homes in downtown Vancouver to new construction in east Vancouver developments.
                </p>
                <p>
                  Unlike big box stores, our local expertise means we'll recommend flooring materials that truly perform in our Pacific Northwest environment—whether you're dealing with basements in the Vancouver Heights area prone to moisture or looking for the perfect solution for your Cascade Highlands home.
                </p>
                <h3>Flooring Solutions for Every Vancouver Neighborhood</h3>
                <p>
                  From Fischer's Landing to Lincoln, from Minnehaha to Evergreen Highlands, our Vancouver WA flooring installation services are tailored to meet the specific needs of your neighborhood and home type. We understand the architectural differences between Vancouver's diverse areas and provide customized recommendations based on your specific location.
                </p>
                <p>
                  All our installations include proper subfloor preparation—crucial in older Vancouver homes—and use installation methods specifically adapted to local environmental conditions. This attention to detail is why we've become Clark County's preferred flooring installation company.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Common questions about our Vancouver flooring installation services
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-wood-100">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Vancouver Home?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get a free, no-obligation flooring installation quote today. Our Vancouver team is ready to help you make the perfect choice for your home and budget.
              </p>
              <Button 
                size="lg" 
                className="bg-wood-500 hover:bg-wood-600 text-white"
                onClick={() => window.open(hubspotFormUrl, '_blank')}
              >
                Request Free Vancouver Quote <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const installationServices = [
  {
    title: "Hardwood Flooring Installation",
    description: "Expert installation of solid and engineered hardwood.",
    features: [
      "Precise installation techniques",
      "Multiple wood species available",
      "Custom staining options",
      "Perfect for Vancouver homes",
    ],
    link: "/hardwood-flooring-vancouver-wa",
  },
  {
    title: "Vinyl Flooring Installation",
    description: "Professional LVP and sheet vinyl installation.",
    features: [
      "100% waterproof options",
      "Quick installation process",
      "Ideal for bathrooms & kitchens",
      "Wide selection of styles",
    ],
    link: "/vinyl-flooring-vancouver-wa",
  },
  {
    title: "Laminate Flooring Installation",
    description: "Affordable and durable laminate solutions.",
    features: [
      "High-quality materials",
      "Scratch-resistant options",
      "Fast installation timeline",
      "Great for active households",
    ],
    link: "/laminate-flooring-vancouver-wa",
  },
  {
    title: "Tile Flooring Installation",
    description: "Custom tile work for any space.",
    features: [
      "Precision cutting & placement",
      "Professional grouting",
      "Waterproofing",
      "Multiple pattern options",
    ],
    link: "/tile-flooring-vancouver-wa",
  },
  {
    title: "Carpet Installation",
    description: "Professional carpet installation services.",
    features: [
      "Perfect seam matching",
      "Proper stretching techniques",
      "Variety of padding options",
      "Stain-resistant treatments",
    ],
    link: "/carpet-installation-vancouver-wa",
  },
  {
    title: "Commercial Flooring",
    description: "Durable solutions for Vancouver businesses.",
    features: [
      "High-traffic materials",
      "After-hours installation",
      "ADA compliant options",
      "Maintenance programs",
    ],
    link: "/flooring-installation-vancouver-wa",
  },
];

const installationSteps = [
  {
    title: "Free In-Home Consultation",
    description: "Our Vancouver flooring specialist visits your home to measure, discuss options, and provide personalized recommendations based on your space and lifestyle.",
  },
  {
    title: "Selection & Estimate",
    description: "Choose from our extensive selection of flooring materials. Receive a detailed, transparent estimate with no hidden fees or surprises.",
  },
  {
    title: "Preparation",
    description: "We properly prepare your space, including furniture removal if needed, and assessment of the subfloor to ensure perfect installation conditions.",
  },
  {
    title: "Professional Installation",
    description: "Our experienced Clark County installers use industry-best practices and techniques to ensure your new flooring is installed perfectly.",
  },
  {
    title: "Final Inspection & Cleanup",
    description: "We thoroughly inspect the completed work and clean up completely, leaving you with beautiful new floors ready to enjoy.",
  },
];

const faqs = [
  {
    question: "How long does flooring installation take in a Vancouver, WA home?",
    answer: "Installation timelines vary based on the type of flooring and square footage. For an average Vancouver home (1,500-2,000 sq ft), hardwood installation typically takes 3-5 days, vinyl 1-3 days, laminate 1-2 days, and tile 3-7 days. We provide specific timelines during your free consultation based on your unique project."
  },
  {
    question: "Do you handle furniture removal when installing new flooring?",
    answer: "Yes, we offer complete furniture removal and replacement services for Vancouver homeowners. Our careful team will properly protect and temporarily relocate your furniture during installation and return everything once your new floors are complete."
  },
  {
    question: "What makes you different from big box stores in Vancouver?",
    answer: "Unlike big box stores that subcontract to various installers, we employ our own professional, background-checked installation team with an average of 15+ years experience. We're locally owned, understand Vancouver's specific climate considerations, and provide personalized service with direct communication throughout your project."
  },
  {
    question: "How do you handle subfloor issues common in older Vancouver homes?",
    answer: "Many older Vancouver homes have subfloor challenges that big box installers might miss. Our process includes thorough subfloor inspection and preparation. We can address issues like uneven concrete, moisture problems, or damaged wood subflooring to ensure your new floors perform perfectly for years to come."
  },
  {
    question: "What's the best flooring for Vancouver's rainy climate?",
    answer: "For Vancouver's wet climate, we often recommend luxury vinyl plank, waterproof laminate, or properly sealed tile for moisture-prone areas. The best choice depends on your specific neighborhood, home construction, and lifestyle needs. Our free consultation includes moisture testing if needed for optimal recommendations."
  },
];

export default FlooringInstallation;
