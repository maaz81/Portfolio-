import React from 'react';
import { Link } from 'react-router-dom';

const BlogPreview = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How I Built My Portfolio",
      excerpt: "Learn how I created this portfolio using React and Tailwind CSS",
      date: "2023-07-15",
      slug: "how-i-built-my-portfolio"
    },
    {
      id: 2,
      title: "React Tips for Beginners",
      excerpt: "Essential React concepts every beginner should know",
      date: "2023-07-10",
      slug: "react-tips-for-beginners"
    }
  ];

  return (
    <section id="blog" className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>
      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        {blogPosts.map(post => (
          <div key={post.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
            <a href='#' 
              to={`/blog/${post.slug}`}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/blog" 
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          View All Posts
        </Link>
      </div>
    </section>
  );
}

export default BlogPreview;