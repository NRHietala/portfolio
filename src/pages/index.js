import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/NavBar";
import HeroSection from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

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
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
