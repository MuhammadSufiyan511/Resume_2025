// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './Components/navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

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
