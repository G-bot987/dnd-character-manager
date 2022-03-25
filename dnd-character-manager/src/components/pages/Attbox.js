import React from "react";

export default function Attbox({ attributeInformation }) {
  console.log(attributeInformation);
  return (
    <div className="attribute-container">
      i am attribute-container
      {attributeInformation.map(({ attname }, index) => (
        <ul>
          <li className="list-group-item" id={index} key={index}>
        {attname}</li>
        </ul>
      ))}
      <div className="attribute-box">
        <div className="attribute-display">
          <div className="modifer-display"></div>
        </div>
      </div>
    </div>
  );
}
