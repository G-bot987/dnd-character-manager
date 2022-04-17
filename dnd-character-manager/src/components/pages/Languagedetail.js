import React from "react";
import { useState, useEffect } from "react";
import "./languagedetails.css";

export default function Languagedetail({
  language,
  inflection,
  spoken,
  written,
  proficiency,
  dialect,
}) {
  console.log(dialect);
  return (
    <div className="language-detail-box">
      <div className="row-language-details">
        <ul className="language-details-list">
          <li className="language-details-list-item">
            proficiency{proficiency}
          </li>
          <li className="language-details-list-item">
            {" "}
            inflection {inflection}
          </li>
        </ul>
      </div>
      <div className="row-language-details">
        <ul className="language-details-list">
          <li className="language-details-list-item"> spoken {spoken}</li>
          <li className="language-details-list-item"> written{written}</li>
        </ul>
      </div>
    </div>
  );
}
