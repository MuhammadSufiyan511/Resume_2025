import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const closeOnResize = () => setMenuOpen(false);
    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-xl border-b border-gray-200/20 dark:border-gray-700/20' 
          : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg'
      }`}>
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            {/* Logo / Name */}
            <div className="relative group">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-purple-600 hover:via-blue-600 hover:to-indigo-600 transition-all duration-300 cursor-pointer">
                Muhammad Sufiyan
              </div>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  activeClass="active"
                  onSetActive={() => setActiveSection(item.id)}
                  className="group relative px-4 py-2 mx-1 rounded-xl cursor-pointer transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                      {item.icon}
                    </span>
                    <span className={`font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600' 
                        : 'text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                    }`}>
                      {item.label}
                    </span>
                  </div>
                  
                  {/* Active indicator */}
                  <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ${
                    activeSection === item.id ? 'w-8' : 'w-0 group-hover:w-6'
                  }`}></div>
                </Link>
              ))}
            </div>

            {/* Right Controls */}
            <div className="flex items-center space-x-3">
              

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden relative p-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <div className="relative z-10">
                  {menuOpen ? (
                    <FaTimes className="text-xl text-gray-700 dark:text-gray-300 transform rotate-180 transition-transform duration-300" />
                  ) : (
                    <FaBars className="text-xl text-gray-700 dark:text-gray-300 transition-transform duration-300" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200/20 dark:border-gray-700/20">
            <div className="container mx-auto px-6 py-4">
              <div className="grid grid-cols-1 gap-2">
                {navigationItems.map((item, index) => (
                  <Link
                    key={item.id}
                    to={item.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => setMenuOpen(false)}
                    className={`group flex items-center space-x-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transform hover:translate-x-2 ${
                      activeSection === item.id ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20' : ''
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: menuOpen ? `slideInLeft 0.5s ease-out forwards` : 'none'
                    }}
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-colors duration-300">
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <span className={`font-semibold uppercase tracking-wider transition-colors duration-300 ${
                      activeSection === item.id 
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600' 
                        : 'text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                    }`}>
                      {item.label}
                    </span>
                    <div className="flex-1"></div>
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-100' 
                        : 'bg-gray-300 dark:bg-gray-600 scale-0 group-hover:scale-100'
                    }`}></div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20"></div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .active {
          color: transparent;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
        }
      `}</style>
    </>
  );
};

export default Navbar;