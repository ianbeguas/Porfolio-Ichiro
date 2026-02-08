import React from 'react';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className='py-16 md:py-24' id='about'>
      <div className='max-w-6xl mx-auto px-6 md:px-10'>
        <div
          ref={ref}
          className={`glass rounded-2xl p-8 md:p-12 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
            About <span>Me</span>
          </h3>
          <div className='space-y-4 text-gray-400 leading-relaxed'>
            <p className='text-base md:text-lg'>
              Hi there! I'm a <span className="text-white font-semibold">full-stack web developer</span> passionate
              about building dynamic and efficient web applications. With expertise in
              <span className="text-purple-400"> Angular</span>,
              <span className="text-red-400"> Laravel</span>, and
              <span className="text-blue-400"> MySQL</span>, I create seamless user experiences
              backed by powerful backend logic.
            </p>
            <p className='text-base md:text-lg'>
              I also have hands-on experience with <span className="text-orange-400">AWS services</span> like
              S3, EC2, CloudFront, and Route 53, along with DevOps practices for deployment and scaling.
              Additionally, I work with <span className="text-cyan-400">React</span>, allowing me to adapt
              to various frontend technologies and project requirements.
            </p>
          </div>

          {/* Quick Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-8'>
            <StatCard number="3+" label="Years Experience" />
            <StatCard number="10+" label="Projects Completed" />
            <StatCard number="5+" label="Technologies" />
            <StatCard number="100%" label="Commitment" />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ number, label }) => (
  <div className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
    <p className="text-2xl md:text-3xl font-bold primary-color">{number}</p>
    <p className="text-sm text-gray-400">{label}</p>
  </div>
);

export default Hero;