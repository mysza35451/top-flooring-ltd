import { CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      title: "Trust",
      description: "Building lasting relationships with our customers through reliability and honest service.",
    },
    {
      title: "Quality",
      description: "Never compromising on materials or craftsmanship - only the best for your home.",
    },
    {
      title: "Local Expertise",
      description: "Deep understanding of London homes and the specific needs of our community.",
    },
    {
      title: "Sustainability",
      description: "Committed to eco-friendly practices and sourcing responsibly.",
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
              Craftsmanship You Can Trust
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Top Flooring Ltd is a London-based company passionate about creating beautiful spaces through flooring
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed">
                Based in <span className="font-semibold text-primary">Finchley</span>, we've built a reputation for quality, reliability, and personal service across London. What started as a passion for craftsmanship has grown into a trusted name for wooden flooring solutions.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-6">
                Whether you need durable engineered wood for a modern apartment, timeless parquet for a period property, or expert floor finishing to restore your existing floors, we bring decades of combined experience to every project.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-6">
                We understand that choosing the right flooring is a significant decision. That's why we take the time to understand your needs, offer honest advice, and deliver exceptional results that enhance your space for years to come.
              </p>
            </div>

            <div className="bg-primary/5 rounded-lg p-8 mt-12">
              <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">
                Our Commitment to You
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Free, no-obligation consultations and quotes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Premium quality materials from trusted suppliers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Expert installation by skilled craftsmen</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Aftercare advice and support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Clean, professional service from start to finish</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center text-foreground">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 soft-shadow text-center space-y-4"
              >
                <h3 className="font-heading font-bold text-xl text-primary">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground">
            Ready to Start Your Flooring Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your space with beautiful wooden floors
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
