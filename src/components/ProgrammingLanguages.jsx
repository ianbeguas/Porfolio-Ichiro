import React from 'react';
import { Tooltip } from 'react-tooltip';

const ProgrammingLanguages = () => {
  return (
    <div id='skills' className="lg:text-center md:text-center sm:text-center text-center">
      <h1 className="lg:text-5xl md:text-4xl sm:text-4xl text-2xl font-bold text-white mb-8">
        My<span>&lt;Skills&gt;</span>
      </h1>

      <div className="flex flex-wrap justify-center items-center">
        <LanguageIcon icon="logos/Laravel.png" name="Laravel" />
        <LanguageIcon icon="logos/Angular.png" name="Angular" />
        <LanguageIcon icon="logos/react.png" name="React" />
        <LanguageIcon icon="logos/aws.png" name="AWS" />
        <LanguageIcon icon="logos/github.png" name="GitHub" />
        <LanguageIcon icon="logos/mysql.png" name="Mysql" />
      </div>
    </div>
  );
};

const LanguageIcon = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center mx-4 my-4">
      <img
        src={process.env.PUBLIC_URL + '/' + icon}
        alt={name}
        className="w-16 h-16 sm:w-12 sm:h-12"
        data-tooltip-id={name}  // Unique tooltip ID
      />
      <Tooltip id={name} place="top" effect="solid">
        {name}
      </Tooltip>
    </div>
  );
};

export default ProgrammingLanguages;
