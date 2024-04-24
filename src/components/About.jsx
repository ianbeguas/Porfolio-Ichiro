import React from 'react';
import { TypeAnimation } from 'react-type-animation'; 
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";

const About = () => {
    return (
        <div className='lg:py-10 sm:py-0 text-gray-200' id='banner'>
            <div className='max-w-6xl mx-auto px-6 md:px-10 flex flex-col-reverse sm:flex-row justify-center items-center gap-12' >

                <div className='flex flex-col justify-center items-center sm:items-start'>
                    <p className='lg:text-4xl md:text-2xl'>Ian <span>Ichiro</span> R. Beguas</p>
                    <h1 className='text-4xl font-bold py-6 lg:text-6xl md:text-4xl'>
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
                    <p className='text-lg font-bold text-gray-500 text-center sm:text-left lg:text-3xl md:text-2xl'>
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
                </div>

                <div className='flex justify-center'>
                    <img className='w-[300px] sm:w-[500px] h-auto rounded-xl filter grayscale brightness-50' src={process.env.PUBLIC_URL + "/image.png"} alt="Portrait" />
                </div>

            </div>
        </div>
    );
};

export default About;
