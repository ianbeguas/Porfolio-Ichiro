import React from 'react';
import { Tooltip } from 'react-tooltip';
import { useInView } from 'react-intersection-observer';

const ProgrammingLanguages = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skills = [
    { icon: "logos/Laravel.png", name: "Laravel", level: 90 },
    { icon: "logos/Angular.png", name: "Angular", level: 85 },
    { icon: "logos/react.png", name: "React", level: 75 },
    { icon: "logos/mysql.png", name: "MySQL", level: 85 },
    { icon: "logos/aws.png", name: "AWS", level: 70 },
    { icon: "logos/github.png", name: "GitHub", level: 85 },
    { icon: "logos/javascript.png", name: "JavaScript", level: 80 },
    { icon: "logos/html.png", name: "HTML5", level: 95 },
    { icon: "logos/css.png", name: "CSS3", level: 90 },
    { icon: "logos/tailwind.png", name: "Tailwind", level: 80 },
    { icon: "logos/bootstrap.png", name: "Bootstrap", level: 85 },
    { icon: "logos/figma.png", name: "Figma", level: 65 },
  ];

  const additionalSkills = [
    "Payment Gateway Integration",
    "AI Integration",
    "REST API Development",
    "Web Hosting",
    "DevOps",
  ];

  return (
    <div id='skills' className="py-16" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 ${inView ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
          My <span>&lt;Skills/&gt;</span>
        </h1>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6 mb-10">
          {skills.map((skill, index) => (
            <SkillIcon
              key={skill.name}
              {...skill}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        {/* Additional Skills */}
        <div className={`flex flex-wrap justify-center gap-3 ${inView ? 'animate-fade-in-up delay-300' : 'opacity-0'
          }`}>
          {additionalSkills.map((skill, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-full text-sm font-medium
                       bg-gradient-to-r from-purple-500/20 to-pink-500/20 
                       border border-purple-500/30 text-purple-300
                       hover:border-purple-400 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillIcon = ({ icon, name, level, index, inView }) => {
  return (
    <div
      className={`group flex flex-col items-center ${inView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="relative w-16 h-16 md:w-20 md:h-20 p-3 rounded-2xl glass 
                    hover:bg-white/10 transition-all duration-300
                    group-hover:scale-110 group-hover:shadow-glow cursor-pointer">
        <img
          src={process.env.PUBLIC_URL + '/' + icon}
          alt={name}
          className="w-full h-full object-contain"
          data-tooltip-id={`tooltip-${name}`}
        />
      </div>
      <span className="mt-2 text-xs md:text-sm text-gray-400 group-hover:text-white transition-colors">
        {name}
      </span>

      {/* Proficiency bar */}
      <div className="w-full h-1 mt-1 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full
                   transition-all duration-1000 ease-out"
          style={{ width: inView ? `${level}%` : '0%' }}
        />
      </div>

      <Tooltip id={`tooltip-${name}`} place="top">
        <div className="text-center">
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-300">{level}% proficiency</p>
        </div>
      </Tooltip>
    </div>
  );
};

export default ProgrammingLanguages;
