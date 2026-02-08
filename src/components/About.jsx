import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { useInView } from 'react-intersection-observer';

const About = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    return (
        <div className='min-h-screen flex items-center pt-20 pb-10 text-gray-200' id='banner'>
            <div
                ref={ref}
                className='max-w-6xl mx-auto px-6 md:px-10 flex flex-col-reverse lg:flex-row justify-center items-center gap-12'
            >
                {/* Text Content */}
                <div className={`flex flex-col justify-center items-center lg:items-start ${inView ? 'animate-fade-in-left' : 'opacity-0'
                    }`}>
                    <p className='text-lg md:text-xl text-gray-400 mb-2'>Hello, I'm</p>
                    <p className='text-3xl md:text-4xl lg:text-5xl font-bold mb-2'>
                        Ian <span>Ichiro</span> R. Beguas
                    </p>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold py-4 text-white'>
                        <TypeAnimation
                            sequence={[
                                'Full-Stack Developer',
                                2000,
                                'Laravel Expert',
                                2000,
                                'Angular Developer',
                                2000,
                                'React Enthusiast',
                                2000,
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-base md:text-lg text-gray-400 text-center lg:text-left max-w-md mb-6'>
                        Turning pixels into experiences, one line of code at a time.
                        Building dynamic and efficient web applications.
                    </p>

                    {/* Social Icons */}
                    <div className='flex justify-center lg:justify-start gap-4'>
                        <a
                            href="https://www.linkedin.com/in/ichiro-beguas-a20717213/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl glass hover:bg-purple-600/30 transition-all duration-300 
                                     hover:scale-110 hover:shadow-glow group"
                        >
                            <AiFillLinkedin className="text-2xl text-gray-300 group-hover:text-purple-400 transition-colors" />
                        </a>
                        <a
                            href="https://www.instagram.com/imianbeguas/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl glass hover:bg-pink-600/30 transition-all duration-300 
                                     hover:scale-110 hover:shadow-glow group"
                        >
                            <AiFillInstagram className="text-2xl text-gray-300 group-hover:text-pink-400 transition-colors" />
                        </a>
                        <a
                            href="https://github.com/ianbeguas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl glass hover:bg-white/10 transition-all duration-300 
                                     hover:scale-110 hover:shadow-glow group"
                        >
                            <AiFillGithub className="text-2xl text-gray-300 group-hover:text-white transition-colors" />
                        </a>
                    </div>
                </div>

                {/* Profile Image */}
                <div className={`flex justify-center ${inView ? 'animate-fade-in-right' : 'opacity-0'}`}>
                    <div className="relative">
                        {/* Glow effect behind image */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 
                                      rounded-2xl blur-2xl opacity-30 animate-pulse-glow"></div>
                        <img
                            className='relative w-[280px] sm:w-[350px] lg:w-[400px] h-auto rounded-2xl 
                                     shadow-2xl animate-float'
                            src={process.env.PUBLIC_URL + "/white-bg.jpg"}
                            alt="Ian Ichiro Beguas"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
