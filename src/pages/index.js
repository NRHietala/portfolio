import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/NavBar";
import HeroSection from "../components/Hero";
import Info from "../components/Info";
import Services from "../components/Services";
import Footer from "../components/Footer";
import About from "../components/About";
import {
  HomeObjTwo,
  // HomeObjThree,
  HomeObjFour,
} from "../components/Info/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
      <Navbar toggleMenu={toggleMenu} />
      <HeroSection />
      <About />
      <Info {...HomeObjTwo} />
      <Services />
      {/* new component about skills */}
      {/* <Info {...HomeObjThree} /> */}
      <Info {...HomeObjFour} />

      {/* use services comp for projects */}
      {/* Add Contact Comp at the bottom */}
      <Footer />
    </>
  );
};

export default Home;
