import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const Hero = ({ darkMode }) => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-purple-600"></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-33 h-32 mx-auto mb-8 rounded-full object-cover border-4 border-primary-600"
              />
            </motion.div>

          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Aditya Pareek</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className={`text-xl md:text-2xl mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
          >
            ML Systems Engineer
          </motion.p>

          <motion.p
            variants={itemVariants}
            className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}
          >
            "I design intelligent, scalable, and user-focused machine learning solutions that turn data into impactful digital experiences — blending engineering precision with real-world application."
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="btn-primary"
            >
              View My Work
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Aditya_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              📄 View CV
            </motion.a>

          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/adp-iitm"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-colors duration-200 ${darkMode
                ? 'text-gray-400 hover:text-white hover:bg-dark-700'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/aditya-pareek-235280293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-colors duration-200 ${darkMode
                ? 'text-gray-400 hover:text-white hover:bg-dark-700'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:adpaniitian@gmail.com"
              className={`p-3 rounded-full transition-colors duration-200 ${darkMode
                ? 'text-gray-400 hover:text-white hover:bg-dark-700'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToAbout}
          className={`p-2 rounded-full transition-colors duration-200 ${darkMode
            ? 'text-gray-400 hover:text-white hover:bg-dark-700'
            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
            }`}
        >
          <ChevronDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
