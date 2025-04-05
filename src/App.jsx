// import { useEffect, useRef } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// function App() {
//   const scrollRef = useRef(null);
//   const galleryRef = useRef(null);

//   useEffect(() => {
//     if (!scrollRef.current) return;

//     const locoScroll = new LocomotiveScroll({
//       el: scrollRef.current,
//       smooth: true,
//       multiplier: 0.8,
//       smartphone: {
//         smooth: true
//       },
//       tablet: {
//         smooth: true
//       }
//     });

//     // Initialize GSAP for the portfolio section only
//     gsap.registerPlugin(ScrollTrigger);
    
//     const portfolioAnimation = gsap.context(() => {
//       // Animate portfolio items
//       gsap.from(".portfolio-item", {
//         y: 200,
//         opacity: 0,
//         duration: 8,
//         stagger: 0.1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: galleryRef.current,
//           start: "top 80%",
//           toggleActions: "play none none none",
//           markers: false // Set to true for debugging
//         }
//       });

//       // Hover animations
//       gsap.utils.toArray(".portfolio-item").forEach(item => {
//         const img = item.querySelector("img");
//         const overlay = item.querySelector(".portfolio-overlay");

//         item.addEventListener("mouseenter", () => {
//           gsap.to(img, {
//             scale: 1.1,
//             duration: 0.5,
//             ease: "power2.out"
//           });
//           gsap.to(overlay, {
//             opacity: 1,
//             duration: 0.3
//           });
//         });

//         item.addEventListener("mouseleave", () => {
//           gsap.to(img, {
//             scale: 1,
//             duration: 0.5,
//             ease: "power2.out"
//           });
//           gsap.to(overlay, {
//             opacity: 0,
//             duration: 0.3
//           });
//         });
//       });
//     }, galleryRef);

//     // Update scroll when images load
//     const images = document.querySelectorAll('img');
//     images.forEach(image => {
//       image.addEventListener('load', () => {
//         locoScroll.update();
//       });
//     });

//     return () => {
//       if (locoScroll) locoScroll.destroy();
//       portfolioAnimation.revert(); // Cleanup GSAP animations
//     };
//   }, []);

//   // Portfolio images data
//   const portfolioItems = [
//     {
//       id: 1,
//       title: "Project One",
//       category: "Web Design",
//       image: "https://source.unsplash.com/random/800x600/?webdesign"
//     },
//     {
//       id: 2,
//       title: "Project Two",
//       category: "Development",
//       image: "https://source.unsplash.com/random/800x600/?coding"
//     },
//     {
//       id: 3,
//       title: "Project Three",
//       category: "Branding",
//       image: "https://source.unsplash.com/random/800x600/?brand"
//     },
//     {
//       id: 4,
//       title: "Project Four",
//       category: "Photography",
//       image: "https://source.unsplash.com/random/800x600/?photo"
//     }
//   ];

//   return (
//     <div 
//       className="min-h-screen bg-gray-50 font-sans text-gray-900 w-screen"
//       ref={scrollRef}
//       data-scroll-container
//     >
//       {/* Hero Section */}
//       <section 
//         className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
//         data-scroll-section
//       >
//         <h1 
//           className="text-6xl md:text-8xl font-bold mb-6"
//           data-scroll
//           data-scroll-speed="1"
//         >
//           My Portfolio
//         </h1>
//         <p 
//           className="text-xl md:text-2xl max-w-2xl text-center opacity-80"
//           data-scroll
//           data-scroll-speed="0.5"
//         >
//           Creative developer specializing in modern web experiences
//         </p>
//       </section>

//       {/* About Section */}
//       <section 
//         className="min-h-screen py-20 px-8 flex items-center"
//         data-scroll-section
//       >
//         <div className="max-w-6xl mx-auto">
//           <h2 
//             className="text-4xl font-bold mb-12"
//             data-scroll
//             data-scroll-speed="0.3"
//           >
//             About Me
//           </h2>
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div 
//               className="space-y-6"
//               data-scroll
//               data-scroll-speed="0.5"
//             >
//               <p className="text-lg leading-relaxed">
//                 I'm a passionate frontend developer with expertise in React.js and modern CSS frameworks. I create performant, accessible, and visually appealing web applications.
//               </p>
//               <p className="text-lg leading-relaxed">
//                 My approach combines technical excellence with thoughtful design to deliver exceptional user experiences.
//               </p>
//             </div>
//             <div 
//               className="rounded-xl overflow-hidden shadow-2xl"
//               data-scroll
//               data-scroll-speed="0.2"
//             >
//               <img 
//                 src="https://source.unsplash.com/random/600x400/?developer" 
//                 alt="Profile" 
//                 className="w-full h-auto"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Portfolio Gallery with GSAP Animations */}
//       <section 
//         ref={galleryRef}
//         className="py-20 px-8 bg-gray-100"
//         data-scroll-section
//       >
//         <div className="max-w-6xl mx-auto">
//           <h2 
//             className="text-4xl font-bold mb-12 text-center"
//             data-scroll
//             data-scroll-speed="0.3"
//           >
//             My Work
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {portfolioItems.map((item) => (
//               <div 
//                 key={item.id}
//                 className="portfolio-item group relative overflow-hidden rounded-xl shadow-lg"
//               >
//                 <img 
//                   src={item.image} 
//                   alt={item.title} 
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="portfolio-overlay absolute inset-0 bg-black bg-opacity-50 flex items-end p-6 opacity-0">
//                   <div>
//                     <h3 className="text-white text-xl font-bold">{item.title}</h3>
//                     <p className="text-gray-300">{item.category}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section 
//         className="min-h-screen py-20 px-8 flex items-center bg-gray-900 text-white"
//         data-scroll-section
//       >
//         <div className="max-w-6xl mx-auto w-full">
//           <h2 
//             className="text-4xl font-bold mb-12"
//             data-scroll
//             data-scroll-speed="0.3"
//           >
//             Get In Touch
//           </h2>
//           <form 
//             className="max-w-2xl space-y-6"
//             data-scroll
//             data-scroll-speed="0.5"
//           >
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="name" className="block mb-2">Name</label>
//                 <input 
//                   type="text" 
//                   id="name" 
//                   className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block mb-2">Email</label>
//                 <input 
//                   type="email" 
//                   id="email" 
//                   className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="message" className="block mb-2">Message</label>
//               <textarea 
//                 id="message" 
//                 rows="5" 
//                 className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//               ></textarea>
//             </div>
//             <button 
//               type="submit" 
//               className="px-6 py-3 bg-purple-600 rounded-lg font-medium hover:bg-purple-700 transition-colors"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer 
//         className="py-12 px-8 bg-gray-950 text-gray-400 text-center"
//         data-scroll-section
//       >
//         <p data-scroll data-scroll-speed="0.2">
//           © {new Date().getFullYear()} My Portfolio. All rights reserved.
//         </p>
//       </footer>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import Front from './components/mainWeb/Front'
import About from './components/mainWeb/About'
import Project from './components/mainWeb/Project'
import Experience from './components/mainWeb/Experience'
import Footer from './components/mainWeb/Footer'
import Contract from './components/mainWeb/Contract'
import BlogPreview from './components/blogWeb/BlogPreview'
import PostaBlog from './components/blogWeb/PostaBlog'
import VeiwAllPost from './components/blogWeb/VeiwAllPost'

const App = () => {
  
  return (
    <div className='w-screen'>
      <Front/>
      <About/>
      <Experience/>
      <Project/>
      <BlogPreview/>
      <Contract/>
      <Footer/>
      {/* <VeiwAllPost/> */}
      
    </div>
  )
}

export default App