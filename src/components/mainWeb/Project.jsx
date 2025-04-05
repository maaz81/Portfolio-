import React from 'react'
import imageData from '../imagesImp' // Adjust the path as necessary;
const Project = () => {
return (
    <div data-scroll-container id='projects' className="sm:h-full lg:h-full bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-center">
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-white text-center mb-8">My Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.from({ length: imageData.length }).map((_, index) => (
                    <div
                        key={index}
                        className="project-card bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
                    >
                        <img
                            // src={`https://via.placeholder.com/300?text=Project+${index + 1}`}
                            src={imageData.data[index].src}
                            // alt={`Project ${index + 1}`}
                            alt={imageData.data[index].alt}

                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{imageData.data[index].title}</h3>
                            <p className="text-sm text-gray-600">
                                {imageData.data[index].description}.
                            </p>
                        </div>
                        <div className="p-4">
                            <a
                                href={imageData.data[index].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 cursor-pointer transition-colors hover:text-slate-400"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
)
}

export default Project