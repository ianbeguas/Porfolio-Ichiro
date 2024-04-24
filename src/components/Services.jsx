import React from 'react';
import { FiGlobe, FiSmartphone, FiMonitor } from 'react-icons/fi';
import { IconContext } from 'react-icons';

const Services = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <ServiceCard
        icon={<FiGlobe />}
        title="Web Development"
        description="Crafting responsive and scalable web applications tailored to your needs."
      />
      <ServiceCard
        icon={<FiSmartphone />}
        title="App Development"
        description="Building intuitive and feature-rich mobile applications for iOS and Android platforms."
      />
      <ServiceCard
        icon={<FiMonitor />}
        title="UI/UX Design"
        description="Creating visually stunning and user-friendly websites with a focus on UI/UX design."
      />
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="max-w-xs mx-4 my-8 bg-transparent hover:bg-purple-600 rounded-lg p-6 text-left shadow-md transition duration-300 ease-in-out transform hover:scale-105 sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="flex justify-start items-center text-3xl sm:text-4xl mb-4">
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
