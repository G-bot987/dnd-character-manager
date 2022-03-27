import React from "react";
import "./Skillspg.css";
export default function Skillspg({ skillsTemplate }) {
  console.log("skills " + JSON.stringify(skillsTemplate));
  return (
    <div className="skill-container">
      <ul>
        {skillsTemplate.skills.map(({ skillname }, index) => (
          <li className="skill-box" id={index} key={index}>
            {skillname}
          </li>
        ))}
      </ul>
    </div>
  );
}
