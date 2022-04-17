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
      {mylanguage.map(({ language, inflection }, index) => (
        <div className="language-box">
          <ul className="language-title">
            <li onClick={() => setShow(!show)} id={index} key={index}>
              {language}
            </li>
          </ul>
          {show ? (
            <Languagedetail language={language} inflection={inflection} />
          ) : null}
        </div>
      ))}
    </>
  );
}
