import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Contacts = () => {
  return (
    <div className=" h-auto flex justify-center items-center my-10" id='contact'>
      <div className='max-w-[1200px] flex flex-col sm:flex-row justify-center items-center gap-12'>
        <div className="p-6  rounded-xl sm:flex-1 mr-4">
          <h1 className='text-4xl sm:text-5xl text-white'>
            Contact Me
          </h1>
          <p className='text-normal text-lg font-medium text-gray-400 mt-2'>
            Let's connect via email or reach out by sms.
          </p>
          <div className="flex items-center mr-4 mt-2">
            <FaEnvelope className="text-gray-400 mr-2" />
            <p className="text-gray-400">ianbeguas@gmail.com</p>
          </div>
          <div className="flex items-center mt-2">
            <FaPhone className="text-gray-400 mr-2" />
            <p className="text-gray-400">09777784385</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
