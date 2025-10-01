import { Shield, Ruler, Droplets, Sparkles, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import oakHerringboneHero from "@/assets/oak-herringbone-hero.jpg";

const OakHerringbone = () => {
  const specs = [
    { label: "Wood Species", value: "European Oak" },
    { label: "Pattern", value: "Herringbone" },
    { label: "Finish", value: "Matte Lacquer" },
    { label: "Dimensions", value: "70 x 350 x 14mm" },
    { label: "Warranty", value: "25 Years" },
    { label: "Installation", value: "Glue Down" },
  ];

  const benefits = [
    {
      icon: Sparkles,
      title: "Distinctive Design",
      description: "Classic herringbone pattern creates timeless elegance and visual interest in any space.",
    },
    {
      icon: Shield,
      title: "Exceptional Durability",
      description: "Premium European Oak ensures long-lasting performance and can be refinished multiple times.",
    },
    {
      icon: Droplets,
      title: "Underfloor Heating Compatible",
      description: "Engineered construction makes it suitable for use with underfloor heating systems.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Full-Width Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={oakHerringboneHero}
          alt="Oak Herringbone Classic Flooring"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 text-foreground animate-fade-in">
            Oak Herringbone Classic
          </h1>
          <p className="text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Timeless Elegance for Every Home
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">Get a Quote for Oak Herringbone Classic</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/products">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-center text-foreground">
              Product Description
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center mb-12">
              Our Oak Herringbone Classic brings timeless sophistication to any interior. Featuring warm honey oak tones and the iconic herringbone pattern, this flooring creates a stunning focal point that combines traditional charm with modern quality. Each plank is carefully selected and finished with a protective matte lacquer that enhances the natural grain while providing excellent durability.
            </p>

            {/* Specifications Grid */}
            <div className="bg-card rounded-lg p-8 soft-shadow mb-12">
              <h3 className="font-heading font-bold text-2xl mb-6 text-center text-primary">
                Technical Specifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specs.map((spec, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Ruler className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">{spec.label}:</span>{" "}
                      <span className="text-muted-foreground">{spec.value}</span>
                    </div>
                  </div>
                ))}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 soft-shadow hover-lift text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-background">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-background/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote on Oak Herringbone Classic flooring
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="outline" asChild className="bg-background text-primary hover:bg-background/90">
              <Link to="/contact">Get Your Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-background/10 text-background border-background hover:bg-background/20">
              <Link to="/products/solid-wood">View Solid Wood Category</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OakHerringbone;
