import { Shield, Palette, Leaf, Award, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import smokedOakHero from "@/assets/smoked-oak-hero.jpg";

const SmokedOakHeritage = () => {
  const features = [
    {
      icon: Palette,
      title: "One-of-a-Kind Character",
      description: "The smoking process creates unique color variations in each plank, ensuring no two floors are exactly alike. Rich browns and deep charcoal tones blend beautifully.",
    },
    {
      icon: Shield,
      title: "Textured Brushed Finish",
      description: "Hand-brushed surface enhances the natural grain and adds tactile depth, while the oil finish penetrates deep to protect and nourish the wood.",
    },
    {
      icon: Leaf,
      title: "Rustic Heritage Appeal",
      description: "Perfect for creating warm, inviting spaces with authentic character. Ideal for both traditional period properties and contemporary rustic designs.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "European Oak smoked using traditional methods, then carefully finished to preserve its natural beauty while providing lasting durability.",
    },
  ];

  const specs = [
    { label: "Wood Species", value: "European Oak (Smoked)" },
    { label: "Surface Treatment", value: "Brushed & Oiled" },
    { label: "Dimensions", value: "190 x 1900 x 18mm" },
    { label: "Warranty", value: "25 Years" },
    { label: "Grade", value: "Rustic (Character Grade)" },
    { label: "Installation", value: "Secret Nail / Glue Down" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={smokedOakHero}
          alt="Smoked Oak Heritage Flooring"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link to="/products">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
          </Button>
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-4 text-foreground animate-fade-in">
            Smoked Oak Heritage
          </h1>
          <p className="text-2xl text-muted-foreground mb-8">
            Character and Depth for Distinctive Interiors
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our Smoked Oak Heritage flooring is created through a time-honored smoking process that reacts with the natural tannins in the oak, producing stunning dark tones throughout the entire thickness of the wood. This means the rich coloration won't fade or wear away over time. The brushed texture and natural oil finish create a floor with genuine rustic character and warmth, perfect for homes that celebrate authenticity and craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center text-foreground">
            Distinctive Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 soft-shadow hover-lift"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-2 text-card-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8 text-center text-foreground">
              Technical Specifications
            </h2>
            <div className="bg-card rounded-lg p-8 soft-shadow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specs.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-border">
                    <span className="font-semibold text-foreground">{spec.label}</span>
                    <span className="text-muted-foreground text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Badge */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
              <Award className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">
              25-Year Manufacturer Warranty
            </h3>
            <p className="text-muted-foreground">
              Backed by our confidence in quality and craftsmanship. Your investment is protected for decades to come.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-background">
            Experience Smoked Oak Heritage in Your Home
          </h2>
          <p className="text-xl text-background/90 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your project and receive expert guidance
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="outline" asChild className="bg-background text-primary hover:bg-background/90">
              <Link to="/contact">Enquire About Smoked Oak Heritage Flooring</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-background/10 text-background border-background hover:bg-background/20">
              <Link to="/products/parquet">View Parquet Category</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmokedOakHeritage;
