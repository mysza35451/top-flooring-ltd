import { CheckCircle2, ArrowRight, Layers } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import engineeredWoodHero from "@/assets/engineered-wood-hero.jpg";
import engineeredWood1 from "@/assets/engineered-wood.jpg";

const EngineeredWood = () => {
  const benefits = [
    "Safe for use with underfloor heating systems",
    "Dimensionally stable - resists warping",
    "Eco-friendly with sustainable sourcing",
    "Real wood veneer top layer for authentic look",
    "Perfect for apartments and modern homes",
    "Easier installation than solid wood",
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
          src={engineeredWoodHero}
          alt="Engineered Wood Flooring"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-foreground animate-fade-in">
              Engineered Wood Flooring
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Stability meets style – ideal for modern London homes. Engineered wood offers the beauty of real wood with dimensional stability, making it perfect for underfloor heating and varying humidity levels.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Request a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Layered Construction */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center text-foreground">
            Layered Construction for Superior Stability
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-8 soft-shadow">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Layers className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-2 text-primary">Top Layer - Real Wood Veneer</h3>
                    <p className="text-muted-foreground">
                      2-6mm of premium hardwood provides authentic appearance and can be refinished.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Layers className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-2 text-primary">Core Layers - Stability</h3>
                    <p className="text-muted-foreground">
                      Multiple layers of wood or HDF arranged in opposing directions for dimensional stability.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Layers className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-2 text-primary">Base Layer - Support</h3>
                    <p className="text-muted-foreground">
                      Balanced bottom layer ensures the board stays flat and stable over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center text-foreground">
            Key Benefits
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
            Engineered Wood Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square overflow-hidden rounded-lg soft-shadow hover-lift">
                <img
                  src={engineeredWood1}
                  alt={`Engineered wood flooring project ${item}`}
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
            Featured Engineered Wood Products
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

export default EngineeredWood;
