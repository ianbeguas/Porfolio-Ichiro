import React from 'react'
import { FaGithubSquare, FaInstagram, FaFacebook, FaLinkedin, FaPhone } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='mt-2 w-max[800px] border-t border-gray-500 text-center'>
         <p className="mt-2 text-gray-500">ianbeguas@gmail.com</p>
        <p className="text-gray-500">09777784385</p>
        <p className='mb-2 text-gray-500'>Manila <br /> Philippines </p>
    <div className='inline-flex text-gray-500 gap-4 text-3xl'>
        <a href="https://github.com/ianbeguas">
            <FaGithubSquare/>
        </a>
        <a href="https://www.instagram.com/your-instagram-profile">
            <FaInstagram/>
        </a>
        <a href="https://www.facebook.com/ian.beguas/">
            <FaFacebook/>
        </a>
        <a href="https://www.linkedin.com/in/ichiro-beguas-a20717213/">
            <FaLinkedin/>
        </a>
    </div>
</div>

  )
}

export default Footer