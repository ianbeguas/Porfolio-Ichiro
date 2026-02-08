import React from 'react';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const education = [
        {
            institution: "Urdaneta City University",
            degree: "Bachelor of Science in Information Technology",
            period: "2019 - 2024",
            description: "Gained expertise in programming, database management, networking, web development, and software engineering. Developed strong teamwork and leadership skills through faculty mentorship and extracurricular activities."
        }
    ];

    return (
        <div className="py-16" ref={ref}>
            <div className="max-w-4xl mx-auto px-6 md:px-10">
                <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 ${inView ? 'animate-fade-in-up' : 'opacity-0'
                    }`}>
                    <span>Education</span>
                </h2>

                <div className="space-y-6">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className={`glass rounded-2xl p-6 md:p-8 card-hover ${inView ? 'animate-fade-in-up' : 'opacity-0'
                                }`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white">
                                        {edu.institution}
                                    </h3>
                                    <p className="text-purple-400 font-medium">
                                        {edu.degree}
                                    </p>
                                </div>
                                <span className="inline-flex items-center px-4 py-1 mt-2 md:mt-0 
                                               rounded-full text-sm font-medium
                                               bg-gradient-to-r from-purple-500/20 to-pink-500/20 
                                               border border-purple-500/30 text-purple-300">
                                    {edu.period}
                                </span>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                {edu.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
