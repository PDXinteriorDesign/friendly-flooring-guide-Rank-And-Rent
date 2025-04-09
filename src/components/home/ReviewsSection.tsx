
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const reviews = [
  {
    name: "Jennifer M.",
    location: "Vancouver, WA",
    text: "We had our entire downstairs redone in luxury vinyl plank and couldn't be happier. The team was professional, efficient, and the floors look amazing. They understood exactly what we needed for our active family.",
    rating: 5,
  },
  {
    name: "Mike T.",
    location: "Salmon Creek, WA",
    text: "Best flooring company in Clark County! They installed hardwood throughout our main level and the attention to detail was impressive. Fair pricing and they completed the work ahead of schedule.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    location: "Felida, WA",
    text: "We compared several Vancouver flooring companies before choosing FlooringQuotesVancouver for our laminate installation. Their knowledge of products that work well in our rainy climate was invaluable.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Vancouver Homeowners Say</h2>
          <p className="text-lg text-muted-foreground">
            Join hundreds of satisfied customers throughout Clark County
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-4 italic text-gray-700">"{review.text}"</p>
              <div className="font-medium">{review.name}</div>
              <div className="text-sm text-muted-foreground">{review.location}</div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span>4.9 average rating from 86 Vancouver WA customers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
