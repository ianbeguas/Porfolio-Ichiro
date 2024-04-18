import React from 'react';

const Hero = () => {
  return (
    <div className='py-10 text-white bg-[#232325]'>
      <div className='max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-12'>

        <div className='w-full md:w-[400px]'>
          <img src="/image.png" alt="im" className='object-cover bg-gray-700 rounded-xl h-[300px] md:h-auto w-full' />
        </div>

        <div className='w-full md:w-1/2'>
          <div className='text-gray-300'>
            <h3 className='text-4xl font-semibold mb-5'>About <span className='primary-text'>Me</span></h3>
            <p className='text-justify leading-7'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            </p>
          </div>
          <div className='mt-10 flex gap-7'>
            <div className='bg-[#333333]/40 p-5 rounded-lg'>
              <h3 className='text-2xl font-semibold text-white'>4 <span>+</span></h3>
              <p className='text-xs md:text-base text-gray-300'>Projects</p>
            </div>
            <div className='bg-[#333333]/40 p-5 rounded-lg'>
              <h3 className='text-2xl font-semibold text-white'>4 <span>+</span></h3>
              <p className='text-xs md:text-base text-gray-300'>Projects</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
