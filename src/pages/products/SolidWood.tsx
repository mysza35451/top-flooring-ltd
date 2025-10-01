import { CheckCircle2, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import solidWoodHero from "@/assets/solid-wood-hero.jpg";
import solidWood1 from "@/assets/solid-wood.jpg";

const SolidWood = () => {
  const benefits = [
    "Exceptional durability - lasts for generations",
    "Natural beauty with unique grain patterns",
    "Can be sanded and refinished multiple times",
    "Adds significant value to your property",
    "Timeless aesthetic that never goes out of style",
    "100% natural and sustainable material",
  ];

  const featuredProducts = [
    { name: "Oak Herringbone Classic", path: "/products/oak-herringbone-classic" },
    { name: "Walnut Wide Plank", path: "/products/walnut-wide-plank" },
    { name: "Maple Natural Finish", path: "/products/maple-natural-finish" },
    { name: "Smoked Oak Heritage", path: "/products/smoked-oak-heritage" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={solidWoodHero}
          alt="Solid Wood Flooring"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-foreground animate-fade-in">
              Solid Wood Flooring
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Classic, durable, and elegant – perfect for creating timeless interiors. Our solid wood floors are sourced from premium suppliers and can be sanded and refinished multiple times, making them a long-lasting investment for your home.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Get a Quote for Solid Wood Flooring</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center text-foreground">
            Why Choose Solid Wood Flooring?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-6 bg-card rounded-lg soft-shadow hover-lift"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center text-foreground">
            Solid Wood Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square overflow-hidden rounded-lg soft-shadow hover-lift">
                <img
                  src={solidWood1}
                  alt={`Solid wood flooring project ${item}`}
                  className="w-full h-full object-cover smooth-transition hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center text-foreground">
            Featured Solid Wood Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {featuredProducts.map((product) => (
              <Link
                key={product.path}
                to={product.path}
                className="group bg-card rounded-lg p-6 soft-shadow hover-lift text-center"
              >
                <h3 className="font-heading font-bold text-lg mb-3 text-card-foreground">
                  {product.name}
                </h3>
                <div className="flex items-center justify-center space-x-2 text-primary">
                  <span className="text-sm">View Details</span>
                  <ArrowRight className="w-4 h-4 smooth-transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/products">Back to All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolidWood;
