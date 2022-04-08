import React from "react";
import "./Skills.css";
export default function Skills({ skills }) {
  console.log("skills comp " + JSON.stringify(skills));

  // sort skills alphabetically
  const sorted = skills.sort((a, b) => a.skillname.localeCompare(b.skillname));
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
