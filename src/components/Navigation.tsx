import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const productCategories = [
    { name: "Solid Wood Flooring", path: "/products/solid-wood" },
    { name: "Engineered Wood Flooring", path: "/products/engineered-wood" },
    { name: "Laminate Flooring", path: "/products/laminate" },
    { name: "Parquet Flooring", path: "/products/parquet" },
  ];

  const featuredProducts = [
    { name: "Oak Herringbone Classic", path: "/products/oak-herringbone-classic" },
    { name: "Walnut Wide Plank", path: "/products/walnut-wide-plank" },
    { name: "Maple Natural Finish", path: "/products/maple-natural-finish" },
    { name: "Smoked Oak Heritage", path: "/products/smoked-oak-heritage" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 soft-shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">TF</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-foreground">Top Flooring</span>
              <span className="text-xs text-muted-foreground">London & Finchley</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`smooth-transition font-medium ${
                  isActive(link.path)
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Products Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`smooth-transition font-medium ${
                    location.pathname.startsWith("/products")
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}>
                    Products & Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[600px] grid-cols-2">
                      <div>
                        <h4 className="font-heading font-bold text-sm mb-3 text-primary">Browse Products</h4>
                        <ul className="space-y-2">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                to="/products/all"
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">All Products</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  Browse our complete catalogue
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                to="/products"
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">Products & Services</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  View our range and services
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          {productCategories.map((category) => (
                            <li key={category.path}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={category.path}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">{category.name}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+442012345678" className="flex items-center space-x-2 text-foreground hover:text-primary smooth-transition">
              <Phone className="w-4 h-4" />
              <span className="font-medium">020 1234 5678</span>
            </a>
            <Button asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 smooth-transition ${
                  isActive(link.path)
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Products Submenu */}
            <div className="border-t border-border mt-2 pt-2">
              <div className="px-4 py-3 font-medium text-foreground">Products & Services</div>
              <Link
                to="/products/all"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-8 text-sm text-muted-foreground hover:bg-muted smooth-transition"
              >
                All Products
              </Link>
              <Link
                to="/products"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-8 text-sm text-muted-foreground hover:bg-muted smooth-transition"
              >
                Products & Services
              </Link>
              {productCategories.map((category) => (
                <Link
                  key={category.path}
                  to={category.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-8 text-sm text-muted-foreground hover:bg-muted smooth-transition"
                >
                  {category.name}
                </Link>
              ))}
            </div>
            
            <div className="px-4 pt-4 space-y-3">
              <a
                href="tel:+442012345678"
                className="flex items-center space-x-2 text-foreground py-2"
              >
                <Phone className="w-4 h-4" />
                <span>020 1234 5678</span>
              </a>
              <Button asChild className="w-full">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
