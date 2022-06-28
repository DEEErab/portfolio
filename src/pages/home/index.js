import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import About from "../../components/about";
import Tech from "../../components/tech";
import Work from "../../components/work";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import MobileMenu from "../../components/mobileMenu";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileMenu isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <About />
      <Tech />
      <Work />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
