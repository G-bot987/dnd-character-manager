import React from "react";
import { useState, useEffect } from "react";
import "./languagedetails.css";

export default function Languagedetail({ language, inflection }) {
  console.log(inflection);
  return (
    <div className="language-detail-box">
      <div className="row-language-details">
        <ul className="language-details-list">
          <li className="language-details-list-item">
            {language} {inflection}
          </li>
          <li className="language-details-list-item">{language}</li>
        </ul>
      </div>
      <div className="row-language-details">
        <ul className="language-details-list">
          <li className="language-details-list-item">
            {language} {inflection}
          </li>
          <li className="language-details-list-item">{language}</li>
        </ul>
      </div>
    </div>
  );
}
