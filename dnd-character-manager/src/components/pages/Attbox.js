import React from "react";
import { useState } from "react";
import "./Attbox.css";
import Skills from "./Skills";

export default function Attbox({ character, template }) {
  console.log("this is character " + character);
  console.log("this is template attbox " + template);

  const [show, setShow] = useState(false);

  console.log("new stats ");
  return (
    <div className="attribute-container">
      <div>
        <div className="attribute-arrow" onClick={() => setShow(!show)}></div>
      </div>
      {show ? (
        <ul className="list-container">
          {template.map(({ attribute, skills }, index) => (
            <div className="attribute-skill-container">
              <li className="attribute-box" id={index} key={attribute}>
                {attribute}
                {console.log(
                  "inside attbox attribute.skills " + JSON.stringify(skills)
                )}
              </li>
              <Skills skills={skills} />
            </div>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

// {character.coreStats.map(({ attname, score }, index) => (
//   <li className="attribute-box" id={index} key={index}>
//     {attname} {score}

//   </li>
