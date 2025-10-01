import { Shield, Ruler, Leaf, Sparkles, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import walnutHero from "@/assets/walnut-wideplank-hero.jpg";

const WalnutWidePlank = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [walnutHero, walnutHero, walnutHero]; // In real app, would have different images

  const specs = [
    { label: "Wood Species", value: "American Black Walnut" },
    { label: "Style", value: "Wide Plank (220mm)" },
    { label: "Finish", value: "Natural Oil" },
    { label: "Dimensions", value: "220 x 2200 x 20mm" },
    { label: "Warranty", value: "30 Years" },
    { label: "Installation", value: "Tongue & Groove" },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Gallery with Side Panel */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Image Gallery/Carousel */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg soft-shadow">
                <img
                  src={images[currentImage]}
                  alt="Walnut Wide Plank Flooring"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background smooth-transition"
                >
                  <ChevronLeft className="w-6 h-6 text-foreground" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background smooth-transition"
                >
                  <ChevronRight className="w-6 h-6 text-foreground" />
                </button>
              </div>
              {/* Thumbnail Navigation */}
              <div className="flex gap-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`flex-1 aspect-video overflow-hidden rounded-lg ${
                      currentImage === index ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"
                    } smooth-transition`}
                  >
                    <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Panel */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/products">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Link>
                  </Button>
                </div>
                <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
                  Walnut Wide Plank
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Bold, Luxurious, and Striking
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Experience the ultimate in luxury flooring with our Walnut Wide Plank collection. The rich, deep chocolate hues of American Black Walnut create a sophisticated and dramatic statement in any interior. Extra-wide planks showcase the natural beauty and character of this premium hardwood, while the natural oil finish enhances the depth and warmth of the wood grain.
                </p>
              </div>

              {/* Specifications */}
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="font-heading font-bold text-xl mb-4 text-primary">
                  Technical Specifications
                </h3>
                <div className="space-y-3">
                  {specs.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="font-medium text-foreground">{spec.label}</span>
                      <span className="text-muted-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-xl text-foreground">Key Benefits</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">Extra-wide planks create a luxurious, spacious feel</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">Premium hardwood with exceptional durability</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Leaf className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">Sustainably sourced from certified forests</p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="flex-1">
                  <Link to="/contact">Request a Walnut Wide Plank Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="flex-1">
                  <Link to="/products/engineered-wood">View Category</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WalnutWidePlank;
