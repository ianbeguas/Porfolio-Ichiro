import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import Typewriter from 'typewriter-effect';

const AboutMe = () => {
  const [ref, inView] = useInView({ threshold: 0.5 }); // Trigger animation when 50% of component is in view

  const pictureAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0px)' : 'translateX(100px)',
    config: { duration: 1000 }
  });

  const descriptionAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0px)' : 'translateX(-100px)',
    config: { duration: 1000 }
  });

  return (
    <section id="about" className="bg-white py-20 flex flex-col lg:flex-row items-center justify-center h-screen">
      <div ref={ref} className="container mx-auto flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-12">
        <animated.img
          src="/formalpic.png"
          alt="Formal pic"
          className="w-full lg:w-auto h-auto rounded-lg shadow-lg bg-customBGgray max-w-md lg:max-w-none"
          style={pictureAnimation}
        />
        <animated.div className="text-center lg:text-left" style={descriptionAnimation}>
          <p className="font-bold mb-4 text-2xl lg:text-4xl">Hi, I'm Ichiro</p>
          <h1 className='font-bold mb-4 text-3xl lg:text-5xl text-customBGgray'>
            <Typewriter
              options={{
                strings: ['My Background'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className='text-lg lg:text-xl mb-4'>Bachelor of Science in Information Technology (2020-2024)</p>
          <p className="text-lg lg:text-xl text-gray-600 mb-4 lg:pr-8">Ichiro, a recent BSIT graduate, excels in web development, specializing in HTML, CSS, JavaScript, ReactJS, and Tailwind CSS. His expertise in crafting dynamic and visually appealing web applications positions him as a valuable asset in the tech industry.</p>
          <div className="flex justify-center lg:justify-start">
            <FaHtml5 className="icon-lg text-orange-500 mr-4 lg:mr-8 icon-zoom" />
            <FaCss3 className="icon-lg text-blue-500 mr-4 lg:mr-8 icon-zoom" />
            <FaJs className="icon-lg text-yellow-500 mr-4 lg:mr-8 icon-zoom" />
            <FaReact className="icon-lg text-blue-400 mr-4 lg:mr-8 icon-zoom" />
            <SiTailwindcss className="icon-lg text-blue-500 icon-zoom" />
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default AboutMe;
