import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductImage {
  src: string;
  alt: string;
}

interface Product {
  id: string;
  slug: string;
  title: string;
  category: string;
  pattern: string;
  finish: string;
  thicknessMm: number;
  widthMm: number;
  lengthMm: number;
  underfloorHeating: boolean;
  warrantyYears: number;
  pricePerM2: number;
  priceRrpPerM2: number;
  discountPercent: number;
  stockStatus: string;
  dispatchNote?: string;
  images: ProductImage[];
  badges: string[];
  sampleAvailable: boolean;
}

interface ProductCardProps {
  product: Product;
  onRequestSample: (product: Product) => void;
}

export const ProductCard = ({ product, onRequestSample }: ProductCardProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (product.images.length > 1) {
      setImageIndex(1);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setImageIndex(0);
  };

  const productDetailLink = `/products/${product.slug}`;

  return (
    <Card
      className="group overflow-hidden hover-lift transition-all duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.images[imageIndex]?.src || "/placeholder.svg"}
          alt={product.images[imageIndex]?.alt || product.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.discountPercent > 0 && (
            <Badge className="bg-accent text-accent-foreground font-semibold">
              {product.discountPercent}% Off
            </Badge>
          )}
          {product.badges.map((badge) => (
            <Badge key={badge} variant="secondary">
              {badge}
            </Badge>
          ))}
        </div>

        {product.dispatchNote && (
          <Badge className="absolute top-3 right-3 bg-primary/90 text-primary-foreground">
            {product.dispatchNote.replace("Dispatch From ", "")}
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <Link to={productDetailLink}>
          <h3 className="font-heading font-semibold text-base line-clamp-2 mb-2 hover:text-primary transition-colors">
            {product.title}
          </h3>
        </Link>
        
        <p className="text-sm text-muted-foreground mb-3">
          {product.widthMm}mm × {product.lengthMm}mm · {product.thicknessMm}mm
        </p>

        {/* Mini specs on hover */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isHovered ? "max-h-20 opacity-100 mb-3" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• {product.finish} finish</li>
            <li>• {product.underfloorHeating ? "UFH compatible" : "Not for UFH"}</li>
            <li>• {product.warrantyYears}-year warranty</li>
          </ul>
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-bold text-foreground">
            £{product.pricePerM2.toFixed(2)}
          </span>
          <span className="text-sm text-muted-foreground">/m²</span>
          {product.discountPercent > 0 && (
            <span className="text-sm text-muted-foreground line-through ml-auto">
              £{product.priceRrpPerM2.toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex flex-col gap-2">
        <Button asChild className="w-full" size="sm">
          <Link to={productDetailLink}>Product Details</Link>
        </Button>
        {product.sampleAvailable && (
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={() => onRequestSample(product)}
          >
            Order Free Sample
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
