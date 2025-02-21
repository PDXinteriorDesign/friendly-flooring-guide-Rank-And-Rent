
import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  // Get the latest 3 posts for featured section
  const featuredPosts = blogPosts.slice(0, 3);
  // Get the remaining posts for recent section
  const recentPosts = blogPosts.slice(3);

  return (
    <>
      <Helmet>
        <title>Flooring Tips & Trends Blog | Vancouver WA Flooring Guide</title>
        <meta name="description" content="Expert flooring tips, trends, and maintenance guides. Learn about hardwood, vinyl, and carpet flooring options for your Vancouver WA home." />
        <meta name="keywords" content="flooring blog, flooring tips, flooring trends, flooring maintenance, Vancouver WA flooring" />
      </Helmet>

      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Flooring Tips & Trends</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay up to date with the latest flooring trends, maintenance tips, and expert advice for your home.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="outline" className="w-full">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPosts.map((post, index) => (
              <Card key={post.slug} className="flex flex-col md:flex-row overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full md:w-48 h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="outline">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="max-w-7xl mx-auto mt-16 bg-gray-50 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest flooring tips and trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded border border-gray-300 flex-grow"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
