import React from 'react';

const ProgrammingLanguages = () => {
  return (
    <div id='skills' className="lg:text-center md:text-center sm:text-center text-center">
      <h1 className="lg:text-5xl md:text-4xl sm:text-4xl text-2xl font-bold text-white mb-8">My Programming <span>&lt;Languages&gt;</span></h1>

      <div className="flex flex-wrap justify-center items-center">
        <LanguageIcon icon="logos/html.png" />
        <LanguageIcon icon="logos/css.png" />
        <LanguageIcon icon="logos/javascript.png" />
        <LanguageIcon icon="logos/react.png" />
        <LanguageIcon icon="logos/tailwind.png" />
        <LanguageIcon icon="logos/bootstrap.png" />
        <LanguageIcon icon="logos/github.png" />
        <LanguageIcon icon="logos/figma.png" />
      </div>
    </div>
  );
};

const LanguageIcon = ({ icon }) => {
  return (
    <img src={process.env.PUBLIC_URL + '/' + icon} alt="icon" className="w-16 h-16 sm:w-12 sm:h-12 mx-2 my-4" />
  );
};

export default ProgrammingLanguages;
