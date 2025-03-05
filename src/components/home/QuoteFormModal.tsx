
import { useEffect, useRef } from "react";
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

const QuoteFormModal = ({ trigger, buttonText = "Get Your Free Quote" }: QuoteFormModalProps) => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clean up any existing form
    if (formContainerRef.current) {
      formContainerRef.current.innerHTML = '';
      
      // Create the HubSpot form container
      const formContainer = document.createElement('div');
      formContainer.className = "hs-form-frame";
      formContainer.setAttribute("data-region", "na2");
      formContainer.setAttribute("data-form-id", "5621cd84-fd15-4447-8d6c-f5c60cc76779");
      formContainer.setAttribute("data-portal-id", "241947693");
      
      formContainerRef.current.appendChild(formContainer);
    }
  }, []);

  return (
    <Dialog>
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
