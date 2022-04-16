import React from "react";
import { useState, useEffect } from "react";
import "./Skills.css";
import Languagedetail from "./Languagedetail";

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
        <li
          className="skill-box"
          onClick={() => setShow(!show)}
          id={index}
          key={index}
        >
          {language}
          {show ? (
            <Languagedetail language={language} inflection={inflection} />
          ) : null}
        </li>
      ))}
    </>
  );
}
