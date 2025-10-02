import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ProductCard } from "@/components/products/ProductCard";
import { FilterDrawer, ProductFilters } from "@/components/products/FilterDrawer";
import { SampleRequestModal } from "@/components/products/SampleRequestModal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import productsData from "@/data/products.json";

type SortOption =
  | "recommended"
  | "price-low"
  | "price-high"
  | "best-sellers"
  | "new-in"
  | "discount";

interface Product {
  id: string;
  slug: string;
  title: string;
  category: string;
  pattern: string;
  woodSpecies: string;
  colourTone: string;
  finish: string;
  thicknessMm: number;
  widthMm: number;
  lengthMm: number;
  plankType: string;
  underfloorHeating: boolean;
  warrantyYears: number;
  pricePerM2: number;
  priceRrpPerM2: number;
  discountPercent: number;
  stockStatus: string;
  dispatchNote?: string;
  images: { src: string; alt: string }[];
  badges: string[];
  brand: string;
  sampleAvailable: boolean;
}

const AllProducts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("recommended");
  const [currentPage, setCurrentPage] = useState(1);
  const [sampleModalOpen, setSampleModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const itemsPerPage = 24;

  const defaultFilters: ProductFilters = {
    categories: [],
    colourTones: [],
    patterns: [],
    thicknesses: [],
    widthRanges: [],
    finishes: [],
    underfloorHeating: null,
    stockOnly: false,
    priceRange: [0, 150],
  };

  const [filters, setFilters] = useState<ProductFilters>(defaultFilters);

  const products = productsData as Product[];

  // Filter logic
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const searchableText = `${product.title} ${product.woodSpecies} ${product.colourTone} ${product.id}`.toLowerCase();
        if (!searchableText.includes(query)) return false;
      }

      // Categories
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }

      // Colour tones
      if (filters.colourTones.length > 0 && !filters.colourTones.includes(product.colourTone)) {
        return false;
      }

      // Patterns
      if (filters.patterns.length > 0 && !filters.patterns.includes(product.pattern)) {
        return false;
      }

      // Thickness
      if (filters.thicknesses.length > 0 && !filters.thicknesses.includes(product.thicknessMm)) {
        return false;
      }

      // Width ranges
      if (filters.widthRanges.length > 0) {
        const width = product.widthMm;
        const matchesRange = filters.widthRanges.some((range) => {
          if (range === "≤120mm") return width <= 120;
          if (range === "121-160mm") return width >= 121 && width <= 160;
          if (range === "161-220mm") return width >= 161 && width <= 220;
          if (range === "220mm+") return width >= 220;
          return false;
        });
        if (!matchesRange) return false;
      }

      // Finish
      if (filters.finishes.length > 0) {
        const matchesFinish = filters.finishes.some((f) =>
          product.finish.toLowerCase().includes(f.toLowerCase())
        );
        if (!matchesFinish) return false;
      }

      // Underfloor heating
      if (filters.underfloorHeating !== null && product.underfloorHeating !== filters.underfloorHeating) {
        return false;
      }

      // Stock only
      if (filters.stockOnly && product.stockStatus !== "InStock") {
        return false;
      }

      // Price range
      if (
        product.pricePerM2 < filters.priceRange[0] ||
        product.pricePerM2 > filters.priceRange[1]
      ) {
        return false;
      }

      return true;
    });
  }, [products, searchQuery, filters]);

  // Sort logic
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    
    switch (sortBy) {
      case "price-low":
        return sorted.sort((a, b) => a.pricePerM2 - b.pricePerM2);
      case "price-high":
        return sorted.sort((a, b) => b.pricePerM2 - a.pricePerM2);
      case "best-sellers":
        return sorted.sort((a, b) => {
          const aIsBest = a.badges.includes("Best Seller") ? 1 : 0;
          const bIsBest = b.badges.includes("Best Seller") ? 1 : 0;
          return bIsBest - aIsBest;
        });
      case "new-in":
        return sorted.sort((a, b) => {
          const aIsNew = a.badges.includes("New In") ? 1 : 0;
          const bIsNew = b.badges.includes("New In") ? 1 : 0;
          return bIsNew - aIsNew;
        });
      case "discount":
        return sorted.sort((a, b) => b.discountPercent - a.discountPercent);
      default:
        return sorted;
    }
  }, [filteredProducts, sortBy]);

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const activeFilterCount = 
    filters.categories.length +
    filters.colourTones.length +
    filters.patterns.length +
    filters.thicknesses.length +
    filters.widthRanges.length +
    filters.finishes.length +
    (filters.underfloorHeating !== null ? 1 : 0) +
    (filters.stockOnly ? 1 : 0);

  const handleRequestSample = (product: Product) => {
    setSelectedProduct(product);
    setSampleModalOpen(true);
  };

  const handleResetFilters = () => {
    setFilters(defaultFilters);
    setSearchQuery("");
    setCurrentPage(1);
  };

  const handleQuickFilter = (category: string) => {
    setFilters({ ...filters, categories: [category] });
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Breadcrumbs */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/products" className="hover:text-foreground transition-colors">
              Products
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">All Products</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            All Flooring Products
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Browse our complete range of laminate, engineered, solid wood, and parquet floors
          </p>

          {/* Quick Category Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuickFilter("Solid Wood")}
            >
              Solid Wood
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuickFilter("Engineered Wood")}
            >
              Engineered
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuickFilter("Laminate")}
            >
              Laminate
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuickFilter("Parquet")}
            >
              Parquet
            </Button>
          </div>

          {/* Search & Sort Controls */}
          <div className="sticky top-16 z-10 bg-background/95 backdrop-blur-sm py-4 -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="relative flex-1 w-full md:max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, code, colour or wood type..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex gap-3 items-center w-full md:w-auto">
                <div className="md:hidden flex-1">
                  <FilterDrawer
                    filters={filters}
                    onFiltersChange={setFilters}
                    onReset={handleResetFilters}
                    isMobile
                  />
                </div>
                
                <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                  <SelectTrigger className="w-full md:w-[220px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="price-low">Price: Low → High</SelectItem>
                    <SelectItem value="price-high">Price: High → Low</SelectItem>
                    <SelectItem value="best-sellers">Best Sellers</SelectItem>
                    <SelectItem value="new-in">New In</SelectItem>
                    <SelectItem value="discount">Highest Discount</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results Summary */}
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-muted-foreground">
                Showing {(currentPage - 1) * itemsPerPage + 1}–
                {Math.min(currentPage * itemsPerPage, sortedProducts.length)} of{" "}
                {sortedProducts.length} products
              </p>

              {activeFilterCount > 0 && (
                <Button variant="ghost" size="sm" onClick={handleResetFilters}>
                  Clear all filters ({activeFilterCount})
                </Button>
              )}
            </div>

            {/* Active Filter Chips */}
            {activeFilterCount > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {filters.categories.map((cat) => (
                  <Badge key={cat} variant="secondary" className="gap-2">
                    {cat}
                    <button
                      onClick={() =>
                        setFilters({
                          ...filters,
                          categories: filters.categories.filter((c) => c !== cat),
                        })
                      }
                      className="hover:text-destructive"
                    >
                      ×
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Desktop Filters */}
          <aside className="hidden lg:block flex-shrink-0">
            <FilterDrawer
              filters={filters}
              onFiltersChange={setFilters}
              onReset={handleResetFilters}
            />
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {paginatedProducts.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="font-heading font-bold text-2xl mb-4">
                  No products match your filters
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search criteria or clearing some filters
                </p>
                <Button onClick={handleResetFilters}>Clear All Filters</Button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {paginatedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onRequestSample={handleRequestSample}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center gap-2 mt-12">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        onClick={() => setCurrentPage(page)}
                        className="w-10"
                      >
                        {page}
                      </Button>
                    ))}

                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Sample Request Modal */}
      {selectedProduct && (
        <SampleRequestModal
          isOpen={sampleModalOpen}
          onClose={() => {
            setSampleModalOpen(false);
            setSelectedProduct(null);
          }}
          productTitle={selectedProduct.title}
        />
      )}

      <Footer />
    </div>
  );
};

export default AllProducts;
