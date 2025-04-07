import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';

const ViewAllPosts = () => {
    const posts = [
        {
          id: 1,
          title: "How I Built My Portfolio",
          excerpt: "Learn how I created this portfolio using React and Tailwind CSS with modern animations and responsive design principles.",
          date: "July 15, 2023",
          slug: "how-i-built-my-portfolio",
          category: "Development",
          readTime: "5 min read"
        },
        {
          id: 2,
          title: "React Tips for Beginners",
          excerpt: "Essential React concepts every beginner should know, from component structure to state management.",
          date: "July 10, 2023",
          slug: "react-tips-for-beginners",
          category: "React",
          readTime: "8 min read"
        },
        {
          id: 3,
          title: "CSS Grid Mastery",
          excerpt: "Unlock the full potential of CSS Grid to create complex layouts with minimal code.",
          date: "June 28, 2023",
          slug: "css-grid-mastery",
          category: "CSS",
          readTime: "6 min read"
        },
        {
          id: 4,
          title: "Optimizing Web Performance",
          excerpt: "Practical techniques to make your websites load faster and run smoother.",
          date: "June 15, 2023",
          slug: "optimizing-web-performance",
          category: "Performance",
          readTime: "10 min read"
        }
      ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Latest Articles</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Thoughts, tutorials and insights about web development and design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {posts.map(post => (
          <article 
            key={post.id} 
            className="group relcative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex justify-between items-center space-x-2 mb-3">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500 flex items-center">
                  <FiCalendar className="mr-1" /> {post.date}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-gray-600 mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {post.readTime}
                </span>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                >
                  Read more <FiArrowRight className="ml-1" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-16">
        <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
          Load More Articles
        </button>
      </div>
    </div>
  );
};

export default ViewAllPosts;