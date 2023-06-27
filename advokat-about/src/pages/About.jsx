import React from "react";

import Footer from "../sections/Footer";
import Help from "../sections/Help";
import Hero from "../sections/Hero";

import Navbar from "../sections/Navbar";
import Tagline from "../sections/Tagline";
import Team from "../sections/Team";

const About = () => {
  return (
    <>
      <div className="about__navbar-hero">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      <About></About>
      <Team></Team>
      <div className="kl">
        <Help></Help>
        <Footer></Footer>
      </div>
      <Tagline></Tagline>
    </>
  );
};

export default About;
