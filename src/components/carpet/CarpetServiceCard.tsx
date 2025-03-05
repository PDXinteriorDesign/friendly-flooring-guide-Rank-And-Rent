
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface CarpetServiceCardProps {
  title: string;
  description: string;
  features: string[];
}

const CarpetServiceCard = ({ title, description, features }: CarpetServiceCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-up">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-wood-500" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default CarpetServiceCard;
