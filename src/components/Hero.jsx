import React from 'react';

const Hero = () => {
  return (
    <div className='py-10 text-white' id='about'>
      <div className='max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-12'>

        <div className='w-full md:w-[400px]'>
          <img src="/image.png" alt="im" className='object-cover bg-gray-700 rounded-xl h-[300px] md:h-auto w-full' />
        </div>

      <div className='w-full md:w-1/2'>
  <div className='text-gray-300'>
    <h3 className='text-4xl font-semibold mb-5'>About <span className='primary-text'>Me</span></h3>
    <p className='text-justify leading-7'>Ichiro graduated from Urdaneta City University with a Bachelor's degree in Information Technology, focusing on web development. With his specialized skills, he's prepared to contribute innovative solutions to the digital landscape.
    </p>
  </div>
  <div className="flex items-center space-x-5 mt-3">
  <img src="/logos/html.png" alt="HTML" className="h-10 w-10 hover:scale-110 transition-transform duration-300 ease-in-out" title="HTML"/>
  <img src="/logos/css.png" alt="CSS" className="h-10 w-10 hover:scale-110 transition-transform duration-300 ease-in-out" title="CSS"/>
  <img src="/logos/javascript.png" alt="JavaScript" className="h-10 w-10 hover:scale-110 transition-transform duration-300 ease-in-out" title="JavaScript"/>
  <img src="/logos/react.png" alt="ReactJS" className="h-10 w-10 hover:scale-110 transition-transform duration-300 ease-in-out" title="ReactJS"/>
  <img src="/logos/tailwind.png" alt="Tailwind CSS" className="h-10 w-10 hover:scale-110 transition-transform duration-300 ease-in-out" title="Tailwind CSS"/>
</div>



</div>


      </div>
    </div>
  );
};

export default Hero;
