import React from "react";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";
import WorkExperience from "../components/Experience";

const Experience = () => {
  return (
    <>
      <Navbar />
      <HeroImg2
        heading="ExperienceS"
        text="My Experience in product ready project"
      />
      <WorkExperience />
      <Footer />
    </>
  );
};

export default Experience;
