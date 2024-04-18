
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Contacts from './components/Contacts';
import Works from './components/Works'
import Experience from './components/Experience'
import Footer from './components/Footer'
import About from './components/About';
import Hero from './components/Hero';




function App() {
  return (
    <div className='font-mono bg-customBGgray'>
    <Navbar />     
    <About/>  
    <Hero/>
    <Experience/>
    <Works/>
    <Contacts/>
    <Footer/>
  </div>
  );
}

export default App;
