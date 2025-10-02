import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import AllProducts from "./pages/AllProducts";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Category Pages
import SolidWood from "./pages/products/SolidWood";
import EngineeredWood from "./pages/products/EngineeredWood";
import Laminate from "./pages/products/Laminate";
import Parquet from "./pages/products/Parquet";

// Product Detail Pages
import OakHerringbone from "./pages/products/OakHerringbone";
import WalnutWidePlank from "./pages/products/WalnutWidePlank";
import MapleNatural from "./pages/products/MapleNatural";
import SmokedOakHeritage from "./pages/products/SmokedOakHeritage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/all" element={<AllProducts />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Category Pages */}
          <Route path="/products/solid-wood" element={<SolidWood />} />
          <Route path="/products/engineered-wood" element={<EngineeredWood />} />
          <Route path="/products/laminate" element={<Laminate />} />
          <Route path="/products/parquet" element={<Parquet />} />
          
          {/* Product Detail Pages */}
          <Route path="/products/oak-herringbone-classic" element={<OakHerringbone />} />
          <Route path="/products/walnut-wide-plank" element={<WalnutWidePlank />} />
          <Route path="/products/maple-natural-finish" element={<MapleNatural />} />
          <Route path="/products/smoked-oak-heritage" element={<SmokedOakHeritage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
