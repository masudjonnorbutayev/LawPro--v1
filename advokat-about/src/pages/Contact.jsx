import React from "react";
import Footer from "../sections/Footer";
import Help from "../sections/Help";
import HeroContact from "../sections/Herocontact";
import Navbar from "../sections/Navbar";
import Tagline from "../sections/Tagline";

const Contact = () => {
  return (
    <>
      <div className="about__navbar-hero">
        <Navbar></Navbar>
        <HeroContact></HeroContact>
      </div>

      <div className="kl">
        <Help></Help>
        <Footer></Footer>
      </div>
      <Tagline></Tagline>
    </>
  );
};

export default Contact;
