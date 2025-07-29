import React, { useState } from 'react';
import { ExternalLink, Github, Code, Database, Globe, Brain, ShoppingCart, FileText, Cloud, Star, ArrowRight, Filter } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    {
      title: 'Tastify-Website',
      desc: 'Built front-end with HTML, CSS, JavaScript, Bootstrap; integrated PHP backend for menu management.',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap'],
      category: 'Web Development',
      icon: Globe,
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
      featured: false,
      link: '#',
      github: '#',
    },
    {
      title: 'Weather-Web-App',
      desc: 'JavaScript app consuming third-party weather APIs to display real-time forecasts.',
      tags: ['JavaScript', 'API', 'Fetch'],
      category: 'Web Development',
      icon: Cloud,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      featured: false,
      link: '#',
      github: '#',
    },
    {
      title: 'PDF-Merger',
      desc: 'Created a Node.js/Express.js tool to merge multiple PDFs; file upload/download endpoints.',
      tags: ['Node.js', 'Express.js'],
      category: 'Backend',
      icon: FileText,
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      featured: false,
      link: '#',
      github: '#',
    },
    {
      title: 'Recipe-Finder',
      desc: 'Implemented JS search/filter interface for recipe lookup against a public REST API.',
      tags: ['JavaScript', 'REST API'],
      category: 'Web Development',
      icon: Code,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      featured: false,
      link: '#',
      github: '#',
    },
    {
      title: 'Shopping-App',
      desc: 'E-commerce prototype in ASP.NET: product listing, cart, checkout workflows.',
      tags: ['ASP.NET', 'C#'],
      category: 'Full Stack',
      icon: ShoppingCart,
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20',
      featured: true,
      link: '#',
      github: '#',
    },
    {
      title: 'Tumor-Detection-Platform',
      desc: 'MERN-stack AI app for brain tumor detection; integrated TensorFlow.js model & hospital recommendations.',
      tags: ['React', 'Node.js', 'TensorFlow.js'],
      category: 'AI/ML',
      icon: Brain,
      gradient: 'from-rose-500 to-pink-500',
      bgGradient: 'from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20',
      featured: true,
      link: '#',
      github: '#',
    },
  ];

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  const getTagColor = (tag) => {
    const colors = {
      'HTML': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
      'CSS': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
      'JavaScript': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
      'React': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
      'Node.js': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
      'PHP': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
      'ASP.NET': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
      'TensorFlow.js': 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300',
    };
    return colors[tag] || 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
  };

  return (
    <section id="projects" className="py-32 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl mb-6">
            <Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-white dark:via-purple-300 dark:to-white bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise across various domains
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 backdrop-blur-sm border border-gray-200 dark:border-gray-600'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>{category}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.title}
                className={`group relative ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
              >
                <div className={`relative bg-gradient-to-r ${project.bgGradient} rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-white/50 dark:border-gray-700/50 backdrop-blur-sm overflow-hidden`}>
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-6 right-6 z-10">
                      <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        <Star className="w-4 h-4" />
                        <span>Featured</span>
                      </div>
                    </div>
                  )}

                  <div className={`p-8 ${project.featured ? 'lg:flex lg:items-center lg:space-x-8' : ''}`}>
                    {/* Project Icon & Info */}
                    <div className={`${project.featured ? 'lg:flex-1' : ''}`}>
                      <div className="flex items-start space-x-4 mb-6">
                        <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            {project.title}
                          </h3>
                          <div className={`inline-block px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-sm font-medium rounded-full`}>
                            {project.category}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                        {project.desc}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${getTagColor(tag)} backdrop-blur-sm`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      {/* <div className="flex flex-wrap gap-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                        >
                          <span className="mr-2">Live Demo</span>
                          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn inline-flex items-center px-6 py-3 bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 rounded-2xl font-semibold backdrop-blur-sm border border-gray-200 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                        >
                          <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                          <span>Source Code</span>
                        </a>
                      </div> */}
                    </div>

                    {/* Featured Project Visual Element */}
                    {project.featured && (
                      <div className="lg:flex-1 mt-8 lg:mt-0">
                        <div className="relative">
                          <div className={`w-full h-64 bg-gradient-to-br ${project.gradient} rounded-2xl shadow-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                            <IconComponent className="w-24 h-24 text-white/80" />
                          </div>
                          <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm"></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Gradient border effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <div className={`w-32 h-32 bg-gradient-to-br ${project.gradient} rounded-full blur-2xl`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
};

export default Projects;