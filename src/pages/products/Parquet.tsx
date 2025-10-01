import { CheckCircle2, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import parquetHero from "@/assets/parquet-hero.jpg";
import parquet1 from "@/assets/parquet.jpg";

const Parquet = () => {
  const patterns = [
    {
      name: "Herringbone",
      description: "Classic zigzag pattern that adds timeless elegance and visual interest to any room.",
    },
    {
      name: "Chevron",
      description: "Contemporary V-shaped pattern with continuous lines for a modern, sophisticated look.",
    },
    {
      name: "Versailles",
      description: "Ornate French pattern with intricate geometry, perfect for luxury spaces and grand rooms.",
    },
    {
      name: "Basket Weave",
      description: "Traditional woven appearance that creates texture and depth in classic interiors.",
    },
    {
      name: "Brick Bond",
      description: "Simple yet striking linear pattern that works beautifully in both modern and traditional settings.",
    },
    {
      name: "Hexagon",
      description: "Geometric honeycomb pattern that adds unique character and contemporary style.",
    },
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
          src={parquetHero}
          alt="Parquet Flooring"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-foreground animate-fade-in">
              Parquet Flooring
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Luxury patterns and stunning visual appeal for truly exceptional spaces. From classic herringbone to contemporary chevron, parquet floors add character and sophistication.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Book a Parquet Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Patterns Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center text-foreground">
            Types of Parquet Patterns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {patterns.map((pattern, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 soft-shadow hover-lift"
              >
                <h3 className="font-heading font-bold text-xl mb-3 text-primary">
                  {pattern.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pattern.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8 text-center text-foreground">
            London Parquet Projects
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Explore our portfolio of stunning parquet installations across London homes, from elegant period properties to contemporary luxury apartments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
            {/* Large featured images */}
            <div className="aspect-[4/3] overflow-hidden rounded-lg soft-shadow hover-lift">
              <img
                src={parquet1}
                alt="Herringbone parquet in London townhouse"
                className="w-full h-full object-cover smooth-transition hover:scale-110"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-lg soft-shadow hover-lift">
              <img
                src={parquetHero}
                alt="Chevron parquet in modern apartment"
                className="w-full h-full object-cover smooth-transition hover:scale-110"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Smaller gallery images */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="aspect-square overflow-hidden rounded-lg soft-shadow hover-lift">
                <img
                  src={parquet1}
                  alt={`Parquet flooring project ${item}`}
                  className="w-full h-full object-cover smooth-transition hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center text-foreground">
            Why Choose Parquet?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Creates stunning visual impact and focal points",
              "Adds significant value to luxury properties",
              "Timeless patterns that never go out of style",
              "Can be customized to match your unique aesthetic",
              "Available in various wood species and finishes",
              "Expert installation ensures perfect pattern alignment",
            ].map((benefit, index) => (
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

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center text-foreground">
            Featured Parquet Products
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

export default Parquet;
