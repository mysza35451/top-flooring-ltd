import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import engineeredWood from "@/assets/engineered-wood.jpg";
import solidWood from "@/assets/solid-wood.jpg";
import parquet from "@/assets/parquet.jpg";
import laminate from "@/assets/laminate.jpg";
import heroImage from "@/assets/hero-flooring.jpg";

const Gallery = () => {
  const projects = [
    {
      title: "Engineered Oak - Finchley Home",
      location: "Finchley, London",
      type: "Engineered Wood",
      image: engineeredWood,
    },
    {
      title: "Solid Oak Living Room",
      location: "North London",
      type: "Solid Wood",
      image: solidWood,
    },
    {
      title: "Herringbone Parquet",
      location: "Central London",
      type: "Parquet",
      image: parquet,
    },
    {
      title: "Modern Laminate Installation",
      location: "Barnet",
      type: "Laminate",
      image: laminate,
    },
    {
      title: "Complete Home Renovation",
      location: "Finchley",
      type: "Mixed",
      image: heroImage,
    },
    {
      title: "Classic Parquet Pattern",
      location: "London",
      type: "Parquet",
      image: parquet,
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
              Our Work in London Homes & Businesses
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              See the quality and craftsmanship we bring to every project across London
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg soft-shadow hover-lift cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover smooth-transition group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent opacity-0 group-hover:opacity-100 smooth-transition flex flex-col justify-end p-6">
                  <h3 className="font-heading font-bold text-xl text-background mb-2">
                    {project.title}
                  </h3>
                  <p className="text-background/90 text-sm mb-1">{project.location}</p>
                  <p className="text-background/80 text-sm">Type: {project.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8 text-center text-foreground">
            Featured Finchley Projects
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-card rounded-lg overflow-hidden soft-shadow">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-square md:aspect-auto">
                  <img
                    src={engineeredWood}
                    alt="Finchley project"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="font-heading font-bold text-2xl mb-4 text-card-foreground">
                    Beautiful Engineered Oak in Finchley
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    This stunning Finchley home transformation showcases our premium engineered oak flooring. The warm tones and natural grain patterns create an inviting atmosphere throughout the living spaces.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Client feedback:</span> "The team was professional, punctual, and the quality of work exceeded our expectations. Our home feels completely transformed!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground">
            Want Your Home to Look Like This?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you achieve the beautiful flooring you've been dreaming of
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
