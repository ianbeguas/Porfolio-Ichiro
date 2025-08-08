
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Contacts from './components/Contacts';
import Experience from './components/Experience'; 
import Footer from './components/Footer';
import About from './components/About';
import Hero from './components/Hero';
import Exp from './components/Exp';
import Services from './components/Services';
import ProgrammingLanguages from './components/ProgrammingLanguages'


function App() {
  return (
    <div className='font-mono bg-customBGgray'>
    <meta name="google-site-verification" content="jztEmNtoTFFvSWe_K6oFCQHo4jRCVgOuy9DHRbwYAIc" />
    <Navbar />     
    <About/>  
    <Hero/>
    <Services/>
    <Experience/>
    <ProgrammingLanguages/> 
    <Exp/>
    {/* <Contacts/>  */}
    <Footer/>
  </div>
  );
}
export default App;
