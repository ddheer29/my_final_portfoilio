import React from "react";
import ExperienceCardData from "./ExperienceCardData";
import "./WorkCardStyles.css";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="work-conatiner">
      <h1 className="project-heading">Experience</h1>
      <div className="project-container">
        {ExperienceCardData.map((val, ind) => {
          return (
            <ExperienceCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              timeline={val.timeline}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
