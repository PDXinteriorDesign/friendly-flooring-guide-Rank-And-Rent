
import { MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section className="section-padding bg-primary/5" id="contact">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Contact Vancouver's Trusted Flooring Experts</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today for a free consultation and quote. We serve Vancouver, WA and surrounding areas including Ridgefield, Salmon Creek, and Battle Ground.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <a href="mailto:flooringquotesvancouver@gmail.com" className="flex flex-col items-center p-6 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              <Mail className="w-6 h-6 mb-3" />
              <span className="font-semibold">Email Us</span>
              <span className="text-sm opacity-90">flooringquotesvancouver@gmail.com</span>
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
  );
};

export default ContactSection;
