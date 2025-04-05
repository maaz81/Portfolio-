import React, { useState } from 'react';
import { FiSend, FiMapPin, FiPhone, FiMail, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        error: false
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ ...status, submitting: true });

        try {
            // Replace with your form submission logic
            await new Promise(resolve => setTimeout(resolve, 1500));
            setStatus({ submitting: false, submitted: true, error: false });
            setFormData({ name: '', email: '', message: '' });

            // Reset submission status after 5 seconds
            setTimeout(() => {
                setStatus({ ...status, submitted: false });
            }, 5000);
        } catch (error) {
            setStatus({ submitting: false, submitted: false, error: true });
        }
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100
            }
        }
    };

    return (
        <section id="contact" className="min-h-screen  py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss opportunities? Reach out and let's build something amazing together.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                    {/* Contact Form */}
                    <motion.div variants={itemVariants} className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700">
                        <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>

                        {status.submitted && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mb-6 p-4 bg-green-600/20 border border-green-400 rounded-lg"
                            >
                                Thanks for your message! I'll get back to you soon.
                            </motion.div>
                        )}

                        {status.error && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mb-6 p-4 bg-red-600/20 border border-red-400 rounded-lg"
                            >
                                Oops! Something went wrong. Please try again.
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={status.submitting}
                                className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-70"
                            >
                                {status.submitting ? (
                                    'Sending...'
                                ) : (
                                    <>
                                        <FiSend className="mr-2" />
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700">
                            <h3 className="text-2xl font-semibold mb-6">Contact Details</h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="text-blue-400 mr-4 mt-1">
                                        <FiMapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-lg mb-1">Location</h4>
                                        <p className="text-gray-300">Achalpur, Maharashtra</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="text-blue-400 mr-4 mt-1">
                                        <FiMail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-lg mb-1">Email</h4>
                                        <a href="mailto:contact@example.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                                            khanmaazahmad7@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="text-blue-400 mr-4 mt-1">
                                        <FiPhone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-lg mb-1">Phone</h4>
                                        <a href="tel:+1234567890" className="text-gray-300 hover:text-blue-400 transition-colors">
                                            +91 90220306469
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700">
                            <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
                            <div className="flex space-x-4">
                                <motion.a
                                    whileHover={{ y: -3 }}
                                    href="https://github.com/maaz81"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white transition-colors"
                                    aria-label="GitHub"
                                >
                                    <FiGithub size={24} />
                                </motion.a>
                                <motion.a
                                    whileHover={{ y: -3 }}
                                    href="https://www.linkedin.com/in/maaz-ahmad-khan-b052062b6/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <FiLinkedin size={24} />
                                </motion.a>
                                <motion.a
                                    whileHover={{ y: -3 }}
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white transition-colors"
                                    aria-label="Twitter"
                                >
                                    <FiTwitter size={24} />
                                </motion.a>
                                <motion.a
                                    whileHover={{ y: -3 }}
                                    href="https://www.instagram.com/maaz.khan_81?igsh=MWVrdGVyNGRwM3Uzbg=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white transition-colors"
                                    aria-label="Instagram"
                                >
                                    <FiInstagram size={24} />
                                </motion.a>
                                
                            </div>
                        </div>


                        {/* Map Embed */}
                        {/* <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700">
              <h3 className="text-2xl font-semibold mb-6">Find Me</h3>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.538962143581!2d-122.4194155846823!3d37.77492997975938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div> */}
                        {/* </div> */}
                    </motion.div>
                </motion.div>
            </div>
        </section >
    );
};

export default Contact;