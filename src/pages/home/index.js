import React from "react";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import About from "../../components/about";
import Tech from "../../components/tech";
import Work from "../../components/work";
import Contact from "../../components/contact";
import Footer from "../../components/footer";

const Home = () => {
  return (
    <>
      <Navbar />
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
