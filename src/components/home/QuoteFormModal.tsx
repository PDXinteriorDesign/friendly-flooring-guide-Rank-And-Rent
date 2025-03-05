
import { Button } from "@/components/ui/button";

interface QuoteFormModalProps {
  trigger?: React.ReactNode;
  buttonText?: string;
  className?: string;
}

const QuoteFormModal = ({ 
  trigger, 
  buttonText = "Get Your Free Quote",
  className 
}: QuoteFormModalProps) => {
  // Direct link to HubSpot form instead of embedding
  const hubspotFormUrl = "https://share-na2.hsforms.com/2ViHNhP0VREeNbPXGDMdneQ401s19";
  
  return (
    <>
      {trigger || (
        <Button 
          size="lg" 
          className={`bg-primary hover:bg-primary/90 text-white ${className}`}
          onClick={() => window.open(hubspotFormUrl, '_blank')}
        >
          {buttonText}
        </Button>
      )}
    </>
  );
};

export default QuoteFormModal;
