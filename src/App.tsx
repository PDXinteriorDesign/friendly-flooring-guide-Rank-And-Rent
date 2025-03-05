
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNav from "./components/MainNav";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import HardwoodFlooring from "./pages/HardwoodFlooring";
import VinylFlooring from "./pages/VinylFlooring";
import CarpetFlooring from "./pages/CarpetFlooring";
import LaminateFlooring from "./pages/LaminateFlooring";
import TileFlooring from "./pages/TileFlooring";
import NaturalStone from "./pages/NaturalStone";
import WindowCoverings from "./pages/WindowCoverings";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";
import { Helmet } from "react-helmet";
import "./index.css"; // Ensure CSS is properly imported

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#4f46e5" />
        <meta property="og:site_name" content="FloorVancouver - Vancouver WA Flooring Experts" />
        <meta property="og:type" content="website" />
        <link rel="alternate" href="https://floorvancouver.com" hrefLang="en-us" />
      </Helmet>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <MainNav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hardwood-flooring-vancouver-wa" element={<HardwoodFlooring />} />
          <Route path="/vinyl-flooring-vancouver-wa" element={<VinylFlooring />} />
          <Route path="/carpet-installation-vancouver-wa" element={<CarpetFlooring />} />
          <Route path="/laminate-flooring-vancouver-wa" element={<LaminateFlooring />} />
          <Route path="/tile-flooring-vancouver-wa" element={<TileFlooring />} />
          <Route path="/natural-stone-vancouver-wa" element={<NaturalStone />} />
          <Route path="/window-coverings-vancouver-wa" element={<WindowCoverings />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
