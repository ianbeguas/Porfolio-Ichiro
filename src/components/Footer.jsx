import React from 'react';
import { FaGithubSquare, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <FaGithubSquare />, url: "https://github.com/ianbeguas", label: "GitHub" },
        { icon: <FaInstagram />, url: "https://www.instagram.com/imianbeguas/", label: "Instagram" },
        { icon: <FaFacebook />, url: "https://www.facebook.com/ian.beguas/", label: "Facebook" },
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/ichiro-beguas-a20717213/", label: "LinkedIn" },
    ];

    return (
        <footer className='mt-16 border-t border-gray-700/50' id='contact'>
            <div className='max-w-6xl mx-auto px-6 md:px-10 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
                    {/* Brand */}
                    <div>
                        <h3 className='text-2xl font-bold mb-4'>
                            <span>Ichiro</span>
                        </h3>
                        <p className='text-gray-400 text-sm leading-relaxed'>
                            Full-Stack Web Developer passionate about building dynamic and efficient web applications.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className='text-lg font-semibold text-white mb-4'>Contact</h4>
                        <ul className='space-y-3'>
                            <li className='flex items-center gap-3 text-gray-400 text-sm'>
                                <HiMail className='text-purple-400' />
                                <a href="mailto:ianbeguas@gmail.com" className='hover:text-white transition-colors'>
                                    ianbeguas@gmail.com
                                </a>
                            </li>
                            <li className='flex items-center gap-3 text-gray-400 text-sm'>
                                <HiPhone className='text-purple-400' />
                                <span>09777784385</span>
                            </li>
                            <li className='flex items-center gap-3 text-gray-400 text-sm'>
                                <HiLocationMarker className='text-purple-400' />
                                <span>Manila, Philippines</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className='text-lg font-semibold text-white mb-4'>Connect</h4>
                        <div className='flex gap-3'>
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className='p-3 rounded-xl glass text-gray-400 text-xl
                           hover:text-purple-400 hover:bg-purple-600/20 
                           transition-all duration-300 hover:scale-110'
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className='pt-8 border-t border-gray-700/50 text-center'>
                    <p className='text-gray-500 text-sm'>
                        © {currentYear} Ian Ichiro Beguas. All rights reserved.
                    </p>
                    <p className='text-gray-600 text-xs mt-2'>
                        Built with React & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;