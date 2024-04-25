import React from 'react';

const ProgrammingLanguages = () => {
  return (
    <div id='skills'>
      <h1 className="lg:text-5xl md:text-4xl sm:text-4xl text-2xl font-bold text-center my-8 text-white">Problem Solver <span>&lt;Coder&gt;</span></h1>

      <div className="flex flex-wrap justify-center">
        <LanguageCard
          icon="logos/html.png"
          title="HTML"
          description="Building the structure of web pages."
        />
        <LanguageCard
          icon="logos/css.png"
          title="CSS"
          description="Styling the appearance of web pages."
        />
        <LanguageCard
          icon="logos/javascript.png"
          title="JavaScript"
          description="brings web pages to life with interactivity"
        />
        <LanguageCard
          icon="logos/react.png"
          title="React.js"
          description="Creating dynamic and interactive user interfaces."
        />
        <LanguageCard
          icon="logos/tailwind.png"
          title="Tailwind CSS"
          description="A utility-first CSS framework for quickly building custom designs."
        />
        <LanguageCard
          icon="logos/bootstrap.png"
          title="Bootstrap"
          description=" popular CSS framework for responsive, mobile-first websites."
        />
        <LanguageCard
          icon="logos/github.png"
          title="GitHub"
          description="A platform for version control and collaboration on software projects."
        />
        <LanguageCard
          icon="logos/figma.png"
          title="Figma"
          description="A collaborative interface design tool for creating UI/UX designs."
        />
      </div>
    </div>
  );
};

const LanguageCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4 mx-2 my-2 sm:w-full md:w-1/2 lg:w-1/3">
      <div className="text-2xl sm:text-3xl mb-2">
        <img src={process.env.PUBLIC_URL + '/' + icon} alt={title} style={{ width: '48px', height: '48px' }} />
      </div>
      <h2 className="text-lg sm:text-xl font-bold mb-1 text-white">{title}</h2>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
};

export default ProgrammingLanguages;
