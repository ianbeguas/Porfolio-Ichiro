import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiBootstrap, SiGithub, SiFigma } from 'react-icons/si';
import { IconContext } from 'react-icons';

const ProgrammingLanguages = () => {
  return (
    <div id='skills'>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center my-8 text-white">Problem Solver <span>&lt;Coder&gt;</span></h1>

      <div className="flex flex-wrap justify-center">
        <LanguageCard
          icon={<SiHtml5 />}
          title="HTML"
          description="Building the structure of web pages."
        />
        <LanguageCard
          icon={<SiCss3 />}
          title="CSS"
          description="Styling the appearance of web pages."
        />
        <LanguageCard
          icon={<SiJavascript />}
          title="JavaScript"
          description="Adding interactivity and functionality to web pages."
        />
        <LanguageCard
          icon={<SiReact />}
          title="React.js"
          description="Creating dynamic and interactive user interfaces."
        />
        <LanguageCard
          icon={<SiTailwindcss />}
          title="Tailwind CSS"
          description="A utility-first CSS framework for quickly building custom designs."
        />
        <LanguageCard
          icon={<SiBootstrap />}
          title="Bootstrap"
          description="A popular CSS framework for developing responsive and mobile-first websites."
        />
        <LanguageCard
          icon={<SiGithub />}
          title="GitHub"
          description="A platform for version control and collaboration on software projects."
        />
        <LanguageCard
          icon={<SiFigma />}
          title="Figma"
          description="A collaborative interface design tool for creating UI/UX designs."
        />
      </div>
    </div>
  );
};

const LanguageCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4 mx-2 my-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="text-2xl sm:text-3xl mb-2">
        <IconContext.Provider value={{ color: 'white' }}>
          {icon}
        </IconContext.Provider>
      </div>
      <h2 className="text-lg sm:text-xl font-bold mb-1 text-white">{title}</h2>
      <p className="text-sm text-gray-200">{description}</p>
    </div>

    
  );
};

export default ProgrammingLanguages;
