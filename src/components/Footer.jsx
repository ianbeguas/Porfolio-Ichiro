import React from 'react'
import { FaGithubSquare, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='mt-2 w-max[800px] border-t border-gray-500 text-center'>
    <p className='my-5 text-gray-500'>Pangasinan <br /> Philippines </p>
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
       
    </div>
</div>

  )
}

export default Footer