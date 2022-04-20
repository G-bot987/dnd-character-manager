import React from "react";
import { useState, useEffect } from "react";
import LanguageNoDialectsDetails from "./LanguageNoDialectsDetails";
import LanguageWithDialect from "./LanguageWithDialect";
import "./language.css";

export default function Language({ language }) {
  const [show, setShow] = useState(false);

  if (!language.dialect) {
    return (
      <div className="language-box">
        <ul className="language-title">
          <li>
            <div onClick={() => setShow(!show)} className="click-container">
              <div
                className="arrow-container"
                style={{
                  marginTop: show ? "0.3rem " : "",
                }}
              >
                <div
                  className="language-detail-arrow-down"
                  style={{
                    transform: show ? "rotate(225deg)" : "",
                    transition: "transform 150ms ease",
                  }}
                ></div>
              </div>
              {language.language}
              <div
                className="arrow-container"
                style={{
                  marginTop: show ? "0.3rem " : "",
                }}
              >
                <div
                  className="language-detail-arrow-down"
                  style={{
                    transform: show ? "rotate(225deg)" : "",
                    transition: "transform 150ms ease",
                  }}
                ></div>
              </div>
            </div>
            {show ? <LanguageNoDialectsDetails language={language} /> : null}
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="language-box">
      <ul className="language-title">
        <li>
          <div onClick={() => setShow(!show)} className="click-container">
            <div
              className="arrow-container"
              style={{
                marginTop: show ? "0.3rem " : "",
              }}
            >
              <div
                className="language-detail-arrow-down"
                style={{
                  transform: show ? "rotate(225deg)" : "",
                  transition: "transform 150ms ease",
                }}
              ></div>
            </div>
            {language.language}
            <div
              className="arrow-container"
              style={{
                marginTop: show ? "0.3rem " : "",
              }}
            >
              <div
                className="language-detail-arrow-down"
                style={{
                  transform: show ? "rotate(225deg)" : "",
                  transition: "transform 150ms ease",
                }}
              ></div>
            </div>
          </div>
          {show ? (
            <div>
              {language.dialect.map((dialect, index) => (
                <ul className="dialects-list" key={index}>
                  <LanguageWithDialect dialect={dialect} index={index} />
                </ul>
              ))}
            </div>
          ) : // <LanguageWithDialect language={language} />

          null}
        </li>
      </ul>
    </div>
  );
}
