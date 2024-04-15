import React from 'react';
import Typewriter from 'typewriter-effect';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const Banner = () => {
  const [ref, inView] = useInView({ threshold: 0.5 }); // Trigger animation when 50% of component is in view

  const bannerAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(50px)',
    config: { duration: 1000 }
  });

  return (
    <section id="banner" className="text-white bg-customBGgray py-16 flex flex-col justify-center items-center h-screen">
      <animated.div ref={ref} className="container mx-auto text-center" style={bannerAnimation}>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
          <Typewriter
            options={{
              strings: ['Frontend Developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className="text-lg md:text-xl">Html, Css, JavaScript, Reactjs, Tailwindcss</p>
        <div className='p-8 text-xl md:text-2xl lg:text-3xl gap-6 md:gap-12'>
          <p>Specializing in Reactjs, I leverage cutting-edge</p>
          <p>technologies to bring web projects to life.</p>
        </div>
       
      </animated.div>
    </section>
  );
};

export default Banner;
