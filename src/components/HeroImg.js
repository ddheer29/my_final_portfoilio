import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../assets/1271533.jpg";
import { Link } from "react-router-dom";
import Resume from "../assets/Divyang Dheer EuroPass CV.pdf";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M DIVYANG DHEER</p>
        <h1>REACT NATIVE DEVELOPER.</h1>
        <Link to="/project" className="btn">
          Projects
        </Link>
        <a
          href={Resume}
          className="btn btn-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          MY RESUME
        </a>
      </div>
    </div>
  );
};

export default HeroImg;
