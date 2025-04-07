import { useState, useRef, useEffect } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiClock, FiDollarSign } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: <FiMail className="w-5 h-5" />,
      title: "Email Me",
      value: "hello@yourdomain.com",
      action: "mailto:hello@yourdomain.com",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <FiPhone className="w-5 h-5" />,
      title: "Call Me",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      title: "Location",
      value: "San Francisco, CA",
      subtitle: "Available worldwide",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Build Something Amazing
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Get in touch and let's discuss how I can help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ways to Reach Me</h2>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -2 }}
                    className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => method.action && window.open(method.action, '_blank')}
                  >
                    <div className={`flex-shrink-0 p-3 rounded-lg ${method.color}`}>
                      {method.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{method.title}</h3>
                      <p className="text-gray-600">{method.value}</p>
                      {method.subtitle && (
                        <p className="text-sm text-gray-500 mt-1">{method.subtitle}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">My Availability</h2>
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-3 w-3 rounded-full bg-green-500 animate-pulse mr-3"></div>
                <span className="text-gray-700">Currently accepting new projects</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FiClock className="text-gray-500 mr-3" />
                  <span className="text-gray-700">Response time: Within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <FiDollarSign className="text-gray-500 mr-3" />
                  <span className="text-gray-700">Flexible pricing options available</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <AnimatePresence>
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12"
                >
                  <FiCheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
                  <p className="text-gray-600 mb-6">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Inquiry</h2>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label 
                        htmlFor="name" 
                        className={`block text-sm font-medium mb-1 transition-all ${
                          activeField === 'name' ? 'text-blue-600' : 'text-gray-700'
                        }`}
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setActiveField('name')}
                        onBlur={() => setActiveField(null)}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                          activeField === 'name' 
                            ? 'border-blue-400 focus:ring-blue-100 focus:border-blue-400'
                            : 'border-gray-300 focus:ring-gray-100 focus:border-gray-400'
                        }`}
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="email" 
                        className={`block text-sm font-medium mb-1 transition-all ${
                          activeField === 'email' ? 'text-blue-600' : 'text-gray-700'
                        }`}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setActiveField('email')}
                        onBlur={() => setActiveField(null)}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                          activeField === 'email' 
                            ? 'border-blue-400 focus:ring-blue-100 focus:border-blue-400'
                            : 'border-gray-300 focus:ring-gray-100 focus:border-gray-400'
                        }`}
                        placeholder="you@example.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label 
                          htmlFor="budget" 
                          className={`block text-sm font-medium mb-1 transition-all ${
                            activeField === 'budget' ? 'text-blue-600' : 'text-gray-700'
                          }`}
                        >
                          Project Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          onFocus={() => setActiveField('budget')}
                          onBlur={() => setActiveField(null)}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                            activeField === 'budget' 
                              ? 'border-blue-400 focus:ring-blue-100 focus:border-blue-400'
                              : 'border-gray-300 focus:ring-gray-100 focus:border-gray-400'
                          }`}
                        >
                          <option value="">Select budget range</option>
                          <option value="1k-5k">$1,000 - $5,000</option>
                          <option value="5k-10k">$5,000 - $10,000</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="25k+">$25,000+</option>
                          <option value="not-sure">Not sure yet</option>
                        </select>
                      </div>

                      <div>
                        <label 
                          htmlFor="timeline" 
                          className={`block text-sm font-medium mb-1 transition-all ${
                            activeField === 'timeline' ? 'text-blue-600' : 'text-gray-700'
                          }`}
                        >
                          Project Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          onFocus={() => setActiveField('timeline')}
                          onBlur={() => setActiveField(null)}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                            activeField === 'timeline' 
                              ? 'border-blue-400 focus:ring-blue-100 focus:border-blue-400'
                              : 'border-gray-300 focus:ring-gray-100 focus:border-gray-400'
                          }`}
                        >
                          <option value="">Select timeline</option>
                          <option value="1-2 weeks">1-2 weeks</option>
                          <option value="1 month">1 month</option>
                          <option value="1-3 months">1-3 months</option>
                          <option value="3-6 months">3-6 months</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label 
                        htmlFor="message" 
                        className={`block text-sm font-medium mb-1 transition-all ${
                          activeField === 'message' ? 'text-blue-600' : 'text-gray-700'
                        }`}
                      >
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setActiveField('message')}
                        onBlur={() => setActiveField(null)}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                          activeField === 'message' 
                            ? 'border-blue-400 focus:ring-blue-100 focus:border-blue-400'
                            : 'border-gray-300 focus:ring-gray-100 focus:border-gray-400'
                        }`}
                        placeholder="Tell me about your project goals, requirements, and any other details..."
                      ></textarea>
                    </div>

                    <div>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-md"
                      >
                        <FiSend className="mr-2" />
                        Send Message
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;