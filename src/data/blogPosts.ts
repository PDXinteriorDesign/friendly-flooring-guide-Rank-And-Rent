
import { post as waterproofVinyl } from './blog-posts/are-vinyl-floors-waterproof';
import { post as highTrafficFlooring } from './blog-posts/best-flooring-high-traffic-areas';
import { post as laminateVsVinyl } from './blog-posts/laminate-vs-vinyl-flooring-comparison';
import { post as vinylInstallation } from './blog-posts/vinyl-plank-flooring-installation-guide';
import { post as glueVsClick } from './blog-posts/glue-down-vs-click-lock-vinyl-flooring';
import { post as isVinylWaterproof } from './blog-posts/is-vinyl-waterproof';
import { post as vinylVsLaminate } from './blog-posts/vinyl-vs-laminate';

// Normalize blog posts to ensure consistent properties
const normalizePost = (post: any) => {
  // If post has description but not excerpt, use description as excerpt
  if (post.description && !post.excerpt) {
    post.excerpt = post.description;
  }
  // If post has excerpt but not description, use excerpt as description
  if (post.excerpt && !post.description) {
    post.description = post.excerpt;
  }
  return post;
};

// Apply normalization to all posts
export const blogPosts = [
  normalizePost(isVinylWaterproof),
  normalizePost(vinylVsLaminate),
  normalizePost(waterproofVinyl),
  normalizePost(highTrafficFlooring),
  normalizePost(laminateVsVinyl),
  normalizePost(vinylInstallation),
  normalizePost(glueVsClick)
];
