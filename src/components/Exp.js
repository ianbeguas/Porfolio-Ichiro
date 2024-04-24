import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Exp = () => {
  const images = [
    {
      url: './assets/chev.png',
      title: 'Jake Sweeney',
      link: 'https://ianbeguas.github.io/IchiroPortfolio.github.io/'
    },
    {
      url: './assets/nis.png',
      title: 'Image 2',
      link: 'https://ianbeguas.github.io/IchiroNissan.github.io/'
    },
    // Add more images as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="container mx-auto mb-5 max-w-[1200px] px-4 md:px-8" id='projects'>
      <h1 className="text-3xl font-bold mb-4"> <span>Projects</span></h1>
      <div className='text-white mb-5'>
        <p>This is my latest project. View for more information...</p>
      </div>
      <div className="relative">
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={goToPrevSlide}
        >
          Prev
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={goToNextSlide}
        >
          Next
        </button>
        <Carousel showArrows={false} showThumbs={false} selectedItem={currentIndex}>
          {images.map((image, index) => (
            <div key={index} className="relative">
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <img src={image.url} alt={`Slide ${index}`} className="cursor-pointer rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-primary-color text-white px-4 py-2 rounded-lg hover:bg-blue-600" onClick={() => console.log(`Clicked view button ${index}`)}>View</button>
                </div>
              </a>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Exp;
