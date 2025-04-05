// Experience.jsx
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer Intern",
      company: "Manparth Inc.",
      duration: "Feb 2025 - Present",
      description: [
        "Developed responsive web applications using React.js",
        "Collaborated with UX designers to implement modern interfaces",
        "Optimized application performance reducing load times by 40%"
      ],
      skills: ["React", "API's", "Tailwind CSS", "Redux"]
    },
    {
      id: 2,
      role: "Web Developer Intern",
      company: "Dr. Rajendra Gode Institute of Technology and Research",
      duration: "Not Available",
      description: [
        "Assisted in building and maintaining college websites",
        "Implemented new features based on client requirements",
        "Participated in code reviews and team meetings"
      ],
      skills: ["JavaScript", "HTML/CSS", "PHP", "MySQL"]
    }
  ];

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Professional Experience
      </h2>
      
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div 
            key={exp.id} 
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.role}</h3>
                <h4 className="text-lg text-gray-600 dark:text-gray-300">{exp.company}</h4>
              </div>
              <span className="text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                {exp.duration}
              </span>
            </div>
            
            <ul className="space-y-2 mb-4">
              {exp.description.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;