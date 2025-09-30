import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  content: string;
  rating?: number;
}

const TestimonialCard = ({ name, location, content, rating = 5 }: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-lg p-6 soft-shadow hover-lift">
      <div className="flex space-x-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-card-foreground italic mb-4 leading-relaxed">"{content}"</p>
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-card-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
