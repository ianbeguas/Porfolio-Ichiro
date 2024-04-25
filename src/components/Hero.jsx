import React from 'react';

const Hero = () => {
  return (
    <div className='py-10 text-white' id='about'>
      <div className='max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-12'>

        <div className='w-full md:w-[400px]'>
          <img src="./assets/iancafe.jpg" alt="caf" className='object-cover bg-gray-700 rounded-xl h-[300px] md:h-auto w-full' />
        </div>

<div className='w-full md:w-1/2'>
  <div className='text-gray-300'>
    <h3 className='text-5xl font-semibold mb-5'>About <span className='primary-text'>Me</span></h3>
    <p className='text-justify leading-7 text-gray-400'>Hi there! I'm a frontend web developer passionate about crafting immersive online experiences. With expertise in ReactJS, HTML, CSS, and JavaScript, I've brought numerous websites to life, blending functionality with creativity. I utilize TailwindCSS and Bootstrap to ensure sleek designs and smooth user interactions. Explore my portfolio to see how I merge cutting-edge technology with intuitive design principles to make the web come alive.
    </p>
  </div>
</div>
      </div>
    </div>
  );
};

export default Hero;
