
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
          onFormReady?: () => void;
          onFormSubmit?: () => void;
          onFormFailure?: (error: any) => void;
        }) => void;
      };
    };
  }
}

const QuoteFormModal = ({ trigger, buttonText = "Get Your Free Quote" }: QuoteFormModalProps) => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [formLoadError, setFormLoadError] = useState<string | null>(null);

  useEffect(() => {
    // Only initialize the form when the dialog is open
    if (isOpen && formContainerRef.current) {
      // Clean up any existing form
      formContainerRef.current.innerHTML = '';
      setFormLoadError(null);
      
      let attempts = 0;
      const maxAttempts = 5;
      
      // Use HubSpot's JavaScript API to create the form with a more reliable approach
      const checkHubSpotInterval = setInterval(() => {
        attempts++;
        
        if (window.hbspt) {
          clearInterval(checkHubSpotInterval);
          
          try {
            window.hbspt.forms.create({
              region: "na2",
              portalId: "241947693",
              formId: "5621cd84-fd15-4447-8d6c-f5c60cc76779",
              target: formContainerRef.current,
              onFormReady: () => {
                console.log("HubSpot form loaded and ready");
              },
              onFormFailure: (error) => {
                console.error("HubSpot form failed to submit:", error);
                setFormLoadError("There was an issue with the form. Please try again later or call us directly.");
              }
            });
            console.log("HubSpot form initialized successfully");
          } catch (error) {
            console.error("Error initializing HubSpot form:", error);
            setFormLoadError("There was an issue loading the form. Please refresh the page or contact us directly.");
          }
        } else if (attempts >= maxAttempts) {
          clearInterval(checkHubSpotInterval);
          console.error("HubSpot form script failed to load after multiple attempts");
          setFormLoadError("Unable to load the form. Please try again later or contact us directly at (360) 555-1234.");
        }
      }, 500); // Increased interval for better reliability

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
        <div className="mt-4" ref={formContainerRef}>
          {formLoadError && (
            <div className="p-4 text-center">
              <p className="text-red-500">{formLoadError}</p>
              <p className="mt-2">Please call us at (360) 555-1234 for immediate assistance.</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteFormModal;
