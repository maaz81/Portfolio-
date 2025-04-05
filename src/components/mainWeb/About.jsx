import React from 'react'

const About = () => {
  return (
    <div data-scroll-container id='about'>
        <section  className="py-12 px-8 bg-gray-950 text-gray-400 h-screen" data-scroll-section>
            <div className="flex justify-center mb-6">
                <img data-scroll data-scroll-speed='-0.1'
                    src="/image/maaz.jpg" 
                    alt="About Me" 
                    className="sm:mt-12 sm:mb-20 md:mt-20 md:mb-8 p-1 w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-gray-700"
                />
            </div>
            <h2 className="sm:text-2xl md:text-3xl mb-6 sm:mb-8 underline underline-offset-8 text-center">
            About Me
            </h2>
            <p className="sm:text-lg md:text-2xl text-center mb-4">
            I'm a passionate web developer with a love for creating beautiful and functional websites.
            </p>
            <p className="md:text-lg sm:text-base  text-center">
            I specialize in front-end development, focusing on responsive design and user experience.
            </p>
        </section>
    </div>
  )
}

export default About