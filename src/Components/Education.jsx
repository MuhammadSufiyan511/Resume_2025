import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, Star, BookOpen, Trophy } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Sc. in Computer Science',
      institution: 'National University of Modern Languages, Islamabad',
      date: '2021 – Present',
      location: 'Islamabad, Pakistan',
      status: 'Current',
      details: ['CGPA: 3.67/4.00'],
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
    },
    {
      degree: 'Intermediate in Computer Science',
      institution: 'Steps College, Rawalpindi',
      date: '2019 – 2021',
      location: 'Rawalpindi, Pakistan',
      status: 'Completed',
      details: ['Graduated with 863/1100 marks', 'Percentage: 78.45%'],
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
    },
    {
      degree: 'Matriculation (Science)',
      institution: 'Manaar Public School, Rawalpindi',
      date: '2007 – 2019',
      location: 'Rawalpindi, Pakistan',
      status: 'Completed',
      details: ['Graduated with 776/1100 marks', 'Percentage: 70.55%'],
      icon: Award,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
    },
  ];

  const getStatusBadge = (status) => {
    const isCurrentlyStudying = status === 'Current';
    return (
      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
        isCurrentlyStudying 
          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' 
          : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
      }`}>
        <div className={`w-2 h-2 rounded-full mr-2 ${
          isCurrentlyStudying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
        }`}></div>
        {status}
      </div>
    );
  };

  const getGradeIcon = (detail) => {
    if (detail.includes('CGPA')) {
      return <Trophy className="w-4 h-4 text-yellow-500" />;
    }
    if (detail.includes('marks') || detail.includes('Percentage')) {
      return <Star className="w-4 h-4 text-blue-500" />;
    }
    return <Award className="w-4 h-4 text-purple-500" />;
  };

  return (
    <section id="education" className="py-32 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl mb-6">
            <GraduationCap className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 dark:from-white dark:via-indigo-300 dark:to-white bg-clip-text text-transparent mb-4">
            Educational Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Building a strong foundation through continuous learning and academic excellence
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-green-500 opacity-30"></div>
          
          <div className="space-y-16">
            {education.map((edu, index) => {
              const IconComponent = edu.icon;
              return (
                <div key={edu.degree} className="relative group">
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${edu.color} rounded-full shadow-lg ring-4 ring-white dark:ring-gray-800 group-hover:scale-125 transition-transform duration-300`}></div>
                  
                  {/* Education Card */}
                  <div className="ml-20">
                    <div className={`relative bg-gradient-to-r ${edu.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-white/50 dark:border-gray-700/50 backdrop-blur-sm`}>
                      {/* Card Header */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex items-start space-x-4">
                          <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${edu.color} rounded-xl flex items-center justify-center shadow-lg`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                              {edu.degree}
                            </h3>
                            <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
                              {edu.institution}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-start lg:items-end space-y-3 mt-4 lg:mt-0">
                          {getStatusBadge(edu.status)}
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span className="font-medium">{edu.date}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2" />
                              <span className="font-medium">{edu.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Academic Details */}
                      <div className="space-y-3">
                        {edu.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-3 group/detail">
                            <div className="flex-shrink-0">
                              {getGradeIcon(detail)}
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-700 dark:text-gray-300 font-medium group-hover/detail:text-gray-900 dark:group-hover/detail:text-white transition-colors">
                                {detail}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-xl"></div>
                      </div>
                      
                      {/* Gradient border effect */}
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Academic Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">3.67</h3>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Current CGPA</p>
          </div>
          
          <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">4+</h3>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Years of Study</p>
          </div>
          
          <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">CS</h3>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Specialization</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;