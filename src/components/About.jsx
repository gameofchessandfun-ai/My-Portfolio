import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';


const About = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '5+', label: 'Projects Completed' },
  
    { number: '10+', label: 'Technologies' },
  ];

  return (
    <section id="about" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute inset-0 ${
          darkMode 
            ? 'bg-gradient-to-br from-orange-900 to-red-900' 
            : 'bg-gradient-to-br from-orange-50 to-red-50'
        }`}></div>
        {/* Decorative elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-32 h-32 border border-orange-300/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-red-300/20 rounded-full"
        />
      </div>

      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full h-96 rounded-2xl overflow-hidden ${
                  darkMode ? 'bg-gradient-to-br from-orange-900/50 to-red-900/50' : 'bg-gradient-to-br from-orange-100 to-red-100'
                } shadow-2xl border-2 ${darkMode ? 'border-orange-500/20' : 'border-orange-300/30'}`}
              >
                <div className="w-full h-full bg-gradient-to-br from-orange-500 via-red-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold relative overflow-hidden">
                  Aditya pareek
                  {/* Animated overlay */}
                  <motion.div
                    animate={{ 
                      background: [
                        'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                        'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)'
                      ],
                      x: ['-100%', '200%']
                    }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                    className="absolute inset-0"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-2xl border-4 border-white/20"
              >
                Adi
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-yellow-300/50 rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <motion.h2
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
                मेरे बारे में
              </span>
            </motion.h2>
            <motion.h3
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="text-2xl md:text-3xl font-semibold mb-6"
            >
              About <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Me</span>
            </motion.h3>

            <motion.p
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className={`text-lg mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Passionate about delivering measurable business impact, I specialize in engineering intelligent, scalable machine learning systems that solve complex problems and enhance user experiences. My work transforms cutting-edge research into tangible products that drive growth and innovation.
            </motion.p>

            <motion.p
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className={`text-lg mb-8 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className="text-center"
                >
                  <motion.div 
                    className="text-2xl md:text-3xl font-bold gradient-text mb-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Preview */}
            <motion.div variants={itemVariants}>
              <h3 className={`text-xl font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                What I Do
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Machine Learning Model Development','Frontend Development', 'Backend Development'].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 1.2 + index * 0.2 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      darkMode
                        ? 'bg-gradient-to-r from-orange-900/50 to-red-900/50 text-gray-300 border border-orange-500/20'
                        : 'bg-gradient-to-r from-orange-100 to-red-100 text-gray-700 border border-orange-300/30'
                    } shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;