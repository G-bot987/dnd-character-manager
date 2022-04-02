import React from "react";
import "./Attbox.css";

export default function Attbox({ character }) {
  console.log('this is character ' +character);
  
  console.log('new stats ' )
  return (
    <div className="attribute-container">
      <ul>
        {character.coreStats.map(({ attname, score }, index) => (
          <li className="attribute-box" id={index} key={index}>
            {attname} {score}

           
          </li>
        ))}
      </ul>
    </div>
  );
}
