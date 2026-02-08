import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNav = () => {
        setNav(!nav);
    };

    const navLinks = [
        { to: 'about', label: 'About' },
        { to: 'skills', label: 'Skills' },
        { to: 'projects', label: 'Projects' },
        { to: 'contact', label: 'Contact' },
    ];

    return (
        <nav className={`z-50 fixed top-0 left-0 right-0 transition-all duration-300 ${scrolled
                ? 'glass-dark shadow-lg'
                : 'bg-transparent'
            }`}>
            <div className='flex justify-between items-center max-w-[1240px] mx-auto h-16 px-6'>
                <h1 className='text-2xl md:text-3xl font-bold'>
                    <Link
                        to="banner"
                        smooth={true}
                        duration={900}
                        className="cursor-pointer primary-color hover:text-glow transition-all"
                    >
                        Ichiro
                    </Link>
                </h1>

                {/* Desktop Navigation */}
                <ul className='hidden md:flex items-center gap-1'>
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                smooth={true}
                                duration={900}
                                className="px-4 py-2 text-gray-300 hover:text-white cursor-pointer 
                                         hover:bg-white/5 rounded-lg transition-all duration-300
                                         relative group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 
                                               bg-gradient-to-r from-purple-500 to-pink-500 
                                               group-hover:w-3/4 transition-all duration-300"></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <div
                    onClick={handleNav}
                    className='block md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer'
                >
                    {nav ? <AiOutlineClose size={24} className="text-gray-200" /> : <AiOutlineMenu size={24} className="text-gray-200" />}
                </div>

                {/* Mobile Navigation */}
                <div className={`fixed top-0 left-0 h-full w-[70%] max-w-[300px] glass-dark 
                              transform transition-transform duration-300 ease-in-out z-50
                              ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="p-6">
                        <h1 className='text-2xl font-bold mb-8'>
                            <Link
                                to="banner"
                                smooth={true}
                                duration={900}
                                onClick={handleNav}
                                className="cursor-pointer primary-color"
                            >
                                Ichiro
                            </Link>
                        </h1>
                        <ul className='space-y-2'>
                            {navLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        duration={900}
                                        onClick={handleNav}
                                        className="block px-4 py-3 text-lg text-gray-300 hover:text-white 
                                                 hover:bg-white/5 rounded-lg transition-all cursor-pointer"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Mobile Overlay */}
                {nav && (
                    <div
                        className="fixed inset-0 bg-black/50 z-40 md:hidden"
                        onClick={handleNav}
                    />
                )}
            </div>
        </nav>
    );
};

export default Navbar;
