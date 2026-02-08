import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Exp';
import Services from './components/Services';
import ProgrammingLanguages from './components/ProgrammingLanguages';
import Experience from './components/Experience';

function App() {
  return (
    <div className='font-sans bg-customBGgray min-h-screen'>
      <Navbar />
      <About />
      <Hero />
      <Services />
      <ProgrammingLanguages />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
