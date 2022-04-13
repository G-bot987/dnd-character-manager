import React from "react";
import { useState } from "react";
import "./Skills.css";
const { stringify } = require("flatted");

export default function Skills({ skills }) {
  const [show, setShow] = useState(false);
  const selectedSkill = {
    deception: false,
    intimation: false,
    performance: false,
    persuasion: false,
  };
  const [skillsSelected, setSkillsSelected] = useState(false);
  const updateSelectedSkills = (skillname) => {
    console.log("this is id" + JSON.stringify(skillname));

    // const selection = { ...skillsSelected };
    // selection[skillname] = !selection[skillname];
    // setSkillsSelected({ ...selection });
  };

  // function displaySkills(click) {
  //   click.preventDefault();
  //   click.stopPropagation();
  //   click.nativeEvent.stopImmediatePropagation();
  //   console.log("was clicked");
  //   setShow(!show);
  // }

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
            {skills.map(({ skillname, poweringatt }, index) => (
              <li className="skill-box" id={index} key={index}>
                <p>{skillname}</p>
                <div
                  onClick={() => setSkillsSelected(!skillsSelected)}
                  id={skillname}
                  className="dot"
                  style={{
                    backgroundColor: skillsSelected ? "red" : "",
                    transition: "transform 150ms ease",
                  }}
                ></div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    )
  );
}
