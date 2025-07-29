// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // On mount: read localStorage or system preference (optional)
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-dark-mode');
    if (saved !== null) {
      setDarkMode(JSON.parse(saved));
    }
  }, []);

  // Whenever darkMode changes, toggle class on <html> and save
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('portfolio-dark-mode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
     
      <Footer />
    </div>
  );
}

export default App;
