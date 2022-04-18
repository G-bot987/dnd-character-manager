import React from "react";
import { useState } from "react";

export default function Proficiency({ proficiency }) {
  const [propertySelected, setpropertySelected] = useState(() => {});
  console.log(proficiency);
  return (
    <li className="language-details-list-item">
      {" "}
      proficiency{proficiency}
      <div
        id={proficiency}
        onClick={() => setpropertySelected(!propertySelected)}
        className="language-detail-written-dot"
        style={{
          backgroundColor: propertySelected ? "red" : "",
          transition: "transform 150ms ease",
        }}
      ></div>
    </li>
  );
}