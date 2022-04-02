import React from "react";
import "./Skillspg.css";
export default function Skillspg({ skillsTemplate }) {
  console.log("skills " + JSON.stringify(skillsTemplate));
  return (
    <div className="skill-container">
      <ul>
        {skillsTemplate.skills.map(({ skillname }, index) => (
          <li className="skill-box" id={index} key={index}>
            <p>{skillname}</p>

            <span className="dot"></span>
          </li>
        ))}
      </ul>
    </div>
  );
}
