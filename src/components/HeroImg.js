import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../assets/1271533.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={IntroImg} alt="IntroImg" />
            </div>
            <div className="content">
                <p>HI, I'M DIVYANG DHEER</p>
                <h1>REACT NATIVE DEVELOPER.</h1>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    )
}

export default HeroImg