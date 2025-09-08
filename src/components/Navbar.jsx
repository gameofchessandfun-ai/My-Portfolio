import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X, Home, User, Code, Briefcase, Mail } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'गृह', englishName: 'Home', href: '#home', icon: Home },
    { name: 'परिचय', englishName: 'About', href: '#about', icon: User },
    { name: 'कौशल', englishName: 'Skills', href: '#skills', icon: Code },
    { name: 'परियोजनाएं', englishName: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'संपर्क', englishName: 'Contact', href: '#contact', icon: Mail },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-gradient-to-r from-orange-900/95 via-red-900/95 to-purple-900/95 backdrop-blur-xl shadow-2xl border-b border-orange-500/30'
            : 'bg-gradient-to-r from-orange-50/95 via-white/95 to-purple-50/95 backdrop-blur-xl shadow-2xl border-b border-orange-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-20 px-4">
          {/* Logo with Indian Design */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#home')}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <motion.div 
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 bg-gradient-to-br from-orange-500 via-red-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg border-2 border-yellow-400/30"
              >
                <span className="text-white font-bold text-xl">🕉</span>
              </motion.div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"
              />
            </div>
            <motion.div 
              className="flex flex-col cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
                आदित्य पारीक
              </span>
              <span className="text-xs text-orange-600 font-medium">Portfolio</span>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  activeSection === item.href.substring(1)
                    ? darkMode
                      ? 'text-orange-300 bg-gradient-to-r from-orange-900/50 to-red-900/50 shadow-lg'
                      : 'text-orange-700 bg-gradient-to-r from-orange-100 to-red-100 shadow-lg'
                    : darkMode
                    ? 'text-gray-300 hover:text-orange-300 hover:bg-gradient-to-r hover:from-orange-900/30 hover:to-red-900/30'
                    : 'text-gray-700 hover:text-orange-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <item.icon size={16} className="opacity-75" />
                  <div className="flex flex-col">
                    <span className="text-xs opacity-75">{item.name}</span>
                    <span className="text-sm">{item.englishName}</span>
                  </div>
                </div>
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-3 rounded-full transition-all duration-300 ${
                darkMode
                  ? 'text-yellow-400 bg-gradient-to-r from-orange-900/50 to-red-900/50 hover:from-orange-800/60 hover:to-red-800/60 shadow-lg border border-yellow-400/20'
                  : 'text-orange-600 bg-gradient-to-r from-orange-100 to-red-100 hover:from-orange-200 hover:to-red-200 shadow-lg border border-orange-300/30'
              }`}
            >
              <motion.div
                animate={darkMode ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.5 }}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-3 rounded-full transition-all duration-300 ${
                darkMode
                  ? 'text-orange-300 bg-gradient-to-r from-orange-900/50 to-red-900/50 hover:from-orange-800/60 hover:to-red-800/60 border border-orange-500/20'
                  : 'text-orange-600 bg-gradient-to-r from-orange-100 to-red-100 hover:from-orange-200 hover:to-red-200 border border-orange-300/30'
              }`}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className={`px-4 py-4 space-y-2 ${
            darkMode 
              ? 'bg-gradient-to-b from-orange-900/95 via-red-900/95 to-purple-900/95' 
              : 'bg-gradient-to-b from-orange-50/95 via-white/95 to-purple-50/95'
          } backdrop-blur-xl rounded-b-2xl border-t border-orange-500/30 shadow-2xl`}>
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection(item.href)}
                className={`flex items-center justify-between w-full text-left py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.href.substring(1)
                    ? darkMode
                      ? 'text-orange-300 bg-gradient-to-r from-orange-800/50 to-red-800/50 shadow-lg'
                      : 'text-orange-700 bg-gradient-to-r from-orange-100 to-red-100 shadow-lg'
                    : darkMode
                    ? 'text-gray-300 hover:text-orange-300 hover:bg-gradient-to-r hover:from-orange-800/30 hover:to-red-800/30'
                    : 'text-gray-700 hover:text-orange-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={18} />
                  <div className="flex flex-col">
                    <span className="text-sm">{item.englishName}</span>
                    <span className="text-xs opacity-75">{item.name}</span>
                  </div>
                </div>
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeMobileTab"
                    className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                    initial={false}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;