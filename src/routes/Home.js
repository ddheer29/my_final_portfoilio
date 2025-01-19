import React from "react";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";
import Navbar from "../components/Navbar";
import Work from "../components/Work";
import Experience from "../components/Experience";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Work />
      <Experience />
      <Footer />
    </div>
  );
};

export default Home;
