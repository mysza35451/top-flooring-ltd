import { CheckCircle2, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import laminateHero from "@/assets/laminate-hero.jpg";
import laminate1 from "@/assets/laminate.jpg";

const Laminate = () => {
  const benefits = [
    "Highly scratch and wear resistant",
    "Affordable alternative to real wood",
    "Easy to clean and maintain",
    "Perfect for high-traffic areas",
    "Water-resistant options available",
    "Quick and easy installation",
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
          src={laminateHero}
          alt="Laminate Flooring"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-foreground animate-fade-in">
              Laminate Flooring
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Affordable, versatile, and easy to maintain – ideal for busy households. Laminate floors offer realistic wood-look finishes with excellent durability and scratch resistance.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">See Our Laminate Options</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center text-foreground">
            Why Choose Laminate Flooring?
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

      {/* Lifestyle Photos */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8 text-center text-foreground">
            Perfect for High-Traffic Spaces
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Laminate flooring is the ideal choice for busy family homes, kitchens, hallways, and commercial spaces where durability and easy maintenance are essential.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Family Living Rooms", desc: "Scratch-resistant for active households" },
              { title: "Kitchen Areas", desc: "Easy to clean spills and stains" },
              { title: "Hallways & Entrances", desc: "Withstands heavy foot traffic" },
              { title: "Home Offices", desc: "Durable under furniture and chairs" },
              { title: "Rental Properties", desc: "Cost-effective and long-lasting" },
              { title: "Commercial Spaces", desc: "Professional look with durability" },
            ].map((space, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden soft-shadow hover-lift">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={laminate1}
                    alt={space.title}
                    className="w-full h-full object-cover smooth-transition hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg mb-2 text-card-foreground">
                    {space.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{space.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center text-foreground">
            Featured Products
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

export default Laminate;
