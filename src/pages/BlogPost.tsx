
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold">Post not found</h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Vancouver WA Flooring Guide</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <article className="min-h-screen py-16">
        {/* Hero Section */}
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Article Header */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">{post.title}</h1>
            <div className="text-sm text-muted-foreground mb-6">{post.date}</div>
            <p className="text-xl text-muted-foreground">{post.excerpt}</p>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-p:text-gray-600 prose-strong:text-gray-900 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-ul:list-disc prose-li:text-gray-600 prose-img:rounded-lg space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-xl font-semibold">Share this article</h3>
              <div className="flex space-x-4">
                <button 
                  onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                  className="px-4 py-2 bg-[#1DA1F2] text-white rounded-full hover:bg-opacity-90 transition-colors"
                >
                  Share on Twitter
                </button>
                <button 
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                  className="px-4 py-2 bg-[#4267B2] text-white rounded-full hover:bg-opacity-90 transition-colors"
                >
                  Share on Facebook
                </button>
              </div>
            </div>
          </footer>
        </div>
      </article>

      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 w-full h-1 bg-gray-200"
        style={{
          background: `linear-gradient(to right, var(--primary) ${Math.min(
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
            100
          )}%, transparent 0)`
        }}
      />
    </>
  );
};

export default BlogPost;
