
import { Suspense, lazy } from "react";
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary"; // Import from react-error-boundary
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

// Create a fallback component for error cases
const ErrorFallback = () => (
  <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
    <div className="text-center max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Something went wrong</h2>
      <p className="text-gray-600 mb-4">We're experiencing some technical difficulties. Please try refreshing the page.</p>
      <button 
        onClick={() => window.location.reload()} 
        className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
      >
        Refresh Page
      </button>
    </div>
  </div>
);

// Custom error boundary class
class AppErrorBoundary extends React.Component<{children: React.ReactNode}> {
  state = { hasError: false };
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("App error:", error, info);
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

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
      <SonnerToaster />
      <ReactErrorBoundary FallbackComponent={ErrorFallback}>
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
      </ReactErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
