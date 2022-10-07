import React, { Fragment } from 'react'
import Header from '../header/Header'
import HeroSection from '../hero-section/HeroSection'
import About from '../about/About'
import Services from '../services/Services'
import Experience from '../experience/Experience'
const Layout = () => {
  return (
    <div>
        <Fragment>
            <Header/>
            <HeroSection/>
            <About/>
            <Services/>
            <Experience/>
        </Fragment>
    </div>
  )
}

export default Layout