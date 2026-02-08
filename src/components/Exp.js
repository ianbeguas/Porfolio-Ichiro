import React from 'react';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      title: "AYS - At Your Service",
      description: "Comprehensive booking and service marketplace platform",
      technologies: ["Laravel", "MySQL", "AWS"],
    },
    {
      title: "SM360 eLearning System",
      description: "Interactive online learning management platform",
      technologies: ["Laravel", "Angular", "MySQL"],
    },
    {
      title: "HRIS",
      description: "Human Resource Information System for employee management",
      technologies: ["Laravel", "Angular", "MySQL"],
    },
    {
      title: "LIMS",
      description: "Laboratory Information Management System",
      technologies: ["Laravel", "Angular", "MySQL"],
    },
    {
      title: "ERP Management System",
      description: "Enterprise Resource Planning for business operations",
      technologies: ["Laravel", "Vue.js", "MySQL", "REST API"],
    },
    {
      title: "DepEd Portal",
      description: "Education management portal for Department of Education operations",
      technologies: ["Laravel", "MySQL", "REST API"],
    },
  ];

  return (
    <div className="py-16" id='projects' ref={ref}>
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4 ${inView ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
          Projects <span>Contributed</span>
        </h1>
        <p className={`text-gray-400 text-center max-w-2xl mx-auto mb-12 ${inView ? 'animate-fade-in-up delay-100' : 'opacity-0'
          }`}>
          Full-stack applications built with modern technologies
        </p>

        {/* Projects List */}
        <div className="space-y-4">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              {...project}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectItem = ({ title, description, technologies, index, inView }) => {
  return (
    <div
      className={`group relative glass rounded-xl p-5 md:p-6 
                transition-all duration-300 hover:bg-white/10 
                hover:translate-x-2
                ${inView ? 'animate-fade-in-left' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start gap-4">
        {/* Number Badge */}
        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 
                      flex items-center justify-center text-white text-sm font-bold mt-1">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Project Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-purple-400 
                       transition-colors mb-1">
            {title}
          </h3>

          <p className="text-gray-400 text-sm md:text-base mb-3">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 rounded-md text-xs font-medium
                         bg-purple-500/10 border border-purple-500/20 text-purple-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Gradient Line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl 
                    bg-gradient-to-b from-purple-500 to-pink-500 
                    opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

export default Projects;
