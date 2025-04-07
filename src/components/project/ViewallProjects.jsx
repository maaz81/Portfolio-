import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiExternalLink, FiGithub, FiStar, FiCode, FiLayers } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ViewAllProjects = () => {
  const containerRef = useRef(null);
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart, checkout, and admin dashboard",
      image: "https://source.unsplash.com/random/800x600/?ecommerce,tech",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Modern portfolio with smooth animations and responsive design",
      image: "https://source.unsplash.com/random/800x600/?portfolio,design",
      tags: ["React", "GSAP", "Tailwind CSS"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Productivity application with drag-and-drop functionality",
      image: "https://source.unsplash.com/random/800x600/?taskapp,productivity",
      tags: ["React", "Firebase", "DnD"],
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather information with 5-day forecast",
      image: "https://source.unsplash.com/random/800x600/?weather,app",
      tags: ["JavaScript", "API", "Chart.js"],
      github: "#",
      live: "#"
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "Workout logging application with progress analytics",
      image: "https://source.unsplash.com/random/800x600/?fitness,health",
      tags: ["React Native", "GraphQL", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "Discover recipes based on ingredients you have",
      image: "https://source.unsplash.com/random/800x600/?recipes,food",
      tags: ["Vue.js", "API", "IndexedDB"],
      github: "#",
      live: "#"
    }
  ];

 

  return (
    <div 
      ref={containerRef} 
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="page-header text-center mb-16 px-4">
          <div className="inline-flex items-center mb-4 px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
            <FiLayers className="mr-2" />
            <Link to='/'>My Portfolio</Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each project is a unique piece of development crafted with care and precision.
          </p>
        </div>

        

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card group relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 flex items-center px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs font-bold rounded-full shadow-sm">
                  <FiStar className="mr-1" /> Featured
                </div>
              )}

              {/* Project Image */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-full object-cover transition-transform duration-500"
                />
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 flex items-end p-6">
                  <div className="w-full">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-500 hover:text-indigo-600 transition-colors text-sm"
                        aria-label="View code on GitHub"
                      >
                        <FiCode className="mr-1" /> Code
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-500 hover:text-indigo-600 transition-colors text-sm"
                        aria-label="View live demo"
                      >
                        <FiExternalLink className="mr-1" /> Live
                      </a>
                    )}
                  </div>
                  <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center px-4 py-16 bg-white rounded-2xl shadow-sm">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to start your project?
            </h2>
            <p className="text-gray-600 mb-6">
              I'm available for freelance work. Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
              >
                Get in Touch
              </Link>
              <a
                href="#"
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllProjects;