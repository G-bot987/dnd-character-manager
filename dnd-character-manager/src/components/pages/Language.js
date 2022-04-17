import React from "react";
import { useState, useEffect } from "react";
import Languagedetail from "./Languagedetail";
import "./language.css";

export default function Language({ language }) {
  // const [skillsSelected, setSkillsSelected] = useState(() => {
  //   const saved = localStorage.getItem(language);
  //   const initialValue = JSON.parse(saved);
  //   return initialValue || false;
  // });

  // useEffect(() => {
  //   // storing selected language
  //   localStorage.setItem(language, JSON.stringify(skillsSelected));
  // }, [skillsSelected]);
  console.log(language);
  const [show, setShow] = useState(false);

  return (
    <>
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
              <Languagedetail
                language={language}
                inflection={language.inflection}
                spoken={language.spoken}
                written={language.written}
                proficiency={language.proficiency}
                dialect={language.dialect}
                key={language.key}
              />
            ) : null}
          </li>
        </ul>
      </div>
    </>
  );
}
