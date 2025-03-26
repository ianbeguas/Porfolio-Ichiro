import React from 'react';
import { FiDatabase, FiCloud, FiMonitor } from 'react-icons/fi';
import { IconContext } from 'react-icons';

const Services = () => {
  return (
    <div className="flex flex-wrap justify-center">
        <ServiceCard
          icon={<FiMonitor />}
          title="UI Development"
          description="Building modern and interactive web interfaces using Angular for seamless user experiences."
        />
        <ServiceCard
          icon={<FiDatabase />}
          title="Backend Development"
          description="Developing robust and scalable server-side applications with Laravel, PHP, and MySQL."
        />
        <ServiceCard
          icon={<FiCloud />}
          title="Cloud & DevOps"
          description="Deploying and managing applications using AWS services like S3, EC2, CloudFront, and Route 53."
        />
    </div>

  );
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="max-w-xs mx-4 my-8 bg-gray-700/20 hover:bg-purple-600 rounded-lg p-6 text-left shadow-md transition duration-300 ease-in-out transform hover:scale-105 sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="flex justify-start items-center text-3xl sm:text-4xl mb-4 ">
        <IconContext.Provider value={{ color: 'white' }}>
          {icon}
        </IconContext.Provider>
      </div>
      <h2 className="text-lg sm:text-xl font-bold mb-2 text-white">{title}</h2>
      <p className="text-gray-200">{description}</p>
    </div>
  );
};

export default Services;
