
import { MapPin, Phone, Mail, CheckCircle2, Star, Ruler, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Flooring Vancouver WA | Top-Rated Flooring Installation Services</title>
        <meta name="description" content="Expert flooring installation in Vancouver, WA. Family-owned, locally operated flooring company offering hardwood, vinyl, laminate, and carpet installation. Free quotes!" />
        <meta name="keywords" content="flooring Vancouver WA, hardwood flooring Vancouver, vinyl flooring installation, laminate flooring Vancouver, carpet installation Vancouver WA" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/lovable-uploads/bbfdd965-b5d7-48b2-9fb9-77328e9e5c02.png"
              alt="Premium flooring showroom in Vancouver WA featuring hardwood and luxury vinyl samples"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="container-custom relative z-10 text-white">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Vancouver's Trusted Flooring Experts
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-white/90">
                Professional flooring installation, competitive pricing, and exceptional service
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Get Your Free Quote
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators Section */}
        <section className="py-8 bg-primary/5">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Star className="w-8 h-8 text-primary mb-2" />
                <div className="font-semibold">5-Star Rated</div>
                <p className="text-sm text-muted-foreground">On Google Reviews</p>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-8 h-8 text-primary mb-2" />
                <div className="font-semibold">Licensed & Insured</div>
                <p className="text-sm text-muted-foreground">Professional Service</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 text-primary mb-2" />
                <div className="font-semibold">15+ Years</div>
                <p className="text-sm text-muted-foreground">Industry Experience</p>
              </div>
              <div className="flex flex-col items-center">
                <Ruler className="w-8 h-8 text-primary mb-2" />
                <div className="font-semibold">Free Estimates</div>
                <p className="text-sm text-muted-foreground">No Obligation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Expert Flooring Services in Vancouver</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive flooring solutions for homes and businesses throughout Clark County
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-fade-up">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-primary/5">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Choose Us?</h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[500px] animate-fade-up">
                <img
                  src="/lovable-uploads/abb299e5-c1cd-4330-b799-8d758ea07e2d.png"
                  alt="Professional flooring installation in Vancouver WA"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get answers to common questions about our flooring services in Vancouver, WA
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-primary/5">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us today for a free consultation and quote. We serve Vancouver, WA and surrounding areas.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <a href="tel:+1234567890" className="flex flex-col items-center p-6 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                  <Phone className="w-6 h-6 mb-3" />
                  <span className="font-semibold">Call Us</span>
                  <span className="text-sm opacity-90">(123) 456-7890</span>
                </a>
                <a href="mailto:info@example.com" className="flex flex-col items-center p-6 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                  <Mail className="w-6 h-6 mb-3" />
                  <span className="font-semibold">Email Us</span>
                  <span className="text-sm opacity-90">info@example.com</span>
                </a>
                <div className="flex flex-col items-center p-6 rounded-lg bg-primary text-primary-foreground">
                  <MapPin className="w-6 h-6 mb-3" />
                  <span className="font-semibold">Visit Us</span>
                  <span className="text-sm opacity-90">Vancouver, WA</span>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Request a Quote
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const services = [
  {
    title: "Hardwood Flooring",
    description: "Premium hardwood installation and refinishing services for a timeless, elegant look.",
  },
  {
    title: "Luxury Vinyl",
    description: "Durable, water-resistant flooring perfect for any room in your home.",
  },
  {
    title: "Laminate Flooring",
    description: "Cost-effective solutions that don't compromise on style or durability.",
  },
];

const benefits = [
  {
    title: "Local Expertise",
    description: "Deep understanding of Vancouver's climate and housing styles.",
  },
  {
    title: "Family-Owned Business",
    description: "Personalized service and attention to detail on every project.",
  },
  {
    title: "Quality Guaranteed",
    description: "Premium materials and expert installation backed by our satisfaction guarantee.",
  },
  {
    title: "Transparent Pricing",
    description: "Honest, upfront quotes with no hidden fees or surprises.",
  },
];

const faqs = [
  {
    question: "How long does flooring installation typically take?",
    answer: "Installation time varies depending on the type of flooring and room size. A standard room (250-300 sq ft) typically takes 1-2 days for hardwood, 1 day for vinyl, and 1 day for carpet installation. We'll provide a specific timeline during your consultation."
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes! We provide free, no-obligation estimates for all our flooring services in Vancouver, WA and surrounding areas. Our expert will measure your space, discuss your preferences, and provide a detailed quote."
  },
  {
    question: "What brands of flooring do you carry?",
    answer: "We work with top industry manufacturers to provide high-quality flooring options including Shaw, Mohawk, Armstrong, and many others. We can help you select the best product that fits your style and budget."
  },
  {
    question: "Do you handle furniture moving during installation?",
    answer: "Yes, we offer furniture moving services as part of our installation process. Our team will carefully move your furniture before installation and return it afterward. Heavy or specialty items may require additional arrangements."
  },
  {
    question: "What kind of warranty do you offer?",
    answer: "We offer manufacturer warranties on all products plus our own labor warranty. Specific warranty terms vary by product, but typically range from 15-25 years for materials and 2 years for installation labor."
  },
  {
    question: "How should I prepare my home for installation?",
    answer: "Remove small items and valuables from the installation area, ensure clear access to the space, and maintain room temperature between 65-75°F for 48 hours before installation. We'll provide detailed preparation instructions before your installation date."
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes, we offer various financing options to help make your flooring project affordable. We work with several financing partners and can help you find the best payment plan for your budget."
  },
  {
    question: "How soon can you start my project?",
    answer: "Typically, we can schedule your installation within 1-2 weeks after your product selection and measurement appointment. Emergency services may be available for urgent situations."
  }
];

export default Index;
