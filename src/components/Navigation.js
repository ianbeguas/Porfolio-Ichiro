import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 fixed w-full z-10 bg-customBGgray">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">
          <Link to="banner" smooth={true} duration={500} className="text-white hover:text-gray-300 cursor-pointer hover:underline">Ichiro</Link>
        </h1>
        {/* Responsive Menu */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        {/* End Responsive Menu */}
        <ul className={`lg:flex ${isOpen ? 'flex-col' : 'hidden'} lg:items-center lg:space-x-4 space-y-2 lg:space-y-0 font-bold items-center`}>
          <li><Link to="about" smooth={true} duration={500} className="text-white hover:text-gray-300 cursor-pointer hover:underline" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="skills" smooth={true} duration={500} className="text-white hover:text-gray-300 cursor-pointer hover:underline" onClick={() => setIsOpen(false)}>Skills</Link></li>
          <li><Link to="projects" smooth={true} duration={500} className="text-white hover:text-gray-300 cursor-pointer hover:underline" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="text-white hover:text-gray-300 cursor-pointer hover:underline" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
