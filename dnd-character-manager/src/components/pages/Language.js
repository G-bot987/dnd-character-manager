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
  const [show, setShow] = useState(false);
  const mylanguage = [];
  mylanguage.push(language);

  return (
    <>
      {mylanguage.map(
        (
          { language, inflection, spoken, written, proficiency, dialect },
          index
        ) => (
          <div className="language-box" key={index}>
            <ul className="language-title">
              <li>
                <div onClick={() => setShow(!show)} id={index} key={index} className="click-container">
                  <div className="arrow-container">
                    <div
                      className="language-detail-arrow-down"
                      style={{
                        transform: show ? "rotate(225deg)" : "",
                        transition: "transform 150ms ease",
                      }}
                    ></div>
                  </div>
                  {language}
                  <div className="arrow-container">
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
                    inflection={inflection}
                    spoken={spoken}
                    written={written}
                    proficiency={proficiency}
                    dialect={dialect}
                  />
                ) : null}
              </li>
            </ul>
          </div>
        )
      )}
    </>
  );
}
