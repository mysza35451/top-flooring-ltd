import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const ProductCard = ({ title, description, image, link = "/products" }: ProductCardProps) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden soft-shadow hover-lift group">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover smooth-transition group-hover:scale-110"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="font-heading font-bold text-xl text-card-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        <Button variant="ghost" asChild className="group/btn">
          <Link to={link} className="flex items-center space-x-2">
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 smooth-transition group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
