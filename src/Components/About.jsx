import React, { useState, useEffect } from 'react';
import { Info } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import cv from '../assets/Muhammad Sufiyan-Mern Stack Developer.pdf';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const linkedinUrl = 'https://www.linkedin.com/in/muhammad-sufiyan-241a1a231';

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className={`flex flex-col items-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-100 dark:from-blue-500/20 dark:to-blue-500/20 rounded-2xl mb-6">
            <Info className="w-8 h-8 text-blue-600 dark:text-blue-300" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl text-center mt-6 leading-relaxed">
            Computer Science graduate (CGPA: 3.65) with hands-on experience in MERN stack development, technical leadership, and IT training.
          </p>
        </div>

        <div className="mt-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mr-4">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white">Professional Summary</h3>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-indigo-200/50 dark:border-indigo-700/50">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Experienced in full-stack development, mentoring students, and delivering industry-focused training programs. Strong command of JavaScript ecosystems with practical delivery across real-world web products.
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300 mt-4">
              Languages: English (Professional), Urdu (Native)
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={cv} rel="noopener noreferrer" className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 relative overflow-hidden">
            <span className="relative z-10 flex items-center">Download Resume</span>
          </a>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">View my professional profile</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/30 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <FaLinkedin className="mx-2 text-blue-600 transition" size={20} />
              View LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
