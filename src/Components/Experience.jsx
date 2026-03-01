import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'IT Training and Technical Director',
      company: 'Wentechno IT Solutions',
      date: '2026 - Present',
      location: 'Rawalpindi, Pakistan',
      type: 'Full-time',
      details: [
        'Managing technical strategy and mentoring development teams.',
        'Directing practical IT training aligned with current industry needs.',
      ],
    },
    {
      role: 'MERN Stack Trainer',
      company: 'Adan Institute of Technologies',
      date: '2025 - 2026',
      location: 'On-site',
      type: 'Full-time',
      details: [
        'Delivered hands-on training in MongoDB, Express.js, React.js, and Node.js.',
        'Mentored students on full-stack architecture, debugging, and project delivery.',
      ],
    },
    {
      role: 'Website Development Intern',
      company: 'Event Bridge (Remote)',
      date: '2025',
      location: 'Remote',
      type: 'Internship',
      details: [
        'Completed website development internship using multiple language stacks.',
        'Built user-friendly website components with practical team collaboration.',
      ],
    },
    {
      role: 'MERN Stack Developer Intern',
      company: 'Octaloop Technologies',
      date: '2024',
      location: 'On-site',
      type: 'Internship',
      details: [
        'Assisted in full-stack development, bug fixing, and code maintenance.',
        'Worked with modern JavaScript frameworks in collaborative workflows.',
      ],
    },
    {
      role: 'Front-end Development Intern',
      company: 'Cognetics360',
      date: '2024',
      location: 'On-site',
      type: 'Internship',
      details: [
        'Built responsive web interfaces and improved user-facing layouts.',
        'Focused on styling and usability for production-like web pages.',
      ],
    },
    {
      role: 'Academic Tutor',
      company: 'Ozone Evening Coaching Center',
      date: '2023 - 2024',
      location: 'Rawalpindi, Pakistan',
      type: 'Part-time',
      details: [
        'Provided academic support and tutoring to secondary/matric-level students.',
        'Guided students through structured practice and concept reinforcement.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Practical leadership, training, and full-stack product delivery.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 opacity-20"></div>

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={`${exp.company}-${exp.role}`} className="relative group">
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg ring-4 ring-white dark:ring-gray-800 group-hover:scale-125 transition-transform duration-300"></div>

                <div className="ml-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <p className="text-lg font-medium text-blue-600 dark:text-blue-400">{exp.company}</p>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                          <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4 lg:mt-0">
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">{exp.date}</span>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {exp.details.map((item, idx) => (
                        <div key={idx} className="flex items-start group/item">
                          <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2.5 mr-4 group-hover/item:scale-125 transition-transform"></div>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Experience;
