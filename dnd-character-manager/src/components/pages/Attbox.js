import React from "react";
import "./Attbox.css";
import Skills from "./Skills";

export default function Attbox({ character, template }) {
  console.log("this is character " + character);
  console.log("this is template attbox " + template);

  console.log("new stats ");
  return (
    <div className="attribute-container">
      <ul className="list-container">
        {template.map(({ attribute, skills }, index) => (
          <li className="attribute-box" id={index} key={attribute}>
            {attribute}
            {console.log("inside attbox attribute.skills " + JSON.stringify(skills))}
            <Skills skills={skills} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// {character.coreStats.map(({ attname, score }, index) => (
//   <li className="attribute-box" id={index} key={index}>
//     {attname} {score}

//   </li>
