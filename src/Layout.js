import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import About from './About'
// import Home from './Home'
// import Resume from './Resume'
// import Contact from './Contact'
// import Projects from './Projects'

import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <Navbar/>
    {/* <Home/>
    <About/>
    <Projects/>
    <Resume/>
    <Contact/> */}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout