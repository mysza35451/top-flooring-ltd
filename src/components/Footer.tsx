import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-xl">Top Flooring Ltd</h3>
            <p className="text-sm opacity-90">
              Quality wooden floors and expert fitting services across London, with a focus on Finchley and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-90 hover:opacity-100 smooth-transition hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm opacity-90 hover:opacity-100 smooth-transition hover:text-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm opacity-90 hover:opacity-100 smooth-transition hover:text-accent">
                  Products & Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm opacity-90 hover:opacity-100 smooth-transition hover:text-accent">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-90 hover:opacity-100 smooth-transition hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Engineered Wood Flooring</li>
              <li>Solid Wood Flooring</li>
              <li>Laminate Flooring</li>
              <li>Parquet Flooring</li>
              <li>Floor Fitting & Installation</li>
              <li>Sanding & Finishing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm opacity-90">
                  Finchley, London, UK
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+442012345678" className="text-sm opacity-90 hover:opacity-100 smooth-transition hover:text-accent">
                  020 1234 5678
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@topflooring.co.uk" className="text-sm opacity-90 hover:opacity-100 smooth-transition hover:text-accent">
                  info@topflooring.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()} Top Flooring Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
