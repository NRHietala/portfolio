import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/NavBar";
import HeroSection from "../components/Hero";
import Info from "../components/Info";
import Services from "../components/Services";
import Footer from "../components/Footer";
import About from "../components/About";
import Skills from "../components/Skills";
import { HomeObjFour } from "../components/Info/Data";

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
      <Skills />
      <Services />
      <Info {...HomeObjFour} />
      <Footer />
    </>
  );
};

export default Home;
