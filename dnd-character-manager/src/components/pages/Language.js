import React from "react";
import { useState, useEffect } from "react";
import "./Skills.css";
import Languagedetail from "./Languagedetail";

export default function Language({ language }) {
  const [skillsSelected, setSkillsSelected] = useState(() => {
    const saved = localStorage.getItem(language);
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });

  useEffect(() => {
    // storing selected language
    localStorage.setItem(language, JSON.stringify(skillsSelected));
  }, [skillsSelected]);

  const mylanguage = [];
  mylanguage.push(language);

  return (
    <>
      {mylanguage.map(({ language }, index) => (
        <li className="skill-box" id={index} key={index}>
          {language}
          <Languagedetail language={language} />
        </li>
      ))}
    </>
  );
}
