import React from "react";
import { NavLink } from "react-router-dom";
import "./WorkCardStyles.css";

const ExperienceCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt={props.title} />
      <h2 className="project-title" style={{ textAlign: "center" }}>
        {props.title}
      </h2>
      <p style={{ marginTop: 8, marginBottom: 14 }}>{props.timeline}</p>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn" target="_blank">
            View
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
