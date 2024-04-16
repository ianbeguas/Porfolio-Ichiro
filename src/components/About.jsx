import React from 'react';
import { TypeAnimation } from 'react-type-animation'; 
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";

const About = () => {
    return (
        <div>
            <div className='my-7 sm:my-0 max-w-[1200px] h-screen mx-auto flex flex-col-reverse sm:flex-row justify-center align-center' id='about'>
                <div className='flex-col my-auto mx-auto'>
                    <p className='md-text-5xl sm:text-4xl text-xl font-bold text-gray-200'></p>
                    <h1 className='md-text-7xl sm:text-6xl text-4xl font-bold md:py-6'> 
                        <TypeAnimation
                            sequence={[
                                'Web Developer',
                                1000,
                                'Web Designer',
                                1000,
                                'Responsiveness',
                                1000,
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <div className='flex justify-center items-center'>
                        <p className='md:text-4xl sm:text-3xl text-md font-bold text-gray-500'>Turning pixels into experiences, <br /> one line of code at a time.</p>
                    </div>
                    <div className='text-5xl flex justify-start gap-16 my-7 text-purple-600'>
                        <a href="https://www.linkedin.com/in/ichiro-beguas-a20717213/">
                            <AiFillLinkedin />
                        </a>
                        <a href="https://www.instagram.com/imianbeguas/">
                            <AiFillInstagram />
                        </a>
                        <a href="https://github.com/ianbeguas">
                            <AiFillGithub />
                        </a>
                    </div>

                    <div className='relative inline-flex group my-3'>
                    <div className='absolute transition-all duration-1000 opacity-70 shadow-inset-1 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:duration-200'></div>

                        <a href="/assets/IanResume2024.pdf" download title='Download Resume' role='Button'
                            className='w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color rounded-xl
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-gray-900'>Download CV</a>
                    </div>
                </div>

                <div className='my-auto mt-20'>
                    <img className='w-[300px] sm:w-[600px] mx-auto h-auto bg-primary-color rounded-lg' src="/assets/ianpic.png" alt="ian" />
                </div>
            </div>
        </div>
    );
};

export default About;
