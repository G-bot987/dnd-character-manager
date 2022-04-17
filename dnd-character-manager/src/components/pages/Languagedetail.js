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
              proficiency{proficiency}
            </li>
            <li className="language-details-list-item">
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
                <ul key={index}>
                  <Dialects version={version} index={index} />
                </ul>
              ))}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
