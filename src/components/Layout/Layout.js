import React, { Fragment } from 'react'
import Header from '../header/Header'
import HeroSection from '../hero-section/HeroSection'
import About from '../about/About'
const Layout = () => {
  return (
    <div>
        <Fragment>
            <Header/>
            <HeroSection/>
            <About/>
        </Fragment>
    </div>
  )
}

export default Layout