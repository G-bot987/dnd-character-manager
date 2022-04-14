import React from "react";
import { useState } from "react";
import "./Skills.css";
import Skill from "./Skill";

export default function Skills({ skills }) {
  const [show, setShow] = useState(false);

  return (
    skills.length > 0 && (
      <div>
        <div className="cirlce">
          <div
            className="skill-arrow"
            onClick={() => setShow(!show)}
            style={{
              transform: show ? "rotate(225deg)" : "",
              transition: "transform 150ms ease",
            }}
          ></div>
        </div>
        {show ? (
          <ul className="skill-list">
            <p>skills</p>
            {skills.map(({ name, poweringatt }, index) => (
              <li className="skill-box" id={index} key={index}>
                <Skill name={name} />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    )
  );
}
