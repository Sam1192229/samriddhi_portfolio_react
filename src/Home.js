import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo7.jpeg';
import Type from './Type';
import Particle from './components/Particles';
//import { useEffect, useState } from 'react';
import About from './About'
import Project from './Projects'
import Contact from './Contact'
import Skills from './Skills';
//import Lottie from "lottie-react";
//import animationData from './json/hello.json';
//import animationData2 from './json/load.json';




const Home = () => {

  // const [load, setload] = useState(false)
  // useEffect(() => {
  //   setload(true)
  //   setTimeout(() => {
  //     setload(false);
  //   }, 2000);
  // },[setload]);
  return (
    // load?
    // <>
  
    // <div className=' bg-gray-800 flex gap-0 justify-center h-screen '>
    //   <div className='w-1/5 h-auto'>
    // <Lottie  animationData={animationData.animationData} />
    // {/* <Lottie  animationData={animationData2.animationData2} /> Accessing the animationData property */}

    // </div>
    // </div>
    // </>
    // :
    
    <div className='bg-gray-800'>
    <div className='flex flex-col gap-32'>

      <div className="bg-gray-800 flex md:flex-row gap-48 justify-center mt-24">
        <img src={logo} alt="hello" className='h-3/5 w-2/5 ml-16  border-teal-700 border-2  animate-fall3 rounded-xl' />
        <div className='flex flex-col gap-5 '>
          <Particle id="tsparticles" />
          <div className='flex flex-col gap-1'>
            <div className='text-teal-500 text-4xl font-bold font-mono animate-fall '>
Hey
            </div>
            <h2 className='text-teal-500 text-4xl font-bold font-mono animate-fall2 mr-0'>I am Samriddhi Mishra 👋🏻
           
            </h2>
          
          </div>
          <p className='text-gray-300 font-bold text-2xl text-nowrap '>
            <Type />
          </p>
          <p className='text-balance text-gray-300  indent-6 mr-32'>I am a final-year B.Tech Computer Science student at IIEST Shibpur, My projects and experience reflects my passion for coding and developing something unique. I am into Web2 Full Stack Development and Competitive Coding. Take a look—I promise you'll find something impressive.</p>
          <div className='flex md:flex-row gap-8'>
            <Link to='/resume'>
              <button className='border-2 border-gray-500 p-2 rounded-lg text-gray-200 transition ease-in-out delay-150 bg-gray-800 hover:-translate-y-1 hover:scale-110 hover:bg-teal-500 duration-300 hover:text-white'>Resume</button>
            </Link>
            <Link to='/projects'>
              <button className='border-2 border-gray-500 p-2 rounded-lg text-gray-200 transition ease-in-out delay-150 bg-gray-800 hover:-translate-y-1 hover:scale-110 hover:bg-teal-500 duration-300 hover:text-white'>Projects</button>
            </Link>
          </div>
        </div>
      </div>


      <Skills/>

      {/* <About/> */}
      <Project/>
      <Contact/>
      </div>
    </div>
  );
}

export default Home;
