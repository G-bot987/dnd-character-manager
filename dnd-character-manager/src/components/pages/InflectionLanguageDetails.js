import React from "react";
import { useState } from "react";

export default function Infection({ inflection }) {
  const [propertySelected, setpropertySelected] = useState(() => {});
  console.log(inflection);
  return (
    <li className="language-details-list-item">
      {" "}
      inflection{inflection}
      <div
        id={inflection}
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