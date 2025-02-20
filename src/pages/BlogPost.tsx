
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
      </Helmet>

      <article className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-sm text-muted-foreground mb-8">{post.date}</div>
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
    </>
  );
};

export default BlogPost;
