import React from "react";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Help from "./sections/Help";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Tagline from "./sections/Tagline";
import Team from "./sections/Team";
import Herocontact from "./sections/Herocontact";

const App = () => {
  return (
    <>
      <div className="about__navbar-hero">
        <Navbar></Navbar>
        <Herocontact></Herocontact>
      </div>
      {/* <About></About>
      <Team></Team> */}
      <div className="kl">
        <Help></Help>
        <Footer></Footer>
      </div>
      <Tagline></Tagline>
    </>
  );
};

export default App;
