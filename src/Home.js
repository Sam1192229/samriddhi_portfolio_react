import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo7.jpeg';
import Type from './Type';
import Particle from './components/Particles';
import About from './About';
import Project from './Projects';
import Contact from './Contact';
import Skills from './Skills';

const Home = () => {
  return (
    <div className='bg-gray-800 min-h-screen'>
      <div className='flex flex-col gap-32 px-4'>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-48 justify-center mt-24 items-center lg:items-start">
          <img src={logo} alt="hello" className='w-full max-w-xs lg:max-w-md border-teal-700 border-2 animate-fall3 rounded-xl' />
          <div className='flex flex-col gap-5 text-center lg:text-left items-center lg:items-start'>
            <Particle id="tsparticles" />
            <div className='flex flex-col gap-1'>
              <div className='text-teal-500 text-4xl font-bold font-mono animate-fall'>
                Hey
              </div>
              <h2 className='text-teal-500 text-4xl font-bold font-mono animate-fall2'>
                I am Samriddhi Mishra 👋🏻
              </h2>
            </div>
            <p className='text-gray-300 font-bold text-2xl'>
              <Type />
            </p>
            <p className='text-gray-300 text-base lg:text-lg leading-relaxed lg:leading-loose indent-6'>
              I am a final-year B.Tech Computer Science student at IIEST Shibpur, My projects and experience reflects my passion for coding and developing something unique. I am into Web2 Full Stack Development and Competitive Coding. Take a look—I promise you'll find something impressive.
            </p>
            <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
              <Link to='/resume'>
                <button className='border-2 border-gray-500 p-2 rounded-lg text-gray-200 transition ease-in-out delay-150 bg-gray-800 hover:-translate-y-1 hover:scale-110 hover:bg-teal-500 duration-300 hover:text-white'>Resume</button>
              </Link>
              <Link to='/projects'>
                <button className='border-2 border-gray-500 p-2 rounded-lg text-gray-200 transition ease-in-out delay-150 bg-gray-800 hover:-translate-y-1 hover:scale-110 hover:bg-teal-500 duration-300 hover:text-white'>Projects</button>
              </Link>
            </div>
          </div>
        </div>

        <Skills />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default Home;
