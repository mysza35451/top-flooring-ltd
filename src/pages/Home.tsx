import { Link } from "react-router-dom";
import { CheckCircle2, Phone, Award, Users, Sparkles, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import heroImage from "@/assets/hero-flooring.jpg";
import engineeredWood from "@/assets/engineered-wood.jpg";
import solidWood from "@/assets/solid-wood.jpg";
import parquet from "@/assets/parquet.jpg";
import laminate from "@/assets/laminate.jpg";

const Home = () => {
  const features = [
    {
      icon: Users,
      title: "Local Expertise",
      description: "Based in Finchley, serving London with pride",
    },
    {
      icon: Award,
      title: "Skilled Craftsmanship",
      description: "Years of experience in flooring excellence",
    },
    {
      icon: Sparkles,
      title: "Wide Range",
      description: "Premium selection of wood flooring options",
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "On-time delivery and professional installation",
    },
  ];

  const products = [
    {
      title: "Engineered Wood",
      description: "Stability meets style - perfect for modern London homes and apartments.",
      image: engineeredWood,
    },
    {
      title: "Solid Wood",
      description: "Classic, durable, and elegant - ideal for timeless, traditional spaces.",
      image: solidWood,
    },
    {
      title: "Parquet Flooring",
      description: "Luxury patterns and stunning looks for truly exceptional interiors.",
      image: parquet,
    },
    {
      title: "Laminate Flooring",
      description: "Affordable, versatile, and easy to maintain for any lifestyle.",
      image: laminate,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Finchley, London",
      content: "Top Flooring transformed our home. The fitting was flawless, and the team was a pleasure to work with! Highly recommend their services.",
    },
    {
      name: "David Williams",
      location: "North London",
      content: "Professional service from start to finish. The engineered oak we chose looks stunning, and the installation was completed on schedule.",
    },
    {
      name: "Emma Thompson",
      location: "Barnet",
      content: "Excellent quality and attention to detail. The team helped us choose the perfect flooring for our kitchen renovation. Very satisfied!",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Beautiful wooden flooring in modern London home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 overlay-gradient" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-background animate-fade-in">
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
            Quality Wooden Floors, Expertly Fitted in London
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            From Finchley to across London, Top Flooring Ltd brings warmth, durability, and style to your space
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="hero-gradient text-background hover:opacity-90 smooth-transition">
              <Link to="/products/all">Browse All Products</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-background/10 backdrop-blur-sm border-background text-background hover:bg-background hover:text-foreground smooth-transition">
              <Link to="/contact">Request a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground">
              Craftsmanship You Can Trust
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With years of expertise, we don't just supply premium wooden flooring - we provide professional fitting and finishing services that stand the test of time. Based in Finchley, we're proud to serve homes and businesses across London.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center text-foreground">
            Why Choose Top Flooring?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-lg hover:bg-muted/50 smooth-transition"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">
              Our Range of Wooden Floors
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover flooring that suits every style, budget, and lifestyle
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center text-foreground">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-background">
            Ready to Transform Your Home with Beautiful Wooden Floors?
          </h2>
          <p className="text-xl text-background/90 mb-8 max-w-2xl mx-auto">
            Get in touch today for a free consultation and quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" asChild className="bg-background text-primary hover:bg-background/90">
              <Link to="/contact">Get Your Free Quote</Link>
            </Button>
            <Button size="lg" variant="ghost" asChild className="text-background border-background hover:bg-background/20">
              <a href="tel:+442012345678" className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>020 1234 5678</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
