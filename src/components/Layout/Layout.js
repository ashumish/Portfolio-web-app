import React, { Fragment } from "react";
import Header from "../header/Header";
import HeroSection from "../hero-section/HeroSection";
import About from "../about/About";
import Services from "../services/Services";
import Experience from "../experience/Experience";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <div>
      <Fragment>
        <Header />
        <HeroSection />
        <About />
        <Experience />
        <Portfolio />
        <Services />
        <Contact />
        <Footer />
      </Fragment>
    </div>
  );
};

export default Layout;
