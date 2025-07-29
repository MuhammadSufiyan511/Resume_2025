import React, { useState, useEffect, useRef } from 'react';
import { Info } from 'lucide-react';
import Me from '../assets/me.jpg'
import { FaLinkedin } from "react-icons/fa";
import cv from "../assets/Muhammad_Sufiyan_BSCS_Resume_2025.pdf"
import contact from "./Contact"





const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const linkedinUrl = "https://www.linkedin.com/in/muhammad-sufiyan-241a1a231";
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  useEffect(() => {
    setIsVisible(true);
  }, []);

  const achievements = [
    { number: '3.67', label: 'CGPA', suffix: '/4.0' },
    { number: '9+', label: 'Technologies', suffix: '' },
    { number: '15+', label: 'Projects', suffix: '' },
    { number: '2+', label: 'Years Learning', suffix: '' }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className={`flex flex-col items-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-100 dark:from-blue-500/20 dark:to-blue-500/20 rounded-2xl mb-6">
            <Info className="w-8 h-8 text-blue-600 dark:text-blue-300 " />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white bg-clip-text text-transparent mb-4">
            About Me
          </h2>



          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl text-center mt-6 leading-relaxed">
            Passionate Computer Science student building the future through code
          </p>
        </div>

        <div className="flex flex-col xl:flex-row items-start gap-16">


          {/* Content Section */}
          <div className={`xl:w-5/5  transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className={`xl:w-2/5 flex flex-col items-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* Profile Image */}
              {/* Profile Image */}
             

              {/* Achievement Stats */}
              {/* <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.label}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                    {achievement.number}
                    <span className="text-lg">{achievement.suffix}</span>
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div> */}
            </div>
            <div className="mt-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-200/50 dark:border-gray-700/50">

              {/* Professional Summary */}
              <div>
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
                    I am a <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">motivated Computer Science student</span> with hands-on experience in web development, programming, and teaching assistance.
                    As a strong analytical thinker and collaborative team player, I specialize in building modern web applications using
                    technologies like <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Java, C/C++, JavaScript (MERN stack), and ASP.NET</span>.
                    Currently seeking <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">entry-level software development or internship opportunities</span> to apply my technical skills in a professional environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={cv} rel="noopener noreferrer" className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>


            </div>
            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Wanna see my LinkedIn profile?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/30 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:shadow-lg hover:scale-105"
                ><FaLinkedin className="mx-2 text-blue-600 transition" size={20} />
                  View LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient-xy {
          background-size: 400% 400%;
          animation: gradient-xy 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default About;