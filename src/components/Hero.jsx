import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Star, Download, Eye, Sparkles } from 'lucide-react';

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

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Aditya_CV.pdf';
    link.download = 'Aditya_Pareek_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background with Indian Patterns */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${
          darkMode 
            ? 'bg-gradient-to-br from-orange-900 via-red-900 to-purple-900' 
            : 'bg-gradient-to-br from-orange-50 via-red-50 to-purple-50'
        }`}></div>
        
        {/* Mandala Pattern */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-20 w-64 h-64 border-2 border-orange-500/30 rounded-full"
          >
            <div className="absolute inset-4 border border-red-400/40 rounded-full">
              <div className="absolute inset-4 border border-yellow-400/30 rounded-full"></div>
            </div>
          </motion.div>
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-20 w-80 h-80 border-2 border-purple-500/30 rounded-full"
          >
            <div className="absolute inset-6 border border-red-400/40 rounded-full">
              <div className="absolute inset-6 border border-orange-400/30 rounded-full"></div>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${
                i % 3 === 0 
                  ? 'w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500' 
                  : i % 3 === 1 
                  ? 'w-1 h-1 bg-yellow-400' 
                  : 'w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container-max section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Profile Image with Indian Border */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="relative inline-block"
            >
              <div className="relative">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-purple-600 p-1 shadow-2xl"
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-6xl font-bold shadow-inner relative overflow-hidden">
                    आ
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-2 border-dashed border-yellow-300/50 rounded-full"
                    />
                  </div>
                </motion.div>
                
                {/* Decorative Elements */}
                <motion.div 
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Star size={16} className="text-white" />
                </motion.div>
                <motion.div 
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-red-500 to-purple-600 rounded-full"
                />
                
                {/* Rotating Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-orange-400/60 rounded-full"
                />
                
                {/* Additional decorative rings */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 border border-dotted border-purple-400/40 rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Name with Devanagari */}
          <motion.div variants={itemVariants} className="mb-6">
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
                आदित्य पारीक
              </span>
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-semibold"
              whileHover={{ scale: 1.02 }}
            >
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Aditya Pareek
              </span>
            </motion.h2>
          </motion.div>

          {/* Title with Sanskrit */}
          <motion.div variants={itemVariants} className="mb-6">
            <motion.p 
              className={`text-xl md:text-2xl mb-2 font-medium ${
              darkMode ? 'text-orange-300' : 'text-orange-700'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              मशीन लर्निंग इंजीनियर
            </motion.p>
            <motion.p 
              className={`text-lg md:text-xl ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
              whileHover={{ scale: 1.02 }}
            >
              ML Systems Engineer
            </motion.p>
          </motion.div>

          {/* Enhanced Description */}
          <motion.p
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              "भारतीय परंपरा और आधुनिक तकनीक का संगम"
            </motion.span>
            <br />
            <span className="text-base opacity-90">
              Blending Indian wisdom with cutting-edge AI to create intelligent solutions 
              that transform data into meaningful digital experiences.
            </span>
          </motion.p>

          {/* Enhanced Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(251, 146, 60, 0.4)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="relative px-8 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 text-white font-semibold rounded-full shadow-2xl overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Eye size={20} />
                <span>🚀 मेरा काम देखें</span>
                <Sparkles size={16} />
              </span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
            </motion.button>
            
            <motion.a
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(251, 146, 60, 0.3)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadResume}
              className={`relative px-8 py-4 border-2 border-orange-500 font-semibold rounded-full transition-all duration-300 group ${
                darkMode 
                  ? 'text-orange-300 hover:bg-orange-500 hover:text-white' 
                  : 'text-orange-600 hover:bg-orange-500 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-3">
                <Download size={20} />
                <span>📄 Resume डाउनलोड करें</span>
              </span>
            </motion.a>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-8"
          >
            {[
              { icon: Github, url: "https://github.com/adp-iitm", color: "hover:text-gray-900", label: "GitHub" },
              { icon: Linkedin, url: "https://www.linkedin.com/in/aditya-pareek-235280293", color: "hover:text-blue-600", label: "LinkedIn" },
              { icon: Mail, url: "mailto:adpaniitian@gmail.com", color: "hover:text-red-500", label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                whileHover={{ 
                  scale: 1.3, 
                  rotate: [0, -10, 10, 0],
                  y: -5
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.2 }}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full transition-all duration-300 ${
                  darkMode
                    ? 'text-gray-400 bg-gradient-to-r from-orange-900/30 to-red-900/30 hover:from-orange-800/50 hover:to-red-800/50 hover:text-white border border-orange-500/20'
                    : 'text-gray-600 bg-gradient-to-r from-orange-100 to-red-100 hover:from-orange-200 hover:to-red-200 hover:text-gray-900 border border-orange-300/30'
                } ${social.color} shadow-lg hover:shadow-2xl`}
              >
                <social.icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ 
            y: [0, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.2 }}
          onClick={scrollToAbout}
          className={`p-3 rounded-full transition-all duration-300 ${
            darkMode
              ? 'text-orange-300 bg-gradient-to-r from-orange-900/30 to-red-900/30 hover:from-orange-800/50 hover:to-red-800/50 border border-orange-500/20'
              : 'text-orange-600 bg-gradient-to-r from-orange-100 to-red-100 hover:from-orange-200 hover:to-red-200 border border-orange-300/30'
          } shadow-lg hover:shadow-2xl`}
        >
          <ChevronDown size={28} />
        </motion.button>
        <motion.p 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`text-xs mt-2 text-center ${darkMode ? 'text-orange-300' : 'text-orange-600'}`}
        >
          नीचे स्क्रॉल करें
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;