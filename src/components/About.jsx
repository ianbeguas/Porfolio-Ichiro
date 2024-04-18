import React from 'react';
import { TypeAnimation } from 'react-type-animation'; 
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";

const About = () => {
    return (
        <div className='py-10 text-gray-200 bg-[#232325]'>
            <div className='max-w-6xl mx-auto px-6 md:px-10 flex flex-col-reverse sm:flex-row justify-center items-center gap-12' id='about'>

                <div className='flex flex-col justify-center items-center sm:items-start'>
                    <p className='md:text-4xl sm:text-3xl text-lg'></p>
                    <h1 className='md:text-6xl sm:text-5xl text-3xl font-bold py-6'>
                        <TypeAnimation
                            sequence={[
                                'Web Developer',
                                1000,
                                'Web Designer',
                                1000,
                                'UI/UX',
                                1000,
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='md:text-4xl sm:text-3xl text-lg font-bold text-gray-500 text-center sm:text-left'>
                        Turning pixels into experiences,<br />one line of code at a time.
                    </p>
                    <div className='text-4xl flex justify-center sm:justify-start gap-10 my-7 text-purple-600'>
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

                        <a href="/assets/IanResume2024.pdf" download title='Download Resume' role='Button' className='w-[190px] h-[60px] relative inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-primary-color rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-gray-800'>
                            Download CV
                        </a>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <img className='w-[300px] sm:w-[500px] h-auto rounded-lg filter grayscale brightness-50' src={process.env.PUBLIC_URL + "/image.png"} alt="Portrait" />
                </div>

            </div>
        </div>
    );
};

export default About;
