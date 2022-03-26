import React from "react";
import "./Attbox.css";

export default function Attbox({ attributeInformation }) {
  console.log(attributeInformation);
  return (
    <div className="attribute-container">
      <ul>
        {attributeInformation.map(({ attname, score }, index) => (
          <li className="attribute-box" id={index} key={index}>
            {attname} {score}
          </li>
        ))}
      </ul>
    </div>
  );
}
