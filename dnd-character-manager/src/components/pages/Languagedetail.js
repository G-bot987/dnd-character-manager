import React from "react";
import { useState, useEffect } from "react";
import "./languagedetails.css";
import Dialects from "./Dialects.js";

export default function Languagedetail({
  inflection,
  spoken,
  written,
  proficiency,
  dialect,
  key,
}) {
  const [skillsSelected, setSkillsSelected] = useState(() => {
    const saved = localStorage.getItem(proficiency);
    const initialValue = JSON.parse(saved);
    console.log("int", saved);
    return initialValue || false;
  });

  useEffect(() => {
    // storing selected language
    localStorage.setItem(proficiency, JSON.stringify(skillsSelected));
  }, [skillsSelected]);

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
            <li className="language-details-list-item">
              proficiency
              <div
                id={proficiency}
                onClick={() => setSkillsSelected(!skillsSelected)}
                className="language-detail-dot"
                style={{
                  backgroundColor: skillsSelected ? "red" : "",
                  transition: "transform 150ms ease",
                }}
              ></div>
            </li>
            <li className="language-details-list-item">
              inflection {inflection}
              <div
                id={inflection}
                onClick={() => setSkillsSelected(!skillsSelected)}
                className="language-detail-inflection-dot"
                style={{
                  backgroundColor: skillsSelected ? "red" : "",
                  transition: "transform 150ms ease",
                }}
              ></div>
            </li>
          </ul>
        </div>
        <div className="row-language-details">
          <ul className="language-details-list-2">
            <li className="language-details-list-item">
              {" "}
              spoken {spoken}
              <div
                id={spoken}
                onClick={() => setSkillsSelected(!skillsSelected)}
                className="language-detail-dot"
                style={{
                  backgroundColor: skillsSelected ? "red" : "",
                  transition: "transform 150ms ease",
                }}
              ></div>
            </li>
            <li className="language-details-list-item">
              {" "}
              written{written}
              <div
                id={written}
                onClick={() => setSkillsSelected(!skillsSelected)}
                className="language-detail-written-dot"
                style={{
                  backgroundColor: skillsSelected ? "red" : "",
                  transition: "transform 150ms ease",
                }}
              ></div>
            </li>
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
        onClick={() => setSkillsSelected(!skillsSelected)}
      >
        <p className="add-language">add to my languages</p>
      </div>
    </div>
  );
}
