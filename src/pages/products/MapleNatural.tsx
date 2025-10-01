import { Shield, Ruler, Sun, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import mapleHero from "@/assets/maple-natural-hero.jpg";

const MapleNatural = () => {
  const specs = [
    { label: "Wood Species", value: "Canadian Maple" },
    { label: "Finish", value: "Satin Lacquer" },
    { label: "Dimensions", value: "125 x 1800 x 15mm" },
    { label: "Warranty", value: "20 Years" },
    { label: "Installation", value: "Click System" },
    { label: "Janka Hardness", value: "1450 (Very Hard)" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Split Screen Layout */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Image Side */}
        <div className="relative min-h-[50vh] lg:min-h-screen lg:sticky lg:top-0">
          <img
            src={mapleHero}
            alt="Maple Natural Finish Flooring"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background/20 to-transparent" />
        </div>

        {/* Content Side */}
        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 bg-background">
          <div className="max-w-xl">
            <Button variant="ghost" size="sm" asChild className="mb-6">
              <Link to="/products">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Link>
            </Button>

            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
              Maple Natural Finish
            </h1>
            <p className="text-xl text-primary mb-6">
              Bright, Clean, and Contemporary
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Brighten your space with our Maple Natural Finish flooring. The light, blonde tones of Canadian Maple create an airy, Scandinavian-inspired aesthetic that's perfect for modern interiors. This flooring reflects natural light beautifully, making rooms feel larger and more inviting. The satin lacquer finish provides excellent scratch resistance while maintaining the wood's fresh, natural appearance.
            </p>

            {/* Specifications */}
            <div className="bg-muted/30 rounded-lg p-6 mb-8">
              <h3 className="font-heading font-bold text-xl mb-4 text-primary flex items-center">
                <Ruler className="w-5 h-5 mr-2" />
                Technical Specifications
              </h3>
              <div className="space-y-2">
                {specs.map((spec, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-border last:border-0">
                    <span className="text-foreground font-medium">{spec.label}</span>
                    <span className="text-muted-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              <h3 className="font-heading font-bold text-xl text-foreground">Why Choose Maple?</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-4 bg-card rounded-lg">
                  <Sun className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">Light Reflective</h4>
                    <p className="text-sm text-muted-foreground">
                      Brightens rooms and creates an airy, spacious feel
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-card rounded-lg">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">Scratch Resistant</h4>
                    <p className="text-sm text-muted-foreground">
                      Highly durable with excellent hardness rating
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-card rounded-lg">
                  <Sun className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">Scandinavian Style</h4>
                    <p className="text-sm text-muted-foreground">
                      Perfect for minimalist and contemporary interiors
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="flex-1">
                <Link to="/contact">Book a Free Consultation for Maple Natural Finish</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/products/laminate">View Category</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MapleNatural;
