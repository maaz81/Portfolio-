import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white w-full py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Left Section - Copyright */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-gray-400">
              &copy; {currentYear} Maaz Ahmad Khan. All rights reserved.
            </p>
          </div>

          {/* Middle Section - Navigation Links */}
          <div className="order-1 lg:order-2 flex flex-wrap justify-center gap-4 sm:gap-6">
            <a 
              href="#about" 
              className="text-gray-300 hover:text-white transition-colors px-2 py-1 sm:px-0"
            >
              About
            </a>
            <a 
              href="#experience" 
              className="text-gray-300 hover:text-white transition-colors px-2 py-1 sm:px-0"
            >
              Experience
            </a>
            <a 
              href="#projects" 
              className="text-gray-300 hover:text-white transition-colors px-2 py-1 sm:px-0"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-white transition-colors px-2 py-1 sm:px-0"
            >
              Contact
            </a>
          </div>

          {/* Right Section - Social Links */}
          <div className="order-3 flex justify-center gap-4 sm:gap-6">
            <a 
              href="https://github.com/maazkhan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/maazkhan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a 
              href="https://twitter.com/maazkhan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a 
              href="mailto:khanmaazahmad7@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm flex flex-col sm:flex-row justify-center items-center gap-1">
          <span>Built with</span>
          <span className="flex items-center gap-1">
            <FaHeart className="text-red-500" />
            <span>using React and Tailwind CSS</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;