import { Hammer, Sparkles, Wrench, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import engineeredWood from "@/assets/engineered-wood.jpg";
import solidWood from "@/assets/solid-wood.jpg";
import parquet from "@/assets/parquet.jpg";
import laminate from "@/assets/laminate.jpg";

const Products = () => {
  const products = [
    {
      title: "Solid Wood Flooring",
      description: "Classic, durable, and elegant - perfect for creating timeless interiors. Our solid wood floors are sourced from premium suppliers and can be sanded and refinished multiple times, making them a long-lasting investment for your home.",
      image: solidWood,
      link: "/products/solid-wood",
    },
    {
      title: "Engineered Wood Flooring",
      description: "Stability meets style - ideal for modern London homes and apartments. Engineered wood offers the beauty of real wood with enhanced dimensional stability, making it perfect for areas with underfloor heating or varying humidity levels.",
      image: engineeredWood,
      link: "/products/engineered-wood",
    },
    {
      title: "Laminate Flooring",
      description: "Affordable, versatile, and easy to maintain - perfect for busy households. Our laminate floors offer realistic wood-look finishes with excellent durability and scratch resistance, making them ideal for high-traffic areas.",
      image: laminate,
      link: "/products/laminate",
    },
    {
      title: "Parquet Flooring",
      description: "Luxury patterns and stunning visual appeal for truly exceptional spaces. From classic herringbone to contemporary chevron patterns, parquet flooring adds character and sophistication to any room.",
      image: parquet,
      link: "/products/parquet",
    },
  ];

  const services = [
    {
      icon: Hammer,
      title: "Professional Floor Fitting",
      description: "Expert installation ensuring your floors are fitted perfectly with attention to every detail.",
    },
    {
      icon: Sparkles,
      title: "Floor Sanding & Restoration",
      description: "Breathe new life into tired floors with our professional sanding and restoration services.",
    },
    {
      icon: Shield,
      title: "Staining & Sealing",
      description: "Custom finishes and protective treatments to enhance beauty and durability.",
    },
    {
      icon: Wrench,
      title: "Aftercare & Maintenance",
      description: "Expert advice and services to keep your floors looking beautiful for years to come.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-foreground">
              Our Range of Wooden Floors
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover flooring that suits every style, budget, and lifestyle
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">
              Expert Floor Fitting & Finishing Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At Top Flooring Ltd, we don't just sell floors — we make sure they're fitted perfectly. Our installation team handles every detail, from preparation to finishing, so you can enjoy a flawless result.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 soft-shadow text-center space-y-4 hover-lift"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8 text-center text-foreground">
              Why Choose Our Flooring?
            </h2>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 soft-shadow">
                <h3 className="font-heading font-bold text-xl mb-3 text-primary">
                  Premium Quality Materials
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We source our flooring from trusted suppliers known for their commitment to quality and sustainability. Every piece of wood is carefully selected to ensure consistency and beauty.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 soft-shadow">
                <h3 className="font-heading font-bold text-xl mb-3 text-primary">
                  Expert Guidance
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Not sure which flooring is right for your space? Our team offers free consultations to help you choose the perfect option based on your lifestyle, budget, and aesthetic preferences.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 soft-shadow">
                <h3 className="font-heading font-bold text-xl mb-3 text-primary">
                  Complete Service
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  From initial consultation to final installation and aftercare, we handle everything. You get a single point of contact and a seamless experience from start to finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-background">
            Ready to Find Your Perfect Floor?
          </h2>
          <p className="text-xl text-background/90 mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss your project
          </p>
          <Button size="lg" variant="outline" asChild className="bg-background text-primary hover:bg-background/90">
            <Link to="/contact">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
