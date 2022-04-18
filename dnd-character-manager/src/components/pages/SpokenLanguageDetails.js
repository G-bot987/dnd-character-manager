import React from "react";
import { useState } from "react";

export default function Spoken({ spoken }) {
  const [propertySelected, setpropertySelected] = useState(() => {});
  console.log(spoken);
  return (
    <li className="language-details-list-item">
      {" "}
      Spoken{spoken}
      <div
        id={spoken}
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
