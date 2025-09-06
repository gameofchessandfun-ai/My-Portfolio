import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

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
    { name: 'गृह', englishName: 'Home', href: '#home' },
    { name: 'परिचय', englishName: 'About', href: '#about' },
    { name: 'कौशल', englishName: 'Skills', href: '#skills' },
    { name: 'परियोजनाएं', englishName: 'Projects', href: '#projects' },
    { name: 'संपर्क', englishName: 'Contact', href: '#contact' },
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
            ? 'bg-gradient-to-r from-orange-900/95 via-red-900/95 to-orange-900/95 backdrop-blur-md shadow-2xl border-b border-orange-500/20'
            : 'bg-gradient-to-r from-orange-50/95 via-white/95 to-orange-50/95 backdrop-blur-md shadow-2xl border-b border-orange-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-20 px-4">
          {/* Logo with Indian Design */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">🕉</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
                आदित्य पारीक
              </span>
              <span className="text-xs text-orange-600 font-medium">Portfolio</span>
            </div>
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
                      ? 'text-orange-300 bg-orange-900/50'
                      : 'text-orange-700 bg-orange-100'
                    : darkMode
                    ? 'text-gray-300 hover:text-orange-300 hover:bg-orange-900/30'
                    : 'text-gray-700 hover:text-orange-700 hover:bg-orange-50'
                }`}
              >
                <span className="block text-xs opacity-75">{item.name}</span>
                <span className="block">{item.englishName}</span>
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"
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
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-3 rounded-full transition-all duration-300 ${
                darkMode
                  ? 'text-yellow-400 bg-orange-900/50 hover:bg-orange-800/50 shadow-lg'
                  : 'text-orange-600 bg-orange-100 hover:bg-orange-200 shadow-lg'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-3 rounded-full transition-all duration-300 ${
                darkMode
                  ? 'text-orange-300 bg-orange-900/50 hover:bg-orange-800/50'
                  : 'text-orange-600 bg-orange-100 hover:bg-orange-200'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
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
              ? 'bg-gradient-to-b from-orange-900/90 to-red-900/90' 
              : 'bg-gradient-to-b from-orange-50/90 to-white/90'
          } backdrop-blur-md rounded-b-2xl border-t border-orange-500/20`}>
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                whileHover={{ x: 10 }}
                onClick={() => scrollToSection(item.href)}
                className={`flex items-center justify-between w-full text-left py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.href.substring(1)
                    ? darkMode
                      ? 'text-orange-300 bg-orange-800/50'
                      : 'text-orange-700 bg-orange-100'
                    : darkMode
                    ? 'text-gray-300 hover:text-orange-300 hover:bg-orange-800/30'
                    : 'text-gray-700 hover:text-orange-700 hover:bg-orange-50'
                }`}
              >
                <span>{item.englishName}</span>
                <span className="text-xs opacity-75">{item.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;