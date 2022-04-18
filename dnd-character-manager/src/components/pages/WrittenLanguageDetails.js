import React from "react";
import { useState } from "react";

export default function Written({ written }) {
  const [propertySelected, setpropertySelected] = useState(() => {

  });
  console.log(written);
  return (
    <li className="language-details-list-item">
      {" "}
      written{written}
      <div
        id={written}
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
