import React from 'react';
import { Link } from 'react-router-dom';

const VeiwAllPost = () => {
    const posts = [
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
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="space-y-6">
        {posts.map(post => (
          <div key={post.id} className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-500 mb-2">{post.date}</p>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            {/* <Link
              to={`/blog/${post.slug}`}
              className="text-blue-600 hover:underline"
            >
              Read full post →
            </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VeiwAllPost;