import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='z-10 text-gray-300 flex justify-between items-center max-w-[1240px] mx-auto h-11 px-6 text-l sticky top-0 bg-customBGgray'>
            <h1 className='text-3xl font-bold primary-color ml-4'>
                <Link to="banner" smooth={true} duration={500} className="cursor-pointer hover:underline">Ichiro</Link>
            </h1>
            <ul className='hidden md:flex'>
                <li className='p-5'><Link to="about" smooth={true   } duration={500} className="cursor-pointer hover:underline hover:text-purple-600">About</Link></li>
                <li className='p-5'><Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:underline  hover:text-purple-600">Skills</Link></li>
                <li className='p-5'><Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:underline  hover:text-purple-600">Projects</Link></li>
                <li className='p-5'><Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:underline  hover:text-purple-600">Contact</Link></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={nav ? 'z-10 text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='text-3xl primary-color m-4'>
                    <Link to="banner" smooth={true} duration={500} className="cursor-pointer hover:underline">Ichiro</Link>
                </h1>
                <ul className='p-8 text-2xl'>
                    <li className='p-5'><Link to="about" smooth={true} duration={500} className="cursor-pointer hover:underline  hover:text-purple-600">About</Link></li>
                    <li className='p-5'><Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:underline  hover:text-purple-600">Skills</Link></li>
                    <li className='p-5'><Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:underline  hover:text-purple-600">Projects</Link></li>
                    <li className='p-5'><Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:underline  hover:text-purple-600">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
