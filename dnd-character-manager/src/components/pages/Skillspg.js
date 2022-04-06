import React from "react";
import "./Skillspg.css";
export default function Skillspg({ skillsTemplate }) {
  console.log("skills " + JSON.stringify(skillsTemplate));
  // sort skills by powering attribute
  const sorted = skillsTemplate.skills.sort((a, b) =>
    a.poweringatt.localeCompare(b.poweringatt)
  );
  console.log("sorted " + JSON.stringify(sorted));

  return (
    <div className="skill-container">
      <ul>
        {sorted.map(({ skillname, poweringatt }, index) => (
          <li className="skill-box" id={index} key={index}>
            <p>{skillname}</p>
            <span className="dot"></span>
          </li>
        ))}
      </ul>
    </div>
  );
}
