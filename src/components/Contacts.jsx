import React from 'react';


const Contacts = () => {
  return (
    <div className="flex justify-center items-center bg-customBGgray" id='contact'>
      <div className='max-w-[1200px] mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-around">
            <h1 className='text-4xl sm:text-5xl text-white'>
              Contact Me
            </h1>
            <p className='text-normal text-lg font-medium text-gray-400 mt-2'>
              Let's connect on facebook <br /> or send me an email
            </p>
            <div className="flex items-center mt-2 text-gray-400">

              <div className='ml-4 text-md tracking-wide font-semibold w-40'>
                <p>Ichiro Beguas</p>
              </div>
            </div>
          </div>
            <form action="https://getform.io/f/ebpdpwgb" method='post' className='p-6 flex flex-col justify-center max-w-[700px]'>
              <div className="flex flex-col">
                <input type="name" name='name' id='name' placeholder='fullname' className='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border-gray-700 text-white' />
              </div>
              <div className="flex flex-col mt-2">
                <input type="email" name='email' id='email' placeholder='Email' className='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border-gray-700 text-white' />
              </div>
              <div className="flex flex-col mt-2">
                <textarea type="message" name='message' id='message' placeholder='Your message' className='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border-gray-700 text-white' />
              </div>
              <button type='submit' className='bg-blue-500 text-white py-3 px-6 rounded-lg mt-3'>
                Submit
              </button>
            </form>


        </div>
      </div>
    </div>
  );
};

export default Contacts;
