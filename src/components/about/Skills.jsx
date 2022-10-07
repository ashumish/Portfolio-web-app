import React from "react";
import "./skills.css";
const Skills = () => {
  const frontendSkills = [
    {
      title: "javaScript",

      percentage: "75%",
    },
    {
      title: "React.js",

      percentage: "85%",
    },
    {
      title: "Redux",

      percentage: "70%",
    },
    {
      title: "HTML & CSS",

      percentage: "80%",
    },
  ];
  const devopsSkills = [
    {
      title: "AWS Cloud ",

      percentage: "82%",
    },
    {
      title: "Docker",

      percentage: "70%",
    },
  ];
  return (
    <div className="skills__wrapper d-flex gap-5">
      <div className="frontend__skills w-50">
        {frontendSkills.map((item, index) => (
          <SkillItem
            key={index}
            title={item.title}
            percentage={item.percentage}
          />
        ))}
      </div>
      <div className="devops__skills w-50">
        {devopsSkills.map((item, index) => (
          <SkillItem
            key={index}
            title={item.title}
            percentage={item.percentage}
          />
        ))}
      </div>
    </div>
  );
};
const SkillItem = ({ title, percentage }) => {
  return (
    <div className="skill__data mb-3">
      <div className="skill__title d-flex align-items-center justify-content-between">
        <h6>{title}</h6>
        <span>{percentage}</span>
      </div>
      <div className="skill__bar">
        <span
          className="skill__bar-percentage"
          style={{ width: `${percentage}` }}
        ></span>
      </div>
    </div>
  );
};
export default Skills;
