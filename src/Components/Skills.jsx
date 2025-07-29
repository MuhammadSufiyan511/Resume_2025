import React, { useState } from 'react';
import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaBootstrap
} from 'react-icons/fa';

import {
  SiMongodb,
  SiDotnet,
  SiCplusplus,
  SiExpress,
  SiTailwindcss,
  SiMysql
} from 'react-icons/si';


import { Settings } from 'lucide-react';
const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      name: 'React',
      icon: <FaReact size={40} />,
      color: 'text-cyan-400',
      bgGradient: 'from-cyan-400 to-blue-500',
      level: 'Advanced'
    },

    {
      name: 'JavaScript',
      icon: <FaJs size={40} />,
      color: 'text-yellow-500',
      bgGradient: 'from-yellow-400 to-yellow-600',
      level: 'Advanced'
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs size={40} />,
      color: 'text-green-600',
      bgGradient: 'from-green-500 to-emerald-600',
      level: 'Intermediate'
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb size={40} />,
      color: 'text-green-500',
      bgGradient: 'from-green-400 to-green-600',
      level: 'Intermediate'
    },

    {
      name: 'HTML/CSS',
      icon: (
        <div className="flex space-x-1">
          <FaHtml5 size={36} className="text-orange-600" />
          <FaCss3Alt size={36} className="text-blue-600" />
        </div>
      ),
      color: 'text-gradient',
      bgGradient: 'from-orange-500 to-blue-500',
      level: 'Expert'
    },
    {
      name: 'Express.js',
      icon: <SiExpress size={40} />,
      color: 'text-green-800',
      bgGradient: 'from-green-800 to-emerald-600',
      level: 'Advanced'
    },

    {
      name: 'Git/Github',
      icon: <FaGithub size={40} />,
      color: 'text-green-600',
      bgGradient: 'from-green-500 to-emerald-600',
      level: 'Intermediate'
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss size={40} />,
      color: 'text-purple-600',
      bgGradient: 'from-purple-500 to-violet-600',
      level: 'Advanced'
    },
    {
      name: 'Bootstrap',
      icon: <FaBootstrap size={40} />,
      color: 'text-blue-700',
      bgGradient: 'from-blue-700 to-blue-900',
      level: 'Intermediate'
    },
    {
      name: 'MySql',
      icon: <SiMysql size={40} />,
      color: 'text-white',
      bgGradient: 'from-orange-700 to-white',
      level: 'Intermediate'
    },

    {
      name: 'ASP.NET',
      icon: <SiDotnet size={40} />,
      color: 'text-purple-600',
      bgGradient: 'from-purple-500 to-violet-600',
      level: 'Beginner'
    },





  ];

  const skillLevels = {
    'Expert': 'w-full',
    'Advanced': 'w-4/5',
    'Intermediate': 'w-3/5',
    'Beginner': 'w-2/5'
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-100 to-green-100 dark:from-green-900/30 dark:to-green-900/30 rounded-2xl mb-6">
            <Settings className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Expertise across modern web technologies and programming languages
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Card */}
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-8 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">

                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.bgGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                {/* Floating Particles Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className={`mb-6 ${skill.color} transform group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    {skill.name}
                  </h3>

                  {/* Skill Level */}
                  <div className="w-full mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 bg-gradient-to-r ${skill.bgGradient} rounded-full transition-all duration-500 ${hoveredSkill === index ? skillLevels[skill.level] : 'w-0'
                          }`}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200/50 dark:border-gray-700/50">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Always learning and exploring new technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;