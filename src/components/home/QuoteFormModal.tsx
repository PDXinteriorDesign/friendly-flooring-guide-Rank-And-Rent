
import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface QuoteFormModalProps {
  trigger?: React.ReactNode;
  buttonText?: string;
}

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          region: string;
          portalId: string;
          formId: string;
          target: string | HTMLElement;
        }) => void;
      };
    };
  }
}

const QuoteFormModal = ({ trigger, buttonText = "Get Your Free Quote" }: QuoteFormModalProps) => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only initialize the form when the dialog is open
    if (isOpen && formContainerRef.current) {
      // Clean up any existing form
      formContainerRef.current.innerHTML = '';
      
      // Use HubSpot's JavaScript API to create the form with a more reliable approach
      const checkHubSpotInterval = setInterval(() => {
        if (window.hbspt) {
          clearInterval(checkHubSpotInterval);
          
          try {
            window.hbspt.forms.create({
              region: "na2",
              portalId: "241947693",
              formId: "5621cd84-fd15-4447-8d6c-f5c60cc76779",
              target: formContainerRef.current
            });
            console.log("HubSpot form initialized successfully");
          } catch (error) {
            console.error("Error initializing HubSpot form:", error);
          }
        }
      }, 200); // Increased interval for better reliability

      // Clear interval on component unmount
      return () => {
        clearInterval(checkHubSpotInterval);
      };
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
            {buttonText}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Get Your Free Flooring Quote</DialogTitle>
        </DialogHeader>
        <div className="mt-4" ref={formContainerRef}></div>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteFormModal;
