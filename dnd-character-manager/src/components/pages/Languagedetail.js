import React from "react";
import { useState, useEffect } from "react";
import "./languagedetails.css";
import Dialects from "./Dialects.js";
import Written from "./WrittenLanguageDetails";
import Spoken from "./SpokenLanguageDetails";
import Proficiency from "./ProficiencyLanguageDetails";
import Infection from "./InflectionLanguageDetails";
export default function Languagedetail({
  inflection,
  spoken,
  written,
  proficiency,
  dialect,
  key,
}) {
  const [propertySelected, setpropertySelected] = useState(() => {
    // const saved = localStorage.getItem(proficiency);
    // const initialValue = JSON.parse(saved);
    // console.log("int", saved);
    // return initialValue || false;
  });

  const [show, setShow] = useState(false);
  if (dialect === undefined) {
    dialect = [];
  } else {
  }
  return (
    <div className="language-detail-box" key={key}>
      <div className="first-row">
        <div className="row-language-details">
          <ul className="language-details-list">
            <Proficiency />
            <Infection />
          </ul>
        </div>
        <div className="row-language-details">
          <ul className="language-details-list-2">
            <Spoken spoken={spoken} />
            <Written written={written} />
          </ul>
        </div>
      </div>
      {dialect.length > 0 && (
        <div className="dialect-dropdown">
          <div
            className="click-container-dialects"
            onClick={() => setShow(!show)}
          >
            <div
              className="dialects-arrow-container"
              style={{
                marginTop: show ? "0.3rem " : "",
              }}
            >
              <div
                className="dialects-arrow-down"
                style={{
                  transform: show ? "rotate(225deg)" : "",
                  transition: "transform 150ms ease",
                }}
              ></div>
            </div>
            dialects
            <div
              className="dialects-arrow-container"
              style={{
                marginTop: show ? "0.3rem " : "",
              }}
            >
              <div
                className="dialects-arrow-down"
                style={{
                  transform: show ? "rotate(225deg)" : "",
                  transition: "transform 150ms ease",
                }}
              ></div>
            </div>
          </div>
          {show ? (
            <div>
              {dialect.map((version, index) => (
                <ul className="dialects-list" key={index}>
                  <Dialects version={version} index={index} />
                </ul>
              ))}
            </div>
          ) : null}
        </div>
      )}
      <div
        className="add-language-click-container"
        onClick={() => setpropertySelected(!propertySelected)}
      >
        <p className="add-language">add to my languages</p>
      </div>
    </div>
  );
}
