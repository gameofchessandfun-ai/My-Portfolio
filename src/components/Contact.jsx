import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call - replace with your actual email service
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'ईमेल',
      englishTitle: 'Email',
      value: 'adpaniitian@gmail.com',
      link: 'mailto:adpaniitian@gmail.com',
      color: 'from-red-500 to-pink-600',
    },
    {
      icon: Phone,
      title: 'फोन',
      englishTitle: 'Phone',
      value: '+91 8829099340',
      link: 'tel:8829099340',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: MapPin,
      title: 'स्थान',
      englishTitle: 'Location',
      value: 'मैसूर, कर्नाटक, भारत',
      englishValue: 'Mysuru, Karnataka, India',
      link: '#',
      color: 'from-blue-500 to-indigo-600',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/adp-iitm',
      color: 'hover:text-gray-900',
      bgColor: 'from-gray-700 to-gray-900',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aditya-pareek-235280293',
      color: 'hover:text-blue-600',
      bgColor: 'from-blue-600 to-blue-800',
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://twitter.com',
      color: 'hover:text-blue-400',
      bgColor: 'from-blue-400 to-blue-600',
    },
  ];

  return (
    <section id="contact" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute inset-0 ${
          darkMode 
            ? 'bg-gradient-to-br from-orange-900 to-red-900' 
            : 'bg-gradient-to-br from-orange-50 to-red-50'
        }`}></div>
      </div>

      <div className="container-max relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
              संपर्क करें
            </span>
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold mb-6"
          >
            Get In <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Touch</span>
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            आइए मिलकर कुछ अद्भुत बनाते हैं! <br />
            <span className="text-base opacity-90">
              Have a project in mind or want to collaborate? Let's create something amazing together!
            </span>
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h3 className={`text-2xl font-semibold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              संपर्क जानकारी
              <span className="block text-lg font-normal opacity-75">Contact Information</span>
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className={`flex items-center gap-4 p-6 rounded-2xl transition-all duration-300 ${
                    darkMode
                      ? 'bg-gradient-to-r from-orange-900/50 to-red-900/50 hover:from-orange-800/60 hover:to-red-800/60 border border-orange-500/20'
                      : 'bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 border border-orange-200/50'
                  } shadow-lg hover:shadow-2xl`}
                >
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${info.color} text-white shadow-lg`}>
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h4 className={`font-semibold text-lg ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {info.title}
                    </h4>
                    <p className={`text-sm opacity-75 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {info.englishTitle}
                    </p>
                    <p className={`text-sm font-medium ${
                      darkMode ? 'text-orange-300' : 'text-orange-600'
                    }`}>
                      {info.value}
                    </p>
                    {info.englishValue && (
                      <p className={`text-xs opacity-75 ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {info.englishValue}
                      </p>
                    )}
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className={`text-xl font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                मुझे फॉलो करें
                <span className="block text-base font-normal opacity-75">Follow Me</span>
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 rounded-xl bg-gradient-to-r ${social.bgColor} text-white transition-all duration-300 shadow-lg hover:shadow-2xl`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div variants={itemVariants}>
            <h3 className={`text-2xl font-semibold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              संदेश भेजें
              <span className="block text-lg font-normal opacity-75">Send Message</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.5 }}
                >
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    नाम / Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 ${
                      darkMode
                        ? 'bg-orange-900/30 border-orange-700 text-white placeholder-gray-400 focus:border-orange-500 focus:bg-orange-900/50'
                        : 'bg-white border-orange-200 text-gray-900 placeholder-gray-500 focus:border-orange-500 focus:bg-orange-50'
                    } shadow-lg focus:shadow-2xl`}
                    placeholder="आपका नाम / Your Name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.6 }}
                >
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    ईमेल / Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 ${
                      darkMode
                        ? 'bg-orange-900/30 border-orange-700 text-white placeholder-gray-400 focus:border-orange-500 focus:bg-orange-900/50'
                        : 'bg-white border-orange-200 text-gray-900 placeholder-gray-500 focus:border-orange-500 focus:bg-orange-50'
                    } shadow-lg focus:shadow-2xl`}
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7 }}
              >
                <label
                  htmlFor="subject"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  विषय / Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 ${
                    darkMode
                      ? 'bg-orange-900/30 border-orange-700 text-white placeholder-gray-400 focus:border-orange-500 focus:bg-orange-900/50'
                      : 'bg-white border-orange-200 text-gray-900 placeholder-gray-500 focus:border-orange-500 focus:bg-orange-50'
                  } shadow-lg focus:shadow-2xl`}
                  placeholder="विषय / Subject"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 }}
              >
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  संदेश / Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 resize-none ${
                    darkMode
                      ? 'bg-orange-900/30 border-orange-700 text-white placeholder-gray-400 focus:border-orange-500 focus:bg-orange-900/50'
                      : 'bg-white border-orange-200 text-gray-900 placeholder-gray-500 focus:border-orange-500 focus:bg-orange-50'
                  } shadow-lg focus:shadow-2xl`}
                  placeholder="आपका संदेश... / Your message..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-lg hover:shadow-2xl'
                } text-white flex items-center justify-center gap-3`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    भेजा जा रहा है...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    संदेश भेजें / Send Message
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl flex items-center gap-3 ${
                    submitStatus === 'success'
                      ? darkMode
                        ? 'bg-green-900/50 text-green-300 border border-green-700'
                        : 'bg-green-50 text-green-700 border border-green-200'
                      : darkMode
                      ? 'bg-red-900/50 text-red-300 border border-red-700'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <>
                      <CheckCircle size={20} />
                      <span>संदेश सफलतापूर्वक भेजा गया! / Message sent successfully!</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle size={20} />
                      <span>संदेश भेजने में त्रुटि। कृपया पुनः प्रयास करें। / Error sending message. Please try again.</span>
                    </>
                  )}
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;