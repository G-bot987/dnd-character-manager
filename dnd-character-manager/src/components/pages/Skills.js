import React from "react";
import { useState } from "react";
import "./Skills.css";

export default function Skills({ skills }) {
  console.log("skills comp " + JSON.stringify(skills));

  // sort skills alphabetically
  const sorted = skills.sort((a, b) => a.skillname.localeCompare(b.skillname));
  console.log("sorted " + JSON.stringify(sorted));
  const [show, setShow] = useState(false);
  return (
    sorted.length > 0 && (
      <div>
        <div className="cirlce">
          <div className="skill-arrow" onClick={() => setShow(!show)}></div>
        </div>
        {show ? (
          <ul className="skill-list">
            <p>skills</p>
            {sorted.map(({ skillname, poweringatt }, index) => (
              <li className="skill-box" id={index} key={index}>
                <p>{skillname}</p>
                <span className="dot"></span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    )
  );
}
