import React from "react";

export default function Attbox({ attributeInformation }) {
  console.log(attributeInformation);
  return (
    <div className="attribute-container">
      i am attribute-container
      <ul>
        {attributeInformation.map(({ attname }, index) => (
          <li className="list-group-item" key={index}>
            {index}
          </li>
        ))}
      </ul>
      <div className="attribute-box">
        <div className="attribute-display">
          <div className="modifer-display"></div>
        </div>
      </div>
    </div>
  );
}
