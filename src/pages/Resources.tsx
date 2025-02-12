
import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Video } from "lucide-react";

const Resources = () => {
  return (
    <>
      <Helmet>
        <title>Flooring Resources & Guides | Vancouver WA Flooring Information</title>
        <meta name="description" content="Access our comprehensive flooring resources, including guides, maintenance tips, and installation information for hardwood, vinyl, and carpet flooring in Vancouver WA." />
        <meta name="keywords" content="flooring resources, flooring guides, flooring maintenance, flooring installation guide, Vancouver WA flooring" />
      </Helmet>

      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Flooring Resources</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access our comprehensive collection of flooring guides, maintenance tips, and installation resources.
          </p>
        </div>

        {/* Guides Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-8">Installation Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <FileText className="h-12 w-12 text-wood-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
                <p className="text-muted-foreground mb-4">{guide.description}</p>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" /> Download Guide
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Video Tutorials */}
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-8">Video Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tutorials.map((tutorial, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={tutorial.thumbnail} 
                    alt={tutorial.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Video className="h-16 w-16 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
                  <p className="text-muted-foreground mb-4">{tutorial.description}</p>
                  <Button variant="outline" className="w-full">Watch Tutorial</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Helpful Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <FileText className="h-12 w-12 text-wood-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                <p className="text-muted-foreground mb-4">{tool.description}</p>
                <Button variant="outline" className="w-full">Use Tool</Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const guides = [
  {
    title: "Hardwood Floor Installation Guide",
    description: "Step-by-step instructions for installing hardwood flooring in your home.",
  },
  {
    title: "Vinyl Flooring Installation Guide",
    description: "Complete guide to installing luxury vinyl plank and sheet vinyl flooring.",
  },
  {
    title: "Carpet Installation Guide",
    description: "Professional tips for carpet installation and preparation.",
  },
  {
    title: "Floor Maintenance Guide",
    description: "Learn how to properly maintain different types of flooring.",
  },
  {
    title: "Subfloor Preparation Guide",
    description: "Essential steps for preparing your subfloor for new flooring.",
  },
  {
    title: "Flooring Selection Guide",
    description: "How to choose the right flooring type for each room.",
  },
];

const tutorials = [
  {
    title: "Hardwood Floor Installation Tutorial",
    description: "Watch our expert installers demonstrate proper hardwood installation techniques.",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    title: "Vinyl Flooring Installation Tips",
    description: "Learn professional tips for installing vinyl flooring in your home.",
    thumbnail: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d",
  },
  {
    title: "Carpet Installation Basics",
    description: "Understanding the fundamentals of proper carpet installation.",
    thumbnail: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
  },
  {
    title: "Floor Maintenance Tutorial",
    description: "Learn how to maintain and clean different types of flooring.",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
];

const tools = [
  {
    title: "Flooring Calculator",
    description: "Calculate the amount of flooring needed for your project.",
  },
  {
    title: "Cost Estimator",
    description: "Get an estimate for your flooring project based on your requirements.",
  },
  {
    title: "Material Comparison Tool",
    description: "Compare different flooring materials and their properties.",
  },
];

export default Resources;
