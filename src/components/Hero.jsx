import React from 'react';

const Hero = () => {
  return (
    <div className='py-10 text-white' id='about'>
      <div className='max-w-6xl mx-auto px-6 md:px-10'>
        <div className='w-full'>
          <div className='text-gray-300'>
            <h3 className='text-5xl font-semibold mb-5'>About <span className='primary-text'>Me</span></h3>
            <p className='text-justify leading-7 text-gray-400'>
              Hi there! I'm a full-stack web developer passionate about building dynamic and efficient web applications. 
              With expertise in Angular, Laravel, and MySQL, I create seamless user experiences backed by powerful backend logic. 
              I also have basic knowledge of AWS services like S3, EC2, CloudFront, and Route 53, along with DevOps practices. 
              Additionally, I have experience with React, allowing me to adapt to various frontend technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;