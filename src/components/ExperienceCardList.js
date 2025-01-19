import React from "react";
import ExperienceCard from "./ExperienceCard";
import ExperienceCardData from "./ExperienceCardData";

const ExperienceCardList = () => {
  return (
    <div className="experience-card-list">
      {ExperienceCardData.map((experience, index) => (
        <ExperienceCard
          key={index}
          imgsrc={experience.imgsrc}
          title={experience.title}
          text={experience.text}
          view={experience.view}
        />
      ))}
    </div>
  );
};

export default ExperienceCardList;
