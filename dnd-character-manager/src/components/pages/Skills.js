import React from "react";
import { useState } from "react";
import "./Skills.css";

export default function Skills({ skills }) {
  const [show, setShow] = useState(false);
  return (
    skills.length > 0 && (
      <div>
        <div className="cirlce">
          <div className="skill-arrow" onClick={() => setShow(!show)}></div>
        </div>
        {show ? (
          <ul className="skill-list">
            <p>skills</p>
            {skills.map(({ skillname, poweringatt }, index) => (
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
